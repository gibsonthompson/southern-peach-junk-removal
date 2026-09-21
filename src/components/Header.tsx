import { site } from "@/data/site";
import { Icon } from "@/components/icons";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "How It Works" },
  { href: "#areas", label: "Service Area" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <a href="#top" aria-label={`${site.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo" src="/logo-black.png" alt={site.name} />
        </a>
        <nav className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="nav-call" href={site.phoneHref}>
          <Icon name="phone" /> {site.phone}
        </a>
      </div>
    </header>
  );
}
