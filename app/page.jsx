import styles from './page.module.css'
import Section1 from './Home/Sections/Section1'
import Section2 from './Home/Sections/Section2'
import Section3 from './Home/Sections/Section3'
import Section4 from './Home/Sections/Section4'
import Section5 from './Home/Sections/Section5'
import Section6 from './Home/Sections/Section6'
import Section7 from './Home/Sections/Section7'
import Section8 from './Home/Sections/Section8'
import Section9 from './Home/Sections/Section9'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='home'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </div>
    </main>
  )
}
