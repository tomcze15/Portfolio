import { useEffect, useState } from 'react';

export const useMenu = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [fixedMenu, setFixedMenu] = useState<boolean>(false);

  const updateFixedMenu = (): void => setFixedMenu(!!window.scrollY);
  const toggleMobileMenu = (): void => setMobileMenu((mobile) => !mobile);

  useEffect(() => {
    window.addEventListener('scroll', updateFixedMenu);

    return (): void => window.removeEventListener('scroll', updateFixedMenu);
  }, []);

  return {
    mobileMenu,
    fixedMenu,
    toggleMobileMenu,
  };
};

export default useMenu;
