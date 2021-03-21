const endPoint ="http://localhost:3000/api/v1/journals" 

document.addEventListener("DOMContentLoaded", () => {
    getJournal()

    const createJournalForm = document.querySelector("#create-journal-form")

    createJournalForm.addEventListener("submit", (e) => createFormHandler(e)
    )
})

function getJournal() {
    fetch(endPoint)
    .then(res => res.json())
    .then(journal => {
        journal.data.forEach(journal => {
            const journalMarkUp = `
            <div data-id = ${journal.id}>
                <p> ${journal.attributes.category.name} </p>
                <h1> ${journal.attributes.title} </h1>
                <h3> ${journal.attributes.description} </h3>
                <img src = ${journal.attributes.image_url} height="200" width="250" ><br>
                <button data-id = ${journal.id}>Edit </button>
            </div>
            <br><br>
            `
    document.querySelector("#journal-container").innerHTML += journalMarkUp

        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const imgInput = document.querySelector('#input-url').value
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(titleInput, descriptionInput, imgInput, categoryId)
}

function postFetch(title, description, image_url, category_id) {
    let bodyData = {title, description, image_url, category_id}

    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(res => res.json())
    .then(journal => {
        const journalData = journal.data
        // render JSON response
        const journalMarkup = `
        <div data-id = ${journal.id}>
            <p> ${journalData.attributes.category.name} </p>
            <h1> ${journalData.attributes.title} </h1>
            <h3> ${journalData.attributes.description} </h3>
            <img src = ${journalData.attributes.image_url} height="200" width="250"><br>
            <button data-id = ${journal.id}>Edit </button>
        </div>
        <br><br>`;

        document.querySelector("#journal-container").innerHTML += journalMarkup
    })
}
