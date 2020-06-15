var example = document.getElementById("example"),
        ctx = example.getContext('2d'),
        grd = ctx.createLinearGradient(0, 750, 200, 0);
      example.height = 764;
      example.width  = 920;
      grd.addColorStop(0, "#FF8F5A");
      grd.addColorStop(1, "#FF2F96");
      ctx.beginPath();
      ctx.fill();
      ctx.fillStyle = grd;
      ctx.moveTo(0, 550);
      ctx.bezierCurveTo(0, 400, 300, 0, 540, 0);
      ctx.bezierCurveTo(830, -3, 920, 250, 920, 400);
      ctx.bezierCurveTo(920, 550, 800, 764, 350, 764);
      ctx.bezierCurveTo(150, 764, 0, 700, 0, 550);
      ctx.fill();