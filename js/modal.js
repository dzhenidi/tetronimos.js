let modal = document.getElementsByClassName('modal')[0];
let closeButton = document.getElementsByClassName('close-modal')[0];

function closeModal() {
  modal.style.display = 'none';
}

closeButton.onclick = closeModal;

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};
