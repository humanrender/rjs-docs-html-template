var SidePanel = function(viewport, options){
  this.viewport = viewport;
  this.panel = options.panel;
  this.options = _.extend(_(options).omit("panel"), this.defults);
  this.init();
};

_.extend(SidePanel.prototype, {
  defults:{
    visible_class: "side_panel_visible"
  },
  init:function(){
    this.set_event_handlers();
  },
  set_event_handlers:function(){
    _.bindAll(this, "on_touch");
    this.panel
      .on("mousedown", this.on_touch)
      .on("touchstart", this.on_touch);
  },
  on_touch:function(event){
    if(this.on_touch.last_called_by == "touchstart" && event.type == "mousedown"){
      this.on_touch.last_called_by = null;
      return;
    }
    this.on_touch.last_called_by = event.type;
    this.show_panel();
  },
  show_panel:function(){

    this.viewport.toggleClass(!this.inited ? this.options.visible_class : this.options.visible_class+" side_panel_hidden");
    this.inited = true;
  }
});
