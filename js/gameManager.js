class gameManager{

    gameOver = false;
    score = 1530;
    level = 0;
    lines = 0;
    music = 1;
    pause = false;
    scene = 1;
    mode = 0;

    

    topScore = [
        {score: null,name: null},
        {score: null,name: null},
        {score: null,name: null}
    ];

    constructor(){


        fetch('http://localhost/tetris/api/',{
            method: 'GET', // or 'PUT'
            headers:{
              'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(commits => { 
            this.topScore =  commits
            console.log(this.topScore);
            var score = new setScoreScene("game");
        
        });

         

    }


}