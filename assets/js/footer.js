export function footer() {
    let footerElement = document.querySelector('footer'); // Sélectionne le footer dans le fichier HTML
    let divFooterContainer = document.createElement('div');
    let divDzheylyan = document.createElement('div');
    let divIlies = document.createElement('div');
    let divJordan = document.createElement('div');

    let aDzheylyan = document.createElement('a');
    let aIlies = document.createElement('a');
    let aJordan = document.createElement('a');



    divDzheylyan.classList.add('divDzheylyan');

    divIlies.classList.add('divIlies');
    divJordan.classList.add('divJordan');
    

    divDzheylyan.appendChild(aDzheylyan);
    divFooterContainer.appendChild(divDzheylyan);


    divIlies.appendChild(aIlies);
    divFooterContainer.appendChild(divIlies);


    divJordan.appendChild(aJordan);
    divFooterContainer.appendChild(divJordan);
    divFooterContainer.classList.add('footer-container')
    footerElement.appendChild(divFooterContainer);// ajout de la divcontainer dans le footer

    

}


//<i class="fa-brands fa-github"></i> 
//<i class="fa-regular fa-copyright"></i>