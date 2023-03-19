'use strict'

import { contatos } from './contatos.js'

const criarContato = (contato) => {


    const campoContato = document.createElement('div')
    campoContato.classList.add('campoContato')

    const fotoContato = document.createElement('img')
    fotoContato.classList.add('contato__image')
    fotoContato.src = `./${contato.image}`

    const campoContato2 = document.createElement('div')

    const nomeContato = document.createElement('h1')
    nomeContato.classList.add('contato__name')
    nomeContato.textContent = contato.name

    const descricaoContato = document.createElement('p')
    descricaoContato.classList.add('contato__description')
    descricaoContato.textContent = contato.description


    campoContato.append(fotoContato, campoContato2)
    campoContato2.append(nomeContato, descricaoContato)

    campoContato.addEventListener('click', () => {
        const conversa = document.getElementById('right__side')
        conversa.replaceChild(carregarConversa(getIndex(contato, contatos)))

        console.log(contato)

    })

    return campoContato
}

const carregarContatos = () => {
    const container = document.getElementById('navegar__contatos')
    const campos = contatos.map(criarContato)

    container.replaceChildren(...campos)
}

const criarHeaderConversa = (contato2Actvity) => {

    const container = document.createElement('div')
    container.classList.add('informacoes__contato__foto')

    const foto = document.createElement('img')
    foto.src = `./${contato2Actvity.image}`

    const container2 = document.createElement('div')
    container2.classList.add('informacoes__contato__nome__e__descricao')

    const nome = document.createElement('h1')
    nome.textContent = contato2Actvity.name

    const descricao = document.createElement('p')
    descricao.textContent = contato2Actvity.description

    container.append(foto, container2)
    container2.append(nome, descricao)

    console.log(contato2Actvity)

    return container

}



const carregarMensagens = (contato3Activity) => {

    const caixaDaMensagem = document.createElement('container')
    caixaDaMensagem.classList.add('caixaMensagensDoContato')

    console.log(contato3Activity)

    contato3Activity.messages.forEach(function (message) {
        if (message.sender == 'me') {

            console.log(message.sender)

            const mensagemDoContato = document.createElement('div')
            mensagemDoContato.classList.add('my__message')

            const textoDaMensagem = document.createElement('text')
            textoDaMensagem.textContent = contato3Activity.content

            const horaDaMensagem = document.createElement('p')
            horaDaMensagem.classList.add('time')
            horaDaMensagem.textContent = contato3Activity.time

            mensagemDoContato.append(textoDaMensagem, horaDaMensagem)
            caixaDaMensagem.append(mensagemDoContato)

        } else {

            const mensagemDoContato = document.createElement('div')
            mensagemDoContato.classList.add('contact__message')

            const textoDaMensagem = document.createElement('text')
            textoDaMensagem.textContent = contato3Activity.content

            const horaDaMensagem = document.createElement('p')
            horaDaMensagem.classList.add('time')
            horaDaMensagem.textContent = contato3Activity.time

            mensagemDoContato.append(textoDaMensagem, horaDaMensagem)
            caixaDaMensagem.append(mensagemDoContato)

        }
    })

    return caixaDaMensagem


}

const getIndex = (contatoSelecionado, lista) => {
    return lista.indexOf(contatoSelecionado)
}

const carregarConversa = (indice) =>{
    const containerChat = document.getElementById('conversas')

    containerChat.replaceChildren(criarHeaderConversa(contatos[indice]), carregarMensagens(contatos[indice]))
}



carregarContatos()