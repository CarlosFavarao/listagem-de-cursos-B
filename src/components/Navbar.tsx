import './Navbar.css'

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path
              d="M12 3 2 8l10 5 8-4.09V16h2V8L12 3Z"
              fill="currentColor"
            />
            <path
              d="M6 11.5V16c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5l-6 3-6-3Z"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
        </span>
        <span className="navbar__title">SAUF</span>
      </div>

      <nav className="navbar__links" aria-label="Navegação principal">
        <a href="#">Sobre Nós</a>
        <a href="#">Eventos</a>
        <a href="#">Parcerias</a>
      </nav>

      <div className="navbar__actions">
        <button type="button" className="navbar__icon-btn" aria-label="Notificações">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path
              d="M12 3a6 6 0 0 0-6 6v3.09c0 .5-.16.99-.46 1.4L4 16h16l-1.54-2.51a2.5 2.5 0 0 1-.46-1.4V9a6 6 0 0 0-6-6Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 19a2.5 2.5 0 0 0 5 0"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <span className="navbar__badge" aria-hidden="true" />
        </button>
        <button type="button" className="navbar__icon-btn" aria-label="Favoritos">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path
              d="M12 20s-7-4.35-9.5-8.55C.86 8.36 2.1 5 5.4 5c1.9 0 3.3 1.02 4.1 2.3.16.26.6.26.76 0C11.06 6.02 12.46 5 14.36 5c3.3 0 4.54 3.36 2.9 6.45C19 15.65 12 20 12 20Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button type="button" className="navbar__icon-btn" aria-label="Perfil">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <circle cx="12" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M4.5 19.5c1.4-3.2 4.2-5 7.5-5s6.1 1.8 7.5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}
