const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button=document.querySelector('header button');

button.addEventListener("click", add);
form.addEventListener("change", save)

function add(){

    const today = prompt("Informe o Dia (DD/MM)")
    
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert("Dia já incluso")
        return
    }

    nlwSetup.addDay(today)
}

function save() {

   localStorage.setItem('local', JSON.stringify(nlwSetup.data))
    
}


const data = JSON.parse(localStorage.getItem("local")) || {}

nlwSetup.setData(data)

nlwSetup.load()