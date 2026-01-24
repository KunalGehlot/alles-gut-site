import de from './translations/de.json';
import en from './translations/en.json';
import fr from './translations/fr.json';
import es from './translations/es.json';
import it from './translations/it.json';
import pt from './translations/pt.json';
import cs from './translations/cs.json';
import pl from './translations/pl.json';
import ja from './translations/ja.json';
import ko from './translations/ko.json';

export const languages = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  cs: 'Čeština',
  pl: 'Polski',
  ja: '日本語',
  ko: '한국어',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

// Using 'any' to allow flexible access to translation keys
// since not all languages have complete translations for legal pages
const translations: Record<Lang, any> = { de, en, fr, es, it, pt, cs, pl, ja, ko };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang): any {
  return translations[lang] || translations[defaultLang];
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
