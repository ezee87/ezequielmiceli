import styles from './ProposalFooter.module.css';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ezequiel-miceli',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 8.25v9.25M6.5 5.5v.01M10.75 17.5v-5.25a4 4 0 0 1 4-4c2.25 0 3.25 1.75 3.25 4v5.25M10.75 8.75v8.75" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'http://wa.me/5492284574707',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.1 18.9 6 15.6A7 7 0 1 1 8.4 18l-3.3.9Z" />
        <path d="M9.1 8.8c.2 2.7 2.3 4.8 5 5l1.1-1.2 2 .9c-.1 1.3-1.2 2.1-2.5 2-4.1-.3-7.5-3.7-7.8-7.8-.1-1.3.7-2.4 2-2.5l.9 2-1.2 1.1" />
      </svg>
    ),
  },
];

export default function ProposalFooter() {
  return (
    <footer className={styles.footer} data-atmosphere="dark">
      <div className={styles.inner}>
        <p className={styles.name}>Ezequiel Miceli</p>

        <p className={styles.copyright}>© 2026 Ezequiel Miceli. Todos los derechos reservados.</p>

        <nav className={styles.links} aria-label="Enlaces de contacto">
          {links.map(({ label, href, icon }) => (
            <a key={label} className={styles.link} href={href} target="_blank" rel="noreferrer">
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
