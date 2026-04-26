import { ReactNode } from "react";

interface CenteredContentProps {
  children: ReactNode;
  className?: string;
}

const CenteredContent = ({ children, className = "" }: CenteredContentProps) => {
  return (
    <div className="case-study-grid">
      <div className={`case-study-centered-content ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default CenteredContent;
