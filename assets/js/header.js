export function buttonHeader(){
    const buttonHeader = document.querySelector('.button_header');
    const div = document.querySelector('.cards');
    console.log(div.id);
    if(div.id === 'projects'){
        buttonHeader.setAttribute('id', 'add_projects');
        console.log('project');
    }
    else{
        buttonHeader.setAttribute('id', 'add_task');
        buttonHeader.remove.id = 'add_projects';
        buttonHeader.value = 'Add a task';
        console.log('task');
        console.log(buttonHeader);
    }
}

