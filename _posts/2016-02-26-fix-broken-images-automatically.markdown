---
layout: post
title: "fix broken images automatically"
date: "2016-02-26"
---

/**
0.)  Fix Broken Images Automatically
**********************************************************************************************/


$('img').on('error', function() {
  if (!$(this).hasClass('broken-image')) {
    $(this).prop('src', 'img/broken.png').addClass('broken-image');
  }
});
