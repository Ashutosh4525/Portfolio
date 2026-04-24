'use client'

import MotionReveal from '@/components/MotionReveal';
import { JavaScriptIcon } from '@/components/SectionIcons';
import { useUIStore } from '@/store/uiStore';

const skillGroups = [
  {
    title: 'Frontend Delivery',
    summary: 'Build polished interfaces with structure, responsiveness, and product-minded interaction details.',
    items: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Responsive UI', 'Component Architecture'],
  },
  {
    title: 'Backend and APIs',
    summary: 'Handle the logic behind real projects including auth, data flow, API wiring, and maintainable structure.',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'CRUD Operations', 'API Design'],
  },
  {
    title: 'Data and Shipping',
    summary: 'Take projects beyond development into deployment, testing, and reviewable environments.',
    items: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman', 'Vercel', 'Render'],
  },
];

const recruiterReadout = [
  ['Strength', 'Full-stack ownership from UI through deployment.'],
  ['Signal', 'Comfortable with both presentation quality and engineering basics.'],
  ['Value', 'Able to show live, testable work rather than only coursework or static demos.'],
];

const workflowBlocks = [
  {
    title: 'Why This Stack Helps',
    points: [
      'Lets me work quickly across frontend, backend, and deployment without losing continuity.',
      'Supports the kind of projects recruiters can actually inspect and evaluate.',
      'Makes it easier to prove auth, data handling, and real user flows in one place.',
    ],
  },
  {
    title: 'How I Apply It',
    points: [
      'I focus on shipping usable interfaces instead of overbuilding isolated UI exercises.',
      'I use authentication, API integration, and deployment as evidence of end-to-end capability.',
      'I care about code readability because maintainability matters even in portfolio projects.',
    ],
  },
];

function ClassicSkills() {
  return (
    <div className="editor-document portfolio-panel h-full overflow-auto" style={{ padding: '4px' }}>
      <div className="mx-auto max-w-7xl space-y-5">
        <MotionReveal as="section" className="editor-panel editor-hero panel-hover px-6 py-6 md:px-8">
          <div className="relative z-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2">
                <JavaScriptIcon className="h-4 w-4 text-[var(--accent-strong)]" />
                <p className="editor-header-label">skills.json</p>
              </div>
              <h1 className="mt-3 text-[clamp(2rem,4vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--text-strong)]">
                Skills organized around what helps teams ship, not just what fills a tech list.
              </h1>
            </div>
            <p className="text-[16px] leading-8 text-[var(--text-muted)]">
              My stack is strongest when projects need clean UI, dependable backend flows, and live delivery that can
              be reviewed without guessing.
            </p>
          </div>
        </MotionReveal>

        <section className="grid gap-4 lg:grid-cols-3">
          {recruiterReadout.map(([label, value], index) => (
            <MotionReveal key={label} delay={110 + index * 70} as="article" className="editor-panel panel-hover px-5 py-5">
              <p className="editor-mini-label">{label}</p>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-main)]">{value}</p>
            </MotionReveal>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <MotionReveal key={group.title} delay={190 + index * 80} as="article" className="editor-panel panel-hover px-5 py-5">
              <p className="editor-mini-label">Skill Group</p>
              <h2 className="mt-2 text-[20px] font-semibold text-[var(--text-strong)]">{group.title}</h2>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-muted)]">{group.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill, chipIndex) => (
                  <MotionReveal
                    key={skill}
                    delay={250 + index * 80 + chipIndex * 25}
                    as="span"
                    className="editor-chip chip-pop rounded-full px-3 py-1.5 text-[12px]"
                  >
                    {skill}
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {workflowBlocks.map((block, index) => (
            <MotionReveal key={block.title} delay={320 + index * 80} as="article" className="editor-panel panel-hover px-5 py-5 md:px-6">
              <p className="editor-header-label">{block.title}</p>
              <div className="mt-4 grid gap-3">
                {block.points.map((point, pointIndex) => (
                  <MotionReveal
                    key={point}
                    delay={370 + index * 70 + pointIndex * 45}
                    className="editor-panel-muted stat-card muted-panel-hover px-4 py-4 text-[15px] leading-8 text-[var(--text-main)]"
                  >
                    {point}
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>
          ))}
        </section>
      </div>
    </div>
  );
}

function ReferenceSkills() {
  return (
    <div className="editor-document portfolio-panel h-full overflow-auto" style={{ padding: '4px' }}>
      <div className="mx-auto max-w-6xl space-y-5">
        <MotionReveal as="section" className="editor-panel editor-hero panel-hover px-6 py-6 md:px-8">
          <div className="relative z-10 inline-flex items-center gap-2">
            <JavaScriptIcon className="h-4 w-4 text-[var(--accent-strong)]" />
            <p className="editor-header-label">stack.config.ts</p>
          </div>
          <div className="relative z-10 mt-4 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <h1 className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--text-strong)]">
                A recruiter-friendly stack: enough range to build, enough depth to ship.
              </h1>
              <p className="mt-4 max-w-3xl text-[16px] leading-8 text-[var(--text-main)]">
                I use the stack less as a checklist and more as a working system for building product-like applications
                that can be opened, tested, and discussed with confidence.
              </p>
            </div>
            <MotionReveal delay={100} className="glass-strip rounded-[18px] px-5 py-5">
              <p className="editor-mini-label">Positioning</p>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-main)]">
                Best fit for teams that want a junior developer who can contribute across UI, API integration, auth,
                and deployment while still caring about polish.
              </p>
            </MotionReveal>
          </div>
        </MotionReveal>

        <section className="grid gap-4 lg:grid-cols-3">
          {recruiterReadout.map(([label, value], index) => (
            <MotionReveal key={label} delay={160 + index * 70} as="article" className="editor-panel panel-hover px-5 py-5">
              <p className="editor-mini-label">{label}</p>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-main)]">{value}</p>
            </MotionReveal>
          ))}
        </section>

        <section className="grid gap-4">
          {skillGroups.map((group, index) => (
            <MotionReveal key={group.title} delay={240 + index * 80} as="article" className="editor-panel panel-hover px-5 py-5 md:px-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="editor-mini-label">Capability Area</p>
                  <h2 className="mt-2 text-[21px] font-semibold text-[var(--text-strong)]">{group.title}</h2>
                </div>
                <span
                  className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.16em]"
                  style={{ borderColor: 'var(--line)', color: 'var(--text-muted)' }}
                >
                  Production useful
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-muted)]">{group.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill, chipIndex) => (
                  <MotionReveal
                    key={skill}
                    delay={300 + index * 70 + chipIndex * 25}
                    as="span"
                    className="editor-chip chip-pop rounded-full px-3 py-1.5 text-[12px]"
                  >
                    {skill}
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>
          ))}
        </section>
      </div>
    </div>
  );
}

export default function Skills() {
  const { contentVariant } = useUIStore();

  return contentVariant === 'reference' ? <ReferenceSkills /> : <ClassicSkills />;
}
