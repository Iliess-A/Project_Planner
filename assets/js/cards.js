
  // functions.js
  import { proj_formulaire } from "./proj_form.js";
  import { getTab } from "./proj_form.js";
  let tab=[];
  
  function createDiv(name) {
    let div = document.createElement("div");
    div.className = name; // Ajout de la classe à la div
    return div;
  }
  
  // code
  
  let mainElement = document.querySelector("main"); // on sélectionne le main qui à été créé en html pur
  function card() {
    //Création de la div qui va contenir toutes les autres div
     let projects = createDiv("cards"); //création de la div project avec sa class cards
    projects.setAttribute("id", "projects"); //ajout de l'id projects à la div

    let task = createDiv("cards"); //création de la div task avec sa class cards
    task.setAttribute("id", "task"); //ajout de l'id task à la div 'task'
  
    mainElement.appendChild(projects); //On ajoute la div projects au main
    mainElement.appendChild(task); //On ajoute la div task au main

  }
  
   export function AddProject() {
    
    card();
    //création de la div container
    if (tab.length<1){

      const submit_button = document.getElementById('submit_proj');

      submit_button.addEventListener('click',event=>{

        tab = getTab();
        console.log(tab);
        projects.innerHTML='';
        for (let i = 0; i < tab.length; i++) {
          let divProject = createDiv("project");
          let divNameContainer = createDiv("nameContainer");
          // let aName = document.createElement('a'); 
          let divDateContainer = createDiv("dateContainer");
          let divNbOfDays = createDiv("nbOfDaysContainer");
          let divStatus = createDiv("statusContainer")
          divProject.setAttribute("id", "index"); // donne un attribu id avec une valeur index à divProject
    
          let pName = document.createElement('p');
          let Date = document.createElement('p');
          let Day = document.createElement('p');
          
          Day.innerText = tab[i].date;
          divNbOfDays.appendChild(Day);
          Date.innerHTML= '06/05/2024'
          divDateContainer.appendChild(Date);
          pName.innerHTML = tab[i].titre;
          divNameContainer.appendChild(pName);
         //Ajoute toutes les div container à la div divProject 
         divProject.appendChild(divNameContainer);
         divProject.appendChild(divDateContainer);
         divProject.appendChild(divNbOfDays);
         divProject.appendChild(divStatus);
         projects.appendChild(divProject); // Ajoute la div divProject à la Div project
        }

      })
    }else{
      console.log('ton tab est vide');
    }
    
  }