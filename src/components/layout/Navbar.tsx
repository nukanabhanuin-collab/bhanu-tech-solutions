
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link
          href="#home"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Bhanu Tech Solutions"
            width={190}
            height={64}
            priority
            className="navbar-logo"
          />
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="#contact" className="navbar-cta">
          Let's Talk <ArrowUpRight size={17} />
        </Link>

        <button
          type="button"
          className="navbar-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {menuOpen && (
          <div className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="mobile-nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Let's Talk <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
