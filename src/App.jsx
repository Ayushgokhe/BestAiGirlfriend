import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { CssBaseline } from '@mui/material'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9d5eff',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", sans-serif',
  },
})

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  color: white;
`

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:eventId" element={<EventDetails />} />
          </Routes>
        </AppContainer>
      </ThemeProvider>
    </Router>
  )
}

export default App
