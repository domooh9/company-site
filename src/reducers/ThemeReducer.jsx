// menun bar code responsiveness
const display = () => {
  // get the DOM items
  const topNav = document.querySelector(".topnav");
  const responsiveBtn = document.querySelector(".responsive-btn");
  topNav.classList.toggle("responsive");
  responsiveBtn.classList.toggle("times");
  responsiveBtn.classList.toggle("bars");
};
const isActive = (event, elem) => {
  const navLinks = document.querySelectorAll(".nav-item");
  navLinks.forEach((elem) => {
    if (elem === event.target.parentElement) {
      elem.classList.add("active");
    } else elem.classList.remove("active");
  });
  scrollTo(elem);
};
const scrollTo = (elem) => {
  const sticky = document.querySelector(elem).offsetTop;
  document.body.scrollTop = sticky - 10; // For Safari
  document.documentElement.scrollTop = sticky - 10;
};
export const navReducer = (state, action) => {
  switch (action.type) {
    case "IS_ACTIVE":
      isActive(action.event, action.elem);
      return state;
    case "TO_TOP":
      scrollTo(action.elem);
      return state;
    case "DISPLAY_NAV":
      display();
      return state;
    default:
      return state;
  }
};
