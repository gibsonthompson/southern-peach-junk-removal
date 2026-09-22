import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { QuoteForm } from "@/components/QuoteForm";
import { Icon } from "@/components/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Get a Free Quote | Metro Atlanta Junk Removal",
  description:
    "Send a few photos and get a free junk removal quote today across metro Atlanta. No obligation. Junk removal, dumpster rentals, and light demolition. Call (470) 760-5249.",
  alternates: { canonical: "/quote" },
};

const reasons = [
  "A real quote, usually the same day",
  "No obligation and no hidden fees",
  "Licensed, insured, and local",
  "We recycle and donate first",
];

export default function QuotePage() {
  return (
    <>
      <Header />
      <main>
        <section className="svc-hero">
          <div className="wrap">
            <div className="inner">
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Free Quote" }]} />
              <span className="eyebrow">
                <Icon name="camera" style={{ width: 18, height: 18 }} />
                Free Quote
              </span>
              <h1>Get A Free Quote</h1>
              <p className="tagline">Send a few photos, get a straight price today.</p>
            </div>
          </div>
        </section>

        <section className="section quote-band">
          <div className="wrap">
            <div className="quote-layout">
              <div className="quote-card">
                <QuoteForm />
              </div>
              <aside className="quote-aside">
                <h2>Fast, Free, No Pressure</h2>
                <ul>
                  {reasons.map((r) => (
                    <li key={r}>
                      <Icon name="check" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="aside-call">
                  <span>Rather talk it through?</span>
                  <a href={site.phoneHref}>{site.phone}</a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
