import {task_form} from "./task_form.js";
task_form();
export function proj_form(){

    const buttonn_header = document.querySelector('.button_header');
    const proj_form=document.getElementById('proj_form');
    const submit_button = document.getElementById('submit_proj');
    const quit_button = document.getElementById('quit');

    proj_form.style.display='none';

    buttonn_header.addEventListener('click',event=>{

       

        if(proj_form.style.display === 'none'){

            proj_form.style.display ='flex';

        }else{

            proj_form.style.display ='none';

        }



    });

    //petite croix pour quitter le formulaire.
    quit_button.addEventListener('click',event=>{
        proj_form.style.display='none';
    });

   
    //remplis le tableau avec les donnee du formulaire
    const proj_tab=[];
    submit_button.addEventListener('click',event=>{

        const titre = document.getElementById('titre_proj');
        const date = document.getElementById('date_proj');
        const description = document.getElementById('description_projet');
        const status = document.getElementById('status_projet');
        let table_task = task_form();
        const item ={
            titre:titre.value,
            date:date.value,
            description:description.value,
            status:status.value,
            task:table_task
        }

        titre.value='';
        date.value='';
        description.value='';
        status.value='';

        proj_tab.push(item);
        // console.log(proj_tab);
        return proj_tab;
    })
}