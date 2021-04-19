import { useState } from 'react'
import styles from '../styles/components/NavBar.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function NavBar() {
  const [menu, setMenu] = useState(false)

  function handleMenuClick() {
    setMenu(!menu)
  }

  return (
    <header className={styles.header}>

      <div className={styles.content}>
        <span className={styles.logo}>DevOrion</span>
        <button 
          className={styles.button_icon} 
          onClick={handleMenuClick}
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
          display: menu ? "block" : "none"
        }}
      >
        <a href="#">Home</a>
        <a href="#">Projetos</a>
      </nav>

    </header>
  )
}

export default NavBar