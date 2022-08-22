class tetris{

    canvas = null;
    ctx = null;
    sprite = null;
    grid = null;
    dropCounter = 0;
    dropInterval = 1000;
    lastTime = 0;
    block = new Image();
    indiceTem = [];
    rotateI = 0;
    statusRotate = 0;
    clearLines = false;

    statusClear = false;
    temGrid = null;

    //const pieces = 'ILJOTSZ';
    colors = [
        [
            [1,1,1,1,1,1,1,1], // O - 0
            [1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1],
        ],
       
        [
            [1,1,1,1,1,1,1,1], // T - 1
            [1,4,4,4,4,4,4,1],
            [1,4,3,3,3,3,2,1],
            [1,4,3,4,4,1,4,1],
            [1,4,3,4,2,1,4,1],
            [1,4,1,1,1,1,4,1],
            [1,4,4,4,4,4,4,1],
            [1,1,1,1,1,1,1,1]
        ],
        [
            [1,1,1,1,1,1,1,1], // O - 2
            [1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1],
            [1,0,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1],
        ],
        [
            [1,1,1,1,1,1,1,1], // L - 3
            [1,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,1],
            [1,1,1,1,1,1,1,1],
            
        ],
        [
            [1,1,1,1,1,1,1,1], //J - 4
            [1,4,4,4,4,4,4,1],
            [1,4,1,1,1,1,4,1],
            [1,4,1,0,0,1,4,1],
            [1,4,1,0,0,1,4,1],
            [1,4,1,1,1,1,4,1],
            [1,4,4,4,4,4,4,1],
            [1,1,1,1,1,1,1,1]
            
        ],
        [
            [1,1,1,1,1,1,1,1], //I - 5
            [1,4,4,4,2,4,4,1],
            [1,4,2,4,4,4,2,1],
            [1,4,4,4,4,4,4,1],
            [1,4,4,2,4,4,4,1],
            [1,4,4,4,4,4,2,1],
            [1,4,2,4,2,4,4,1],
            [1,4,4,4,4,4,4,1]
        ],
        [
            [1,4,4,2,4,4,2,1], //I - 6
            [1,2,4,4,4,4,4,1],
            [1,4,4,4,2,4,2,1],
            [1,4,2,4,4,4,4,1],
            [1,4,4,4,4,4,2,1],
            [1,2,4,2,4,4,4,1],
            [1,4,4,4,4,2,4,1],
            [1,4,2,4,4,4,4,1]
        ],
        [
            [1,4,4,4,4,4,2,1], //I - 7
            [1,4,4,2,4,4,4,1],
            [1,2,4,4,4,2,4,1],
            [1,4,4,2,4,4,4,1],
            [1,2,4,4,4,4,2,1],
            [1,4,4,4,2,4,4,1],
            [1,4,2,4,4,4,4,1],
            [1,1,1,1,1,1,1,1]
            
        ],
        [
            [1,1,1,1,1,1,1,1], //J - 8
            [1,2,2,2,2,2,2,1],
            [1,2,1,1,1,1,2,1],
            [1,2,1,0,0,1,2,1],
            [1,2,1,0,0,1,2,1],
            [1,2,1,1,1,1,2,1],
            [1,2,2,2,2,2,2,1], 
            [1,1,1,1,1,1,1,1]
        ],
        [
            [1,1,1,1,1,1,1,1], //J - 9
            [1,4,4,4,4,4,4,1],
            [1,4,4,4,4,4,4,1],
            [1,4,4,1,1,4,4,1],
            [1,4,4,1,1,4,4,1],
            [1,4,4,4,4,4,4,1],
            [1,4,4,4,4,4,4,1],
            [1,1,1,1,1,1,1,1]
        ],
        [
            [1,1,1,1,1,1,1,1], //J - 10
            [4,4,2,4,4,2,4,1],
            [4,4,4,4,4,4,4,1],
            [4,2,4,4,2,4,2,1],
            [4,4,4,4,4,4,4,1],
            [4,4,2,4,4,4,2,1],
            [4,4,4,4,2,4,4,1],
            [1,1,1,1,1,1,1,1]

           

        ],
        [
            [1,1,1,1,1,1,1,1], //J - 11
            [2,4,2,4,4,2,4,4],
            [4,4,4,4,4,4,2,4],
            [4,4,2,4,4,4,4,4],
            [2,4,4,4,4,2,4,4],
            [4,4,4,2,4,4,4,2],
            [4,2,4,4,4,2,4,4],
            [1,1,1,1,1,1,1,1]

        ],
        [
            [1,1,1,1,1,1,1,1], //J - 12
            [1,4,2,4,4,2,4,4],
            [1,4,4,4,4,4,4,4],
            [1,2,4,4,2,4,2,4],
            [1,4,4,4,4,4,4,4],
            [1,4,2,4,4,4,2,4],
            [1,4,4,4,2,4,4,4],
            [1,1,1,1,1,1,1,1]

    
        ],
        ,
        [
            [1,1,1,1,1,1,1,1], //J - 13
            [1,4,4,4,4,4,4,1],
            [1,4,4,4,4,4,4,1],
            [1,4,4,1,1,4,4,1],
            [1,4,4,1,1,4,4,1],
            [1,4,4,4,4,4,4,1],
            [1,4,4,4,4,4,4,1],
            [1,1,1,1,1,1,1,1]

        ],
        [
            [3,3,3,3,3,3,3,3], //J - 14
            [3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3],
        ]
    ];
    

    player = {
        pos: {x: 0,y: 0},
        matriz: null,
        next: null,
        lines: 0,
        level: 1
    }

    constructor(canvas){

        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.sprite = new sprite(this.ctx);
        //this.ctx.scale(1,1);
        this.grid = this.createMatriz(10,18);
        this.temGrid = this.createMatriz(10,18);

        this.block = "img/block.png";
        this.background();
        this.move();

    }

    createMatriz(w,h){

        const matriz = [];

        while(h--){

            matriz.push(new Array(w).fill(0));

        }


        return matriz;

    }


    update(time = 0){


        if(!game_Manager.gameOver){

            const deltaTime =  time - this.lastTime;

            this.lastTime = time;
            this.dropCounter += deltaTime; 
        
            if(this.dropCounter > this.dropInterval ){
        
                this.playerDrop();
        
            }
            
            
            this.draw();
            this.updateScore();

            console.log("Develop instagram @juego_terminado");
            requestAnimationFrame(this.update.bind(this));  

        }
       
    }



    draw(){


      
        
        if(!this.statusClear){
            
            this.ctx.fillStyle = "#F8F8F8";
            //ctx.fillStyle = "#000";
            this.ctx.fillRect(79,0,400,719);
            this.drawMatriz(this.grid,{x:0,y:0},0);
            this.drawMatriz(this.player.matriz,this.player.pos,1);
            this.drawMatrizNext(this.player.next,{x:12,y:11});
        }

     
    
       
    
    }
    

    drawMatriz(matriz,offset,type){


        
        matriz.forEach((row,y) => {
    
            row.forEach((value,x) => {
    
                if(value !== 0){
                            
                
                    this.sprite.renderPiece(this.colors[value],(40*x) + (offset.x*40) + 79,(40*y) + (offset.y*40) );
    
                }
    
            });
        });
    
    }



    drawMatrizNext(matriz,offset){

        this.ctx.fillStyle = "#F8F8F8";
        this.ctx.fillRect(599,520,160,160);
    
        
    
        const pos = {
            x: 0,
            y: 0
        }
    
        matriz.forEach((row,y) => {
    
            row.forEach((value,x) => {
    
                if(value !== 0){
                    
                    if(value == 9){
                        
                        offset.x = 15.5;
                        offset.y = 14;
                       
    
                    }else if(value == 4){
    
                        offset.x = 15.5;
                        offset.y = 14;
                       
                    }else if(value == 3){
    
                        offset.x = 15.5;
                        offset.y = 14;
                       
    
                    }else if(value == 1){
    
                        offset.x = 15.4;
                        offset.y = 13.8;

                       
                    }else if(value == 2){
    
                        offset.x = 15.9;
                        offset.y = 14;
                       
                    }
     
                    else if(value == 8){
    
                        offset.x = 15.5;
                        offset.y = 14;
                       
    
                    }else if(value == 10 || value == 11 || value == 12){
    
                        offset.x = 14.95;
                        offset.y = 12.5;
                       
                    }

                   // console.log(value+"====")
    
                
                    this.sprite.renderPiece(this.colors[value],(40*x) + (offset.x*40),(40*y) + (offset.y*40) );
    
                }
    
            });
        });
    
    
    }
    
    

    background(){

        const brick = [0,90,180,270,360,450,540,630];
        brick.map((value,key) => {

            this.sprite.renderSprite(39,value,this.sprite.get("brick"));
            this.sprite.renderSprite(479,value,this.sprite.get("brick"));
            
        });


        this.ctx.fillStyle = this.sprite.color[1];
        this.ctx.fillRect(0,0,34,719);

        // SCORE
        this.ctx.fillStyle = this.sprite.color[1];
        this.ctx.fillRect(524,0,274,65);
        this.ctx.fillRect(524,175,274,545);


        this.ctx.fillStyle = this.sprite.color[2];
        this.ctx.fillRect(524,70,274,35);
        this.ctx.fillRect(524,110,274,5);
        this.ctx.fillRect(524,165,274,5);

        this.sprite.renderSprite(544,25,this.sprite.get("macador"));
        this.sprite.renderSprite(564,45,this.sprite.get("S"));
        this.sprite.renderSprite(604,45,this.sprite.get("C"));
        this.sprite.renderSprite(644,45,this.sprite.get("O"));
        this.sprite.renderSprite(684,45,this.sprite.get("R"));
        this.sprite.renderSprite(724,45,this.sprite.get("E"));
        this.sprite.renderSprite(724,125,this.sprite.get("0"));



        this.sprite.renderSprite(544,225,this.sprite.get("macador2"));
        this.sprite.renderSprite(564,245,this.sprite.get("L"));
        this.sprite.renderSprite(604,245,this.sprite.get("E"));
        this.sprite.renderSprite(644,245,this.sprite.get("V"));
        this.sprite.renderSprite(684,245,this.sprite.get("E"));
        this.sprite.renderSprite(724,245,this.sprite.get("L"));
        this.sprite.renderSprite(684,285,this.sprite.get("1"));

        this.sprite.renderSprite(544,345,this.sprite.get("macador2"));
        this.sprite.renderSprite(564,365,this.sprite.get("L"));
        this.sprite.renderSprite(609,365,this.sprite.get("I"));
        this.sprite.renderSprite(644,365,this.sprite.get("NN"));
        this.sprite.renderSprite(684,365,this.sprite.get("E"));
        this.sprite.renderSprite(724,365,this.sprite.get("S"));
        this.sprite.renderSprite(689,405,this.sprite.get("0"));


        this.sprite.renderSprite(574,495,this.sprite.get("nextPiece"));



    }



    createPiece(tipo){

        if(tipo === 'T'){
    
            return [
                [0,1,0],
                [1,1,1],
                [0,0,0]
            ];
        }else if(tipo === 'O'){
            return [
                [2,2],
                [2,2]
            ];
        }else if(tipo === 'L'){
            return [
                [0,0,3],
                [3,3,3],
                [0,0,0]
            ];
        }else if(tipo === 'J'){
            return [
                [4,0,0],
                [4,4,4],
                [0,0,0]
            ];
        }else if(tipo === 'I'){
            return [
              
                
                [0,0,0,0,0],
                [0,0,0,0,0],
                [12,11,11,10,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
            ];
        }else if(tipo === 'S'){
            return [
                [0,8,8],
                [8,8,0],
                [0,0,0]
            ];
        }else if(tipo === 'Z'){
            return [
                [9,9,0],
                [0,9,9],
                [0,0,0]
            ];
        }
    
    
    }



    playerReset(){
        const pieces = 'ILJOTSZ';
        //const pieces = 'LJLJLJLJ';

        this.statusRotate = 0;

        this.dropInterval = 1000 - (this.player.level*100);

        if(this.player.next == null){
    
            const indice = pieces[pieces.length * Math.random() | 0];

            this.player.matriz = this.createPiece(indice);

           
    
        }else{
    
            this.player.matriz = this.player.next;
    
        }


         
        const indice = pieces[pieces.length * Math.random() | 0];

        this.player.next =  this.createPiece(indice);
        
        this.player.pos.x = (this.grid[0].length / 2 | 0) -(this.player.matriz[0].length / 2 | 0);


        this.player.pos.y = 0;
    
        if(this.collide(this.grid,this.player)){
    
    
        
                game_Manager.gameOver = true;
    
        }
        
    }



    gridSweep(){

        /*
        let rowCount = 1;
        let nLineas = 0;

        outer: for(let y =  this.grid.length - 1; y > 0; --y){
            for(let x = 0; x < this.grid[y].length; ++x){
                if(this.grid[y][x] === 0){
       
                    continue outer;
                }
                
            }

            //this.statusClear = true;

            console.log(y+"<====")

            
            const row = this.grid.splice(y,1)[0].fill(0);
            this.grid.unshift(row);
    
            rowCount *= 2;
            nLineas++;

            this.player.score += rowCount * 10;
            this.player.lines++;

            y++;
            game_Manager.score += rowCount * 100;
            game_Manager.lines++;
    
            rowCount *= 2;
 

           
  
            if(game_Manager.lines % 10 === 0) game_Manager.level++;

         

    
        }*/




        var lines = [];

        this.grid.map((row,b) =>{

            let countRow = 0;
         
           row.map((colum,a) => {

               if(this.grid[b][a] != 0){
                    countRow++;
               }

           });

           if(countRow == 10){

                lines.push(b);

           }


        });


 
       if(lines.length > 0){

            this.statusClear = true;
            this.clearLine(lines);
          

       }


        /*
         lines.map((a,b) =>{

            console.log(a)
            //var row = this.grid.splice(a,1)[0].fill(0);

            //this.grid.unshift(row);

        });*/


 
    }



    clearLine(lines){

        let IntervalAnimation = 1;

        const self = this;
        console.log(lines.length);
        if(lines.length == 4){

           
            s.play("tetris_4_lines");
        }else{

            s.play("line_clear");

        }
        
        game_Manager.lines =  game_Manager.lines +  lines.length;
        game_Manager.score += lines.length * 100;

        const myInterval = setInterval(function(){


            if(IntervalAnimation%2 == 0)
            {

                lines.map((a,b) =>{

                    self.ctx.fillStyle = "#F8F8F8";
                    self.ctx.fillRect(79,(a*40),400,40);
    
                });




            }else{



                self.drawMatriz(self.grid,{x:0,y:0},0);


            }
           

            


            if(IntervalAnimation == 7){

                clearInterval(myInterval); 

                lines.map((a,b) =>{

                    var row = self.grid.splice(a,1)[0].fill(0);
                    self.grid.unshift(row);

                });

                s.play("piece_landed");
                self.statusClear = false;
                
               



            }

            IntervalAnimation++;


        }, 150);


    }



  

    playerDrop(){

        if(!this.statusClear){

            this.player.pos.y++;
        
            if(this.collide(this.grid,this.player)){
                this.player.pos.y--;
                
                this.merge(this.grid,this.player);





                this.playerReset();
                game_Manager.score = game_Manager.score + 4;

                s.play("piece_landed");
                this.gridSweep();
            }
        
            this.dropCounter=0;
        }
    
    }



    collide(grid, player){

        const matriz = player.matriz;
        const offset = player.pos;
    
    
        for(let y = 0; y < matriz.length; ++y){
    
           for(let x = 0; x < matriz[y].length; ++x){
    
                if(matriz[y][x] !== 0 && (grid[y + offset.y] && grid[y + offset.y][x + offset.x]) !== 0){
                    return true;
                }
     
           } 
    
        }
    
        return false;
    
    }



    merge(grid,player){

        

      if(!game_Manager.gameOver){
 
        this.player.matriz.forEach((row,y) => {
    
                row.forEach((value, x) =>{
    
                    if(value !== 0){
                        
                        this.grid[y + this.player.pos.y][x + this.player.pos.x] = value;
                        this.temGrid[y + this.player.pos.y][x + this.player.pos.x] = value;
                    }
                   
    
                });
    
        });
    }
    
      
    
    }


    move(){


        document.addEventListener("keydown", e => {

            if(!this.statusClear){
                if(e.keyCode === 40){
                    this.playerDrop();
                    //s.play("move_piece");
                }else if(e.keyCode === 37){
                    this.playerMove(-1);
                    s.play("move_piece");
                }else if(e.keyCode === 39){
                    this.playerMove(1);
                    s.play("move_piece");
                }else if(e.keyCode === 38){
                    s.play("rotate");
                    this.playerRotate();
                }
            }
        
        });


    }


    playerMove(direccion){

        this.player.pos.x += direccion;
        if(this.collide(this.grid,this.player)){
            this.player.pos.x -= direccion;
        }
    
    }


    playerRotate(){

        const pos = this.player.pos.x;
        let offset = 1;
        
        if(this.statusRotate < 3){

            this.statusRotate++;
            
        }else{

            this.statusRotate = 0;

        }



        this.rotate(this.player.matriz);


        while(this.collide(this.grid,this.player)){
    
            this.player.pos.x += offset;

            offset = -(offset + (offset > 0 ? 1 : -1));

            if(offset > this.player.matriz[0].length){

                this.rotate(this.player.matriz);
                this.player.pos.x=pos;
                return;
            }
    
        }
    
    
    }


    rotate(matriz){


        switch(this.statusRotate){

            case 3:

                for(let y = 0; y < matriz.length; ++y){
    
                    for(let x = 0; x < matriz[y].length; ++x){
             
                         if(matriz[y][x] != 0){

                           if(matriz[y][x] == 12){

                            matriz[y][x] = 5;

                           }else if(matriz[y][x] == 11){

                            matriz[y][x] = 6;

                           }else if(matriz[y][x] == 10){

                            matriz[y][x] = 7;

                           }
                           
                         }

                    } 
             
                 }

               
            break;
            case 0:
               
                for(let y = 0; y < matriz.length; ++y){
    
                    for(let x = 0; x < matriz[y].length; ++x){
             
                         if(matriz[y][x] != 0){

                           if(matriz[y][x] == 5){

                            matriz[y][x] = 10;

                           }else if(matriz[y][x] == 6){

                            matriz[y][x] = 11;

                           }else if(matriz[y][x] == 7){

                            matriz[y][x] = 12;

                           }
                           
                         }

                    } 
             
                 }

            break;
            case 1:

                for(let y = 0; y < matriz.length; ++y){
    
                    for(let x = 0; x < matriz[y].length; ++x){
             
                         if(matriz[y][x] != 0){

                           if(matriz[y][x] == 12){

                            matriz[y][x] = 5;

                           }else if(matriz[y][x] == 11){

                            matriz[y][x] = 6;

                           }else if(matriz[y][x] == 10){

                            matriz[y][x] = 7;

                           }
                           
                         }

                    } 
             
                 }


            break;
            case 2:



                for(let y = 0; y < matriz.length; ++y){
    
                    for(let x = 0; x < matriz[y].length; ++x){
             
                         if(matriz[y][x] != 0){

                           if(matriz[y][x] == 7){

                            matriz[y][x] = 12;

                           }else if(matriz[y][x] == 6){

                            matriz[y][x] = 11;

                           }else if(matriz[y][x] == 5){

                            matriz[y][x] = 10;

                           }
                           
                         }

                    } 
             
                 }


            break;

        }

      

        for(let y = 0; y < matriz.length; ++y){
            for(let x = 0; x < y; ++x){
                

                [matriz[x][y], matriz[y][x]] = [ matriz[y][x],matriz[x][y]];
    
            }
        }
        
        
        
        matriz.forEach(row => row.reverse());

        //console.table(matriz);
    
    }


    updateScore(){



       this.ctx.fillStyle = "#fff";
       this.ctx.fillRect(524,119,250,43);  
       this.sprite.renderNumber(game_Manager.score,724,125);

       this.ctx.fillStyle = "#fff";
       this.ctx.fillRect(554,285,195,30);
       this.sprite.renderNumber(game_Manager.level,684,285); 
       
       
       this.ctx.fillStyle = "#fff";
       this.ctx.fillRect(559,405,195,35);
       this.sprite.renderNumber(game_Manager.lines,689,405);  

       //this.sprite.renderNumber(121356,724,125);




    }





}