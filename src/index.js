console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 


document.addEventListener('DOMContentLoaded', () => {

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
        const dropdown = document.getElementById("breed-dropdown")
        for(const breed in allBreeds) {
            const li = document.createElement('li')
            li.innerText = `${breed}`
            li.addEventListener('click', function(event) {
                event.currentTarget.style.color = "red"
            })
            ul.append(li) 
        }
        dropdown.addEventListener('change', function(event){
            ul.innerHTML = ""
            for(const breed in allBreeds) {
                if (breed[0] === event.target.value) {
                    const li = document.createElement('li')
                    li.innerText = `${breed}` 
                    ul.append(li)
                }

            }
        })  
    }
    
    

})

