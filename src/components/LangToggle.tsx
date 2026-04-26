import { useState, useRef, useEffect } from 'react';
import type { Lang } from '../locales';

type LangOption = {
  code: Lang;
  label: string;
  flag: string;
  href: string;
};

const options: LangOption[] = [
  { code: 'fr', label: 'FR', flag: '🇫🇷', href: '/' },
  { code: 'en', label: 'EN', flag: '🇬🇧', href: '/en/' },
];

export default function LangToggle({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.code === lang)!;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="lang-dropdown">
      <button
        className="lang-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Langue : ${current.label}`}
      >
        <span className="lang-flag">{current.flag}</span>
      </button>

      {open && (
        <div className="lang-menu" role="listbox">
          {options.map((option) => (
            <a
              key={option.code}
              href={option.href}
              className={`lang-option${option.code === lang ? ' lang-option--active' : ''}`}
              role="option"
              aria-selected={option.code === lang}
              onClick={() => setOpen(false)}
            >
              <span className="lang-check">{option.code === lang ? '✓' : ''}</span>
              <span className="lang-flag">{option.flag}</span>
              <span className="lang-label">{option.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
