const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function ativar() {
    minhaListaDeItens.push({
       tarefa: input.value,
       concluida: false 

    })
    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
                <img src="./checked.png" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./trash.png" onclick="deletarItem(${index})">
            </li>
        
        
        
        `
    })

    listacompleta.innerHTML = novaLi

    localStorage.setItem("lista",JSON.stringify(minhaListaDeItens))

}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)
    mostrarTarefas()
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = ! minhaListaDeItens[index].concluida
    mostrarTarefas()
}

function recarregarTarefasa() {
    const localStorage = localStorage.getItem("lista")

    if(localStorage){
    minhaListaDeItens = JSON.parse(localStorage)
    }
    
    mostrarTarefas()
    
}

recarregarTarefasa()
button.addEventListener('click',ativar)