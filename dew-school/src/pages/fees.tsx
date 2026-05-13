import React from "react";
import { Link } from "wouter";

export default function Fees() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Affordability</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Fees & Payment</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Quality education that is designed to be accessible and affordable for every family.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Fee Philosophy</p>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Education Should Not Be Out of Reach</h2>
          </div>

          <div className="bg-white border border-border rounded-2xl p-10 shadow-sm text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-xl text-foreground/80 leading-relaxed font-serif italic max-w-2xl mx-auto">
              "Every child nurtures a will to learn, which we must encourage. While education should not be free, the free-rolling wheels of knowledge should not be stuck in the quicksand of heavy fees."
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="font-serif font-semibold text-xl text-primary mb-4">Current Fee Information</h3>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Our fee structure is affordable and communicated to parents before the beginning of each academic session. For current fee information, kindly contact the school office.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow hover:bg-primary/90 transition-colors">
                Contact School Office
              </Link>
              <a href="https://wa.me/2347062939171" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md border border-border px-8 text-sm font-medium text-foreground hover:bg-muted transition-colors gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Guidance */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">Payment Guidance</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-2">Payment Schedule</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Parents are kindly urged to adhere to the payment slabs and dates communicated at the start of each academic session. Timely payment ensures the smooth running of school operations.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-2">Discrepancies & Queries</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                In matters of any discrepancy regarding fees or payment, parents are requested to kindly check with the school authorities in person or by phone before making any assumptions.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-2">Advance Notice</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fee structures are always intimated to parents before the beginning of the new academic year, allowing families to plan adequately and avoid surprises.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-2">Affordability Commitment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                DEW is committed to keeping its fees accessible. Our philosophy is that quality education should be within reach of every family in our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
