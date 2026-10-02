import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="bg-page px-[var(--content-padding-inline)] py-4 bg-section">
      <div className="mx-auto flex max-w-[var(--content-max-width)] items-center justify-between">
        <Link
          aria-label="Roman Kochetov — home"
          className="type-body-2 type-body-2-semibold rounded-lg text-primary transition-opacity hover:opacity-70"
          href="/"
        >
          &lt;RK /&gt;
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="type-body-2-medium text-secondary transition-colors hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            </ul>
          </nav>
          <ThemeToggle />
          <a
            className="type-body-3 cursor-pointer rounded-xl bg-cv-button px-4 py-2 font-semibold text-on-cv-button transition-opacity hover:opacity-80"
            download
            href="/assets/roman-kochetov-cv.pdf"
          >
            Download CV
          </a>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
