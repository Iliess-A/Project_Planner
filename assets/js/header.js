export function buttonHeader(){
    const buttonHeader = document.querySelector('.button_header');
    const div = document.querySelector('.cards');
    if(div){

        if(div.id==='tasks'){
        buttonHeader.removeAttribute('id','add_projects');
        buttonHeader.setAttribute('id', 'add_task');
        buttonHeader.value = 'Add a task';
        console.log('task');
        console.log(buttonHeader);
        }
    }
}

