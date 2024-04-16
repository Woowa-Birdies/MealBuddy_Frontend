import { Modal } from 'antd';

const useConfirm = (options) => {
  const { title, content, onOk, onCancel } = options;

  const showModal = () => {
    Modal.confirm({
      title,
      content,
      onOk,
      onCancel,
    });
  };

  return showModal;
};

export default useConfirm;
