import Link from 'next/link'
import styles from '@/styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <>
      <div
        id={styles.footer}
        className='uk-flex uk-flex-middle uk-flex-around'
      >
        <Link href='https://github.com/Brlaney'>
          <p className={styles.link}>
            Developed by
            <a
              id={styles.span}
              target='_blank'
              rel='noopener noreferrer'
              className='uk-text-lead'
            >
              Brendan Laney
            </a>
            &copy; 2021
          </p>
        </Link>
        <Link href='/tests'>
          <p className={styles.link}>
            <a
              id={styles.tests}
              target='_blank'
              rel='noopener noreferrer'
              className='uk-text-lead'
            >
              Tests
            </a>
          </p>
        </Link>
      </div>
    </>
  )
}

export default Footer
