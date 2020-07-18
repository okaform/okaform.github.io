


const imagesToLoad = document.querySelectorAll('iframe[data-src]');

const loadImages = (iframe) => {
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
  iframe.onload = () => {
    iframe.removeAttribute('data-src');
  };
};

const imgOptions = {
  threshold: 0.7,
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          imgObserver.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
}



else {//load all images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
