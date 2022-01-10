
const dogFig = document.querySelector('#dog')
const catFig = document.querySelector('#cat')
const dogSpan = document.querySelector('#dogSpan')
const catSpan = document.querySelector('#catSpan')


function getDog(){
    dogSpan.classList.remove('none')
    dogFig.classList.add('none')
    dogSpan.innerText = 'Loading...'
    fetch(`https://api.thedogapi.com/v1/images/search`)
    .then(response => response.json())
    .then(res =>{
       const url = res[0].url
        dogFig.src = url
        dogFig.classList.remove("none")
        dogSpan.classList.add('none')
    })
}

function getCat(){
    catSpan.classList.remove('none')
    catFig.classList.add('none')
    catSpan.innerText = 'Loading...'
    fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(response => response.json())
    .then(res =>{
       const url = res[0].url
        catFig.src = url
        catFig.classList.remove("none")
        catSpan.classList.add('none')
    })
}



export{getDog,getCat}