import PropTypes from 'prop-types'

import { cn } from '@/lib/utils'

const HibiscusPetal = ({ className }) => {
  return (
    <svg
      viewBox="0 0 240 320"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      className={cn('block', className)}
    >
      <path d="M 122 0 C 204 36 244 134 218 224 C 198 290 144 322 100 318 C 60 308 22 264 10 196 C -8 108 36 28 122 0 Z" />
    </svg>
  )
}

HibiscusPetal.propTypes = {
  className: PropTypes.string,
}

HibiscusPetal.defaultProps = {
  className: '',
}

export default HibiscusPetal
