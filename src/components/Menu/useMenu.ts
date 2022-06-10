import { useEffect, useState } from 'react';
import { MENU_ITEMS } from 'constants/items';

export const useMenu = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [fixedMenu, setFixedMenu] = useState<boolean>(false);

  const items = MENU_ITEMS;

  const updateFixedMenu = (): void => setFixedMenu(!!window.scrollY);
  const toggleMobileMenu = (): void => setMobileMenu((mobile) => !mobile);

  useEffect(() => {
    window.addEventListener('scroll', updateFixedMenu);

    return (): void => window.removeEventListener('scroll', updateFixedMenu);
  }, []);

  return {
    mobileMenu,
    fixedMenu,
    items,
    toggleMobileMenu,
  };
};

export default useMenu;
