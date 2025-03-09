let game = false;
let userseq = [];
let gameseq = [];
let color = ["red", "green", "blue", "yellow"];
let level = 0;
let body = document.querySelector('body');
let p = document.querySelector('p');
let allbtn = document.querySelectorAll(".btn");
body.addEventListener("keypress", ()=>{
    if(game == false){
        game = true;
        levelup();

    }
})
function levelup(){
    userseq = [];
    level++;
    p.innerText = `level  ${level}`;
    let rdm = Math.floor(Math.random()*4);
    let btn = (color[rdm]);
    let bts = document.querySelector(`#${btn}`);
    gameseq.push(btn);
    console.log(gameseq);
    btnflash(bts);
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 500);

}
for (btnns of allbtn){
    btnns.addEventListener("click", userclc)
}
function userclc(){
  let btn = this;
  btnflash(btn);
  let clr = btn.getAttribute("id");
  userseq.push(clr);
  console.log(userseq);
  checkans(userseq.length-1);
}
function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
        setTimeout(levelup, 1000);
        }
      }else{
        p.innerHTML = `wrong guess !<b>your score was ${level}</b><br> press any ket to start again`;
        level =0;
        game = false;
        gameseq = [];
        userseq = [];
      }
}
