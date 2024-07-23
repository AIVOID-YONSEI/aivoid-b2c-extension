import React from 'react';
import { createRoot } from 'react-dom/client';

const Popup = () => {
  return (
    <div style={{ width: '280px', padding: '10px' }}>
      <h1 style={{ fontWeight: 700, fontSize: '24px', textAlign: 'center' }}>AI VOID</h1>
      <p style={{ fontWeight: 400, fontSize: '16px' }}>
        음성컨텐츠의 AI 생성 여부를 분석하고
        <br />
        결과를 시각적으로 표시해요
      </p>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
