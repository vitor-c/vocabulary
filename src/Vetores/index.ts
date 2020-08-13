
class ArrayText {
    public calcArray( text : string) {
        const  arrayPalavras = this.limparTexto(text )
        const resultado = arrayPalavras.map(palavra=>{       
            const quantidade = arrayPalavras.filter(item=> item === palavra )     
            return quantidade.length
          })     
        return resultado
    }

    public listaPalavras(text: string){
            const arrayPalavras = this.limparTexto(text)
            
            const resultado = arrayPalavras.filter((item , index) =>{
                return arrayPalavras.indexOf(item) === index
            } )   
        return resultado
    }

    limparTexto(text: string){
        const textoSemCaracterEspesial = text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,' ');
        const arrayDeTexto = textoSemCaracterEspesial.split(' ')   
        const arrayPalavras = arrayDeTexto.filter(item => item.length > 3)
        return arrayPalavras
    }

    listaDuasPalavras(text: string){
        const arrayPalavras = this.limparTexto(text)
        let arrayDuasPalavras = []

        for (let index = 0; index < arrayPalavras.length; index++) {
            arrayDuasPalavras[index] = `${arrayPalavras[index]} ${arrayPalavras[index+1] || ``}`  
        }
        return arrayDuasPalavras
    }
}

export default ArrayText