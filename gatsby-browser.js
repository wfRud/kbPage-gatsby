exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash) {
    const scrollToElement = document.querySelector(location.hash);
    const offset = scrollToElement.getBoundingClientRect().top + window.scrollY;

    window.scroll({ top: offset, left: 0 });
  }

  return false;
};
