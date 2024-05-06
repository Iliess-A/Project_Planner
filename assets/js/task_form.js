//formulaire task et creation du tableau des task

export function task_form(){

    const buttonn_header = document.querySelector('.button_header');
    const task_form=document.getElementById('task_form');
    const submit_button = document.getElementById('submit_task');

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
    
    //creation du tableau qui vas contenir les differente task
    // submit_task
    const task=[];
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
        task.push(item);
    })
    return task
}