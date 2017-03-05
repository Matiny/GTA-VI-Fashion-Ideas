$(document).ready(function () {
   //Lining up the menu with the model area
   function mobileMenuAlign() {
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

   //Clicking on the Main Menu shows the sub menu.

   function clickMenu(classNumber, groupNumber) {
      $(classNumber).click(function () {
         hideMenu();
         $(groupNumber).css("margin-left", "0");
      });
   }

   clickMenu(".one", ".group1");
   clickMenu(".two", ".group2");
   clickMenu(".three", ".group3");
   clickMenu(".four", ".group4");
   clickMenu(".five", ".group5");
   clickMenu(".six", ".group6");
   clickMenu(".seven", ".group7");

   function displayDelay() {
      $('section nav').css("display", "block");
   }
   $('div').on('click', '.back', function () {
      setTimeout(displayDelay, 200);
      $('.group1, .group2, .group3, .group4, .group5, .group6, .group7').css("margin-left", "100%");
   });

   //When you pick a 1 piece, show or hide the bottoms

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

   /*The following functions pick an image based off of the image name, which
   is same as the button's text*/

   function pickStyle(group, number) {
      $(group + ' div.item').click(function () { //div.item distinguishes it from the figure.items
         $('.model img:nth-child(' + number + ')').attr('src', 'images/' + $(this).text() + '.png');
         if (group == ".group2" && number == 5 || group == ".group4" && number == 4
      || group == ".group5" && number == 4)
         {
            displayTopBot();
         }
         else if (group == ".group3" && number == 7)
         {
            hideTopBot();
         }
      });
   }

   pickStyle(".group1", 2); //Hairstyles
   pickStyle(".group2", 5); //Tops
   pickStyle(".group3", 7); //Dresses
   pickStyle(".group4", 4); //High Waist Bottoms
   pickStyle(".group5", 4); //Low Waist Bottoms
   pickStyle(".group6", 3); //Shoes

   //Swimwear
   //Fusing these into the main function seems too complicated, so here we are
   function pickSwim() {
      //Tops
      $('.group7 .item:nth-child(1), .group7 .item:nth-child(2)').click(function () {
         $('.model img:nth-child(5)').attr('src', 'images/' + $(this).text() + '.png');
         displayTopBot();
      });

      //Bottoms
      $('.group7 .item:nth-child(3), .group7 .item:nth-child(4)').click(function () {
         $('.model img:nth-child(4)').attr('src', 'images/' + $(this).text() + '.png');
         displayTopBot();
      });
   }

   pickSwim();

   //Options

   function pickOptionTop(optionName, optionClass) {
      $('figure:contains(' + optionName + ')').click(function () {
         if ($('.option1').attr('src') == "images/blank.png") {
            $('.option1').attr('src', 'images/'+ optionName +'.png');
            $(optionClass).css('opacity', '1');
         }
         else {
            $('.option1').attr('src', 'images/blank.png');
            $(optionClass).css('opacity', '.5');
         }
      });
   }

   pickOptionTop("Jacket", ".jacket");
   pickOptionTop("Cover Up", ".cover");

   function pickOptionBottom(optionName1, optionName2, optionClass1, optionClass2) {
      $('figure:contains('+ optionName1 +')').click(function () {
         if ($('.option2').attr('src') == "images/blank.png" || $('.option2').attr('src') == "images/" + optionName2 + ".png") {
            $('.option2').attr('src', 'images/'+ optionName1 +'.png');
            $(optionClass1).css('opacity', '1');
            $(optionClass2).css('opacity', '.5');
         }
         else {
            $('.option2').attr('src', 'images/blank.png');
            $(optionClass1).css('opacity', '.5');
         }
      });
   }

   pickOptionBottom("Stockings", "Knee Socks", ".stock", ".knee");
   pickOptionBottom("Knee Socks", "Stockings", ".knee", ".stock");

   //Some quick conditionals. They deal with switching layer z-indexes when convenient

      $('.item').click(function () {
         if ($('.model img:nth-child(4)').attr('src') == 'images/Yoga Pants.png') {
            $('.model img:nth-child(4)').attr('class', 'twoZ');
         }
         else if ($('.model img:nth-child(5)').attr('src') == 'images/Crop Top 1.png') {
            $('.model img:nth-child(4)').attr('class', 'twoZ');
         }
         else {
            $('.model img:nth-child(4)').attr('class', 'fourZ');
         }
      });

});
