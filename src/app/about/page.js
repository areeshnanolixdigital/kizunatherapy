import AboutJourney from '@/components/about-journey/about-journey'
import AboutMilestones from '@/components/about-milestones/about-milestones'
import AboutValues from '@/components/about-values/about-values'
import HomeTherapists from '@/components/home-therapists/home-therapists'
import PageHero from '@/components/page-hero/page-hero'

export const metadata = {
  title: 'About Us',
  description:
    'Who we are — a multicultural team of therapists offering culturally sensitive, accessible care rooted in genuine connection.',
}

const AboutPage = () => {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Who we are."
        subtitle="At Kizuna Therapy, we believe in the power of genuine connection. Kizuna names the deep bonds we create — culturally sensitive, accessible therapy that helps you build emotional resilience, develop self-awareness, and navigate life's challenges with practical tools."
      />
      <AboutJourney />
      <AboutMilestones />
      <HomeTherapists />
      <AboutValues />
    </>
  )
}

export default AboutPage
