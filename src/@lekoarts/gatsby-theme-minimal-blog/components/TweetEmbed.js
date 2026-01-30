import React, { useEffect, useRef } from 'react';

const TweetEmbed = ({ embedHtml }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const adjustIframeHeight = () => {
      if (iframeRef.current) {
        const iframe = iframeRef.current;
        const contentHeight = iframe.contentWindow.document.body.scrollHeight;
        iframe.style.height = `${contentHeight}px`;
      }
    };

    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', adjustIframeHeight);
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', adjustIframeHeight);
      }
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: '100%',
        minHeight: '800px',
        border: 'none',
        overflow: 'hidden',
      }}
      title="Tweet Embed"
      srcDoc={embedHtml}
      sandbox="allow-scripts allow-same-origin"
    />
  );
};

export default TweetEmbed;
