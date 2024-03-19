import { PAGENAMES, ROUTES } from '@/enums/CommonEnum';
import usePageTitle from '@/hooks/usePageTitle';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  usePageTitle(PAGENAMES.LOGIN);
  const nav = useNavigate();

  return (
    <div>
      <Button type="primary" onClick={() => nav(ROUTES.HOME)}>
        로그인
      </Button>
    </div>
  );
};

export default Login;
