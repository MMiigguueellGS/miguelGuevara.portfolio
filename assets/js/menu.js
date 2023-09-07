document.addEventListener("DOMContentLoaded", (e) => {
  const aside = document.querySelector(".layout__aside");
  const btn = document.querySelector(".layout__menu-toggle");

  btn.addEventListener("click", (e) => {
    const iconBars = document.querySelector(".fa-bars");
    const iconXmark = document.querySelector(".fa-xmark");

    const visible = document.querySelector(".layout__aside--visible");
    if (!visible) {
      aside.classList.add("layout__aside--visible");
      console.log(iconXmark);
      iconBars.style.opacity = 0;
      iconXmark.style.opacity = 1;
    } else {
      aside.classList.remove("layout__aside--visible");
      iconBars.style.opacity = 1;
      iconXmark.style.opacity = 0;
    }

    window.addEventListener("resize", () => {
      const size = parseInt(document.body.clientWidth);
      if (size <= 1060) {
        aside.classList.remove("layout__aside--visible");
        iconBars.style.opacity = 1;
        iconXmark.style.opacity = 0;
      }
    });
  });
});
