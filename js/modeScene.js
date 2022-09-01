class modeScene{

    ctx = null;
    sprite = null;
    cavas = null;
    dropInterval = 1000;
    lastTime = 0;
    dropCounter = 0;
    configMode = 0;
    music = 1;
    count = 0;
    countModeMusic = 0;
    modeType = true;
    typeMusic = false;


    constructor(canvas){

    
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.sprite = new sprite(this.ctx);
        this.configMode = 0;

            
    }



    init(){

        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(0,0,900,600);  
        m.stop(); 
        m.play("typea");
        this.renderBackground();
       
        this.move();
        this.update();
        this.selectMode();
        this.selectMusic();


    }



    renderBackground(){

        this.ctx.fillStyle = this.sprite.color[0];
        this.ctx.fillRect(8,11,780,700); 
        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(18,21,760,680);
      

        this.ctx.fillStyle = this.sprite.color[4];
        this.ctx.fillRect(28,31,741,660);



       

        for(var x = 0; x <= 18; x++){

            for(var y = 0; y <= 16; y++){

                var dx = ((x*40)+28);
                var dy = ((y*40)+31);
                this.sprite.renderSprite(dx,dy,this.sprite.get("bg_dot"));


            }

        }
        

     

        this.sprite.renderSprite(182,107,this.sprite.get("bg_text_top"));

        this.sprite.renderSprite(205,127,this.sprite.get("G"));
        this.sprite.renderSprite(245,127,this.sprite.get("A"));
        this.sprite.renderSprite(285,127,this.sprite.get("M"));
        this.sprite.renderSprite(325,127,this.sprite.get("E"));

        this.sprite.renderSprite(405,127,this.sprite.get("T"));
        this.sprite.renderSprite(445,127,this.sprite.get("Y"));
        this.sprite.renderSprite(485,127,this.sprite.get("P"));
        this.sprite.renderSprite(525,127,this.sprite.get("E")); 



        this.sprite.renderSprite(185,387,this.sprite.get("bg_text_music"));
        this.sprite.renderSprite(205,407,this.sprite.get("M"));
        this.sprite.renderSprite(245,407,this.sprite.get("U"));
        this.sprite.renderSprite(285,407,this.sprite.get("S"));
        this.sprite.renderSprite(330,407,this.sprite.get("I"));
        this.sprite.renderSprite(365,407,this.sprite.get("C"));

        this.sprite.renderSprite(445,407,this.sprite.get("T"));
        this.sprite.renderSprite(485,407,this.sprite.get("Y"));
        this.sprite.renderSprite(525,407,this.sprite.get("P"));
        this.sprite.renderSprite(565,407,this.sprite.get("E"));



        this.ctx.fillStyle = this.sprite.color[1];
        this.ctx.fillRect(95,192,610,60);
        this.ctx.fillRect(95,472,610,140);
        
        
        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(100,197,300,50);
        this.ctx.fillRect(405,197,295,50);
        this.ctx.fillRect(100,477,300,50);
        this.ctx.fillRect(100,557,300,50);
        this.ctx.fillRect(405,477,295,50);
        this.ctx.fillRect(405,557,295,50);
        this.ctx.fillRect(20,690,758,10);
        this.ctx.fillRect(770,30,8,661);



        this.ctx.fillStyle = this.sprite.color[2];
        this.ctx.fillRect(100,532,600,20);
        
    }


    update(time = 0){

        const deltaTime =  time - this.lastTime;

        this.lastTime = time;
        this.dropCounter += deltaTime; 
 
      
        if(this.dropCounter > 200 ){
         
            this.dropCounter=0;
            if(game_Manager.scene == 2){

                
                this.selectMode();
                this.selectMusic();
                this.count++;

            }

         
        }


        requestAnimationFrame(this.update.bind(this));  

    }


    animationModeGame(){






    }


    selectMusic(){

                var color = {
                    a: 1,
                    b: 4,
                    c: 4,
                    d: 4
                };


                if(this.music == 2){

                    color.a = 4;
                    color.b = 1;
                    color.c = 4;
                    color.d = 4;

                }else if(this.music == 3){

                    color.a = 4;
                    color.b = 4;
                    color.c = 1;
                    color.d = 4;

                }else if(this.music == 4){

                    color.a = 4;
                    color.b = 4;
                    color.c = 4;
                    color.d = 1;

                }


                this.sprite.renderSpriteColor(125,487,this.sprite.get("A"),color.a);
                this.sprite.renderSpriteColor(205,487,this.sprite.get("T"),color.a);
                this.sprite.renderSpriteColor(245,487,this.sprite.get("Y"),color.a);
                this.sprite.renderSpriteColor(285,487,this.sprite.get("P"),color.a);
                this.sprite.renderSpriteColor(325,487,this.sprite.get("E"),color.a);
                this.ctx.fillStyle = this.sprite.color[color.a];
                this.ctx.fillRect(170,497,20,10);

                this.sprite.renderSpriteColor(435,487,this.sprite.get("B"),color.b);
                this.sprite.renderSpriteColor(525,487,this.sprite.get("T"),color.b);
                this.sprite.renderSpriteColor(565,487,this.sprite.get("Y"),color.b);
                this.sprite.renderSpriteColor(605,487,this.sprite.get("P"),color.b);
                this.sprite.renderSpriteColor(645,487,this.sprite.get("E"),color.b);
                this.ctx.fillStyle = this.sprite.color[color.b];
                this.ctx.fillRect(490,497,20,10);

                this.sprite.renderSpriteColor(125,567,this.sprite.get("C"),color.c);
                this.sprite.renderSpriteColor(205,567,this.sprite.get("T"),color.c);
                this.sprite.renderSpriteColor(245,567,this.sprite.get("Y"),color.c);
                this.sprite.renderSpriteColor(285,567,this.sprite.get("P"),color.c);
                this.sprite.renderSpriteColor(325,567,this.sprite.get("E"),color.c);
                this.ctx.fillStyle = this.sprite.color[color.c];
                this.ctx.fillRect(170,577,20,10);

                this.sprite.renderSpriteColor(435,567,this.sprite.get("D"),color.d);
                this.sprite.renderSpriteColor(525,567,this.sprite.get("T"),color.d);
                this.sprite.renderSpriteColor(565,567,this.sprite.get("Y"),color.d);
                this.sprite.renderSpriteColor(605,567,this.sprite.get("P"),color.d);
                this.sprite.renderSpriteColor(645,567,this.sprite.get("E"),color.d);
                this.ctx.fillStyle = this.sprite.color[color.d];
                this.ctx.fillRect(490,577,20,10);




        if(!this.typeMusic){

                this.sprite.renderSpriteColor(125,487,this.sprite.get("A"),1);
                this.sprite.renderSpriteColor(205,487,this.sprite.get("T"),1);
                this.sprite.renderSpriteColor(245,487,this.sprite.get("Y"),1);
                this.sprite.renderSpriteColor(285,487,this.sprite.get("P"),);
                this.sprite.renderSpriteColor(325,487,this.sprite.get("E"),1);
                this.ctx.fillStyle = this.sprite.color[1];
                this.ctx.fillRect(170,497,20,10);

                this.sprite.renderSpriteColor(435,487,this.sprite.get("B"),4);
                this.sprite.renderSpriteColor(525,487,this.sprite.get("T"),4);
                this.sprite.renderSpriteColor(565,487,this.sprite.get("Y"),4);
                this.sprite.renderSpriteColor(605,487,this.sprite.get("P"),4);
                this.sprite.renderSpriteColor(645,487,this.sprite.get("E"),4);
                this.ctx.fillStyle = this.sprite.color[4];
                this.ctx.fillRect(490,497,20,10);

                this.sprite.renderSpriteColor(125,567,this.sprite.get("C"),4);
                this.sprite.renderSpriteColor(205,567,this.sprite.get("T"),4);
                this.sprite.renderSpriteColor(245,567,this.sprite.get("Y"),4);
                this.sprite.renderSpriteColor(285,567,this.sprite.get("P"),4);
                this.sprite.renderSpriteColor(325,567,this.sprite.get("E"),4);
                this.ctx.fillStyle = this.sprite.color[4];
                this.ctx.fillRect(170,577,20,10);

                this.sprite.renderSpriteColor(435,567,this.sprite.get("D"),4);
                this.sprite.renderSpriteColor(525,567,this.sprite.get("T"),4);
                this.sprite.renderSpriteColor(565,567,this.sprite.get("Y"),4);
                this.sprite.renderSpriteColor(605,567,this.sprite.get("P"),4);
                this.sprite.renderSpriteColor(645,567,this.sprite.get("E"),4);
                this.ctx.fillStyle = this.sprite.color[4];
                this.ctx.fillRect(490,577,20,10);

        }else{


            if(this.music == 1){



                if(this.count%2==0){

                    this.sprite.renderSpriteColor(125,487,this.sprite.get("A"),4);
                    this.sprite.renderSpriteColor(205,487,this.sprite.get("T"),4);
                    this.sprite.renderSpriteColor(245,487,this.sprite.get("Y"),4);
                    this.sprite.renderSpriteColor(285,487,this.sprite.get("P"),4);
                    this.sprite.renderSpriteColor(325,487,this.sprite.get("E"),4);
                    this.ctx.fillStyle = this.sprite.color[4];
                    this.ctx.fillRect(170,497,20,10);

                }else{

                    this.sprite.renderSpriteColor(125,487,this.sprite.get("A"),1);
                    this.sprite.renderSpriteColor(205,487,this.sprite.get("T"),1);
                    this.sprite.renderSpriteColor(245,487,this.sprite.get("Y"),1);
                    this.sprite.renderSpriteColor(285,487,this.sprite.get("P"),1);
                    this.sprite.renderSpriteColor(325,487,this.sprite.get("E"),1);
                    this.ctx.fillStyle = this.sprite.color[1];
                    this.ctx.fillRect(170,497,20,10);

                }

            }else  if(this.music == 2){


                if(this.count%2==0){

                    
                    this.sprite.renderSpriteColor(435,487,this.sprite.get("B"),4);
                    this.sprite.renderSpriteColor(525,487,this.sprite.get("T"),4);
                    this.sprite.renderSpriteColor(565,487,this.sprite.get("Y"),4);
                    this.sprite.renderSpriteColor(605,487,this.sprite.get("P"),4);
                    this.sprite.renderSpriteColor(645,487,this.sprite.get("E"),4);
                    this.ctx.fillStyle = this.sprite.color[4];
                    this.ctx.fillRect(490,497,20,10);

                }else{

                    this.sprite.renderSpriteColor(435,487,this.sprite.get("B"),1);
                    this.sprite.renderSpriteColor(525,487,this.sprite.get("T"),1);
                    this.sprite.renderSpriteColor(565,487,this.sprite.get("Y"),1);
                    this.sprite.renderSpriteColor(605,487,this.sprite.get("P"),1);
                    this.sprite.renderSpriteColor(645,487,this.sprite.get("E"),1);
                    this.ctx.fillStyle = this.sprite.color[1];
                    this.ctx.fillRect(490,497,20,10);

                }

            }else  if(this.music == 3){


                if(this.count%2==0){

                    
                    this.sprite.renderSpriteColor(125,567,this.sprite.get("C"),4);
                    this.sprite.renderSpriteColor(205,567,this.sprite.get("T"),4);
                    this.sprite.renderSpriteColor(245,567,this.sprite.get("Y"),4);
                    this.sprite.renderSpriteColor(285,567,this.sprite.get("P"),4);
                    this.sprite.renderSpriteColor(325,567,this.sprite.get("E"),4);
                    this.ctx.fillStyle = this.sprite.color[4];
                    this.ctx.fillRect(170,577,20,10);

                }else{

                    this.sprite.renderSpriteColor(125,567,this.sprite.get("C"),1);
                    this.sprite.renderSpriteColor(205,567,this.sprite.get("T"),1);
                    this.sprite.renderSpriteColor(245,567,this.sprite.get("Y"),1);
                    this.sprite.renderSpriteColor(285,567,this.sprite.get("P"),1);
                    this.sprite.renderSpriteColor(325,567,this.sprite.get("E"),1);
                    this.ctx.fillStyle = this.sprite.color[1];
                    this.ctx.fillRect(170,577,20,10);

                }

            }else  if(this.music == 3){


                if(this.count%2==0){

                    
                    this.sprite.renderSpriteColor(125,567,this.sprite.get("C"),4);
                    this.sprite.renderSpriteColor(205,567,this.sprite.get("T"),4);
                    this.sprite.renderSpriteColor(245,567,this.sprite.get("Y"),4);
                    this.sprite.renderSpriteColor(285,567,this.sprite.get("P"),4);
                    this.sprite.renderSpriteColor(325,567,this.sprite.get("E"),4);
                    this.ctx.fillStyle = this.sprite.color[4];
                    this.ctx.fillRect(170,577,20,10);

                }else{

                    this.sprite.renderSpriteColor(125,567,this.sprite.get("C"),1);
                    this.sprite.renderSpriteColor(205,567,this.sprite.get("T"),1);
                    this.sprite.renderSpriteColor(245,567,this.sprite.get("Y"),1);
                    this.sprite.renderSpriteColor(285,567,this.sprite.get("P"),1);
                    this.sprite.renderSpriteColor(325,567,this.sprite.get("E"),1);
                    this.ctx.fillStyle = this.sprite.color[1];
                    this.ctx.fillRect(170,577,20,10);

                }

            }else  if(this.music == 4){


                if(this.count%2==0){

                    
                    this.sprite.renderSpriteColor(435,567,this.sprite.get("D"),4);
                    this.sprite.renderSpriteColor(525,567,this.sprite.get("T"),4);
                    this.sprite.renderSpriteColor(565,567,this.sprite.get("Y"),4);
                    this.sprite.renderSpriteColor(605,567,this.sprite.get("P"),4);
                    this.sprite.renderSpriteColor(645,567,this.sprite.get("E"),4);
                    this.ctx.fillStyle = this.sprite.color[4];
                    this.ctx.fillRect(490,577,20,10);

                }else{

                    this.sprite.renderSpriteColor(435,567,this.sprite.get("D"),1);
                    this.sprite.renderSpriteColor(525,567,this.sprite.get("T"),1);
                    this.sprite.renderSpriteColor(565,567,this.sprite.get("Y"),1);
                    this.sprite.renderSpriteColor(605,567,this.sprite.get("P"),1);
                    this.sprite.renderSpriteColor(645,567,this.sprite.get("E"),1);
                    this.ctx.fillStyle = this.sprite.color[1];
                    this.ctx.fillRect(490,577,20,10);

                }

            }



        }

 
    }



    move(){


        document.addEventListener("keydown", e => {
            
        

            if(game_Manager.scene == 2 && !this.typeMusic){
      

                if(e.keyCode === 40){
                    // DOWN
                 
                }else if(e.keyCode === 37){
                    // LEFT
                    if(this.modeType){

                        this.count = 0;
                        this.configMode  = 0;
                        this.selectMode();
                        s.play("menu_sound");
                        game_Manager.mode = 0;
              

                    }
                   

                }else if(e.keyCode === 39){
                    // RIGTH

                    if(this.modeType){

                        this.count = 0;
                        this.configMode  = 1;
                        game_Manager.mode = 1;
                        this.selectMode();
                        s.play("menu_sound");
              

                    }
                   

                }else if(e.keyCode === 38){
                    // UP
                    
                   
                }else if(e.keyCode === 13){
                    // ENTER
                    this.modeType = false;
                    this.typeMusic = true;
                   
                }

            }else  if(e.keyCode === 13 && this.typeMusic && game_Manager.scene == 2){

                game_Manager.scene = 3;

                game_Manager.levelSel = new levelScene("game");

                

            }




        
       
            if(this.typeMusic && this.music == 1 && game_Manager.scene == 2){

              

                if(e.keyCode === 39){
                    // RIGTH
                    this.music = 2;
                    game_Manager.music = 2;
                    s.play("menu_sound");
                    m.stop();
                    m.play("typeb");

                }else if(e.keyCode === 40){
                    // DOWN
                    this.music = 3;
                    game_Manager.music = 3;
                    s.play("menu_sound");
                    m.stop();
                    m.play("typec");
                
                }

            }else if(this.typeMusic && this.music == 2 && game_Manager.scene == 2){
               
                if(e.keyCode === 37){
                    // LEFT
                    this.music = 1;
                    game_Manager.music = 1;
                    s.play("menu_sound");
                    m.stop();
                    m.play("typea");

                }else if(e.keyCode === 40){
                    // DOWN
                    this.music = 4;
                    game_Manager.music = 4;
                    s.play("menu_sound");
                    m.stop();
                    m.play("Karinka");
                
                }

            }else if(this.typeMusic && this.music == 3 && game_Manager.scene == 2){
               
                if(e.keyCode === 38){
                    // UP
                    this.music = 1;
                    game_Manager.music = 1;
                    s.play("menu_sound");
                    m.stop();
                    m.play("typea");
                    

                }else if(e.keyCode === 39){
                    // RIGTH
                    this.music = 4;
                    game_Manager.music = 4;
                    s.play("menu_sound");
                    m.stop();
                    m.play("Karinka");
                
                }

            }else if(this.typeMusic && this.music == 4 && game_Manager.scene == 2){
              
                if(e.keyCode === 38){
                    // UP
                    this.music = 2;
                    game_Manager.music = 2;
                    s.play("menu_sound");
                    m.stop();
                    m.play("typeb");

                }else if(e.keyCode === 37){
                    // LEFT
                    this.music = 3;
                    game_Manager.music = 3;
                    s.play("menu_sound");
                     m.stop();
                    m.play("typec");
                
                }

            }
            
            
            
           


        });


    }


    selectMode(){

        if(game_Manager.scene == 2){

            if(this.modeType == true){

    
                if(this.configMode == 0){

                    if(this.count%2 == 0){


                        this.sprite.renderSprite(125,207,this.sprite.get("A"));
                        this.sprite.renderSprite(205,207,this.sprite.get("T"));
                        this.sprite.renderSprite(245,207,this.sprite.get("Y"));
                        this.sprite.renderSprite(285,207,this.sprite.get("P"));
                        this.sprite.renderSprite(325,207,this.sprite.get("E"));
                        this.ctx.fillStyle = this.sprite.color[0];
                        this.ctx.fillRect(170,217,20,10);


                    }else{

                        this.sprite.renderSpriteColor(125,207,this.sprite.get("A"),4);
                        this.sprite.renderSpriteColor(205,207,this.sprite.get("T"),4);
                        this.sprite.renderSpriteColor(245,207,this.sprite.get("Y"),4);
                        this.sprite.renderSpriteColor(285,207,this.sprite.get("P"),4);
                        this.sprite.renderSpriteColor(325,207,this.sprite.get("E"),4);
                        this.ctx.fillStyle = this.sprite.color[4];
                        this.ctx.fillRect(170,217,20,10);
                    }


                    this.sprite.renderSpriteColor(435,207,this.sprite.get("B"),4);
                    this.sprite.renderSpriteColor(525,207,this.sprite.get("T"),4);
                    this.sprite.renderSpriteColor(565,207,this.sprite.get("Y"),4);
                    this.sprite.renderSpriteColor(605,207,this.sprite.get("P"),4);
                    this.sprite.renderSpriteColor(645,207,this.sprite.get("E"),4);
                    this.ctx.fillStyle = this.sprite.color[4];
                    this.ctx.fillRect(490,217,20,10);
                

                }else{
                    

                    if(this.count%2 == 0){

                        this.sprite.renderSprite(435,207,this.sprite.get("B"));
                        this.sprite.renderSprite(525,207,this.sprite.get("T"));
                        this.sprite.renderSprite(565,207,this.sprite.get("Y"));
                        this.sprite.renderSprite(605,207,this.sprite.get("P"));
                        this.sprite.renderSprite(645,207,this.sprite.get("E"));
                        this.ctx.fillStyle = this.sprite.color[0];
                        this.ctx.fillRect(490,217,20,10);

                    }else{


                        this.sprite.renderSpriteColor(435,207,this.sprite.get("B"),4);
                        this.sprite.renderSpriteColor(525,207,this.sprite.get("T"),4);
                        this.sprite.renderSpriteColor(565,207,this.sprite.get("Y"),4);
                        this.sprite.renderSpriteColor(605,207,this.sprite.get("P"),4);
                        this.sprite.renderSpriteColor(645,207,this.sprite.get("E"),4);
                        this.ctx.fillStyle = this.sprite.color[4];
                        this.ctx.fillRect(490,217,20,10);


                    }



                        this.sprite.renderSpriteColor(125,207,this.sprite.get("A"),4);
                        this.sprite.renderSpriteColor(205,207,this.sprite.get("T"),4);
                        this.sprite.renderSpriteColor(245,207,this.sprite.get("Y"),4);
                        this.sprite.renderSpriteColor(285,207,this.sprite.get("P"),4);
                        this.sprite.renderSpriteColor(325,207,this.sprite.get("E"),4);
                        this.ctx.fillStyle = this.sprite.color[4];
                        this.ctx.fillRect(170,217,20,10);

                }
            

            }else{



                if(this.configMode == 0){


                    this.sprite.renderSprite(125,207,this.sprite.get("A"));
                    this.sprite.renderSprite(205,207,this.sprite.get("T"));
                    this.sprite.renderSprite(245,207,this.sprite.get("Y"));
                    this.sprite.renderSprite(285,207,this.sprite.get("P"));
                    this.sprite.renderSprite(325,207,this.sprite.get("E"));
                    this.ctx.fillStyle = this.sprite.color[0];
                    this.ctx.fillRect(170,217,20,10);


                    this.sprite.renderSpriteColor(435,207,this.sprite.get("B"),4);
                    this.sprite.renderSpriteColor(525,207,this.sprite.get("T"),4);
                    this.sprite.renderSpriteColor(565,207,this.sprite.get("Y"),4);
                    this.sprite.renderSpriteColor(605,207,this.sprite.get("P"),4);
                    this.sprite.renderSpriteColor(645,207,this.sprite.get("E"),4);
                    this.ctx.fillStyle = this.sprite.color[4];
                    this.ctx.fillRect(490,217,20,10);


                }else{


                    this.sprite.renderSprite(435,207,this.sprite.get("B"));
                    this.sprite.renderSprite(525,207,this.sprite.get("T"));
                    this.sprite.renderSprite(565,207,this.sprite.get("Y"));
                    this.sprite.renderSprite(605,207,this.sprite.get("P"));
                    this.sprite.renderSprite(645,207,this.sprite.get("E"));
                    this.ctx.fillStyle = this.sprite.color[0];
                    this.ctx.fillRect(490,217,20,10);

                    this.sprite.renderSpriteColor(125,207,this.sprite.get("A"),4);
                    this.sprite.renderSpriteColor(205,207,this.sprite.get("T"),4);
                    this.sprite.renderSpriteColor(245,207,this.sprite.get("Y"),4);
                    this.sprite.renderSpriteColor(285,207,this.sprite.get("P"),4);
                    this.sprite.renderSpriteColor(325,207,this.sprite.get("E"),4);
                    this.ctx.fillStyle = this.sprite.color[4];
                    this.ctx.fillRect(170,217,20,10);

                }




            }
        
        }
    }



}