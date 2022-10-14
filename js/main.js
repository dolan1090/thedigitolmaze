//change color
var toFind = [
  "our website",
  " us",
  " we",
  " yellow",
  "how",
  "Telephone:",
  "Email:",
];
for (i = 0; i < toFind.length; i++) {
  function changecolor() {
    var toLookInto = $(".wapper").html();
    var regx = new RegExp(toFind[i], "g");
    var newstring = toLookInto.replace(
      regx,
      '<span class="highlight">' + toFind[i] + "</span>"
    );
    $(".wapper").html(newstring);
  }
  changecolor();
}
// end change color

var menu_site = document.querySelector(".menu-box .menu-site");

var btn_open_menu = document.querySelector(".menu-box .open-menu");
btn_open_menu.onclick = function () {
  menu_site.style.width = "100%";
};

var btn_close_menu = document.querySelector(".menu-box .close-menu");
btn_close_menu.onclick = function () {
  menu_site.style.width = "0";
};

var bg_menu = document.querySelector(".menu-box .bg-menu");
bg_menu.onclick = function () {
  menu_site.style.width = "0";
};

var menu_item = menu_site.querySelectorAll("ul li");
for (var i = 0; i < menu_item.length; i++) {
  var sub_menu = menu_item[i].querySelector("ul");
  if (sub_menu != null) {
    var icon_down = document.createElement("i");
    icon_down.classList.add("fa");
    icon_down.classList.add("fa-caret-down");
    menu_item[i].insertBefore(icon_down, sub_menu);

    var li_container = icon_down.parentElement;
    var sub_menu2 = li_container.querySelector("ul");

    icon_down.onclick = function () {
      if (!sub_menu2.classList.contains("show")) {
        sub_menu2.classList.add("show");
        icon_down.classList.add("fa-caret-up");
      } else {
        sub_menu2.classList.remove("show");
        icon_down.classList.remove("fa-caret-up");
      }
    };
  } else {
  }
}
// End Menu

var swiper = new Swiper(".mySwiper1", {
  loop: true,
  autoHeight: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
// End slide

// back to top
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// transitions
gsap.registerPlugin(ScrollTrigger);

if (document.querySelector(".box-content-slide .item")) {
  gsap.from(".box-content-slide .item", {
    scrollTrigger: ".box-content-slide",
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 1,
  });
};

if (document.querySelector(".do-more")) {
  gsap.from(".do-more", {
    scrollTrigger: ".do-more",
    y: 100,
    opacity: 0,
    duration: 1,
  });
};

if (document.querySelector(".box-why-choosen")) {
  gsap.from(".header-whc", {
    scrollTrigger: ".box-why-choosen",
    y: 100,
    opacity: 0,
    duration: 1,
  });
};

if (document.querySelector(".box-testimonial")) {
  gsap.from(".box-testimonial", {
    scrollTrigger: ".box-testimonial",
    y: 100,
    opacity: 0,
    duration: 1,
  });
};

if (document.querySelector(".box-why-choosen .row.row-cols-1.row-cols-md-3")) {
  gsap.from(".box-why-choosen .row.row-cols-1.row-cols-md-3 .col", {
    scrollTrigger: ".box-why-choosen .row.row-cols-1.row-cols-md-3",
    x: 300,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
};
