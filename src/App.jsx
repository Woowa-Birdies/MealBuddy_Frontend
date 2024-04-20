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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserVerification from '@/pages/UserVerification';
import UserActivity from '@/pages/UserActivity';
import UserRequest from '@/pages/UserRequestStatus';
import ApplicantsList from '@/pages/ApplicantList';
import Chat from '@/pages/Chat';
import ModalConfirmNegative from '@components/ui/Modal/ModalConfirmNegative';
import Logout from '@/pages/Logout';
import ModalWarning from '@components/ui/Modal/ModalWarning';
import { SYSTEM_MODE } from '@constants/Constants';

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
          <Route path={ROUTES.MYPAGE} element={<UserProfile type="mypage" />} />
          <Route path={ROUTES.USERPAGE} element={<UserProfile type="userpage" />} />
          <Route path={ROUTES.RECRUIT} element={<Recruit />} />
          <Route path={ROUTES.RECRUITPOST} element={<RecruitPost />} />
          <Route path={ROUTES.EDITPROFILE} element={<EditProfile />} />
          <Route path={ROUTES.REVIEW} element={<Review />} />
          <Route path={ROUTES.REPORT} element={<Report />} />
          <Route path={ROUTES.VERIFICATION} element={<UserVerification />} />
          <Route path={ROUTES.USERACTIVITY} element={<UserActivity />} />
          <Route path={ROUTES.USERREQUESTSTATUS} element={<UserRequest />} />
          <Route path={ROUTES.APPLICANTSLIST} element={<ApplicantsList />} />
          <Route path={ROUTES.CHAT} element={<Chat />} />
          <Route path={ROUTES.LOGOUT} element={<Logout />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
};

export default App;
