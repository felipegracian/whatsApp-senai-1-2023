'use strict'

import {contatos} from './contatos.js'

const carregarMensagens = (contatoQuenao) => {

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

module.exports = {
    carregarMensagens
}