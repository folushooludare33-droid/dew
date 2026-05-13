import React from "react";
import computerLabImg from "@assets/IMG-20260414-WA0039_1776243514735.jpg";
import musicLabImg from "@assets/IMG-20260414-WA0048_1776243514968.jpg";
import sportsDayImg from "@assets/IMG-20260414-WA0047_1776243515230.jpg";
import extracurricularImg from "@assets/IMG-20260414-WA0045_1776243515429.jpg";
import artCraftImg from "@assets/IMG-20260414-WA0052_1776243515576.jpg";

const facilities = [
  {
    title: "Computer Laboratory",
    desc: "Our computer lab gives every student hands-on access to modern technology. Students develop essential digital literacy skills for the 21st century — from basic computing to research and productivity tools.",
    details: ["Modern laptops & computers", "Projector for visual learning", "Digital literacy training", "Open to all classes"],
    img: computerLabImg,
    alt: "DEW International School computer laboratory with laptops and a projector",
  },
  {
    title: "Music & Communication Lab",
    desc: "A fully equipped music and communication studio where students explore their creative talents in music, broadcasting, performance, and the arts. Keyboards, microphones, ring lights, and artwork fill this vibrant creative space.",
    details: ["Keyboard & music instruments", "Professional microphones", "Photography & video setup", "Certificates & awards display"],
    img: musicLabImg,
    alt: "DEW music and communication lab with keyboard, microphones, and artwork",
  },
  {
    title: "Sports Day",
    desc: "Our annual Sports Day is a highlight of the school calendar. Students from all classes compete in football, athletics, and team games — wearing their house colours with pride and building sportsmanship that lasts a lifetime.",
    details: ["Inter-house competitions", "Football & team sports", "All classes participate", "Encourages teamwork"],
    img: sportsDayImg,
    alt: "DEW students in colourful sports jerseys gathered for Sports Day",
  },
  {
    title: "Extracurricular Learning",
    desc: "Beyond the classroom, students at DEW are encouraged to explore film, drama, public speaking, and creative expression. Our extracurricular programme develops communication skills, confidence, and real-world readiness.",
    details: ["Drama & film production", "Public speaking practice", "Student-led projects", "After-school scheduling"],
    img: extracurricularImg,
    alt: "DEW students engaged in extracurricular film and drama learning outdoors",
  },
  {
    title: "Art & Craft Lab",
    desc: "The Art & Craft Lab nurtures creativity through hands-on making. Students learn tailoring, fabric work, and fine arts — practical vocational skills that inspire entrepreneurship and self-expression from a young age.",
    details: ["Tailoring machines", "Fabric & craft materials", "Vocational skill-building", "Entrepreneurship focus"],
    img: artCraftImg,
    alt: "DEW art and craft lab with a tailoring sewing machine",
  },
];

export default function Facilities() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Infrastructure</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Facilities & Infrastructure</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Holistic growth requires the right environment. DEW provides modern facilities designed to nurture academic and personal excellence.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Holistic growth can occur in a child only when they are exposed to the right environment — complete with all the required basics in terms of apparatus, study material, and other aids. Here is a look at the facilities our students enjoy at DEW.
          </p>
        </div>
      </section>

      {/* Facilities List */}
      <section className="py-10 px-4 bg-muted/40">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-8">
            {facilities.map((f, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-8 items-center bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                {/* Text side */}
                <div className={`p-8 ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="text-secondary font-bold text-lg font-serif">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-primary mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{f.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {f.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Photo side */}
                <div className={`h-64 md:h-full min-h-56 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                  <img
                    src={f.img}
                    alt={f.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10">
            <p className="font-serif italic text-xl text-primary leading-relaxed">
              "Every resource at DEW is provided with one purpose: to ensure that no child is held back by lack of access to the tools they need to succeed."
            </p>
            <p className="mt-4 text-muted-foreground text-sm">— DEW International School</p>
          </div>
        </div>
      </section>
    </div>
  );
}
