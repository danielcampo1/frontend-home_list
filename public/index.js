const endPoint = "http://localhost:3000/rooms"



document.addEventListener("DOMContentLoaded", () => {
    getOwner()
})

function getOwner(){
    fetch(endPoint)
    .then(res => res.json())
    .then(owner =>  {
            owner.forEach(owner => { 
                const ownerName = `
                <h1><strong> ${owner.home_owner_name}'s Home <strong></h1>
                `
            document.querySelector('#owner').innerHTML += ownerName
            })
        })
}
