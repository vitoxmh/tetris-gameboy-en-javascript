class gameManager{

    gameOver = false;
    score = 0;   // Score General
    level = 0;      // Nivel
    lines = 0;      // Numero de Lineas
    music = 1;      // Musica actual
    pause = false;  // Pause
    scene = 1;      // Escena
    mode = 0;       // Modo
    tetris = null;
    game = null;
    sceneMode = null;
    levelSel = null;
    setScoreScene = null;


    posLevel = [
        [205,245],
        [290,245],
        [365,245],
        [445,245],
        [525,245],
        [205,325],
        [290,325],
        [365,325],
        [445,325],
        [525,325]
    ];

    
    topScore =  [
        {score: null,name: null},
        {score: null,name: null},
        {score: null,name: null}
    ];

    constructor(){

        this.game = new game("game");
        this.sceneMode = new modeScene("game");
        this.setScoreScene = new setScoreScene("game");
        this.setTopScoreRes();
        this.game.init();
        
       

    }


    setTopScoreRes(){


        fetch('http://localhost/tetris/api/?level='+this.level+'&mode='+this.mode,{
            method: 'GET', // or 'PUT'
            headers:{
              'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(commits => { 

            if(commits.length == 0){

                this.topScore =  [
                                    {score: null,name: null},
                                    {score: null,name: null},
                                    {score: null,name: null}
                                ];

            }else if(commits.length == 1){
            
                this.topScore =  commits;
                this.topScore.push({score: null,name: null});
                this.topScore.push({score: null,name: null});
                

            }else if(commits.length == 2){

                this.topScore =  commits;
                this.topScore.push({score: null,name: null});

            }else{

                this.topScore =  commits;

            }
            
            
           
        });




    }


}