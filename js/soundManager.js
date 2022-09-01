class soundManager{

    audio = null;
    path = "sound/";



    play(theme){

        switch(theme){

            case "rotate":

                this.audio = new Audio(this.path+"rotate.ogg");

            break;
            case "move_piece":

                this.audio = new Audio(this.path+"move_piece.ogg");
                
            break;
            case "piece_landed":

                this.audio = new Audio(this.path+"piece_landed.ogg");
            break;


            case "line_clear":

                this.audio = new Audio(this.path+"line_clear.ogg");
            break;
            case "tetris_4_lines":

                this.audio = new Audio(this.path+"tetris_4_lines.ogg");
            break;
            case "level_up_jingle":

                this.audio = new Audio(this.path+"level_up_jingle.ogg");
            break;
            case "game_over":

                this.audio = new Audio(this.path+"game_over.ogg");
            break;

            case "menu_sound":

                this.audio = new Audio(this.path+"menu_sound.ogg");
            break; 

        }
      
        this.audio.play();

    }



    stop(){

        this.audio.pause();

    }

}