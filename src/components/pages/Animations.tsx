import { useMemo, useState } from 'react'
import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import Footer from './Footer'
import LightboxModal from '../../components/pages/LightBoxModal'
import useReveal from '../../hooks/useReveal'
import { getByCategory } from '../../data/projects'
import type { Project } from '../../interfaces/interfaces'
import '../../styles/Animations.css'



export default function Animations() {
  const animations = useMemo(() => getByCategory('animation') as Project[], [])
  const [expanded, setExpanded] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const headingRef = useReveal()

  const visible = expanded ? animations : animations.slice(0)
  const remaining = animations.length - visible.length

  return (
    <>
      <Navbar />
      <main>
        <section className="page-header page-header--dark">
          <div className="container">
            <p className="eyebrow page-header__eyebrow">Full Collection</p>
            <h1 ref={headingRef} className="reveal page-header__title">
              Animations /
              <span className="ka page-header__title-ka">ანიმაციები</span>
            </h1>
            <p className="page-header__count">
              {animations.length} works · hover to play · sound enabled
            </p>
          </div>
        </section>

        <section className="section section--dark">
          <div className="container">
            <div className="masonry">
              {visible.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onOpenLightbox={(p: Project) => setSelectedProject(p)}
                />
              ))}
            </div>

            {remaining > 0 && (
              <div className="load-more-row">
                <button
                  className="load-more load-more--dark"
                  onClick={() => setExpanded(true)}
                  aria-expanded={expanded}
                >
                  <span className="load-more__mark" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                  <span className="load-more__label">
                    View {remaining} more
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>

        <Footer variant="dark" />
      </main>

      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}