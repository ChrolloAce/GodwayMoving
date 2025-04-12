'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const ChatWidget = () => {
  return (
    <>
      <Script
        id="lead-connector-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="67fa9ffa30666b932427cb96"
        strategy="afterInteractive"
      />
    </>
  );
};

export default ChatWidget; 