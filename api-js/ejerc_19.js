const listUsers = async ()=>{
    //espero la peticion
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // lo convierto en objeto 
    const users = await response.json();

    let tableBody = ``;

    //imprimo cada uno de los users
    users.forEach((users) => {
        //concateno dinamicamente
        tableBody+= `<tr>
        <td class="centered">${users.id}</td>
        <td class="centered">${users.name}</td>
        <td class="centered">${users.username}</td>
        <td class="centered">${users.email}</td>
        <td class="centered">${users.address.street}</td>
        </tr>
        `
    });
    //Obtengo el elemento por id y le pongo contenido html
    document.getElementById("table_Users").innerHTML = tableBody;
}

window.addEventListener("load", function () {
    listUsers()
});

