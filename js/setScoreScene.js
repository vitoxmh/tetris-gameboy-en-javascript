class setScoreScene extends scoreScene{

    dropInterval = 1000;
    lastTime = 0;
    dropCounter = 0;
    count = 0;
    countLetter = 0;
    posLetter = 0;
    name = [];
    setLetter = "";

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



        console.log("ffddffd")
        this.setType();
        this.changeLetter();
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



    rederScore(){

        game_Manager.score;

        const firstPlace      = game_Manager.topScore.first;
        const secondPlace     = game_Manager.topScore.second;
        const thirdPlace      = game_Manager.topScore.third;


        this.sprite.rederScore(firstPlace.score,firstPlace.name,{x:168,y:526},{x:700,y:535}); 
        this.sprite.rederScore(secondPlace.score,secondPlace.name,{x:168,y:566},{x:700,y:566});
        this.sprite.rederScore(thirdPlace.score,thirdPlace.name,{x:168,y:606},{x:700,y:606});


    }



    writeScore(){

       
        if(this.count % 2 == 0){

            this.sprite.renderSpriteColor(168,526,this.sprite.get(this.letter[this.countLetter].toString()),1);
            

        }else{

            //this.sprite.renderSpriteColor(168,526,this.sprite.get(this.letter[this.countLetter].toString()),3);
            this.ctx.fillStyle = this.sprite.color[3];
            this.ctx.fillRect(168,526,40,40);  
           

        }


    }



    update(time = 0){

        const deltaTime =  time - this.lastTime;

        this.lastTime = time;
        this.dropCounter += deltaTime; 
 
      
        if(this.dropCounter > 200 ){
         
            this.dropCounter=0;
          
            this.writeScore();
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

                
                this.name[this.posLetter] = this.letter[this.countLetter];
                this.posLetter++;

    
            }


        });




    }


}