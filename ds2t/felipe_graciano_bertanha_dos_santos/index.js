'use strict'

import {contatos} from './contatos.js'

const criarContato = ( contato ) => {
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
    campoContato2.append(nomeContato,descricaoContato)

    return campoContato
}

const carregarContatos = () => {
    const container = document.getElementById('navegar__contatos')
    const campos = contatos.map(criarContato)

    container.replaceChildren(...campos)
}

carregarContatos()