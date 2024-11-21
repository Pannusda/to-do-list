function addList(){
    let lists=document.getElementById('lists')
    let data=document.getElementById('data').value
    const list=document.createElement('li')
    const text=document.createElement('span') 
    text.style.marginLeft='40px'
    if(data.length!=0){   
        text.innerText=data 
        list.appendChild(text)
        lists.appendChild(list)
    }else{
        errorInput()   
    }
    const mark=document.createElement('span')
    mark.innerText='✔'
    const span=document.createElement('span')
    span.appendChild(mark)
    mark.style.visibility='hidden'
    span.appendChild(text)
    list.appendChild(span)

    //adding button X for deleting a list
    const X=document.createElement('button')
    X.style.backgroundColor='transparent'
    X.innerText='✖aaaaaaa'
    list.appendChild(X)
    console.log(list)
    
    X.addEventListener('click',function(){
        lists.removeChild(list)
    })

    //mouseover and mouseout on button X
    X.addEventListener('mouseover',function(){
        X.classList.add('mouseButton')
        list.classList.add('listHover')
    })
    X.addEventListener('mouseout',function(){
        X.classList.remove('mouseButton')
        list.classList.remove('listHover')
    })

    //mouseover and mouseout on a list
    list.addEventListener('mouseover',function(){
        list.classList.add('listHover')  
    })
    list.addEventListener('mouseout',function(){
        list.classList.remove('listHover')      
    })

    //clicking on a list to mark done
    list.addEventListener('click',function(){
        list.classList.toggle('clickList')
        X.classList.toggle('clickListX')
        text.classList.toggle('clickListText')
        mark.classList.toggle('markVisible')
    })
       
    //also clearing data in input field
    data=document.getElementById('data').value=''

    //also adding style to a list
    addStyleList(list,X)
}

function errorInput(){
    const inputField=document.getElementById('data')
    inputField.classList.add('errorInput')
    const p=document.querySelector('p')
    p.classList.add('errorMessage')
    // also hiding error message again when clicking input field
    inputField.addEventListener('click',function(){
        p.classList.remove('errorMessage')
        inputField.classList.remove('errorInput')
    })
}

function addStyleList(list,X){
    if((lists.childNodes.length)%2==0){
        list.classList.add('dark')
        X.classList.add('darkX')
    }
    else{
        list.classList.add('light')
        X.classList.add('lightX')
    }
}
