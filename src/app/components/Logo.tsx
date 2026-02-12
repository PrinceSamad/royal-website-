export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/royal-sherium-logo.jpg"
      alt="Royal Sherium International"
      className={`object-contain ${className}`}
    />
  );
}
