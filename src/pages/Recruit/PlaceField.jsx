import { Input } from 'antd';
import useRecruitStore from '@store/useRecruitStore';

const PlaceField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const handlePlaceChange = (e) => {
    setRecruitPost({ ...recruitPost, place: e.target.value });
  };

  return (
    <Input placeholder="장소를 입력하세요" style={{ width: '50%' }} onBlur={handlePlaceChange} />
  );
};

export default PlaceField;
