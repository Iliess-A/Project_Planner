
  // functions.js
  import { proj_formulaire } from "./proj_form.js";
  import { getTab } from "./proj_form.js";
  import { remaningTime } from "./remaningTime.js";

  let dateToDay; // variable qui va récupérer la date du input Date 
  // let tab=[]; // tableau qui récupère les données du formulaire pro_forms.js
  
  function createDiv(name) {
    let div = document.createElement("div");
    div.className = name; // Ajout de la classe à la div
    return div;
  }
  
  // code
  const main = document.querySelector('header');
  const conteneur_filter = main.querySelector('.filter_conteneur');
  const value_filter = conteneur_filter.querySelector('.filter');
  let mainElement = document.querySelector("main"); // on sélectionne le main qui à été créé en html pur
  function card() {
    //Création de la div qui va contenir toutes les autres div
    let projects = createDiv("cards"); //création de la div project avec sa class cards
    projects.setAttribute("id", "projects"); //ajout de l'id projects à la div
    // projects.innerHTML="";

    let task = createDiv("cards"); //création de la div task avec sa class cards
    task.setAttribute("id", "task"); //ajout de l'id task à la div 'task'
    // task.innerHTML="";
  
    mainElement.appendChild(projects); //On ajoute la div projects au main
    mainElement.appendChild(task); //On ajoute la div task au main
    // mainElement.innerHTML='';

  }
  
   export function AddProject(tableau) {
    card();
    //création de la div container
    if (tableau){
      projects.innerHTML='';
      const submit_button = document.getElementById('submit_proj');

      submit_button.addEventListener('click',event=>{
        
        
        projects.innerHTML='';
        for (let i = 0; i < tableau.length; i++) {
          let divProject = createDiv("project");
          let divNameContainer = createDiv("nameContainer");
          let supp = createDiv("suppElement");
          let divDateContainer = createDiv("dateContainer");
          let divNbOfDays = createDiv("nbOfDaysContainer");
          let divStatus = createDiv("statusContainer")
          divProject.setAttribute("id", "index"+[i]); // donne un attribu id avec une valeur index incrémenté par i à divProject
          

          let pName = document.createElement('p');
          let Date = document.createElement('p');
          let Day = document.createElement('p');
          let imgSupp = document.createElement('img');
          imgSupp.setAttribute('src','./assets/images/icon/icons-trash-48.png');
          imgSupp.setAttribute('id',`index ${i}`);


          divNbOfDays.appendChild(Day);
          Date.innerHTML= tableau[i].date;
          divDateContainer.appendChild(Date);
          pName.innerHTML = tableau[i].titre;
          divNameContainer.appendChild(pName);
         //Ajoute toutes les div container à la div divProject 
         divProject.appendChild(divNameContainer);
         divProject.appendChild(divDateContainer);
         divProject.appendChild(divNbOfDays);
         divProject.appendChild(divStatus);
         supp.appendChild(imgSupp);
         divProject.appendChild(supp);
         projects.appendChild(divProject); // Ajoute la div divProject à la Div project


         // Date 
         dateToDay = tableau[i].date;
         Day.innerText = ''+ remaningTime(dateToDay) + 'day';
         let index = tableau[i];
         
         console.log(tableau[i]);

         let DivParentsProject = document.getElementById('projects');
        //  // ====================== Debut du supp ==========================


         imgSupp.addEventListener('click',event =>{

          let childElement = document.getElementById("index"+[i]);
          console.log(childElement);
          DivParentsProject.removeChild(childElement);
          // console.log(tab);
          tableau.splice(index,1);
          // console.log(tab);

          
        })

        conteneur_filter.addEventListener('click',event =>{

          AddProject(tableau);

          
        })

        }
        console.log(submit_button);
        
      })
      
    }else{
      const submit_button = document.getElementById('submit_proj');
      submit_button.addEventListener('click', events =>{
        AddProject(tableau);
        console.log("teeeeeeeeeeeeeeeeeeeest")
      });

      console.log('ton tab est vide');
    }
 
  }


// ================================================================= TASK ===============================================
//   function createTask(){
//     let abab = 25;
//     console.log(abab);

//   }
// createTask();