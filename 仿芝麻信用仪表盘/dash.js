var dash=function (canvasID,score,ratio) {		
  var canvas = document.getElementById(canvasID),
      ctx = canvas.getContext('2d'),
      cWidth = canvas.width,
      cHeight = canvas.height,
      // score = canvas.attributes['data-score'].value/50,
      // stage = ['较差', '中等', '良好', '优秀', '极好'],
      radius = 140,   // 绘制圆的半径
      // deg0 = Math.PI / 9;
      deg1 = Math.PI / 5 ;
      score/=ratio;
      // console.log(deg1)
      // 
      //根据分数显示不同的背景色  
      if (score < 1000) {
        // $("body").css('background','#f0f');
      } else if (score < 600 && score >= 500) {
       
      } else if (score < 700 && score >= 600) {
       
      } else if (score < 800 && score >= 700) {
        
      } else if (score <= 900 && score >= 800) {
        
      }
  if (score <0 || score > 1000) {
    alert('信用分数区间：400~900');
  } else {
    var dot = new Dot(),
        dotSpeed = 0.02,
        textSpeed = Math.round(dotSpeed * (radius-20) / deg1),  // 140 为半径
        angle = Math.PI*0.5,
        credit = 0;
       
    (function drawFrame() {

      ctx.save();
      ctx.clearRect(0, 0, cWidth, cHeight);
      ctx.translate(cWidth / 2, cHeight / 2);
      // ctx.rotate(-2 * deg0);

      dot.x = (radius-40) * Math.cos(angle);
      dot.y = (radius-40) * Math.sin(angle);

      var aim = Math.PI * 0.5 + (score - 0) * deg1 / 100 ;
      if (angle < aim) {
        angle += dotSpeed;
      }
     
      dot.draw(ctx);

      if (credit < score - textSpeed) {
        credit += textSpeed;
      } else if (credit >= score - textSpeed && credit < score) {
        credit += 1;
      }
      text(credit*ratio);

      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(255, 255, 255, .5)';
      ctx.arc(0, 0, radius-40, Math.PI*0.5, angle, false);
      ctx.stroke();
      ctx.restore();

      window.requestAnimationFrame(drawFrame);


      ctx.save(); // 刻度线
      for (var i = 0; i < 180; i++) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, .3)';
        ctx.moveTo(radius-20, 0);
        ctx.lineTo((radius-30), 0);
        ctx.stroke();
        ctx.rotate(deg1/18);
      }
      ctx.restore();
      ctx.save(); //信用阶段及评估时间文字
      // ctx.rotate(2 * deg0);
      ctx.fillStyle = '#fff';
      ctx.font = '28px Microsoft yahei';
      ctx.textAlign = 'center';
      
      ctx.fillStyle = '#fff';
      ctx.font = '20px Microsoft yahei';
      ctx.fillText('可消费', 0, 60);
      ctx.restore();

      // ctx.save(); //最外层轨道
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, .4)';
      ctx.lineWidth = 3;
      ctx.arc(0, 0, radius-40, 0, Math.PI*2, false);
      ctx.stroke();
      ctx.restore();

    })();
  }

  function Dot() {
    this.x = 0;
    this.y = 0;
    this.draw = function (ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, .7)';
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };
  }

  function text(process) {
    ctx.save();
    // ctx.rotate(10 * deg0);
    ctx.fillStyle = '#fff';
    ctx.font = '50px Microsoft yahei';
    ctx.textAlign = 'center';
    ctx.textBaseLine = 'top';
    ctx.fillText(process, 0 ,10);
    ctx.restore();
  }
}
