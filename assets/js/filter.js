// cette fonction a pour but de filtrer le tableau.
import { getTab } from "./proj_form.js";
import { showtable } from './cards.js';

const main = document.querySelector('header');
const conteneur_filter = main.querySelector('.filter_conteneur');
const value_filter = conteneur_filter.querySelector('.filter');
const submit_proj = document.getElementById('submit_proj');
const submit_task = document.getElementById('submit_task');



function project_filter(){
    //appelle de la fonction qui vas afficher le tableau vide ou localstorage.
    showtable(getTab());
    //code pour filtrer les projets:
    conteneur_filter.addEventListener('change',event=>{

        if(value_filter.value ==='default'){
            console.log('not filtered');
            showtable(getTab());
        }else{
            switch(value_filter.value){
                case 'en_cours':

                    showtable(getTab().filter(objets => objets.status === 'en_cours'));
                    
                    break;

                case 'fini':

                showtable(getTab().filter(objets => objets.status === 'fini'));
                    break;

                case 'pas_commencer':

                showtable(getTab().filter(objets => objets.status === 'pas_commencer'));
                break;

                case 'date_croissante':

                showtable(getTab().sort((a,b) => {
                    return new Date(a.date) - new Date (b.date)
                } ));
                break;

                case 'date_decroissante':

                showtable(getTab().sort((a,b) => {
                    return new Date(b.date) - new Date (a.date);
                } ));
                break;

                case 'alphabetique':

                showtable(getTab().sort((a,b) => {
                    return a.titre.toLowerCase().localeCompare(b.titre.toLowerCase());
                } ));
                    break;
                        
            }
        }

    })
    
};

function tasks_filter(){
    //code pour filtrer les task
    console.log('task filter');
};

export function filtre(){
    const main = document.querySelector('header');
    const conteneur_filter = main.querySelector('.filter_conteneur');
    const value_filter = conteneur_filter.querySelector('.filter');
    if(value_filter.id === 'filtre_projet'){
        //tu execute cette fonction
        project_filter();
        submit_proj.addEventListener('click',event=>{
            project_filter();
        })

    }else if(value_filter.id === 'filtre_task'){
        //tu execute cette fonction.
        tasks_filter();
        submit_task.addEventListener('click',event=>{
            project_filter();
        })
    }
}
