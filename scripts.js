document.addEventListener('DOMContentLoaded', function () {
  const dotArts = document.querySelectorAll('.dot-art');

  dotArts.forEach(function(dotArt) {
      const staticImage = dotArt.querySelector('.static');
      const animatedImage = dotArt.querySelector('.animated');

      staticImage.addEventListener('mouseover', function () {
          staticImage.style.display = 'none';
          animatedImage.style.display = 'block';
      });

      animatedImage.addEventListener('mouseout', function () {
          staticImage.style.display = 'block';
          animatedImage.style.display = 'none';
          
          // GIFのループを最初から再生するためにソースをリセット
          const src = animatedImage.src;
          animatedImage.src = '';
          animatedImage.src = src;
      });
  });
});
