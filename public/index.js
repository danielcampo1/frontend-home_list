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
    .then(jj => {
        jj.data.forEach(journal => {
            // debugger
            let newJournal = new Journal(journal, journal.attributes)

            document.querySelector("#journal-container").innerHTML += newJournal.renderJournalCard()

        })
        document
        .querySelectorAll('.delete-btn')
        .forEach((btn) => btn.addEventListener('click', deleteJournal))
    })
}

function deleteJournal(e) {
    const { id } = e.target.dataset.id;
    fetch (`http://localhost:3000/api/v1/journals/${id}`, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then((date) => e.target.remove())
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
        console.log(journal);
        // render JSON response
        const journalData = journal.data

        let newJournal = new Journal(journalData, journalData.attributes)

        document.querySelector("#journal-container").innerHTML += newJournal.renderJournalCard()
    })
}
