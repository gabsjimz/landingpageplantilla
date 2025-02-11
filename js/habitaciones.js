import habitaciones from "./dataRooms";

//populate Covers
function fillCovers() {
  habitaciones.forEach((room) => {
    const img = room.imagen;
    const roomCover = document.getElementById();
    roomCover = `
            <div class="room-image" onclick="irAVista()" style = "cursor:pointer">
                <img src="${room.image}" alt="${room.name}">
            </div>
            <h4 style="padding-top:0.5rem">${room.name}</h4>
            <p>Desde:</p>
            <p style="padding-bottom:1rem"; class="price">$${room.price}/por noche</p>
            <button style="padding-left:1.5rem" class="btn btn-outline">¡Reserva ya!</button>
        `;
  });
}
