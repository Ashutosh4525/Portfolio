'use client'

import { useEditorStore } from '@/store/EditorStore';

const defaultActions = [
  { label: 'View Projects', type: 'tab', value: 'projects', tone: 'primary' },
  { label: 'Open Skills', type: 'tab', value: 'skills', tone: 'secondary' },
  { label: 'Contact Me', type: 'tab', value: 'contact', tone: 'secondary' },
  { label: 'Download Resume', type: 'link', value: '/Ashutosh_full_stack_dev.pdf', tone: 'primary', download: true },
];

function ActionLink({ action, onOpenTab }) {
  const className = `attention-ring soft-link inline-flex items-center justify-center rounded-xl border px-4 py-3 text-[13px] font-medium ${
    action.tone === 'primary' ? 'attention-pulse' : ''
  }`;

  const style =
    action.tone === 'primary'
      ? {
          borderColor: 'var(--accent-soft)',
          backgroundColor: 'color-mix(in srgb, var(--accent-soft) 70%, transparent)',
          color: 'var(--text-strong)',
        }
      : {
          borderColor: 'var(--line)',
          backgroundColor: 'color-mix(in srgb, var(--tabs-bg) 70%, transparent)',
          color: 'var(--text-main)',
        };

  if (action.type === 'tab') {
    return (
      <button onClick={() => onOpenTab(action.value)} className={className} style={style}>
        {action.label}
      </button>
    );
  }

  return (
    <a
      href={action.value}
      download={action.download}
      target={action.download ? undefined : '_blank'}
      rel={action.download ? undefined : 'noreferrer'}
      className={className}
      style={style}
    >
      {action.label}
    </a>
  );
}

export default function QuickActions({
  title = 'Quick Actions',
  subtitle = 'The fastest path for visitors: open projects, review skills, or grab the resume.',
  actions = defaultActions,
  compact = false,
}) {
  const { openTabById } = useEditorStore();

  return (
    <div className="glass-strip rounded-[22px] px-4 py-4 md:px-5 md:py-5">
      <div className={`flex flex-wrap items-start justify-between gap-3 ${compact ? '' : 'md:items-center'}`}>
        <div className="max-w-2xl">
          <p className="editor-header-label">{title}</p>
          <p className="mt-2 text-[14px] leading-7 text-[var(--text-main)]">{subtitle}</p>
        </div>
        <div className="grid w-full gap-2 sm:grid-cols-2 xl:w-auto xl:grid-cols-4">
          {actions.map((action) => (
            <ActionLink key={action.label} action={action} onOpenTab={openTabById} />
          ))}
        </div>
      </div>
    </div>
  );
}
