const accordionModule = (() => {
  return {
    toggleMenu: (id) => {
      const checkBox = document.getElementById(id);
      checkBox.checked = !checkBox.checked;
    },
  };
})();
