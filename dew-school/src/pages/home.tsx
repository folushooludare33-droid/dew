import React from "react";
import { Link } from "wouter";

const highlights = [
  { title: "Quality Education", desc: "Rigorous academic programs built to develop intellectual excellence from an early age.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { title: "Character Building", desc: "Values-based education that develops integrity, discipline, and moral uprightness.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Computer Lab", desc: "Modern computers and technology resources that prepare students for the digital world.", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Science Lab", desc: "Fully equipped science laboratory for experiments, models, and practical learning.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  { title: "Sports & Activities", desc: "Annual sports day, inter-house competitions, and a rich calendar of student activities.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Affordable Fees", desc: "Quality schooling at fees designed to be accessible to families across our community.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Location", value: "Morogbo" },
  { label: "Motto", value: "The Future" },
  { label: "Vision", value: "Grow to Glow" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="container relative z-10 text-center px-4 md:px-6 py-24">
          <div className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
            Welcome to DEW International Basic & Secondary School
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            The Future<br />
            <span className="text-accent italic">Begins Here</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Raising academically excellent, morally upright, and future-ready students through quality education, discipline, and holistic development.
          </p>
          <p className="text-white/60 text-sm mb-10">
            9, Oluranti Oyelakin Street, Morogbo, Lagos, Nigeria
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions" className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl">
              Apply Now
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/20">
              Contact School
            </Link>
            <Link href="/about" className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-lg px-8 py-3.5 text-sm font-medium text-white/80 hover:text-white transition-colors underline underline-offset-4">
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary py-6 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center text-white">
                <p className="text-xl font-serif font-bold">{s.value}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our School</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            A Foundation for Lifelong Achievement
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
            DEW International Basic & Secondary School is committed to raising academically sound, morally upright, and future-ready students in a serene and supportive learning environment. Founded in 2021 in the calm community of Morogbo, Lagos, our school combines academic rigour with strong values to develop well-rounded individuals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="inline-flex h-11 items-center justify-center rounded-lg border border-primary text-primary px-7 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
              Learn Our Story
            </Link>
            <Link href="/principal" className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-7 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
              Principal's Message
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-10 px-4 bg-muted/40">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Everything Your Child Needs to Thrive
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From world-class facilities to dedicated teachers, DEW provides the complete environment for your child's growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={h.icon} />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-lg text-primary mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Banner */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Vision</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Grow to Glow</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Every effort at DEW is focused on the growth of the child — in academics, moral values, social skills, and physical development.
          </p>
          <Link href="/vision" className="inline-flex h-12 items-center justify-center rounded-lg bg-white text-primary px-8 text-sm font-semibold hover:bg-white/90 transition-colors">
            Our Vision & Mission
          </Link>
        </div>
      </section>

      {/* Principal Quote */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-primary/10 border-4 border-accent/30 flex items-center justify-center mb-4">
                <svg className="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="font-serif font-bold text-primary">Mrs. Akinbanjo Christiana</p>
              <p className="text-muted-foreground text-sm">Principal</p>
            </div>
            <div className="md:col-span-2 border-l-0 md:border-l-4 border-accent pl-0 md:pl-8">
              <p className="text-accent text-4xl font-serif leading-none mb-3 hidden md:block">"</p>
              <p className="text-foreground/80 italic leading-relaxed text-lg font-serif">
                Welcome to DEW International Basic & Secondary School. Our commitment is to raise disciplined, morally sound, and academically excellent students. We believe education goes beyond the classroom, and we work closely with parents to ensure every child develops strong character, leadership ability, and intellectual confidence. At DEW, every child is guided to grow and excel in all areas of life.
              </p>
              <p className="mt-4">
                <Link href="/principal" className="text-primary text-sm font-medium hover:underline">
                  Read Full Message →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/10 border-t border-secondary/20">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Admissions Open</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Forms are available from August to September. Contact us today to learn about the admission process and secure a place for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-semibold text-white shadow hover:bg-primary/90 transition-colors">
              Apply Now
            </Link>
            <a href="https://wa.me/2347062939171" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-8 text-sm font-medium text-foreground hover:bg-muted transition-colors gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
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
