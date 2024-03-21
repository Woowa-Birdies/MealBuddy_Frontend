import { PAGENAMES, ROUTES } from '@enums/CommonEnum';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useUpdatePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const originalTitle = document.title;
    const currentPageKey = Object.keys(ROUTES).find((key) => ROUTES[key] === location.pathname);
    const currentPageName = PAGENAMES[currentPageKey];
    if (currentPageName) {
      document.title = `${currentPageName} - ${originalTitle}`;
    }
    return () => {
      document.title = originalTitle;
    };
  }, [location]);
};

export default useUpdatePageTitle;
