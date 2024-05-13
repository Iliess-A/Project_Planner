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
    const div_project = document.createElement('div');
    div_project.id = `project_${index}`;
    div_project.classList.add('project');
    projects_div.appendChild(div_project);

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
    pName.textContent = element.titre;
    let Day = document.createElement('p');
    Day.textContent=element.date;
    
    let status = document.createElement('select');
    status.id='change_status';
    let status_option0 = document.createElement('option');
    let status_option1 = document.createElement('option');
    let status_option2 = document.createElement('option');
    let status_option3 = document.createElement('option');
    //remplissage des option
    status_option0.value ='default';
    status_option0.textContent='change status';
    status_option1.value ='en_cours';
    status_option1.textContent='en cours'
    status_option2.value ='fini';
    status_option2.textContent='fini';
    status_option3.value ='pas_commencer';
    status_option3.textContent='pas commencer'
    //append dans status les opt:
    status.appendChild(status_option0);
    status.appendChild(status_option1);
    status.appendChild(status_option2);
    status.appendChild(status_option3);

    let imgSupp = document.createElement('img');
    imgSupp.setAttribute('src','./assets/images/icon/icons-trash-48.png');
    
    //mettre le contenus dans la bonne div.
    divNameContainer.appendChild(pName);
    divDayLeft.appendChild(Day);
    divStatus.appendChild(status);
    supp.appendChild(imgSupp);

    div_project.appendChild(divNameContainer);
    div_project.appendChild(divDayLeft);
    div_project.appendChild(divStatus);
    div_project.appendChild(supp);

    supp.addEventListener('click',event=>{
      
      tableau.splice(index,1);
      showtable(tableau);
      localStorage.setItem('proj_tab', JSON.stringify(tableau));
      
    })
    status.addEventListener('change',event=>{
      // console.log("avant le changement"+element.status);
      let change = status.value;
      // console.log("changement en :"+change);
      element.status = change;
      // console.log('apres le changement '+element.status)
      localStorage.setItem('proj_tab', JSON.stringify(tableau));
      showtable(tableau);
    })
  });

}