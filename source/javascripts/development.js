(function(increment, color, opacity){
  var wheight = $("body").height(),
      container = $("<div id='v-grid-container'></div>"),
      y = 0,
      grid;
  $("body").append(container.css({
    "-webkit-user-select":"none"
  }));
  while(y < wheight){
    y += increment;
    grid = $("<span></span>");
    container.append(grid);
    grid.css({
      "border-bottom":"1px solid "+color,
      position:"absolute",
      top:y+"px",
      left:0,
      width:"100%",
      "-webkit-user-select":"none",
      opacity:opacity
    })
  }
})(12, "#ce0", 0.2); // Vertical grid