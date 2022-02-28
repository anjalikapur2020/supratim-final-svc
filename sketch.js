
var bgimg, title, titleimg, play, about, title2, titleimg2, inputbox1, input3value
var gameState = "wait"
var pop1, popimg, a1, a2, a3
var levelclear1img
var player, playerimgleft, playerimgright
var count = 0, life = 4, score = 0, life1 = 4
var level2clear, level3startimg
var level3bg, l3obj1, l3obj1img, overimg
var ring, ringimg, perfume, perfumeimg, bouquet, bouquetimg, jasmine, jasmineimg,batimg,bat,gamesound

function preload() {
    bgimg = loadImage("bg2.PNG")
    level1popimg = loadImage("levelpop1.png")
    level2popimg = loadImage("levelpop2.png")
    level3popimg = loadImage("levelpop3.png")
    lifepopimg = loadImage("lifepop.png")

    overimg = loadImage("over.gif")
    batimg=loadImage("bat.gif")

gamesound=loadSound("game.mp3")
    titleimg = loadImage("title1.png")
    titleimg2 = loadImage("logo1.png")
    level1bg = loadImage("cave.png")
    popimg = loadImage("pop1.png")
    level2bg = loadImage("l2bg2.png")
    levelclear1img = loadImage("level1clearpop.gif")


    //l3
    l3obj1img = loadImage("lava5.png")
    l3obj2img = loadImage("lava2.png")
    l3obj3img = loadImage("lava3.png")
    l3obj4img = loadImage("lava4.png")




    level3bg = loadImage("lavabackground.gif")
    ringimg = loadImage("ring.gif")
    perfumeimg = loadImage("perfume.gif")
    bouquetimg = loadImage("bouquet.gif")
    jasmineimg = loadImage("jasmin.gif")


    //level 2 objects
    l2ob1img = loadImage("obj1.png")
    l2ob2img = loadImage("obj2.png")
    l2ob3img = loadImage("obj3.png")
    l2ob4img = loadImage("obj4.png")
    l2ob5img = loadImage("obj5.png")
    l2ob6img = loadImage("obj6.png")
    l2ob7img = loadImage("obj7.png")
    l2ob8img = loadImage("obj8.png")


    playerimgleft = loadImage("aladinstand.png")

    playerimgright = loadImage("aladinstandright.png")
    playerprince = loadImage("alladinoncarpet.png")
    playerprinceleft = loadImage("alladinoncarpetleft.png")


    //level 3 items
    level3startimg = loadImage("level3start.gif")

    //win bg
    winbgimg = loadImage("palace.jpg")
    winimg = loadImage("endimg1.gif")


}

function setup() {
    createCanvas(windowWidth - 50, windowHeight - 20)
    pop1 = createSprite(width / 2, height / 2)
    pop1.addImage(popimg)
    pop1.visible = false
    pop1.scale = 1.5

    winpop = createSprite(width / 2, height / 2)
    winpop.addImage(winimg)
    winpop.visible = false
    winpop.scale = 2

    gamesound.loop()


    levelpop = createSprite(width / 4, 40)
    levelpop.addImage(level1popimg)
    levelpop.visible = false
    levelpop.scale = 0.5

    lifepop = createSprite(width - width / 4, 50)
    lifepop.addImage(lifepopimg)
    lifepop.visible = false
    lifepop.scale = 0.55

    //lifepopimg

    title = createSprite(width / 2, height - 500)
    title.addImage(titleimg)
    title.visible = false

    title2 = createSprite(width / 2, title.height + 50)
    title2.addImage(titleimg2)
    title2.visible = false

    play = createImg("playnew.png")
    play.position(width / 2 , height - 125)
    play.size(220, 220)
    play.hide()

    about = createImg("how.png")
    about.position(width / 2 - 200, height - 125)
    about.size(220, 220)
    about.hide()

    /*  restart = createImg("restart.png")
      restart.position(width-170, height/1.5)
      restart.size(150, 150)
   restart.hide()*/


    inputbox1 = createInput()
    inputbox1.position(width / 8, height / 4)
    inputbox1.size(200, 25)
    inputbox1.hide()


    head1 = createElement("h2", " On a shelf or in your pocket,Have me near before you lock it. 'SEKY' ")
    // head1.html("Riddle 1")
    head1.style("color", "yellow")
    head1.position(50, inputbox1.y - 50)
    head1.size(1000, 25)
    head1.hide()



    inputbox2 = createInput()
    inputbox2.position(width - (width / 6), height / 4)
    inputbox2.size(200, 25)
    inputbox2.hide()


    head2 = createElement("h2", "So full of light, but always in shade.'MLPA' ")
    //head2.html()
    head2.style("color", "yellow")
    head2.position(width - width / 3, inputbox2.y - 50)
    head2.size(500, 25)
    head2.hide()



    inputbox3 = createInput()
    inputbox3.position(width / 2, height - (height / 4))
    inputbox3.size(200, 25)
    inputbox3.hide()


    head3 = createElement("h2", " What can you catch but not throw? 'LODC' ")
    // head3.html("Riddle 2")
    head3.style("color", "yellow")
    head3.position(width / 6, inputbox3.y)
    head3.style.backgroundColor = ("#fff")
    head3.size(500, 25)
    head3.hide()





    home = createImg("home.png")
    home.position(width / 2 - 170, height - 125)
    home.size(220, 220)
    home.hide()


    title.visible = false
    title2.visible = false
    play.hide()
    about.hide()

    //level clear sprites
    level1clear = createSprite(width / 2, height / 1.5)
    level1clear.addImage(levelclear1img)
    level1clear.scale = 4
    level1clear.visible = false


    level2clear = createSprite(width / 2, height / 2.5)
    level2clear.addImage(level3startimg)
    level2clear.scale = 2.5
    level2clear.visible = false

    //level 2 obj sprites
    l2obj1 = createSprite(100, 100)
    l2obj1.addImage(l2ob1img)
    l2obj1.scale = 0.25
    l2obj1.visible = false

    l2obj2 = createSprite(50, 50)
    l2obj2.addImage(l2ob2img)
    l2obj2.scale = 0.25
    l2obj2.visible = false

    l2obj3 = createSprite(100, 100)
    l2obj3.addImage(l2ob3img)
    l2obj3.scale = 0.25
    l2obj3.visible = false

    l2obj4 = createSprite(50, 50)
    l2obj4.addImage(l2ob4img)
    l2obj4.scale = 0.25
    l2obj4.visible = false

    l2obj5 = createSprite(100, 100)
    l2obj5.addImage(l2ob5img)
    l2obj5.scale = 0.25
    l2obj5.visible = false

    l2obj6 = createSprite(50, 50)
    l2obj6.addImage(l2ob6img)
    l2obj6.scale = 0.25
    l2obj6.visible = false

    l2obj7 = createSprite(100, 100)
    l2obj7.addImage(l2ob7img)
    l2obj7.scale = 0.25
    l2obj7.visible = false

    l2obj8 = createSprite(50, 50)
    l2obj8.addImage(l2ob8img)
    l2obj8.scale = 0.25
    l2obj8.visible = false

    player = createSprite(width / 2, height / 2, 50, 50)
    player.visible = false
    player.addImage(playerimgleft)
    player.setCollider("rectangle", 0, 0, player.width, (player.height) - 30)



    //l3 codes
    l3obj1 = createSprite(200, height - 100)
    l3obj1.addImage(l3obj4img)
    l3obj1.scale = 0.7

    bouquet = createSprite(width / 6, height / 6)
    bouquet.addImage(bouquetimg)
    bouquet.scale = 0.5

    l3obj2 = createSprite(width / 3, height / 1.5)
    l3obj2.addImage(l3obj3img)
    l3obj2.scale = 0.7

    ring = createSprite(width / 2 + width / 6, height / 7)
    ring.addImage(ringimg)


    l3obj3 = createSprite(width / 1.5, height / 2)
    l3obj3.addImage(l3obj2img)
    l3obj3.scale = 0.4

    perfume = createSprite(width / 2, height / 2.5)
    perfume.addImage(perfumeimg)
    perfume.scale = .5

    l3obj4 = createSprite(width - 100, height - 50)
    l3obj4.addImage(l3obj4img)
    l3obj4.scale = .75

    invisibleground = createSprite(width / 2, height/1.5, width, 20)
   invisibleground.visible = false

    //invisiblegroundvertical=createSprite(width-width/4.5,height-height/3,100,200)
    invisiblegroundhorizontal = createSprite(width / 2, height - 25, width, 40)
    invisiblegroundhorizontal.visible = false

    jasmine = createSprite(width - 100, height - 200)
    jasmine.addImage(jasmineimg)
    jasmine.scale = 0.5


    l3obj1.visible = false
    l3obj2.visible = false
    l3obj3.visible = false
    l3obj4.visible = false
    bouquet.visible = false
    perfume.visible = false
    ring.visible = false
    jasmine.visible = false




    //   l3obj1.debug = true
    l3obj1.setCollider("rectangle", 0, 0, (l3obj1.width), (l3obj1.height) / 1.25)

    //   l3obj4.debug = true
    l3obj4.setCollider("rectangle", 0, 0, (l3obj4.width) / 2, (l3obj4.height) / 1.25)

    //   l3obj2.debug = true
    l3obj2.setCollider("rectangle", 0, 0, (l3obj2.width) / 2, (l3obj2.height) / 1.25)

    //   l3obj4.debug = true
    l3obj3.setCollider("rectangle", 0, 0, (l3obj3.width) / 2, (l3obj3.height) / 1.25)

batGroup = new Group()

 //sounds
 diesound=loadSound("die1.mp3")
 getsound=loadSound("get.mp3")
 gameover=loadSound("gameover.mp3")


}

function draw() {
    if (gameState === "wait") {
        background(bgimg)
       // gamesound.play()

        title.visible = true
        title2.visible = true
        play.show()
        about.show()
        pop1.visible = false
        l3obj1.visible = false
        l3obj2.visible = false
        l3obj3.visible = false
        l3obj4.visible = false
        bouquet.visible = false
        perfume.visible = false
        ring.visible = false
        jasmine.visible = false
        //  restart.hide()

        levelpop.visible = false
        home.hide()

    }

    if (play.mousePressed(() => {
        gameState = "Level 1"
        background(0)
        pop1.visible = false
        about.hide()
        //    restart.hide()

    }))



        /*    if (restart.mousePressed(() => {
                gameState = "wait"
                background(bgimg)
               
        
            }))*/


        if (about.mousePressed(() => {
            gameState = "about"
            background(bgimg)
            pop1.visible = true
            title.visible = false
            title2.visible = false
            about.hide()
            home.show()
            //  restart.hide()

            levelpop.visible = false
        }))


            if (home.mousePressed(() => {
                gameState = "wait"
            }))



                if (gameState === "Level 1") {
                    background(level1bg)
                    title.visible = false
                    title2.visible = false
                    levelpop.addImage(level1popimg)
                    levelpop.visible = true
                    play.hide()
                    about.hide()
                    inputbox1.show()
                    head1.show()
                    inputbox2.show()
                    head2.show()
                    head3.show()
                    inputbox3.show()
                    // aboutl1.show()
                    home.hide()
                    pop1.visible = false
                    l3obj1.visible = false
                    l3obj2.visible = false
                    l3obj3.visible = false
                    l3obj4.visible = false
                    bouquet.visible = false
                    perfume.visible = false
                    ring.visible = false
                    jasmine.visible = false

                    about.hide()
                    //Riddle 1 and answer
                    answer1 = inputbox1.value()
                    console.log(answer1)

                    if (answer1.toLowerCase() === "keys") {
                        console.log("correct")
                        a1 = "correct"
                    }
                    else { console.log("wrong") }

                    //Riddle 2 and answer
                    answer2 = inputbox2.value()
                    console.log(answer2)

                    if (answer2.toLowerCase() === "lamp") {
                        console.log("correct")
                        a2 = "correct"


                    }
                    else {
                        console.log("wrong")
                    }

                    //Riddle 3 and answer
                    answer3 = inputbox3.value()
                    console.log(answer3)

                    if (answer3.toLowerCase() === "cold") {
                        console.log("correct")
                        a3 = "correct"

                    }
                    else {
                        console.log("wrong")
                    }

                    if (a1 === "correct" && a2 === "correct" && a3 === "correct") {
                        gameState = "Levelcleared"


                    }


                }


    if (gameState === "Levelcleared") {
        level1clear.visible = true
        inputbox1.hide()
        inputbox2.hide()
        inputbox3.hide()
        head1.hide()
        head2.hide()
        head3.hide()
        lifepop.visible = false
        levelpop.visible = false
        if (keyDown("e")) {
            gameState = "Level 2"
        }

    }


    if (gameState === "Level 2") {
        background(level2bg)
        level1clear.visible = false
        player.visible = true
        levelpop.visible = true
        levelpop.addImage(level2popimg)

        l3obj1.visible = false
        l3obj2.visible = false
        l3obj3.visible = false
        l3obj4.visible = false
        bouquet.visible = false
        perfume.visible = false
        ring.visible = false
        jasmine.visible = false
        // restart.hide()

        inputbox1.hide()
        inputbox2.hide()
        inputbox3.hide()
        head1.hide()
        head2.hide()
        head3.hide()
        about.hide()
        l2obj1.visible = true
        l2obj2.visible = true
        l2obj3.visible = true
        l2obj4.visible = true
        l2obj5.visible = true
        l2obj6.visible = true
        l2obj7.visible = true
        l2obj8.visible = true
        player.collide(invisibleground)

        if (frameCount % 20 == 0) {
            //obstacle 1
            l2obj1.x = random(50, width - 50)
            l2obj1.y = random(50, height - 50)

            //obstacle 2
            l2obj2.x = random(50, height - 50)
            l2obj2.y = random(50, height - 50)

            //obstacle 3
            l2obj3.x = random(50, width - 50)
            l2obj3.y = random(50, height - 50)

            //magic bottle
            l2obj4.x = random(50, height - 50)
            l2obj4.y = random(50, height - 50)


            //magic lamp
            l2obj5.x = random(50, width - 50)
            l2obj5.y = random(50, height - 50)

            //obstacle 4
            l2obj6.x = random(50, height - 50)
            l2obj6.y = random(50, height - 50)

            //ali's cap
            l2obj7.x = random(50, width - 50)
            l2obj7.y = random(50, height - 50)

            //obstacle 5
            l2obj8.x = random(50, height - 50)
            l2obj8.y = random(50, height - 50)
        }

        //level 2 obstacles touching
        if (player.isTouching(l2obj1) || player.isTouching(l2obj2) || player.isTouching(l2obj3) || player.isTouching(l2obj6) || player.isTouching(l2obj8)) {

            if (player.isTouching(l2obj1)) {
                textSize(100)
                fill("green")
               // text("life lost", width / 2, height / 2)
                l2obj1.destroy()
                life1 -= 1
                diesound.play()
            }


            if (player.isTouching(l2obj2)) {
                textSize(100)
                fill("green")
              //  text("life lost", width / 2, height / 2)
                l2obj2.destroy()
                life1 -= 1
                diesound.play()


            }


            if (player.isTouching(l2obj3)) {
                textSize(100)
                fill("green")
               // text("life lost", width / 2, height / 2)
                l2obj3.destroy()
                life1 -= 1
                diesound.play()


            }


            if (player.isTouching(l2obj6)) {
                textSize(100)
                fill("green")
              //  text("life lost", width / 2, height / 2)
                l2obj6.destroy()
                life1 -= 1
                diesound.play()


            }


            if (player.isTouching(l2obj8)) {
                textSize(100)
                fill("green")
                text("life lost", width / 2, height / 2)
                l2obj8.destroy()
                life1 -= 1
                diesound.play()


            }


        }

        /*     if (life === 4){
                 gameState="lost"
             }*/





        if (player.isTouching(l2obj7) || player.isTouching(l2obj5) || player.isTouching(l2obj4)) {
            if (player.isTouching(l2obj7)) {
                textSize(100)
                fill("red")
               // text("obj recvd", width / 2, height / 2)
                l2obj7.destroy()
                count += 1
                getsound.play()


            }


            if (player.isTouching(l2obj5)) {
                textSize(50)
               // text("obj recvd", width / 2, height / 2)
                l2obj5.destroy()
                count += 1
                getsound.play()


            }

            if (player.isTouching(l2obj4)) {
                textSize(50)
               // text("obj recvd", width / 2, height / 2)
                l2obj4.destroy()
                count += 1
                getsound.play()


            }
        }
        if (count === 3) {
            gameState = "Level2cleared"
        }




        if (keyDown("Right_Arrow")) {
            player.x += 5
            player.addImage(playerimgright)
        }

        if (keyDown("Left_Arrow")) {
            player.x -= 5
            player.addImage(playerimgleft)
        }


        if (keyDown("space")) {
            player.velocityY -= 2

        }

        player.velocityY += 0.8


    }

    if (gameState === "Level2cleared") {
        level2clear.visible = true
        player.visible = false


        if (keyDown("o")) {
            gameState = "Level 3"
            player.visible = true
            player.x = l3obj1.x - 10
            player.y = (l3obj1.y) - (player.y) / 9
            player.collide(l3obj1)
            //  player.debug=true
            player.depth = l3obj1.depth + 1
            player.scale = 0.75
        }

    }

    //level 3

    if (gameState === "Level 3") {
        background(level3bg)
        play.hide()
        level2clear.visible = false
        spawnobstacles()
        player.visible = true
        l2obj1.visible = false
        l2obj2.visible = false
        l2obj3.visible = false
        l2obj4.visible = false
        l2obj5.visible = false
        l2obj6.visible = false
        l2obj7.visible = false
        l2obj8.visible = false
        levelpop.visible = true
        l3obj1.visible = true
        l3obj2.visible = true
        l3obj3.visible = true
        l3obj4.visible = true
        bouquet.visible = true
        perfume.visible = true
        ring.visible = true
        jasmine.visible = true
        levelpop.addImage(level3popimg)
        levelpop.visible = true
        about.hide()

        for(i=0;i<batGroup.length;i++){
            if(player.isTouching(batGroup.get(i))){
                life1 -=1
                batGroup.get(i).destroy()
                diesound.play()

            }
        }

        //  restart.hide()

        if (player.isTouching(ring) || player.isTouching(bouquet) || player.isTouching(perfume)) {

            if (player.isTouching(ring)) {
                ring.destroy()
                score += 1
                getsound.play()
            }

            if (player.isTouching(bouquet)) {
                bouquet.destroy()
                score += 1
                getsound.play()

            }

            if (player.isTouching(perfume)) {
                perfume.destroy()
                score += 1
                getsound.play()

            }

            if (score === 3) {
                player.addImage(playerprince)
            }
        }

        if (score === 3 && player.isTouching(jasmine)) {
            gameState = "win"
            jasmine.destroy()


        }

        if (player.isTouching(invisiblegroundhorizontal)) {
            life1 -= 1
            player.x = l3obj1.x - 10
            player.y = (l3obj1.y) - (player.y) / 9
            diesound.play()

        }



        if (score < 3) {

            if (keyDown("Right_Arrow")) {
                player.x += 5
                player.addImage(playerimgright)
            }

            if (keyDown("Left_Arrow")) {
                player.x -= 5
                player.addImage(playerimgleft)
            }

            if (keyDown("space")) {
                player.velocityY -= 2

            }

            player.velocityY += 0.8

        }


        else if (score >= 3) {
            player.addImage(playerprince)



            if (keyDown("Right_Arrow")) {
                player.x += 5
                player.addImage(playerprince)
            }

            if (keyDown("Left_Arrow")) {
                player.x -= 5
                player.addImage(playerprinceleft)
            }

            if (keyDown("space")) {
                player.velocityY -= 2

            }

            player.velocityY += 0.8

        }



        if (player.isTouching(l3obj1) || player.isTouching(l3obj2) || player.isTouching(l3obj3) || player.isTouching(l3obj4)) {

            if (player.isTouching(l3obj1)) {
                player.collide(l3obj1)
            }

            if (player.isTouching(l3obj2)) {
                player.collide(l3obj2)
            }

            if (player.isTouching(l3obj3)) {
                player.collide(l3obj3)
            }

            if (player.isTouching(l3obj4)) {
                player.collide(l3obj4)
            }


        }



    }





    /*   if (aboutl1.mousePressed(() => {
           gameState = "aboutlevel1"
       }))
           if (gameState === "aboutlevel1") {
               pop1.visible = true
   
               head1.hide()
               inputbox1.hide()
   
               head2.hide()
               inputbox2.hide()
   
               head3.hide()
               inputbox3.hide()
               about.hide()
               home.show()
   
           }*/

    if (life1 <= 0) {
        gameState = "over"
    }

    if (gameState === "over") {
        background(overimg)
        levelpop.visible = false
        lifepop.visible = false
        player.visible = false
        levelpop.visible = false
        batGroup.destroyEach()
        level2clear.visible=false
gamesound.stop()
        //   restart.show()
        l2obj1.visible = false
        l2obj2.visible = false
        l2obj3.visible = false
        l2obj4.visible = false
        l2obj5.visible = false
        l2obj6.visible = false
        l2obj7.visible = false
        l2obj8.visible = false
        levelpop.visible = false
        l3obj1.visible = false
        l3obj2.visible = false
        l3obj3.visible = false
        l3obj4.visible = false
        bouquet.visible = false
        perfume.visible = false
        ring.visible = false
        jasmine.visible = false



    }


    if (gameState === "win") {
        background(winbgimg)
        play.hide()
        gamesound.stop()

        about.hide()
        batGroup.destroyEach()
        winpop.visible = true
        lifepop.visible = false
        level2clear.visible = false
        player.visible = false
        l2obj1.visible = false
        l2obj2.visible = false
        l2obj3.visible = false
        l2obj4.visible = false
        l2obj5.visible = false
        l2obj6.visible = false
        l2obj7.visible = false
        l2obj8.visible = false
        levelpop.visible = false
        l3obj1.visible = false
        l3obj2.visible = false
        l3obj3.visible = false
        l3obj4.visible = false
        bouquet.visible = false
        perfume.visible = false
        ring.visible = false
        jasmine.visible = false
        levelpop.visible = false

        
    }
    drawSprites()

    if (gameState === "Level 1" || gameState === "Level 2" || gameState === "Level 3") {
        textSize(30)
        fill("red")


        lifepop.visible = true
        text(life1, lifepop.x + 20, lifepop.y + 5)

    }


}

function spawnobstacles(){
    if(frameCount % 180 == 0 ){
        bat=createSprite(width-10,height/2)
        bat.y=Math.round(random(50,height-100))
        bat.velocityX = -4
        bat.addImage(batimg)
        bat.scale=.85

        batGroup.add(bat)
       // bat.debug=true
        bat.setCollider("rectangle",0,0,bat.width/2,bat.height/2)

    }
}


