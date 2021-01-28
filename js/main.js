$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img src="img/arrow-left.svg" class="slider-arrow slider-arrow_left" alt="arrow" />',
    nextArrow:
      '<img src="img/arrow-right.svg"class="slider-arrow slider-arrow_right" alt="arrow" />',
    asNavFor: ".slider-dotshead",
  });
  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".header__slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 961,
        // settings: "unslick",
      },
    ],
  });

  // surf-slider
  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img src="img/arrow-left.svg" class="slider-arrow slider-arrow_left" alt="arrow" />',
    nextArrow:
      '<img src="img/arrow-right.svg"class="slider-arrow slider-arrow_right" alt="arrow" />',
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });
  // travel-slider
  $(".holder__slider, .shop__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow:
      '<img src="img/arrow-left.svg" class="slider-arrow slider-arrow_left" alt="arrow" />',
    nextArrow:
      '<img src="img/arrow-right.svg"class="slider-arrow slider-arrow_right" alt="arrow" />',
  });

  // quantity
  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep/plus.svg" alt="plus" /></div><div class="quantity-button quantity-down"><img src="img/sleep/minus.svg" alt="minus" /></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  // calculator
  let summ =
    $(".guests").val() * $(".summ").data("nights") * $(".nights").val();
  $(".summ").html("$" + summ.toFixed(1));

  $(".quantity").on("click", function () {
    var parents = $(this).parents(".slick-current");
    let summ =
      $(".guests", parents).val() *
      $(".summ", parents).data("nights") *
      $(".nights", parents).val();
    $(".summ", parents).html("$" + summ.toFixed(1));
  });

  // surfboard-box
  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });
  // menu
  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });
  // wow.js
  new WOW().init();

  // // fixed header
  const headerHeight = $(".header").innerHeight();
  let scroll = window.pageYOffset;
  checkScroll(scroll);
  $(window).on("scroll", function () {
    let scroll = window.pageYOffset;
    checkScroll(scroll);
  });
  function checkScroll(scroll) {
    if (scroll >= headerHeight) {
      $(".header__aside").addClass("fixed");
      $(".menu-btn").addClass("fixed");
    } else {
      $(".header__aside").removeClass("fixed");
      $(".menu-btn").removeClass("fixed");
    }
  }

  // smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let sectionId = $(this).data("scroll");
    let necesserySection = $(sectionId);
    let necesserySectionOffset = necesserySection.offset().top;
    $(".menu").removeClass("active");
    $("html,body").animate(
      {
        scrollTop: necesserySectionOffset,
      },
      1300
    );
  });
});
