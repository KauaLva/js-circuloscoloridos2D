let cor
let PosicaoHorizontal //x
let PosicaoVertical //y

 function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color (random(0,200), random (0,200), random (0,250), random(0,100));
  PosicaoVertical =[random(height), random(height), random(height)];
  PosicaoHorizontal = [0,0,0];
  
}
 function draw(){
  fill (cor);
  for(let contador in PosicaoHorizontal){
  circle (PosicaoHorizontal[contador], PosicaoVertical[contador], 50);
  PosicaoHorizontal[contador]+=random(1,3);
  PosicaoVertical[contador]+=random(-3,3);
  if(PosicaoHorizontal[contador]>= width){
   PosicaoHorizontal[contador] = 0;
PosicaoVertical[contador] = random(height)
  }
 if(mouseIsPressed){
   cor=color(random(0,255), random(0,255), random(0,255), random(0,255))
 }
  
  }
 }