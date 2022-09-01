class setScoreScene extends scoreScene{

    dropInterval = 1000;
    lastTime = 0;
    dropCounter = 0;
    count = 0;
    countLetter = 0;
    posLetter = 0;
    name = [];
    positionNull = null;
    setLetter = "";
    endWriteScore = false;
    nextStep = 0;
    postLetter = [
        {x: 168,y: 526},
        {x: 168,y: 566},
        {x: 168,y: 606}
    ];

    letter = [  "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z"];


    constructor(ctx){
        
        
        super(ctx);
        this.changeLetter();

    
    }


    init(){
        this.positionNull = null;
        this.endWriteScore = false;
        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(0,0,1200,1200);
        
        this.renderBackground();
        this.setType();
        
       
       

        game_Manager.topScore.push({name:null,score:game_Manager.score});

        game_Manager.topScore.sort(function (a, b) {
	
            if (a.score > b.score) {
                
              return -1;
              
            }
            
            if (a.score < b.score) {
              return 1;
            }

            return 0;
          });

          
          game_Manager.topScore.map((value,key) => {

            if(value.name == null && value.score != null && key < 3){

                this.positionNull = key;
             
            }

          });

          m.play("HighScores");

        this.selectLevel(); 
        this.renderScore();
        this.update();


    }



    setType(){


        if(game_Manager.mode == 0){

            this.sprite.renderSprite(85,45,this.sprite.get("A"));

        }else{

            this.sprite.renderSprite(85,45,this.sprite.get("B"));
        }
    

        this.ctx.fillStyle = this.sprite.color[1];
        this.ctx.fillRect(130,55,20,10);

        this.sprite.renderSprite(165,45,this.sprite.get("T"));
        this.sprite.renderSprite(205,45,this.sprite.get("Y"));
        this.sprite.renderSprite(245,45,this.sprite.get("P"));
        this.sprite.renderSprite(285,45,this.sprite.get("E"));
 

       
    }


    renderScore(){

        const firstPlace      = game_Manager.topScore[0];
        const secondPlace     = game_Manager.topScore[1];
        const thirdPlace      = game_Manager.topScore[2];

        this.sprite.rederScore(firstPlace.score,firstPlace.name,{x:168,y:526},{x:700,y:535}); 
        this.sprite.rederScore(secondPlace.score,secondPlace.name,{x:168,y:566},{x:700,y:566});
        this.sprite.rederScore(thirdPlace.score,thirdPlace.name,{x:168,y:606},{x:700,y:606});
          
        
    }



    writeScore(){

        
 
        if(this.positionNull != null){

            var dx =  this.postLetter[this.positionNull].x + (40*this.posLetter);
            var dy =  this.postLetter[this.positionNull].y;


            if(this.count % 2 == 0){

                this.sprite.renderSpriteColor(dx,dy,this.sprite.get(this.letter[this.countLetter].toString()),1);
                

            }else{

                this.ctx.fillStyle = this.sprite.color[3];
                this.ctx.fillRect(dx,dy,40,40);  
            
            }

           
        
        }else if(!this.endWriteScore){

            this.endWriteScore = true;
            this.postScore();
            m.playId(game_Manager.music);

        }


    }



    update(time = 0){

        const deltaTime =  time - this.lastTime;

        this.lastTime = time;
        this.dropCounter += deltaTime; 
 
      
        if(this.dropCounter > 150 ){
         
        
            if(!this.endWriteScore){
                this.writeScore();
            }else{
                this.updateSelector();
            }
           
            this.dropCounter = 0;
            this.count++;
            
        }

        requestAnimationFrame(this.update.bind(this));  

    
    }



    changeLetter(){


        document.addEventListener("keydown", e => {

       

            if(e.keyCode === 38 && game_Manager.scene == 5){

              
                if(this.countLetter < (this.letter.length-1)){

                  
                    this.countLetter++;


                }else{

                    this.countLetter = 0;

                }
                s.play("menu_sound");
              
            }else if(e.keyCode === 40 && game_Manager.scene == 5){

                this.countLetter--;


                if(this.countLetter < 0){

                  
                    this.countLetter = this.letter.length-1;

                }else{

                    this.countLetter--;

                }

                s.play("menu_sound");

            }else if(e.keyCode === 65 && !this.endWriteScore && game_Manager.scene == 5){


                if(this.posLetter < 4){

                    this.name[this.posLetter] = this.letter[this.countLetter];

                    var dx =  this.postLetter[this.positionNull].x + (40*this.posLetter);
                    var dy =  this.postLetter[this.positionNull].y;
                    this.sprite.renderSpriteColor(dx,dy,this.sprite.get(this.letter[this.countLetter].toString()),1);

                    this.countLetter = 0;
                    this.posLetter++;


                }else{


                    this.name[this.posLetter] = this.letter[this.countLetter];

                    var dx =  this.postLetter[this.positionNull].x + (40*this.posLetter);
                    var dy =  this.postLetter[this.positionNull].y;
                    this.sprite.renderSpriteColor(dx,dy,this.sprite.get(this.letter[this.countLetter].toString()),1);
                    this.endWriteScore = true;
                    this.postScore();
                    m.stop();
                  
             
                }
                
                s.play("menu_sound");

            }else if(e.keyCode === 13 && !this.endWriteScore){

                if(this.positionNull != null){

                    this.name[this.posLetter] = this.letter[this.countLetter];
                    var dx =  this.postLetter[this.positionNull].x + (40*this.posLetter);
                    var dy =  this.postLetter[this.positionNull].y;
                    this.sprite.renderSpriteColor(dx,dy,this.sprite.get(this.letter[this.countLetter].toString()),1);
                    this.postScore();
                    this.nextStep++;
                    this.endWriteScore = true;
                    console.log("aaaaa");
                    m.playId(game_Manager.music);

                }
              

                



            }else if(game_Manager.scene == 5 && this.endWriteScore && e.keyCode === 13){
                console.log(this.nextStep+"<===")
               game_Manager.scene = 4;
                game_Manager.score = 0;
                game_Manager.tetris.background();
                game_Manager.tetris.playerReset();
                game_Manager.tetris.clearGameOver = 0;

                game_Manager.tetris.clearGameOver = 0;
                game_Manager.tetris.posOver.statusPlay = 0;
                game_Manager.tetris.posOver.y = 18;
                game_Manager.gameOver = false;
               
                game_Manager.tetris.update();


    

            }




            if(game_Manager.level == 0 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 40){
                    // Down

                    game_Manager.level = 5;
                    s.play("menu_sound");

                }else if(e.keyCode === 39){
                    // Rigth

                    game_Manager.level = 1;
                    s.play("menu_sound");


                }

            }else if(game_Manager.level == 1 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 40){
                    // Down

                    game_Manager.level = 6;
                    s.play("menu_sound");

                }else if(e.keyCode === 39){
                    // Rigth
                    
                    game_Manager.level = 2;
                    s.play("menu_sound");

                }else if(e.keyCode === 37){
                    // LEFT
                    game_Manager.level = 0;
                    s.play("menu_sound");

                }


            }else if(game_Manager.level == 2 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 40){
                    // Down

                    game_Manager.level = 7;
                    s.play("menu_sound");

                }else if(e.keyCode === 39){
                    // Rigth
                    
                    game_Manager.level = 3;
                    s.play("menu_sound");

                }else if(e.keyCode === 37){
                    // LEFT
                    game_Manager.level = 1;
                    s.play("menu_sound");

                }

            }else if(game_Manager.level == 3 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 40){
                    // Down

                    game_Manager.level = 8;
                    s.play("menu_sound");

                }else if(e.keyCode === 39){
                    // Rigth
                    
                    game_Manager.level = 4;
                    s.play("menu_sound");

                }else if(e.keyCode === 37){
                    // LEFT
                    game_Manager.level = 2;
                    s.play("menu_sound");

                }

            }else if(game_Manager.level == 4 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 40){
                    // Down

                    game_Manager.level = 9;
                    s.play("menu_sound");

                }else if(e.keyCode === 37){
                    // LEFT
                    game_Manager.level = 3;
                    s.play("menu_sound");

                }

            }else if(game_Manager.level == 5 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 38){
                    // UP

                    game_Manager.level = 0;
                    s.play("menu_sound");

                }else if(e.keyCode === 39){
                    // LEFT
                    game_Manager.level = 6;
                    s.play("menu_sound");

                }

            }else if(game_Manager.level == 6 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 38){
                    // UP

                    game_Manager.level = 1;
                    s.play("menu_sound");

                }else if(e.keyCode === 39){
                    // Rigth
                    
                    game_Manager.level = 7;
                    s.play("menu_sound");

                }else if(e.keyCode === 37){
                    // LEFT
                    game_Manager.level = 5;
                    s.play("menu_sound");

                }

            }else if(game_Manager.level == 7 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 38){
                    // UP

                    game_Manager.level = 2;
                    s.play("menu_sound");

                }else if(e.keyCode === 39){
                    // Rigth
                    
                    game_Manager.level = 8;
                    s.play("menu_sound");

                }else if(e.keyCode === 37){
                    // LEFT
                    game_Manager.level = 6;
                    s.play("menu_sound");

                }

            }else if(game_Manager.level == 8 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 38){
                    // UP

                    game_Manager.level = 3;
                    s.play("menu_sound");

                }else if(e.keyCode === 39){
                    // Rigth
                    
                    game_Manager.level = 9;
                    s.play("menu_sound");

                }else if(e.keyCode === 37){
                    // LEFT
                    game_Manager.level = 7;
                    s.play("menu_sound");

                }

            }else if(game_Manager.level == 9 && game_Manager.scene == 5 && this.endWriteScore){


                if(e.keyCode === 38){
                    // UP

                    game_Manager.level = 4;
                    s.play("menu_sound");

                }else if(e.keyCode === 37){
                    // LEFT
                    game_Manager.level = 8;
                    s.play("menu_sound");

                }

            }




            

            this.selectLevel();

        });


    }



    postScore(){

        var name = "";

        this.name.map((a,b) =>{

            name += a;

        });

        var data = {name:name, score: game_Manager.score, level: game_Manager.level, mode: game_Manager.mode};


        fetch('http://localhost/tetris/api/',{
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(commits => { 
      
        
        });

       
    }




    updateSelector(){

        if(game_Manager.scene == 5){

            var i = game_Manager.level;

            if(this.count % 2 == 0){
                
                this.sprite.renderSpriteColor(game_Manager.posLevel[i][0],game_Manager.posLevel[i][1],this.sprite.get(""+i+""),1);

            }else{
                
                this.sprite.renderSpriteColor(game_Manager.posLevel[i][0],game_Manager.posLevel[i][1],this.sprite.get(""+i+""),4);

            }
        }

    }



    selectLevel(){

        if(game_Manager.scene == 5){

            for(var i = 0; i < game_Manager.posLevel.length; i++){

                this.sprite.renderSpriteColor(game_Manager.posLevel[i][0],game_Manager.posLevel[i][1],this.sprite.get(""+i+""),(game_Manager.level == i?1:4));

            }
        }


    }




   


}