import { AppProps } from 'next/app';
import { useState, useEffect } from 'react'
import LoadingScreen from '../components/loadingScreen'
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  })
  return (
    loading ? (
      <LoadingScreen />
    ) : (
        <Component {...pageProps} />
      ));
}

export default App;