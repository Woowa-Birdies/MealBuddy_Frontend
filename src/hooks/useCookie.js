import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useCookie = (name) => {
  const [cookieValue, setCookieValue] = useState(() => Cookies.get(name));

  useEffect(() => {
    const handleCookieChange = () => {
      setCookieValue(Cookies.get(name));
    };

    window.addEventListener('cookiechange', handleCookieChange);
    return () => window.removeEventListener('cookiechange', handleCookieChange);
  }, [name]);

  return cookieValue;
};

export default useCookie;
