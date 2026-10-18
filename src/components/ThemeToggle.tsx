import { Moon, Sun } from 'lucide-react';

// Dark is the default theme. The saved choice is applied before first paint by the inline script in
// index.html; icons switch via CSS (.icon-when-dark / .icon-when-light) so there is no render state.
export const THEME_STORAGE_KEY = 'apex-theme';

const toggleTheme = () => {
  const isLight = document.documentElement.classList.toggle('light');
  try {
    localStorage.setItem(THEME_STORAGE_KEY, isLight ? 'light' : 'dark');
  } catch {
    // Storage can be blocked (private mode); the toggle still works for this page view.
  }
};

export const ThemeToggle = ({ className = '' }: { className?: string }) => (
  <button
    type="button"
    onClick={toggleTheme}
    aria-label="Switch between light and dark mode"
    title="Switch between light and dark mode"
    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 bg-card/50 text-primary transition-colors hover:border-primary/50 hover:bg-primary/10 ${className}`}
  >
    <Sun className="icon-when-dark h-4 w-4" aria-hidden="true" />
    <Moon className="icon-when-light h-4 w-4" aria-hidden="true" />
  </button>
);
