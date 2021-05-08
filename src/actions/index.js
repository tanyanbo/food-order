// Action creator

const showModal = (state) => {
  return {
    type: 'SHOW_MODAL',
    payload: state,
  };
};

export default showModal;
