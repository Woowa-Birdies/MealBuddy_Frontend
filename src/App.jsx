import Base from '@/components/layouts/Base';
import { SYSTEM_MODE } from '@/constants/Constants';
import { ROUTES } from '@/enums/CommonEnum';
import Home from '@/pages/Home';
import LoginSignup from '@/pages/LoginSignup';
import Sample1 from '@/pages/Sample1';
import Sample2 from '@/pages/Sample2';
import PageTitleUpdater from '@hooks/component/PageTitleUpdater';
import ScrollToTop from '@hooks/component/ScrollToTop';
import { validateKeys } from '@utils/CommonUtil';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    console.log('현재 모드', SYSTEM_MODE);
    validateKeys();
  }, []);
  return (
    <BrowserRouter>
      <Base>
        <ScrollToTop />
        <PageTitleUpdater />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<LoginSignup type="login" />} />
          <Route path={ROUTES.SIGNUP} element={<LoginSignup type="signup" />} />
          <Route path={ROUTES.SAMPLE1} element={<Sample1 />} />
          <Route path={ROUTES.SAMPLE2} element={<Sample2 />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
};

export default App;
