
const button = document.querySelector("button")
button.addEventListener("click", () => {
    button.style.display = "none"
    console.log("button clicked")
    axios.get('https://swapi.dev/api/planets/2/').then((res) => {
        let residentsArr = res.data.residents
        for (let i=0; i<residentsArr.length; i++) {
            axios.get(residentsArr[i]).then((res) => {
                let content = document.querySelector("content")
                let text = document.createElement("h2")
                text.textContent = res.data.name
                content.appendChild(text)
            })
        }
    })
})