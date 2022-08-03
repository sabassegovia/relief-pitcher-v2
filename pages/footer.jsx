import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
  <div className={styles.footer}>
    <a
      href="https://thelistwire.usatoday.com/lists/the-top-50-craft-breweries-in-the-united-states-in-2021/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Heres a list of breweries{' '}
      {/* <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span> */}
    </a>
  </div>)
}
export default Footer;