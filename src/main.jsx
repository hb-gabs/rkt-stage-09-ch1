import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js';
import { Home, NewMovie, MovieView, Profile, Signin, Signup } from './pages/index.js'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Home />}
              />
            <Route
              path='/movie/new'
              element={<NewMovie />}
              />
            <Route
              path='/movie/view'
              element={<MovieView />}
              />
            <Route
              path='/profile'
              element={<Profile />}
              />
            <Route
              path='/signin'
              element={<Signin />}
              />
            <Route
              path='/signup'
              element={<Signup />}
              />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
