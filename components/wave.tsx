export function Wave({ className = "" }: { className?: string }) {
  return <svg className={`wave-line ${className}`} viewBox="0 0 128 20" aria-hidden="true"><path d="M1 10C14 1 27 1 40 10s26 9 39 0 26-9 48 0" /></svg>;
}
