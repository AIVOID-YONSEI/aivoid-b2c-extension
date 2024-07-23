let loader: number;

function init() {
  if (window.location.href.startsWith('https://www.youtube.com/watch')) {
    chrome.runtime.sendMessage({
      type: 'YOUTUBE',
    });
    if (loader) {
      clearInterval(loader);
    }
  } else if (window.location.href.startsWith('https://vibe.naver.com/')) {
    chrome.runtime.sendMessage({
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
