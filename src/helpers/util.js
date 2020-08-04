export const smoothScroll = (selector = "") => {
  if (!selector) {
    return false;
  }

  document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
};
