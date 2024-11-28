const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getInitialTheme() {
              const savedTheme = window.localStorage.getItem('theme');
              return savedTheme || 'light';
            }
            
            document.documentElement.setAttribute('data-theme', getInitialTheme());
          })();
        `,
      }}
    />,
  ]);
};
