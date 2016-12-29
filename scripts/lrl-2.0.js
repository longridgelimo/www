var LRL = {
  Version: '2.0',
  preload: function(libraryName) {
    document.write('<script type="text/javascript" src="/scripts/'+libraryName+'.js"></script>');
  },
  preload_img: function(img_src) {
    var i=new Image();i.src = img_src;
  }
}
  
function clickclear(thisfield, defaulttext) {
  thisfield.style.color = '#000000';
  if (thisfield.value == defaulttext) {
    thisfield.value = "";
  }
}
function clickrecall(thisfield, defaulttext) {
  if (thisfield.value == "") {
    thisfield.value = defaulttext;
    thisfield.style.color = '#999999';
  }
}