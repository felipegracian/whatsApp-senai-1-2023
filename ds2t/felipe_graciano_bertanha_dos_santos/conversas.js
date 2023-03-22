const carregarMensagens = (contatoMainActivity) => {

    const container = document.createElement('container')
    container.classList.add('caixaDeMensagens')

    

    contatoMainActivity.messages.forEach(function (message) {
        if (message.sender == 'me') {

            console.log(contatoMainActivity)

            const caixaDaMensagem = document.createElement('div')
            caixaDaMensagem.classList.add('caixaMensagensDoContato')

            console.log(message.sender)

            const mensagemDoContato = document.createElement('div')
            mensagemDoContato.classList.add('my__message')

            const textoDaMensagem = document.createElement('text')
            textoDaMensagem.textContent = contatoMainActivity.content

            const horaDaMensagem = document.createElement('p')
            horaDaMensagem.classList.add('time')
            horaDaMensagem.textContent = contatoMainActivity.time

            mensagemDoContato.append(textoDaMensagem, horaDaMensagem)
            caixaDaMensagem.append(mensagemDoContato)
            container.append(caixaDaMensagem)

        } else {

            console.log(contatoMainActivity)

            const caixaDaMensagem = document.createElement('container')
            caixaDaMensagem.classList.add('caixaMensagensDoContato')

            const mensagemDoContato = document.createElement('div')
            mensagemDoContato.classList.add('contact__message')

            const textoDaMensagem = document.createElement('text')
            textoDaMensagem.textContent = contatoMainActivity.content

            const horaDaMensagem = document.createElement('p')
            horaDaMensagem.classList.add('time')
            horaDaMensagem.textContent = contatoMainActivity.time

            mensagemDoContato.append(textoDaMensagem, horaDaMensagem)
            caixaDaMensagem.append(mensagemDoContato)
            container.append(caixaDaMensagem)

        }
    })

    return container


}