import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop sorgt dafür, dass bei jedem Routen- und Link-Wechsel
 * der Seiteninhalt automatisch und weich ins obere Sichtfeld scrollt.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  return null;
};
