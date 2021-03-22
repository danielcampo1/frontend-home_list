class Journal {
    constructor(journal, journalAttributes) {
        this.id = journal.id
        this.title = journalAttributes.title
        this.description = journalAttributes.description
        this.image_url = journalAttributes.image_url
        this.category = journalAttributes.category
        Journal.all.push(this)
    }

    renderJournalCard() {
        return `
                <div data-id = ${this.id}>
                    <p> ${this.category.name} </p>
                    <h1> ${this.title} </h1>
                    <h3> ${this.description} </h3>
                    <img src = ${this.image_url} height="200" width="250" ><br>
                    <button data-id = ${this.id} type=button class = "delete-btn">delete </button>
                </div>
                <br><br>
                `
    }
}

Journal.all = []