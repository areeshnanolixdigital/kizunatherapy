import HomeAboutKizuna from '@/components/home-about-kizuna/home-about-kizuna'
import HomeAboutPillars from '@/components/home-about-pillars/home-about-pillars'
import HomeFaq from '@/components/home-faq/home-faq'
import HomeHero from '@/components/home-hero/home-hero'
import HomeMarquee from '@/components/home-marquee/home-marquee'
import HomeServices from '@/components/home-services/home-services'
import HomeTherapists from '@/components/home-therapists/home-therapists'
import { CONTACT } from '@/constants/nav'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/constants/site'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${SITE_URL}#organization`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Beşiktaş',
    addressRegion: 'İstanbul',
    postalCode: '34400',
    addressCountry: 'TR',
  },
  medicalSpecialty: 'Psychiatric',
  availableService: [
    'Individual Online Therapy',
    'Family & Relationship Therapy',
    'Art Therapy',
    'Nature Retreats',
    'Group Therapy',
  ],
}

const HomePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeHero />
      <HomeAboutPillars />
      <HomeAboutKizuna />
      <HomeTherapists />
      <HomeServices />
      <HomeMarquee />
      <HomeFaq />
    </>
  )
}

export default HomePage
