const rootEl = document.getElementById('root')

fetch("http://localhost:3000/rooms")
    .then((res) => res.json())
    .then((data) => renderItems(data))


   const renderItems = function(rooms){
        console.log(rooms)

        rooms.forEach((room) => {
            rootEl.innerHTML += `
            <div>
                <h2> Home Owner: ${room.home_owner_name}</h2>
                <h4> bedroom list: ${room.bedroom}<h4>
                <h4> Living room list: ${room.living_room}<h4>
                <h4> Kitchen list: ${room.kitchen}<h4>
                <h4> Dinning room list: ${room.dinning_room}<h4>
            </div>
            `;
        })
    }