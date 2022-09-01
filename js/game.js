class game{

    canvas = null;
    ctx = null;
    tiled = null;
    sprite = null;
    arrow = null;
  
    constructor(canvas){

        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(1,1);
        this.sprite = new sprite(this.ctx);
      


    }

    init(){

        

        m.play("intro");
        
        this.ctx.fillStyle = this.sprite.color[1];
        this.ctx.fillRect(0,0,799,547);  

        this.ctx.fillStyle = this.sprite.color[2];
        this.ctx.fillRect(15,274,770,5);
        this.ctx.fillRect(40,279,720,5);
        this.ctx.fillRect(40,289,720,10);
        this.ctx.fillRect(40,304,720,5);

        this.ctx.fillStyle = "#A8A8A8";
        this.ctx.fillRect(40,309,720,214);
        
    
        this.ctx.fillRect(40,299,720,5);
       
  
        this.sprite.renderSprite(45,564,this.sprite.get("arrow"));
        this.sprite.renderSprite(85,564,this.sprite.get("1"));
        this.sprite.renderSprite(125,564,this.sprite.get("P"));
        this.sprite.renderSprite(165,564,this.sprite.get("L"));
        this.sprite.renderSprite(205,564,this.sprite.get("A"));
        this.sprite.renderSprite(245,564,this.sprite.get("Y"));
        this.sprite.renderSprite(285,564,this.sprite.get("E"));
        this.sprite.renderSprite(325,564,this.sprite.get("R"));
        this.sprite.renderSprite(480,564,this.sprite.get("2"));
        this.sprite.renderSprite(525,564,this.sprite.get("P"));
        this.sprite.renderSprite(565,564,this.sprite.get("L"));
        this.sprite.renderSprite(605,564,this.sprite.get("A"));
        this.sprite.renderSprite(645,564,this.sprite.get("Y"));
        this.sprite.renderSprite(685,564,this.sprite.get("E"));
        this.sprite.renderSprite(725,564,this.sprite.get("R"));


        this.sprite.renderSprite(160,644,this.sprite.get("COPY"));
        this.sprite.renderSprite(210,649,this.sprite.get("1"));
        this.sprite.renderSprite(245,649,this.sprite.get("9"));
        this.sprite.renderSprite(285,649,this.sprite.get("8"));
        this.sprite.renderSprite(325,649,this.sprite.get("9"));
        this.sprite.renderSprite(400,639,this.sprite.get("NN"));
        this.sprite.renderSprite(440,639,this.sprite.get("i"));
        this.sprite.renderSprite(455,654,this.sprite.get("n"));
        this.sprite.renderSprite(485,644,this.sprite.get("t"));
        this.sprite.renderSprite(505,654,this.sprite.get("e"));
        this.sprite.renderSprite(540,654,this.sprite.get("n"));
        this.sprite.renderSprite(575,639,this.sprite.get("d"));
        this.sprite.renderSprite(610,654,this.sprite.get("o"));

        this.sprite.renderSprite(380,489,this.sprite.get("edificio1"));
        this.sprite.renderSprite(400,474,this.sprite.get("edificio2"));
        this.sprite.renderSprite(445,449,this.sprite.get("edificio3"));
        this.sprite.renderSprite(520,294,this.sprite.get("cupula"));
        this.sprite.renderSprite(685,414,this.sprite.get("cupula_small"));
        this.sprite.renderSprite(655,494,this.sprite.get("cruz"));

        this.sprite.renderSprite(120,319,this.sprite.get("moon"));


        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(55,374,5,5); 
        this.ctx.fillRect(215,454,5,5);
        this.ctx.fillRect(535,334,5,5);
        this.ctx.fillRect(295,334,5,5);  
        this.ctx.fillRect(375,374,10,10);
        this.ctx.fillRect(375,374,10,10);
        this.ctx.fillRect(655,334,10,10);  

        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(15,39,770,240);


        this.ctx.fillStyle = this.sprite.color[2];
        this.ctx.fillRect(35,59,730,200);
        this.ctx.fillRect(15,274,770,5);

        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(40,64,720,190);

        this.ctx.fillStyle = this.sprite.color[4];
        this.ctx.fillRect(15,44,5,230);
        this.ctx.fillRect(20,49,5,220);
        this.ctx.fillRect(25,54,5,210);
        this.ctx.fillRect(30,49,740,5);
        this.ctx.fillRect(780,44,5,230);
        this.ctx.fillRect(775,49,5,220);
        this.ctx.fillRect(770,54,5,210);
        
        



        this.sprite.renderSprite(70,84,this.sprite.get("t_logo"));
        this.sprite.renderSprite(200,84,this.sprite.get("e_logo"));
        this.sprite.renderSprite(310,84,this.sprite.get("t_logo"));
        this.sprite.renderSprite(440,84,this.sprite.get("r_logo"));
        this.sprite.renderSprite(555,84,this.sprite.get("i_logo"));
        this.sprite.renderSprite(600,84,this.sprite.get("s_logo"));


        this.ctx.fillStyle = this.sprite.color[1];
        this.ctx.fillRect(20,269,760,5);
        this.ctx.fillRect(25,264,750,5);  

        this.move();

    }




    move(){



        document.addEventListener("keydown", e => {

                if(game_Manager.scene == 1){


                    if(e.keyCode === 37){

                        this.sprite.renderSpriteColor(45,564,this.sprite.get("arrow"),1);
                        this.sprite.renderSpriteColor(440,564,this.sprite.get("arrow"),3);
                        s.play("menu_sound");
                       
    
    
                    }else if(e.keyCode === 39){
                       
                        this.sprite.renderSpriteColor(45,564,this.sprite.get("arrow"),3);
                        this.sprite.renderSpriteColor(440,564,this.sprite.get("arrow"),1);
                       
                        s.play("menu_sound");
                       
                    }else if(e.keyCode === 13){
                        m.stop();
                        game_Manager.sceneMode.init();
                        game_Manager.scene = 2;

    
                    }


                }
         
        
        });


    }





}