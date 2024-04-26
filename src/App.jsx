import Base from '@/components/layouts/Base';
import { ENVMODE, ROUTES } from '@/enums/CommonEnum';
import Home from '@/pages/Home';
import LoginSignup from '@/pages/LoginSignup';
import UserProfile from '@/pages/UserProfile';
import LoadingModal from '@components/ui/Spin/LoadingModal';
import Recruit from '@/pages/Recruit';
import RecruitPost from '@/pages/RecruitPost';
import EditProfile from '@/pages/ProfileEdit';
import Review from '@/pages/Review';
import Report from '@/pages/UserReport';
import PageTitleUpdater from '@hooks/component/PageTitleUpdater';
import ScrollToTop from '@hooks/component/ScrollToTop';
import { validateKeys } from '@utils/CommonUtil';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import UserVerification from '@/pages/UserVerification';
import UserActivity from '@/pages/UserActivity';
import UserRequest from '@/pages/UserRequestStatus';
import ApplicantsList from '@/pages/ApplicantList';
import Chat from '@/pages/Chat';
import ModalConfirmNegative from '@components/ui/Modal/ModalConfirmNegative';
import Logout from '@/pages/Logout';
import ModalWarning from '@components/ui/Modal/ModalWarning';
import { SYSTEM_MODE } from '@constants/Constants';
import useUserInfoStore from '@store/useUserInfoStore';

const App = () => {
  useEffect(() => {
    if (SYSTEM_MODE !== ENVMODE.PROD) {
      console.log('현재 모드', SYSTEM_MODE);
      validateKeys();
    }
  }, []);

  return (
    <BrowserRouter>
      <Base>
        <LoadingModal />
        <ModalConfirmNegative />
        <ModalWarning />
        <ScrollToTop />
        <PageTitleUpdater />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<LoginSignup type="login" />} />
          <Route path={ROUTES.SIGNUP} element={<LoginSignup type="signup" />} />
          <Route
            path={ROUTES.MYPAGE}
            element={
              <ProtectedRoute>
                <UserProfile type="mypage" />
              </ProtectedRoute>
            }
          />
          <Route path={ROUTES.USERPAGE} element={<UserProfile type="userpage" />} />
          <Route
            path={ROUTES.RECRUIT}
            element={
              <ProtectedRoute>
                <Recruit />
              </ProtectedRoute>
            }
          />
          <Route path={ROUTES.RECRUITPOST} element={<RecruitPost />} />
          <Route path={ROUTES.EDITPROFILE} element={<EditProfile />} />
          <Route path={ROUTES.REVIEW} element={<Review />} />
          <Route path={ROUTES.REPORT} element={<Report />} />
          <Route path={ROUTES.VERIFICATION} element={<UserVerification />} />
          <Route
            path={ROUTES.USERACTIVITY}
            element={
              <ProtectedRoute>
                <UserActivity />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.USERREQUESTSTATUS}
            element={
              <ProtectedRoute>
                <UserRequest />
              </ProtectedRoute>
            }
          />
          <Route path={ROUTES.APPLICANTSLIST} element={<ApplicantsList />} />
          <Route
            path={ROUTES.CHAT}
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route path={ROUTES.LOGOUT} element={<Logout />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
};

export default App;

const ProtectedRoute = ({ children }) => {
  const { userId, setUserId } = useUserInfoStore();
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 userId 확인
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    } else {
      navigate(ROUTES.LOGIN);
    }
  }, [navigate, setUserId]);

  useEffect(() => {
    // 현재 userId를 로컬 스토리지에 저장
    localStorage.setItem('userId', userId);
  }, [userId]);

  return userId !== 0 ? children : null;
};
