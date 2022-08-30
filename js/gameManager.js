class gameManager{

    gameOver = false;
    score = 99999;
    level = 0;
    lines = 0;
    music = 1;
    pause = false;
    scene = 1;
    mode = 0;

    
    topScore = {
        first:{
            score: 1000,
            name: "YO"
        },
        second:{
            score: 500,
            name: "TU"
        },
        third:{
            score: 100,
            name: "EL" 
        }
    }
    

    constructor(){


    }


}


var game_Manager = new gameManager();