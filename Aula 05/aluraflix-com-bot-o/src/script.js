//document.querySelector - pede para selecionar o nome do filme em javaScript o #siginifica o id do html que tenha o id filme
function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if(filmeFavorito.endsWith( '.jpg')){
    listarFilmesNaTela(filmeFavorito)
  }else{
    alert("Imagem inválida")
  }  
  campoFilmeFavorito.value = ""  
}
//listar o filme na mesma tela 
function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector("#listaFilmes")
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.inerHTML + elementoFilme
}