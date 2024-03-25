import LoadingModal from '@components/ui/Spin/LoadingModal';
import { Modal } from 'antd';

const showLoading = () => {
  const modal = Modal.info({
    icon: null,
    content: <LoadingModal />,
    centered: true,
    footer: null,
    closable: false,
  });

  const closeModal = () => {
    modal.destroy();
  };

  return closeModal;
};

export default showLoading;
