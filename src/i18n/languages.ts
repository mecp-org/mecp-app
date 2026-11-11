/**
 * Static imports of all 20 MECP language files.
 * Bundled at build time — no async loading needed.
 */
import type { LanguageFile } from '@mecp/engine';

import cs from '../../vendor/mecp/languages/cs.json';
import de from '../../vendor/mecp/languages/de.json';
import en from '../../vendor/mecp/languages/en.json';
import es from '../../vendor/mecp/languages/es.json';
import fa from '../../vendor/mecp/languages/fa.json';
import fr from '../../vendor/mecp/languages/fr.json';
import it from '../../vendor/mecp/languages/it.json';
import ja from '../../vendor/mecp/languages/ja.json';
import nl from '../../vendor/mecp/languages/nl.json';
import no from '../../vendor/mecp/languages/no.json';
import pl from '../../vendor/mecp/languages/pl.json';
import pt from '../../vendor/mecp/languages/pt.json';
import ru from '../../vendor/mecp/languages/ru.json';
import sk from '../../vendor/mecp/languages/sk.json';
import sr from '../../vendor/mecp/languages/sr.json';
import sv from '../../vendor/mecp/languages/sv.json';
import tr from '../../vendor/mecp/languages/tr.json';
import uk from '../../vendor/mecp/languages/uk.json';
import zhCn from '../../vendor/mecp/languages/zh-cn.json';
import zhTw from '../../vendor/mecp/languages/zh-tw.json';

const LANGUAGES: Record<string, LanguageFile> = {
  cs: cs as unknown as LanguageFile,
  de: de as unknown as LanguageFile,
  en: en as unknown as LanguageFile,
  es: es as unknown as LanguageFile,
  fa: fa as unknown as LanguageFile,
  fr: fr as unknown as LanguageFile,
  it: it as unknown as LanguageFile,
  ja: ja as unknown as LanguageFile,
  nl: nl as unknown as LanguageFile,
  no: no as unknown as LanguageFile,
  pl: pl as unknown as LanguageFile,
  pt: pt as unknown as LanguageFile,
  ru: ru as unknown as LanguageFile,
  sk: sk as unknown as LanguageFile,
  sr: sr as unknown as LanguageFile,
  sv: sv as unknown as LanguageFile,
  tr: tr as unknown as LanguageFile,
  uk: uk as unknown as LanguageFile,
  'zh-cn': zhCn as unknown as LanguageFile,
  'zh-tw': zhTw as unknown as LanguageFile,
};

/** Get a language file by ISO 639-1 code. Falls back to English. */
export function getLanguage(code: string): LanguageFile {
  return LANGUAGES[code] ?? LANGUAGES['en'];
}

/** Get all available language files sorted by name */
export function getAllLanguages(): LanguageFile[] {
  return Object.values(LANGUAGES).sort((a, b) =>
    a.language_name.localeCompare(b.language_name)
  );
}

/** Get all language codes */
export function getLanguageCodes(): string[] {
  return Object.keys(LANGUAGES);
}

export default LANGUAGES;
