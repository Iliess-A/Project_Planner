import {task_form} from "./task_form.js";

export function proj_form(){

    const buttonn_proj =document.getElementById('add_projects');
    const proj_form=document.getElementById('proj_form');

    proj_form.style.display='none';

    buttonn_proj.addEventListener('click',event=>{
        
        const form_display =proj_form.style.display;
        if(form_display === 'content'){
            form_display ='none'
        }else{
            form_display ='content'
        }

        //cree le tableau d'objet.

    });

}