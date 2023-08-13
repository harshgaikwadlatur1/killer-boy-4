var splash
var gameState = "wait"
var playbutton, soundonbutton, soundoffbutton, level1bgimg, level1bg, level2bgimg, level2bg
var health = 0
var maxHealth = 400
var score1 = 0


function preload() {
    splash = loadImage("assets/Killer.gif")
    level1bgimg = loadImage("assets/level1bg.jpg")
    playerimg=loadImage("assets/kill.png")
}


function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/startbutton.png")
    playbutton.position(width / 2-70 , height / 2 + height / 4)
    playbutton.size(200,200)

    // soundonbutton = createImg("soundOn.png")
    // soundonbutton.position(playbutton.x-200,height/2+height/5)
    // soundonbutton.size(150,150)

    // soundoffbutton = createImg("soundOff.png")
    // soundoffbutton.position(playbutton.x+250,height/2+height/5)
    // soundoffbutton.size(150,150)


    // level1bg = createSprite(width / 2, height / 2, width, height)
    // level1bg.addImage(level1bgimg)
    // level1bg.scale = 1.95
    // level1bg.visible = false


    player = createSprite(150, height - 200, 50, 50)
    // player.addImage(playerimg1)
    player.addAnimation("walk", playerimg)
    player.scale = 0.8
    player.visible = false


    invisibleground = createSprite(width / 2, height - 100, width, 10)
    // invisibleground.visible = false

}


function draw() {
    if (gameState == "wait") {
        background(splash)
    }

    playbutton.mousePressed(() => {
        gameState = "level1"
        playbutton.hide()
    })

    if (gameState == "level1") {
        background(level1bgimg)
        level1bg.visible = true
        // player.visible=true
        spawnEnemies()


        level1bg.velocityX += -2
        if (level1bg.x <= 0) {
            level1bg.x = level1bg.width / 2
        }

        player.visible = true

        if (keyDown("UP_ARROW")) {
            player.y -= 2
        }
        // collectibles()

        if (keyDown("DOWN_ARROW")) {
            player.y += 2
        }

        if (keyDown("space")) {
            player.velocityY = -10
        }

        player.velocityY +=0.8

        player.collide(invisibleground)

    }

    drawSprites()

    if (gameState == "level1") {
        textSize(50)
        fill("black")
        stroke(255, 0, 0)
        strokeWeight(2)
        text("LEVEL 1", width / 2 - 100, 80)
        healthlevel1()

    }
}




function healthlevel1() {

    stroke("gold");
    strokeWeight(7);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill("red");
    rect(10, 10, map(health, 0, maxHealth, 0, 200), 20);
}


function spawnEnemies(){

if (frameCount % 100 ===0){
    var enemy= createSprite(width,height-20)
    enemy.velocityX=-6
     //generate random obstacles
var rand=Math.round(random(1,3))
switch(rand){
    case 1: enemy.addImage(obstacle1);
    break;
case 2: enemy.addImage(obstacle2);
    break;
case 3: enemy.addImage(obstacle3);
    break;
    default: break;

}

}

    
}