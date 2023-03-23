'use strict'


import { getContatosUser } from './contatosApi.js'
const contatos = await getContatosUser('11987876567')

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



const carregarMensagens = (contact) => {
    const container = document.createElement('div')
    container.classList.add('fundo__conversa')

    const chats = document.getElementById('caixaDeMensagens')

    contact.messages.forEach(function(message){

        if(message.sender == 'me'){
            const messages__me = document.createElement('div')
            messages__me.classList.add('caixaMinhasMensagens')

            const message__text = document.createElement('p')
            message__text.classList.add('my__message')
            message__text.textContent = message.content

            const message__time = document.createElement('p')
            message__time.classList.add('time')
            message__time.textContent = message.time

            messages__me.append(message__text,message__time)
            container.append(messages__me)


        } else{
            const messages_contact = document.createElement('div')
            messages_contact.classList.add('caixaMensagensDoContato')

            const message__text = document.createElement('p')
            message__text.classList.add('contact__message')
            message__text.textContent = message.content

            const message__time = document.createElement('p')
            message__time.classList.add('time')
            message__time.textContent = message.time

            messages_contact.append(message__text, message__time)
            container.append(messages_contact)

        }

    })

    return container
}   

const getIndex = (contatoSelecionado, lista) => {
    return lista.indexOf(contatoSelecionado)
}

const carregarConversa = (indice) => {
    const containerChat = document.getElementById('conversas')

    containerChat.replaceChildren(criarHeaderConversa(contatos[indice]), carregarMensagens(contatos[indice]))
}



carregarContatos()