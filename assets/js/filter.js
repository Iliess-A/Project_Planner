// cette fonction a pour but de filtrer le tableau.
import { getTab } from "./proj_form.js";
import { showtable } from './cards.js';

let filterd_tab=[];
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

                    filterd_tab=tab_origin.filter(objets =>objets.status === 'en_cours');
                    // console.log(filterd_tab);
                    // console.log(filtered_tab_fct());
                    //project_div.innerHTML='';
                    showtable(tab_origin.filter(objets =>objets.status === 'en_cours'));
                    break;
                case 'fini':
                    console.log('fini');
                    break;
                case 'pas_commencer':
                    console.log('pas commencer');
                    break;
                case 'date_croissante':
                    console.log('date croissante');
                    break;
                case 'date_decroissante':
                    console.log('date decroissante');
                    break;
                case 'alphabetique':
                    console.log('de a -> z');
                        
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

//exporte le tableau filtrer.
export function filtered_tab_fct(){
return filterd_tab;
};