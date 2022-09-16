import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
import { FiLinkedin, FiGithub, FiFigma, FiMail } from "react-icons/fi";

const name = '[Quan Bui]'
export const siteTitle = 'Quan Bui\'s Portfolio'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Quan's showcase of projects and blogs"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <div className={styles.info}>
              <div className={styles.hvrIconRotate}>
                <Link href="https://www.linkedin.com/in/quanbkm/">
                  <FiLinkedin className={styles.hvrIcon} />
                </Link>
              </div>
              <div className={styles.hvrIconRotate}>
                <Link href="https://github.com/quandarealest">
                  <FiGithub className={styles.hvrIcon} />
                </Link>
              </div>
              <div className={styles.hvrIconRotate}>
                <Link href="https://www.figma.com/@quanb">
                  <FiFigma className={styles.hvrIcon} />
                </Link>
              </div>
              <div className={styles.hvrIconRotate}>
                <Link href="mailto:buiquan2710@gmail.com">
                  <FiMail className={styles.hvrIcon} />
                </Link>
              </div>
            </div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Front-end Developer',
                1000,
                'Chelsea fan',
                1000,
                'Chelsea die-hard fan',
                500,
                'Chelsea die-hard fan 🎉',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="headingMd"
              style={{ fontSize: '1em' }}
            />
          </>
        ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <div className={styles.info}>
                <div className={styles.hvrIconRotate}>
                  <Link href="https://www.linkedin.com/in/quanbkm/">
                    <FiLinkedin className={styles.hvrIcon} />
                  </Link>
                </div>
                <div className={styles.hvrIconRotate}>
                  <Link href="https://github.com/quandarealest">
                    <FiGithub className={styles.hvrIcon} />
                  </Link>
                </div>
                <div className={styles.hvrIconRotate}>
                  <Link href="https://www.figma.com/@quanb">
                    <FiFigma className={styles.hvrIcon} />
                  </Link>
                </div>
                <div className={styles.hvrIconRotate}>
                  <Link href="mailto:buiquan2710@gmail.com">
                    <FiMail className={styles.hvrIcon} />
                  </Link>
                </div>
              </div>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}