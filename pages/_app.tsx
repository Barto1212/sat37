import { AppProps } from 'next/app';
import '../styles/index.scss';
import { SnackbarProvider } from 'notistack'

function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <Component {...pageProps} />;
    </SnackbarProvider>
  )
}

export default App;
