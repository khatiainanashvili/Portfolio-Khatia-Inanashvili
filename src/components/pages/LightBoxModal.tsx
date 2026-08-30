import { useEffect } from 'react'
import type { Project } from '../../types/project'

interface LightboxModalProps {
  project: Project | null
  onClose: () => void
}

export default function LightboxModal({ project, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  const videoSrc = project.videoUrl || project.video || project.mediaUrl || project.src
  const imageSrc = project.imageUrl || project.image || project.posterUrl || project.mediaUrl
  const isVideo = Boolean(project.type === 'video' || (videoSrc && videoSrc.endsWith('.mp4')))

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕</button>
        
        <div className="lightbox-media-wrapper">
          {isVideo && videoSrc ? (
            <video src={videoSrc} controls autoPlay className="lightbox-media" />
          ) : (
            <img src={imageSrc} alt={project.title} className="lightbox-media" />
          )}
        </div>

        <div className="lightbox-details">
          <h3>{project.title}</h3>
          {project.software && <p>{project.software}</p>}
        </div>
      </div>
    </div>
  )
}