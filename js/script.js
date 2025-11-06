// Small JS for menu toggle and active link highlighting
(function(){
  function initNav(toggleId, navId){
    var t = document.getElementById(toggleId);
    var n = document.getElementById(navId);
    if(!t || !n) return;
    t.addEventListener('click', function(){ n.classList.toggle('open'); });
  }
  // try a few IDs used in pages
  initNav('nav-toggle','main-nav');
  initNav('nav-toggle-2','main-nav-2');

  // highlight active nav link
  var links = document.querySelectorAll('.main-nav a, nav a');
  links.forEach(function(a){
    try{
      var url = window.location.pathname.split('/').pop() || 'index.html';
      if(a.getAttribute('href') === url) a.classList.add('active');
    }catch(e){}
  });
})();