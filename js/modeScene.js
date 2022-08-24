class modeScene{

    ctx = null;
    sprite = null;
    cavas = null;


    constructor(canvas){

    
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.sprite = new sprite(this.ctx);

        this.renderBackground();

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
                console.log(dx+" "+dy)
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

    
       
        

    }



}