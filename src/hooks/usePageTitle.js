import { useEffect } from 'react';

const usePageTitle = (pageKey) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${pageKey} - ${originalTitle}`;
    return () => {
      document.title = originalTitle;
    };
  }, [pageKey]);
};

export default usePageTitle;
