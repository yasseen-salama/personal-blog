// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="theme-ui-no-flash"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var classNameDark = 'theme-ui-dark';
            var classNameLight = 'theme-ui-__default';
            var preferDarkQuery = '(prefers-color-scheme: dark)';

            var mql = window.matchMedia(preferDarkQuery);
            var supportsColorSchemeQuery = mql.media === preferDarkQuery;
            var localStorageTheme = null;
            try {
              localStorageTheme = localStorage.getItem('theme-ui-color-mode');
            } catch (err) {}

            if (localStorageTheme === 'dark' || (!localStorageTheme && supportsColorSchemeQuery && mql.matches)) {
              document.documentElement.classList.add(classNameDark);
            } else {
              document.documentElement.classList.add(classNameLight);
            }

            window.matchMedia(preferDarkQuery).addEventListener('change', function(e) {
              if (e.matches) {
                document.documentElement.classList.remove(classNameLight);
                document.documentElement.classList.add(classNameDark);
              } else {
                document.documentElement.classList.remove(classNameDark);
                document.documentElement.classList.add(classNameLight);
              }
            });
          })();
        `,
      }}
    />,
  ]);
};
