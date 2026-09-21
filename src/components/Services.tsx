import Link from "next/link";
import { coreServices } from "@/data/services";
import { Icon } from "@/components/icons";

export function Services() {
  return (
    <section className="section svc-band" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">What We Do</span>
          <h2>Three Services, One Crew</h2>
          <p>
            One team for the whole job, from a single mattress on the curb to a
            full property taken down to the studs.
          </p>
        </div>
        <div className="svc-grid">
          {coreServices.map((s) => (
            <article className="svc" key={s.slug}>
              <div className="svc-ico">
                <Icon name={s.icon} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.intro[0]}</p>
              <Link className="lnk" href={`/services/${s.slug}`}>
                Learn More <Icon name="arrow" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
