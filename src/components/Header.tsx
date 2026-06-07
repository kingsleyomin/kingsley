import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="case-study-header-grid" style={{ minHeight: "72px" }}>
        <div className="case-study-wrapper-constrained">
          <div className="flex items-center justify-between h-full py-4">
            <Link to="/" aria-label="Home" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/case-study/about-james"
                className="text-[1.125rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-[1.125rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-[1.8rem] font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/case-study/about-james"
                    onClick={() => setIsOpen(false)}
                    className="text-[1.8rem] font-medium text-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-[1.8rem] font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
