import { useEffect, useState } from "react"
import "../styles/Header.css"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [menuText, setMenuText] = useState("☰")
    const [darkMode, setDarkMode] = useState(true)
    
    function toggleMenu() {
        setMenuOpen(!menuOpen)
        setMenuText(menuOpen ? "☰" : "✕")
    }

    function toggleTheme() {
    setDarkMode(!darkMode)
    }

    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light"
        document.documentElement.className = darkMode ? "dark" : "light"
        localStorage.setItem("theme", darkMode ? "dark" : "light")
    }, [darkMode])

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "light") {
        setDarkMode(false)
        }
    }, [])

  function handleCloseMenu() {
    setMenuOpen(false)
    setMenuText("☰")
  }


  return (
    <header className="header">
      <div className="header-container">
        <a 
          className="menu-button"
          onClick={toggleMenu}
        >
          {menuText}
        </a>
        <a className="header-title" href="#home">Portfólio</a>
        <div className="theme-placeholder">
            <input 
                type="checkbox" 
                name="checkbox" 
                id="checkbox"
                checked={!darkMode}    
                onChange={toggleTheme}
            />
            <label htmlFor="checkbox"></label>
        </div>
      </div>
      
      {menuOpen && (
        <nav className="side-menu">
          <a href="#home" onClick={handleCloseMenu}>Home</a>
          <a href="#about" onClick={handleCloseMenu}>Sobre</a>
          <a href="#skills" onClick={handleCloseMenu}>Habilidades</a>
          <a href="#projects" onClick={handleCloseMenu}>Projetos</a>
          <a href="#contacts" onClick={handleCloseMenu}>Contato</a>
        </nav>
      )}
    </header>
  )
}
