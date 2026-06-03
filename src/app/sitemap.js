import { SITE_URL } from '@/constants/site'
import { THERAPISTS } from '@/constants/therapists'

const STATIC_ROUTES = [
  { path: '', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/services', priority: 0.8 },
  { path: '/book-session', priority: 0.9 },
  { path: '/contact', priority: 0.7 },
]

const sitemap = () => {
  const lastModified = new Date()

  const staticEntries = STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))

  const therapistEntries = THERAPISTS.map((therapist) => ({
    url: `${SITE_URL}/therapists/${therapist.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...therapistEntries]
}

export default sitemap
