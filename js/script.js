


  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
   /*  background: document.querySelector('.overlay_modal_card') */
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
 /*  refs.background.addEventListener('click', toggleModal); */

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
