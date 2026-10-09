let data = new Array();

function login() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;



    data.push({
        name: name,
        id: id
    });

    console.log(data);

    document.getElementById("result").innerHTML =
        data.map((item) => item.name + " " + item.id);
}