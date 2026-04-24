'use client'

export default function MotionReveal({
  as: Component = 'div',
  className = '',
  delay = 0,
  children,
  ...props
}) {
  return (
    <Component
      className={`motion-reveal ${className}`.trim()}
      style={{ animationDelay: `${delay}ms`, ...props.style }}
      {...props}
    >
      {children}
    </Component>
  );
}
