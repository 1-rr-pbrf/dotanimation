document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image-box img').forEach(img => {
    const pngSrc = img.src;
    const gifSrc = img.dataset.gif;

    img.addEventListener('mouseenter', () => {
      img.src = gifSrc;
    });

    img.addEventListener('mouseleave', () => {
      img.src = pngSrc;
    });
  });
});
