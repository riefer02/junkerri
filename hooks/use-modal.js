import React, { useContext, useReducer, useMemo } from "react";

// Reducers
const initialModalValues = {
  isActive: false,
  modalData: {},
};

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return openModal(state, action.isActive, action.modalData);
    case "CLOSE_MODAL":
      return closeModal(state, action.isActive, action.modalData);
    default:
      return state;
  }
};

const openModal = (state = {}, isActive = true, modalData = {}) => ({
  ...state,
  isActive,
  modalData,
});

const closeModal = (state = {}, isActive = false, modalData = {}) => ({
  ...state,
  isActive,
  modalData,
});

// Context + Provider
const ModalContext = React.createContext();

export const ModalProvider = ({
  isActive = false,
  modalData = {},
  children = null,
}) => {
  const [modal, dispatch] = useReducer(modalReducer, initialModalValues);

  const contextValue = useMemo(
    () => [
      {
        ...modal,
      },
      dispatch,
    ],
    [isActive, modalData]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook
export const useModal = () => {
  const [modal, dispatch] = useContext(ModalContext);

  const openModal = (isActive = true, modalData = {}) =>
    dispatch({ type: "OPEN_MODAL", isActive, modalData });

  const closeModal = (isActive = false, modalData = {}) =>
    dispatch({ type: "CLOSE_MODAL", isActive, modalData });

  const modalHook = {
    ...modal,
    openModal,
    closeModal,
  };

  return modalHook;
};
