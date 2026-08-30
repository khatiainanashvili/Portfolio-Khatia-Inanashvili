import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'

interface NavLinkItem {
  to: string
  label: string
  labelKa: string
  end?: boolean
}

const LINKS: NavLinkItem[] = [
  { to: '/', label: 'Home', labelKa: 'მთავარი', end: true },
  { to: '/illustrations', label: 'Digital Illustrations', labelKa: 'ილუსტრაციები' },
  { to: '/animations', label: 'Animations', labelKa: 'ანიმაციები' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        {/* მარცხნივ: შენი სახელი (გაზრდილი ზომით) */}
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-en">Khatia Inanashvili</span>
          <span className="nav__brand-ka ka">ხატია ინანაშვილი</span>
        </NavLink>

        {/* 🎯 ცენტრში: PORTFOLIO */}
        <div className="nav__center-title">
          <span>PORTFOLIO</span>
        </div>

        {/* მარჯვნივ: ნავიგაციის ბმულები */}
        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        {LINKS.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={() => setOpen(false)}
            className={({ isActive }) => `nav__mobile-link ${isActive ? 'nav__mobile-link--active' : ''}`}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <span>{link.label}</span>
            <span className="ka nav__mobile-link-ka">{link.labelKa}</span>
          </NavLink>
        ))}
      </div>
    </header>
  )
}