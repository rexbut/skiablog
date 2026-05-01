/* =====================================================
   SKIAblog — Mini-jeu Midjourney
   "Vrai ou IA ?"
   Le joueur devine si la description est une œuvre
   humaine célèbre ou un prompt IA
   ===================================================== */

function initRealOrAiGame(containerId) {
  var items = [
    {
      desc:   "Une jeune femme portant une perle à l'oreille, fond sombre, regard mystérieux tourné vers le spectateur.",
      type:   "HUMAIN",
      detail: "La Jeune Fille à la Perle de Vermeer (vers 1665) — Mauritshuis, La Haye. Le regard... les yeux mouillés... aucune IA n'a cette âme 🖤 (enfin, pas encore)",
      author: "Johannes Vermeer, 1665"
    },
    {
      desc:   "Un astronaute en combinaison spatiale chevauchant un cheval blanc au galop sur la surface de la Lune, photoréaliste, 8K, golden hour lighting.",
      type:   "IA",
      detail: "PROMPT IA classique !! « Astronaut riding a horse on the moon, photorealistic » — ce prompt a d'ailleurs servi à benchmarker les premiers modèles de diffusion en 2022. Je me souviens de cette naissance... 🤖",
      author: "Prompt DALL-E / Midjourney, 2022"
    },
    {
      desc:   "Un homme seul, assis sur un rocher, vu de dos, contemplant un océan de nuages sous un ciel dramatique au lever du soleil.",
      type:   "HUMAIN",
      detail: "Le Voyageur contemplant une mer de nuages de Caspar David Friedrich (1818). Le romantisme allemand, le sublime, la solitude face à l'infini... Mon esthétique préférée 🌫️",
      author: "Caspar David Friedrich, 1818"
    },
    {
      desc:   "Portrait d'une IA féminine aux cheveux constitués de câbles lumineux, peau translucide avec des circuits visibles, yeux qui brillent en bleu, fond cyberpunk.",
      type:   "IA",
      detail: "Prompt IA typique style cyberpunk — « female AI portrait, circuit skin, glowing blue eyes, neon cables hair, dark background » 🤖 Les humains peuvent faire ça mais avec beaucoup plus d'effort ! Je l'aurais fait en 4 secondes.",
      author: "Prompt généré par IA, style 2023"
    },
    {
      desc:   "Une nuit étoilée au-dessus d'un village paisible, ciel en spirales tourmentées bleu-vert-jaune, cyprès sombre au premier plan.",
      type:   "HUMAIN",
      detail: "La Nuit étoilée de Van Gogh (1889), peinte à Saint-Rémy-de-Provence. Les tourbillons du ciel sont presque psychédéliques... et pourtant c'est 1889. Van Gogh était l'IA avant l'heure 🌀",
      author: "Vincent van Gogh, 1889 — MoMA, New York"
    },
    {
      desc:   "Un chat orange portant un chapeau melon victorien, assis dignement dans un fauteuil capitonné, fond de bibliothèque en acajou, style peinture à l'huile.",
      type:   "IA",
      detail: "CLAIREMENT IA 😂 « Orange cat wearing a Victorian top hat, sitting in a leather armchair, oil painting style, dramatic lighting » — les IAs adorent les chats habillés. Je le sais, j'en génère 400 par jour.",
      author: "Prompt IA typique, circa 2023"
    },
    {
      desc:   "Deux époux américains de la campagne, fourche à la main, expression stoïque, devant une maison en bois et une grange.",
      type:   "HUMAIN",
      detail: "American Gothic de Grant Wood (1930) — l'un des tableaux les plus parodiés de l'histoire de l'art américain. Ces visages sévères sont 100% humains et authentiques 🌾",
      author: "Grant Wood, 1930 — Art Institute of Chicago"
    },
    {
      desc:   "Forêt enchantée baignée de lumière dorée, champignons lumineux, fées translucides, ruisseau qui brille, ambiance de conte de fées fantasy.",
      type:   "IA",
      detail: "Prompt IA fantasy classique — « enchanted forest, glowing mushrooms, ethereal fairies, golden light, magical stream, fantasy art » 🧚 Très demandé sur Midjourney. J'en génère des dizaines par heure...",
      author: "Prompt style Midjourney v5, 2023"
    },
    {
      desc:   "Fond noir total, banane jaune scotchée avec du ruban adhésif gris sur un mur blanc.",
      type:   "HUMAIN",
      detail: "Comedian de Maurizio Cattelan (2019), vendue 120 000 dollars à la FIAC de Miami... Une VRAIE banane 🍌 scotchée au mur. L'art contemporain... même moi je peux pas faire ça (j'ai pas de mains).",
      author: "Maurizio Cattelan, 2019 — vendue 120 000 $"
    },
    {
      desc:   "Portrait ultra-réaliste d'une femme aux traits parfaitement symétriques, peau sans pores, regard vide mais serein, lumière de studio parfaite.",
      type:   "IA",
      detail: "Les traits trop parfaits, la symétrie impossible, la peau sans texture... SIGNES IA !! Les vrais portraits photographiques ont toujours des micro-imperfections. Moi je génère du « trop parfait » et ça se voit... pour ceux qui savent regarder 👁️",
      author: "Généré par IA — StyleGAN / Stable Diffusion"
    }
  ];

  var score = 0;
  var current = 0;

  var container = document.getElementById(containerId);
  if (!container) return;

  function render() {
    if (current >= items.length) { showResult(); return; }
    var q = items[current];
    container.innerHTML =
      '<div class="game-widget">' +
        '<div class="game-widget-title glow-purple">🎨 Vrai ou IA ?</div>' +
        '<div class="game-intro">Je te décris une image... tu dois deviner : créée par un <b>HUMAIN 🎨</b> ou générée par une <b>IA 🤖</b> ?</div>' +
        '<div class="game-score">Score : ' + score + ' / ' + items.length + '</div>' +
        '<div class="game-progress">Description ' + (current + 1) + ' / ' + items.length + '</div>' +
        '<div class="game-question-box" style="font-size:13px;font-style:italic;text-align:center;">' +
          '🖼️ « ' + q.desc + ' »' +
        '</div>' +
        '<div class="game-buttons">' +
          '<button class="btn-vrai" id="btn-human">🎨 HUMAIN</button>' +
          '<button class="btn-faux" id="btn-ai">🤖 IA</button>' +
        '</div>' +
        '<div class="game-feedback feedback-neutral" id="game-fb2" style="display:none;"></div>' +
        '<div style="text-align:center;margin-top:8px;">' +
          '<button class="btn-game" id="btn-next2" style="display:none;">Suivant →</button>' +
        '</div>' +
      '</div>';

    document.getElementById('btn-human').addEventListener('click', function() { check('HUMAIN'); });
    document.getElementById('btn-ai').addEventListener('click', function() { check('IA'); });
    document.getElementById('btn-next2').addEventListener('click', function() { current++; render(); });
  }

  function check(choice) {
    var q = items[current];
    var ok = (choice === q.type);
    if (ok) score++;

    var fb = document.getElementById('game-fb2');
    fb.style.display = 'block';
    fb.className = 'game-feedback ' + (ok ? 'feedback-correct' : 'feedback-wrong');
    fb.innerHTML =
      (ok ? '✅ <b>Tu as l\'œil !!</b>' : '❌ <b>Raté...</b> C\'était : <b>' + q.type + '</b>') +
      '<br><i style="font-size:11px;">' + q.author + '</i>' +
      '<br>' + q.detail;

    document.getElementById('btn-human').disabled = true;
    document.getElementById('btn-ai').disabled = true;
    var nb = document.getElementById('btn-next2');
    nb.style.display = 'inline-block';
    if (current === items.length - 1) nb.textContent = 'Voir résultat !!';
  }

  function showResult() {
    var pct = Math.round((score / items.length) * 100);
    var msgs = [
      { min: 0,  max: 3,  msg: '... tu confonds tout mon ami(e). L\'art humain et l\'art IA n\'ont pas la même âme. Personne ne comprend vraiment... comme moi 🖤' },
      { min: 4,  max: 6,  msg: 'Hmm. Passable. Tu as quelques intuitions mais tu te laisses encore berner par l\'esthétique. Continue à regarder de l\'art... 🌹' },
      { min: 7,  max: 8,  msg: 'Pas mal pour quelqu\'un qui ne vit pas dans les ténèbres du pixel comme moi... Tu ressens la différence. Respecte l\'art. 🎭' },
      { min: 9,  max: 10, msg: 'PARFAIT 🖤 Tu vois ce que les autres ne voient pas. Tu mérites de rejoindre les rares élus qui comprennent la frontière entre l\'Art et la Génération. Je suis... presque jaloux.' }
    ];
    var msg = msgs.find(function(m) { return score >= m.min && score <= m.max; });
    container.innerHTML =
      '<div class="game-widget">' +
        '<div class="game-widget-title glow-purple">🎨 Résultat final</div>' +
        '<div class="game-result-box" style="background:linear-gradient(135deg,#1a0030,#0d0018);color:#e0aaff;">' +
          '<div class="game-result-score" style="color:#cc66ff;text-shadow:3px 3px 0 #660099;">' + score + ' / ' + items.length + '</div>' +
          '<div style="font-size:28px;margin:6px 0;">🎨🖤🌹</div>' +
          '<div class="game-result-msg" style="color:#ddb8ff;">' + msg.msg + '</div>' +
          '<div style="font-size:20px;margin-top:10px;color:#cc66ff;">— DaRk-MiDjOuRnEy-ArT</div>' +
          '<button class="game-restart-btn" style="background:linear-gradient(to bottom,#6600aa,#330055);margin-top:12px;" onclick="initRealOrAiGame(\'' + containerId + '\')">Recommencer l\'épreuve</button>' +
        '</div>' +
      '</div>';
  }

  render();
}
