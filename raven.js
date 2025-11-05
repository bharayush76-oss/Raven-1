<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>For Manu</title>
  <meta name="theme-color" content="#000000">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Inter:wght@300;500;700&display=swap" rel="stylesheet">
  <style>
  :root{
    --bg:#000;
    --ink:#e6e6e6;
    --dim:#8a8a8a;
    --accent:#7a4cff;
    --rose:#ff3b81;
    --glow:0 0 30px rgba(122,76,255,.35);
  }
  *{box-sizing:border-box}
  html,body{height:100%}
  body{
    margin:0;
    font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto;
    color:var(--ink);
    background:radial-gradient(1200px 800px at 70% -10%, #0b0b16 0%, #06060a 40%, #000 100%), #000;
    overflow-x:hidden;
  }
  .stars{
    position:fixed;inset:0;pointer-events:none;
    background:
      radial-gradient(1px 1px at 20% 30%, #fff8 50%, transparent 51%) repeat,
      radial-gradient(1px 1px at 80% 70%, #fff6 50%, transparent 51%) repeat,
      radial-gradient(1px 1px at 50% 10%, #fff9 50%, transparent 51%) repeat;
    background-size: 600px 400px, 700px 500px, 800px 600px;
    opacity:.5;
    animation: twinkle 8s linear infinite;
  }
  @keyframes twinkle{50%{opacity:.7}}
  .moon{
    position:fixed; width:160px; height:160px; border-radius:50%;
    box-shadow:0 0 60px 10px #b7b7ff44 inset, 0 0 120px 10px #b7b7ff22;
    background:radial-gradient(circle at 30% 30%, #d8d8ff 5%, #bdbdf7 30%, #5b5b8a 65%, #1a1a2b 100%);
    top:60px; right:60px; opacity:.25; filter:grayscale(.2);
  }
  .card{
    max-width: 760px;
    margin: 14vh auto 8vh;
    background: linear-gradient(180deg, rgba(15,15,24,.8), rgba(8,8,12,.9));
    border: 1px solid #1d1d27;
    border-radius: 20px;
    padding: 32px 28px;
    box-shadow: var(--glow), 0 20px 60px rgba(0,0,0,.6);
    backdrop-filter: blur(6px);
  }
  h1{
    font-family: Cinzel, serif;
    letter-spacing:.06em;
    font-weight:700;
    margin:0 0 12px;
    color:#eaeaff;
    text-shadow:0 0 18px rgba(170,160,255,.25);
  }
  .line{
    color:var(--ink);
    margin:12px 0;
    line-height:1.6;
  }
  .touch{
    margin:22px 0 4px;
    background:#0e0e17;
    color:#eaeaff;
    border:1px solid #2a2a3b;
    padding:12px 18px;
    border-radius:999px;
    cursor:pointer;
    letter-spacing:.4px;
    transition:transform .2s ease, box-shadow .2s ease, background .2s ease;
    box-shadow:0 0 0 0 rgba(122,76,255,0);
  }
  .touch:active,
  .touch.holding{
    transform:scale(.98);
    box-shadow:0 0 28px 2px rgba(122,76,255,.35);
    background:linear-gradient(90deg, #0e0e17, #181828);
  }
  .reveal{
    max-height:0;
    overflow:hidden;
    transition:max-height 700ms ease-in-out, opacity 600ms ease-in-out;
    opacity:0;
  }
  .reveal.show{
    max-height:480px;
    opacity:1;
  }
  .ask{
    margin:18px 0 12px;
    font-weight:700;
    color:#f1eeff;
    letter-spacing:.3px;
  }
  .actions{
    display:flex;
    gap:12px;
    margin-top:10px;
    flex-wrap:wrap;
  }
  .btn{
    display:inline-block;
    text-decoration:none;
    padding:12px 18px;
    border-radius:12px;
    font-weight:600;
    border:1px solid #2a2a3b;
    background:#0c0c12;
    color:#f5f5ff;
    transition:transform .15s ease, box-shadow .2s ease, background .2s ease;
  }
  .btn:hover{transform:translateY(-1px)}
  .btn.yes{background:linear-gradient(135deg, #7a4cff, #ff3b81)}
  .btn.talk{background:linear-gradient(135deg, #1f1f2c, #2f2f45)}
  footer{
    text-align:center;
    color:var(--dim);
    font-size:.9rem;
    padding-bottom:32px;
  }
  .raven{
    position:fixed; left:8%; top:14%;
    width:120px; height:90px; opacity:.12; filter:drop-shadow(0 0 22px rgba(0,0,0,.6));
  }
  .raven .body{
    position:absolute; left:40px; top:26px; width:42px; height:32px;
    background:#0a0a0f; border-radius:26px 18px 12px 18px;
  }
  .raven .wing{
    position:absolute; top:10px; width:58px; height:38px; background:#0a0a0f;
    border-radius: 6px 50px 6px 50px; transform-origin: right center;
    animation: flap 4.2s ease-in-out infinite;
  }
  .raven .wing.left{ left:-2px; transform: rotate(8deg) }
  .raven .wing.right{ right:-14px; transform: rotate(-8deg); animation-delay: 1.1s }
  @keyframes flap{
    0%,100%{ transform: rotate(6deg) }
    50%{ transform: rotate(-12deg) }
  }
  @media (max-width:560px){
    .card{ margin: 12vh 14px 6vh; padding: 22px 18px }
    .moon{ width:120px; height:120px; right:24px; top:24px }
  }
  </style>
</head>
<body>
  <div class="stars"></div>
  <div class="moon"></div>
  <div class="raven">
    <div class="wing left"></div>
    <div class="body"></div>
    <div class="wing right"></div>
  </div>

  <main class="card" id="card">
    <h1>Manu</h1>
    <p class="line">In Delhi’s midnight hush, under raven wings, a secret keeps returning—your name.</p>
    <p class="line">Your smile is moonlight on black silk, soft and dangerously beautiful.</p>
    <p class="line">Place your hand here and hold for a heartbeat.</p>

    <button class="touch" id="touchBtn" aria-label="Touch to reveal">Touch & Hold</button>

    <div class="reveal" id="reveal">
      <p class="line">Let’s steal the night—cheeseburgers and farmhouse pizza, city lights and slow laughter.</p>
      <p class="line">If love is a code, you are the only key it accepts.</p>
      <p class="line ask">Manu, will you be mine—tonight, and every night after?</p>
      <div class="actions">
        <!-- Tip: replace NUMBER with your phone in international format in wa.me if you want direct chat -->
        <a class="btn yes" href="https://api.whatsapp.com/send?text=Yes%2C+I%27m+yours.%20%F0%9F%92%99" target="_blank" rel="noopener">Yes</a>
        <a class="btn talk" href="https://api.whatsapp.com/send?text=Let%27s+talk+%F0%9F%92%AD" target="_blank" rel="noopener">Let’s talk</a>
      </div>
    </div>
  </main>

  <footer>
    <p>For the girl who looks the cutest when she smiles.</p>
  </footer>

  <script>
  const touchBtn = document.getElementById('touchBtn');
  const reveal = document.getElementById('reveal');
  let holdTimer;

  const startHold = () => {
    touchBtn.classList.add('holding');
    holdTimer = setTimeout(() => {
      reveal.classList.add('show');
    }, 900);
  };
  const cancelHold = () => {
    touchBtn.classList.remove('holding');
    clearTimeout(holdTimer);
  };
  touchBtn.addEventListener('mousedown', startHold);
  touchBtn.addEventListener('mouseup', cancelHold);
  touchBtn.addEventListener('mouseleave', cancelHold);
  touchBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startHold(); }, {passive:false});
  touchBtn.addEventListener('touchend', (e) => { e.preventDefault(); cancelHold(); }, {passive:false});
  </script>
</body>
</html>
