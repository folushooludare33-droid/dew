import React from "react";
import { Link } from "wouter";

const testimonials = [
  {
    quote: "DEW has greatly improved my child's confidence and academic performance. The teachers are patient and truly dedicated. I notice the difference every day.",
    author: "Parent of a Primary 4 Student",
    initials: "A.O.",
  },
  {
    quote: "The teachers are dedicated and the environment is excellent. My son has developed a genuine love for learning since joining DEW International.",
    author: "Parent of a JSS 1 Student",
    initials: "F.B.",
  },
  {
    quote: "My child loves going to school every day. The care and attention they receive is remarkable. The school truly lives up to its motto — the future really does begin here.",
    author: "Parent of a Primary 2 Student",
    initials: "K.A.",
  },
  {
    quote: "DEW's commitment to both academics and character development is what sets it apart. My daughter has become more responsible, disciplined, and confident.",
    author: "Parent of a JSS 2 Student",
    initials: "T.S.",
  },
  {
    quote: "Affordable fees, excellent facilities, and teachers who actually care — DEW International is everything we hoped for and more. We are proud parents.",
    author: "Parent of Two Students",
    initials: "M.E.",
  },
  {
    quote: "The principal personally checked in on my child's progress during our first term. That level of personal attention means everything to a parent.",
    author: "Parent of a Primary 1 Student",
    initials: "R.I.",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What Parents Say</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Testimonials</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            The words of the parents and families who have entrusted us with their children.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-muted-foreground max-w-xl mx-auto">
              These are the experiences of real families who have been part of the DEW community. Their trust inspires us every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-7 shadow-sm flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed flex-1 mb-5 font-serif">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">{t.initials}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground/70">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Want to Experience DEW for Yourself?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Come visit us, meet our team, and see why families across Morogbo trust DEW International with their children's education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-primary shadow hover:bg-accent/90 transition-colors">
              Apply Now
            </Link>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-white/10 border border-white/20 px-8 text-sm font-medium text-white hover:bg-white/20 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
