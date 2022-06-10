import { LANGUAGES } from 'constants/items';
import { Language } from 'common/types';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: Language): void => {
    switch (lng) {
      case Language.PL:
        i18n.changeLanguage(LANGUAGES.PL.shortcut);
        break;
      case Language.EN:
        i18n.changeLanguage(LANGUAGES.EN.shortcut);
        break;
      default:
        i18n.changeLanguage(LANGUAGES.EN.shortcut);
    }
  };

  const currentLng = (): Language => {
    switch (i18n.language) {
      case LANGUAGES.EN.shortcut:
        return Language.EN;
      case LANGUAGES.PL.shortcut:
        return Language.PL;
      default:
        return Language.EN;
    }
  };

  return {
    changeLanguage,
    currentLng,
  };
};
