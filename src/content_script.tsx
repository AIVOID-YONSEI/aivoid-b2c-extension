import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ type }: { type: 'YOUTUBE' | 'VIBE' }) {
  useEffect(() => {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const resolveAfter3Sec = async () => {
      await delay(type === 'YOUTUBE' ? 3000 : 6000);

      if (type === 'YOUTUBE') {
        throw new Error();
      } else if (type === 'VIBE') {
        return;
      }
    };

    delay(3000).then(() => {
      toast.promise(resolveAfter3Sec, {
        pending: `${type === 'YOUTUBE' ? '유튜브' : '바이브'} 음성을 분석중이에요 🕒`,
        success: `신뢰해도 되는 음성컨텐츠에요 👌`,
        error: `AI에 의해 생성된 음성컨텐츠에요 🤯`,
      });
    });
  }, [type]);

  return <ToastContainer position="top-right" theme="dark" style={{ fontSize: '18px', fontWeight: 700, width: '400px' }} />;
}

function initApp(type: 'YOUTUBE' | 'VIBE') {
  const appContainer = document.createElement('div');
  appContainer.id = 'app-container';
  document.body.appendChild(appContainer);
  createRoot(appContainer).render(<App type={type} />);
}

chrome.runtime.onMessage.addListener(function (msg) {
  initApp(msg.type);
});

window.addEventListener('message', function (e) {
  if (e.data.type === 'YOUTUBE') {
    initApp('YOUTUBE');
  } else if (e.data.type === 'VIBE') {
    initApp('VIBE');
  }
});
