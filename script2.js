function verificar (){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  var res = document.getElementById('res')
  if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var img = window.document.getElementById('imagem')
      if(fsex[0].checked) {
      gênero = 'Homem'
     if (idade >=0 && idade < 10) {
       //Criança
      img.src = 'CriançaH.png'
      gênero = 'Criança'
     }else if (idade < 18) {
       //Jovem
     img.src = 'JovemH.png'
     gênero = 'Adolescente'
     }else if (idade < 50) {
       //Adulto
      img.src = 'AdultoH.png'
      gênero = 'Adulto'
     }else {
       //idoso
       img.src = 'Idoso.png'
       gênero = 'Idoso'
     }
    }else if (fsex[1].checked) {
      gênero = 'Mulher'
    if (idade >=0 && idade < 10) {
       //Criança
      img.src = 'CriançaM.png'
      gênero = 'Criança'
     }else if (idade < 21) {
       //Jovem
       img.src = 'JovemM.png'
       gênero = 'Adolescente'
     }else if (idade < 50) {
       //Adulto
      img.src = 'AdultaM.png'
      gênero = 'Adulta'
     }else {
       //Idosa
      img.src = 'IdosaM.png'
       gênero = 'Idosa'
     }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}