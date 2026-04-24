'use client'

function iconClassName(className = 'h-4 w-4') {
  return className;
}

export function ReactIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClassName(className)}>
      <circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="8" ry="3.4" />
      <ellipse cx="12" cy="12" rx="8" ry="3.4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3.4" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function JavaScriptIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClassName(className)}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" />
      <path d="M10 9v5.1c0 1.4-.7 2.2-2.1 2.2-.8 0-1.4-.2-2-.7" />
      <path d="M13.2 14.9c.5.8 1.2 1.3 2.3 1.3 1 0 1.7-.5 1.7-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.2c-1.7-.7-2.8-1.5-2.8-3.3 0-1.6 1.3-2.9 3.2-2.9 1.4 0 2.4.5 3.1 1.8" />
    </svg>
  );
}

export function NodeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClassName(className)}>
      <path d="m12 3.8 6.6 3.8v8.8L12 20.2l-6.6-3.8V7.6Z" />
      <path d="M9.2 9.3v5.5" />
      <path d="m9.2 9.3 5.6 5.5V9.3" />
      <path d="M14.8 9.3v5.5" />
    </svg>
  );
}

export function MongoIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={iconClassName(className)}>
      <path d="M12 3.5c2.9 3.1 4.4 6 4.4 8.8 0 3.6-1.8 6.2-4.4 8.2-2.6-2-4.4-4.6-4.4-8.2 0-2.8 1.5-5.7 4.4-8.8Z" />
      <path d="M12 5.2c.7 2.1 1.1 4.3 1.1 6.7 0 2.2-.3 4.4-1.1 6.5-.8-2.1-1.1-4.3-1.1-6.5 0-2.4.4-4.6 1.1-6.7Z" />
    </svg>
  );
}

export function TerminalModeIcon({ mode, className = 'h-4 w-4' }) {
  if (mode === 'showcase') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M9 5v14" />
        <path d="M9 10h11" />
      </svg>
    );
  }

  if (mode === 'zen') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 4.5c2.2 2.5 2.2 5 0 7.5-2.2 2.5-2.2 5 0 7.5" />
        <path d="M4.5 12h15" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M9 5v14" />
    </svg>
  );
}

export function ContentVariantIcon({ variant = 'classic', className = 'h-4 w-4' }) {
  if (variant === 'reference') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
        <path d="M5 5.5h14" />
        <path d="M5 9.5h9" />
        <path d="M5 13.5h14" />
        <path d="M5 17.5h11" />
        <path d="M17 8.5 19.5 11 17 13.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8.5 9h7" />
      <path d="M8.5 12h7" />
      <path d="M8.5 15h4.5" />
    </svg>
  );
}

export const tabIconMap = {
  about: ReactIcon,
  skills: JavaScriptIcon,
  projects: NodeIcon,
  contact: MongoIcon,
};
