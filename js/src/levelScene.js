class levelScene extends scoreScene{

    count = 0;
    dropInterval = 1000;
    lastTime = 0;
    dropCounter = 0;
    count = 0;
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



    constructor(ctx){
 
        super(ctx);
        this.renderBackground();
        this.modeType();
        this.selectLevel();
        this.move();
        this.update();
        this.setScore();
        var _self = this;
       


    }





    update(time = 0){

        const deltaTime =  time - this.lastTime;

        this.lastTime = time;
        this.dropCounter += deltaTime; 
 
      
        if(this.dropCounter > 200 ){
         
            this.dropCounter=0;

          
            this.count++;
            this.updateSelector();

         
        }

        if(game_Manager.scene == 3){

            requestAnimationFrame(this.update.bind(this));  

        }

    
    }




    modeType(){

        if(game_Manager.scene == 3){

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
       
    }


    updateSelector(){

        if(game_Manager.scene == 3){

            var i = game_Manager.level;

            if(this.count % 2 == 0){
                
                this.sprite.renderSpriteColor(game_Manager.posLevel[i][0],game_Manager.posLevel[i][1],this.sprite.get(""+i+""),1);

            }else{
                
                this.sprite.renderSpriteColor(game_Manager.posLevel[i][0],game_Manager.posLevel[i][1],this.sprite.get(""+i+""),4);

            }
        }

    }

    selectLevel(){

        if(game_Manager.scene == 3){

            for(var i = 0; i < game_Manager.posLevel.length; i++){

                this.sprite.renderSpriteColor(game_Manager.posLevel[i][0],game_Manager.posLevel[i][1],this.sprite.get(""+i+""),(game_Manager.level == i?1:4));

            }
        }


    }


    move(){

        if(game_Manager.scene == 3){

            document.addEventListener("keydown", e => {

            
                if(game_Manager.level == 0 && game_Manager.scene == 3){


                    if(e.keyCode === 40){
                        // Down

                        game_Manager.level = 5;
                        s.play("menu_sound");

                    }else if(e.keyCode === 39){
                        // Rigth

                        game_Manager.level = 1;
                        s.play("menu_sound");


                    }

                }else if(game_Manager.level == 1 && game_Manager.scene == 3){


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



                

                }else if(game_Manager.level == 2 && game_Manager.scene == 3){


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

                }else if(game_Manager.level == 3 && game_Manager.scene == 3){


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

                }else if(game_Manager.level == 4 && game_Manager.scene == 3){


                    if(e.keyCode === 40){
                        // Down

                        game_Manager.level = 9;
                        s.play("menu_sound");

                    }else if(e.keyCode === 37){
                        // LEFT
                        game_Manager.level = 3;
                        s.play("menu_sound");

                    }

                }else if(game_Manager.level == 5 && game_Manager.scene == 3){


                    if(e.keyCode === 38){
                        // UP

                        game_Manager.level = 0;
                        s.play("menu_sound");

                    }else if(e.keyCode === 39){
                        // LEFT
                        game_Manager.level = 6;
                        s.play("menu_sound");

                    }

                }else if(game_Manager.level == 6 && game_Manager.scene == 3){


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

                }else if(game_Manager.level == 7 && game_Manager.scene == 3){


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

                }else if(game_Manager.level == 8 && game_Manager.scene == 3){


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

                }else if(game_Manager.level == 9 && game_Manager.scene == 3){


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

                
                if(e.keyCode === 13 && game_Manager.scene == 3){

                    game_Manager.scene = 4;

                    game_Manager.tetris = new tetris("game");
                   
    

                }

                this.selectLevel();

            });

        }
    }



    setScore(){

        const firstPlace      = game_Manager.topScore[0];
        const secondPlace     = game_Manager.topScore[1];
        const thirdPlace      = game_Manager.topScore[2];

        this.sprite.rederScore(firstPlace.score,firstPlace.name,{x:168,y:526},{x:700,y:535}); 
        this.sprite.rederScore(secondPlace.score,secondPlace.name,{x:168,y:566},{x:700,y:566});
        this.sprite.rederScore(thirdPlace.score,thirdPlace.name,{x:168,y:606},{x:700,y:606});


        
    }


    


}