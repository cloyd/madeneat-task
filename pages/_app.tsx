import { css, Global } from "@emotion/react";

import "normalize.css/normalize.css";

const App = ({ Component, pageProps }) => (
  <>
    <Global
      styles={css`
        /* global css */
        body {
          background-color: #fafafa;
        }
      `}
    ></Global>
    <Component {...pageProps} />
  </>
);

export default App;
