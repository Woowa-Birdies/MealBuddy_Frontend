import { Input } from 'antd';
import useRecruitStore from '@store/useRecruitStore';

const { TextArea } = Input;

const ContentsField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const handleDetailChange = (e) => {
    setRecruitPost({ ...recruitPost, contents: e.target.value });
  };

  return (
    <TextArea
      placeholder="모임 내용을 자세히 소개해주세요"
      onChange={handleDetailChange} // onBlur에서 onChange로 변경
      value={recruitPost.contents} // TextArea의 값을 recruitPost.contents로 설정
      autoSize={{ minRows: 10 }}
    />
  );
};

export default ContentsField;
