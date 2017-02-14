$(document).ready(function () {
   //Lining up the menu with the model area
   function mobileMenuAlign() { // So the weapon menus line up together
      if ($(window).width() <=900){
         var newTop = $('.model').offset().top
         $('.menu-box').css('top', newTop * 1.1 + 'px');
      }
   }

   mobileMenuAlign();
   $(window).resize(mobileMenuAlign); //B/c it messes up when you rotate the screen
   function showMenu() {
      if ($(window).width() <=900){
         $('.model').click(function () {
            $(this).addClass("semi-visible");
            $('.menu-box').removeClass("invisible");
         });

         $('.main .back').click(function () {
            $('.menu-box').addClass("invisible");
            $('.model').removeClass("semi-visible");
         });
      }
   }

   showMenu();
   //Menus

    function hideMenu() {
        $('section nav').css("display", "none");
    }

    $('.one').click(function () {
        hideMenu();
        $('.group1').css("margin-left", "0");
    });

    $('.two').click(function () {
        hideMenu();
        $('.group2').css("margin-left", "0");
    });

    $('.three').click(function () {
        hideMenu();
        $('.group3').css("margin-left", "0");
    });

    $('.four').click(function () {
        hideMenu();
        $('.group4').css("margin-left", "0");
    });

    $('.five').click(function () {
        hideMenu();
        $('.group5').css("margin-left", "0");
    });

    $('.six').click(function () {
        hideMenu();
        $('.group6').css("margin-left", "0");
    });

    $('.seven').click(function () {
        hideMenu();
        $('.group7').css("margin-left", "0");
    });


    function displayDelay() {
        $('section nav').css("display", "block");
    }
    $('div').on('click', '.back', function () {
        setTimeout(displayDelay, 200);
        $('.group1, .group2, .group3, .group4, .group5, .group6, .group7').css("margin-left", "100%");
    });

    //Hairstyles

$('div').on('click', 'div:contains("Straight")', function () {
        $('.model img:nth-child(2)').attr('src', 'beauty/6-hair/hair-ls.png');
    });

    $('div').on('click', 'div:contains("Fishtail")', function () {
        $('.model img:nth-child(2)').attr('src', 'beauty/6-hair/hair-ft.png');
    });

    $('div').on('click', 'div:contains("Romantic")', function () {
        $('.model img:nth-child(2)').attr('src', 'beauty/6-hair/hair-rc.png');
    });

    $('div').on('click', 'div:contains("Half Bun")', function () {
        $('.model img:nth-child(2)').attr('src', 'beauty/6-hair/hair-hb.png');
    });

    //Shoes

    $('div').on('click', 'div:contains("Giuseppe")', function () {
        $('.model img:nth-child(3)').attr('src', 'beauty/5-shoes/giu.png');
    });

    $('div').on('click', 'div:contains("Open Ankle")', function () {
        $('.model img:nth-child(3)').attr('src', 'beauty/5-shoes/ankle.png');
    });

    $('div').on('click', 'div:contains("Lace Ups")', function () {
        $('.model img:nth-child(3)').attr('src', 'beauty/5-shoes/lace.png');
    });

    $('div').on('click', 'div:contains("Boots")', function () {
        $('.model img:nth-child(3)').attr('src', 'beauty/5-shoes/boots.png');
    });

    $('div').on('click', 'div:contains("Sandals")', function () {
        $('.model img:nth-child(3)').attr('src', 'beauty/5-shoes/sandal.png');
    });

    $('div').on('click', 'div:contains("Strappy")', function () {
        $('.model img:nth-child(3)').attr('src', 'beauty/5-shoes/strappy.png');
    });

    //Relevant Functions, related to the 1 pieces hiding the bottoms

    function displayTopBot() {
        $('.model img:nth-child(4)').css('display', 'block');
        $('.model img:nth-child(5)').css('display', 'block');
        $('.model img:nth-child(7)').css('display', 'none');
    }

    function hideTopBot() {
        $('.model img:nth-child(4)').css('display', 'none');
        $('.model img:nth-child(5)').css('display', 'none');
        $('.model img:nth-child(7)').css('display', 'block');
    }

    //Bottoms

    $('div').on('click', 'div:contains("Low Waist Jeans")', function () {
        $('.model img:nth-child(4)').attr('src', 'beauty/4-bottoms/jeans.png');
        displayTopBot();
    });

    $('div').on('click', 'div:contains("High Waist Jeans")', function () {
        $('.model img:nth-child(4)').attr('src', 'beauty/4-bottoms/jeans2.png');
        displayTopBot();
    });

    $('div').on('click', 'div:contains("Yoga Pants")', function () {
        $('.model img:nth-child(4)').attr('src', 'beauty/4-bottoms/yoga.png');
        displayTopBot();
    });

    $('div').on('click', 'div:contains("Midi Skirt")', function () {
        $('.model img:nth-child(4)').attr('src', 'beauty/4-bottoms/midi.png');
        displayTopBot();
    });

    $('div').on('click', 'div:contains("Mini Skirt")', function () {
        $('.model img:nth-child(4)').attr('src', 'beauty/4-bottoms/mini.png');
        displayTopBot();
    });

    $('div').on('click', 'div:contains("Shorts")', function () {
        $('.model img:nth-child(4)').attr('src', 'beauty/4-bottoms/shorts.png');
        displayTopBot();
    });

    //Tops

    $('div').on('click', 'div:contains("Crop Top 1")', function () {
        $('.model img:nth-child(5)').attr('src', 'beauty/3-tops/crop1.png');
        displayTopBot();
    });

    $('div').on('click', 'div:contains("Crop Top 2")', function () {
        $('.model img:nth-child(5)').attr('src', 'beauty/3-tops/crop2.png');
        displayTopBot();
    });

    $('div').on('click', 'div:contains("Crop Top 3")', function () {
        $('.model img:nth-child(5)').attr('src', 'beauty/3-tops/crop3.png');
        displayTopBot();
    });

    $('div').on('click', 'div:contains("V Neck")', function () {
        $('.model img:nth-child(5)').attr('src', 'beauty/3-tops/vneck.png');
        displayTopBot();
    });

    $('div').on('click', 'div:contains("Tank Top")', function () {
        $('.model img:nth-child(5)').attr('src', 'beauty/3-tops/tank.png')
        displayTopBot();
    });

    //1 pieces

    $('div').on('click', 'div:contains("Romper")', function () {
        $('.model img:nth-child(7)').attr('src', 'beauty/3-1piece/romper.png');
        hideTopBot();
    });

    $('div').on('click', 'div:contains("Kill Bill Jumper")', function () {
        $('.model img:nth-child(7)').attr('src', 'beauty/3-1piece/killbill.png');
        hideTopBot();
    });

    $('div').on('click', 'div:contains("Basic Jumper")', function () {
        $('.model img:nth-child(7)').attr('src', 'beauty/3-1piece/jumper.png');
        hideTopBot();
    });

    $('div').on('click', 'div:contains("Maxi Dress")', function () {
        $('.model img:nth-child(7)').attr('src', 'beauty/3-1piece/maxi.png');
        hideTopBot();
    });

    $('div').on('click', 'div:contains("Mini Dress")', function () {
        $('.model img:nth-child(7)').attr('src', 'beauty/3-1piece/c-mini.png');
        hideTopBot();
    });

    $('div').on('click', 'div:contains("Party Mini")', function () {
        $('.model img:nth-child(7)').attr('src', 'beauty/3-1piece/p-mini.png');
        hideTopBot();
    });

    //Swimwear

    $('div').on('click', 'div:contains("Bandeau Top")', function () {
        $('.model img:nth-child(5)').attr('src', 'beauty/2-swim/top2.png');
    });

    $('div').on('click', 'div:contains("Triangle Top")', function () {
        $('.model img:nth-child(5)').attr('src', 'beauty/2-swim/top1.png');
    });

    $('div').on('click', 'div:contains("Bottom 1")', function () {
        $('.model img:nth-child(4)').attr('src', 'beauty/2-swim/btm1.png');
    });

    $('div').on('click', 'div:contains("Bottom 2")', function () {
        $('.model img:nth-child(4)').attr('src', 'beauty/2-swim/btm2.png');
    });

    //Options

    $('figure:contains("Jacket")').click(function () {
        if ($('.option1').attr('src') == "beauty/blank.png") {
            $('.option1').attr('src', 'beauty/5-options/jacket.png');
            $('.jacket').css('opacity', '1');
        }
        else {
            $('.option1').attr('src', 'beauty/blank.png');
            $('.jacket').css('opacity', '.5');
        }
    });

    $('figure:contains("Cover Up")').click(function () {
        if ($('.option1').attr('src') == "beauty/blank.png") {
            $('.option1').attr('src', 'beauty/5-options/coverup.png');
            $('.cover').css('opacity', '1');
        }
        else {
            $('.option1').attr('src', 'beauty/blank.png');
            $('.cover').css('opacity', '.5');
        }
    });

    $('figure:contains("Stockings")').click(function () {
        if ($('.option2').attr('src') == "beauty/blank.png" || $('.option2').attr('src') == "beauty/3-options/socks.png") {
            $('.option2').attr('src', 'beauty/3-options/stockings.png');
            $('.stock').css('opacity', '1');
            $('.knee').css('opacity', '.5');
        }
        else {
            $('.option2').attr('src', 'beauty/blank.png');
            $('.stock').css('opacity', '.5');
        }
    });

    $('figure:contains("Knee Socks")').click(function () {
        if ($('.option2').attr('src') == "beauty/blank.png" || $('.option2').attr('src') == "beauty/3-options/stockings.png") {
            $('.option2').attr('src', 'beauty/3-options/socks.png');
            $('.knee').css('opacity', '1');
            $('.stock').css('opacity', '.5');
        }
        else {
            $('.option2').attr('src', 'beauty/blank.png');
            $('.knee').css('opacity', '.5');
        }
    });

    //Some quick conditionals

    $('div').on('click', '.item', function () {
        if ($('.model img:nth-child(4)').attr('src') == 'beauty/4-bottoms/yoga.png') {
            $('.model img:nth-child(4)').attr('class', 'twoZ');
        }
        else {
            $('.model img:nth-child(4)').attr('class', 'fourZ');
        }
    });

    $('div').on('click', '.item', function () {
        if ($('.model img:nth-child(5)').attr('src') == 'beauty/3-tops/crop2.png') {
            $('.model img:nth-child(4)').attr('class', 'twoZ');
        }
        else {
            $('.model img:nth-child(4)').attr('class', 'fourZ');
        }
    });
});
