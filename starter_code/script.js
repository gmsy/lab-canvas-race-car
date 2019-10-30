const ctx = document.getElementById('example').getContext('2d');  

class Hero{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }  
}
Hero.prototype.move = moveHero;





function drawSelf(u, obs){
    if(obs){
        ctx.fillStyle = 'tomato'
    } else{
        ctx.fillStyle = 'black' 
    }
    ctx.fillRect(u.x, u.y, u.width, u.height)
}

let frames = 0;

function mainLoop(){
    frames++;

    ctx.clearRect(0,0,400,400);

    // this is where we draw the hero
    drawSelf(theGame.theHero, false);
    // then we draw all the obstacles
    theGame.obstacleArray.forEach((eachObstacle)=>{
        drawSelf(eachObstacle, true)
    })

    if(frames % 100 === 0){
        theGame.spawnObstacle()
    }


    requestAnimationFrame(mainLoop);
}



function moveHero(futureX, futureY){

    if(futureX + this.width <= 400 && futureX >= 0 && futureY + this.height <= 400 && futureY >= 0){
        this.x = futureX;
        this.y = futureY;
    }
    // if(futureX + hero.width >= 400){

    //     hero.x = futureX

    //     setTimeout(()=>{
    //         hero.x -= 30;
    //         hero.width = 35;
    //         hero.height = 35;
    //     },100)
        

    //     setTimeout(()=>{
    //         hero.width = 20;
    //         hero.height = 20;
    //     },200)
    // }
}

let speed = 15;


document.onkeydown = function(e){

 

    if(e.key === "ArrowUp"){
        if(
            theGame.collisionDetect(theGame.theHero.x, theGame.theHero.y -speed)
        ){
            theGame.theHero.move(theGame.theHero.x, theGame.theHero.y -speed)
        }

    }
    if(e.key === "ArrowDown"){
        if(
            theGame.collisionDetect(theGame.theHero.x, theGame.theHero.y +speed)
        ){
            theGame.theHero.move(theGame.theHero.x, theGame.theHero.y +speed)
        }
       
    }
    if(e.key === "ArrowLeft"){
        if(
            theGame.collisionDetect(theGame.theHero.x - speed, theGame.theHero.y)
        ){
            theGame.theHero.move(theGame.theHero.x - speed, theGame.theHero.y)
        }
    }
    if(e.key === "ArrowRight"){
        if(
            theGame.collisionDetect(theGame.theHero.x + speed, theGame.theHero.y)
        ){
            theGame.theHero.move(theGame.theHero.x + speed, theGame.theHero.y)
        }
    }
}
   










class Obstacle{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveDownForever(){
       let blah = setInterval(()=>{
        //    each setInterval function gets a unique ID
        // were using blah here to save this ID
            this.y += 10;

            if(this.y > 400){
                clearInterval(blah)
            }

        },100)


    }

}

document.getElementById('start').onclick = startGame;


let theGame;

function startGame(){    
     theGame = new Game();
    mainLoop();
}