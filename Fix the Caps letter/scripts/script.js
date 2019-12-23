let list = document.querySelector(`nav ul`);
list.textContent = ` `;

let values = [
                `javaSCRIPT IN actION`,
                `livING in Earth`,
                `js loVER`
             ];

             for(let i=0 ; i<values.length ; i++){
                 let value = values[i];
                 let small_letter = value.toLowerCase();
                 let slice_1_letter = small_letter.slice(0,1);
                 let caps_letter = small_letter.replace(slice_1_letter , slice_1_letter.toUpperCase());
                 let result = caps_letter;

                 let new_li_element = document.createElement("li");
                 new_li_element.textContent = result;
                 list.appendChild(new_li_element);
             }