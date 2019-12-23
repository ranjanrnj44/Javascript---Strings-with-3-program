let list = document.querySelector("nav ul");
list.textContent = " ";

let values = ["I love js",
              "I write js daily",
              "I am Ranjan",
              "I like js frameworks as well",
              "Working on git"];
for(let i=0 ; i<values.length ; i++){
    let value = values[i];
    if(values[i].indexOf("js") !==-1){
        let result = value;
        let li_element = document.createElement("li");
        li_element.textContent = result;
        list.appendChild(li_element);
    }
}