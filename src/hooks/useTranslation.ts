'use client'

import { useLanguage } from '../context/LanguageContext'
import { tr } from '../locales/tr'
import { en } from '../locales/en'
import { es } from '../locales/es'
import { de } from '../locales/de'
import { ru } from '../locales/ru'
import { fr } from '../locales/fr'

type TranslationKey = string
type Translations = typeof tr

const translations: Record<string, Translations> = {
  tr: tr,
  en: en,
  es: es,
  de: de,
  ru: ru,
  fr: fr
}

export const useTranslation = () => {
  const { language, isHydrated } = useLanguage()
  
  const t = (key: TranslationKey): string => {
    // During server-side rendering and before hydration, always use Turkish
    const currentLanguage = isHydrated ? language : 'tr'
    
    const keys = key.split('.')
    let value: any = translations[currentLanguage] || translations.tr
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        if (isHydrated) {
          console.warn(`Translation key "${key}" not found for language "${currentLanguage}"`)
        }
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }
  
  return { t, language: isHydrated ? language : 'tr' }
} 