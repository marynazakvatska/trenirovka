


 /*  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
 
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
 */

  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('.js-backdrop'),
}

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
    document.addEventListener('keydown', onEscapeClick)
    document.body.classList.add('show-modal');
}

function onCloseModal() {
    document.removeEventListener('keydown', onEscapeClick)
    document.body.classList.remove('show-modal');
}

function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        onCloseModal();
    }
}

function onEscapeClick(evt) {
    if (evt.code === 'Escape') {
        onCloseModal();
    }
}