import useModalWarningStore from '@store/useModalWarningStore';

const UseWarningModal = () => {
  const { setContent, setIsWarningOpen, setOnOk } = useModalWarningStore();

  return (content) => {
    return new Promise((resolve) => {
      setContent(content);
      setIsWarningOpen(true);
      setOnOk(() => {
        setIsWarningOpen(false);
        resolve(true);
      });
    });
  };
};

export default UseWarningModal;
