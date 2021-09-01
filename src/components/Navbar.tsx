import Link from 'next/link'
import styles from '@/styles/components/Navbar.module.scss'


const Navbar = () => {
  return (
    <div
      id={styles.navbar}
      className='uk-sticky uk-dark'
      uk-sticky='sel-target: .uk-navbar-container;
       cls-active: uk-navbar-sticky;'
    >
      <nav
        id={styles.navcontainer}
        className='uk-navbar-container'
        uk-navbar
      >

        {/* Navbar title/brand - left-end of navbar */}
        <div id={styles.parent} className='uk-navbar-left'>
          <a
            id={styles.brand}
            href='/'
            className='uk-navbar-item uk-logo uk-margin-small-left'
          >
            S | U
          </a>
        </div>

        <div className='uk-navbar-right'>
          {/* Navbar links - right-end of navbar */}
          <ul id={styles.list} className='uk-navbar-nav'>
            <li id={styles.listItem} className='uk-*'>
              <Link href='/charts'>
                <a className='uk-text-lead'>Charts</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div >
  )
}

export default Navbar
