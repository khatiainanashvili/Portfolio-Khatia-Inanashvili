import { useMemo, useState } from 'react'
import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import Footer from './Footer'
import useReveal from '../../hooks/useReveal'
import { getByCategory } from '../../data/projects'
import type { Project } from './Home'
import '../../styles/DigitalIllustrations.css'

const INITIAL_COUNT = 6

export default function DigitalIllustrations() {
  const illustrations = useMemo(() => getByCategory('illustration') as Project[], [])
  const [expanded, setExpanded] = useState(false)
  const headingRef = useReveal()

  const visible = expanded ? illustrations : illustrations.slice(0, INITIAL_COUNT)
  const remaining = illustrations.length - visible.length

  return (
    <>
      <Navbar />
      <main>
        <section className="page-header">
          <div className="container">
            <p className="eyebrow page-header__eyebrow">Full Collection</p>
            <h1 ref={headingRef} className="reveal page-header__title">
              Digital Illustrations
              <span className="ka page-header__title-ka">ციფრული ილუსტრაციები</span>
            </h1>
            <p className="page-header__count">
              {illustrations.length} works
            </p>
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <div className="masonry">
              {visible.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>

            {remaining > 0 && (
              <div className="load-more-row">
                <button
                  className="load-more"
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

        <Footer />
      </main>
    </>
  )
}
