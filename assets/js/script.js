$(document).ready(function () {
  $(".top").hide(0);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn(200);
    } else {
      $(".top").fadeOut(300);
    }
  });
  $(".top").click(function () {
    event.preventDefault();

    $("html , body").animate({ scrollTop: 0 }, 500);
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function menuSticky() {
  if ($(".is-sticky-on").length > 0) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 250) {
        $(".is-sticky-on").addClass("is-sticky-menu");
      } else {
        $(".is-sticky-on").removeClass("is-sticky-menu");
      }
    });
  }
}
menuSticky();

const myFunction1 = () => {
  document.getElementById("first1").style.display = "block";
  document.getElementById("second1").style.display = "none";
  document.getElementById("third1").style.display = "none";
};

const myFunction2 = () => {
  document.getElementById("second1").style.display = "block";
  document.getElementById("first1").style.display = "none";
  document.getElementById("third1").style.display = "none";
};

const myFunction3 = () => {
  document.getElementById("third1").style.display = "block";
  document.getElementById("first1").style.display = "none";
  document.getElementById("second1").style.display = "none";
};

// second //

const myFunction4 = () => {
  document.getElementById("first2").style.display = "block";
  document.getElementById("second2").style.display = "none";
  document.getElementById("third2").style.display = "none";
};

const myFunction5 = () => {
  document.getElementById("second2").style.display = "block";
  document.getElementById("first2").style.display = "none";
  document.getElementById("third2").style.display = "none";
};

const myFunction6 = () => {
  document.getElementById("third2").style.display = "block";
  document.getElementById("first2").style.display = "none";
  document.getElementById("second2").style.display = "none";
};

// third //

const myFunction7 = () => {
  document.getElementById("first3").style.display = "block";
  document.getElementById("second3").style.display = "none";
  document.getElementById("third3").style.display = "none";
};

const myFunction8 = () => {
  document.getElementById("second3").style.display = "block";
  document.getElementById("first3").style.display = "none";
  document.getElementById("third3").style.display = "none";
};

const myFunction9 = () => {
  document.getElementById("third3").style.display = "block";
  document.getElementById("first3").style.display = "none";
  document.getElementById("second3").style.display = "none";
};

// fourth//

const myFunction10 = () => {
  document.getElementById("first4").style.display = "block";
  document.getElementById("second4").style.display = "none";
  document.getElementById("third4").style.display = "none";
};

const myFunction11 = () => {
  document.getElementById("second4").style.display = "block";
  document.getElementById("first4").style.display = "none";
  document.getElementById("third4").style.display = "none";
};

const myFunction12 = () => {
  document.getElementById("third4").style.display = "block";
  document.getElementById("first4").style.display = "none";
  document.getElementById("second4").style.display = "none";
};
