let loader: number;

function init() {
  if (window.location.href.startsWith('https://www.youtube.com/watch')) {
    window.postMessage({
      type: 'YOUTUBE',
    });
    if (loader) {
      clearInterval(loader);
    }
  } else if (window.location.href.startsWith('https://vibe.naver.com/')) {
    window.postMessage({
      type: 'VIBE',
    });
    if (loader) {
      clearInterval(loader);
    }
  }
}

loader = window.setInterval(() => {
  init();
}, 2000);
