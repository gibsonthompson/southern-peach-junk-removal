import { Icon } from "@/components/icons";

const residential = [
  "Garage, attic & basement cleanouts",
  "Furniture, appliance & mattress pickup",
  "Hot tub & shed removal",
  "Estate & whole-home clear-outs",
];

const commercial = [
  "Office & retail cleanouts",
  "Tenant turnovers & evictions",
  "Construction & renovation debris",
  "Recurring hauls for property managers",
];

export function Audiences() {
  return (
    <section className="section rc-band">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Who We Help</span>
          <h2>Homes And Businesses</h2>
          <p>
            The same crew and the same straight pricing, whether it is one room or
            an entire building.
          </p>
        </div>
        <div className="rc-grid">
          <div className="rc">
            <Icon name="home" className="rico" />
            <h3>Residential</h3>
            <p>
              For homeowners, renters, and families clearing out a life or making
              room for a new one. We work clean and treat your home like ours.
            </p>
            <ul>
              {residential.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rc">
            <Icon name="building" className="rico" />
            <h3>Commercial</h3>
            <p>
              For offices, retail, property managers, and contractors who need it
              gone on a deadline. Book once or set up hauls on a schedule.
            </p>
            <ul>
              {commercial.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
