import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./helpers/theme";
import Layout from "./common/layout";
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>  
    </Router>
  </ThemeProvider>
    
  );
}

export default App;
