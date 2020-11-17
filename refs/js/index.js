const managerModule = (async () => {
  const path = window.location.pathname;
  switch (path) {
    case "/":
      carouselModule.configure(3);
      break;
  }
})();
