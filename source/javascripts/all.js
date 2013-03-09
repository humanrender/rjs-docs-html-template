//= require_tree ./dependencies/
//= require_tree ./lib/
//= require ./development/

$(document).on("ready", function(){

  $("[data-collapsable]").each(function(){
    new Collapsable(this)
  })

  $('pre.code-example code').each(function(i, e) {hljs.highlightBlock(e)});

  new SidePanel($("body"),{
    panel:$("[role=navigation]"),
    toggle: $("[role=navigation] [data-toggle]")
  })
})