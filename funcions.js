
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
    // document.getElementById("broma").innerHTML=data.value
  });

  
})
