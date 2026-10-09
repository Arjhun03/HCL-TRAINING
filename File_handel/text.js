async function func() {
    let responce = await fetch('info.txt')
    let text= await responce.text()
    document.getElementById("para").innerText =text
}

func();