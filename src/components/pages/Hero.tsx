import useReveal from '../../hooks/useReveal'
import '../../styles/Hero.css'

export default function Hero() {
  const eyebrowRef = useReveal()
  const nameRef = useReveal()
  const wordRef = useReveal()
  const lineRef = useReveal()

  return (
    <section className="hero">
      <div className="hero__inner container">
        <p ref={eyebrowRef as any} className="reveal hero__eyebrow">
          Digital Illustration &amp; Animation
        </p>

        <h1 ref={nameRef as any} className="reveal hero__name">
          <span className="hero__name-en">Khatia Inanashvili / </span>
          <span className="hero__name-ka ka">ხატია ინანაშვილი</span>
        </h1>

        <div ref={wordRef as any} className="reveal hero__word-block">
          <span className="hero__word">Portfolio /</span>
          <span className="hero__word-ka ka">პორტფოლიო</span>
        </div>

         <div ref={lineRef as any} className="reveal hero__foot">
          <span className="hero__rule" aria-hidden="true" />
          <p className="hero__note">
            Selected illustration and animation work, presented for review.
          </p>
        </div>
      </div>
    </section>
  )
}
