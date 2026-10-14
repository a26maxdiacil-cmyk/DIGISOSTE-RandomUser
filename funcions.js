
document.getElementById("novaBroma").addEventListener("click",function(){

    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("broma").innerHTML=data.value
  });

  
})
document.getElementById("btnUsuari").addEventListener("click",function(){

    fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("txtNom").innerHTML=data.results[0].name.first
    document.getElementById("txtCognom").innerHTML=data.results[0].name.last
    document.getElementById("imgUsuari").src=data.results[0].picture.large

  });

  
})
