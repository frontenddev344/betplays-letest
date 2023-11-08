import './App.css';
import CircleLoader from "react-spinners/CircleLoader";
import { RouterProvider} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { router } from "../src/utils/routes";
import {HelmetProvider } from "react-helmet-async";
import CookieConsent from 'react-cookie-consent';
import { Typography } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)

  }, [])
  return (
    <div className="App">
      {
        loading ?
          <CircleLoader
            color={'#0ed9a8'}
            loading={loading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <HelmetProvider>
          <RouterProvider router={router} />
          </HelmetProvider>
      }
            <CookieConsent debug={true}
        style={{ background: '#000', padding: '20px 0' }}
        buttonStyle={{
          color: '#fff', background: '#0ed9a8'
        }}
        buttonText="I accept!"


      >

        <Typography component="h4">
          This website uses cookies
        </Typography>
        <Typography >
          We use cookies to personalise content and ads, to provide social media features and to
          analyse our traffic. We also share information about your use of our site with our social media,
          advertising and analytics partners who may combine it with other information that you’ve provided
          to them or that they’ve collected from your use of their services.
        </Typography>

      </CookieConsent>

    </div>
  );
}

export default App;
