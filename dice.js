


// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();                                 //   cannot inspect or right click on this page 
// });


let deviceWidth = window.innerWidth;

//for large screen like laptop
if(deviceWidth>1200){
    let tickets = [
        {
            name : "start",

        },
        {
            name : "India",
            buyPrice : 3050,
            sellPrice : 3700,
            rent : [300,550,1600,3800],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            name : "Nepal",
            buyPrice : 3750,
            sellPrice : 4500,
            rent : [450,1450,2500,4050],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },

        {
            money : 1000,
            text : "Get $1000",
        },
        {
            name : "Pakistan",
            buyPrice : 2100,
            sellPrice : 3000,
            rent : [200,1450,2500,4050],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            name : "Iran",
            buyPrice : 3200,
            sellPrice : 3000,
            rent : [450,1450,2500,4050],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            name : "guess Game",
        },
        {
            name : "Russia",
            buyPrice : 2500,
            sellPrice : 3250,
            rent : [300,800,1650,2800],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            money : 500,
            text : "Get $500",
        },
        {
            name : "China",
            buyPrice : 2150,
            sellPrice : 4000,
            rent : [150,700,2000,3750],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            money : 1000,
            text : "Get $1000"
        },
        {
            name : "Japan",
            buyPrice : 1800,
            sellPrice : 4500,
            rent : [200,1150,2300,300],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            money : 500,
        },
        {
            name : "Thailand",
            buyPrice : 2500,
            sellPrice : 2100,
            rent : [350,550,1500,1800],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            money : 500,
            text : "Get $500",
        },
        {
            name : "Australia",
            buyPrice : 2050,
            sellPrice : 4000,
            rent : [250,1150,2500,3750],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            money : 1000,
            text : "Get $1000"
        },
        {
            name : "France",
            buyPrice : 1750,
            sellPrice : 2500,
            rent : [200,950,1500,2650],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            name : "Blue start point",
        },
        {
            name : "Italy",
            buyPrice : 4500,
            sellPrice : 5700,
            rent : [700,2000,3500,4700],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            name : "London",
            buyPrice : 3500,
            sellPrice : 3000,
            rent : [300,900,1750,2200],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            money : 500,
            text : "Get $500",
        },
        {
            name : "US",
            buyPrice : 4150,
            sellPrice : 3500,
            rent : [400,1650,2500,3750],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            name : "Brazil",
            buyPrice : 2500,
            sellPrice : 2200,
            rent : [350,1000,2500,3600],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        }
    ];
 
    let restart = document.querySelector(".restart");
    let about = document.querySelector(".about");
   // Start button 
    window.onload = function() {
            const fullscreenButton = document.getElementById("fullscreenButton");   //start button work like as fullscreen also
            fullscreenButton.style.display = "block"; // Display the button
            fullscreenButton.onclick = () => {
                document.getElementById("startSound").play();
                setTimeout(()=>{
                    diceActivate1();      //dice1 button activate  
                    diceDisActivate2();    //dice2 disactivate
                    diceBox1.style.display = '';
                    diceBox2.style.display = '';
                    restart.style.display = "flex";
                    about.style.display = "flex";
                },5000);      
                document.querySelector("body").style.overflow = "hidden";
                fullscreenButton.style.display = "none";
                fullscreenButton.style.zIndex = '1';
                // Request fullscreen mode when the button is clicked
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                    document.documentElement.msRequestFullscreen();
                }
            };
    };
  
    restart.addEventListener("click", () => {
        document.getElementById("skipSound").play();   //click sound
        document.querySelector(".restartConfirm").style.display = "flex";
    });
   
    document.querySelector(".yes").onclick = function(){
        document.getElementById("skipSound").play();   //click sound
        location.reload(); // Refresh the page
    }
    document.querySelector(".no").onclick = function(){
        document.getElementById("skipSound").play();   //click sound
        document.querySelector(".restartConfirm").style.display = "none";
      
    }
    about.onclick = function(){
        document.getElementById("skipSound").play();
        document.querySelector(".aboutbox").style.display = "flex";
    }
   document.querySelector(".crossBtn").onclick = function(){
    document.querySelector(".aboutbox").style.display = "none";
    document.getElementById("skipSound").play();

   }
    let p1DiceActivate = false; 
    let p2DiceActivate = false;
      
    let diceBox1 = document.querySelector(".diceBox1");
    let diceBox2 = document.querySelector(".diceBox2");
    diceBox1.style.display = 'none';
    diceBox2.style.display = 'none';

     function diceActivate1(){
        p1DiceActivate = true; 
        diceBox1.style.animation = "move1 1s linear infinite";
        console.log(p1DiceActivate);
    }
    function diceDisActivate1(){
        p1DiceActivate = false; 
        diceBox1.style.animation = "none";
    }
    function diceActivate2(){
        p2DiceActivate = true; 
        diceBox2.style.animation = "move2 1s linear infinite";
    }
    function diceDisActivate2(){
        p2DiceActivate = false; 
        diceBox2.style.animation = "none";
    }
    
 
    let vsComputer = document.querySelector(".computer");
    let multplayer = document.querySelector(".multiplayer");
    

    let chooseComputer;

     
     multplayer.onclick = function(){
        chooseComputer = false;
        setTimeout(() => {
            document.querySelector(".welcomePage").style.display = "none";
        }, 1000);
        
        document.getElementById("skipSound").play();
        console.log(chooseComputer);
        PlayMultiplayer();
     }

     vsComputer.onclick = function(){
        diceActivate1();      //dice1 button activate  
        diceDisActivate2();
        chooseComputer = true;
        setTimeout(() => {
            document.querySelector(".welcomePage").style.display = "none";
        }, 1000);
        document.getElementById("skipSound").play();
        console.log(chooseComputer);
        PlayComputer();
     }
   

 function PlayComputer(){

     //name change of player2
     document.querySelector(".player2 .player2Name").innerText = "Computer";
          // Tickect Info
       let ticName = document.querySelector(".ticName");
       let buy = document.querySelector(".buy");
       let sell = document.querySelector(".sell");
       let r1 = document.querySelector(".r1");
       let r2 = document.querySelector(".r2");
       let r3 = document.querySelector(".r3");
       let r4 = document.querySelector(".r4");
   
  
    let buyBtn1 = document.querySelector(".buybtn1");             //buybtn at player1 dashboard
    let skipBtn1 = document.querySelector(".skipbtn1");             //skip btn
    
    function btnActivate1(){                                       //Activate buy and skip button
        buyBtn1.style.display = 'flex';
        skipBtn1.style.display = 'flex';
    };
    function btnDisActivate1(){                                //disActivate buy and skip function
        buyBtn1.style.display = 'none';
        skipBtn1.style.display = 'none';
    };
    btnDisActivate1();                                          //initially disactivate buy and skip buttons of player1
    
    let diceNum = 1;                                           // for Green Pawn    initial assingn value
    let vlPositionOfp1 = 0;                                    //vertical position of green pawn 
    let  hlPositionOfp1 =0;                                    //horizontal ... ... .. 
    let ticCount =0;                                           //track positions 0 to 23
    let player1Pawn = document.querySelector(".green");        //green pawn
    let p1track =0;                                            //track for tickets object
    
                          

   let  shallowCopy = { ...tickets};                           //shallo copy of tickets                
   
   let p1Amount = document.querySelector(".p1-balance");       //player1 amount show element
   let AmountOfP1 = 2500;                                    //player1 amount data
   p1Amount.innerText = `$${AmountOfP1}`;


   function showticket1(){                                      //function for show the ticket data
    ticName.innerText = `${shallowCopy[p1track].name}`;
    buy.innerText = `Buy : $${shallowCopy[p1track].buyPrice}`;
    sell.innerText = `Sell : $${shallowCopy[p1track].sellPrice}`;
    r1.innerText = `$${shallowCopy[p1track].rent[0]}`;
    r2.innerText = `$${shallowCopy[p1track].rent[1]}`;
    r3.innerText = `$${shallowCopy[p1track].rent[2]}`;
    r4.innerText = `$${shallowCopy[p1track].rent[3]}`;
}


document.addEventListener("keydown",async function(event) {             // using left and right arrow keys for buy1 and skip1 buttons
                           
    if (event.key === "Alt") {              //ctrl key for player1 dice
        await Activity1();
        
     } 
   // else if(event.key === "Control"){
    //     await Activity2();              //alt key for player2 dice

    // }
     
});
  
 document.getElementById("dice").addEventListener("click", async () => { 
       await Activity1();

 });
  async function Activity1(){
        if(p1DiceActivate == true){
         diceDisActivate1();

        diceNum = rollDice();                                 // Rolled player1 dice

        console.log("Rolled dice number:", diceNum);

        player1Pawn.style.zIndex = "5";                      //used for upper dawn concept of pawns 
        let delay = 1000;
        for (let i = 0; i < diceNum; i++) {
            setTimeout(() => {
                move1();                        // move player pawn
            }, delay);
            delay += 500;
        }
        if(p1track+diceNum<=23){
            p1track += diceNum;               //set p1track values
        }else{
            p1track =p1track+diceNum-24;
        }
        console.log(p1track); 


        //track places
    
        if(p1track==1 ||p1track==2 ||p1track==4 ||p1track==5 ||p1track==7 ||p1track==9 ||p1track==11 ||p1track==13 ||p1track==15 ||p1track==17 ||p1track==19 ||p1track==20 ||p1track==22 ||p1track==23){
            if(shallowCopy[p1track].p2Buy == false && shallowCopy[p1track].p1Buy == false){
                if(AmountOfP1>shallowCopy[p1track].buyPrice){
                    let delay = diceNum*500;
                    console.log(shallowCopy[p1track].name);
                    setTimeout(()=>{
                        showticket1();
                        btnActivate1();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);
                    buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                    buyBtn1 = document.querySelector(".buybtn1");
                  

                    buyBtn1.addEventListener("click",async ()=>{
                        
                        await Buy1();
                        
                    });


                    function Buy1(){
                          // assignment for p1Buy
                          shallowCopy[p1track].p1Buy = true; 
                    
                         // Hide ticket and update visuals
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                        },1000);
                         document.querySelector(`.Greenstamp${p1track + 1}`).style.opacity = "1";

                        // Calculate remaining amount
                          let remainAmount = AmountOfP1 - shallowCopy[p1track].buyPrice;
                          p1Amount.innerText = `$${remainAmount}`;
                          AmountOfP1 = remainAmount;

                         // Deactivate buttons
                         btnDisActivate1();
                         //playSound
                        document.getElementById("buySound").play();
                        document.querySelector(".player1-notice p").innerText = `-$${shallowCopy[p1track].buyPrice}`;
                        diceActivate2();
                        Activity2();
                    }
                    skipBtn1.addEventListener("click",async ()=>{
                        await skip1();
                      
                    });
                    function skip1(){
                        btnDisActivate1();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate2();
                            Activity2();
                            
                            
                        },1000);
                    }
        
                }
                else{
                    document.querySelector(".player1-notice p").innerText = "Amount not enough";
                    diceActivate2();
                    Activity2();

                }

            }
            else  if(shallowCopy[p1track].p2Buy == true){          //give rent 
                let delay = diceNum*500;
               setTimeout(()=>{
                    showticket1();
                    
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p1track].rent[shallowCopy[p1track].rentCount];
                    AmountOfP1 -= rentAmount;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    AmountOfP2 += rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".player1-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(".player2-notice p").innerText = `+$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p1track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() =>{
                        document.querySelector(`.r${shallowCopy[p1track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p1track].rentCount++;
                        if (shallowCopy[p1track].rentCount > 3) {
                            shallowCopy[p1track].rentCount = 0;
                        }
                        if(AmountOfP1<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("gameOverSound").play();
                            p1Amount.innerText = `-$${AmountOfP1*(-1)}`;
                            const imagePath2 = './assets/gameOver.jpg';
                            document.querySelector(".gameResult").style.backgroundImage = `url(${imagePath2})`;
                            diceDisActivate1();
                            diceDisActivate2();
                            let playAgainBtn = document.querySelector(".playAgain");
                            playAgainBtn.addEventListener("click", () => {
                                document.getElementById("skipSound").play();   //click sound
                                location.reload(); // Refresh the page
                            });
                        }
                        else{
                            diceActivate2();
                            Activity2();
                        }
                      
                    }, 2000);
               },delay);
            }

             //for sell the ticket 

            else if(shallowCopy[p1track].p1Buy == true){       
                if(AmountOfP1<shallowCopy[p1track].sellPrice){     //when amount < ticket sell price
                    let delay = diceNum*500;
                    console.log(shallowCopy[p1track].name);
                    setTimeout(()=>{
                        showticket1();
                        buyBtn1.innerText ="Sell";
                        
                        btnActivate1();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);

                    buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                    buyBtn1 = document.querySelector(".buybtn1");
                  
    
                    buyBtn1.addEventListener("click",async ()=>{                      //works as sell btn
                        await sell1();
                        
                    });
                    function sell1(){
                          // assignment for p1Buy
                          shallowCopy[p1track].p1Buy = false;    //update in tickets obj
                          shallowCopy[p1track].rentCount = 0;
                    
                         // Hide ticket and update visuals
                        setTimeout(()=>{
                            buyBtn1.innerText ="Buy";                                 // rechange name of button
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate2();
                            Activity2();
                        },1000);
                         document.querySelector(`.Greenstamp${p1track + 1}`).style.opacity = "0";
    
                        // Calculate remaining amount
                           AmountOfP1 = AmountOfP1 + shallowCopy[p1track].sellPrice;       //added sellprice in amount
                          p1Amount.innerText = `$${AmountOfP1}`;
    
                         // Deactivate buttons
                         btnDisActivate1();
                         //playSound
                        document.getElementById("buySound").play();
                        document.querySelector(".player1-notice p").innerText = `+$${shallowCopy[p1track].sellPrice}`;
                    }

                    skipBtn1.addEventListener("click",async ()=>{
                      await skip1();
                    });
                    function skip1(){
                        btnDisActivate1();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            buyBtn1.innerText ="Buy";
                            diceActivate2();
                            Activity2();
                        },1000);
                    } 

                }
                else{
                    document.querySelector(".player1-notice p").innerText = `Amount greater than sellPrice`;
                    diceActivate2();
                    Activity2();
                }
            }
            else{
                diceActivate2();
                Activity2();
            }
        }
        //track   get money places
        else if(p1track==3 ||p1track==8 ||p1track==10 ||p1track==14 ||p1track==16||p1track==21){
            let delay = diceNum*500;
            setTimeout(()=>{

                  document.querySelector(".getmoney").innerText = `Get $${shallowCopy[p1track].money}`;            
                  document.getElementById("coinSound").play();                                                    //play sound
                  document.querySelector(".player1-notice p").innerText = `+$${shallowCopy[p1track].money}`;
                  document.querySelector(".getmoney").style.opacity ='1';
                  AmountOfP1 = AmountOfP1 + shallowCopy[p1track].money;
                  p1Amount.innerText = `$${AmountOfP1}`;
                  document.getElementById("coinSound").play();

                  setTimeout(() => {
                    document.querySelector(".getmoney").style.opacity ='0'; 
                    diceActivate2();   
                    Activity2();                             
                }, 2000);

            },delay);

           
           
        }
        //track fine place
        else if(p1track==12){
            if(AmountOfP1>500){
                let delay = diceNum*500;
                setTimeout(()=>{
    
                      document.querySelector(".givefine").innerText = `Fine $${shallowCopy[p1track].money}`;
                      document.getElementById("loseSound").play();
                      document.querySelector(".player1-notice p").innerText = `-$${shallowCopy[p1track].money}`;
                      document.querySelector(".givefine").style.opacity ='1';
                      AmountOfP1 = AmountOfP1 - shallowCopy[p1track].money;
                      p1Amount.innerText = `$${AmountOfP1}`;
                      setTimeout(() => {
                        document.querySelector(".givefine").style.opacity ='0';
                        diceActivate2();
                        Activity2();
                    }, 2000);
    
                },delay);
            }
            else{
                diceActivate2();
                Activity2();
                document.querySelector(".player1-notice p").innerText = "Amount less than $500";
            }
           

        }
          //track guess game

        else if(p1track==6){

           if(AmountOfP1>=500){
            let delay = diceNum*500;
            setTimeout(()=>{
                buyBtn1.innerText ="Play";    //buy btn will work as play
                        
                btnActivate1();
                 
                document.querySelector(".guessGame").style.opacity ='1';   //game layout visible

                buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                buyBtn1 = document.querySelector(".buybtn1");

                buyBtn1.addEventListener("click",async ()=>{         //it working as play btn
                   await play1();
                   
                });
                function play1(){
                    document.getElementById("skipSound").play(); //click sound
                    btnDisActivate1();
                    buyBtn1.innerText ="Buy";                //Re change name of btn play to buy
                    document.querySelector(".player1-notice p").innerText = `-$${500}`;
                    AmountOfP1 -=500;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    document.querySelector(".guessGame").style.opacity ='0'; 

                    document.querySelector(".guessPress").style.display = 'flex';


                    document.querySelectorAll('.guessPress button').forEach(button => {
                        button.replaceWith(button.cloneNode(true));
                    });

                    const guessNumber = Math.floor(Math.random() * 5) + 1;
                    console.log(guessNumber);
                    let enterNum = 0;
                    document.querySelector(".guess1").addEventListener("click",()=>{
                        enterNum = 1;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess2").addEventListener("click",()=>{
                        enterNum = 2;
                        document.querySelector(".guessPress").style.display ='none';  
                        showGuessResult();
                    });
                    document.querySelector(".guess3").addEventListener("click",()=>{
                        enterNum = 3;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess4").addEventListener("click",()=>{
                        enterNum = 4;
                        document.querySelector(".guessPress").style.display ='none';  
                        showGuessResult();
                    });
                    document.querySelector(".guess5").addEventListener("click",()=>{
                        enterNum = 5;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });

                   function showGuessResult(){
                    if(enterNum == guessNumber){
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.querySelector(".player1-notice p").innerText = `+$${2500}`;
                        AmountOfP1 +=2500;
                        document.getElementById("coinSound").play();
                        p1Amount.innerText = `$${AmountOfP1}`;
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            diceActivate2();
                            Activity2();
                        },2500);

                    }
                    else{
                        const imagePath = './assets/guessLoss.jpg';

                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath})`;
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.getElementById("loseSound").play(); 
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            const imagePath2 = './assets/guessWin.jpg';
                            document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath2})`;
                            diceActivate2();
                            Activity2();
                        },2500);

                    }

                   }
                }
                skipBtn1.addEventListener("click",async ()=>{
                 await skip1();
                });
                function skip1(){
                    btnDisActivate1();
                    document.getElementById("skipSound").play();
                    setTimeout(()=>{
                        document.querySelector(".guessGame").style.opacity ='0';
                        buyBtn1.innerText ="Buy";
                        diceActivate2();   
                        Activity2();
                    },1000);
                }
               
            },delay);
           }
           else{

            diceActivate2(); 
            let delay = diceNum*1000;

            setTimeout(await Activity2,4000);
           
           }

        }
        else{
            diceActivate2();
            let delay = diceNum*1000;
            setTimeout(await Activity2,4000);
        }
    }

}
  
  

    function rollDice() {
        // Generate a random number between 1 and 6
        diceNum = Math.floor(Math.random() * 6) + 1;
        // diceNum = 6;
        
        // Play rolling sound
        let rollSound = document.getElementById("rollSound");
        rollSound.play();
        rollSound.volume = 0.2;

        // Define final rotations to match the faces correctly
        const rotations = {
             1: "rotateX(0deg) rotateY(0deg)",     // Face 1 (front)
             2: "rotateX(0deg) rotateY(180deg)",   // Face 2 (back)
             3: "rotateX(-90deg) rotateY(0deg)",    // Face 3 (top)
             4: "rotateX(90deg) rotateY(0deg)",   // Face 4 (bottom)
             5: "rotateX(0deg) rotateY(-90deg)",   // Face 5 (left)
             6: "rotateX(0deg) rotateY(90deg)"     // Face 6 (right)
        };

         // Generate additional random rotation for faster spinning effect
         const randomRotationX = Math.floor(Math.random() * 4) * 720; // Up to 4 full spins (720 degrees)
         const randomRotationY = Math.floor(Math.random() * 4) * 720;
         const randomRotationZ = Math.floor(Math.random() * 4) * 720;

         // Use the diceNum to set the correct rotation for the face, adding random spins
         document.getElementById("dice").style.transition = "transform 0.7s ease-out"; // Faster and smoother transition
         document.getElementById("dice").style.transform = 
             `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg) ` + rotations[diceNum];

        return diceNum;
    }


    
     //position of palyer 1 from start
     function moveUp1(){

        if(ticCount==0){
            player1Pawn.style.top = `-4.25rem`
            vlPositionOfp1 = -4.25;
            player1Pawn.style.left = `0.85rem`

        }
        else if(ticCount==5){
            vlPositionOfp1 -= 1;
            player1Pawn.style.top = `${vlPositionOfp1 -3.8}rem`;
            vlPositionOfp1 -= 3.8;
            player1Pawn.style.transform = "rotate(90deg)";
        }
        else{
            vlPositionOfp1 -= 3.8;
            player1Pawn.style.top = `${vlPositionOfp1}rem`;
        }
      
        ticCount++;
    }

    function moveDown1(){
        
        if(ticCount==12){
            vlPositionOfp1 += 1.05;
            player1Pawn.style.top = `${vlPositionOfp1}rem`;
            // vlPositionOfp1 += 3.8;
        }
        else if(ticCount==17){
            vlPositionOfp1 += 1;
            player1Pawn.style.top = `${vlPositionOfp1 +3.8}rem`;
            vlPositionOfp1 += 3.8;
            player1Pawn.style.transform = "rotate(-90deg)";
            
        }
        else{
            player1Pawn.style.top = `${vlPositionOfp1 +3.8}rem`;
            vlPositionOfp1 += 3.8;
        }
       
        ticCount++;
    }

    function moveRight1(){
        
        if(ticCount==6){
            player1Pawn.style.left = `6rem`
            hlPositionOfp1 = 6;
        }
        else if(ticCount==11){
            hlPositionOfp1 += 1.25;
            player1Pawn.style.left = `${hlPositionOfp1 + 3.8}rem`;
            vlPositionOfp1 += 3.8;
             player1Pawn.style.transform = "rotate(180deg)";

        }
        else{
            player1Pawn.style.left = `${hlPositionOfp1 + 3.75}rem`;
            hlPositionOfp1 += 3.75;
        }
       
        ticCount++;
    }

    function moveLeft1(){
        if(ticCount==18){
            hlPositionOfp1 -= 1.25;
            player1Pawn.style.left = `${hlPositionOfp1}rem`;
           
            // hlPositionOfp1 -= 3.75;
            // player1Pawn.style.left = `6.9rem`
            // hlPositionOfp1 = 7;
        }
        else if(ticCount==23){
            
            player1Pawn.style.left = `${2}rem`;
            player1Pawn.style.top = `${1}rem`;
            player1Pawn.style.transform = "rotate(0deg)";
            
        }
        else{
            player1Pawn.style.left = `${hlPositionOfp1 - 3.75}rem`;
            hlPositionOfp1 -= 3.75;
        }
        ticCount++;
    
    }

    async function move1() { 
         
        if(ticCount>23){
            ticCount=0;
        }
        
        if(ticCount >= 0 && ticCount <= 5) {
           await moveUp1();
            console.log("up");
        }
        else if(ticCount>=6 && ticCount<=11){
          await  moveRight1();
            console.log("Right");
        }
        else if(ticCount>=12 && ticCount<=17){
           await moveDown1();
            console.log("Down");
        }
        else if(ticCount>=18 && ticCount<=23){
         await   moveLeft1();
            console.log("Left");
        }

        let pawnSound = document.getElementById("pawnSound");
        pawnSound.play();

        return ticCount;
       
        
    }
    



        // Similar logic can be used for the second dice

        let buyBtn2 = document.querySelector(".buybtn2");               //buybtn at player2 dashboard
        let skipBtn2 = document.querySelector(".skipbtn2");             //skip btn
        function btnActivate2(){                                        //Activate buy and skip button
            buyBtn2.style.display = 'flex';
            skipBtn2.style.display = 'flex';
        };
        function btnDisActivate2(){                                     //disActivate buy and skip function
            buyBtn2.style.display = 'none';
            skipBtn2.style.display = 'none';
        };
        btnDisActivate2();                                              //initially disactivate buy and skip buttons of player2


        let diceNum2 = 1;                                               // for Green Pawn
        let vlPositionOfp2 = 0;                                         //
        let  hlPositionOfp2 =0;
        let ticCount2 =0;
        let player2Pawn = document.querySelector(".blue");
        let p2track =18;
        


        let p2Amount = document.querySelector(".p2-balance");       //player1 amount show element
        let AmountOfP2 = 2500;                                    //player1 amount data
        p2Amount.innerText = `$${AmountOfP2}`;
     
     
        function showticket2(){                                      //function for show the ticket data
         ticName.innerText = `${shallowCopy[p2track].name}`;
         buy.innerText = `Buy : $${shallowCopy[p2track].buyPrice}`;
         sell.innerText = `Sell : $${shallowCopy[p2track].sellPrice}`;
         r1.innerText = `$${shallowCopy[p2track].rent[0]}`;
         r2.innerText = `$${shallowCopy[p2track].rent[1]}`;
         r3.innerText = `$${shallowCopy[p2track].rent[2]}`;
         r4.innerText = `$${shallowCopy[p2track].rent[3]}`;
        }


  
    // document.getElementById("dice2").addEventListener("click", async () => { 
    //   await  Activity2();
    // });
    
   async function Activity2(){

    setTimeout(async()=>{

   
     if(p2DiceActivate==true){
            diceNum2 = rollDice2();
            diceDisActivate2();
            console.log("Rolled dice 2 number:", diceNum2);

            let delay = 1000;

            player1Pawn.style.zIndex = "1";   //uper on blue

            for(let i=0;i<diceNum2;i++){
                if(ticCount2>23){
                   ticCount2=0;
                }  
                setTimeout( await move2,delay);
                delay += 500;
            }
            if(p2track-diceNum2>0){
                p2track -=diceNum2;
            }
            else if(p2track-diceNum2==0){
                p2track =0;
            }
            else {
                p2track = (24 + p2track-diceNum2);
            }
            console.log(p2track);


                 //track places
    
        if(p2track==1 ||p2track==2 ||p2track==4 ||p2track==5 ||p2track==7 ||p2track==9 ||p2track==11 ||p2track==13 ||p2track==15 ||p2track==17 ||p2track==19 ||p2track==20 ||p2track==22 ||p2track==23){
            if(shallowCopy[p2track].p1Buy == false && shallowCopy[p2track].p2Buy == false){
                if(AmountOfP2>shallowCopy[p2track].buyPrice){
                    let delay = diceNum2*500;
                    console.log(shallowCopy[p2track].name);
                    setTimeout(async()=>{
                       await showticket2();
                       await btnActivate2();
                       document.querySelector(".tickets").style.opacity = '1';
                        await Buy2();

                    },delay);
                    buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                    buyBtn2 = document.querySelector(".buybtn2");
                  

                  //  buyBtn2.addEventListener("click",async ()=>{
                        
                      
                    //    await skip2();

                //    });
                    function Buy2(){
                           // assignment for p1Buy
                           shallowCopy[p2track].p2Buy = true; 
                         
                           // Calculate remaining amount
                             let remainAmount = AmountOfP2 - shallowCopy[p2track].buyPrice;
                             p2Amount.innerText = `$${remainAmount}`;
                             AmountOfP2 = remainAmount;
                            // Deactivate buttons
                            //playSound
                          
                         
                    
                           // Hide ticket and update visuals
                          setTimeout(()=>{
                             document.querySelector(".player2-notice p").innerText = `Bought ticket : -$${shallowCopy[p2track].buyPrice}`;
                             document.getElementById("buySound").play();
                             document.querySelector(`.Bluestamp${p2track + 1}`).style.opacity = "1";
                              document.querySelector(".tickets").style.opacity = '0';
                              diceActivate1();
                              btnDisActivate2();
                          },2000);
                          
                    }
                    function skip2(){
                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate1();
                            
                        },2000);
                    }

                    skipBtn2.addEventListener("click",()=>{

                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate1();
                            
                        },1000);
                    })

                }
                else{
                    document.querySelector(".player2-notice p").innerText = "Amount not enough";
                    diceActivate1();
                }

            }
            
            else  if(shallowCopy[p2track].p1Buy == true){          //give rent 
                let delay = diceNum2*500;
               setTimeout(()=>{
                    showticket2();
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p2track].rent[shallowCopy[p2track].rentCount];
                    AmountOfP2 -= rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    AmountOfP1 += rentAmount;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    document.querySelector(".player2-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(".player1-notice p").innerText = `+$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p2track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() => {
                        document.querySelector(`.r${shallowCopy[p2track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p1track].rentCount++;
                        if (shallowCopy[p1track].rentCount > 3) {
                            shallowCopy[p1track].rentCount = 0;
                        }
                        if(AmountOfP2<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("winSound").play();
                            p2Amount.innerText = `-$${AmountOfP2*(-1)}`;
                            const imagePath1 = './assets/player1Wins.jpg';
                            document.querySelector(".gameResult").style.backgroundImage = `url(${imagePath1})`;
                            diceDisActivate1();
                            diceDisActivate2();
                            let playAgainBtn = document.querySelector(".playAgain");
                            playAgainBtn.addEventListener("click", () => {
                                document.getElementById("skipSound").play();   //click sound
                                location.reload(); // Refresh the page
                            });
                        }
                        else{
                            diceActivate1();
                        }
                    }, 2000);


               },delay);
            }

             //for sell the ticket 
             
            else if(shallowCopy[p2track].p2Buy == true){       
                if(AmountOfP2<shallowCopy[p2track].sellPrice){     //when amount < ticket sell price
                    let delay = diceNum*500;
                    console.log(shallowCopy[p2track].name);
                    setTimeout(async()=>{
                      await  showticket2();
                        buyBtn2.innerText ="Sell";
                      await  btnActivate2();
                        document.querySelector(".tickets").style.opacity = '1';
                        await sell2();
                    },delay);
                    buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                    buyBtn2 = document.querySelector(".buybtn2");
                  
    
                   // buyBtn2.addEventListener("click",async()=>{     //works as sell btn
                     

                    // });

                    
                    function sell2(){
                              // assignment for p1Buy
                              shallowCopy[p2track].p2Buy = false;    //update in tickets obj
                              shallowCopy[p2track].rentCount = 0;
                        
                             // Hide ticket and update visuals
                            setTimeout(()=>{
                                buyBtn2.innerText ="Buy";                                 // rechange name of button
                                document.querySelector(".tickets").style.opacity = '0';
                                diceActivate1();
                                btnDisActivate2();
                            },2000);
                             document.querySelector(`.Bluestamp${p2track + 1}`).style.opacity = "0";
        
                            // Calculate  amount
                               AmountOfP2 = AmountOfP2 + shallowCopy[p2track].sellPrice;       //added sellprice in amount
                              p2Amount.innerText = `$${AmountOfP2}`;
        
                             // Deactivate buttonn
                             //playSound
                            document.getElementById("buySound").play();
                            document.querySelector(".player2-notice p").innerText = `Sold ticket : +$${shallowCopy[p2track].sellPrice}`;
                    }

                    skipBtn2.addEventListener("click",()=>{
                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            buyBtn2.innerText ="Buy";
                            diceActivate1();
                            
                        },1000);
                    })
    
                }
                else{
                    document.querySelector(".player2-notice p").innerText = `Amount greater than sellPrice`;
                    diceActivate1();
                }
            }



            else if(shallowCopy[p2track].p1Buy == true){    //for giving rent

                let delay = diceNum2*500;
                setTimeout(()=>{
                    showticket2();
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p2track].rent[shallowCopy[p2track].rentCount];
                    AmountOfP2 -= rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".player2-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p2track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() => {
                        document.querySelector(`.r${shallowCopy[p2track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p2track].rentCount++;
                        if (shallowCopy[p2track].rentCount > 3) {
                            shallowCopy[p2track].rentCount = 0;
                        }
                        if(AmountOfP2<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("coinSound").play();
                            p2Amount.innerText = `-$${AmountOfP2*(-1)}`;
                            diceDisActivate1();
                            diceDisActivate2();
                            
                                let playAgainBtn = document.querySelector(".playAgain");
                                playAgainBtn.addEventListener("click", () => {
                                    location.reload(); // Refresh the page
                                });
                                   
                        }
                        else{
                            diceActivate1();
                        }
                       
                        
                    }, 2000);

               },delay);

            }
            else{
                diceActivate1();
            }
         
        }
             //track   get money places
        else if(p2track==3 ||p2track==8 ||p2track==10 ||p2track==14 ||p2track==16||p2track==21){
                let delay = diceNum2*500;
                setTimeout(()=>{
    
                      document.querySelector(".getmoney").innerText = `Get $${shallowCopy[p2track].money}`;            
                      document.getElementById("coinSound").play();                                                    //play sound
                      document.querySelector(".player2-notice p").innerText = `+$${shallowCopy[p2track].money}`;
                      document.querySelector(".getmoney").style.opacity ='1';
                      AmountOfP2 = AmountOfP2 + shallowCopy[p2track].money;
                      p2Amount.innerText = `$${AmountOfP2}`;
    
                      setTimeout(() => {
                        document.querySelector(".getmoney").style.opacity ='0';    
                        diceActivate1();                             
                    }, 2000);
    
                },delay);
   
        }

            //track fine place
        else if(p2track==12){
            if(AmountOfP2>500){
                let delay = diceNum2*500;
                setTimeout(()=>{
    
                      document.querySelector(".givefine").innerText = `Fine $${shallowCopy[p2track].money}`;
                      document.getElementById("loseSound").play();
                      document.querySelector(".player2-notice p").innerText = `-$${shallowCopy[p2track].money}`;
                      document.querySelector(".givefine").style.opacity ='1';
                      AmountOfP2 = AmountOfP2 - shallowCopy[p2track].money;
                      p2Amount.innerText = `$${AmountOfP2}`;
                      setTimeout(() => {
                        document.querySelector(".givefine").style.opacity ='0';
                        diceActivate1();
                    }, 2000);
    
                },delay);
            }
            else{
                diceActivate1();
                document.querySelector(".player2-notice p").innerText = "Amount less than $500";
            }
    
        }

        else if(p2track==6){
          if(AmountOfP2>=500){
            let delay = diceNum2*500;
            setTimeout(()=>{
                buyBtn2.innerText ="Play";    //buy btn will work as play
                        
                btnActivate2();
                skip2();
                 
                document.querySelector(".guessGame").style.opacity ='1';   //game layout visible

                buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                buyBtn2 = document.querySelector(".buybtn2");

                buyBtn2.addEventListener("click",()=>{         //it working as play btn
                    document.getElementById("skipSound").play(); //click sound
                    btnDisActivate2();
                    buyBtn2.innerText ="Buy";        //rechange btn name play to Buy

                    document.querySelector(".player2-notice p").innerText = `-$${500}`;
                    AmountOfP2 -=500;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".guessGame").style.opacity ='0'; 

                    document.querySelector(".guessPress").style.display ='flex'; 


                    document.querySelectorAll('.guessPress button').forEach(button => {        // removing eventlistener
                        button.replaceWith(button.cloneNode(true));
                    });

                    const guessNumber = Math.floor(Math.random() * 5) + 1;
                    console.log(guessNumber);
                    let enterNum = 0;
                    document.querySelector(".guess1").addEventListener("click",()=>{
                        enterNum = 1;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess2").addEventListener("click",()=>{
                        enterNum = 2;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess3").addEventListener("click",()=>{
                        enterNum = 3;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess4").addEventListener("click",()=>{
                        enterNum = 4;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess5").addEventListener("click",()=>{
                        enterNum = 5;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                   function showGuessResult(){
                    if(enterNum == guessNumber){
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.querySelector(".player2-notice p").innerText = `+$${2500}`;
                        AmountOfP2 +=2500;
                        document.getElementById("coinSound").play();
                        p2Amount.innerText = `$${AmountOfP2}`;
                        ////////////////////////////////////////////   ad sound
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            diceActivate1();
                        },2500);

                    }
                    else{
                        const imagePath = './assets/guessLoss.jpg';

                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath})`;
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.getElementById("loseSound").play();
                        ////////////////////////////////////////////////////////////// ad sound 
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            const imagePath2 = './assets/guessWin.jpg';
                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath2})`;
                        diceActivate1();
                        },2500);

                    }

                   }
                   
                });

                skipBtn2.addEventListener("click",async()=>{
                 await skip2();
                });
                function skip2(){
                    btnDisActivate2();
                    document.getElementById("skipSound").play();
                    setTimeout(()=>{
                        document.querySelector(".guessGame").style.opacity ='0';
                        buyBtn2.innerText ="Buy";
                        diceActivate1();
                    },1000);
                }

            },delay);
         }
         else{
            diceActivate1();
         }
        }
        else{
            diceActivate1();
        } 
           
     }  
    },2000); 
    }  
    
               //       <----    closing if p2DiceActive is true

    function rollDice2() {
         diceNum2 = Math.floor(Math.random() * 6) + 1;
        //  diceNum2 = 3;
         
        
         let rollSound = document.getElementById("rollSound");
         rollSound.play();

        const rotations = {
            1: "rotateX(0deg) rotateY(0deg)",     // Face 1 (front)
            2: "rotateX(0deg) rotateY(180deg)",   // Face 2 (back)
            3: "rotateX(-90deg) rotateY(0deg)",    // Face 3 (bottom)
            4: "rotateX(90deg) rotateY(0deg)",   // Face 4 (top)
            5: "rotateX(0deg) rotateY(-90deg)",   // Face 5 (left)
            6: "rotateX(0deg) rotateY(90deg)"     // Face 6 (right)
        };

        const randomRotationX = Math.floor(Math.random() * 4) * 720;
        const randomRotationY = Math.floor(Math.random() * 4) * 720;
        const randomRotationZ = Math.floor(Math.random() * 4) * 720;

        document.getElementById("dice2").style.transition = "transform 0.7s ease-out";
        document.getElementById("dice2").style.transform = 
        `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg) ` + rotations[diceNum2];

        return diceNum2;
    }

     //position of palyer 1 from start
     function moveUp2(){

        if(ticCount2==0){
            player2Pawn.style.top = `20.75rem`;
            player2Pawn.style.right = `-0.8rem`;
            vlPositionOfp2 = 20.75;
        }
        else if(ticCount2==5){
            vlPositionOfp2 -= 1.05;
            player2Pawn.style.top = `${vlPositionOfp2-3.8}rem`;
            // vlPositionOfp2 -= 3.8;
            player2Pawn.style.transform = "rotate(-90deg)";
        }
        else{
            player2Pawn.style.top = `${vlPositionOfp2 -3.8}rem`;
            vlPositionOfp2 -= 3.8;
        }
      
        ticCount2++;
    }
    function moveDown2(){
        
        if(ticCount2==12){
            vlPositionOfp2 += 1.05;
            player2Pawn.style.top = `${vlPositionOfp2}rem`;
        }
        else if(ticCount2==17){
            vlPositionOfp2 += 1;
            player2Pawn.style.top = `${vlPositionOfp2 +3.8}rem`;
            vlPositionOfp2 += 3.8;
            // player1Pawn.style.transform = "rotate(90deg)"
            player2Pawn.style.transform = "rotate(90deg)";
        }
        else{
            player2Pawn.style.top = `${vlPositionOfp2 +3.8}rem`;
            vlPositionOfp2 += 3.8;
        }
       
        ticCount2++;
    }
    function moveRight2(){
        
        if(ticCount2==18){
            hlPositionOfp2 = 22.8;
            player2Pawn.style.right = `${hlPositionOfp2 -4}rem`; 
            hlPositionOfp2 = 22.8-4;
        }
        else if(ticCount2==23){
           
            player2Pawn.style.right = `${0.25}rem`;
            player2Pawn.style.top = `${25.5}rem`;
            player2Pawn.style.transform = "rotate(0deg)";
            hlPositionOfp2 -= 3.8;
            
        }
        else{
            player2Pawn.style.right = `${hlPositionOfp2 - 3.8}rem`;
            hlPositionOfp2 -= 3.8;
        }
       
        ticCount2++;
    }
    function moveLeft2(){
        if(ticCount2==6){
            hlPositionOfp2 += 0.5;
            hlPositionOfp2 += 3.8;
            player2Pawn.style.right = `${hlPositionOfp2}rem`;
        }
        else if(ticCount2==11){
            
            hlPositionOfp2 += 0.8;
            player2Pawn.style.right = `${hlPositionOfp2 + 3.8}rem`;
            hlPositionOfp2 += 3.8;
            player2Pawn.style.transform = "rotate(180deg)";
            
        }
        else{
            player2Pawn.style.right = `${hlPositionOfp2 + 3.8}rem`;
            hlPositionOfp2 += 3.8;
        }
        ticCount2++;
    
    }
     
    async function move2() { 
        
        if(ticCount==ticCount2 && ticCount!=0){
            // player2Pawn.classList.add("margin1");         /////////////////////////////
            player1Pawn.classList.add("margin1");
        }
        if(ticCount!=ticCount2){
            // player2Pawn.classList.remove("margin");
            // player1Pawn.classList.remove("margin");  /////////////////////////////////
        }
        if(ticCount2>23){
            ticCount2=0;
        }
        
        if(ticCount2 >= 0 && ticCount2 <= 5) {
           await moveUp2();
            console.log("up");
        }
        else if(ticCount2>=6 && ticCount2<=11){
          await  moveLeft2();
            console.log("Left");
        }
        else if(ticCount2>=12 && ticCount2<=17){
           await moveDown2();
            console.log("Down");
        }
        else if(ticCount2>=18 && ticCount2<=23){
         await   moveRight2();
            console.log("Right");
        }
        let pawnSound = document.getElementById("pawnSound");
        pawnSound.play();

       
       
        
    }

     }
     function PlayMultiplayer(){

     

       // Tickect Info
       let ticName = document.querySelector(".ticName");
       let buy = document.querySelector(".buy");
       let sell = document.querySelector(".sell");
       let r1 = document.querySelector(".r1");
       let r2 = document.querySelector(".r2");
       let r3 = document.querySelector(".r3");
       let r4 = document.querySelector(".r4");
   
   
       let p1DiceActivate = true; 
       let p2DiceActivate = false;

  
    let diceBox1 = document.querySelector(".diceBox1");
    let diceBox2 = document.querySelector(".diceBox2");
    diceBox1.style.display = 'none';
    diceBox2.style.display = 'none';


    function diceActivate1(){
        p1DiceActivate = true; 
        diceBox1.style.animation = "move1 1s linear infinite";
        console.log(p1DiceActivate);
    }
    function diceDisActivate1(){
        p1DiceActivate = false; 
        diceBox1.style.animation = "none";
    }
    function diceActivate2(){
        p2DiceActivate = true; 
        diceBox2.style.animation = "move2 1s linear infinite";
    }
    function diceDisActivate2(){
        p2DiceActivate = false; 
        diceBox2.style.animation = "none";
    }
  
    let buyBtn1 = document.querySelector(".buybtn1");             //buybtn at player1 dashboard
    let skipBtn1 = document.querySelector(".skipbtn1");             //skip btn
    
    function btnActivate1(){                                       //Activate buy and skip button
        buyBtn1.style.display = 'flex';
        skipBtn1.style.display = 'flex';
    };
    function btnDisActivate1(){                                //disActivate buy and skip function
        buyBtn1.style.display = 'none';
        skipBtn1.style.display = 'none';
    };
    btnDisActivate1();                                          //initially disactivate buy and skip buttons of player1
    
    let diceNum = 1;                                           // for Green Pawn    initial assingn value
    let vlPositionOfp1 = 0;                                    //vertical position of green pawn 
    let  hlPositionOfp1 =0;                                    //horizontal ... ... .. 
    let ticCount =0;                                           //track positions 0 to 23
    let player1Pawn = document.querySelector(".green");        //green pawn
    let p1track =0;                                            //track for tickets object
    
                          

   let  shallowCopy = { ...tickets};                           //shallo copy of tickets                
   
   let p1Amount = document.querySelector(".p1-balance");       //player1 amount show element
   let AmountOfP1 = 2500;                                    //player1 amount data
   p1Amount.innerText = `$${AmountOfP1}`;


   function showticket1(){                                      //function for show the ticket data
    ticName.innerText = `${shallowCopy[p1track].name}`;
    buy.innerText = `Buy : $${shallowCopy[p1track].buyPrice}`;
    sell.innerText = `Sell : $${shallowCopy[p1track].sellPrice}`;
    r1.innerText = `$${shallowCopy[p1track].rent[0]}`;
    r2.innerText = `$${shallowCopy[p1track].rent[1]}`;
    r3.innerText = `$${shallowCopy[p1track].rent[2]}`;
    r4.innerText = `$${shallowCopy[p1track].rent[3]}`;
}



document.addEventListener("keydown",async function(event) {             // using left and right arrow keys for buy1 and skip1 buttons
                           
    if (event.key === "Alt") {              //ctrl key for player1 dice
        await Activity1();
        
    } else if(event.key === "Control"){
        await Activity2();              //alt key for player2 dice

    }
     
});
  
    document.getElementById("dice").addEventListener("click", async () => { 
       await Activity1();

    });
  async function Activity1(){
        if(p1DiceActivate == true){
         diceDisActivate1();

        diceNum = rollDice();                                 // Rolled player1 dice

        console.log("Rolled dice number:", diceNum);

        player1Pawn.style.zIndex = "5";                      //used for upper dawn concept of pawns 
        let delay = 1000;
        for (let i = 0; i < diceNum; i++) {
            setTimeout(() => {
                move1();                        // move player pawn
            }, delay);
            delay += 500;
        }
        if(p1track+diceNum<=23){
            p1track += diceNum;               //set p1track values
        }else{
            p1track =p1track+diceNum-24;
        }
        console.log(p1track); 


        //track places
    
        if(p1track==1 ||p1track==2 ||p1track==4 ||p1track==5 ||p1track==7 ||p1track==9 ||p1track==11 ||p1track==13 ||p1track==15 ||p1track==17 ||p1track==19 ||p1track==20 ||p1track==22 ||p1track==23){
            if(shallowCopy[p1track].p2Buy == false && shallowCopy[p1track].p1Buy == false){
                if(AmountOfP1>shallowCopy[p1track].buyPrice){
                    let delay = diceNum*500;
                    console.log(shallowCopy[p1track].name);
                    setTimeout(()=>{
                        showticket1();
                        btnActivate1();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);
                    buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                    buyBtn1 = document.querySelector(".buybtn1");
                  

                    buyBtn1.addEventListener("click",async ()=>{
                        
                        await Buy1();
                        
                    });


                    function Buy1(){
                          // assignment for p1Buy
                          shallowCopy[p1track].p1Buy = true; 
                    
                         // Hide ticket and update visuals
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                        },1000);
                         document.querySelector(`.Greenstamp${p1track + 1}`).style.opacity = "1";

                        // Calculate remaining amount
                          let remainAmount = AmountOfP1 - shallowCopy[p1track].buyPrice;
                          p1Amount.innerText = `$${remainAmount}`;
                          AmountOfP1 = remainAmount;

                         // Deactivate buttons
                         btnDisActivate1();
                         //playSound
                        document.getElementById("buySound").play();
                        document.querySelector(".player1-notice p").innerText = `-$${shallowCopy[p1track].buyPrice}`;
                        diceActivate2();
                    }
                    skipBtn1.addEventListener("click",async ()=>{
                        await skip1();
                      
                    });
                    function skip1(){
                        btnDisActivate1();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate2();
                            
                        },1000);
                    }
        
                }
                else{
                    document.querySelector(".player1-notice p").innerText = "Amount not enough";
                    diceActivate2();

                }

            }
            else  if(shallowCopy[p1track].p2Buy == true){          //give rent 
                let delay = diceNum*500;
               setTimeout(()=>{
                    showticket1();
                    
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p1track].rent[shallowCopy[p1track].rentCount];
                    AmountOfP1 -= rentAmount;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    AmountOfP2 += rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".player1-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(".player2-notice p").innerText = `+$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p1track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() =>{
                        document.querySelector(`.r${shallowCopy[p1track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p1track].rentCount++;
                        if (shallowCopy[p1track].rentCount > 3) {
                            shallowCopy[p1track].rentCount = 0;
                        }
                        if(AmountOfP1<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("winSound").play();
                            p1Amount.innerText = `-$${AmountOfP1*(-1)}`;
                            const imagePath2 = './assets/player2Wins.jpg';
                            document.querySelector(".gameResult").style.backgroundImage = `url(${imagePath2})`;
                            diceDisActivate1();
                            diceDisActivate2();
                            let playAgainBtn = document.querySelector(".playAgain");
                            playAgainBtn.addEventListener("click", () => {
                                document.getElementById("skipSound").play();   //click sound
                                location.reload(); // Refresh the page
                            });
                        }
                        else{
                            diceActivate2();
                        }
                      
                    }, 2000);
               },delay);
            }

             //for sell the ticket 

            else if(shallowCopy[p1track].p1Buy == true){       
                if(AmountOfP1<shallowCopy[p1track].sellPrice){     //when amount < ticket sell price
                    let delay = diceNum*500;
                    console.log(shallowCopy[p1track].name);
                    setTimeout(()=>{
                        showticket1();
                        buyBtn1.innerText ="Sell";
                        
                        btnActivate1();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);

                    buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                    buyBtn1 = document.querySelector(".buybtn1");
                  
    
                    buyBtn1.addEventListener("click",async ()=>{                      //works as sell btn
                        await sell1();
                        
                    });
                    function sell1(){
                          // assignment for p1Buy
                          shallowCopy[p1track].p1Buy = false;    //update in tickets obj
                          shallowCopy[p1track].rentCount = 0;
                    
                         // Hide ticket and update visuals
                        setTimeout(()=>{
                            buyBtn1.innerText ="Buy";                                 // rechange name of button
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate2();
                        },1000);
                         document.querySelector(`.Greenstamp${p1track + 1}`).style.opacity = "0";
    
                        // Calculate remaining amount
                           AmountOfP1 = AmountOfP1 + shallowCopy[p1track].sellPrice;       //added sellprice in amount
                          p1Amount.innerText = `$${AmountOfP1}`;
    
                         // Deactivate buttons
                         btnDisActivate1();
                         //playSound
                        document.getElementById("buySound").play();
                        document.querySelector(".player1-notice p").innerText = `+$${shallowCopy[p1track].sellPrice}`;
                    }

                    skipBtn1.addEventListener("click",async ()=>{
                      await skip1();
                    });
                    function skip1(){
                        btnDisActivate1();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            buyBtn1.innerText ="Buy";
                            diceActivate2();
                            
                        },1000);
                    }
                  

                }
                else{
                    document.querySelector(".player1-notice p").innerText = `Amount greater than sellPrice`;
                    diceActivate2();
                }
            }
            else{
                diceActivate2();
            }
        }
        //track   get money places
        else if(p1track==3 ||p1track==8 ||p1track==10 ||p1track==14 ||p1track==16||p1track==21){
            let delay = diceNum*500;
            setTimeout(()=>{

                  document.querySelector(".getmoney").innerText = `Get $${shallowCopy[p1track].money}`;            
                  document.getElementById("coinSound").play();                                                    //play sound
                  document.querySelector(".player1-notice p").innerText = `+$${shallowCopy[p1track].money}`;
                  document.querySelector(".getmoney").style.opacity ='1';
                  AmountOfP1 = AmountOfP1 + shallowCopy[p1track].money;
                  p1Amount.innerText = `$${AmountOfP1}`;
                  document.getElementById("coinSound").play();

                  setTimeout(() => {
                    document.querySelector(".getmoney").style.opacity ='0'; 
                    diceActivate2();                                
                }, 2000);

            },delay);

           
           
        }
        //track fine place
        else if(p1track==12){
            if(AmountOfP1>500){
                let delay = diceNum*500;
                setTimeout(()=>{
    
                      document.querySelector(".givefine").innerText = `Fine $${shallowCopy[p1track].money}`;
                      document.getElementById("loseSound").play();
                      document.querySelector(".player1-notice p").innerText = `-$${shallowCopy[p1track].money}`;
                      document.querySelector(".givefine").style.opacity ='1';
                      AmountOfP1 = AmountOfP1 - shallowCopy[p1track].money;
                      p1Amount.innerText = `$${AmountOfP1}`;
                      setTimeout(() => {
                        document.querySelector(".givefine").style.opacity ='0';
                        diceActivate2();
                    }, 2000);
    
                },delay);
            }
            else{
                diceActivate2();
                document.querySelector(".player1-notice p").innerText = "Amount less than $500";
            }
           

        }
          //track guess game

        else if(p1track==6){

           if(AmountOfP1>=500){
            let delay = diceNum*500;
            setTimeout(()=>{
                buyBtn1.innerText ="Play";    //buy btn will work as play
                        
                btnActivate1();
                 
                document.querySelector(".guessGame").style.opacity ='1';   //game layout visible

                buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                buyBtn1 = document.querySelector(".buybtn1");

                buyBtn1.addEventListener("click",async ()=>{         //it working as play btn
                   await play1();
                   
                });
                function play1(){
                    document.getElementById("skipSound").play(); //click sound
                    btnDisActivate1();
                    buyBtn1.innerText ="Buy";                //Re change name of btn play to buy
                    document.querySelector(".player1-notice p").innerText = `-$${500}`;
                    AmountOfP1 -=500;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    document.querySelector(".guessGame").style.opacity ='0'; 

                    document.querySelector(".guessPress").style.display ='flex'; 


                    document.querySelectorAll('.guessPress button').forEach(button => {
                        button.replaceWith(button.cloneNode(true));
                    });

                    const guessNumber = Math.floor(Math.random() * 5) + 1;
                    console.log(guessNumber);
                    let enterNum = 0;
                    document.querySelector(".guess1").addEventListener("click",()=>{
                        enterNum = 1;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess2").addEventListener("click",()=>{
                        enterNum = 2;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess3").addEventListener("click",()=>{
                        enterNum = 3;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess4").addEventListener("click",()=>{
                        enterNum = 4;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess5").addEventListener("click",()=>{
                        enterNum = 5;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });

                   function showGuessResult(){
                    if(enterNum == guessNumber){
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.querySelector(".player1-notice p").innerText = `+$${2500}`;
                        AmountOfP1 +=2500;
                        document.getElementById("coinSound").play();
                        p1Amount.innerText = `$${AmountOfP1}`;
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            diceActivate2();
                        },2500);

                    }
                    else{
                        const imagePath = './assets/guessLoss.jpg';

                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath})`;
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.getElementById("loseSound").play(); 
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            const imagePath2 = './assets/guessWin.jpg';
                            document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath2})`;
                            diceActivate2();
                        },2500);

                    }

                   }
                }
                skipBtn1.addEventListener("click",async ()=>{
                 await skip1();
                });
                function skip1(){
                    btnDisActivate1();
                    document.getElementById("skipSound").play();
                    setTimeout(()=>{
                        document.querySelector(".guessGame").style.opacity ='0';
                        buyBtn1.innerText ="Buy";
                        diceActivate2();   
                    },1000);
                }
               
            },delay);
           }
           else{
            diceActivate2(); 
           }

        }
        else{
            diceActivate2();
        }
    }

}
  
  

    function rollDice() {
        // Generate a random number between 1 and 6
        diceNum = Math.floor(Math.random() * 6) + 1;
        // diceNum = 3;
        
        // Play rolling sound
        let rollSound = document.getElementById("rollSound");
        rollSound.play();
        rollSound.volume = 0.2;

        // Define final rotations to match the faces correctly
        const rotations = {
             1: "rotateX(0deg) rotateY(0deg)",     // Face 1 (front)
             2: "rotateX(0deg) rotateY(180deg)",   // Face 2 (back)
             3: "rotateX(-90deg) rotateY(0deg)",    // Face 3 (top)
             4: "rotateX(90deg) rotateY(0deg)",   // Face 4 (bottom)
             5: "rotateX(0deg) rotateY(-90deg)",   // Face 5 (left)
             6: "rotateX(0deg) rotateY(90deg)"     // Face 6 (right)
        };

         // Generate additional random rotation for faster spinning effect
         const randomRotationX = Math.floor(Math.random() * 4) * 720; // Up to 4 full spins (720 degrees)
         const randomRotationY = Math.floor(Math.random() * 4) * 720;
         const randomRotationZ = Math.floor(Math.random() * 4) * 720;

         // Use the diceNum to set the correct rotation for the face, adding random spins
         document.getElementById("dice").style.transition = "transform 0.7s ease-out"; // Faster and smoother transition
         document.getElementById("dice").style.transform = 
             `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg) ` + rotations[diceNum];

        return diceNum;
    }


    
     //position of palyer 1 from start
     function moveUp1(){

        if(ticCount==0){
            player1Pawn.style.top = `-4.25rem`
            vlPositionOfp1 = -4.25;
            player1Pawn.style.left = `0.85rem`

        }
        else if(ticCount==5){
            vlPositionOfp1 -= 1;
            player1Pawn.style.top = `${vlPositionOfp1 -3.8}rem`;
            vlPositionOfp1 -= 3.8;
            player1Pawn.style.transform = "rotate(90deg)";
        }
        else{
            vlPositionOfp1 -= 3.8;
            player1Pawn.style.top = `${vlPositionOfp1}rem`;
        }
      
        ticCount++;
    }

    function moveDown1(){
        
        if(ticCount==12){
            vlPositionOfp1 += 1.05;
            player1Pawn.style.top = `${vlPositionOfp1}rem`;
            // vlPositionOfp1 += 3.8;
        }
        else if(ticCount==17){
            vlPositionOfp1 += 1;
            player1Pawn.style.top = `${vlPositionOfp1 +3.8}rem`;
            vlPositionOfp1 += 3.8;
            player1Pawn.style.transform = "rotate(-90deg)";
            
        }
        else{
            player1Pawn.style.top = `${vlPositionOfp1 +3.8}rem`;
            vlPositionOfp1 += 3.8;
        }
       
        ticCount++;
    }

    function moveRight1(){
        
        if(ticCount==6){
            player1Pawn.style.left = `6rem`
            hlPositionOfp1 = 6;
        }
        else if(ticCount==11){
            hlPositionOfp1 += 1.25;
            player1Pawn.style.left = `${hlPositionOfp1 + 3.8}rem`;
            vlPositionOfp1 += 3.8;
             player1Pawn.style.transform = "rotate(180deg)";

        }
        else{
            player1Pawn.style.left = `${hlPositionOfp1 + 3.75}rem`;
            hlPositionOfp1 += 3.75;
        }
       
        ticCount++;
    }

    function moveLeft1(){
        if(ticCount==18){
            hlPositionOfp1 -= 1.25;
            player1Pawn.style.left = `${hlPositionOfp1}rem`;
           
            // hlPositionOfp1 -= 3.75;
            // player1Pawn.style.left = `6.9rem`
            // hlPositionOfp1 = 7;
        }
        else if(ticCount==23){
            
            player1Pawn.style.left = `${2}rem`;
            player1Pawn.style.top = `${1}rem`;
            player1Pawn.style.transform = "rotate(0deg)";
            
        }
        else{
            player1Pawn.style.left = `${hlPositionOfp1 - 3.75}rem`;
            hlPositionOfp1 -= 3.75;
        }
        ticCount++;
    
    }

    async function move1() { 
         
        if(ticCount>23){
            ticCount=0;
        }
        
        if(ticCount >= 0 && ticCount <= 5) {
           await moveUp1();
            console.log("up");
        }
        else if(ticCount>=6 && ticCount<=11){
          await  moveRight1();
            console.log("Right");
        }
        else if(ticCount>=12 && ticCount<=17){
           await moveDown1();
            console.log("Down");
        }
        else if(ticCount>=18 && ticCount<=23){
         await   moveLeft1();
            console.log("Left");
        }

        let pawnSound = document.getElementById("pawnSound");
        pawnSound.play();

        return ticCount;
       
        
    }
    



        // Similar logic can be used for the second dice

        let buyBtn2 = document.querySelector(".buybtn2");               //buybtn at player2 dashboard
        let skipBtn2 = document.querySelector(".skipbtn2");             //skip btn
        function btnActivate2(){                                        //Activate buy and skip button
            buyBtn2.style.display = 'flex';
            skipBtn2.style.display = 'flex';
        };
        function btnDisActivate2(){                                     //disActivate buy and skip function
            buyBtn2.style.display = 'none';
            skipBtn2.style.display = 'none';
        };
        btnDisActivate2();                                              //initially disactivate buy and skip buttons of player2


        let diceNum2 = 1;                                               // for Green Pawn
        let vlPositionOfp2 = 0;                                         //
        let  hlPositionOfp2 =0;
        let ticCount2 =0;
        let player2Pawn = document.querySelector(".blue");
        let p2track =18;
        


        let p2Amount = document.querySelector(".p2-balance");       //player1 amount show element
        let AmountOfP2 = 2500;                                    //player1 amount data
        p2Amount.innerText = `$${AmountOfP2}`;
     
     
        function showticket2(){                                      //function for show the ticket data
         ticName.innerText = `${shallowCopy[p2track].name}`;
         buy.innerText = `Buy : $${shallowCopy[p2track].buyPrice}`;
         sell.innerText = `Sell : $${shallowCopy[p2track].sellPrice}`;
         r1.innerText = `$${shallowCopy[p2track].rent[0]}`;
         r2.innerText = `$${shallowCopy[p2track].rent[1]}`;
         r3.innerText = `$${shallowCopy[p2track].rent[2]}`;
         r4.innerText = `$${shallowCopy[p2track].rent[3]}`;
        }


  
    document.getElementById("dice2").addEventListener("click", async () => { 
      await  Activity2();
    });
    
   async function Activity2(){

    
     if(p2DiceActivate==true){
            diceNum2 = rollDice2();
            diceDisActivate2();
            console.log("Rolled dice 2 number:", diceNum2);

            let delay = 1000;

            player1Pawn.style.zIndex = "1";   //uper on blue

            for(let i=0;i<diceNum2;i++){
                if(ticCount2>23){
                   ticCount2=0;
                }  
                setTimeout( await move2,delay);
                delay += 500;
            }
            if(p2track-diceNum2>0){
                p2track -=diceNum2;
            }
            else if(p2track-diceNum2==0){
                p2track =0;
            }
            else {
                p2track = (24 + p2track-diceNum2);
            }
            console.log(p2track);


                 //track places
    
        if(p2track==1 ||p2track==2 ||p2track==4 ||p2track==5 ||p2track==7 ||p2track==9 ||p2track==11 ||p2track==13 ||p2track==15 ||p2track==17 ||p2track==19 ||p2track==20 ||p2track==22 ||p2track==23){
            if(shallowCopy[p2track].p1Buy == false && shallowCopy[p2track].p2Buy == false){
                if(AmountOfP2>shallowCopy[p2track].buyPrice){
                    let delay = diceNum2*500;
                    console.log(shallowCopy[p2track].name);
                    setTimeout(()=>{
                        showticket2();
                        btnActivate2();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);
                    buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                    buyBtn2 = document.querySelector(".buybtn2");
                  

                    buyBtn2.addEventListener("click",async ()=>{
                        
                       await Buy2();
                    });
                    function Buy2(){
                           // assignment for p1Buy
                           shallowCopy[p2track].p2Buy = true; 
                    
                           // Hide ticket and update visuals
                          setTimeout(()=>{
                              document.querySelector(".tickets").style.opacity = '0';
                              diceActivate1();
                          },1000);
                           document.querySelector(`.Bluestamp${p2track + 1}`).style.opacity = "1";
  
                          // Calculate remaining amount
                            let remainAmount = AmountOfP2 - shallowCopy[p2track].buyPrice;
                            p2Amount.innerText = `$${remainAmount}`;
                            AmountOfP2 = remainAmount;
  
                           // Deactivate buttons
                           btnDisActivate2();
                           //playSound
                          document.getElementById("buySound").play();
                          document.querySelector(".player2-notice p").innerText = `-$${shallowCopy[p2track].buyPrice}`;
                    }

                    skipBtn2.addEventListener("click",()=>{
                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate1();
                            
                        },1000);
                    })

                }
                else{
                    document.querySelector(".player2-notice p").innerText = "Amount not enough";
                    diceActivate1();
                }

            }
            
            else  if(shallowCopy[p2track].p1Buy == true){          //give rent 
                let delay = diceNum2*500;
               setTimeout(()=>{
                    showticket2();
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p2track].rent[shallowCopy[p2track].rentCount];
                    AmountOfP2 -= rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    AmountOfP1 += rentAmount;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    document.querySelector(".player2-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(".player1-notice p").innerText = `+$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p2track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() => {
                        document.querySelector(`.r${shallowCopy[p2track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p1track].rentCount++;
                        if (shallowCopy[p1track].rentCount > 3) {
                            shallowCopy[p1track].rentCount = 0;
                        }
                        if(AmountOfP2<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("winSound").play();
                            p2Amount.innerText = `-$${AmountOfP2*(-1)}`;
                            const imagePath1 = './assets/player1Wins.jpg';
                            document.querySelector(".gameResult").style.backgroundImage = `url(${imagePath1})`;
                            diceDisActivate1();
                            diceDisActivate2();
                            let playAgainBtn = document.querySelector(".playAgain");
                            playAgainBtn.addEventListener("click", () => {
                                document.getElementById("skipSound").play();   //click sound
                                location.reload(); // Refresh the page
                            });
                        }
                        else{
                            diceActivate1();
                        }
                    }, 2000);


               },delay);
            }

             //for sell the ticket 
             
            else if(shallowCopy[p2track].p2Buy == true){       
                if(AmountOfP2<shallowCopy[p2track].sellPrice){     //when amount < ticket sell price
                    let delay = diceNum*500;
                    console.log(shallowCopy[p2track].name);
                    setTimeout(()=>{
                        showticket2();
                        buyBtn2.innerText ="Sell";
                        
                        btnActivate2();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);
                    buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                    buyBtn2 = document.querySelector(".buybtn2");
                  
    
                    buyBtn2.addEventListener("click",async()=>{     //works as sell btn
                        await sell2();
                    });
                    function sell2(){
                              // assignment for p1Buy
                              shallowCopy[p2track].p2Buy = false;    //update in tickets obj
                              shallowCopy[p2track].rentCount = 0;
                        
                             // Hide ticket and update visuals
                            setTimeout(()=>{
                                buyBtn2.innerText ="Buy";                                 // rechange name of button
                                document.querySelector(".tickets").style.opacity = '0';
                                diceActivate1();
                            },1000);
                             document.querySelector(`.Bluestamp${p2track + 1}`).style.opacity = "0";
        
                            // Calculate  amount
                               AmountOfP2 = AmountOfP2 + shallowCopy[p2track].sellPrice;       //added sellprice in amount
                              p2Amount.innerText = `$${AmountOfP2}`;
        
                             // Deactivate buttons
                             btnDisActivate2();
                             //playSound
                            document.getElementById("buySound").play();
                            document.querySelector(".player2-notice p").innerText = `+$${shallowCopy[p2track].sellPrice}`;
                    }

                    skipBtn2.addEventListener("click",()=>{
                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            buyBtn2.innerText ="Buy";
                            diceActivate1();
                            
                        },1000);
                    })
    
                }
                else{
                    document.querySelector(".player2-notice p").innerText = `Amount greater than sellPrice`;
                    diceActivate1();
                }
            }



            else if(shallowCopy[p2track].p1Buy == true){    //for giving rent

                let delay = diceNum2*500;
                setTimeout(()=>{
                    showticket2();
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p2track].rent[shallowCopy[p2track].rentCount];
                    AmountOfP2 -= rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".player2-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p2track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() => {
                        document.querySelector(`.r${shallowCopy[p2track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p2track].rentCount++;
                        if (shallowCopy[p2track].rentCount > 3) {
                            shallowCopy[p2track].rentCount = 0;
                        }
                        if(AmountOfP2<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("coinSound").play();
                            p2Amount.innerText = `-$${AmountOfP2*(-1)}`;
                            diceDisActivate1();
                            diceDisActivate2();
                            
                                let playAgainBtn = document.querySelector(".playAgain");
                                playAgainBtn.addEventListener("click", () => {
                                    location.reload(); // Refresh the page
                                });
                                   
                        }
                        else{
                            diceActivate1();
                        }
                       
                        
                    }, 2000);

               },delay);

            }
            else{
                diceActivate1();
            }
         
        }
             //track   get money places
        else if(p2track==3 ||p2track==8 ||p2track==10 ||p2track==14 ||p2track==16||p2track==21){
                let delay = diceNum2*500;
                setTimeout(()=>{
    
                      document.querySelector(".getmoney").innerText = `Get $${shallowCopy[p2track].money}`;            
                      document.getElementById("coinSound").play();                                                    //play sound
                      document.querySelector(".player2-notice p").innerText = `+$${shallowCopy[p2track].money}`;
                      document.querySelector(".getmoney").style.opacity ='1';
                      AmountOfP2 = AmountOfP2 + shallowCopy[p2track].money;
                      p2Amount.innerText = `$${AmountOfP2}`;
    
                      setTimeout(() => {
                        document.querySelector(".getmoney").style.opacity ='0';    
                        diceActivate1();                             
                    }, 2000);
    
                },delay);
   
        }

            //track fine place
        else if(p2track==12){
            if(AmountOfP2>500){
                let delay = diceNum2*500;
                setTimeout(()=>{
    
                      document.querySelector(".givefine").innerText = `Fine $${shallowCopy[p2track].money}`;
                      document.getElementById("loseSound").play();
                      document.querySelector(".player2-notice p").innerText = `-$${shallowCopy[p2track].money}`;
                      document.querySelector(".givefine").style.opacity ='1';
                      AmountOfP2 = AmountOfP2 - shallowCopy[p2track].money;
                      p2Amount.innerText = `$${AmountOfP2}`;
                      setTimeout(() => {
                        document.querySelector(".givefine").style.opacity ='0';
                        diceActivate1();
                    }, 2000);
    
                },delay);
            }
            else{
                diceActivate1();
                document.querySelector(".player2-notice p").innerText = "Amount less than $500";
            }
    
        }

        else if(p2track==6){
          if(AmountOfP2>=500){
            let delay = diceNum2*500;
            setTimeout(()=>{
                buyBtn2.innerText ="Play";    //buy btn will work as play
                        
                btnActivate2();
                 
                document.querySelector(".guessGame").style.opacity ='1';   //game layout visible

                buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                buyBtn2 = document.querySelector(".buybtn2");

                buyBtn2.addEventListener("click",()=>{         //it working as play btn
                    document.getElementById("skipSound").play(); //click sound
                    btnDisActivate2();
                    buyBtn2.innerText ="Buy";        //rechange btn name play to Buy

                    document.querySelector(".player2-notice p").innerText = `-$${500}`;
                    AmountOfP2 -=500;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".guessGame").style.opacity ='0'; 

                    document.querySelector(".guessPress").style.display ='flex'; 


                    document.querySelectorAll('.guessPress button').forEach(button => {        // removing eventlistener
                        button.replaceWith(button.cloneNode(true));
                    });

                    const guessNumber = Math.floor(Math.random() * 5) + 1;
                    console.log(guessNumber);
                    let enterNum = 0;
                    document.querySelector(".guess1").addEventListener("click",()=>{
                        enterNum = 1;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess2").addEventListener("click",()=>{
                        enterNum = 2;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess3").addEventListener("click",()=>{
                        enterNum = 3;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess4").addEventListener("click",()=>{
                        enterNum = 4;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess5").addEventListener("click",()=>{
                        enterNum = 5;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });

                   function showGuessResult(){
                    if(enterNum == guessNumber){
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.querySelector(".player2-notice p").innerText = `+$${2500}`;
                        AmountOfP2 +=2500;
                        document.getElementById("coinSound").play();
                        p2Amount.innerText = `$${AmountOfP2}`;
                        ////////////////////////////////////////////   ad sound
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            diceActivate1();
                        },2500);

                    }
                    else{
                        const imagePath = './assets/guessLoss.jpg';

                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath})`;
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.getElementById("loseSound").play();
                        ////////////////////////////////////////////////////////////// ad sound 
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            const imagePath2 = './assets/guessWin.jpg';
                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath2})`;
                        diceActivate1();
                        },2500);

                    }

                   }
                   
                });

                skipBtn2.addEventListener("click",async()=>{
                 await skip2();
                });
                function skip2(){
                    btnDisActivate2();
                    document.getElementById("skipSound").play();
                    setTimeout(()=>{
                        document.querySelector(".guessGame").style.opacity ='0';
                        buyBtn2.innerText ="Buy";
                        diceActivate1();
                    },1000);
                }

            },delay);
         }
         else{
            diceActivate1();
         }
        }
        else{
            diceActivate1();
        }    
     }   
    }  
    
               //       <----    closing if p2DiceActive is true

    function rollDice2() {
         diceNum2 = Math.floor(Math.random() * 6) + 1;
        //  diceNum2 = 3;
         
        
         let rollSound = document.getElementById("rollSound");
         rollSound.play();

        const rotations = {
            1: "rotateX(0deg) rotateY(0deg)",     // Face 1 (front)
            2: "rotateX(0deg) rotateY(180deg)",   // Face 2 (back)
            3: "rotateX(-90deg) rotateY(0deg)",    // Face 3 (bottom)
            4: "rotateX(90deg) rotateY(0deg)",   // Face 4 (top)
            5: "rotateX(0deg) rotateY(-90deg)",   // Face 5 (left)
            6: "rotateX(0deg) rotateY(90deg)"     // Face 6 (right)
        };

        const randomRotationX = Math.floor(Math.random() * 4) * 720;
        const randomRotationY = Math.floor(Math.random() * 4) * 720;
        const randomRotationZ = Math.floor(Math.random() * 4) * 720;

        document.getElementById("dice2").style.transition = "transform 0.7s ease-out";
        document.getElementById("dice2").style.transform = 
        `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg) ` + rotations[diceNum2];

        return diceNum2;
    }

     //position of palyer 1 from start
     function moveUp2(){

        if(ticCount2==0){
            player2Pawn.style.top = `20.75rem`;
            player2Pawn.style.right = `-0.8rem`;
            vlPositionOfp2 = 20.75;
        }
        else if(ticCount2==5){
            vlPositionOfp2 -= 1.05;
            player2Pawn.style.top = `${vlPositionOfp2-3.8}rem`;
            // vlPositionOfp2 -= 3.8;
            player2Pawn.style.transform = "rotate(-90deg)";
        }
        else{
            player2Pawn.style.top = `${vlPositionOfp2 -3.8}rem`;
            vlPositionOfp2 -= 3.8;
        }
      
        ticCount2++;
    }
    function moveDown2(){
        
        if(ticCount2==12){
            vlPositionOfp2 += 1.05;
            player2Pawn.style.top = `${vlPositionOfp2}rem`;
        }
        else if(ticCount2==17){
            vlPositionOfp2 += 1;
            player2Pawn.style.top = `${vlPositionOfp2 +3.8}rem`;
            vlPositionOfp2 += 3.8;
            // player1Pawn.style.transform = "rotate(90deg)"
            player2Pawn.style.transform = "rotate(90deg)";
        }
        else{
            player2Pawn.style.top = `${vlPositionOfp2 +3.8}rem`;
            vlPositionOfp2 += 3.8;
        }
       
        ticCount2++;
    }
    function moveRight2(){
        
        if(ticCount2==18){
            hlPositionOfp2 = 22.8;
            player2Pawn.style.right = `${hlPositionOfp2 -4}rem`; 
            hlPositionOfp2 = 22.8-4;
        }
        else if(ticCount2==23){
           
            player2Pawn.style.right = `${0.25}rem`;
            player2Pawn.style.top = `${25.5}rem`;
            player2Pawn.style.transform = "rotate(0deg)";
            hlPositionOfp2 -= 3.8;
            
        }
        else{
            player2Pawn.style.right = `${hlPositionOfp2 - 3.8}rem`;
            hlPositionOfp2 -= 3.8;
        }
       
        ticCount2++;
    }
    function moveLeft2(){
        if(ticCount2==6){
            hlPositionOfp2 += 0.5;
            hlPositionOfp2 += 3.8;
            player2Pawn.style.right = `${hlPositionOfp2}rem`;
        }
        else if(ticCount2==11){
            
            hlPositionOfp2 += 0.8;
            player2Pawn.style.right = `${hlPositionOfp2 + 3.8}rem`;
            hlPositionOfp2 += 3.8;
            player2Pawn.style.transform = "rotate(180deg)";
            
        }
        else{
            player2Pawn.style.right = `${hlPositionOfp2 + 3.8}rem`;
            hlPositionOfp2 += 3.8;
        }
        ticCount2++;
    
    }
     
    async function move2() { 
        
        if(ticCount==ticCount2 && ticCount!=0){
            // player2Pawn.classList.add("margin1");         /////////////////////////////
            player1Pawn.classList.add("margin1");
        }
        if(ticCount!=ticCount2){
            // player2Pawn.classList.remove("margin");
            // player1Pawn.classList.remove("margin");  /////////////////////////////////
        }
        if(ticCount2>23){
            ticCount2=0;
        }
        
        if(ticCount2 >= 0 && ticCount2 <= 5) {
           await moveUp2();
            console.log("up");
        }
        else if(ticCount2>=6 && ticCount2<=11){
          await  moveLeft2();
            console.log("Left");
        }
        else if(ticCount2>=12 && ticCount2<=17){
           await moveDown2();
            console.log("Down");
        }
        else if(ticCount2>=18 && ticCount2<=23){
         await   moveRight2();
            console.log("Right");
        }
        let pawnSound = document.getElementById("pawnSound");
        pawnSound.play();

       
       
        
    }
 }
    
}


//for small screen like mobile phone





//for large screen like laptop
if(deviceWidth<=1200){
    let tickets = [
        {
            name : "start",

        },
        {
            name : "India",
            buyPrice : 3050,
            sellPrice : 3700,
            rent : [300,550,1600,3800],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            name : "Nepal",
            buyPrice : 3750,
            sellPrice : 4500,
            rent : [450,1450,2500,4050],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },

        {
            money : 1000,
            text : "Get $1000",
        },
        {
            name : "Pakistan",
            buyPrice : 2100,
            sellPrice : 3000,
            rent : [200,1450,2500,4050],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            name : "Iran",
            buyPrice : 3200,
            sellPrice : 3000,
            rent : [450,1450,2500,4050],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            name : "guess Game",
        },
        {
            name : "Russia",
            buyPrice : 2500,
            sellPrice : 3250,
            rent : [300,800,1650,2800],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            money : 500,
            text : "Get $500",
        },
        {
            name : "China",
            buyPrice : 2150,
            sellPrice : 4000,
            rent : [150,700,2000,3750],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            money : 1000,
            text : "Get $1000"
        },
        {
            name : "Japan",
            buyPrice : 1800,
            sellPrice : 4500,
            rent : [200,1150,2300,300],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            name : "Blue place",
        },
        {
            name : "Thailand",
            buyPrice : 2500,
            sellPrice : 2100,
            rent : [350,550,1500,1800],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            money : 500,
            text : "Get $500",
        },
        {
            name : "Australia",
            buyPrice : 2050,
            sellPrice : 4000,
            rent : [250,1150,2500,3750],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            money : 1000,
            text : "Get $1000"
        },
        {
            name : "France",
            buyPrice : 1750,
            sellPrice : 2500,
            rent : [200,950,1500,2650],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            money : 500,
        },
        {
            name : "Italy",
            buyPrice : 4500,
            sellPrice : 5700,
            rent : [700,2000,3500,4700],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        },
        {
            name : "London",
            buyPrice : 3500,
            sellPrice : 3000,
            rent : [300,900,1750,2200],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            money : 500,
            text : "Get $500",
        },
        {
            name : "US",
            buyPrice : 4150,
            sellPrice : 3500,
            rent : [400,1650,2500,3750],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,

        },
        {
            name : "Brazil",
            buyPrice : 2500,
            sellPrice : 2200,
            rent : [350,1000,2500,3600],
            rentCount : 0,
            p1Buy : false,
            p2Buy : false,
        }
    ];
 
    let restart = document.querySelector(".restart");
    let about = document.querySelector(".about");
   // Start button 
    window.onload = function() {
            const fullscreenButton = document.getElementById("fullscreenButton");   //start button work like as fullscreen also
            fullscreenButton.style.display = "block"; // Display the button
            fullscreenButton.onclick = () => {
                document.getElementById("startSound").play();
                setTimeout(()=>{
                    diceActivate1();      //dice1 button activate  
                    diceDisActivate2();    //dice2 disactivate
                    diceBox1.style.display = '';
                    diceBox2.style.display = '';
                    restart.style.display = "flex";
                    about.style.display = "flex";
                },5000);      
                document.querySelector("body").style.overflow = "hidden";
                fullscreenButton.style.display = "none";
                fullscreenButton.style.zIndex = '1';
                // Request fullscreen mode when the button is clicked
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                    document.documentElement.msRequestFullscreen();
                }
            };
    };
  
    restart.addEventListener("click", () => {
        document.getElementById("skipSound").play();   //click sound
        document.querySelector(".restartConfirm").style.display = "flex";
    });
   
    document.querySelector(".yes").onclick = function(){
        document.getElementById("skipSound").play();   //click sound
        location.reload(); // Refresh the page
    }
    document.querySelector(".no").onclick = function(){
        document.getElementById("skipSound").play();   //click sound
        document.querySelector(".restartConfirm").style.display = "none";
      
    }
    about.onclick = function(){
        document.getElementById("skipSound").play();
        document.querySelector(".aboutbox").style.display = "flex";
    }
   document.querySelector(".crossBtn").onclick = function(){
    document.querySelector(".aboutbox").style.display = "none";
    document.getElementById("skipSound").play();

   }
    let p1DiceActivate = false; 
    let p2DiceActivate = false;
      
    let diceBox1 = document.querySelector(".diceBox1");
    let diceBox2 = document.querySelector(".diceBox2");
    diceBox1.style.display = 'none';
    diceBox2.style.display = 'none';

     function diceActivate1(){
        p1DiceActivate = true; 
        diceBox1.style.animation = "move1 1s linear infinite";
        console.log(p1DiceActivate);
    }
    function diceDisActivate1(){
        p1DiceActivate = false; 
        diceBox1.style.animation = "none";
    }
    function diceActivate2(){
        p2DiceActivate = true; 
        diceBox2.style.animation = "move2 1s linear infinite";
    }
    function diceDisActivate2(){
        p2DiceActivate = false; 
        diceBox2.style.animation = "none";
    }
    
 
    let vsComputer = document.querySelector(".computer");
    let multplayer = document.querySelector(".multiplayer");
    

    let chooseComputer;

     
     multplayer.onclick = function(){
        chooseComputer = false;
        setTimeout(() => {
            document.querySelector(".welcomePage").style.display = "none";
        }, 1000);
        
        document.getElementById("skipSound").play();
        console.log(chooseComputer);
        PlayMultiplayer();
     }

     vsComputer.onclick = function(){
        diceActivate1();      //dice1 button activate  
        diceDisActivate2();
        chooseComputer = true;
        setTimeout(() => {
            document.querySelector(".welcomePage").style.display = "none";
        }, 1000);
        document.getElementById("skipSound").play();
        console.log(chooseComputer);
        document.querySelector(".player2").style.transform = "rotate(0deg)";
        PlayComputer();
     }
   

 function PlayComputer(){


     //name change of player2
     document.querySelector(".player2 .player2Name").innerText = "Computer";
          // Tickect Info
       let ticName = document.querySelector(".ticName");
       let buy = document.querySelector(".buy");
       let sell = document.querySelector(".sell");
       let r1 = document.querySelector(".r1");
       let r2 = document.querySelector(".r2");
       let r3 = document.querySelector(".r3");
       let r4 = document.querySelector(".r4");
   
  
    let buyBtn1 = document.querySelector(".buybtn1");             //buybtn at player1 dashboard
    let skipBtn1 = document.querySelector(".skipbtn1");             //skip btn
    
    function btnActivate1(){                                       //Activate buy and skip button
        buyBtn1.style.display = 'flex';
        skipBtn1.style.display = 'flex';
    };
    function btnDisActivate1(){                                //disActivate buy and skip function
        buyBtn1.style.display = 'none';
        skipBtn1.style.display = 'none';
    };
    btnDisActivate1();                                          //initially disactivate buy and skip buttons of player1
    
    let diceNum = 1;                                           // for Green Pawn    initial assingn value
    let vlPositionOfp1 = 0;                                    //vertical position of green pawn 
    let  hlPositionOfp1 =0;                                    //horizontal ... ... .. 
    let ticCount =0;                                           //track positions 0 to 23
    let player1Pawn = document.querySelector(".green");        //green pawn
    let p1track =0;                                            //track for tickets object
    
                          

   let  shallowCopy = { ...tickets};                           //shallo copy of tickets                
   
   let p1Amount = document.querySelector(".p1-balance");       //player1 amount show element
   let AmountOfP1 = 2500;                                    //player1 amount data
   p1Amount.innerText = `$${AmountOfP1}`;


   function showticket1(){                                      //function for show the ticket data
    ticName.innerText = `${shallowCopy[p1track].name}`;
    buy.innerText = `Buy : $${shallowCopy[p1track].buyPrice}`;
    sell.innerText = `Sell : $${shallowCopy[p1track].sellPrice}`;
    r1.innerText = `$${shallowCopy[p1track].rent[0]}`;
    r2.innerText = `$${shallowCopy[p1track].rent[1]}`;
    r3.innerText = `$${shallowCopy[p1track].rent[2]}`;
    r4.innerText = `$${shallowCopy[p1track].rent[3]}`;
}


document.addEventListener("keydown",async function(event) {             // using left and right arrow keys for buy1 and skip1 buttons
                           
    if (event.key === "Alt") {              //ctrl key for player1 dice
        await Activity1();
        
     } 
   // else if(event.key === "Control"){
    //     await Activity2();              //alt key for player2 dice

    // }
     
});
  
 document.getElementById("dice").addEventListener("click", async () => { 
       await Activity1();

 });
  async function Activity1(){
        if(p1DiceActivate == true){
         diceDisActivate1();

        diceNum = rollDice();                                 // Rolled player1 dice

        console.log("Rolled dice number:", diceNum);

        player1Pawn.style.zIndex = "5";                      //used for upper dawn concept of pawns 
        let delay = 1000;
        for (let i = 0; i < diceNum; i++) {
            setTimeout(() => {
                move1();                        // move player pawn
            }, delay);
            delay += 500;
        }
        if(p1track+diceNum<=23){
            p1track += diceNum;               //set p1track values
        }else{
            p1track =p1track+diceNum-24;
        }
        console.log(p1track); 


        //track places
    
        if(p1track==1 ||p1track==2 ||p1track==4 ||p1track==5 ||p1track==7 ||p1track==9 ||p1track==11 ||p1track==13 ||p1track==15 ||p1track==17 ||p1track==19 ||p1track==20 ||p1track==22 ||p1track==23){
            if(shallowCopy[p1track].p2Buy == false && shallowCopy[p1track].p1Buy == false){
                if(AmountOfP1>shallowCopy[p1track].buyPrice){
                    let delay = diceNum*500;
                    console.log(shallowCopy[p1track].name);
                    setTimeout(()=>{
                        showticket1();
                        btnActivate1();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);
                    buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                    buyBtn1 = document.querySelector(".buybtn1");
                  

                    buyBtn1.addEventListener("click",async ()=>{
                        
                        await Buy1();
                        
                    });


                    function Buy1(){
                          // assignment for p1Buy
                          shallowCopy[p1track].p1Buy = true; 
                    
                         // Hide ticket and update visuals
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                        },1000);
                         document.querySelector(`.Greenstamp${p1track + 1}`).style.opacity = "1";

                        // Calculate remaining amount
                          let remainAmount = AmountOfP1 - shallowCopy[p1track].buyPrice;
                          p1Amount.innerText = `$${remainAmount}`;
                          AmountOfP1 = remainAmount;

                         // Deactivate buttons
                         btnDisActivate1();
                         //playSound
                        document.getElementById("buySound").play();
                        document.querySelector(".player1-notice p").innerText = `-$${shallowCopy[p1track].buyPrice}`;
                        diceActivate2();
                        Activity2();
                    }
                    skipBtn1.addEventListener("click",async ()=>{
                        await skip1();
                      
                    });
                    function skip1(){
                        btnDisActivate1();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate2();
                            Activity2();
                            
                            
                        },1000);
                    }
        
                }
                else{
                    document.querySelector(".player1-notice p").innerText = "Amount not enough";
                    diceActivate2();
                    Activity2();

                }

            }
            else  if(shallowCopy[p1track].p2Buy == true){          //give rent 
                let delay = diceNum*500;
               setTimeout(()=>{
                    showticket1();
                    
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p1track].rent[shallowCopy[p1track].rentCount];
                    AmountOfP1 -= rentAmount;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    AmountOfP2 += rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".player1-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(".player2-notice p").innerText = `+$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p1track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() =>{
                        document.querySelector(`.r${shallowCopy[p1track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p1track].rentCount++;
                        if (shallowCopy[p1track].rentCount > 3) {
                            shallowCopy[p1track].rentCount = 0;
                        }
                        if(AmountOfP1<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("gameOverSound").play();
                            p1Amount.innerText = `-$${AmountOfP1*(-1)}`;
                            const imagePath2 = './assets/gameOver.jpg';
                            document.querySelector(".gameResult").style.backgroundImage = `url(${imagePath2})`;
                            diceDisActivate1();
                            diceDisActivate2();
                            let playAgainBtn = document.querySelector(".playAgain");
                            playAgainBtn.addEventListener("click", () => {
                                document.getElementById("skipSound").play();   //click sound
                                location.reload(); // Refresh the page
                            });
                        }
                        else{
                            diceActivate2();
                            Activity2();
                        }
                      
                    }, 2000);
               },delay);
            }

             //for sell the ticket 

            else if(shallowCopy[p1track].p1Buy == true){       
                if(AmountOfP1<shallowCopy[p1track].sellPrice){     //when amount < ticket sell price
                    let delay = diceNum*500;
                    console.log(shallowCopy[p1track].name);
                    setTimeout(()=>{
                        showticket1();
                        buyBtn1.innerText ="Sell";
                        
                        btnActivate1();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);

                    buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                    buyBtn1 = document.querySelector(".buybtn1");
                  
    
                    buyBtn1.addEventListener("click",async ()=>{                      //works as sell btn
                        await sell1();
                        
                    });
                    function sell1(){
                          // assignment for p1Buy
                          shallowCopy[p1track].p1Buy = false;    //update in tickets obj
                          shallowCopy[p1track].rentCount = 0;
                    
                         // Hide ticket and update visuals
                        setTimeout(()=>{
                            buyBtn1.innerText ="Buy";                                 // rechange name of button
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate2();
                            Activity2();
                        },1000);
                         document.querySelector(`.Greenstamp${p1track + 1}`).style.opacity = "0";
    
                        // Calculate remaining amount
                           AmountOfP1 = AmountOfP1 + shallowCopy[p1track].sellPrice;       //added sellprice in amount
                          p1Amount.innerText = `$${AmountOfP1}`;
    
                         // Deactivate buttons
                         btnDisActivate1();
                         //playSound
                        document.getElementById("buySound").play();
                        document.querySelector(".player1-notice p").innerText = `+$${shallowCopy[p1track].sellPrice}`;
                    }

                    skipBtn1.addEventListener("click",async ()=>{
                      await skip1();
                    });
                    function skip1(){
                        btnDisActivate1();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            buyBtn1.innerText ="Buy";
                            diceActivate2();
                            Activity2();
                        },1000);
                    } 

                }
                else{
                    document.querySelector(".player1-notice p").innerText = `Amount greater than sellPrice`;
                    diceActivate2();
                    Activity2();
                }
            }
            else{
                diceActivate2();
                Activity2();
            }
        }
        //track   get money places
        else if(p1track==3 ||p1track==8 ||p1track==10 ||p1track==14 ||p1track==16||p1track==21){
            let delay = diceNum*500;
            setTimeout(()=>{

                  document.querySelector(".getmoney").innerText = `Get $${shallowCopy[p1track].money}`;            
                  document.getElementById("coinSound").play();                                                    //play sound
                  document.querySelector(".player1-notice p").innerText = `+$${shallowCopy[p1track].money}`;
                  document.querySelector(".getmoney").style.opacity ='1';
                  AmountOfP1 = AmountOfP1 + shallowCopy[p1track].money;
                  p1Amount.innerText = `$${AmountOfP1}`;
                  document.getElementById("coinSound").play();

                  setTimeout(() => {
                    document.querySelector(".getmoney").style.opacity ='0'; 
                    diceActivate2();   
                    Activity2();                             
                }, 2000);

            },delay);

           
           
        }
        //track fine place
        else if(p1track==18){
            if(AmountOfP1>500){
                let delay = diceNum*500;
                setTimeout(()=>{
    
                      document.querySelector(".givefine").innerText = `Fine $${shallowCopy[p1track].money}`;
                      document.getElementById("loseSound").play();
                      document.querySelector(".player1-notice p").innerText = `-$${shallowCopy[p1track].money}`;
                      document.querySelector(".givefine").style.opacity ='1';
                      AmountOfP1 = AmountOfP1 - shallowCopy[p1track].money;
                      p1Amount.innerText = `$${AmountOfP1}`;
                      setTimeout(() => {
                        document.querySelector(".givefine").style.opacity ='0';
                        diceActivate2();
                        Activity2();
                    }, 2000);
    
                },delay);
            }
            else{
                diceActivate2();
                Activity2();
                document.querySelector(".player1-notice p").innerText = "Amount less than $500";
            }
           

        }
          //track guess game

        else if(p1track==6){

           if(AmountOfP1>=500){
            let delay = diceNum*500;
            setTimeout(()=>{
                buyBtn1.innerText ="Play";    //buy btn will work as play
                        
                btnActivate1();
                 
                document.querySelector(".guessGame").style.opacity ='1';   //game layout visible

                buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                buyBtn1 = document.querySelector(".buybtn1");
                buyBtn1.onclick= async function(){   
                    console.log("play clicked") ;     //it working as play btn 
                   await play1();
                   
                };
                function play1(){
                    document.getElementById("skipSound").play(); //click sound
                    btnDisActivate1();
                    buyBtn1.innerText ="Buy";                //Re change name of btn play to buy
                    document.querySelector(".player1-notice p").innerText = `-$${500}`;
                    AmountOfP1 -=500;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    document.querySelector(".guessGame").style.opacity ='0'; 

                    document.querySelector(".guessPress").style.display = 'flex';
                


                    document.querySelectorAll('.guessPress button').forEach(button => {
                        button.replaceWith(button.cloneNode(true));
                    });

                    const guessNumber = Math.floor(Math.random() * 5) + 1;
                    console.log(guessNumber);
                    let enterNum = 0;
                    document.querySelector(".guess1").addEventListener("click",()=>{
                        enterNum = 1;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess2").addEventListener("click",()=>{
                        enterNum = 2;
                        document.querySelector(".guessPress").style.display ='none';  
                        showGuessResult();
                    });
                    document.querySelector(".guess3").addEventListener("click",()=>{
                        enterNum = 3;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess4").addEventListener("click",()=>{
                        enterNum = 4;
                        document.querySelector(".guessPress").style.display ='none';  
                        showGuessResult();
                    });
                    document.querySelector(".guess5").addEventListener("click",()=>{
                        enterNum = 5;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });

                   function showGuessResult(){
                    if(enterNum == guessNumber){
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.querySelector(".player1-notice p").innerText = `+$${2500}`;
                        AmountOfP1 +=2500;
                        document.getElementById("coinSound").play();
                        p1Amount.innerText = `$${AmountOfP1}`;
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            diceActivate2();
                            Activity2();
                        },2500);

                    }
                    else{
                        const imagePath = './assets/guessLoss.jpg';

                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath})`;
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.getElementById("loseSound").play(); 
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            const imagePath2 = './assets/guessWin.jpg';
                            document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath2})`;
                            diceActivate2();
                            Activity2();
                        },2500);

                    }

                   }
                }
                skipBtn1.addEventListener("click",async ()=>{
                 await skip1();
                });
                function skip1(){
                    btnDisActivate1();
                    document.getElementById("skipSound").play();
                    setTimeout(()=>{
                        document.querySelector(".guessGame").style.opacity ='0';
                        buyBtn1.innerText ="Buy";
                        diceActivate2();   
                        Activity2();
                    },1000);
                }
               
            },delay);
           }
           else{

            diceActivate2(); 
            let delay = diceNum*1000;

            setTimeout(await Activity2,4000);
           
           }

        }
        else{
            diceActivate2();
            let delay = diceNum*1000;
            setTimeout(await Activity2,4000);
        }
    }

}
  
  

    function rollDice() {


     //FullScreen for small devices
          // Request fullscreen mode when the button is clicked
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }


        // Generate a random number between 1 and 6
        diceNum = Math.floor(Math.random() * 6) + 1;
        // diceNum = 6;
        
        // Play rolling sound
        let rollSound = document.getElementById("rollSound");
        rollSound.play();
        rollSound.volume = 0.2;

        // Define final rotations to match the faces correctly
        const rotations = {
             1: "rotateX(0deg) rotateY(0deg)",     // Face 1 (front)
             2: "rotateX(0deg) rotateY(180deg)",   // Face 2 (back)
             3: "rotateX(-90deg) rotateY(0deg)",    // Face 3 (top)
             4: "rotateX(90deg) rotateY(0deg)",   // Face 4 (bottom)
             5: "rotateX(0deg) rotateY(-90deg)",   // Face 5 (left)
             6: "rotateX(0deg) rotateY(90deg)"     // Face 6 (right)
        };

         // Generate additional random rotation for faster spinning effect
         const randomRotationX = Math.floor(Math.random() * 4) * 720; // Up to 4 full spins (720 degrees)
         const randomRotationY = Math.floor(Math.random() * 4) * 720;
         const randomRotationZ = Math.floor(Math.random() * 4) * 720;

         // Use the diceNum to set the correct rotation for the face, adding random spins
         document.getElementById("dice").style.transition = "transform 0.7s ease-out"; // Faster and smoother transition
         document.getElementById("dice").style.transform = 
             `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg) ` + rotations[diceNum];

        return diceNum;
    }


    
     //position of palyer 1 from start

     //position of palyer 1 from start
     function moveUp1(){

        if(ticCount==0){
            player1Pawn.style.top = `-3.15rem`;
            vlPositionOfp1 = -3.15;
            player1Pawn.style.left = "0.4rem"

        }
        else if(ticCount==5){
            vlPositionOfp1 -= 1.05;
            player1Pawn.style.top = `${vlPositionOfp1 -2.4}rem`;
            vlPositionOfp1 -= 2.4;
            player1Pawn.style.transform = "rotate(90deg)";
        }
        else{
            player1Pawn.style.top = `${vlPositionOfp1 -2.6}rem`;
            vlPositionOfp1 -= 2.6;
        }
      
        ticCount++;
    }
    function moveDown1(){
        
        if(ticCount==12){
            vlPositionOfp1 += 1.0;
            player1Pawn.style.top = `${vlPositionOfp1}rem`;
            // vlPositionOfp1 += 3.8;
            player1Pawn.style.left = `${hlPositionOfp1+3.4}rem`;
        }
        else if(ticCount==17){
            vlPositionOfp1 += 1;
            player1Pawn.style.top = `${vlPositionOfp1 +2.6}rem`;
            vlPositionOfp1 += 3.8;
            player1Pawn.style.transform = "rotate(-90deg)"
        }
        else{
            player1Pawn.style.top = `${vlPositionOfp1 +2.6}rem`;
            vlPositionOfp1 += 2.6;
        }
       
        ticCount++;
    }
    function moveRight1(){
        
        if(ticCount==6){
            player1Pawn.style.left = `4rem`
            hlPositionOfp1 = 4;
        }
        else if(ticCount==11){
            hlPositionOfp1 += 0.25;
            player1Pawn.style.left = `${hlPositionOfp1 + 2.6}rem`;
            vlPositionOfp1 += 2.6;
            player1Pawn.style.transform = "rotate(180deg)";
        }
        else{
            player1Pawn.style.left = `${hlPositionOfp1 + 2.6}rem`;
            hlPositionOfp1 += 2.6;
        }
       
        ticCount++;
    }
    function moveLeft1(){
        if(ticCount==18){
            hlPositionOfp1 -= 0.4;
            player1Pawn.style.left = `${hlPositionOfp1}rem`;
            // hlPositionOfp1 -= 3.75;
            // player1Pawn.style.left = `6.9rem`
            // hlPositionOfp1 = 7;
        }
        else if(ticCount==23){
            
            player1Pawn.style.left = `${1}rem`;
            player1Pawn.style.top = `${0.5}rem`;
            player1Pawn.style.transform = "rotate(0deg)";
            
        }
        else{
            player1Pawn.style.left = `${hlPositionOfp1 - 2.6}rem`;
            hlPositionOfp1 -= 2.6;
        }
        ticCount++;
    
    }

    async function move1() { 
         
        if(ticCount>23){
            ticCount=0;
        }
        
        if(ticCount >= 0 && ticCount <= 5) {
           await moveUp1();
            console.log("up");
        }
        else if(ticCount>=6 && ticCount<=11){
          await  moveRight1();
            console.log("Right");
        }
        else if(ticCount>=12 && ticCount<=17){
           await moveDown1();
            console.log("Down");
        }
        else if(ticCount>=18 && ticCount<=23){
         await   moveLeft1();
            console.log("Left");
        }

        let pawnSound = document.getElementById("pawnSound");
        pawnSound.play(); 
    }



        // Similar logic can be used for the second dice

        let buyBtn2 = document.querySelector(".buybtn2");               //buybtn at player2 dashboard
        let skipBtn2 = document.querySelector(".skipbtn2");             //skip btn
        function btnActivate2(){                                        //Activate buy and skip button
            buyBtn2.style.display = 'flex';
            skipBtn2.style.display = 'flex';
        };
        function btnDisActivate2(){                                     //disActivate buy and skip function
            buyBtn2.style.display = 'none';
            skipBtn2.style.display = 'none';
        };
        btnDisActivate2();                                              //initially disactivate buy and skip buttons of player2


        let diceNum2 = 1;                                               // for Green Pawn
        let vlPositionOfp2 = 0;                                         //
        let  hlPositionOfp2 =0;
        let ticCount2 =0;
        let player2Pawn = document.querySelector(".blue");
        let p2track =12;
        


        let p2Amount = document.querySelector(".p2-balance");       //player1 amount show element
        let AmountOfP2 = 2500;                                    //player1 amount data
        p2Amount.innerText = `$${AmountOfP2}`;
     
     
        function showticket2(){                                      //function for show the ticket data
         ticName.innerText = `${shallowCopy[p2track].name}`;
         buy.innerText = `Buy : $${shallowCopy[p2track].buyPrice}`;
         sell.innerText = `Sell : $${shallowCopy[p2track].sellPrice}`;
         r1.innerText = `$${shallowCopy[p2track].rent[0]}`;
         r2.innerText = `$${shallowCopy[p2track].rent[1]}`;
         r3.innerText = `$${shallowCopy[p2track].rent[2]}`;
         r4.innerText = `$${shallowCopy[p2track].rent[3]}`;
        }


  
    // document.getElementById("dice2").addEventListener("click", async () => { 
    //   await  Activity2();
    // });
    
   async function Activity2(){

    setTimeout(async()=>{

   
     if(p2DiceActivate==true){
            diceNum2 = rollDice2();
            diceDisActivate2();
            console.log("Rolled dice 2 number:", diceNum2);

            let delay = 1000;

            player1Pawn.style.zIndex = "1";   //uper on blue

            for(let i=0;i<diceNum2;i++){
                if(ticCount2>23){
                   ticCount2=0;
                }  
                setTimeout( await move2,delay);
                delay += 500;
            }
            if(p2track+diceNum2<24){
                p2track +=diceNum2;
            }
            else if(p2track+diceNum2==24){
                p2track =0;
            }
            else {
                p2track = (p2track+diceNum2 - 24);
            }
            console.log(p2track);


                 //track places
    
        if(p2track==1 ||p2track==2 ||p2track==4 ||p2track==5 ||p2track==7 ||p2track==9 ||p2track==11 ||p2track==13 ||p2track==15 ||p2track==17 ||p2track==19 ||p2track==20 ||p2track==22 ||p2track==23){
            if(shallowCopy[p2track].p1Buy == false && shallowCopy[p2track].p2Buy == false){
                if(AmountOfP2>shallowCopy[p2track].buyPrice){
                    let delay = diceNum2*500;
                    console.log(shallowCopy[p2track].name);
                    setTimeout(async()=>{
                       await showticket2();
                       await btnActivate2();
                       document.querySelector(".tickets").style.opacity = '1';
                        await Buy2();

                    },delay);
                    buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                    buyBtn2 = document.querySelector(".buybtn2");
                  

                  //  buyBtn2.addEventListener("click",async ()=>{
                        
                      
                    //    await skip2();

                //    });
                    function Buy2(){
                           // assignment for p1Buy
                           shallowCopy[p2track].p2Buy = true; 
                         
                           // Calculate remaining amount
                             let remainAmount = AmountOfP2 - shallowCopy[p2track].buyPrice;
                             p2Amount.innerText = `$${remainAmount}`;
                             AmountOfP2 = remainAmount;
                            // Deactivate buttons
                            //playSound
                          
                         
                    
                           // Hide ticket and update visuals
                          setTimeout(()=>{
                             document.querySelector(".player2-notice p").innerText = `Bought ticket : -$${shallowCopy[p2track].buyPrice}`;
                             document.getElementById("buySound").play();
                             document.querySelector(`.Bluestamp${p2track + 1}`).style.opacity = "1";
                              document.querySelector(".tickets").style.opacity = '0';
                              diceActivate1();
                              btnDisActivate2();
                          },2000);
                          
                    }
                    function skip2(){
                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate1();
                            
                        },2000);
                    }

                    skipBtn2.addEventListener("click",()=>{

                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate1();
                            
                        },1000);
                    })

                }
                else{
                    document.querySelector(".player2-notice p").innerText = "Amount not enough";
                    diceActivate1();
                }

            }
            
            else  if(shallowCopy[p2track].p1Buy == true){          //give rent 
                let delay = diceNum2*500;
               setTimeout(()=>{
                    showticket2();
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p2track].rent[shallowCopy[p2track].rentCount];
                    AmountOfP2 -= rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    AmountOfP1 += rentAmount;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    document.querySelector(".player2-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(".player1-notice p").innerText = `+$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p2track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() => {
                        document.querySelector(`.r${shallowCopy[p2track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p1track].rentCount++;
                        if (shallowCopy[p1track].rentCount > 3) {
                            shallowCopy[p1track].rentCount = 0;
                        }
                        if(AmountOfP2<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("winSound").play();
                            p2Amount.innerText = `-$${AmountOfP2*(-1)}`;
                            const imagePath1 = './assets/player1Wins.jpg';
                            document.querySelector(".gameResult").style.backgroundImage = `url(${imagePath1})`;
                            diceDisActivate1();
                            diceDisActivate2();
                            let playAgainBtn = document.querySelector(".playAgain");
                            playAgainBtn.addEventListener("click", () => {
                                document.getElementById("skipSound").play();   //click sound
                                location.reload(); // Refresh the page
                            });
                        }
                        else{
                            diceActivate1();
                        }
                    }, 2000);


               },delay);
            }

             //for sell the ticket 
             
            else if(shallowCopy[p2track].p2Buy == true){       
                if(AmountOfP2<shallowCopy[p2track].sellPrice){     //when amount < ticket sell price
                    let delay = diceNum*500;
                    console.log(shallowCopy[p2track].name);
                    setTimeout(async()=>{
                      await  showticket2();
                        buyBtn2.innerText ="Sell";
                      await  btnActivate2();
                        document.querySelector(".tickets").style.opacity = '1';
                        await sell2();
                    },delay);
                    buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                    buyBtn2 = document.querySelector(".buybtn2");
                  
    
                   // buyBtn2.addEventListener("click",async()=>{     //works as sell btn
                     

                    // });

                    
                    function sell2(){
                              // assignment for p1Buy
                              shallowCopy[p2track].p2Buy = false;    //update in tickets obj
                              shallowCopy[p2track].rentCount = 0;
                        
                             // Hide ticket and update visuals
                            setTimeout(()=>{
                                buyBtn2.innerText ="Buy";                                 // rechange name of button
                                document.querySelector(".tickets").style.opacity = '0';
                                diceActivate1();
                                btnDisActivate2();
                            },2000);
                             document.querySelector(`.Bluestamp${p2track + 1}`).style.opacity = "0";
        
                            // Calculate  amount
                               AmountOfP2 = AmountOfP2 + shallowCopy[p2track].sellPrice;       //added sellprice in amount
                              p2Amount.innerText = `$${AmountOfP2}`;
        
                             // Deactivate buttonn
                             //playSound
                            document.getElementById("buySound").play();
                            document.querySelector(".player2-notice p").innerText = `Sold ticket : +$${shallowCopy[p2track].sellPrice}`;
                    }

                    skipBtn2.addEventListener("click",()=>{
                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            buyBtn2.innerText ="Buy";
                            diceActivate1();
                            
                        },1000);
                    })
    
                }
                else{
                    document.querySelector(".player2-notice p").innerText = `Amount greater than sellPrice`;
                    diceActivate1();
                }
            }



            else if(shallowCopy[p2track].p1Buy == true){    //for giving rent

                let delay = diceNum2*500;
                setTimeout(()=>{
                    showticket2();
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p2track].rent[shallowCopy[p2track].rentCount];
                    AmountOfP2 -= rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".player2-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p2track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() => {
                        document.querySelector(`.r${shallowCopy[p2track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p2track].rentCount++;
                        if (shallowCopy[p2track].rentCount > 3) {
                            shallowCopy[p2track].rentCount = 0;
                        }
                        if(AmountOfP2<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("coinSound").play();
                            p2Amount.innerText = `-$${AmountOfP2*(-1)}`;
                            diceDisActivate1();
                            diceDisActivate2();
                            
                                let playAgainBtn = document.querySelector(".playAgain");
                                playAgainBtn.addEventListener("click", () => {
                                    location.reload(); // Refresh the page
                                });
                                   
                        }
                        else{
                            diceActivate1();
                        }
                       
                        
                    }, 2000);

               },delay);

            }
            else{
                diceActivate1();
            }
         
        }
             //track   get money places
        else if(p2track==3 ||p2track==8 ||p2track==10 ||p2track==14 ||p2track==16||p2track==21){
                let delay = diceNum2*500;
                setTimeout(()=>{
    
                      document.querySelector(".getmoney").innerText = `Get $${shallowCopy[p2track].money}`;            
                      document.getElementById("coinSound").play();                                                    //play sound
                      document.querySelector(".player2-notice p").innerText = `+$${shallowCopy[p2track].money}`;
                      document.querySelector(".getmoney").style.opacity ='1';
                      AmountOfP2 = AmountOfP2 + shallowCopy[p2track].money;
                      p2Amount.innerText = `$${AmountOfP2}`;
    
                      setTimeout(() => {
                        document.querySelector(".getmoney").style.opacity ='0';    
                        diceActivate1();                             
                    }, 2000);
    
                },delay);
   
        }

            //track fine place
        else if(p2track==18){
            if(AmountOfP2>500){
                let delay = diceNum2*500;
                setTimeout(()=>{
    
                      document.querySelector(".givefine").innerText = `Fine $${shallowCopy[p2track].money}`;
                      document.getElementById("loseSound").play();
                      document.querySelector(".player2-notice p").innerText = `-$${shallowCopy[p2track].money}`;
                      document.querySelector(".givefine").style.opacity ='1';
                      AmountOfP2 = AmountOfP2 - shallowCopy[p2track].money;
                      p2Amount.innerText = `$${AmountOfP2}`;
                      setTimeout(() => {
                        document.querySelector(".givefine").style.opacity ='0';
                        diceActivate1();
                    }, 2000);
    
                },delay);
            }
            else{
                diceActivate1();
                document.querySelector(".player2-notice p").innerText = "Amount less than $500";
            }
    
        }

        else if(p2track==6){
          if(AmountOfP2>=500){
            let delay = diceNum2*500;
            setTimeout(()=>{
                buyBtn2.innerText ="Play";    //buy btn will work as play
                        
                btnActivate2();
                skip2();
                 
                document.querySelector(".guessGame").style.opacity ='1';   //game layout visible

                buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                buyBtn2 = document.querySelector(".buybtn2");

                buyBtn2.addEventListener("click",()=>{         //it working as play btn
                    document.getElementById("skipSound").play(); //click sound
                    btnDisActivate2();
                    buyBtn2.innerText ="Buy";        //rechange btn name play to Buy

                    document.querySelector(".player2-notice p").innerText = `-$${500}`;
                    AmountOfP2 -=500;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".guessGame").style.opacity ='0'; 

                    document.querySelector(".guessPress").style.display ='flex'; 


                    document.querySelectorAll('.guessPress button').forEach(button => {        // removing eventlistener
                        button.replaceWith(button.cloneNode(true));
                    });

                    const guessNumber = Math.floor(Math.random() * 5) + 1;
                    console.log(guessNumber);
                    let enterNum = 0;
                    document.querySelector(".guess1").addEventListener("click",()=>{
                        enterNum = 1;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess2").addEventListener("click",()=>{
                        enterNum = 2;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess3").addEventListener("click",()=>{
                        enterNum = 3;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess4").addEventListener("click",()=>{
                        enterNum = 4;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess5").addEventListener("click",()=>{
                        enterNum = 5;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                   function showGuessResult(){
                    if(enterNum == guessNumber){
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.querySelector(".player2-notice p").innerText = `+$${2500}`;
                        AmountOfP2 +=2500;
                        document.getElementById("coinSound").play();
                        p2Amount.innerText = `$${AmountOfP2}`;
                        ////////////////////////////////////////////   ad sound
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            diceActivate1();
                        },2500);

                    }
                    else{
                        const imagePath = './assets/guessLoss.jpg';

                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath})`;
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.getElementById("loseSound").play();
                        ////////////////////////////////////////////////////////////// ad sound 
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            const imagePath2 = './assets/guessWin.jpg';
                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath2})`;
                        diceActivate1();
                        },2500);

                    }

                   }
                   
                });

                skipBtn2.addEventListener("click",async()=>{
                 await skip2();
                });
                function skip2(){
                    btnDisActivate2();
                    document.getElementById("skipSound").play();
                    setTimeout(()=>{
                        document.querySelector(".guessGame").style.opacity ='0';
                        buyBtn2.innerText ="Buy";
                        diceActivate1();
                    },1000);
                }

            },delay);
         }
         else{
            diceActivate1();
         }
        }
        else{
            diceActivate1();
        } 
           
     }  
    },2000); 
    }  
    
               //       <----    closing if p2DiceActive is true

    function rollDice2() {
         diceNum2 = Math.floor(Math.random() * 6) + 1;
        //  diceNum2 = 3;
         
        
         let rollSound = document.getElementById("rollSound");
         rollSound.play();

        const rotations = {
            1: "rotateX(0deg) rotateY(0deg)",     // Face 1 (front)
            2: "rotateX(0deg) rotateY(180deg)",   // Face 2 (back)
            3: "rotateX(-90deg) rotateY(0deg)",    // Face 3 (bottom)
            4: "rotateX(90deg) rotateY(0deg)",   // Face 4 (top)
            5: "rotateX(0deg) rotateY(-90deg)",   // Face 5 (left)
            6: "rotateX(0deg) rotateY(90deg)"     // Face 6 (right)
        };

        const randomRotationX = Math.floor(Math.random() * 4) * 720;
        const randomRotationY = Math.floor(Math.random() * 4) * 720;
        const randomRotationZ = Math.floor(Math.random() * 4) * 720;

        document.getElementById("dice2").style.transition = "transform 0.7s ease-out";
        document.getElementById("dice2").style.transform = 
        `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg) ` + rotations[diceNum2];

        return diceNum2;
    }

     //position of palyer 1 from start
     function moveUp2(){

        if(ticCount2==0){
            player2Pawn.style.top = `4rem`;
            player2Pawn.style.left = `0.6rem`;
            vlPositionOfp2 = 4.0;
        }
        else if(ticCount2==5){
            vlPositionOfp2 += 0.9;
            player2Pawn.style.top = `${vlPositionOfp2+2.6}rem`;
            // vlPositionOfp2 -= 3.8;
            player2Pawn.style.transform = "rotate(-90deg)";
        }
        else{
            player2Pawn.style.top = `${vlPositionOfp2 +2.6}rem`;
            vlPositionOfp2 += 2.6;
        }
      
        ticCount2++;
    }
    function moveDown2(){
        
        if(ticCount2==12){
            vlPositionOfp2 -= 1.05;
            player2Pawn.style.top = `${vlPositionOfp2}rem`;
            player2Pawn.style.left = `${hlPositionOfp2-3.15}rem`;

            // vlPositionOfp2 += 3.8;
        }
        else if(ticCount2==17){
            vlPositionOfp2 -= 1.05;
            player2Pawn.style.top = `${vlPositionOfp2 -2.4}rem`;
            vlPositionOfp2 -= 2.4;
            player2Pawn.style.transform = "rotate(90deg)";
        }
        else{
            player2Pawn.style.top = `${vlPositionOfp2 -2.6}rem`;
            vlPositionOfp2 -= 2.6;
        }
       
        ticCount2++;
    }
    function moveRight2(){
        
        if(ticCount2==6){
            hlPositionOfp2 -=3.25;
            player2Pawn.style.left = `${hlPositionOfp2}rem`; ///// ///// / // /// / /// / // //////
            // hlPositionOfp2 = 22.8-5;
        }
        else if(ticCount2==11){
            hlPositionOfp2 -= 0.3;
            player2Pawn.style.left = `${hlPositionOfp2 - 2.6}rem`;
            // vlPositionOfp2 -= 3.8;
            player2Pawn.style.transform = "rotate(-0deg)";

        }
        else{
            player2Pawn.style.left = `${hlPositionOfp2 - 2.6}rem`;
            hlPositionOfp2 -= 2.6;
        }
       
        ticCount2++;
    }
    function moveLeft2(){
        if(ticCount2==18){
            hlPositionOfp2 += 0.5;
            player2Pawn.style.left = `${hlPositionOfp2}rem`;
            // hlPositionOfp1 += 3.8;
          
            // hlPositionOfp1 = 7;
        }
        else if(ticCount2==23){
            
            player2Pawn.style.left = `${-0.25}rem`;
            player2Pawn.style.top = `${0.75}rem`;
            player2Pawn.style.transform = "rotate(180deg)";
            hlPositionOfp2 =0;
            vlPositionOfp2 =0;
        }
        else{
            player2Pawn.style.left = `${hlPositionOfp2 + 2.6}rem`;
            hlPositionOfp2 += 2.6;
        }
        ticCount2++;
    
    }
     
    async function move2() { 
        
        if(ticCount==ticCount2 && ticCount!=0){
            // player2Pawn.classList.add("margin1");         /////////////////////////////
            player1Pawn.classList.add("margin1");
        }
        if(ticCount!=ticCount2){
            // player2Pawn.classList.remove("margin");
            // player1Pawn.classList.remove("margin");  /////////////////////////////////
        }
        if(ticCount2>23){
            ticCount2=0;
        }
        
        if(ticCount2 >= 0 && ticCount2 <= 5) {
           await moveUp2();
            console.log("up");
        }
        else if(ticCount2>=6 && ticCount2<=11){
          await  moveRight2();
            console.log("Right");
        }
        else if(ticCount2>=12 && ticCount2<=17){
           await moveDown2();
            console.log("Down");
        }
        else if(ticCount2>=18 && ticCount2<=23){
         await   moveLeft2();
            console.log("Left");
        }
        let pawnSound = document.getElementById("pawnSound");
        pawnSound.play();  
    }

     }
     function PlayMultiplayer(){

     

       // Tickect Info
       let ticName = document.querySelector(".ticName");
       let buy = document.querySelector(".buy");
       let sell = document.querySelector(".sell");
       let r1 = document.querySelector(".r1");
       let r2 = document.querySelector(".r2");
       let r3 = document.querySelector(".r3");
       let r4 = document.querySelector(".r4");
   
   
       let p1DiceActivate = true; 
       let p2DiceActivate = false;

  
    let diceBox1 = document.querySelector(".diceBox1");
    let diceBox2 = document.querySelector(".diceBox2");
    diceBox1.style.display = 'none';
    diceBox2.style.display = 'none';


    function diceActivate1(){
        p1DiceActivate = true; 
        diceBox1.style.animation = "move1 1s linear infinite";
        console.log(p1DiceActivate);
    }
    function diceDisActivate1(){
        p1DiceActivate = false; 
        diceBox1.style.animation = "none";
    }
    function diceActivate2(){
        p2DiceActivate = true; 
        diceBox2.style.animation = "move2 1s linear infinite";
    }
    function diceDisActivate2(){
        p2DiceActivate = false; 
        diceBox2.style.animation = "none";
    }
  
    let buyBtn1 = document.querySelector(".buybtn1");             //buybtn at player1 dashboard
    let skipBtn1 = document.querySelector(".skipbtn1");             //skip btn
    
    function btnActivate1(){                                       //Activate buy and skip button
        buyBtn1.style.display = 'flex';
        skipBtn1.style.display = 'flex';
    };
    function btnDisActivate1(){                                //disActivate buy and skip function
        buyBtn1.style.display = 'none';
        skipBtn1.style.display = 'none';
    };
    btnDisActivate1();                                          //initially disactivate buy and skip buttons of player1
    
    let diceNum = 1;                                           // for Green Pawn    initial assingn value
    let vlPositionOfp1 = 0;                                    //vertical position of green pawn 
    let  hlPositionOfp1 =0;                                    //horizontal ... ... .. 
    let ticCount =0;                                           //track positions 0 to 23
    let player1Pawn = document.querySelector(".green");        //green pawn
    let p1track =0;                                            //track for tickets object
    
                          

   let  shallowCopy = { ...tickets};                           //shallo copy of tickets                
   
   let p1Amount = document.querySelector(".p1-balance");       //player1 amount show element
   let AmountOfP1 = 2500;                                    //player1 amount data
   p1Amount.innerText = `$${AmountOfP1}`;


   function showticket1(){                                      //function for show the ticket data
    ticName.innerText = `${shallowCopy[p1track].name}`;
    buy.innerText = `Buy : $${shallowCopy[p1track].buyPrice}`;
    sell.innerText = `Sell : $${shallowCopy[p1track].sellPrice}`;
    r1.innerText = `$${shallowCopy[p1track].rent[0]}`;
    r2.innerText = `$${shallowCopy[p1track].rent[1]}`;
    r3.innerText = `$${shallowCopy[p1track].rent[2]}`;
    r4.innerText = `$${shallowCopy[p1track].rent[3]}`;
}



document.addEventListener("keydown",async function(event) {             // using left and right arrow keys for buy1 and skip1 buttons
                           
    if (event.key === "Alt") {              //ctrl key for player1 dice
        await Activity1();
        
    } else if(event.key === "Control"){
        await Activity2();              //alt key for player2 dice

    }
     
});
  
    document.getElementById("dice").addEventListener("click", async () => { 
       await Activity1();

    });
  async function Activity1(){
        if(p1DiceActivate == true){
         diceDisActivate1();

        diceNum = rollDice();                                 // Rolled player1 dice

        console.log("Rolled dice number:", diceNum);

        player1Pawn.style.zIndex = "5";                      //used for upper dawn concept of pawns 
        let delay = 1000;
        for (let i = 0; i < diceNum; i++) {
            setTimeout(() => {
                move1();                        // move player pawn
            }, delay);
            delay += 500;
        }
        if(p1track+diceNum<=23){
            p1track += diceNum;               //set p1track values
        }else{
            p1track =p1track+diceNum-24;
        }
        console.log(p1track); 


        //track places
    
        if(p1track==1 ||p1track==2 ||p1track==4 ||p1track==5 ||p1track==7 ||p1track==9 ||p1track==11 ||p1track==13 ||p1track==15 ||p1track==17 ||p1track==19 ||p1track==20 ||p1track==22 ||p1track==23){
            if(shallowCopy[p1track].p2Buy == false && shallowCopy[p1track].p1Buy == false){
                if(AmountOfP1>shallowCopy[p1track].buyPrice){
                    let delay = diceNum*500;
                    console.log(shallowCopy[p1track].name);
                    setTimeout(()=>{
                        showticket1();
                        btnActivate1();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);
                    buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                    buyBtn1 = document.querySelector(".buybtn1");
                  

                    buyBtn1.addEventListener("click",async ()=>{
                        
                        await Buy1();
                        
                    });


                    function Buy1(){
                          // assignment for p1Buy
                          shallowCopy[p1track].p1Buy = true; 
                    
                         // Hide ticket and update visuals
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                        },1000);
                         document.querySelector(`.Greenstamp${p1track + 1}`).style.opacity = "1";

                        // Calculate remaining amount
                          let remainAmount = AmountOfP1 - shallowCopy[p1track].buyPrice;
                          p1Amount.innerText = `$${remainAmount}`;
                          AmountOfP1 = remainAmount;

                         // Deactivate buttons
                         btnDisActivate1();
                         //playSound
                        document.getElementById("buySound").play();
                        document.querySelector(".player1-notice p").innerText = `-$${shallowCopy[p1track].buyPrice}`;
                        diceActivate2();
                    }
                    skipBtn1.addEventListener("click",async ()=>{
                        await skip1();
                      
                    });
                    function skip1(){
                        btnDisActivate1();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate2();
                            
                        },1000);
                    }
        
                }
                else{
                    document.querySelector(".player1-notice p").innerText = "Amount not enough";
                    diceActivate2();

                }

            }
            else  if(shallowCopy[p1track].p2Buy == true){          //give rent 
                let delay = diceNum*500;
               setTimeout(()=>{
                    document.querySelector(".tickets").style.transform = "rotate(180deg)";
                    showticket1();
                    
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p1track].rent[shallowCopy[p1track].rentCount];
                    AmountOfP1 -= rentAmount;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    AmountOfP2 += rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".player1-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(".player2-notice p").innerText = `+$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p1track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() =>{
                        document.querySelector(`.r${shallowCopy[p1track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        document.querySelector(".tickets").style.transform = "rotate(0deg)";   // rotate for oppose player
                        shallowCopy[p1track].rentCount++;
                        if (shallowCopy[p1track].rentCount > 3) {
                            shallowCopy[p1track].rentCount = 0;
                        }
                        if(AmountOfP1<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.transform = "rotate(180deg)";
                            gameResult.style.display = "flex";
                            document.getElementById("winSound").play();
                            p1Amount.innerText = `-$${AmountOfP1*(-1)}`;
                            const imagePath2 = './assets/player2Wins.jpg';
                            document.querySelector(".gameResult").style.backgroundImage = `url(${imagePath2})`;
                            diceDisActivate1();
                            diceDisActivate2();
                            let playAgainBtn = document.querySelector(".playAgain");
                            playAgainBtn.addEventListener("click", () => {
                                document.getElementById("skipSound").play();   //click sound
                                location.reload(); // Refresh the page
                            });
                        }
                        else{
                            diceActivate2();
                        }
                      
                    }, 2000);
               },delay);
            }

             //for sell the ticket 

            else if(shallowCopy[p1track].p1Buy == true){       
                if(AmountOfP1<shallowCopy[p1track].sellPrice){     //when amount < ticket sell price
                    let delay = diceNum*500;
                    console.log(shallowCopy[p1track].name);
                    setTimeout(()=>{
                        showticket1();
                        buyBtn1.innerText ="Sell";
                        
                        btnActivate1();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);

                    buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                    buyBtn1 = document.querySelector(".buybtn1");
                  
    
                    buyBtn1.addEventListener("click",async ()=>{                      //works as sell btn
                        await sell1();
                        
                    });
                    function sell1(){
                          // assignment for p1Buy
                          shallowCopy[p1track].p1Buy = false;    //update in tickets obj
                          shallowCopy[p1track].rentCount = 0;
                    
                         // Hide ticket and update visuals
                        setTimeout(()=>{
                            buyBtn1.innerText ="Buy";                                 // rechange name of button
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate2();
                        },1000);
                         document.querySelector(`.Greenstamp${p1track + 1}`).style.opacity = "0";
    
                        // Calculate remaining amount
                           AmountOfP1 = AmountOfP1 + shallowCopy[p1track].sellPrice;       //added sellprice in amount
                          p1Amount.innerText = `$${AmountOfP1}`;
    
                         // Deactivate buttons
                         btnDisActivate1();
                         //playSound
                        document.getElementById("buySound").play();
                        document.querySelector(".player1-notice p").innerText = `+$${shallowCopy[p1track].sellPrice}`;
                    }

                    skipBtn1.addEventListener("click",async ()=>{
                      await skip1();
                    });
                    function skip1(){
                        btnDisActivate1();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            buyBtn1.innerText ="Buy";
                            diceActivate2();
                            
                        },1000);
                    }
                  

                }
                else{
                    document.querySelector(".player1-notice p").innerText = `Amount greater than sellPrice`;
                    diceActivate2();
                }
            }
            else{
                diceActivate2();
            }
        }
        //track   get money places
        else if(p1track==3 ||p1track==8 ||p1track==10 ||p1track==14 ||p1track==16||p1track==21){
            let delay = diceNum*500;
            setTimeout(()=>{
                
                  document.querySelector(".getmoney").innerText = `Get $${shallowCopy[p1track].money}`;            
                  document.getElementById("coinSound").play();                                                    //play sound
                  document.querySelector(".player1-notice p").innerText = `+$${shallowCopy[p1track].money}`;
                  document.querySelector(".getmoney").style.opacity ='1';
                  AmountOfP1 = AmountOfP1 + shallowCopy[p1track].money;
                  p1Amount.innerText = `$${AmountOfP1}`;
                  document.getElementById("coinSound").play();

                  setTimeout(() => {
                    document.querySelector(".getmoney").style.opacity ='0'; 
                    diceActivate2();                                
                }, 2000);

            },delay);

           
           
        }
        //track fine place
        else if(p1track==18){
            if(AmountOfP1>500){
                let delay = diceNum*500;
                setTimeout(()=>{
    
                      document.querySelector(".givefine").innerText = `Fine $${shallowCopy[p1track].money}`;
                      document.getElementById("loseSound").play();
                      document.querySelector(".player1-notice p").innerText = `-$${shallowCopy[p1track].money}`;
                      document.querySelector(".givefine").style.opacity ='1';
                      AmountOfP1 = AmountOfP1 - shallowCopy[p1track].money;
                      p1Amount.innerText = `$${AmountOfP1}`;
                      setTimeout(() => {
                        document.querySelector(".givefine").style.opacity ='0';
                        diceActivate2();
                    }, 2000);
    
                },delay);
            }
            else{
                diceActivate2();
                document.querySelector(".player1-notice p").innerText = "Amount less than $500";
            }
           

        }
          //track guess game

        else if(p1track==6){

           if(AmountOfP1>=500){
            let delay = diceNum*500;
            setTimeout(()=>{
                buyBtn1.innerText ="Play";    //buy btn will work as play
                        
                btnActivate1();
                 
                document.querySelector(".guessGame").style.opacity ='1';   //game layout visible

                buyBtn1.replaceWith(buyBtn1.cloneNode(true));               //removing eventlistener  
                buyBtn1 = document.querySelector(".buybtn1");

                buyBtn1.addEventListener("click",async ()=>{         //it working as play btn
                   await play1();
                   
                });
                function play1(){
                    document.getElementById("skipSound").play(); //click sound
                    btnDisActivate1();
                    buyBtn1.innerText ="Buy";                //Re change name of btn play to buy
                    document.querySelector(".player1-notice p").innerText = `-$${500}`;
                    AmountOfP1 -=500;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    document.querySelector(".guessGame").style.opacity ='0'; 

                    document.querySelector(".guessPress").style.display ='flex'; 


                    document.querySelectorAll('.guessPress button').forEach(button => {
                        button.replaceWith(button.cloneNode(true));
                    });

                    const guessNumber = Math.floor(Math.random() * 5) + 1;
                    console.log(guessNumber);
                    let enterNum = 0;
                    document.querySelector(".guess1").addEventListener("click",()=>{
                        enterNum = 1;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess2").addEventListener("click",()=>{
                        enterNum = 2;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess3").addEventListener("click",()=>{
                        enterNum = 3;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess4").addEventListener("click",()=>{
                        enterNum = 4;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });
                    document.querySelector(".guess5").addEventListener("click",()=>{
                        enterNum = 5;
                        document.querySelector(".guessPress").style.display ='none'; 
                        showGuessResult();
                    });

                   function showGuessResult(){
                    if(enterNum == guessNumber){
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.querySelector(".player1-notice p").innerText = `+$${2500}`;
                        AmountOfP1 +=2500;
                        document.getElementById("coinSound").play();
                        p1Amount.innerText = `$${AmountOfP1}`;
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            diceActivate2();
                        },2500);

                    }
                    else{
                        const imagePath = './assets/guessLoss.jpg';

                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath})`;
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.getElementById("loseSound").play(); 
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            const imagePath2 = './assets/guessWin.jpg';
                            document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath2})`;
                            diceActivate2();
                        },2500);

                    }

                   }
                }
                skipBtn1.addEventListener("click",async ()=>{
                 await skip1();
                });
                function skip1(){
                    btnDisActivate1();
                    document.getElementById("skipSound").play();
                    setTimeout(()=>{
                        document.querySelector(".guessGame").style.opacity ='0';
                        buyBtn1.innerText ="Buy";
                        diceActivate2();   
                    },1000);
                }
               
            },delay);
           }
           else{
            diceActivate2(); 
           }

        }
        else{
            diceActivate2();
        }
    }

}
  
  

    function rollDice() {
        // Generate a random number between 1 and 6
        diceNum = Math.floor(Math.random() * 6) + 1;
        // diceNum = 6;
        
        // Play rolling sound
        let rollSound = document.getElementById("rollSound");
        rollSound.play();
        rollSound.volume = 0.2;

        // Define final rotations to match the faces correctly
        const rotations = {
             1: "rotateX(0deg) rotateY(0deg)",     // Face 1 (front)
             2: "rotateX(0deg) rotateY(180deg)",   // Face 2 (back)
             3: "rotateX(-90deg) rotateY(0deg)",    // Face 3 (top)
             4: "rotateX(90deg) rotateY(0deg)",   // Face 4 (bottom)
             5: "rotateX(0deg) rotateY(-90deg)",   // Face 5 (left)
             6: "rotateX(0deg) rotateY(90deg)"     // Face 6 (right)
        };

         // Generate additional random rotation for faster spinning effect
         const randomRotationX = Math.floor(Math.random() * 4) * 720; // Up to 4 full spins (720 degrees)
         const randomRotationY = Math.floor(Math.random() * 4) * 720;
         const randomRotationZ = Math.floor(Math.random() * 4) * 720;

         // Use the diceNum to set the correct rotation for the face, adding random spins
         document.getElementById("dice").style.transition = "transform 0.7s ease-out"; // Faster and smoother transition
         document.getElementById("dice").style.transform = 
             `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg) ` + rotations[diceNum];

        return diceNum;
    }


    
     //position of palyer 1 from start
     //position of palyer 1 from start
     function moveUp1(){

        if(ticCount==0){
            player1Pawn.style.top = `-3.15rem`;
            vlPositionOfp1 = -3.15;
            player1Pawn.style.left = "0.4rem"

        }
        else if(ticCount==5){
            vlPositionOfp1 -= 1.05;
            player1Pawn.style.top = `${vlPositionOfp1 -2.4}rem`;
            vlPositionOfp1 -= 2.4;
            player1Pawn.style.transform = "rotate(90deg)";
        }
        else{
            player1Pawn.style.top = `${vlPositionOfp1 -2.6}rem`;
            vlPositionOfp1 -= 2.6;
        }
      
        ticCount++;
    }
    function moveDown1(){
        
        if(ticCount==12){
            vlPositionOfp1 += 1.0;
            player1Pawn.style.top = `${vlPositionOfp1}rem`;
            // vlPositionOfp1 += 3.8;
            player1Pawn.style.left = `${hlPositionOfp1+3.4}rem`;
        }
        else if(ticCount==17){
            vlPositionOfp1 += 1;
            player1Pawn.style.top = `${vlPositionOfp1 +2.6}rem`;
            vlPositionOfp1 += 3.8;
            player1Pawn.style.transform = "rotate(-90deg)"
        }
        else{
            player1Pawn.style.top = `${vlPositionOfp1 +2.6}rem`;
            vlPositionOfp1 += 2.6;
        }
       
        ticCount++;
    }
    function moveRight1(){
        
        if(ticCount==6){
            player1Pawn.style.left = `4rem`
            hlPositionOfp1 = 4;
        }
        else if(ticCount==11){
            hlPositionOfp1 += 0.25;
            player1Pawn.style.left = `${hlPositionOfp1 + 2.6}rem`;
            vlPositionOfp1 += 2.6;
            player1Pawn.style.transform = "rotate(180deg)";
        }
        else{
            player1Pawn.style.left = `${hlPositionOfp1 + 2.6}rem`;
            hlPositionOfp1 += 2.6;
        }
       
        ticCount++;
    }
    function moveLeft1(){
        if(ticCount==18){
            hlPositionOfp1 -= 0.4;
            player1Pawn.style.left = `${hlPositionOfp1}rem`;
            // hlPositionOfp1 -= 3.75;
            // player1Pawn.style.left = `6.9rem`
            // hlPositionOfp1 = 7;
        }
        else if(ticCount==23){
            
            player1Pawn.style.left = `${1}rem`;
            player1Pawn.style.top = `${0.5}rem`;
            player1Pawn.style.transform = "rotate(0deg)";
            
        }
        else{
            player1Pawn.style.left = `${hlPositionOfp1 - 2.6}rem`;
            hlPositionOfp1 -= 2.6;
        }
        ticCount++;
    
    }

    async function move1() { 
         
        if(ticCount>23){
            ticCount=0;
        }
        
        if(ticCount >= 0 && ticCount <= 5) {
           await moveUp1();
            console.log("up");
        }
        else if(ticCount>=6 && ticCount<=11){
          await  moveRight1();
            console.log("Right");
        }
        else if(ticCount>=12 && ticCount<=17){
           await moveDown1();
            console.log("Down");
        }
        else if(ticCount>=18 && ticCount<=23){
         await   moveLeft1();
            console.log("Left");
        }

        let pawnSound = document.getElementById("pawnSound");
        pawnSound.play(); 
    }




        // Similar logic can be used for the second dice

        let buyBtn2 = document.querySelector(".buybtn2");               //buybtn at player2 dashboard
        let skipBtn2 = document.querySelector(".skipbtn2");             //skip btn
        function btnActivate2(){                                        //Activate buy and skip button
            buyBtn2.style.display = 'flex';
            skipBtn2.style.display = 'flex';
        };
        function btnDisActivate2(){                                     //disActivate buy and skip function
            buyBtn2.style.display = 'none';
            skipBtn2.style.display = 'none';
        };
        btnDisActivate2();                                              //initially disactivate buy and skip buttons of player2


        let diceNum2 = 1;                                               // for Green Pawn
        let vlPositionOfp2 = 0;                                         //
        let  hlPositionOfp2 =0;
        let ticCount2 =0;
        let player2Pawn = document.querySelector(".blue");
        let p2track =12;
        


        let p2Amount = document.querySelector(".p2-balance");       //player1 amount show element
        let AmountOfP2 = 2500;                                    //player1 amount data
        p2Amount.innerText = `$${AmountOfP2}`;
     
     
        function showticket2(){                                      //function for show the ticket data
         ticName.innerText = `${shallowCopy[p2track].name}`;
         buy.innerText = `Buy : $${shallowCopy[p2track].buyPrice}`;
         sell.innerText = `Sell : $${shallowCopy[p2track].sellPrice}`;
         r1.innerText = `$${shallowCopy[p2track].rent[0]}`;
         r2.innerText = `$${shallowCopy[p2track].rent[1]}`;
         r3.innerText = `$${shallowCopy[p2track].rent[2]}`;
         r4.innerText = `$${shallowCopy[p2track].rent[3]}`;
        }


  
    document.getElementById("dice2").addEventListener("click", async () => { 
      await  Activity2();
    });
    
   async function Activity2(){

    
     if(p2DiceActivate==true){
            diceNum2 = rollDice2();
            diceDisActivate2();
            console.log("Rolled dice 2 number:", diceNum2);

            let delay = 500;

            player1Pawn.style.zIndex = "1";   //uper on blue

            for(let i=0;i<diceNum2;i++){
                if(ticCount2>23){
                   ticCount2=0;
                }  
                setTimeout( await move2,delay);
                delay += 500;
            }
            if(p2track+diceNum2<24){
                p2track +=diceNum2;
            }
            else if(p2track+diceNum2==24){
                p2track =0;
            }
            else {
                p2track = (p2track+diceNum2 - 24);
            }
            console.log(p2track);


                 //track places
    
        if(p2track==1 ||p2track==2 ||p2track==4 ||p2track==5 ||p2track==7 ||p2track==9 ||p2track==11 ||p2track==13 ||p2track==15 ||p2track==17 ||p2track==19 ||p2track==20 ||p2track==22 ||p2track==23){
            if(shallowCopy[p2track].p1Buy == false && shallowCopy[p2track].p2Buy == false){
                if(AmountOfP2>shallowCopy[p2track].buyPrice){
                    let delay = diceNum2*500;
                    console.log(shallowCopy[p2track].name);
                    setTimeout(()=>{
                        document.querySelector(".tickets").style.transform = "rotate(180deg)";
                        showticket2();
                        
                        btnActivate2();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);
                    buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                    buyBtn2 = document.querySelector(".buybtn2");
                  

                    buyBtn2.addEventListener("click",async ()=>{
                        
                       await Buy2();
                       document.querySelector(".tickets").style.transform = "rotate(0deg)";
                    });
                    function Buy2(){
                           // assignment for p1Buy
                           shallowCopy[p2track].p2Buy = true; 
                    
                           // Hide ticket and update visuals
                          setTimeout(()=>{
                              document.querySelector(".tickets").style.opacity = '0';
                              diceActivate1();
                          },1000);
                           document.querySelector(`.Bluestamp${p2track + 1}`).style.opacity = "1";
  
                          // Calculate remaining amount
                            let remainAmount = AmountOfP2 - shallowCopy[p2track].buyPrice;
                            p2Amount.innerText = `$${remainAmount}`;
                            AmountOfP2 = remainAmount;
  
                           // Deactivate buttons
                           btnDisActivate2();
                           //playSound
                          document.getElementById("buySound").play();
                          document.querySelector(".player2-notice p").innerText = `-$${shallowCopy[p2track].buyPrice}`;
                    }

                    skipBtn2.addEventListener("click",()=>{
                        document.querySelector(".tickets").style.transform = "rotate(0deg)";
                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            diceActivate1();
                            
                        },1000);
                    })

                }
                else{
                    document.querySelector(".player2-notice p").innerText = "Amount not enough";
                    diceActivate1();
                }

            }
            
            else  if(shallowCopy[p2track].p1Buy == true){          //give rent 
                let delay = diceNum2*500;
               setTimeout(()=>{
                    showticket2();
                    document.querySelector(".tickets").style.opacity = '1';
                    let rentAmount = shallowCopy[p2track].rent[shallowCopy[p2track].rentCount];
                    AmountOfP2 -= rentAmount;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    AmountOfP1 += rentAmount;
                    p1Amount.innerText = `$${AmountOfP1}`;
                    document.querySelector(".player2-notice p").innerText = `-$${rentAmount}`;
                    document.querySelector(".player1-notice p").innerText = `+$${rentAmount}`;
                    document.querySelector(`.r${shallowCopy[p2track].rentCount + 1}`).style.border = "2px solid red";
                    document.getElementById("coinSound").play();
                   
                    setTimeout(() => {
                        document.querySelector(`.r${shallowCopy[p2track].rentCount+1}`).style.border = "none"; // Reset background color
                        document.querySelector(".tickets").style.opacity = "0"; // Hide the ticket
                        shallowCopy[p1track].rentCount++;
                        if (shallowCopy[p1track].rentCount > 3) {
                            shallowCopy[p1track].rentCount = 0;
                        }
                        if(AmountOfP2<0){
                            let gameResult = document.querySelector(".gameResult");
                            gameResult.style.display = "flex";
                            document.getElementById("winSound").play();
                            p2Amount.innerText = `-$${AmountOfP2*(-1)}`;
                            const imagePath1 = './assets/player1Wins.jpg';
                            document.querySelector(".gameResult").style.backgroundImage = `url(${imagePath1})`;
                            diceDisActivate1();
                            diceDisActivate2();
                            let playAgainBtn = document.querySelector(".playAgain");
                            playAgainBtn.addEventListener("click", () => {
                                document.getElementById("skipSound").play();   //click sound
                                location.reload(); // Refresh the page
                            });
                        }
                        else{
                            diceActivate1();
                        }
                    }, 2000);


               },delay);
            }

             //for sell the ticket 
             
            else if(shallowCopy[p2track].p2Buy == true){       
                if(AmountOfP2<shallowCopy[p2track].sellPrice){     //when amount < ticket sell price
                    let delay = diceNum*500;
                    console.log(shallowCopy[p2track].name);
                    setTimeout(()=>{
                        document.querySelector(".tickets").style.transform = "rotate(180deg)";
                        showticket2();
                        buyBtn2.innerText ="Sell";
                        
                        btnActivate2();
                        document.querySelector(".tickets").style.opacity = '1';
                    },delay);
                    buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                    buyBtn2 = document.querySelector(".buybtn2");
                  
    
                    buyBtn2.addEventListener("click",async()=>{     //works as sell btn
                        await sell2();
                        document.querySelector(".tickets").style.transform = "rotate(0deg)";
                    });
                    function sell2(){
                              // assignment for p1Buy
                              shallowCopy[p2track].p2Buy = false;    //update in tickets obj
                              shallowCopy[p2track].rentCount = 0;
                        
                             // Hide ticket and update visuals
                            setTimeout(()=>{
                                buyBtn2.innerText ="Buy";                                 // rechange name of button
                                document.querySelector(".tickets").style.opacity = '0';
                                diceActivate1();
                            },1000);
                             document.querySelector(`.Bluestamp${p2track + 1}`).style.opacity = "0";
        
                            // Calculate  amount
                               AmountOfP2 = AmountOfP2 + shallowCopy[p2track].sellPrice;       //added sellprice in amount
                              p2Amount.innerText = `$${AmountOfP2}`;
        
                             // Deactivate buttons
                             btnDisActivate2();
                             //playSound
                            document.getElementById("buySound").play();
                            document.querySelector(".player2-notice p").innerText = `+$${shallowCopy[p2track].sellPrice}`;
                    }

                    skipBtn2.addEventListener("click",()=>{
                        document.querySelector(".tickets").style.transform = "rotate(0deg)";   //re rotate for player1
                        btnDisActivate2();
                        document.getElementById("skipSound").play();
                        setTimeout(()=>{
                            document.querySelector(".tickets").style.opacity = '0';
                            buyBtn2.innerText ="Buy";
                            diceActivate1();
                            
                        },1000);
                    })
    
                }
                else{
                    document.querySelector(".player2-notice p").innerText = `Amount greater than sellPrice`;
                    diceActivate1();
                }
            }

            else{
                diceActivate1();
            }
         
        }
             //track   get money places
        else if(p2track==3 ||p2track==8 ||p2track==10 ||p2track==14 ||p2track==16||p2track==21){
                let delay = diceNum2*500;
                setTimeout(()=>{
                    document.querySelector(".getmoney").style.transform = "rotate(180deg)";
                      document.querySelector(".getmoney").innerText = `Get $${shallowCopy[p2track].money}`;            
                      document.getElementById("coinSound").play();                                                    //play sound
                      document.querySelector(".player2-notice p").innerText = `+$${shallowCopy[p2track].money}`;
                      document.querySelector(".getmoney").style.opacity ='1';
                      AmountOfP2 = AmountOfP2 + shallowCopy[p2track].money;
                      p2Amount.innerText = `$${AmountOfP2}`;
    
                      setTimeout(() => {
                        document.querySelector(".getmoney").style.transform = "rotate(0deg)";
                        document.querySelector(".getmoney").style.opacity ='0';    
                        diceActivate1();                             
                    }, 2000);
    
                },delay);
   
        }

            //track fine place
        else if(p2track==18){
            if(AmountOfP2>500){
                let delay = diceNum2*500;
                setTimeout(()=>{
                    document.querySelector(".givefine").style.transform = "rotate(180deg)";
                      document.querySelector(".givefine").innerText = `Fine $${shallowCopy[p2track].money}`;
                      document.getElementById("loseSound").play();
                      document.querySelector(".player2-notice p").innerText = `-$${shallowCopy[p2track].money}`;
                      document.querySelector(".givefine").style.opacity ='1';
                      AmountOfP2 = AmountOfP2 - shallowCopy[p2track].money;
                      p2Amount.innerText = `$${AmountOfP2}`;
                      setTimeout(() => {
                        document.querySelector(".getmoney").style.transform = "rotate(0deg)";
                        document.querySelector(".givefine").style.opacity ='0';
                        diceActivate1();
                    }, 2000);
    
                },delay);
            }
            else{
                diceActivate1();
                document.querySelector(".player2-notice p").innerText = "Amount less than $500";
            }
    
        }

        else if(p2track==6){
          if(AmountOfP2>=500){
            let delay = diceNum2*500;
            setTimeout(()=>{
                buyBtn2.innerText ="Play";    //buy btn will work as play
                        
                btnActivate2();
                document.querySelector(".guessGame").style.transform = "rotate(180deg)";
                document.querySelector(".guessGame").style.opacity ='1';   //game layout visible

                buyBtn2.replaceWith(buyBtn2.cloneNode(true));               //removing eventlistener  
                buyBtn2 = document.querySelector(".buybtn2");

                buyBtn2.addEventListener("click",()=>{         //it working as play btn
                    document.getElementById("skipSound").play(); //click sound
                    btnDisActivate2();
                    buyBtn2.innerText ="Buy";        //rechange btn name play to Buy

                    document.querySelector(".player2-notice p").innerText = `-$${500}`;
                    AmountOfP2 -=500;
                    p2Amount.innerText = `$${AmountOfP2}`;
                    document.querySelector(".guessGame").style.opacity ='0'; 
                    document.querySelector(".guessGame").style.transform = "rotate(0deg)";

                    document.querySelector(".guessPress").style.transform = "rotate(180deg)";
                    document.querySelector(".guessPress").style.transformStyle = "preserve-3d";
                    document.querySelector(".guessPress").style.display ='flex'; 



                    document.querySelectorAll('.guessPress button').forEach(button => {        // removing eventlistener
                        button.replaceWith(button.cloneNode(true));
                    });

                    const guessNumber = Math.floor(Math.random() * 5) + 1;
                    console.log(guessNumber);
                    let enterNum = 0;
                    document.querySelector(".guess1").addEventListener("click",()=>{
                        enterNum = 1;
                        document.querySelector(".guessPress").style.display ='none'; 
                        document.querySelector(".guessPress").style.transform = "rotate(0deg)";
                        showGuessResult();
                    });
                    document.querySelector(".guess2").addEventListener("click",()=>{
                        enterNum = 2;
                        document.querySelector(".guessPress").style.display ='none'; 
                        document.querySelector(".guessPress").style.transform = "rotate(0deg)";
                        showGuessResult();
                    });
                    document.querySelector(".guess3").addEventListener("click",()=>{
                        enterNum = 3;
                        document.querySelector(".guessPress").style.display ='none'; 
                        document.querySelector(".guessPress").style.transform = "rotate(0deg)";
                        showGuessResult();
                    });
                    document.querySelector(".guess4").addEventListener("click",()=>{
                        enterNum = 4;
                        document.querySelector(".guessPress").style.display ='none';
                        document.querySelector(".guessPress").style.transform = "rotate(0deg)"; 
                        showGuessResult();
                    });
                    document.querySelector(".guess5").addEventListener("click",()=>{
                        enterNum = 5;
                        document.querySelector(".guessPress").style.display ='none';
                        document.querySelector(".guessPress").style.transform = "rotate(0deg)"; 
                        showGuessResult();
                    });

                   function showGuessResult(){
                    if(enterNum == guessNumber){
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.querySelector(".guessResult").style.transform = "rotate(180deg)";
                        document.querySelector(".player2-notice p").innerText = `+$${2500}`;
                        AmountOfP2 +=2500;
                        document.getElementById("coinSound").play();
                        p2Amount.innerText = `$${AmountOfP2}`;
                        ////////////////////////////////////////////   ad sound
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            document.querySelector(".guessResult").style.transform = "rotate(0deg)";
                            diceActivate1();
                        },2500);

                    }
                    else{
                        const imagePath = './assets/guessLoss.jpg';

                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath})`;
                        document.querySelector(".guessResult").style.opacity = '1';
                        document.querySelector(".guessResult").style.transform = "rotate(180deg)";
                        document.getElementById("loseSound").play();
                        ////////////////////////////////////////////////////////////// ad sound 
                        setTimeout(()=>{
                            document.querySelector(".guessResult").style.opacity = '0';
                            document.querySelector(".guessResult").style.transform = "rotate(0deg)";   
                            const imagePath2 = './assets/guessWin.jpg';
                        document.querySelector(".guessResult").style.backgroundImage = `url(${imagePath2})`;
                        diceActivate1();
                        },2500);

                    }

                   }
                   
                });

                skipBtn2.addEventListener("click",async()=>{
                    document.querySelector(".guessGame").style.transform = "rotate(0deg)";
                    await skip2();
                });
                function skip2(){
                    btnDisActivate2();
                    document.getElementById("skipSound").play();
                    setTimeout(()=>{
                        document.querySelector(".guessGame").style.opacity ='0';
                        buyBtn2.innerText ="Buy";
                        diceActivate1();
                    },1000);
                }

            },delay);
         }
         else{
            diceActivate1();
         }
        }
        else{
            diceActivate1();
        }    
     }   
    }  
    
               //       <----    closing if p2DiceActive is true

    function rollDice2() {
         diceNum2 = Math.floor(Math.random() * 6) + 1;
         diceNum2 = 6;
         
        
         let rollSound = document.getElementById("rollSound");
         rollSound.play();

        const rotations = {
            1: "rotateX(0deg) rotateY(0deg)",     // Face 1 (front)
            2: "rotateX(0deg) rotateY(180deg)",   // Face 2 (back)
            3: "rotateX(-90deg) rotateY(0deg)",    // Face 3 (bottom)
            4: "rotateX(90deg) rotateY(0deg)",   // Face 4 (top)
            5: "rotateX(0deg) rotateY(-90deg)",   // Face 5 (left)
            6: "rotateX(0deg) rotateY(90deg)"     // Face 6 (right)
        };

        const randomRotationX = Math.floor(Math.random() * 4) * 720;
        const randomRotationY = Math.floor(Math.random() * 4) * 720;
        const randomRotationZ = Math.floor(Math.random() * 4) * 720;

        document.getElementById("dice2").style.transition = "transform 0.7s ease-out";
        document.getElementById("dice2").style.transform = 
        `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg) ` + rotations[diceNum2];

        return diceNum2;
    }

     //position of palyer 1 from start
     function moveUp2(){

        if(ticCount2==0){
            player2Pawn.style.top = `4rem`;
            player2Pawn.style.left = `0.6rem`;
            vlPositionOfp2 = 4.0;
        }
        else if(ticCount2==5){
            vlPositionOfp2 += 0.9;
            player2Pawn.style.top = `${vlPositionOfp2+2.6}rem`;
            // vlPositionOfp2 -= 3.8;
            player2Pawn.style.transform = "rotate(-90deg)";
        }
        else{
            player2Pawn.style.top = `${vlPositionOfp2 +2.6}rem`;
            vlPositionOfp2 += 2.6;
        }
      
        ticCount2++;
    }
    function moveDown2(){
        
        if(ticCount2==12){
            vlPositionOfp2 -= 1.05;
            player2Pawn.style.top = `${vlPositionOfp2}rem`;
            player2Pawn.style.left = `${hlPositionOfp2-3.15}rem`;

            // vlPositionOfp2 += 3.8;
        }
        else if(ticCount2==17){
            vlPositionOfp2 -= 1.05;
            player2Pawn.style.top = `${vlPositionOfp2 -2.4}rem`;
            vlPositionOfp2 -= 2.4;
            player2Pawn.style.transform = "rotate(90deg)";
        }
        else{
            player2Pawn.style.top = `${vlPositionOfp2 -2.6}rem`;
            vlPositionOfp2 -= 2.6;
        }
       
        ticCount2++;
    }
    function moveRight2(){
        
        if(ticCount2==6){
            hlPositionOfp2 -=3.25;
            player2Pawn.style.left = `${hlPositionOfp2}rem`; ///// ///// / // /// / /// / // //////
            // hlPositionOfp2 = 22.8-5;
        }
        else if(ticCount2==11){
            hlPositionOfp2 -= 0.3;
            player2Pawn.style.left = `${hlPositionOfp2 - 2.6}rem`;
            // vlPositionOfp2 -= 3.8;
            player2Pawn.style.transform = "rotate(-0deg)";

        }
        else{
            player2Pawn.style.left = `${hlPositionOfp2 - 2.6}rem`;
            hlPositionOfp2 -= 2.6;
        }
       
        ticCount2++;
    }
    function moveLeft2(){
        if(ticCount2==18){
            hlPositionOfp2 += 0.5;
            player2Pawn.style.left = `${hlPositionOfp2}rem`;
            // hlPositionOfp1 += 3.8;
          
            // hlPositionOfp1 = 7;
        }
        else if(ticCount2==23){
            
            player2Pawn.style.left = `${-0.25}rem`;
            player2Pawn.style.top = `${0.75}rem`;
            player2Pawn.style.transform = "rotate(180deg)";
            hlPositionOfp2 =0;
            vlPositionOfp2 =0;
        }
        else{
            player2Pawn.style.left = `${hlPositionOfp2 + 2.6}rem`;
            hlPositionOfp2 += 2.6;
        }
        ticCount2++;
    
    }
     
    async function move2() { 
        
        if(ticCount==ticCount2 && ticCount!=0){
            // player2Pawn.classList.add("margin1");         /////////////////////////////
            player1Pawn.classList.add("margin1");
        }
        if(ticCount!=ticCount2){
            // player2Pawn.classList.remove("margin");
            // player1Pawn.classList.remove("margin");  /////////////////////////////////
        }
        if(ticCount2>23){
            ticCount2=0;
        }
        
        if(ticCount2 >= 0 && ticCount2 <= 5) {
           await moveUp2();
            console.log("up");
        }
        else if(ticCount2>=6 && ticCount2<=11){
          await  moveRight2();
            console.log("Right");
        }
        else if(ticCount2>=12 && ticCount2<=17){
           await moveDown2();
            console.log("Down");
        }
        else if(ticCount2>=18 && ticCount2<=23){
         await   moveLeft2();
            console.log("Left");
        }
        let pawnSound = document.getElementById("pawnSound");
       await pawnSound.play();  
    }
 }
    
}


//for small screen like mobile phone
