import { useMemo, useState } from 'react'
import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import Footer from './Footer'
import LightboxModal from '../pages/LightBoxModal'
import useReveal from '../../hooks/useReveal'
import { getByCategory } from '../../data/projects'
import type { Project } from '../../types/project'
import '../../styles/Home.css'

const INITIAL_COUNT = 20

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const animations = useMemo(() => getByCategory('animation') as Project[], [])
  const [expandedAnim, setExpandedAnim] = useState<boolean>(false)
  const animHeadingRef = useReveal()

  const visibleAnimations = expandedAnim ? animations : animations.slice(0, INITIAL_COUNT)
  const remainingAnim = animations.length - visibleAnimations.length

  const illustrations = useMemo(() => getByCategory('illustration') as Project[], [])
  const [expandedIllus, setExpandedIllus] = useState<boolean>(false)
  const illusHeadingRef = useReveal()

  const visibleIllustrations = expandedIllus ? illustrations : illustrations.slice(0, INITIAL_COUNT)
  const remainingIllus = illustrations.length - visibleIllustrations.length

  return (
    <>
      <Navbar />
      <main className="main-dark">
        
        {/* SECTION 1: ANIMATIONS */}
        <section className="section section--dark" id="animations">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow section-heading__eyebrow">Motion Works</p>
              <h2 ref={animHeadingRef} className="reveal section-heading__title">
                <span>Animations / </span> 
                <span className="ka section-heading__title-ka">ანიმაციები</span>
              </h2>
            </div>

            <div className="pinterest-grid">
              {visibleAnimations.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenLightbox={(p) => setSelectedProject(p)}
                />
              ))}
            </div>

            {remainingAnim > 0 && (
              <div className="load-more-row">
                <button className="load-more load-more--dark" onClick={() => setExpandedAnim(true)}>
                  <span className="load-more__label">View {remainingAnim} more</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 2: DIGITAL ILLUSTRATIONS */}
        <section className="section section--dark" id="illustrations">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow section-heading__eyebrow">Visual Works</p>
              <h2 ref={illusHeadingRef} className="reveal section-heading__title">
                <span>Digital Illustrations /</span>
                <span className="ka section-heading__title-ka">ციფრული ილუსტრაციები</span>
              </h2>
            </div>

            <div className="pinterest-grid">
              {visibleIllustrations.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenLightbox={(p) => setSelectedProject(p)}
                />
              ))}
            </div>

            {remainingIllus > 0 && (
              <div className="load-more-row">
                <button className="load-more load-more--dark" onClick={() => setExpandedIllus(true)}>
                  <span className="load-more__label">View {remainingIllus} more</span>
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