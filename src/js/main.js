(function(window, document) {
  'use strict';

  /* Toggle grid button
     ========================================================================== */

  /*
  // 1. THE JQUERY WAY
  var flip = 0;
  $('#btnToggleGrid').on('click', function(){
    // Get line-height
    var vcLineHeight = parseInt($('p').css('line-height'));
    console.log(vcLineHeight);
    if(flip == 0){
      $('body').addClass('grid');
      // $('.verticalGrid').css('background', vcImg);
      flip = 1;
    } else if (flip == 1) {
      $('body').addClass('grid-double');
      flip = 2;
    } else if (flip == 2) {
      $('body').removeClass('grid-double');
      $('body').removeClass('grid');
      // $('.verticalGrid').css('background', 'none');
      flip = 0;
    };
  });
  */

  // 2. THE JAVASCRIPT WAY
  var flip = 0;

  function toggleGrid() {
    var body = document.getElementsByTagName('body')[0];
    var button = document.getElementById('btnToggleGrid');

    if (flip === 0) {
      body.classList.add('grid');
      button.textContent = 'Turn Double Grid On';
      button.classList.add('double-grid');
      flip = 1;
    } else if (flip === 1) {
      body.classList.add('grid-double');
      button.textContent = 'Turn Grid Off';
      button.classList.remove('double-grid');
      button.classList.add('grid-off');
      flip = 2;
    } else if (flip === 2) {
      body.classList.remove('grid');
      body.classList.remove('grid-double');
      button.classList.remove('grid-off');
      button.textContent = 'Turn Grid On';
      flip = 0;
    }
  }

  /* Fix image height to fit into the baseline grid
     ========================================================================== */

  /*
  // 1. THE JQUERY WAY
  Construct the function
  $.fn.imgFixHeight = function(){

    // get image original height
    var imgOriginalHeight = this.height();

    // Get Line-height
    var lineHeight = parseInt($('p').css('line-height'));

    // Calculate the new image height
    var div = Math.floor(imgOriginalHeight/lineHeight);
    var imgNewHeight = lineHeight * div;

    // Apply the new image height
    this.css('height', imgNewHeight);
  };
  */


  // 2. THE JAVASCRIPT WAY
  // Construct the function
  function fixImgHeight() {

    // Get all images
    var images = document.querySelectorAll('img');

    // Get line-height
    var element = document.getElementsByTagName('body')[0];
    var style = window.getComputedStyle(element);
    var lineHeight = parseInt(style.getPropertyValue('line-height'));
    var i;
    var length = images.length;
    var imgOriginalHeight;
    var div;
    var imgNewHeight;

    // For each image in images get original height, calculate height rounded to baseline grid, set new height
    for (i = 0; i < length; ++i) {

      //Reset height first
      images[i].style.height = 'auto';

      // Get original height
      imgOriginalHeight = images[i].offsetHeight;

      // Calculate new height
      div = Math.floor(imgOriginalHeight / lineHeight);
      imgNewHeight = lineHeight * div;

      // Set new height
      images[i].style.height = imgNewHeight + 'px';
    }
  }

  document.getElementById('btnToggleGrid').onclick = toggleGrid;

  //Fix once on first page load
  fixImgHeight();

  //Make sure that we fix images on each window resize (add debounce for performance)
  window.addEventListener('resize', debounce(fixImgHeight, 50), true);


  //helper: debounce
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

}(window, document));
