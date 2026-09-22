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
              <div className="intro">
                <p>
                  Tell us what needs to go and add a couple of photos if you can. You
                  get an upfront, no-obligation quote back, most of the time the same
                  day. No surprise fees, and the price we quote is the price you pay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section quote-band">
          <div className="wrap">
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
