import {task_form} from "./task_form.js";
task_form();
export function proj_form(){

    const buttonn_header = document.querySelector('.button_header');
    const proj_form=document.getElementById('proj_form');
    const submit_button = document.getElementById('submit_proj');

    proj_form.style.display='none';

    buttonn_header.addEventListener('click',event=>{

       

        if(proj_form.style.display === 'none'){

            proj_form.style.display ='flex';

        }else{

            proj_form.style.display ='none';

        }

    });

    //submit_proj
    
    const proj_tab=[];
    submit_button.addEventListener('click',event=>{

        const titre = document.getElementById('titre_proj');
        const date = document.getElementById('date_task');
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
        proj_tab.push(item);
        // console.log(item);
    })
}