
"use client";

export default function ResumeButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/Sai_Lokesh_Sanisetty_RESUME.pdf"
      className={
        "px-4 py-2 rounded-xl bg-primary text-black font-medium " +
        "hover:bg-primary/90 transition " +
        className
      }
    >
      Download Resume
    </a>
  );
}
