class scoreScene{

    ctx = null;
    sprite = null;
    cavas = null;


    constructor(canvas){

    
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.sprite = new sprite(this.ctx);
       
       
    }




    renderBackground(){

        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(0,0,900,600);  


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
        

        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(768,21,10,680);
        this.ctx.fillRect(28,691,750,10);
        this.ctx.fillRect(38,41,320,40);

        this.sprite.renderSprite(263,146,this.sprite.get("bg_text_level"));
        this.sprite.renderSprite(283,166,this.sprite.get("L"));
        this.sprite.renderSprite(323,166,this.sprite.get("E"));
        this.sprite.renderSprite(363,166,this.sprite.get("V"));
        this.sprite.renderSprite(403,166,this.sprite.get("E"));
        this.sprite.renderSprite(443,166,this.sprite.get("L"));


        this.sprite.renderSprite(183,426,this.sprite.get("bg_text_top"));


        this.ctx.fillStyle = this.sprite.color[1];
        this.ctx.fillRect(173,231,410,140);


        this.ctx.fillStyle = this.sprite.color[2];
        this.ctx.fillRect(178,291,400,20);


        this.ctx.fillStyle = this.sprite.color[3];

        this.ctx.fillRect(178,236,80,50);
        this.ctx.fillRect(263,236,75,50);
        this.ctx.fillRect(343,236,75,50);
        this.ctx.fillRect(423,236,75,50);
        this.ctx.fillRect(503,236,75,50);


        this.ctx.fillRect(178,316,80,50);
        this.ctx.fillRect(263,316,75,50);
        this.ctx.fillRect(343,316,75,50);
        this.ctx.fillRect(423,316,75,50);
        this.ctx.fillRect(503,316,75,50);


        this.ctx.fillStyle = this.sprite.color[1];
        this.ctx.fillRect(53,511,690,140);
        this.ctx.fillRect(328,456,20,10);


        this.ctx.fillStyle = this.sprite.color[3];
        this.ctx.fillRect(58,516,80,130);
        this.ctx.fillRect(143,516,595,130);
        

        this.sprite.renderSprite(203,446,this.sprite.get("T"));
        this.sprite.renderSprite(243,446,this.sprite.get("O"));
        this.sprite.renderSprite(283,446,this.sprite.get("P"));
        this.sprite.renderSprite(363,446,this.sprite.get("S"));
        this.sprite.renderSprite(403,446,this.sprite.get("C"));
        this.sprite.renderSprite(443,446,this.sprite.get("O"));
        this.sprite.renderSprite(483,446,this.sprite.get("R"));
        this.sprite.renderSprite(523,446,this.sprite.get("E"));


        this.sprite.renderSprite(88,526,this.sprite.get("1"));
        this.sprite.renderSprite(83,566,this.sprite.get("2"));
        this.sprite.renderSprite(83,606,this.sprite.get("3"));

        this.ctx.fillStyle = this.sprite.color[1];
        for(var x = 1; x <= 40; x++){

            if(x%2 == 0){

                this.ctx.fillRect((x*5)+163,536,5,5);
                this.ctx.fillRect((x*5)+163,576,5,5);
                this.ctx.fillRect((x*5)+163,616,5,5);


                this.ctx.fillRect((x*5)+478,536,5,5);
                this.ctx.fillRect((x*5)+478,576,5,5);
                this.ctx.fillRect((x*5)+478,616,5,5);
                
            }
           

        }
       
        

    }



}