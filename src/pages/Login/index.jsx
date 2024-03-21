import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import useLoginStore from '@store/useLoginStore';

const Login = () => {
  const nav = useNavigate();
  // zustand store의 setIsLogin 함수 가지고옴
  const setIsLogin = useLoginStore((state) => state.setIsLogin);

  const handleLogin = () => {
    setIsLogin(true);
    nav(ROUTES.HOME);
  };

  return (
    <div>
      로그인페이지
      <Button type="primary" onClick={handleLogin}>
        로그인하기
      </Button>
    </div>
  );
};

export default Login;
