import useModalConfirmStore from '@store/useModalConfirmStore';
import { UserCancelError } from '@utils/Error';

const useConfirmModal = () => {
  const { setContent, setIsConfirmOpen, setOnOk, setOnCancel } = useModalConfirmStore();

  return (content) => {
    return new Promise((resolve, reject) => {
      setContent(content);
      setIsConfirmOpen(true);
      setOnOk(() => {
        setIsConfirmOpen(false);
        resolve(true);
      });
      setOnCancel(() => {
        setIsConfirmOpen(false);
        reject(new UserCancelError('Operation cancelled by the user'));
      });
    });
  };
};

export default useConfirmModal;
