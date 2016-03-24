---
layout: post
title: "solucion al largo problema de cargar contenido ajax"
date: "2016-02-11"
---

Tengo  un archivo head.html y foot.html con la siguiente estructura:

<article id='ajaxContent' class="homearticle">

Luego creo  cada template con el siguiente contenedor:

<div class="content">
</div>


ahora  un poco de js:

History.Adapter.bind(window, 'statechange', function() {
  var State = History.getState().url;



  $.get(State, function(data) {

      var titulo = $(data).filter("title").text();
      document.title = titulo; //carga el titulo

  }).done(function(data) {
      $('article').scrollTop(0);
      var b1 = '#ajaxContent', // que?
          b2 = '.content'; //dentro de template post

      $(b1).html( $(data).find(b2)).velocity(fx1); // carga y anima

      $(document).ready(OnloadFunction);

  });
});
    ---
  Lo que ocurre aqui es que sobre '#ajaxContent le agrego el contenido html que esta dentro de .content.

  var b1 = '#ajaxContent',
      b2 = '.content';

  $(b1).html( $(data).find(b2)).velocity(fx1);
