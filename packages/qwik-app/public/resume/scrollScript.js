(function toggleDownloadElement() {
  let lastScrollTop = 0;
  const downloadElement = document.getElementById('download');
  const homeElement = document.getElementById('home');
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
      homeElement.classList.add('hidden');
      downloadElement.classList.add('hidden');
    } else {
      // scrolling up
      homeElement.classList.remove('hidden');
      downloadElement.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop;
  };
})();
