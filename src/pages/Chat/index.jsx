import { PAGENAMES } from '@/enums/CommonEnum';
import usePageTitle from '@/hooks/usePageTitle';
import { Button } from 'antd';

const Chat = () => {
  usePageTitle(PAGENAMES.CHAT);

  return (
    <div>
      <Button type="primary" danger>
        asd
      </Button>
      Chat page
    </div>
  );
};

export default Chat;
