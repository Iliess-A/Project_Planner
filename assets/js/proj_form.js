import { task_formulaire } from "./task_form.js";
task_formulaire();
export function proj_formulaire(){

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
    submit_button.addEventListener('click',event=>{

        const titre = document.getElementById('titre_proj');
        const date = document.getElementById('date_proj');
        const description = document.getElementById('description_projet');
        const status = document.getElementById('status_projet');
        let table_task = task_formulaire();
        const item ={
            titre:titre.value,
            date:date.value,
            description:description.value,
            status:status.value,
            task:table_task
        }

        proj_tab.push(item);
        //je remet a zero le formulaire.
        titre.value='';
        date.value='';
        description.value='';
        status.value='';
        //console.log(proj_tab);
    })
}
const proj_tab=[];

export function getTab(){
    return proj_tab;
}