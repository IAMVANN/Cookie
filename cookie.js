///////////////////// CACHED ELEMENT REFERENCES or something /////////////////////

let board = document.getElementById("board");
let canvas = board.getContext("2d");
let game;
let amountOfCookies = 0;
let clickMulti = 1;
let tempClickMulti = 1;
let cookiePerSec = 0;
let tempMultiplier = 1;
board.onclick = click;
let count = 0;
let ogPrices = [15,100,1100,12000,130000,1400000,20000000,330000000,5100000000,100000000000];
let autoRay = [
    [0,0,0,0,0,0,0,0,0,0], //quantity
    [15,100,1100,12000,130000,1400000,20000000,330000000,5100000000,100000000000], //cost
    [.1,1,8,47,260,1400,7800,44000,260000,10000000] // moneyPerThingy

]
let upgradesPath = [
    [0,0,0,0,0,0,0,0,0,0], // quantity
    [500,1000,15000,200000,400000,140000000,730000000,15100000000,1200000000000,121100000000000],
    [.70, 1.3, 1.2, 1.5] // upgrade paths; discount 30%; 1.3 times; + 20 percent more money; 1.5 times
]
let ogUpgrades = [500,1000,15000,200000,400000,140000000,730000000,15100000000,1200000000000,121100000000000];
window.onload = function(){

    init();
}
let goldenRay = [];

class goldenCookie {


    constructor(){
        this.x = Math.floor(Math.random() * 1150 + 50);
        this.y = Math.floor(Math.random() * 900 + 50);
        this.j = Math.floor(Math.random() * 4);
        this.ran = false;

    }
        run(index){
            this.timer -= 1;
            if(this.timer <= 0){
                alert("timer ran out");
                switch (this.j) {
                    case 1:
                        tempClickMulti = 1;
                        break;
                    case 2:
                        tempMultiplier /= 3;
                        break;
                    case 3:
                    tempMultiplier /= 15;
                        break;
            }
                goldenRay.splice(index, 1);

        }
    }
        alerty(){
            switch (this.j) {
                case 1:
                    tempClickMulti = cookiePerSec/3;
                    this.timer = 1500;//1500
                    alert("You got click multipler for 60 seconds");
                    break;
                case 2:
                    tempMultiplier *= 3;
                    this.timer = 4500;//4500
                    alert("you got 3 times cookie multipler for 180 secs");
                    break;
                case 3:
                tempMultiplier *= 15;
                    this.timer = 1500;//1500
                    alert("you got 15 times cookie multipler for 60 secs")
                    break;
                default:
                    amountOfCookies += cookiePerSec * Math.floor(Math.random() * 10 + 2);
                    this.timer = 0; // 0
                    alert("You got cookies");
                    break;
            }
            this.ran = true;
        }


}

function init(){
    game = setInterval(cookie, 40);

}


function cookie(){

    if(count >= 25){
        count = 0;
        laborForces();
    }
    canvas.clearRect(0, 0, 1700, 1250);
    draw();
    count++;
    if(Math.floor(Math.random() * 10000) == 0 ){ // eventually set to 10000
        goldenRay.push(new goldenCookie());
    }
    for(let i = 0; i < goldenRay.length; i++){
        if(goldenRay[i].ran == true){
            goldenRay[i].run(i);
        }
    }
}


function draw(){
    //draw Cookie Container Box;
    canvas.textAlign = "center";
        canvas.beginPath();
        canvas.moveTo(500, 0);
        canvas.lineTo(500, 1500);
        canvas.moveTo(500, 850);
        canvas.lineTo(0, 850);
        canvas.stroke();
    //draw Cookies;
        canvas.beginPath();
        canvas.arc(247, 500, 200, 0, 2 * Math.PI, false);
        canvas.stroke();
    //draw Upgrades Box
        canvas.beginPath();
        canvas.moveTo(1250, 0);
        canvas.lineTo(1250, 1500);
        canvas.stroke();

        canvas.beginPath();
        canvas.moveTo(1250, 350);
        canvas.lineTo(1700, 350);
        canvas.stroke();
    //clicky0
        canvas.beginPath();
        canvas.moveTo(1250, 350);
        canvas.lineTo(1250, 440);
        canvas.lineTo(1700, 440);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Clickers", 1400, 400);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][0], 1400, 425);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][0], 1600, 410);
    //grandmas1
        canvas.beginPath();
        canvas.moveTo(1250, 440);
        canvas.lineTo(1250, 530);
        canvas.lineTo(1700, 530);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Grandma", 1400, 490);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][1], 1400, 515);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][1], 1600, 500);
    //farms2
        canvas.beginPath();
        canvas.moveTo(1250, 530);
        canvas.lineTo(1250, 620);
        canvas.lineTo(1700, 620);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Farms", 1400, 580);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][2], 1400, 615);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][2], 1600, 590);
    //Mine3
        canvas.beginPath();
        canvas.moveTo(1250, 620);
        canvas.lineTo(1250, 710);
        canvas.lineTo(1700, 710);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Mine", 1400, 670);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][3], 1400, 695);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][3], 1600, 680);
    //Factory4
        canvas.beginPath();
        canvas.moveTo(1250, 710);
        canvas.lineTo(1250, 800);
        canvas.lineTo(1700, 800);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Factory", 1400, 760);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][4], 1400, 785);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][4], 1600, 770);
    //Bank5
        canvas.beginPath();
        canvas.moveTo(1250, 800);
        canvas.lineTo(1250, 890);
        canvas.lineTo(1700, 890);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Bank", 1400, 850);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][5], 1400, 875);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][5], 1600, 860);
    //Temple6
        canvas.beginPath();
        canvas.moveTo(1250, 890);
        canvas.lineTo(1250, 980);
        canvas.lineTo(1700, 980);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Temple", 1400, 940);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][6], 1400, 965);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][6], 1600, 950);
    //wizard Tower 7
        canvas.beginPath();
        canvas.moveTo(1250, 980);
        canvas.lineTo(1250, 1070);
        canvas.lineTo(1700, 1070);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Wizard Tower", 1400, 1030);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][7], 1400, 1055);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][7], 1600, 1040);
    //shipment 8
        canvas.beginPath();
        canvas.moveTo(1250, 1070);
        canvas.lineTo(1250, 1160);
        canvas.lineTo(1700, 1160);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Shipment", 1400, 1130);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][8], 1400, 1155);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][8], 1600, 1140);
    // BIG COOKIE 9
        canvas.beginPath();
        canvas.moveTo(1250, 1160);
        canvas.lineTo(1250, 1250);
        canvas.lineTo(1700, 1250);
        canvas.stroke();
        canvas.font = "30px Arial";
        canvas.fillText("Big COOKIE", 1400, 1210);
        //prices
        canvas.font = "20px Arial";
        canvas.fillText(autoRay[1][9], 1400, 1235);
        //quantity
        canvas.font = "30px Arial";
        canvas.fillText(autoRay[0][9], 1600, 1220);

    //draws amountOfCookies
        canvas.font = "25px Arial";
        canvas.textAlign = "center";
        canvas.fillText(amountOfCookies + " Cookies", 240, 150);
        canvas.fillText(cookiePerSec + " Cookies Per Second", 240, 200);

    // Upgrades stuff
        //x-min 1250; y-max 350; 1700 - 1250 = 450; 0 - 350;
        // 9; 300 - 300;
        // 150 by 50
        //upgrade 1;
        canvas.beginPath();
        canvas.moveTo(1350, 0);
        canvas.lineTo(1350, 100);
        canvas.lineTo(1250, 100);
        canvas.stroke();
        //upgrade 2;
        canvas.beginPath();
        canvas.moveTo(1450, 0);
        canvas.lineTo(1450, 100);
        canvas.lineTo(1350, 100);
        canvas.stroke();
        //upgrade 3;
        canvas.beginPath();
        canvas.moveTo(1550, 0);
        canvas.lineTo(1550, 100);
        canvas.lineTo(1450, 100);
        canvas.stroke();
        //upgrade 4;
        canvas.beginPath();
        canvas.moveTo(1350, 100);
        canvas.lineTo(1350, 200);
        canvas.lineTo(1250, 200);
        canvas.stroke();
        //upgrade 5;
        canvas.beginPath();
        canvas.moveTo(1450, 100);
        canvas.lineTo(1450, 200);
        canvas.lineTo(1350, 200);
        canvas.stroke();
        //upgrade 6;
        canvas.beginPath();
        canvas.moveTo(1550, 100);
        canvas.lineTo(1550, 200);
        canvas.lineTo(1450, 200);
        canvas.stroke();
        //upgrade 7;
        canvas.beginPath();
        canvas.moveTo(1350, 200);
        canvas.lineTo(1350, 300);
        canvas.lineTo(1250, 300);
        canvas.stroke();
        //upgrade 8;
        canvas.beginPath();
        canvas.moveTo(1450, 200);
        canvas.lineTo(1450, 300);
        canvas.lineTo(1350, 300);
        canvas.stroke();
        //upgrade 9;
        canvas.beginPath();
        canvas.moveTo(1550, 200);
        canvas.lineTo(1550, 300);
        canvas.lineTo(1450, 300);
        canvas.stroke();
        //upgrade 10; literally the rest of the space
        //golden Cookies;
        for(let i = 0; i < goldenRay.length; i++ ){
            if(goldenRay[i].ran == false){
                canvas.beginPath();
                canvas.arc(goldenRay[i].x, goldenRay[i].y, 40, 0, 2 * Math.PI, false);
                canvas.stroke();
            }

        }
}
function laborForces(){
    //grandmas, clickers, farms, stuff;
    cookiePerSec = 0;
    for(let i = 0; i < autoRay[0].length; i++){
        //price upgrades
        cookiePerSec += autoRay[0][i] * autoRay[2][i] * tempMultiplier;
    }
    amountOfCookies += cookiePerSec;
}

function click(event){ //if player clicks cookie, they get cookie;
    let x = event.clientX;
    let y = event.clientY;
    // a^2 + b^2 = c^2;
    // x^2 + y^2 = radius^2?
    // (x-247)^2 + (y - 300)^2 = 200^2
    //Precalc/Sat Prep coming in
    if((x-247)**2 + (y - 500)**2 <= 200**2){
        amountOfCookies += clickMulti * tempClickMulti;
    } else if(x > 1250 && y < 350 ){
        //10 pos;
        if(x < 1350 && y < 100){
            buyUpgrades(0);
            //upgrade 1;
        } else if(x < 1450 && y < 100){
            buyUpgrades(1);
            //upgrade 2 ;
        } else if(x < 1550 && y < 100){
            buyUpgrades(2);
            //upgrade 3;
        } else if(x < 1350 && y < 200){
            buyUpgrades(3);
            //upgrade 4;
        } else if(x < 1450 && y < 200){
            buyUpgrades(4);
            //upgrade 5 ;
        } else if(x < 1550 && y < 200){
            buyUpgrades(5);
            //upgrade 6;
        } else if(x < 1350 && y < 300){
            buyUpgrades(6);
            //upgrade 7;
        } else if(x < 1450 && y < 300){
            buyUpgrades(7);

            //upgrade 8 ;
        } else if(x < 1550 && y < 300){
            buyUpgrades(8);
            //upgrade 9;
        } else {
            buyUpgrades(9);
        }
    } else if(x >1250 && x < 1700){
        if(y >= 350 && y < 440){ //clicky0
            buyAuto(0);
        } else if(y >= 440 && y < 530){ //grandmas1
            buyAuto(1);
        } else if(y >= 530 && y < 620){    //farms2
            buyAuto(2);
        } else if(y >= 620 && y < 710){ //Mine3
            buyAuto(3);
        } else if(y >= 710 && y < 800){     //Factory4
            buyAuto(4);
        } else if(y >= 800 && y < 890){//Bank5
            buyAuto(5);
        } else if(y >= 890 && y < 980){//Temple6
            buyAuto(6);
        } else if(y >= 980 && y < 1070){//wizard Tower 7
            buyAuto(7);
        } else if(y >= 1070 && y < 1160){//shipment 8
            buyAuto(8);
        } else if(y >= 1160 && y < 1250){// BIG COOKIE 9
            buyAuto(9);
        }
        canvas.beginPath();
        canvas.moveTo(1250, 350);
        canvas.lineTo(1250, 440);
        canvas.lineTo(1700, 440);
        canvas.stroke();
    }
    for(let i = 0; i < goldenRay.length; i++){
        if(goldenRay[i].ran == false){
            if((x - goldenRay[i].x)**2 + (y - goldenRay[i].y)**2 <= 40**2){
                goldenRay[i].alerty();
            }
        }

    }

}
function buyAuto(index){
    if(amountOfCookies >= autoRay[1][index]){
        autoRay[0][index]++; // adds 1 thingy to the thingy;
        amountOfCookies -= autoRay[1][index];
        autoRay[1][index] = ogPrices[index] * (1.15 ** autoRay[0][index]);

    }
}
function buyUpgrades(index){
    if(amountOfCookies >= upgradesPath[1][index] && upgradesPath[0][index] < 4 && autoRay[0][index] > 0){

        upgradesPath[0][index]++; // adds 1 thingy to the thingy;
        amountOfCookies -= upgradesPath[1][index];

        upgradesPath[1][index] = ogUpgrades[index] * (3 ** autoRay[0][index]);
        if(upgradesPath[0][index] != 1){
                autoRay[2][index] *= upgradesPath[2][upgradesPath[0][index] -1 ];
        } else {
            autoRay[1][index] *= upgradesPath[2][index];
        }
        if(upgradesPath[0][index] == 3 && index == 9){
            alert("You win");
            alert("Sike, no winning in this game loser");
            alert("Keep on farming cookies");
        }
    }
}
/*
function hover(event){
    alert("ran")
    let x = event.clientX;
    let y = event.clientY;
    if(x > 1250 && y < 350 ){
        //10 pos;
        if(x < 1350 && y < 100){
            showUpgrades(0, x, y);
            //upgrade 1;
        } else if(x < 1450 && y < 100){
            showUpgrades(1, x, y);
            //upgrade 2 ;
        } else if(x < 1550 && y < 100){
            showUpgrades(2, x, y);
            //upgrade 3;
        } else if(x < 1350 && y < 200){
            showUpgrades(3, x, y);
            //upgrade 4;
        } else if(x < 1450 && y < 200){
            showUpgrades(4, x, y);
            //upgrade 5 ;
        } else if(x < 1550 && y < 200){
            showUpgrades(5, x, y);
            //upgrade 6;
        } else if(x < 1350 && y < 300){
            showUpgrades(6, x, y);
            //upgrade 7;
        } else if(x < 1450 && y < 300){
            showUpgrades(7, x, y);

            //upgrade 8 ;
        } else if(x < 1550 && y < 300){
            showUpgrades(8, x, y);
            //upgrade 9;
        } else {
            showUpgrades(9, x, y);
        }
    }
}
function showUpgrades(index, x, y){
    // how tf can i make a tooltip in the easiest way possible? make a canvas version of it?(pros super easy; cons super ugly)
    //make a DOM one? (pros: Looks good; Cons: Hard as fudge ; i suck at DOM)
    canvas.beginPath();
    canvas.moveTo(x - 100, y);
    canvas.lineTo(x, y);
    canvas.moveTo(x, y + 40);
    canvas.lineTo(x-100, y);
    canvas.stroke();

}*/
