import '../../styles/Footer.css'

interface FooterProps {
  variant?: 'light' | 'dark'
}

export default function Footer({ variant = 'light' }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={`footer footer--${variant}`}>
      <div className="container footer__inner">
        <div className="footer__identity">
          <span className="footer__name">Khatia Inanashvili/</span>
          <span className="ka footer__name-ka">ხატია ინანაშვილი</span>
          <span className="footer__role">Digital Artist / Designer</span>
          <span className="footer__role">Phone / +995 558 191 448</span>
          
        </div>

        <div className="footer__links">
          <a href="mailto:inanashvilikh@gmail.com" className="footer__link">
            Email
          </a>
          <a
            href="https://www.instagram.com/khatia_inanashvili/"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Instagram
          </a>
          <a
            href="https://www.behance.net/khatiainan6e0a"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Behance
          </a>
          
        </div>

        <p className="footer__meta">© {year} — Portfolio for Art Academy review</p>
      </div>
    </footer>
  )
}
