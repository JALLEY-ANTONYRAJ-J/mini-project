    var popupoverlay=document.querySelector(".popup-overlay")
    var popform=document.querySelector(".popup-from")
    var popbutton=document.getElementById("popbutton")

    popbutton.addEventListener("click",function(){
        popupoverlay.style.display="block"
        popform.style.display="block"
    })

    var cancelbutton=document.getElementById("cancel-button")

    cancelbutton.addEventListener("click",function(event){
        event.preventDefault()

        popupoverlay.style.display="none"
        popform.style.display="none"
    })

    var container=document.querySelector(".container")
    var addbook=document.getElementById("add-book")
    var inputtitle=document.getElementById("input-title")
    var inputauthor=document.getElementById("input-author")
    var inputdescription=document.getElementById("input-description")

    addbook.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","booklistbox")
        div.innerHTML=` <h3>${inputtitle.value}</h3> 
        <h4>${inputauthor.value}</h4>
            <p>${inputdescription.value}</p>
            <button onclick="deletebook(event)">delete</button>`
        container.append(div)
         popupoverlay.style.display="none"
        popform.style.display="none"
            
            

    })

    function deletebook(event){
        event.target.parentElement.remove()

    }