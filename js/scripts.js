$(document).ready(function($) {
  /**
  0.)   history.js
  **********************************************************************************************/
  window.fx1 = "transition.slideRightIn"; // efectos de velocity
  var siteUrl = 'http://' + (document.location.hostname || document.location.host),
      state = 0;// state counter

  //Cambia URL , al hacer click en un link, carga la url en delegate
  $(document).delegate('a[href^="/"],a[href^="' + siteUrl + '"]', "click",
    function(e) {
      e.preventDefault();
      state++;
      var sObj = {
              "state": state,
              "message": "blogg"
            },
          title = "title",
          url = this.pathname,
          whereIam = History.pushState(sObj, title, url);

      whereIam;
      console.log(whereIam);

      var storeUrl = History.getState().url;
      console.log('Almacenado:' + storeUrl);


    });
  /**
    //CARGA CONTENIDO AJAX
    **********************************************************************************************/
  History.Adapter.bind(window, 'statechange', function() {
      var State = History.getState().url;
      $.get(State, function(data) {
            var titulo = $(data).filter("title").text();
            document.title = titulo; //carga el titulo
      }).done(function(data) {
            $('main').scrollTop(0);
            var b1 = '#ajaxContent', b2 = '.content'; //variables
            $(b1).html($(data).find(b2)).velocity(fx1); // carga y anima
            // $(document).ready(OnloadFunction);// ejecuta el script js luego de cargar
      });
  });


  if (window.location.href.indexOf("/blog/") > -1) {
    console.log("your are in: /blog/");
  }





  $('#player')
			.stop(true).delay(2000)
			 .animate({
			'bottom':'0%',
			'opacity':'1',
			 },600,'easeOutBack');

//**********************************************************************************************/
});
