'use client'

import MotionReveal from '@/components/MotionReveal';
import { NodeIcon } from '@/components/SectionIcons';
import { useUIStore } from '@/store/uiStore';

const projects = [
  {
    name: 'AI Resume Builder',
    status: 'Live',
    summary: 'A SaaS-style resume builder with Google authentication and AI-assisted writing and improvement flows.',
    recruiterAngle: 'Shows product thinking, auth integration, AI feature design, and full-stack ownership.',
    highlights: ['Google authentication', 'AI-assisted resume generation', 'Editable user workflow', 'Live deployment'],
    tech: ['Next.js', 'NextAuth', 'MongoDB', 'OpenAI API', 'Tailwind CSS'],
    live: 'https://resume-builder-zeta-seven-70.vercel.app',
    github: 'https://github.com/Ashutosh4525/Resume_builder',
  },
  {
    name: 'StreamForge',
    status: 'Live',
    summary: 'An AI movie streaming platform with user and admin panels, authentication, and personalized recommendations.',
    recruiterAngle: 'Demonstrates multi-role flows, JWT auth, recommendation logic, and stronger application scope.',
    highlights: ['User and admin dashboards', 'JWT authentication', 'Recommendation features', 'Full MERN architecture'],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'OpenAI'],
    live: 'https://streamforge-psi.vercel.app/',
    github: 'https://github.com/Ashutosh4525/Mern_Fullstack',
  },
  {
    name: 'Portfolio Workspace',
    status: 'Current',
    summary: 'A VS Code-inspired portfolio experience built to present projects, skills, and contact details in a memorable way.',
    recruiterAngle: 'Signals frontend care, interaction design, state handling, and the ability to present work with intent.',
    highlights: ['Custom workspace UI', 'Switchable content modes', 'Responsive layout system', 'Motion and interaction polish'],
    tech: ['Next.js', 'Tailwind CSS', 'Zustand', 'Responsive UI'],
  },
];

const hiringSignals = [
  'Projects are chosen to show complete flows, not disconnected features.',
  'Live links matter because they reduce guesswork for recruiters and interviewers.',
  'The strongest signal here is ownership across product, code, and presentation.',
];

function ProjectCard({ project, delay, compact = false }) {
  return (
    <MotionReveal as="article" delay={delay} className="editor-panel panel-hover px-5 py-5 md:px-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="editor-mini-label">{compact ? 'Case Study' : 'Project'}</p>
          <h2 className="mt-2 text-[22px] font-semibold text-[var(--text-strong)]">{project.name}</h2>
        </div>
        <span
          className="rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em]"
          style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-4 text-[15px] leading-8 text-[var(--text-main)]">{project.summary}</p>

      <div className="editor-panel-muted stat-card muted-panel-hover mt-4 px-4 py-4">
        <p className="editor-mini-label">Why Recruiters Care</p>
        <p className="mt-2 text-[15px] leading-8 text-[var(--text-main)]">{project.recruiterAngle}</p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {project.highlights.map((item, index) => (
          <MotionReveal
            key={item}
            delay={delay + 70 + index * 35}
            className="editor-panel-muted muted-panel-hover px-4 py-3 text-[14px] leading-7 text-[var(--text-main)]"
          >
            {item}
          </MotionReveal>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech, chipIndex) => (
          <MotionReveal
            key={tech}
            delay={delay + 120 + chipIndex * 25}
            as="span"
            className="editor-chip chip-pop rounded-full px-3 py-1.5 text-[12px]"
          >
            {tech}
          </MotionReveal>
        ))}
      </div>

      {(project.live || project.github) && (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="soft-link rounded-md border px-4 py-2 text-[13px]"
              style={{ borderColor: 'var(--accent-soft)', color: 'var(--text-strong)', backgroundColor: 'var(--accent-soft)' }}
            >
              Open Live Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="soft-link rounded-md border px-4 py-2 text-[13px]"
              style={{ borderColor: 'var(--line)', color: 'var(--text-main)', backgroundColor: 'transparent' }}
            >
              View GitHub
            </a>
          )}
        </div>
      )}
    </MotionReveal>
  );
}

function ClassicProjects() {
  return (
    <div className="editor-document portfolio-panel h-full overflow-auto" style={{ padding: '4px' }}>
      <div className="mx-auto max-w-7xl space-y-5">
        <MotionReveal as="section" className="editor-panel editor-hero panel-hover px-6 py-6 md:px-8">
          <div className="relative z-10 grid gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2">
                <NodeIcon className="h-4 w-4 text-[var(--accent-strong)]" />
                <p className="editor-header-label">projects.ts</p>
              </div>
              <h1 className="mt-3 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--text-strong)]">
                Projects chosen to answer the real hiring question: can he build and ship useful products?
              </h1>
            </div>
            <p className="text-[16px] leading-8 text-[var(--text-muted)]">
              These projects emphasize product thinking, real flows, backend ownership, and presentation quality so
              they read clearly in a recruiter review or interview setting.
            </p>
          </div>
        </MotionReveal>

        <section className="grid gap-4 lg:grid-cols-3">
          {hiringSignals.map((item, index) => (
            <MotionReveal key={item} delay={120 + index * 60} as="article" className="editor-panel panel-hover px-5 py-5">
              <p className="editor-mini-label">Hiring Signal</p>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-main)]">{item}</p>
            </MotionReveal>
          ))}
        </section>

        <section className="grid gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} delay={220 + index * 90} />
          ))}
        </section>
      </div>
    </div>
  );
}

function ReferenceProjects() {
  return (
    <div className="editor-document portfolio-panel h-full overflow-auto" style={{ padding: '4px' }}>
      <div className="mx-auto max-w-6xl space-y-5">
        <MotionReveal as="section" className="editor-panel editor-hero panel-hover px-6 py-6 md:px-8">
          <div className="relative z-10 inline-flex items-center gap-2">
            <NodeIcon className="h-4 w-4 text-[var(--accent-strong)]" />
            <p className="editor-header-label">projects.index.ts</p>
          </div>
          <div className="relative z-10 mt-4 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <h1 className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--text-strong)]">
                Each project is here to prove range, ownership, and the ability to ship something reviewable.
              </h1>
              <p className="mt-4 max-w-3xl text-[16px] leading-8 text-[var(--text-main)]">
                Rather than listing every build, I&apos;ve highlighted projects that best show full-stack execution,
                AI-assisted features, and the ability to present work professionally.
              </p>
            </div>
            <div className="grid gap-3">
              {hiringSignals.map((item, index) => (
                <MotionReveal key={item} delay={110 + index * 55} className="editor-panel-muted stat-card muted-panel-hover px-4 py-4 text-[15px] leading-8 text-[var(--text-main)]">
                  {item}
                </MotionReveal>
              ))}
            </div>
          </div>
        </MotionReveal>

        <section className="grid gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} delay={220 + index * 80} compact />
          ))}
        </section>
      </div>
    </div>
  );
}

export default function Projects() {
  const { contentVariant } = useUIStore();

  return contentVariant === 'reference' ? <ReferenceProjects /> : <ClassicProjects />;
}
