class musicManager{

    audio = null;
    path = "music/";

    myMusic = [];


    music = [
        "intro.ogg", // 0
        "Type_A.ogg", // 1
        "typeB.mp3", // 2
        "typeC.ogg", // 3
        "Karinka.mp3", // 4
        "Loginska.mp3", //5
        "typeD.mp3", // 6
        "Game_Over.ogg", // 7
        "High_Scores.ogg" // 8
    ];



    constructor (){
  
        this.music.map((value,index) => {


            this.myMusic[index] = new Audio(this.path+this.music[index]);

        });


    }



    play(theme){

        let indexMusic = 0;

        switch(theme){

            case "intro":

                indexMusic = 0;

            break;

            case "typea":

                indexMusic = 1;

            break;
            case "typeb":

                indexMusic = 2;

            break;
            case "typec":

                indexMusic = 3;

            break;
            case "Loginska":

                indexMusic = 5;

            break;

            case "Karinka":

                indexMusic = 4;

            break;
           

            case "typed":

                indexMusic = 6;

            break;
            case "GameOver":

                indexMusic = 7;

            break;
            case "HighScores":

                indexMusic = 8;
                
            break;

        }


        this.myMusic[indexMusic].loop = true;
        this.myMusic[indexMusic].play(); 

    }


    stop(){

        this.music.map((value,index) => {
            this.myMusic[index].currentTime = 0;
            this.myMusic[index].pause();
        });

        if(this.audio != null){
            this.audio.pause();
        }
        

    }



    playId(id){


        this.stop();
        this.myMusic[id].loop = true;
        this.myMusic[id].play();


    }



    loop(status){

        this.music.map((value,index) => {
            this.myMusic[index].loop = status;
        });

        if(this.audio != null){
            this.audio.loop = status;
        }
       

    }

}