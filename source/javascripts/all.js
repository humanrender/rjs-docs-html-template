//= require_tree ./dependencies/
//= require ./development

var Collapsable = function(el){
  _.bindAll(this,"on_toggle");
  this.element = $(el);
  this.element.on("click", "[data-toggle]", this.on_toggle);
}

_.extend(Collapsable.prototype, {
  on_toggle:function(event){
    event.preventDefault();
    this.toggle();
  },
  toggle:function(){
    this.element.toggleClass("expanded")
  }
})


$("[data-collapsable]").each(function(){
  new Collapsable(this)
})

$(document).on("ready", function(){
  $('pre.code-example code').each(function(i, e) {hljs.highlightBlock(e)});
})