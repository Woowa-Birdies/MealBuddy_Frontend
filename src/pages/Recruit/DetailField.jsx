import { Input } from 'antd';
import useRecruitStore from '@store/useRecruitStore';

const { TextArea } = Input;

const DetailField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const handleDetailChange = (e) => {
    setRecruitPost({ ...recruitPost, detail: e.target.value });
  };

  return (
    <TextArea
      placeholder="모임 내용을 자세히 소개해주세요"
      onBlur={handleDetailChange}
      autoSize={{ minRows: 10 }}
    />
  );
};

export default DetailField;
