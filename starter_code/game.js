class Game{
    constructor(){
        this.theHero = new Hero(180, 380, 20,20),
        this.obstacleArray = []
    }

    spawnObstacle(){
        let rX = Math.floor(Math.random() * 200);
        let rY = Math.floor(Math.random() * 200);
        let rWidth = Math.floor(Math.random() * 50) + 10;
        let rHeight = Math.floor(Math.random() * 50) + 10;
        let newObstacle = new Obstacle(rX, rY, rWidth, rHeight);
        this.obstacleArray.push(newObstacle);
        newObstacle.moveDownForever();
    }

    clearUnusedObstacles(){
        this.obstacleArray.forEach((ob, i)=>{
            if(ob.y > 400){
                this.obstacleArray.splice(i, 1)
            }
        })
    }


    collisionDetect(futureX, futureY){
        let canMove = true;

        this.obstacleArray.forEach((obs)=>{

            console.log(futureX, futureY, this.theHero.width, this.theHero.height, obs.x, obs.y, obs.width, obs.height)

           
        if(futureX + this.theHero.width >= obs.x && futureX <= obs.x + obs.width 
            && futureY + this.theHero.height >= obs.y && futureY <= obs.y + obs.height){
                canMove = false;
             }
        })
       
        return canMove;
    }
}

