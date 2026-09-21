import { Fragment } from "react";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <Fragment key={it.label}>
          {i > 0 && <span className="sep">/</span>}
          {it.href ? (
            <Link href={it.href}>{it.label}</Link>
          ) : (
            <span className="cur">{it.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
