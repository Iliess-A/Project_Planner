// cette fonction a pour but de filtrer le tableau.
import { getTab } from "./proj_form.js";
import { showtable } from './cards.js';

let tab_origin=getTab();

const main = document.querySelector('header');
const conteneur_filter = main.querySelector('.filter_conteneur');
const value_filter = conteneur_filter.querySelector('.filter');
const project_div = document.getElementById('projects');

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

                    showtable(tab_origin.filter(objets =>objets.status === 'en_cours'));
                    break;

                case 'fini':

                    showtable(tab_origin.filter(objets =>objets.status === 'fini'));
                    break;

                case 'pas_commencer':

                showtable(tab_origin.filter(objets =>objets.status === 'pas_commencer'));
                break;

                case 'date_croissante':

                showtable(tab_origin.filter(objets =>objets.status === 'date_croissante'));
                break;

                case 'date_decroissante':

                showtable(tab_origin.filter(objets =>objets.status === 'date_decroissante'));
                break;

                case 'alphabetique':

                    showtable(tab_origin.filter(objets =>objets.status === 'alphabetique'));
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

    }else if(value_filter.id === 'filtre_task'){
        //tu execute cette fonction.
        tasks_filter();
    }
}
