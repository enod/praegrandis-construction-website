interface ProjectStatusBadgeProps {
  status?: string
  className?: string
}

function getProjectStatusLabel(status?: string): string {
  if (status === 'In progress') {
    return 'In Progress'
  }

  if (status === 'Not started') {
    return 'Planning'
  }

  return status || ''
}

function getProjectStatusClasses(status?: string): string {
  if (status === 'In progress') {
    return 'bg-[#F5C842] text-gray-950 ring-black/10'
  }

  return 'bg-white/95 text-gray-700 ring-gray-200'
}

export function shouldShowProjectStatus(status?: string): boolean {
  return Boolean(status && status !== 'Done')
}

export default function ProjectStatusBadge({ status, className = '' }: ProjectStatusBadgeProps) {
  if (!shouldShowProjectStatus(status)) {
    return null
  }

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium shadow-sm ring-1 ${getProjectStatusClasses(status)} ${className}`}>
      {getProjectStatusLabel(status)}
    </span>
  )
}
