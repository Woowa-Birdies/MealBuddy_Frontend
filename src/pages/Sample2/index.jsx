import useLoadingStore from '@store/useLoadingStore';
import { Button } from 'antd';

const Sample2 = () => {
  const { setLoading } = useLoadingStore();

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000 * 2);
  };

  return (
    <div>
      <Button type="primary" onClick={handleLoading}>
        로딩
      </Button>
      <Button type="primary" onClick={handleLoading}>
        푸쉬알림
      </Button>
    </div>
  );
};

export default Sample2;
