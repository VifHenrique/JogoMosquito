
let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

let tempoAparecer = 1500

let nivel =  window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
	tempoAparecer = 1500
}else if(nivel === 'dificil'){
	tempoAparecer = 1000
}else if(nivel === 'hard'){
	tempoAparecer = 750
}

//Tamanho do mosquito 
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
	
	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
        
	}else{
       document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000);

//Posição do Mosquito, gerar o mosquito
function posicaoRandomica() {
    
	//Remover mosquito anterior (caso exista )
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove( )
        //console.log('v' + vidas)
		if(vidas > 3){
		  
              window.location.href = 'jogo_2.html'
		}else{
			document.getElementById('v' + vidas).src = "coracao_vazio.png"    
		}
		vidas ++
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	let mosquito = document.createElement('img')
	mosquito.src = 'mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)
	
	tamanhoAleatorio()
}

//Gerar um tamanho do mosquito 
function tamanhoAleatorio(){
	let classe = Math.floor(Math.random() * 3)
	
	switch(classe){
		case 0:
	      return 'mosquito1'
        case 1:
          return 'mosquito2'
        case 2:
		  return 'mosquito3'
	}
}
//Lado aleatorio do mosquito 
function ladoAleatorio(){
	let geraLado = Math.floor(Math.random() * 2)
	switch(geraLado){
		case 0:
	      return 'lado_A'
        case 1:
          return 'labo_B'
        
	}
}

