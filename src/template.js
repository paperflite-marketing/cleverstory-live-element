(function () {
  var w = window;
  var cs = w.Cleverstory;
  if (typeof ic === "function") {
    ic('reattach_activator');
    ic('update', w.intercomSettings);
  } else {
    var d = document;
    var f = function () {
      f.c(arguments);
    };
    f.q = [];
    f.c = function (args) {
      f.q.push(args);

      console.log(f.q);
    };
    w.Cleverstory = f;
    var l = function () {
      var s = d.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'http://localhost:8081/';
      var x = d.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    };
    if (w.attachEvent) {
      w.attachEvent('onload', l);
    } else {
      w.addEventListener('load', l, false);
    }
  }
})();
