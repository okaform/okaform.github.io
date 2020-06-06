
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
  threshold: 0.5,
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

//testing 
/*

const imagesToLoad2 = document.querySelectorAll('img[data-src]');

const loadImages2 = (image) => {
  image.setAttribute('srcset', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions2 = {
  threshold: 0.5,
};

if ('IntersectionObserver' in window) {
    const imgObserver2 = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages2(item.target);
          imgObserver2.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad2.forEach((img) => {
      imgObserver2.observe(img);
    });
}



else {//load all images if not supported
  imagesToLoad2.forEach((img) => {
    loadImages2(img);
  });
}


*/
