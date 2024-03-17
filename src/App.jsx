import Base from '@/components/layouts/Base';
import { SYSTEM_MODE } from '@/constants/Constants';
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
};

export default App;
