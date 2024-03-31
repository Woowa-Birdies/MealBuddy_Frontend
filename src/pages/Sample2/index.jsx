import sampleApi from '@api/biz/sampleApi';
import { ROUTES } from '@enums/CommonEnum';
import useLoadingStore from '@store/useLoadingStore';
import useLoginStore from '@store/useLoginStore';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Sample2 = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const { setIsLogin } = useLoginStore();
  const nav = useNavigate();

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000 * 2);
  };

  const handleLogout = () => {
    setIsLogin(false);
    nav(ROUTES.HOME);
  };

  const handleHealthCheck = async () => {
    const res = await sampleApi.getHealthCheck();
    console.log('res', res);
  };

  return (
    <div>
      <Button type="primary" onClick={handleLoading}>
        로딩
      </Button>
      <Button type="primary" onClick={handleLoading}>
        푸쉬알림
      </Button>
      <Button type="primary" onClick={handleLogout}>
        로그아웃
      </Button>
      <Button type="primary" onClick={handleHealthCheck}>
        헬스체크
      </Button>
    </div>
  );
};

export default Sample2;
