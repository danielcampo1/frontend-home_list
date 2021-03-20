const endpoint ="http://localhost:3000/api/v1/journals" 

document.addEventListener("DOMContentLoaded", () => {
    getJournal()
})

function getJournal() {
    fetch(endpoint)
    .then(res => res.json())
    .then(journal => {
        journal.data.forEach(journal => {
            const journalMarkUp = `
            <div data-id = ${journal.id}>
                <p> ${journal.attributes.category.name} </p>
                <h1> ${journal.attributes.title} </h1>
                <h3> ${journal.attributes.description} </h3>
                <img src = ${journal.attributes.image_url}>
                <button data-id = ${journal.id}>Edit </button>
            </div>
            <br><br>
            `
    document.querySelector("#journal-container").innerHTML += journalMarkUp

        })
    })
}