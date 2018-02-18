module.exports = function(){
    var fs = this.lib.fs,
        Path = this.lib.Path,
        Random = this.lib.Random,
        request = this.lib.request;
    var Ip;
    var post = (file,next)=>{
        try{
            var body = fs.readFileSync(file);
        }catch (err){
            this.log(err.toString());
            return next();
        }
        var boundary = '----WebKitFormBoundary' + Random.uuid(16);
        var filename = Path.basename(file);
        var payload = [];
        var head = '--' + boundary + '\r\n'
        + 'Content-Disposition: form-data; name="newfile"; filename="' + filename + '"\r\n'
        + 'Content-Type: application/octet-stream\r\n'
        + '\r\n';
        var tail = '\r\n--' + boundary + '--';
        payload.push(new Buffer(head));
        payload.push(body);
        payload.push(new Buffer(tail));
        payload = Buffer.concat(payload);
        request.post(Ip)
        .setHeader('Content-Type', 'multipart/form-data; boundary=' + boundary)
        .send(payload)
        .end(err=>{
            if (err){
                console.log('连接已断开...');
                process.exit();
            }
            console.log(filename + " 上传成功");
            next();
        });
    }
    var formatIp = (ip,fn)=>{
        var regexp = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;
        var found = ip.match(regexp);
        if (!found){
            console.log("IP地址不正确");
            return getIP(fn);
        }
        Ip = 'http://' + found[0] + ':5299/upload';
        return fn();
    }
    var getIP = fn=>this.prompt(["请输入IP地址："],ip=>formatIp(ip,fn));

    this.sendToQQ = function (ip,Files){
        if (!ip) return this.prompt(["请输入IP地址："],ip=>this.sendToQQ(ip,Files));
        if (!Files){
            return this.prompt(["拖动文件到窗口："],dir=>{
                dir = dir.trim().replace(/^"/,'').replace(/"$/,'').replace(/\\ /gi,' ');
                if (dir == '') return process.exit();
                dir = Path.resolve(dir);
                var stat = fs.statSync(dir);
                if (stat.isDirectory()){
                    try{
                        var files = fs.readdirSync(dir).map(file=>Path.join(dir,file));
                        return this.sendToQQ(ip,files);
                    }catch (err){
                        return this.sendToQQ(ip,Files);
                    }
                }else{
                    return this.sendToQQ(ip,[dir]);
                }
            });
        }
        return formatIp(ip,()=>this.Thread().use(post).queue(Files).end(()=>this.end()).start());
    }
}