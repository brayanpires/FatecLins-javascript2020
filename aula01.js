function mudatexto()
{
    console.log('entrei na funcao muda texto()')
//     alert('minha funcao muda texto()')
//      como acessar um elemento de nosso html
//      classe DOCUMENT tem acesso a toda estrututa da 
//      arvore do DOM do html

   var elementoP = document.getElementById('info');
   console.log('Estrutura do elemento p',elementoP);
   elementoP.innerHTML = 'novo texto javascript JS';

   document.getElementById('infop').innerHTML = 'trocado';
   console.log('sai da funcao muda texto')
}