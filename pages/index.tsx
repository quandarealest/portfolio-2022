import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'


export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string,
    occupation: string,
    tech: string,
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Not a naïve web developer, yet a guru with 6 years in the industry (2+ years experience in the out-sourcing field).</p>
        <p>
          Love bugs 🐞, occasionally break things, and sub out after 10 minutes of running on the field ⚽.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Highlighted Projects</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, occupation, tech }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <h6>{occupation}</h6>
              {/* <h6>
                Tech: {tech}
              </h6> */}
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Education</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            Confederation College, CAN
            <br />
            <h6>Post-graduate diploma in Information Communication Technology for Business</h6>
            <small className={utilStyles.lightText}>
              <Date dateString={'2022-08-19'} />
            </small>
          </li>
          <li className={utilStyles.listItem}>
            FPT University, VIE
            <br />
            <h6>Engineering Degree in Information System</h6>
            <small className={utilStyles.lightText}>
              <Date dateString={'2019-12-11'} />
            </small>
          </li>
          <li className={utilStyles.listItem}>
            Deakin University, AUS
            <br />
            <h6>Exchange student in BSc of Computer Science</h6>
            <small className={utilStyles.lightText}>
              <Date dateString={'2019-07-01'} />
            </small>
          </li>
          {/* ))} */}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}