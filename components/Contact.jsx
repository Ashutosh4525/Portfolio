'use client'

import MotionReveal from '@/components/MotionReveal';
import QuickActions from '@/components/QuickActions';
import { MongoIcon } from '@/components/SectionIcons';
import { useUIStore } from '@/store/uiStore';

const contactInfo = [
  {
    label: 'Email',
    value: 'ashutoshpal47@gmail.com',
    tag: 'Primary',
    note: 'Best for interviews, role discussions, and direct hiring outreach.',
    link: 'mailto:ashutoshpal47@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 84510 37586',
    tag: 'Direct',
    note: 'Available for quick recruiter coordination and follow-up calls.',
    link: 'tel:+918451037586',
  },
  {
    label: 'GitHub',
    value: 'github.com/Ashutosh4525',
    tag: 'Code',
    note: 'Review repositories, code structure, and implementation approach.',
    link: 'https://github.com/Ashutosh4525',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashutosh-pal-69922a253',
    tag: 'Profile',
    note: 'Good place for professional context, role history, and networking.',
    link: 'https://www.linkedin.com/in/ashutosh-pal-69922a253',
  },
];

const actions = [
  { label: 'Open LinkedIn', href: 'https://www.linkedin.com/in/ashutosh-pal-69922a253', tone: 'primary' },
  { label: 'Download Resume', href: '/Ashutosh_full_stack_dev.pdf', tone: 'secondary', download: true },
];

const recruiterNotes = [
  'Open to internships, junior full-stack roles, and project-based freelance work.',
  'Most relevant opportunities involve MERN, frontend-heavy product work, APIs, auth, or AI-assisted features.',
  'Fastest evaluation path: portfolio review, live project links, then resume or conversation.',
];

function ActionButton({ action }) {
  return (
    <a
      href={action.href}
      download={action.download}
      target={action.download ? undefined : '_blank'}
      rel={action.download ? undefined : 'noreferrer'}
      className="soft-link rounded-md border px-4 py-2 text-[13px]"
      style={
        action.tone === 'primary'
          ? { borderColor: 'var(--accent-soft)', backgroundColor: 'var(--accent-soft)', color: 'var(--text-strong)' }
          : { borderColor: 'var(--line)', backgroundColor: 'transparent', color: 'var(--text-main)' }
      }
    >
      {action.label}
    </a>
  );
}

function ContactCard({ item, delay }) {
  return (
    <MotionReveal
      as="a"
      delay={delay}
      href={item.link}
      target={item.link.startsWith('http') ? '_blank' : undefined}
      rel={item.link.startsWith('http') ? 'noreferrer' : undefined}
      className="editor-panel panel-hover px-5 py-5 transition"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="editor-mini-label">{item.label}</p>
          <p className="mt-3 break-all text-[18px] font-medium text-[var(--text-strong)]">{item.value}</p>
        </div>
        <span className="editor-chip chip-pop rounded-full px-2.5 py-1 text-[11px]">{item.tag}</span>
      </div>
      <p className="mt-4 text-[14px] leading-7 text-[var(--text-muted)]">{item.note}</p>
    </MotionReveal>
  );
}

function ClassicContact() {
  return (
    <div className="editor-document portfolio-panel h-full overflow-auto" style={{ padding: '4px' }}>
      <div className="mx-auto max-w-7xl space-y-5">
        <section className="grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
          <MotionReveal as="article" className="editor-panel editor-hero panel-hover px-6 py-6 md:px-8">
            <div className="relative z-10 inline-flex items-center gap-2">
              <MongoIcon className="h-4 w-4 text-[var(--accent-strong)]" />
              <p className="editor-header-label">contact.yaml</p>
            </div>
            <h1 className="relative z-10 mt-3 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--text-strong)]">
              Ready for recruiter conversations, project discussions, and full-stack opportunities.
            </h1>
            <p className="relative z-10 mt-4 max-w-2xl text-[16px] leading-8 text-[var(--text-main)]">
              If you&apos;re hiring for a role where full-stack execution, frontend care, and shipped project proof all
              matter, I&apos;d be glad to connect.
            </p>

            <div className="relative z-10 mt-5 flex flex-wrap gap-3">
              {actions.map((action, index) => (
                <MotionReveal key={action.label} delay={90 + index * 60}>
                  <ActionButton action={action} />
                </MotionReveal>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal
            as="article"
            delay={140}
            className="editor-panel panel-hover px-5 py-5 md:px-6"
            style={{ borderColor: 'var(--accent-soft)', background: 'color-mix(in srgb, var(--editor-bg) 82%, var(--accent) 18%)' }}
          >
            <p className="editor-header-label">Availability</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--text-strong)]">
              Open to internships, junior full-time roles, and strong freelance collaborations.
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[var(--text-main)]">
              My strongest fit is in MERN development, product-style frontend work, API integration, authentication
              flows, and projects where shipping quality matters.
            </p>
          </MotionReveal>
        </section>

        <MotionReveal delay={180}>
          <QuickActions
            subtitle="Visitors usually decide in seconds, so the resume, project proof, and direct contact actions stay grouped together here."
            actions={[
              { label: 'View Projects', type: 'tab', value: 'projects', tone: 'primary' },
              { label: 'Open Skills', type: 'tab', value: 'skills', tone: 'secondary' },
              { label: 'Download Resume', type: 'link', value: '/Ashutosh_full_stack_dev.pdf', tone: 'primary', download: true },
            ]}
          />
        </MotionReveal>

        <section className="grid gap-4 lg:grid-cols-3">
          {recruiterNotes.map((note, index) => (
            <MotionReveal key={note} delay={200 + index * 60} as="article" className="editor-panel panel-hover px-5 py-5">
              <p className="editor-mini-label">Recruiter Note</p>
              <p className="mt-3 text-[15px] leading-8 text-[var(--text-main)]">{note}</p>
            </MotionReveal>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {contactInfo.map((item, index) => (
            <ContactCard key={item.label} item={item} delay={290 + index * 70} />
          ))}
        </section>
      </div>
    </div>
  );
}

function ReferenceContact() {
  return (
    <div className="editor-document portfolio-panel h-full overflow-auto" style={{ padding: '4px' }}>
      <div className="mx-auto max-w-6xl space-y-5">
        <MotionReveal as="section" className="editor-panel editor-hero panel-hover px-6 py-6 md:px-8">
          <div className="relative z-10 inline-flex items-center gap-2">
            <MongoIcon className="h-4 w-4 text-[var(--accent-strong)]" />
            <p className="editor-header-label">contact.ts</p>
          </div>
          <div className="relative z-10 mt-4 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <h1 className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--text-strong)]">
                The easiest way to evaluate me is simple: review the work, open the links, and reach out.
              </h1>
              <p className="mt-4 max-w-3xl text-[16px] leading-8 text-[var(--text-main)]">
                I&apos;m interested in opportunities where a recruiter or team wants a junior developer who can support
                full-stack delivery and still care about the quality of the final experience.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {actions.map((action, index) => (
                  <MotionReveal key={action.label} delay={90 + index * 60}>
                    <ActionButton action={action} />
                  </MotionReveal>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {recruiterNotes.map((note, index) => (
                <MotionReveal key={note} delay={130 + index * 55} className="editor-panel-muted stat-card muted-panel-hover px-4 py-4 text-[15px] leading-8 text-[var(--text-main)]">
                  {note}
                </MotionReveal>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={180}>
          <QuickActions
            compact
            subtitle="This keeps the most important next steps visible right after the intro: projects, skills, and the resume."
            actions={[
              { label: 'View Projects', type: 'tab', value: 'projects', tone: 'primary' },
              { label: 'Open Skills', type: 'tab', value: 'skills', tone: 'secondary' },
              { label: 'Download Resume', type: 'link', value: '/Ashutosh_full_stack_dev.pdf', tone: 'primary', download: true },
            ]}
          />
        </MotionReveal>

        <section className="grid gap-4 md:grid-cols-2">
          {contactInfo.map((item, index) => (
            <ContactCard key={item.label} item={item} delay={250 + index * 70} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default function Contact() {
  const { contentVariant } = useUIStore();

  return contentVariant === 'reference' ? <ReferenceContact /> : <ClassicContact />;
}
