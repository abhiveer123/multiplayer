class Game{
    constructor(){}
    update(state){
        database.ref("/").update({
            gameState:state
        })

    }
    getState(){
        var gameStateref=database.ref("gameState")
        gameStateref.on("value",function(data){
            gameState=data.val()
        })

    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
    }
}