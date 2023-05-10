console.log("conected");

const mobileIconNav = document.querySelector(".mobile-nav-icon");
const mobileModalNav = document.querySelector(".mobile-nav-modal");
const mobileNavLikns = document.querySelectorAll(".mobile-nav-likns");
console.info(mobileNavLikns);

mobileIconNav.addEventListener("click", function () {
  mobileIconNav.classList.toggle("fa-times");
  mobileModalNav.classList.toggle("mobile-nav-modal-appear");
});

mobileNavLikns.forEach((i) => {
  i.addEventListener("click", () => {
    // console.log("Tu as clické sur le menu mobile");
    mobileModalNav.classList.toggle("mobile-nav-modal-appear");
  });
});
