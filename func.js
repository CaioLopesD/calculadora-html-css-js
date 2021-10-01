let foi_feito_conta=false
function preenche_valor(numero)
{
    let valor=document.getElementById('btn')
    let resultado=document.getElementById('resultado')
    if(foi_feito_conta)
    {
        foi_feito_conta=false
        resultado.innerText=''
    }
    
    resultado.innerText=resultado.innerText+numero
    //console.log(valor.value)
   // alert('to preenchendo valor')

}
function realiza_conta(numer,op)
{
    let num1=parseInt(numer[0])
    let num2=parseInt(numer[1])
    if(op==='+')
        return num1+num2
    if(op==='-')
        return num1-num2
        if(op==='*')
        return num1*num2
        if(op==='/')
        return (num1/num2).toFixed(2)
}
function conta()
{
    let texto=document.getElementById('resultado').innerText
   
    let soma=texto.includes('+')
    let sub=texto.includes('-')
    let div=texto.includes('/')
    let mult=texto.includes('x')
    
    let numeros
    let resultado=document.getElementById('resultado')
    if(soma)
    {
        numeros=texto.split('+')
        resultado.innerText=realiza_conta(numeros,'+')
    }else if(sub)
    {
        numeros=texto.split('-')
        resultado.innerText=realiza_conta(numeros,'-')
    }else if(mult)
    {
        numeros=texto.split('x')
        resultado.innerText=realiza_conta(numeros,'*')
    }else if (div) 
    {
        numeros=texto.split('/')
        resultado.innerText=realiza_conta(numeros,'/')
    }
    
    
    
    console.log(numeros)
    //resultado.innerText=resultado.innerText+''
    //  resultado.innerText=parseInt(numeros[0])+parseInt(numeros[1])
    foi_feito_conta=true
    //alert("to fazendo conta")
}