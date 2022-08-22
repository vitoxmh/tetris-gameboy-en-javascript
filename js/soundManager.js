class soundManager{

    audio = null;
    path = "sound/";



    play(theme){

        switch(theme){

            case "rotate":

                this.audio = new Audio(this.path+"rotate.wav");

            break;
            case "move_piece":

                this.audio = new Audio(this.path+"move_piece.wav");
                
            break;
            case "piece_landed":

                this.audio = new Audio(this.path+"piece_landed.wav");
            break;


            case "line_clear":

                this.audio = new Audio(this.path+"line_clear.wav");
            break;
            case "tetris_4_lines":

                this.audio = new Audio(this.path+"tetris_4_lines.wav");
            break;


            


           


           

        }
      
        this.audio.play();

    }



    stop(){

        this.audio.pause();

    }

}