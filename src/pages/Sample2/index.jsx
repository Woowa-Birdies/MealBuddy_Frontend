import sampleApi from '@api/biz/sampleApi';
import { ROUTES } from '@enums/CommonEnum';
import useConfirm from '@hooks/component/useConfirm';
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

  const handleLogout = useConfirm({
    content: '로그아웃 하시겠습니까?',
    onOk: () => {
      setIsLogin(false);
      nav(ROUTES.HOME);
    },
  });

  const handle11111 = async () => {
    try {
      const res = await sampleApi.getByPostId(3);
      console.log('res', res.data);
    } catch (error) {
      console.log(error);
    }
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
      <Button type="primary" onClick={handle11111}>
        1
      </Button>
    </div>
  );
};

export default Sample2;
