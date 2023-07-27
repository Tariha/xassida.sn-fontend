import { useState } from "react"

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleModal = (content) => {
    setModal(!content ? false : true);
    if (content) {
      setModalContent(content);
    }
  };

  return {
    modal,
    handleModal,
    modalContent
  };
};

export {
  useModal
}
