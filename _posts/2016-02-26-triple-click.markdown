---
layout: post
title: "triple click"
date: "2016-02-26"
---

  /**
  0.)   Triple click
  **********************************************************************************************/
  $.event.special.tripleclick = {

      setup: function(data, namespaces) {
          var elem = this, $elem = jQuery(elem);
          $elem.bind('click', jQuery.event.special.tripleclick.handler);
      },

      teardown: function(namespaces) {
          var elem = this, $elem = jQuery(elem);
          $elem.unbind('click', jQuery.event.special.tripleclick.handler)
      },

      handler: function(event) {
          var elem = this, $elem = jQuery(elem), clicks = $elem.data('clicks') || 0;
          clicks += 1;
          if ( clicks === 3 ) {
              clicks = 0;

              // set event type to "tripleclick"
              event.type = "tripleclick";

              // let jQuery handle the triggering of "tripleclick" event handlers
              jQuery.event.handle.apply(this, arguments)
          }
          $elem.data('clicks', clicks);
      }

  };

  $("body").bind("tripleclick", function() {
     // do something
  }
