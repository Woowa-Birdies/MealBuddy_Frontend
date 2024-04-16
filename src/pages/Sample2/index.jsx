import { ROUTES } from '@enums/CommonEnum';
import useLoadingStore from '@store/useLoadingStore';
import useLoginStore from '@store/useLoginStore';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import useConfirmModal from '@hooks/component/modal/useConfirmModal';
import handleError from '@utils/ErrorHandler';

const Sample2 = () => {
  const showConfirm = useConfirmModal();
  const { setLoading } = useLoadingStore();
  const { setIsLogin } = useLoginStore();
  const nav = useNavigate();

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000 * 2);
  };

  const handleLogout = async () => {
    try {
      await showConfirm('로그아웃 하시겠습니까?');
      setIsLogin(false);
      nav(ROUTES.HOME);
    } catch (error) {
      handleError(error);
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
    </div>
  );
};

export default Sample2;
