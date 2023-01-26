

  const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      addTo: document.querySelector(".add-to")
    /* closeModalBtn: document.querySelector('[data-modal-close]'),
      backdrop: document.querySelector('.js-backdrop'),
      addBtn: document.querySelector(".button_card_add") */
    
}


refs.openModalBtn.addEventListener('click', onOpenModal);
/* refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick); */
 /* refs.addBtn.addEventListener("click", addToLocalStorage)  */

function onOpenModal() {
    document.addEventListener('keydown', onEscapeClick)
    document.body.classList.add('show-modal');


    fetchOneMovie().then(({ title, vote_average, vote_count, popularity, original_title, genres, overview }) => {
        const genreList = genres.map(genre => genre.name)
       

        return refs.addTo.innerHTML = `<div class="backdrop js-backdrop" >

        <div class="modal" >
            <div class="close_modal_movie_card" data-modal-close>
                <svg class="modal__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
        </div>
            <div class="modal_txt">
                <img src="./images/phone.jpg" alt="phonesize_image_movie" class="image_movie_card">
                <div class="movie_card_info">
                    <h1 class="movie_title_card_modal">${title}</h1>
                    <div class="rates_info_card_movie">

        <div class="rates_info_card_movie_titles">
            <p class="rates_info_card_movie_titles_name">Vote / Votes</p> 
                    <p class="rates_info_card_movie_titles_name">Popularity</p> 
                    <p class="rates_info_card_movie_titles_name">Original Title</p> 
                    <p class="rates_info_card_movie_titles_name">Genre</p> 

        </div>
                    
<div class="rates_info_card_movie_datas">
    <p class="votes_number_card"> <span class="span_votes_number_card">${vote_average}</span>/${vote_count}</p>
                    <p class="votes_number_card">${popularity}</p>
                    <p class="votes_number_card">${original_title}</p>
                    <p class="votes_number_card">${genreList}</p>
</div>
                    

                    </div>
                  
                    <h2 class="about-film-card-info">About</h2>

                 <p class="description-movie-card"> ${overview}</p>  
                    <div class="button-list-card">
                        <button class="button_card_add">ADD TO WATCHED</button>
                    <button class="button_card_add">ADD TO QUEQUE</button>
                    </div>
                </div>

                </div>
        </div>
        </div>
    
    `})

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
    return fetch("https://api.themoviedb.org/3/movie/76341?api_key=671c14eb1babf71c7ecd9b35ab5716a8")
        .then(resp => {
             if (!resp.ok) {
                 throw new Error(resp.statusText);
             }
            return resp.json()
        })
  
}



console.log( fetchOneMovie().then(data=>console.log(data)))



/* function addToLocalStorage() {
localStorage.setItem("key", JSON.stringify(fetchOneMovie) )
} */

/* addToLocalStorage() */