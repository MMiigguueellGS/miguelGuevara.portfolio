document.addEventListener("DOMContentLoaded", (e) => {
  console.log('que paso')
  const aside = document.querySelector(".layout__aside");
  const btn = document.querySelector(".layout__menu-toggle");
  console.log(btn)

  btn.addEventListener("click", (e) => {
    console.log('clik')
    const visible = document.querySelector(".layout__aside--visible");
    if (!visible) {
      aside.classList.add("layout__aside--visible");
    }
  });
});
