import React from "react";
import { Link } from "wouter";
import principalImg from "@assets/IMG-20260414-WA0050_1776241351959.jpg";

export default function Principal() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Principal's Message</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A warm welcome from the heart of DEW International.
          </p>
        </div>
      </section>

      {/* Message */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Principal Card */}
            <div className="md:col-span-1">
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm text-center">
                <div className="w-36 h-36 rounded-full border-4 border-accent/40 mx-auto mb-4 overflow-hidden shadow-md">
                  <img
                    src={principalImg}
                    alt="Mrs. Akinbanjo Christiana — Principal, DEW International School"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary">Mrs. Akinbanjo Christiana</h3>
                <p className="text-secondary text-sm font-medium mt-1">Principal</p>
                <p className="text-muted-foreground text-xs mt-1">DEW International Basic & Secondary School</p>
              </div>

              {/* Values she stands for */}
              <div className="mt-6 bg-muted/40 border border-border rounded-xl p-5">
                <h4 className="font-semibold text-sm text-primary mb-3 uppercase tracking-wide">Her Focus</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">◆</span>
                    <span>Discipline & Character Formation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">◆</span>
                    <span>Parental Partnership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">◆</span>
                    <span>Holistic Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">◆</span>
                    <span>Academic Excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">◆</span>
                    <span>Leadership & Confidence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Message Content */}
            <div className="md:col-span-2">
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">Dear Parent,</p>

              <div className="space-y-5 text-foreground/80 leading-relaxed text-base">
                <p>
                  Welcome to DEW International Basic & Secondary School. Our commitment is to raise disciplined, morally sound, and academically excellent students. We believe education goes beyond the classroom, and we work closely with parents to ensure every child develops strong character, leadership ability, and intellectual confidence.
                </p>
                <p>
                  At DEW, every child is guided to grow and excel in all areas of life. Discipline and character building are integral to our educational philosophy — and with your cooperation, we aim to work towards the holistic development of your child in the years to come.
                </p>
                <p>
                  I extend my warm wishes as you choose to entrust us with your ward's academic needs. Your faith in us will be shared with the entire DEW teaching fraternity, and I assure you that you will not be disappointed.
                </p>
                <p>
                  I wish you good luck in choosing the right school — the right environment for your child's spiritual, emotional, and physical growth.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-serif italic text-foreground/70 mb-2">With warm regards,</p>
                <p className="font-serif font-bold text-xl text-primary">Mrs. Akinbanjo Christiana</p>
                <p className="text-secondary text-sm mt-1">Principal, DEW International Basic & Secondary School</p>
              </div>

              <div className="mt-10 bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="font-serif italic text-lg text-primary/90 leading-relaxed">
                  "At DEW, every child is guided to grow and excel in all areas of life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Ready to Join Our Community?</h2>
          <p className="text-muted-foreground mb-6">
            We look forward to partnering with you in raising the next generation of leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow hover:bg-primary/90 transition-colors">
              Apply Now
            </Link>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md border border-border px-8 text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
