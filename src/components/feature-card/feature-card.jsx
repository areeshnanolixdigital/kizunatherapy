import PropTypes from 'prop-types'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const FeatureCard = ({ title, description, actionLabel, onAction, className }) => {
  return (
    <div className={cn('rounded-lg border p-4', className)}>
      <h3 className="font-semibold">{title}</h3>
      {description && <p className="mt-1 text-muted-foreground">{description}</p>}
      {actionLabel && (
        <Button className="mt-3" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  className: PropTypes.string,
}

FeatureCard.defaultProps = {
  description: '',
  actionLabel: '',
  onAction: undefined,
  className: '',
}

export default FeatureCard
