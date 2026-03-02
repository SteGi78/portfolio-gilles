import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

export type Lang = 'de' | 'en';

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

const STORAGE_KEY = 'portfolio_lang';

const DICT: Record<Lang, Record<string, string>> = {
  de: {
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    'nav.privacy': 'Datenschutz',
    'nav.imprint': 'Impressum',
    'btn.lang': 'DE/EN',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
  },
  en: {
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.privacy': 'Privacy',
    'nav.imprint': 'Imprint',
    'btn.lang': 'DE/EN',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
  },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly langSubject = new BehaviorSubject<Lang>(this.getInitialLang());
  readonly lang$ = this.langSubject.asObservable();

  private dict: JsonObject = {};

  constructor(private readonly http: HttpClient) {
    document.documentElement.lang = this.lang;
    void this.load(this.lang);
  }

  get lang(): Lang {
    return this.langSubject.value;
  }

  async setLang(lang: Lang): Promise<void> {
    await this.load(lang);
    this.langSubject.next(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  toggle(): void {
    void this.setLang(this.lang === 'de' ? 'en' : 'de');
  }

  t(key: string): string {
    const fromJson = this.getByPath<string>(this.dict, key);
    if (typeof fromJson === 'string') {
      return fromJson;
    }

    return DICT[this.lang][key] ?? key;
  }

  /**
   * Returns any JSON value from the loaded language file (string, array, object).
   * Falls back to the string dictionary (if present) or the key itself.
   */
  value<T = unknown>(key: string): T {
    const fromJson = this.getByPath<T>(this.dict, key);
    if (fromJson !== undefined) {
      return fromJson;
    }

    return (DICT[this.lang][key] ?? key) as unknown as T;
  }

  private async load(lang: Lang): Promise<void> {
    try {
      this.dict = await firstValueFrom(this.http.get<JsonObject>(`assets/i18n/${lang}.json`));
    } catch (error) {
      this.dict = {};
      console.warn('[i18n] Could not load language file:', lang, error);
    }
  }

  private getInitialLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'de';
  }

  private getByPath<T = JsonValue>(obj: JsonObject, path: string): T | undefined {
    const value = path.split('.').reduce<JsonValue | undefined>((current, part) => {
      if (!current || typeof current !== 'object' || Array.isArray(current)) {
        return undefined;
      }

      return current[part];
    }, obj);

    return value as T | undefined;
  }
}
