module.exports = {
  "infoPage": {
    "match": "!!$('#d_list').length || !!$('.dc_bar').length || !!$('#thread_list').length",
    "indexPage": "$.location()",
    "footer": "!!$('#footer_link').length || $('.dc_bar').length > 1 || !!$('#parkbo').length",
    "bookInfos": {
      "title": "'禁忌书屋'",
      "author": "'多人'",
      "classes": "'H小说'",
      "isend": "false",
      "cover": "'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'",
      "brief": ""
    }
  },
  "indexPage": {
    "match": "!!$('#d_list').length || !!$('.dc_bar').length || !!$('#thread_list').length",
    "infoPage": "$.location()",
    "footer": "!!$('#footer_link').length || $('.dc_bar').length > 1 || !!$('#parkbo').length",
    "bookIndexs": $=>{
        if($('#d_list').length){
            return $('li').filter((i,v)=>$(v).text().replace(/.*\((\d+) reads\).*/gi,'$1').trim() > 800).filter((i,v)=>$(v).text().replace(/.*\((\d+) bytes\).*/gi,'$1').trim() > 1000).find('a').filter((i,v)=>!$(v).text().match('无内容')).map((i,v)=>({href:$.location($(v).attr('href')),text:$(v).text(),id:$(v).attr('href').replace(/.*?tid=(\d+).*/gi,'$1')})).toArray()
        }
        if ($('.dc_bar').length){
            return $('.dc_bar').eq(1).find('li a').map((i,v)=>({href:$.location($(v).attr('href')),text:$(v).text(),id:$(v).attr('href').replace(/.*messages\/(\d+).html/gi,'$1')})).toArray()
        }
        if ($('#thread_list').length){
            return $('#thread_list a').map((i,v)=>({href:$.location($(v).attr('href')),text:$(v).text(),id:$(v).attr('href').replace(/.*?tid=(\d+).*/gi,'$1')})).toArray()
        }
    }
  },
  "contentPage": {
    "match": "!!$('.show_content').length || $.location().match(/messages\\/\\d+\\.html/)",
    "footer": "!!$('#myform').length || $.raw.match(/<\\/html>/i)",
    "chapterInfos": {
      /*"title": $=>{
        if($('.show_content').length){
          return $('meta[name="Description"]').attr('content');
        }
        if($.location().match(/messages\/\d+.html/i)){
          return $('title').text();
        }
      },*/
      "id": $=>{
        if($.location().match('tid=')){
          return $.location().replace(/.*?tid=(\d+).*/gi,'$1');
        }
        if($.location().match('messages')){
          return $.location().replace(/.*messages\/(\d+).html/gi,'$1');
        }
      },
      "source": "$.location()",
      "nextPages": "$('li').filter((i,v)=>$(v).text().replace(/.*\\((\\d+) bytes\\).*/gi,'$1').trim() > 1000).find('a').filter((i,v)=>!$(v).text().match('无内容')).map((i,v)=>({href:$.location($(v).attr('href')),text:$(v).text(),id:$(v).attr('href').replace(/.*?tid=(\\d+).*/gi,'$1')})).toArray()",
      "content": $=>{
        var body = $.raw.replace(/[\s\S]*<!--bodybegin-->/,'').replace(/<!--bodyend-->[\s\S]*/,'');
        var $body = $('body');
        $body.html(body);
        $body.find('center').remove();
        $body.find('font:contains(com)').remove();
        $body.find('font:contains(www)').remove();
        return $body.html();
      }
    }
  }
}