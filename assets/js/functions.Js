function createa(className){
    let a = document.createElement('a');
    a.className = className;

    return a;
}

// functions.js
function createDiv(className) {
    let div = document.createElement("div");
    div.className = className; // Ajout de la classe à la div
    return div;
  }

  export {createa};
  export {createDiv};