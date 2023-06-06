document.addEventListener("DOMContentLoaded", () => {

    let btn = document.getElementById("btn");
    let box1 = document.getElementById("box1")
    let box2 = document.getElementById("box2")
    let box3 = document.getElementById("box3")
    let box4 = document.getElementById("box4")
    let box5 = document.getElementById("box5")
    let box6 = document.getElementById("box6")
    let box7 = document.getElementById("box7")
    let box8 = document.getElementById("box8")
    let box9 = document.getElementById("box9")
    let box0 = document.getElementById("box0")
  
    btn.addEventListener("click", e => {
      let N = parseInt(document.getElementById("n").value);
      let lista = []
      for (let i = 0; i < N; i++){
        let j = Math.floor(Math.random()*10)
        lista.push(j) 
    }
    console.log(lista)
    let a1 = lista.filter(x => x==1).length
    let a2 = lista.filter(x => x==2).length
    let a3 = lista.filter(x => x==3).length
    let a4 = lista.filter(x => x==4).length
    let a5 = lista.filter(x => x==5).length
    let a6 = lista.filter(x => x==6).length
    let a7 = lista.filter(x => x==7).length
    let a8 = lista.filter(x => x==8).length
    let a9 = lista.filter(x => x==9).length
    let a0 = lista.filter(x => x==0).length

    box0.innerHTML = a0
    box1.innerHTML = a1
    box2.innerHTML = a2
    box3.innerHTML = a3
    box4.innerHTML = a4
    box5.innerHTML = a5
    box6.innerHTML = a6
    box7.innerHTML = a7
    box8.innerHTML = a8
    box9.innerHTML = a9


    box0.style.cssText = "height: " + a0 + "px;";
    box1.style.cssText = "height: " + a1 + "px;";
    box2.style.cssText = "height: " + a2 + "px;";
    box3.style.cssText = "height: " + a3 + "px;";
    box4.style.cssText = "height: " + a4 + "px;";
    box5.style.cssText = "height: " + a5 + "px;";
    box6.style.cssText = "height: " + a6 + "px;";
    box7.style.cssText = "height: " + a7 + "px;";
    box8.style.cssText = "height: " + a8 + "px;";
    box9.style.cssText = "height: " + a9 + "px;";
    });
  });
  