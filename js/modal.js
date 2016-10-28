
const modal = document.getElementsByClassName('modal')[0];
const closeButton = document.getElementsByClassName('close-modal')[0];

export const showModal = () => {
  modal.style.display = 'block';
  document.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  closeButton.onclick = () => modal.style.display = 'none';

};
