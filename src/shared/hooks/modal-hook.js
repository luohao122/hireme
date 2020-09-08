import { useState, useCallback } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = useCallback(() => {
    setShowModal(true);
    document.querySelector("body").classList.add("noscroll");
  }, []);

  const closeModalHandler = useCallback(() => {
    setShowModal(false);
    document.querySelector("body").classList.remove("noscroll");
  }, []);

  return [showModal, openModalHandler, closeModalHandler];
};
