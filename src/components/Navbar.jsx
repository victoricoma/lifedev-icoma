import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <li><a href="#">
            <span>Home</span>
          </a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">New Post</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">About Us</a></li>
          <li>
            <button className={styles.exit}>Exit</button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar