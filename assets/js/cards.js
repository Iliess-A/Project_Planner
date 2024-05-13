/* cette fonction vas recevoire un tableau avec ce tableau elle vas soit cree une div avec la
liste des projets soit display la liste des tasks on doit a partire de ces div 
(car oui pour chaque objet du tableau on vas créé une div ) supprimer du tableau et changer le status
ce dernier dois ce refresh des que le tableau est modifier donc supression ou filtrage */

//positionement dans le dom

const projects_div = document.getElementById('projects');
export function showtable(tableau){

  //vide l'affichage
  projects_div.innerHTML='';
  // étape une voir si le tableau recus est bon simple console.log 
  // console.log(tableau); ok

  //maintenant pour chaque element du tab je cree une div 
  tableau.forEach((element,index) => {
    
    // == element.titre == maniere pour recup chaque element donc titre etc 
    const div = document.createElement('div');
    div.id = `project_${index}`;
    div.classList.add('project');
    projects_div.appendChild(div);

    //creation des div pour bien placer les element dans la div.
    const divNameContainer = document.createElement('div');
    divNameContainer.className = "nameContainer";

    const supp = document.createElement('div');
    supp.className ='suppElement';

    const divDayLeft = document.createElement('div');
    divDayLeft.className = 'divDayLeft';

    const divStatus = document.createElement('div');
    divStatus.className = 'statusContainer';

    /*creation des elemet donc titre dayLeft status et supp ainsi 
    que rempliassage de ces derniers.  */
    let pName = document.createElement('p');
    let Day = document.createElement('p');
    
    let status = document.createElement('select');
    let status_option1 = document.createElement('option');
    let status_option2 = document.createElement('option');
    let status_option3 = document.createElement('option');

    let imgSupp = document.createElement('img');
    imgSupp.setAttribute('src','./assets/images/icon/icons-trash-48.png');
    
    //mettre le contenus dans la bonne div.
    divNameContainer.appendChild(pName);
    divDayLeft.appendChild(Day);

    supp.appendChild(imgSupp);


    

  });

}