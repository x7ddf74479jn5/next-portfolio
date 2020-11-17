const menuModule = (() => {
  return {
    toggleNav: () => {
      document.getElementById("nav-toggle-button").addEventListener("click", (event) => {
        const classes = document.querySelector("html").classList;
        if (classes.value.includes("nav-open")) {
          classes.remove("nav-open");
        } else {
          classes.add("nav-open");
        }
      });
    },
    closeNav: () => {
      document.getElementById("js-black-bg").addEventListener("click", (event) => {
        document.querySelector("html").classList.remove("nav-open");
      });
    },
  };
})();

menuModule.toggleNav();
menuModule.closeNav();
