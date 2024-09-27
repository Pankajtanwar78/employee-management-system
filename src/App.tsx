
import { useState } from 'react'
import './App.css'
import { darkTheme, lightTheme } from './theme/theme'
import { ThemeProvider } from 'styled-components';

function App() {
  
  const [isDarkMode, setDarkMode] = useState(false)
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  }

  console.log(toggleTheme());

  return (
    <ThemeProvider theme={theme}>
      <div>Future Employee Management</div>
    </ThemeProvider>
  )
}

export default App
