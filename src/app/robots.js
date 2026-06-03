import { SITE_URL } from '@/constants/site'

const robots = () => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: SITE_URL,
})

export default robots
