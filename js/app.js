const tabMenu = document.querySelector("#tab-btn").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < tabMenu.length; i++) {
  tabMenu[i].addEventListener("click", function () {
    for (let j = 0; j < tabMenu.length; j++) {
      tabMenu[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}

// header fix

window.onscroll = function () {
  const scrollTopFix = document.documentElement.scrollTop;
  if (window.innerWidth > 991) {
    if (scrollTopFix > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
};

// add active in smooth

const navbar = document.querySelector(".navbar");
const a = navbar.querySelectorAll("a");
a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});

// navbar responsive

const hamburger = document.querySelector(".hamburger-menu");
const navbarResponsive = document.querySelector(".navbar-responsive");

hamburger.addEventListener("click", function () {
  navbarResponsive.classList.toggle("show");
  if (navbarResponsive.classList.contains("show")) {
    hamburger.classList.add("active");
  } else {
    hamburger.classList.remove("active");
  }
});
