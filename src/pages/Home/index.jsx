import { ROUTES } from '@enums/CommonEnum';
import useLoginStore from '@store/useLoginStore';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();
  const { isLogin } = useLoginStore();
  const setIsLogin = useLoginStore((state) => state.setIsLogin);

  const handleLogin = () => {
    setIsLogin(false);
    nav(ROUTES.LOGIN);
  };
  return (
    <div>
      홈페이지
      <Button type="primary" onClick={handleLogin}>
        {isLogin ? '로그아웃' : '로그인하러가기'}
      </Button>
    </div>
  );
};

export default Home;
