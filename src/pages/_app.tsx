import { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppProps } from "next/app";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";

// MUIの基本設定
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
