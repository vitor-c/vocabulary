import express from 'express';
import ArrayText from './Vetores/index'

const app = express()
app.use(express.json())

const arrayText = new ArrayText

app.post('/vocabulario' , ( request , response)=>{
    const { text } = request.body
    const arrayPalavras = arrayText.calcArray(text)
    const lista = arrayText.listaPalavras(text)

    return response.json( {arrayPalavras , lista})
})

app.post('/vacabularioduaspalavras' , ( request , response)=>{
    const { text } = request.body
    const lista = arrayText.listaDuasPalavras(text)
    return response.json({lista})
})

app.listen(3333)