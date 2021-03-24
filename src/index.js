console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => { addImageElements(data) })

function addImageElements(images) {
    // debugger
    const imageURLs = images['message']
    const container = document.getElementById('dog-image-container')
    imageURLs.forEach( image => {
        // debugger
        let li = document.createElement('li')
        li.innerHTML = `<img src=${image}>`
        // debugger
        container.append(li) 
    })
}

fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => { addBreeds(data) })

function addBreeds(breeds) {
    const allBreeds = breeds['message']
    const ul = document.getElementById("dog-breeds")
    for(const breed in allBreeds) {
        // console.log(breed)
        const li = document.createElement('li')
        li.innerText = `${breed}`
        li.addEventListener('click', function(event) {
    
            const str = event.currentTarget.innerText
            debugger
        })
        ul.append(li) 
        // debugger
        
    }
    
}

