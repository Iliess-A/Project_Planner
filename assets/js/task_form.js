//formulaire task et creation du tableau des task

export function task_form(){

    const buttonn_header = document.querySelector('.button_header');
    const task_form=document.getElementById('task_form');


    if(buttonn_header.id!=='add_task'){

        task_form.style.display='none';

    }else{

        buttonn_header.addEventListener('click',event=>{

            if(task_form.style.display === 'none'){

                task_form.style.display ='flex';

            }else{

                task_form.style.display ='none';

            }
    
            //cree le tableau des task.
    
        });
    }
}