import BookCta from '@/components/book-cta/book-cta'
import PageHero from '@/components/page-hero/page-hero'
import ServicesGroup from '@/components/services-group/services-group'
import { SERVICE_GROUPS } from '@/constants/service-groups'

export const metadata = {
  title: 'Services',
  description:
    'Therapy services from individual online counseling to family work, art and nature workshops, and specialty programs for stress, trauma, and growth.',
}

const ServicesPage = () => {
  return (
    <>
      <PageHero
        kicker="Therapy services"
        title="Connecting you to the support you need."
        subtitle="A range of services to meet you where you are — from individual counseling to relationship support and creative workshops. Culturally sensitive care, practical tools, and steady guidance."
      />
      {SERVICE_GROUPS.map((group, index) => (
        <ServicesGroup
          key={group.title}
          kicker={group.kicker}
          title={group.title}
          intro={group.intro}
          items={group.items}
          accent={index % 2 === 1 ? 'sand' : 'none'}
        />
      ))}
      <BookCta />
    </>
  )
}

export default ServicesPage
