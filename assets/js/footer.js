export function footer() {
    let footerElement = document.querySelector('footer'); // Sélectionne le footer dans le fichier HTML
    let divFooterContainer = document.createElement('div');
    let divDzheylyan = document.createElement('div');
    let divIlies = document.createElement('div');
    let divJordan = document.createElement('div');

    let imgDzheylyan = document.createElement('img');
    let imgIlies = document.createElement('img');
    let imgJordan = document.createElement('img');



    divDzheylyan.classList.add('divDzheylyan');
    divIlies.classList.add('divIlies');
    divJordan.classList.add('divJordan');

    imgDzheylyan.classList.add('redim-img')
    imgIlies.classList.add('redim-img')
    imgJordan.classList.add('redim-img')

    imgDzheylyan.classList.add('redim-img')
    imgDzheylyan.setAttribute('src','./assets/images/icon/github.png');
    divDzheylyan.appendChild(imgDzheylyan);
    divFooterContainer.appendChild(divDzheylyan);


    imgIlies.setAttribute('src','./assets/images/icon/github.png');
    divIlies.appendChild(imgIlies);
    divFooterContainer.appendChild(divIlies);


    imgJordan.setAttribute('src','./assets/images/icon/github.png');
    divJordan.appendChild(imgJordan);
    divFooterContainer.appendChild(divJordan);

    divFooterContainer.classList.add('footer-container')
    footerElement.appendChild(divFooterContainer);// ajout de la divcontainer dans le footer

    

}


//<i class="fa-brands fa-github"></i> 
//<i class="fa-regular fa-copyright"></i>