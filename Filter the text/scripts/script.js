let list = document.querySelector("nav ul");
list.textContent = ` `;

let lines = [
                `RJSeihewoifewoihfefoiewf;777`,
                `VUEiewheufhefhieioieoifi;555`,
                `AJSeyrvewrwyvryerieiivoi;333`
            ];

            for(let i=0 ; i<lines.length ; i++){
                let line = lines[i];
                let slice_it = line.slice(0,3);
                let find_it = line.indexOf(";");
                let new_letter = line.slice(find_it+1);
                let word = slice_it + `:` + new_letter;
                let result = word;
                
                let new_li_element = document.createElement("li");
                new_li_element.textContent = result;
                list.appendChild(new_li_element);
            }