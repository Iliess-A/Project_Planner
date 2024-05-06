//formulaire task et creation du tableau des task

export function task_form(){

    const buttonn_task = document.getElementById('add_task')
    const task_form=document.getElementById('task_form');

    task_form.style.display='none';

    buttonn_task.addEventListener('click',event=>{

        const form_display = task_form.style.display;
        if(form_display === 'content'){
            form_display ='none'
        }else{
            form_display ='content'
        }

        //cree le tableau des task.

    });
}