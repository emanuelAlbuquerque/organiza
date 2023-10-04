import { AboutView } from '@/Views/AboutView/AboutView'

const About = () => {
  return (
    <AboutView />
  )
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

export default About