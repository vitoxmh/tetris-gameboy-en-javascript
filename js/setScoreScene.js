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

        //m.play("HighScores");


        this.setType();
        this.changeLetter();
       
       

        game_Manager.topScore.push({score:game_Manager.score,name:null});

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

            if(value.name == null){

                this.positionNull = key;
                console.log(value)
         

            }

          });



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
        
        }


    }



    update(time = 0){

        const deltaTime =  time - this.lastTime;

        this.lastTime = time;
        this.dropCounter += deltaTime; 
 
      
        if(this.dropCounter > 300 ){
         
        
            if(!this.endWriteScore){
                this.writeScore();
            }
            
            this.dropCounter = 0;
            this.count++;
            
        }

        requestAnimationFrame(this.update.bind(this));  

    
    }



    changeLetter(){


        document.addEventListener("keydown", e => {

            console.log(e.keyCode)

            if(e.keyCode === 38){

              
                if(this.countLetter < (this.letter.length-1)){

                  
                    this.countLetter++;

                }else{

                    this.countLetter = 0;

                }
                
              
            }else if(e.keyCode === 40){

                this.countLetter--;


                if(this.countLetter < 0){

                  
                    this.countLetter = this.letter.length-1;

                }else{

                    this.countLetter--;

                }

            }else if(e.keyCode === 65){


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

                }
                

              
                
            }else if(e.keyCode === 13){


       

              this.postScore();



            }


        });


    }



    postScore(){

        var name = "";

        this.name.map((a,b) =>{

            name += a;

        });

        var data = {name:name, score: game_Manager.score};


        fetch('http://localhost/tetris/api/',{
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(commits => { 
      
        
        });

       
    }


}