import React from "react";
import { Link } from "wouter";

const steps = [
  {
    num: "01",
    title: "Obtain Admission Form",
    desc: "Visit the school office to collect the admission application form. Forms are typically available during August and September for the upcoming academic year.",
  },
  {
    num: "02",
    title: "Submit Required Documents",
    desc: "Return the completed form along with all required documents such as birth certificate, previous school reports, passport photographs, and transfer certificate (if applicable).",
  },
  {
    num: "03",
    title: "Entrance Examination",
    desc: "Students applying for Class IV and above will undertake a simple entrance examination. Based on results, shortlisted candidates will be notified within a reasonable timeframe.",
  },
  {
    num: "04",
    title: "Parent & Student Interview",
    desc: "The Principal ensures a personal interaction with each shortlisted pupil and their family or guardian. This allows the school to understand individual needs and provide appropriate attention to the child.",
  },
  {
    num: "05",
    title: "Admission Confirmation",
    desc: "Successful candidates will receive their admission confirmation. Parents will be informed of the fee schedule, required materials, and resumption date before the start of the academic session.",
  },
];

export default function Admissions() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Join DEW</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Admissions</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Our admission process is straightforward and designed to ensure every child finds their place at DEW International.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed text-lg">
            DEW Basic & Secondary School issues forms for the coming academic year during August and September. Admission is a hassle-free procedure where applicants are shortlisted depending on the availability of seats. We look forward to welcoming your child into the DEW family.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-10 px-4 bg-muted/40">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl font-serif font-bold text-primary">How to Apply — Step by Step</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[26px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold font-serif text-sm z-10">
                    {s.num}
                  </div>
                  <div className="bg-white border border-border rounded-xl p-6 flex-1 shadow-sm">
                    <h3 className="font-serif font-semibold text-lg text-primary mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Certificate Note */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
            <h3 className="font-serif font-semibold text-lg text-primary mb-2">Transfer Certificates</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If you wish to transfer your child to another school, you may apply for a Transfer Certificate at the end of the academic year — after final examinations and results have been published. Transfer certificates are issued within two working days of application receipt. Discontinuing education mid-session is not encouraged, and parents are kindly urged to take note of this.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Begin?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Take the first step towards giving your child a quality, value-centered education at DEW International.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-primary shadow hover:bg-accent/90 transition-colors">
              Contact Us to Apply
            </Link>
            <a href="https://wa.me/2347062939171" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md bg-white/10 border border-white/20 px-8 text-sm font-medium text-white hover:bg-white/20 transition-colors gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
