import Base from '@/components/layouts/Base';
import { SYSTEM_MODE } from '@/constants/Constants';
import { ROUTES } from '@/enums/CommonEnum';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Sample1 from '@/pages/Sample1';
import Sample2 from '@/pages/Sample2';
import Recruit from '@/pages/Recruit';
import PageTitleUpdater from '@hooks/component/PageTitleUpdater';
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
        <PageTitleUpdater />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SAMPLE1} element={<Sample1 />} />
          <Route path={ROUTES.SAMPLE2} element={<Sample2 />} />
          <Route path={ROUTES.Recruit} element={<Recruit />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
};

export default App;
