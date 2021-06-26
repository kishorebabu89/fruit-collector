class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            form.hide();

            Player.getPlayerInfo();
             image(back_img, 0, 0, 1000, 800);
             var x =100;
             var y=200;
             var index =0;
             drawSprites();
             for(var plr in allPlayers){
                
                
                 index = index+1;
                 x = 500-allPlayers[plr].distance;
                 y=500;
                 
                 players[index-1].x = x;
                 players[index-1].y = y;

                 //console.log(allPlayers.player1.score)
                   
                 if(index === player.index){
                     
                     fill("black");
                     textSize(25);
                     text(allPlayers[plr].name ,x-25,y+25);



                     
                 }
                
                 
             
             }
            
            
             

            if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                player.distance -= 10
                player.update();
            }
            if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                player.distance += 10
                player.update();
            }
        
             if (frameCount % 20 === 0) {
                 fruits = createSprite(random(100, 1000), 0, 100, 100);
                 fruits.velocityY = 6;
                 var rand = Math.round(random(1,5));
                 switch(rand){
                     case 1: fruits.addImage("fruit1",fruit1_img);
                     break;
                     case 2: fruits.addImage("fruit1", fruit2_img);
                     break;
                     case 3: fruits.addImage("fruit1", fruit3_img);
                     break;
                     case 4: fruits.addImage("fruit1", fruit4_img);
                     break;
                     case 5: fruits.addImage("fruit1", fruit5_img);
                     break;
                 }
                 fruitGroup.add(fruits);
                 
             }

            stroke("yellow");
            strokeWeight(1.5);
            textAlign(CENTER);
            textSize(24);
            fill("white");
            text("Player 1: "+player.score,100,200);
            text("Player 2: "+player.score,100,200+30);

              if (player.index !== null) {
              //   fill code here, to destroy the objects.
              for (var i = 0; i < fruitGroup.length; i++) {
                if (fruitGroup.get(i).isTouching(players)) {
                    fruitGroup.get(i).destroy();
                    player.score =player.score+1;
                    player.update();
                    
                }
            }
            
        }
    
     
    
     

        });

    }
}