class musicManager{

    audio = null;
    path = "music/";

    music = [
        "intro.ogg", // 0
        "typeA.mp3", // 1
        "typeB.mp3", // 2
        "typeC.ogg", // 3
        "Karinka.mp3", // 4
        "Loginska.mp3", //5
        "typeD.mp3", // 6
        "Game_Over.ogg", // 7
        "High_Scores.ogg" // 8

    ];

    play(theme){

        switch(theme){

            case "intro":

                this.audio = new Audio(this.path+this.music[0]);

            break;

            case "typea":

                this.audio = new Audio(this.path+this.music[1]);

            break;
            case "typeb":

                this.audio = new Audio(this.path+this.music[2]);

            break;
            case "typec":

                this.audio = new Audio(this.path+this.music[3]);

            break;
            case "Loginska":

                this.audio = new Audio(this.path+this.music[5]);

            break;

            case "Karinka":

                this.audio = new Audio(this.path+this.music[4]);

            break;
           

            case "typed":

                this.audio = new Audio(this.path+this.music[6]);

            break;
            case "GameOver":

                this.audio = new Audio(this.path+this.music[7]);

            break;
            case "HighScores":

                this.audio = new Audio(this.path+this.music[8]);
                
            break;

        }
        this.audio.loop = true;
        
        this.audio.play();

    }


    stop(){

        this.audio.pause();
    }



    playId(id){


        this.stop();
        this.audio = new Audio(this.path+this.music[id]);
        this.audio.loop = true;
        this.audio.play();


    }



    loop(status){

        this.audio.loop = status;

    }

}



function stringToImg(string){

    let html = "";

    const numero = new String(string);

    for(let i = 0; i < numero.length; i++){

       html += "<img src='img/"+numero[i]+".png'>";

    }


    return html;



}
