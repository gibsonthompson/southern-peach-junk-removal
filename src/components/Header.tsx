import Link from "next/link";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#process", label: "How It Works" },
  { href: "/service-area", label: "Service Area" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" aria-label={`${site.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo" src="/peach-mark.png" alt={site.name} />
        </Link>
        <nav className="nav-links">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a className="nav-call" href={site.phoneHref}>
          <Icon name="phone" /> {site.phone}
        </a>
      </div>
    </header>
  );
}