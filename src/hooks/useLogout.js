import { useNavigate } from 'react-router-dom';
import useConfirmModal from '@hooks/component/modal/useConfirmModal';
import handleError from '@utils/ErrorHandler';
import { ROUTES, ENVMODE } from '@enums/CommonEnum';
import { SYSTEM_MODE, DOMAIN_URL } from '@constants/Constants';
import Cookies from 'js-cookie';
import loginApi from '@api/biz/loginApi';
import { clearTokenDev } from '@/token';
import useLoginStore from '@store/useLoginStore';

const useLogout = () => {
  const nav = useNavigate();
  const showConfirm = useConfirmModal();
  const { setIsLogin } = useLoginStore();

  const handleLogout = async () => {
    try {
      const confirmed = await showConfirm('로그아웃 하시겠습니까?');
      if (!confirmed) return;

      if (SYSTEM_MODE === ENVMODE.PROD) {
        await loginApi.postLogout();
        Cookies.remove('__Secure-access', { path: '/', domain: DOMAIN_URL });
      } else {
        clearTokenDev();
      }
      setIsLogin(false);
      nav(ROUTES.LOGOUT);
    } catch (error) {
      handleError(error);
    }
  };

  return handleLogout;
};

export default useLogout;
