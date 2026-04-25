'use client'

import MotionReveal from '@/components/MotionReveal';
import QuickActions from '@/components/QuickActions';
import { ReactIcon } from '@/components/SectionIcons';
import { useUIStore } from '@/store/uiStore';

const recruiterSignals = [
  ['Primary Fit', 'Junior full-stack roles, internships, and product engineering teams that value shipping.'],
  ['Core Stack', 'React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT auth, OpenAI integration.'],
  ['Working Style', 'Comfortable owning UI, API, auth, deployment, and the final polish that makes demos credible.'],
];

const proofCards = [
  ['01', 'End-to-End Delivery', 'I build projects across frontend, backend, authentication, database integration, and deployment instead of stopping at isolated screens.'],
  ['02', 'Recruiter-Friendly Portfolio', 'This workspace is designed to show code-minded presentation, strong information hierarchy, and product thinking in the same place.'],
  ['03', 'Real-World Mindset', 'I care about maintainability, responsiveness, and live-hosted proof because that is what makes project work easier to trust.'],
];

const capabilityBlocks = [
  'Build responsive, product-style interfaces with React and Next.js.',
  'Design and connect REST APIs with Node.js, Express.js, MongoDB, and JWT authentication.',
  'Use AI features intentionally inside products rather than as surface-level decoration.',
  'Ship projects on Vercel and Render with an eye on reliability, presentation, and reviewability.',
];

const timeline = [
  {
    period: '2026',
    title: 'Full Stack MERN Certification',
    detail: 'Focused on production workflow, architecture basics, and shipping complete web applications.',
  },
  {
    period: '2023',
    title: 'Smart India Hackathon Finalist',
    detail: 'Strengthened collaboration, pressure handling, and practical problem-solving in a team setting.',
  },
  {
    period: '2021 - 2024',
    title: 'B.E. in Computer Engineering',
    detail: 'Built the academic foundation while continuing hands-on project development and deployment practice.',
  },
];

const operatingPrinciples = [
  'Make interfaces clear enough for users and readable enough for teammates.',
  'Treat auth, deployment, and state flow as part of the feature, not follow-up work.',
  'Prefer polished execution over inflated scope.',
  'Use projects to prove ability, not just list technologies.',
];

function ClassicAbout() {
  return (
    <div className="editor-document portfolio-panel h-full overflow-auto" style={{ padding: '4px' }}>
      <div className="mx-auto max-w-7xl space-y-5">
        <MotionReveal as="section" className="editor-panel editor-hero panel-hover px-6 py-6 md:px-8 md:py-7">
          <div className="relative z-10 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2">
                <ReactIcon className="h-4 w-4 text-[var(--accent-strong)]" />
                <p className="editor-header-label">README.md</p>
              </div>
              <h1 className="editor-title mt-3 max-w-4xl">
                Full-stack developer who turns practical ideas into polished, deployable web products.
              </h1>
              <p className="editor-copy mt-4 max-w-4xl">
                I&apos;m Ashutosh Pal, a MERN-focused developer with a strong interest in product-facing engineering. I
                enjoy building interfaces that look intentional, backend flows that stay understandable, and projects
                that can be opened, tested, and trusted by recruiters and teams.
              </p>

              <MotionReveal
                delay={80}
                className="glass-strip mt-6 inline-flex flex-wrap items-center gap-3 rounded-2xl px-4 py-3 text-[13px]"
              >
                <span style={{ color: 'var(--text-strong)' }}>Open to:</span>
                <span className="editor-chip chip-pop rounded-full px-3 py-1">Internships</span>
                <span className="editor-chip chip-pop rounded-full px-3 py-1">Junior Full-Stack Roles</span>
                <span className="editor-chip chip-pop rounded-full px-3 py-1">Freelance Projects</span>
              </MotionReveal>
            </div>

            <div className="grid gap-4 self-start">
              {recruiterSignals.map(([label, value], index) => (
                <MotionReveal
                  key={label}
                  delay={100 + index * 70}
                  as="article"
                  className="editor-panel-muted stat-card muted-panel-hover px-5 py-4"
                >
                  <p className="editor-mini-label">{label}</p>
                  <p className="mt-2 text-[15px] font-medium leading-8 text-[var(--text-main)]">{value}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={120}>
          <QuickActions subtitle="Most visitors want to see proof quickly. These links keep projects, contact, and the resume impossible to miss." />
        </MotionReveal>

        <section className="grid gap-4 md:grid-cols-3">
          {proofCards.map(([index, title, description], cardIndex) => (
            <MotionReveal key={index} delay={150 + cardIndex * 70} as="article" className="editor-panel panel-hover px-5 py-5">
              <p className="editor-mini-label">{index}</p>
              <h2 className="mt-3 text-[18px] font-semibold text-[var(--text-strong)]">{title}</h2>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-muted)]">{description}</p>
            </MotionReveal>
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal as="article" delay={230} className="editor-panel panel-hover px-5 py-5 md:px-6">
            <p className="editor-header-label">What Recruiters Should See</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {capabilityBlocks.map((item, index) => (
                <MotionReveal
                  key={item}
                  delay={280 + index * 50}
                  className="editor-panel-muted muted-panel-hover px-4 py-4 text-[15px] leading-8 text-[var(--text-main)]"
                >
                  {item}
                </MotionReveal>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal
            as="article"
            delay={270}
            className="editor-panel panel-hover px-5 py-5 md:px-6"
            style={{ borderColor: 'var(--accent-soft)', background: 'color-mix(in srgb, var(--editor-bg) 82%, var(--accent) 18%)' }}
          >
            <p className="editor-header-label">Current Focus</p>
            <h2 className="mt-3 max-w-md text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--text-strong)]">
              Shipping work that looks considered and behaves reliably.
            </h2>
            <p className="mt-4 text-[16px] leading-8 text-[var(--text-main)]">
              Right now I&apos;m focused on strengthening project quality across UI polish, API structure, auth flows,
              and production-style deployment so each build feels closer to real team work than tutorial output.
            </p>
          </MotionReveal>
        </section>

        <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <MotionReveal as="article" delay={330} className="editor-panel panel-hover px-5 py-5 md:px-6">
            <p className="editor-header-label">Timeline</p>
            <div className="timeline-rail mt-4 space-y-3">
              {timeline.map((item, index) => (
                <MotionReveal key={item.title} delay={370 + index * 60} className="editor-panel-muted timeline-node muted-panel-hover px-4 py-4">
                  <p className="editor-mini-label">{item.period}</p>
                  <h3 className="mt-2 text-[16px] font-semibold text-[var(--text-strong)]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--text-muted)]">{item.detail}</p>
                </MotionReveal>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal as="article" delay={390} className="editor-panel panel-hover px-5 py-5 md:px-6">
            <p className="editor-header-label">How I Tend to Work</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {operatingPrinciples.map((point, index) => (
                <MotionReveal
                  key={point}
                  delay={430 + index * 55}
                  className="editor-panel-muted muted-panel-hover px-4 py-4 text-[15px] leading-8 text-[var(--text-main)]"
                >
                  {point}
                </MotionReveal>
              ))}
            </div>
          </MotionReveal>
        </section>
      </div>
    </div>
  );
}

function ReferenceAbout() {
  return (
    <div className="editor-document portfolio-panel h-full overflow-auto" style={{ padding: '4px' }}>
      <div className="mx-auto max-w-6xl space-y-5">
        <MotionReveal as="section" className="editor-panel editor-hero panel-hover px-6 py-6 md:px-8">
          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <span
              className="floating-badge rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em]"
              style={{ borderColor: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
            >
              Recruiter Snapshot
            </span>
            <span
              className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em]"
              style={{ borderColor: 'var(--line)', color: 'var(--text-muted)' }}
            >
              About / Candidate Fit
            </span>
          </div>

          <div className="relative z-10 mt-5 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex items-center gap-2">
                <ReactIcon className="h-4 w-4 text-[var(--accent-strong)]" />
                <p className="editor-header-label">about.ts</p>
              </div>
              <h1 className="mt-3 text-[clamp(2rem,4.5vw,4.1rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-[var(--text-strong)]">
                I build full-stack products that read clearly, work end to end, and feel ready to review.
              </h1>
              <p className="mt-4 max-w-3xl text-[16px] leading-8 text-[var(--text-main)]">
                My strongest value is not just in using the MERN stack, but in connecting the full workflow from UI to
                API to deployment in a way that looks thoughtful and feels dependable.
              </p>
            </div>

            <MotionReveal
              delay={100}
              className="glass-strip rounded-[18px] px-5 py-5"
            >
              <p className="editor-mini-label">Best Match</p>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-main)]">
                Teams hiring for junior full-stack roles, internships, or product-focused frontend work where ownership
                and execution matter as much as stack familiarity.
              </p>
            </MotionReveal>
          </div>
        </MotionReveal>

        <MotionReveal delay={140}>
          <QuickActions compact subtitle="Start with the work, then check the skills or resume. This strip keeps the main actions visible much earlier in the page." />
        </MotionReveal>

        <section className="grid gap-4 lg:grid-cols-3">
          {recruiterSignals.map(([label, value], index) => (
            <MotionReveal key={label} delay={160 + index * 70} as="article" className="editor-panel panel-hover px-5 py-5">
              <p className="editor-mini-label">{label}</p>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-main)]">{value}</p>
            </MotionReveal>
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <MotionReveal as="article" delay={260} className="editor-panel panel-hover px-5 py-5 md:px-6">
            <p className="editor-header-label">Execution Signals</p>
            <div className="mt-4 grid gap-3">
              {capabilityBlocks.map((item, index) => (
                <MotionReveal key={item} delay={300 + index * 50} className="editor-panel-muted stat-card muted-panel-hover px-4 py-4 text-[15px] leading-8 text-[var(--text-main)]">
                  {item}
                </MotionReveal>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal as="article" delay={320} className="editor-panel panel-hover px-5 py-5 md:px-6">
            <p className="editor-header-label">Operating Principles</p>
            <div className="mt-4 grid gap-3">
              {operatingPrinciples.map((point, index) => (
                <MotionReveal key={point} delay={360 + index * 50} className="editor-panel-muted muted-panel-hover px-4 py-4 text-[15px] leading-8 text-[var(--text-main)]">
                  {point}
                </MotionReveal>
              ))}
            </div>
          </MotionReveal>
        </section>

        <MotionReveal as="section" delay={390} className="grid gap-4 md:grid-cols-3">
          {proofCards.map(([index, title, description], cardIndex) => (
            <MotionReveal key={index} delay={430 + cardIndex * 60} as="article" className="editor-panel panel-hover px-5 py-5">
              <p className="editor-mini-label">{index}</p>
              <h2 className="mt-2 text-[18px] font-semibold text-[var(--text-strong)]">{title}</h2>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-muted)]">{description}</p>
            </MotionReveal>
          ))}
        </MotionReveal>
      </div>
    </div>
  );
}

export default function About() {
  const { contentVariant } = useUIStore();

  return contentVariant === 'reference' ? <ReferenceAbout /> : <ClassicAbout />;
}
