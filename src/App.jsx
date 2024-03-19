import Base from '@/components/layouts/Base';
import { SYSTEM_MODE } from '@/constants/Constants';
import { ROUTES } from '@/enums/CommonEnum';
import Chat from '@/pages/Chat';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    console.log('현재 모드', SYSTEM_MODE);
  }, []);

  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.CHAT} element={<Chat />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
};

export default App;
