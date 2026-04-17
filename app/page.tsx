"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { experiences, navItems, projects, skills, socials } from "@/data/portfolio";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function HomePage() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(ids);

  return (
    <>
      <Navbar activeSection={activeSection} />

      <main className="mx-auto flex w-full max-w-content flex-col gap-24 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <motion.section
          id="hero"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-wide text-accent">Alex Carter</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Building thoughtful digital products with speed and clarity.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            I&apos;m a full-stack engineer focused on creating accessible, performant web experiences that balance clean
            design with strong engineering principles.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            View Projects
          </a>
        </motion.section>

        <Section
          id="about"
          title="About"
          subtitle="I work across product design and engineering to deliver reliable applications with a strong user experience."
        >
          <div className="grid gap-8 md:grid-cols-[1fr_260px]">
            <div className="card">
              <p className="leading-7 text-slate-700 dark:text-slate-300">
                Over the past eight years, I&apos;ve helped startups and enterprise teams ship polished web products,
                optimize front-end performance, and improve developer workflows. I care deeply about maintainable code,
                practical architecture, and outcomes that move business goals forward.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card flex items-center justify-center">
              <Image
                src="/profile-placeholder.svg"
                alt="Portrait illustration of Alex Carter"
                width={220}
                height={220}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Selected work focused on performance, usability, and scalable architecture."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="card flex h-full flex-col"
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={`${project.title}-${tech}`}
                      className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <a href={project.liveUrl} className="font-medium text-accent hover:underline">
                    Live demo
                  </a>
                  <a href={project.githubUrl} className="font-medium text-slate-700 hover:underline dark:text-slate-200">
                    GitHub
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
          subtitle="A snapshot of roles where I led and delivered impactful web initiatives."
        >
          <ol className="relative border-l border-slate-200 pl-6 dark:border-slate-700">
            {experiences.map((experience) => (
              <li key={`${experience.company}-${experience.role}`} className="mb-8 last:mb-0">
                <span className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-accent" />
                <div className="card">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{experience.duration}</p>
                  <h3 className="mt-1 text-lg font-semibold">
                    {experience.role} · {experience.company}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{experience.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" title="Contact" subtitle="Have a project or role in mind? Let&apos;s talk.">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />
            <aside className="card space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                You can also reach me directly through social platforms.
              </p>
              <ul className="space-y-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} className="text-sm font-medium text-accent hover:underline">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <div className="mx-auto flex w-full max-w-content flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
          <ul className="flex items-center gap-4">
            {socials.map((social) => (
              <li key={`footer-${social.label}`}>
                <a href={social.href} className="hover:text-accent">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
