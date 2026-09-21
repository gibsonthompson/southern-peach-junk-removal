import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

const steps: { num: string; icon: IconName; title: string; body: string }[] = [
  {
    num: "01",
    icon: "camera",
    title: "Send Photos Or Call",
    body: "Text us a few pictures or give us a ring. You get a straight, no-obligation quote back, not a runaround.",
  },
  {
    num: "02",
    icon: "truck",
    title: "We Show Up And Load",
    body: "Our crew arrives in the window we promised and does all the heavy lifting. You do not touch a thing.",
  },
  {
    num: "03",
    icon: "clear",
    title: "Space Cleared",
    body: "We sweep up and haul it off. Whatever can be recycled or donated stays out of the landfill for good.",
  },
];

export function Process() {
  return (
    <section className="section proc-band" id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How It Works</span>
          <h2>Three Steps, Zero Hassle</h2>
        </div>
        <div className="proc-grid">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <span className="num">{s.num}</span>
              <Icon name={s.icon} className="sico" />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
