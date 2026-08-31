import { useRef, useState, MouseEvent } from 'react'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
  onOpenLightbox: (project: Project) => void
}

export default function ProjectCard({ project, onOpenLightbox }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(true)

  // იღებს ვიდეოს მისამართს და ამატებს #t=0.001-ს iOS-ისთვის
  const rawVideoSrc = project.videoUrl || project.video || project.mediaUrl || project.src
  const videoSrc = rawVideoSrc ? `${rawVideoSrc}#t=0.001` : ''
  
  const imageSrc = project.imageUrl || project.image || project.posterUrl || project.mediaUrl
  const isVideo = Boolean(project.type === 'video' || (rawVideoSrc && rawVideoSrc.endsWith('.mp4')))

  const handleMouseEnter = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  const toggleSound = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div
      className="card-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenLightbox(project)}
    >
      <div className="card-item__frame">
        {isVideo && videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={imageSrc}
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="metadata"
            className="card-item__media"
          />
        ) : (
          <img
            src={imageSrc}
            alt={project.title}
            className="card-item__media"
          />
        )}

        {/* Play Icon - ჩანს მხოლოდ ვიდეოზე, როცა არ უკრავს */}
        {isVideo && !isPlaying && (
          <div className="card-item__play-badge">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}

        {/* ხმის ღილაკი */}
        {isVideo && isPlaying && (
          <button className="card-item__sound-btn" onClick={toggleSound} title="Toggle Sound">
            {isMuted ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="1" x2="23" y2="23"></line>
                <path d="M9 9v6a3 3 0 0 0 5.12 2.12M15 9.34V4a2 2 0 0 0-3.54-1.3L7.5 6H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.7l1.3 1.04"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            )}
          </button>
        )}
      </div>

      <div className="card-item__info">
        <h4 className="card-item__title">{project.title}</h4>
        <div className="card-item__meta">
          {project.software && <span>{project.software}</span>}
          {project.date && <span>{project.date}</span>}
        </div>
      </div>
    </div>
  )
}