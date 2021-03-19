import {Game} from "./game"
function main(){
    let game:Game = new Game();

    for(;;){
        game.run();
    }

    game.destructor();
}
