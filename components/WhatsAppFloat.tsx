"use client";

export default function WhatsAppFloat() {
  const phone = "917799727979";
  const text = encodeURIComponent("Hi, I'm interested in tour packages. Please share details.");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--brand-leaf)] text-white shadow-lg hover:bg-[#23894b]"
      aria-label="WhatsApp"
      title="WhatsApp"
    >
      {/* Simple WhatsApp-like icon (SVG) */}
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.53 0 .25 5.28.25 11.8c0 2.08.54 4.12 1.57 5.93L0 24l6.44-1.69a11.77 11.77 0 0 0 5.62 1.43h.01c6.52 0 11.8-5.28 11.8-11.8 0-3.15-1.23-6.11-3.35-8.46zM12.07 21.2h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.82 1 1.02-3.72-.22-.38a9.38 9.38 0 0 1-1.43-4.99c0-5.17 4.2-9.37 9.38-9.37a9.3 9.3 0 0 1 6.62 2.74 9.3 9.3 0 0 1 2.74 6.62c0 5.18-4.2 9.38-9.15 9.61z" />
        <path d="M17.28 14.05c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.57-1.96-.16-.28-.02-.43.12-.56.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34 0 1.38 1 2.71 1.14 2.9.14.19 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.66-.68 1.89-1.33.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.54-.33z" />
      </svg>
    </a>
  );
}
