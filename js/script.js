

  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
      backdrop: document.querySelector('.js-backdrop'),
      addBtn: document.querySelector(".button_card_add")
    
}

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
 refs.addBtn.addEventListener("click", addToLocalStorage) 

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

/* https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>> */
/* /movie/{movie_id} */
/* API Key (v3 auth): 671c14eb1babf71c7ecd9b35ab5716a8 */

function fetchOneMovie() {
  return  fetch("https://api.themoviedb.org/3/movie/76341?api_key=671c14eb1babf71c7ecd9b35ab5716a8")
        .then(resp => resp.json())
    .then(data=>console.log(data.id))
  
}

fetchOneMovie()

function addToLocalStorage() {
localStorage.setItem("key", JSON.stringify(fetchOneMovie) )
}

/* addToLocalStorage() */