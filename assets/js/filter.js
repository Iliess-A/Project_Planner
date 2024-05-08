// cette fonction a pour but de filtrer le tableau.
import { getTab } from "./proj_form.js";
let filterd_tab=[];
let tab=getTab();

const main = document.querySelector('header');
const conteneur_filter = main.querySelector('.filter_conteneur');
const value_filter = conteneur_filter.querySelector('.filter');

function project_filter(){
    //code pour fltrer les projets
    conteneur_filter.addEventListener('change',event=>{

        if(value_filter.value ==='default'){
            console.log('not filtered');
        }else{
            switch(value_filter.value){
                case 'en_cours':
                    filterd_tab=tab.filter(objets =>objets.status === 'en_cours');
                    console.log(filterd_tab);
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
export function filtered_tab(){
return filtered_tab;
};