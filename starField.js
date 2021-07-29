class Particle {
	constructor(isDistant){
    this.x=0;
    this.y=0;
    this.target_x=0;
    this.target_y=0;
    this.angle=0;
    this.size=1;
    this.vel=0;
    this.default_vel=0.5;
    this.accel=0;
    this.alpha=0;
    this.alphaDelta=0.005;
    this.alphaMax=0.9;
    this.isDistant=isDistant;
    this.spawn(true);
    // Random start position
  }
  spawn(isInit){
    var randomRadians=Math.random()*(Math.PI*2);
    var randomHypot=Math.random()*spawnRadius;
    this.alpha=0;
    this.vel=this.default_vel;
    this.accel=0.002*(1/(randomHypot/spawnRadius));
    if(isInit==true){
      var randomHypot=Math.random()*(window.innerWidth/2);
    }
    if(this.isDistant==true){
      randomHypot=spawnRadius+(Math.random()*(window.innerWidth/2));
      this.vel=0.1;
      this.accel=0;
      this.alphaDelta=0.001;
      this.alphaMax=Math.random()*1;
    }
    this.x=spawn_x+(randomHypot*Math.cos(randomRadians));
    this.y=spawn_y+(randomHypot*Math.sin(randomRadians));
    this.target_x=spawn_x+(10*randomHypot*Math.cos(randomRadians));
    this.target_y=spawn_y+(10*randomHypot*Math.sin(randomRadians));
    this.angle=Math.atan2((this.target_y-this.y),(this.target_x-this.x));
  }
	update(c){
    // Update opacity
    if(this.alpha<this.alphaMax){
      this.alpha+=this.alphaDelta;
    }
    // Draw
    c.beginPath();
    c.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    c.fillStyle = "rgba(255, 255, 255, "+this.alpha+")";
    c.fill();
    c.closePath();
    // Movement
    this.vel+=this.accel;
    this.x+=(this.vel*Math.cos(this.angle));
    this.y+=(this.vel*Math.sin(this.angle));
    // Check respawn
    if (this.x>=window.innerWidth || this.y<0 || this.y>=window.innerHeight){
      this.spawn();
    }
	}
}
function init(){
  console.log("START");
  i=0;
  while(i<maxParticle){
    particles.push(new Particle(false));
    i+=1
  }
  i=0
  while(i<maxDistantParticles){
    distantParticles.push(new Particle(true));
    i+=1
  }
	update();
}
function update(){
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
  // Draw starting circle
  movingCircle+=0.01;
  if(movingCircleAlpha<0.7){
    movingCircleAlpha+=0.0001;
  }
  c.beginPath();
  c.arc(spawn_x,spawn_y,movingCircle,0,Math.PI * 2,false);
  c.strokeStyle = "rgba(255, 255, 255, "+movingCircleAlpha+")";
  c.stroke();
  c.closePath();
  // Update
  requestAnimationFrame(update);
  for (var i=0;i<particles.length;i++){
    P=particles[i]
    P.update(c)
  }
  for (var i=0;i<distantParticles.length;i++){
    P=distantParticles[i]
    P.update(c)
  }
}
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var maxParticle=500;
var maxDistantParticles=500;
var particles=[];
var distantParticles=[];
// Spawn Circle
var spawn_x=window.innerWidth/2;
var spawn_y=window.innerHeight/2;
var spawnRadius=300;
var movingCircle=300;
var movingCircleAlpha=0;
init();
