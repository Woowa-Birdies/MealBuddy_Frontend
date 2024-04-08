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

  const handleAsk = async () => {
    try {
      const postCreateDto = {
        place: '카페 이름',
        latitude: 37.5665,
        longitude: 126.978,
        address: '서울특별시 중구',
        participantTotal: 5,
        contents: '이번 주말 카페에서 모각코 어때요?',
        meetAt: '2024-04-20T14:00:00',
        closeAt: '2024-04-20T18:00:00',
      };
      const res = await sampleApi.postCreate(postCreateDto);
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
      <Button type="primary" onClick={handleAsk}>
        헬스체크
      </Button>
    </div>
  );
};

export default Sample2;
