import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

const reasons: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "pin",
    title: "Locally Owned",
    body: "A local crew that answers the phone and shows up, not a national chain routing your job through a call center three states away.",
  },
  {
    icon: "shield",
    title: "Licensed & Insured",
    body: "Fully covered on every job, so your property and your peace of mind are protected before we lift a thing.",
  },
  {
    icon: "tag",
    title: "Upfront Quotes",
    body: "You know the price before we load anything. No surprise fees once the truck is full, no games at the curb.",
  },
  {
    icon: "recycle",
    title: "Recycle & Donate",
    body: "We sort for donation and recycling before anything heads to the landfill. Cleaner spaces, stronger communities.",
  },
];

export function WhyUs() {
  return (
    <section className="section why-band">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Why Peach State</span>
          <h2>Why Atlanta Calls Us</h2>
        </div>
        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-col" key={r.title}>
              <Icon name={r.icon} className="wico" />
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
