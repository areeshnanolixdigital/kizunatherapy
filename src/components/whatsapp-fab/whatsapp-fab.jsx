import { MessageCircle } from 'lucide-react'

import { CONTACT } from '@/constants/nav'

const WhatsAppFab = () => {
  return (
    <aside aria-label="Quick contact">
      <a
        href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent('Hi! I have a question.')}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-frond px-4 py-3 text-sm text-powder shadow-lg ring-1 ring-frond/20 transition-colors hover:bg-stem focus-visible:bg-stem focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone/60 md:bottom-8 md:right-8"
      >
        <MessageCircle aria-hidden="true" size={18} strokeWidth={1.75} />
        <span className="hidden sm:inline">Chat with us</span>
      </a>
    </aside>
  )
}

export default WhatsAppFab
