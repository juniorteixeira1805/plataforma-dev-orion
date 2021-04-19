import { useState } from 'react'
import styles from '../styles/components/NavBar.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function NavBar() {
  const [menu, setMenu] = useState(false)

  function handleClick() {
    setMenu(!menu)
  }

  return (
    <header className={styles.header}>

      <div className={styles.content}>
        <span className={styles.logo}>DevOrion</span>
        <button 
          className={styles.button_icon} 
          onClick={handleClick}
        >
          { menu ?
            <AiOutlineClose className={styles.icon} /> : 
            <AiOutlineMenu className={styles.icon} /> 
          }
        </button>
      </div>

      <nav 
        className={styles.navbar}
        style={{
          display: menu ? "flex" : "none"
        }}
      >
        <a href="#" onClick={() => setMenu(false)}>Home</a>
        <a href="#" onClick={() => setMenu(false)}>Projetos</a>
        <a href="#" onClick={() => setMenu(false)}>Equipe</a>
      </nav>

    </header>
  )
}

export default NavBar