import React from "react";
import { Link } from "wouter";
import founderImg from "@assets/IMG-20260413-WA0053_1776172632003.jpg";

const whyChoose = [
  {
    title: "Disciplined Learning Environment",
    desc: "We foster discipline, order, and a culture of respect that prepares students for life beyond the classroom.",
  },
  {
    title: "Value-Based Education",
    desc: "Our curriculum integrates moral and character development alongside academic learning.",
  },
  {
    title: "Academic Excellence",
    desc: "High academic standards ensure every student reaches their full intellectual potential.",
  },
  {
    title: "Leadership Development",
    desc: "Students are nurtured to become confident leaders who can positively impact society.",
  },
  {
    title: "Affordable & Accessible",
    desc: "Quality education should not be out of reach. We keep fees nominal and transparent.",
  },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About DEW International</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A school built on passion, purpose, and the belief that every child deserves a quality education.
          </p>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">The Foundation</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                A School Born from Passion for Education
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mr. Akinbanjo was deeply inspired by the discipline and teachings of his parents, who were both in the academic field until their passing. Fueled by this legacy and a divine inspiration to shape young minds, he founded DEW International Basic & Secondary School in 2021.
                </p>
                <p>
                  Since its inception, the school has constructively contributed to the character of the society by providing quality education at an affordable cost. It is located in the calm and serene locality of Morogbo, Lagos — an environment that fosters focus, growth, and community.
                </p>
                <p>
                  With quality infrastructure and a dedicated team, DEW provides a perfect blend of value-based and academic education, preparing students not just for examinations, but for life.
                </p>
              </div>
            </div>

            {/* Founder Photo */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl overflow-hidden shadow-lg w-72 h-80 md:w-80 md:h-96">
                <img
                  src={founderImg}
                  alt="Mr. Akinbanjo — Founder, DEW International School"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4">
                <p className="font-serif font-bold text-primary text-lg">Mr. Akinbanjo</p>
                <p className="text-muted-foreground text-sm">Founder, DEW International Basic & Secondary School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Inspiration */}
      <section className="py-20 px-4 bg-muted/40">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Inspiration</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
            Education for All
          </h2>
          <blockquote className="text-xl md:text-2xl text-foreground/80 italic font-serif leading-relaxed border-l-4 border-accent pl-6 text-left max-w-2xl mx-auto mb-8">
            "Education is not learning of facts, but training the mind to think."
          </blockquote>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A firm believer in Education for All, Mr. Akinbanjo was trained by educationists and walked the academic path himself. He is inspired to change a world where education is undervalued — building a culture where academic achievement and practical skills go hand in hand, and where every child's potential is recognized and developed.
          </p>
        </div>
      </section>

      {/* Why Choose DEW */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Why DEW?</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Why Choose DEW International?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We offer more than just classroom education. Here's what sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-serif font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="font-serif font-semibold text-lg text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Be Part of the DEW Family?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Give your child the gift of quality, value-based education in a warm and supportive community.
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
