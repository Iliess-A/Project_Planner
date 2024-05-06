import {task_form} from "./task_form.js";
task_form();
export function proj_form(){

    const buttonn_header = document.querySelector('.button_header');
    const proj_form=document.getElementById('proj_form');

    proj_form.style.display='none';

    buttonn_header.addEventListener('click',event=>{

       

        if(proj_form.style.display === 'none'){

            proj_form.style.display ='flex';

        }else{

            proj_form.style.display ='none';

        }

        //cree le tableau d'objet.

    });

}