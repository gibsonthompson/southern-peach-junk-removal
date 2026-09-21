import { site } from "@/data/site";
import { Icon } from "@/components/icons";

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a className="btn btn-ghost" href={site.phoneHref}>
        <Icon name="phone" /> Call
      </a>
      <a className="btn btn-primary" href="#quote">
        Free Quote
      </a>
    </div>
  );
}
