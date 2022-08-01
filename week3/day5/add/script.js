function todoList () {
    let input = document.querySelector("#newitem")
    let submit = document.querySelector("#additem")
    let list = document.querySelector("#list")

    submit.addEventListener("click", function(e) {
        e.preventDefault();
        let value = input.value

        // create LI 
        let li = document.createElement("li")
        let text = document.createTextNode(value)
        let span = document.createElement("span")
        span.appendChild(text)

        li.appendChild(span);
        list.appendChild(li)
        input.value = "";

        // create button Group

        let btG = document.createElement("div");
        btG.setAttribute("class", "button-group");
        li.appendChild(btG)
        
        // Create edit button
        let editButton = document.createElement("button");
        let editButtonText = document.createTextNode("Edit");
        editButton.appendChild(editButtonText)
        btG.appendChild(editButton)

        editButton.addEventListener("click", function(){
            let textArea = document.createElement("textarea");
            li.appendChild(textArea)
            textArea.value = span.innerHTML;
            li.removeChild(span);
            btG.removeChild(editButton)

            let editDone = document.createElement("button")
            let editDoneText = document.createTextNode("Edit Done")
            editDone.appendChild(editDoneText)
            btG.appendChild(editDone)

            editDone.addEventListener("click", function(){
                let newValue = textArea.value;
                span.innerHTML = newValue
                li.appendChild(span);
                li.removeChild(textArea);
                btG.removeChild(editDone);
                btG.appendChild(editButton);

            })

        })

        // create Done Button
        let doneButton = document.createElement("button");
        let doneButtonText = document.createTextNode("Done");
        doneButton.appendChild(doneButtonText);
        btG.appendChild(doneButton)

        doneButton.addEventListener("click", function() {
            let li = btG.parentNode;
            li.classList.toggle("done")
        })

        // create Delete Button
        let deleteButton = document.createElement("button");
        let deleteButtonIcon = document.createTextNode("Delete");
        deleteButton.appendChild(deleteButtonIcon);
        btG.appendChild(deleteButton)

        deleteButton.addEventListener("click", function () {
            let li = btG.parentNode;
            list.removeChild(li)
        })

        
    })

}

todoList();