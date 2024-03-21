import { ROUTES } from '@/enums/CommonEnum';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Sample2 = () => {
  const nav = useNavigate();

  return (
    <div>
      <Button type="primary" onClick={() => nav(ROUTES.HOME)}>
        로그인
      </Button>
    </div>
  );
};

export default Sample2;
