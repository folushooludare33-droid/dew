import React from "react";
import { Link } from "wouter";

const involvements = [
  {
    title: "Parent-Teacher Meetings",
    desc: "Regular structured meetings between parents and teachers allow for honest conversations about a child's progress, challenges, and achievements. These sessions are held each term.",
  },
  {
    title: "Academic Progress Reviews",
    desc: "Parents receive detailed progress reports at the end of each term. We encourage parents to review these carefully and follow up with teachers on any area needing attention.",
  },
  {
    title: "Open Communication",
    desc: "Our doors are always open. Parents may speak with teachers and the principal by appointment. We respond promptly to phone calls, messages, and emails regarding your child.",
  },
  {
    title: "Collaborative Development",
    desc: "We treat parents as partners in education. Our school works with you — not around you — to ensure every child receives the personalized attention they deserve.",
  },
];

export default function Parental() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Partnership</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Parental Involvement</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            At DEW, we believe parents are the most important partners in a child's education journey.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Belief</p>
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Education is a Partnership</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            We believe that a child's success depends on the close collaboration between school and home. At DEW International, we actively involve parents in their children's academic life — not just as observers, but as true partners in shaping their future.
          </p>
        </div>
      </section>

      {/* Involvement Details */}
      <section className="py-10 px-4 bg-muted/40">
        <div className="container max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {involvements.map((item, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-7 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-serif font-bold">{i + 1}</span>
                </div>
                <h3 className="font-serif font-semibold text-lg text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Note on Parents */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">A Note from the Principal</p>
            <blockquote className="font-serif italic text-xl text-primary/90 leading-relaxed mb-6">
              "Discipline and character building are integral to our educational philosophy at DEW — and with your cooperation as parents, we aim to work towards the holistic development of your child in the years to come."
            </blockquote>
            <p className="font-medium text-foreground/80">— Mrs. Akinbanjo Christiana, Principal</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-secondary text-white">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join Us as a Partner in Your Child's Success</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Your involvement makes all the difference. Get in touch with us today and let's build something great together for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-white text-secondary px-8 text-sm font-medium shadow hover:bg-white/90 transition-colors">
              Get in Touch
            </Link>
            <Link href="/admissions" className="inline-flex h-12 items-center justify-center rounded-md bg-white/10 border border-white/20 px-8 text-sm font-medium text-white hover:bg-white/20 transition-colors">
              Enroll Your Child
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
