'use strict'

export const getContatosUser = async (numero) => {
    const url = `http://localhost:8080/senai/v1/whatsapp/numero/${numero}`
    const response = await fetch(url)
    const data = await response.json()

    return data
    
}