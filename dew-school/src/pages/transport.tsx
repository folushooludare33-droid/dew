import React from "react";
import { Link } from "wouter";

export default function Transport() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Getting to School</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Transport Facility</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Convenient and safe transport services to help your child get to school with ease.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">School Transport</p>
              <h2 className="text-3xl font-serif font-bold text-primary mb-5">Safe & Reliable Transport Routes</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                DEW International Basic & Secondary School provides transport services to ensure students can get to school safely and conveniently. We understand that getting to school daily is one of the key concerns for parents, and we are committed to making this as easy as possible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transport services and available routes are provided upon inquiry. Parents are encouraged to visit or contact the school office to learn more about the specific routes that serve their area.
              </p>
              <div className="bg-muted/40 border border-border rounded-xl p-5">
                <h4 className="font-semibold text-primary mb-2">To Inquire About Transport</h4>
                <p className="text-muted-foreground text-sm">
                  Please contact the school office directly for information on available routes, schedules, and pricing. Our team will be happy to assist you.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white border border-border rounded-xl p-5 shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 min-w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-1">Multiple Routes</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">Routes available for various areas surrounding Morogbo, Lagos. Inquire to check if your area is covered.</p>
                </div>
              </div>
              <div className="bg-white border border-border rounded-xl p-5 shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 min-w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-1">Safety First</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">All transport arrangements prioritize the safety and wellbeing of students during commutes.</p>
                </div>
              </div>
              <div className="bg-white border border-border rounded-xl p-5 shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 min-w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-1">Contact for Details</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">Call 07062939171 or 08072334890 to discuss transport options for your child.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-10 px-4 bg-muted/40">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">School Location</h2>
          <p className="text-muted-foreground mb-2">9, Oluranti Oyelakin Street, Morogbo, Lagos, Nigeria</p>
          <div className="mt-6 bg-white border border-border rounded-xl overflow-hidden h-64 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm">Google Maps Embed</p>
              <p className="text-xs mt-1">Embed Google Maps iframe here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
