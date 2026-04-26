import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`case-study-grid md:pb-20 lg:pb-32 pb-[80px] ${className}`}>
      {children}
    </section>
  );
}
