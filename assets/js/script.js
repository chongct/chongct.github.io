$(document).ready(() => {
  // header
  let effectFunction = (className) => {
    let titleLength = $("." + className).text().length;
    let array = $("." + className).text().split("");

    while (randomChar === " " || !randomChar) {
      var randomInt = Math.round(Math.random() * titleLength);
      var randomChar = array[randomInt];
      console.log(randomChar);
    }

    array.splice(randomInt, 1, "<span>" + randomChar + "</span>");
    let newString = array.join("");
    $("." + className).empty().html(newString);
  }

  setInterval(() => {
    effectFunction("name");
    effectFunction("description");
  }, 1500);


  // nav link
  $('a[href*="projects"]').on("click", () => {
    $("html, body").animate({
      scrollTop: $("#projects").offset().top
    }, 500);
  });

  $('a[href*="contact"]').on("click", () => {
    $("html, body").animate({
      scrollTop: $("#contact").offset().top
    }, 500);
  });


  $(window).on("scroll", () => {
    let height = $(window).height();
    if ($(window).scrollTop() > (height / 2)) {
      let fadeTime = 500;
      for (var child = 1; child <= $(".container").children().length; child++) {
        $(`.projects:nth-child(${child})`).fadeTo(fadeTime, 1);
        fadeTime += 500;
      }
    } else {
      $(".projects").css("opacity", "0");
    }
  })
});
