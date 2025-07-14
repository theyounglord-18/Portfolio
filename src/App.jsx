import { Component } from 'react'
import ThemeContext from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

class App extends Component{
  state = {
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }
     render() {
      const {isDarkTheme} = this.state

  return (
    <ThemeContext.Provider
    value={{
      isDarkTheme,
      toggleTheme: this.toggleTheme,
    }}
  >
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    </ThemeContext.Provider>
  )
}
}

export default App
