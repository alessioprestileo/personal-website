(function toggleDownloadElement() {
  let lastScrollTop = 0;
  const headerElement = document.getElementById('header');
  let ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleDownloadElement();
        ticking = false;
      });

      ticking = true;
    }
  });

  const toggleDownloadElement = () => {
    if (lastScrollTop === 0) {
      lastScrollTop = currentScrollTop;
      return;
    }

    var currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // scrolling down
      headerElement.classList.add('hidden');
    } else {
      // scrolling up
      headerElement.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop;
  };
})();
