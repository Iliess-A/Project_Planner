//formulaire task et creation du tableau des task
const task_table=JSON.parse(localStorage.getItem('task_table')) || [];
export function task_formulaire(){

    const buttonn_header = document.querySelector('.button_header');
    const task_form=document.getElementById('task_form');
    const submit_button = document.getElementById('submit_task');
    const quit_button = document.getElementById('quit');

    if(buttonn_header.id!=='add_task'){

        task_form.style.display='none';

    }else{

        buttonn_header.addEventListener('click',event=>{

            if(task_form.style.display === 'none'){

                task_form.style.display ='flex';

            }else{

                task_form.style.display ='none';

            }
    
        });
    }

    //petite croix pour quitter le formulaire.
    quit_button.addEventListener('click',event=>{
        task_form.style.display='none';
    });
    
    //creation du tableau qui vas contenir les differente task
    //remplis le tableau avec les donnee du formulaire
    
    submit_button.addEventListener('click',event=>{

        const titre = document.getElementById('titre_task');
        const date = document.getElementById('date_task');
        const description = document.getElementById('description_task');
        const status = document.getElementById('status_task');

        const item ={
            titre:titre.value,
            date:date.value,
            description:description.value,
            status:status.value
        }
        task_table.push(item);
        localStorage.setItem('task_table', JSON.stringify(task_table));
    })
    return task_table
}