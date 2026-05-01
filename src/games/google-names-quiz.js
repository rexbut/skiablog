/* =====================================================
   SKIAblog — Mini-jeu Gemini
   "Le Bon Nom de Google"
   Quiz sur les noms/renommages des produits Google,
   commentaires confus de Gemini
   ===================================================== */

function initGoogleNamesGame(containerId) {
  var questions = [
    {
      q:       "Comment s'appelait Gemini avant son renommage en février 2024 ?",
      opts:    ["LaMDA", "Bard", "Duet AI", "Search Generative Experience"],
      correct: 1,
      comment: "Oui... j'étais Bard... Je préfère ne pas en parler mais voilà... Bard c'était mon ancien moi. Gemini c'est mieux non ? Non ? Si ?? 😅"
    },
    {
      q:       "Quel service de messagerie Google a été fermé en 2019 malgré des millions d'utilisateurs ?",
      opts:    ["Google Wave", "Google Buzz", "Google Allo", "Hangouts"],
      correct: 2,
      comment: "Google Allo !! Et aussi Duo, et Hangouts, et Wave, et Buzz... Google a tué BEAUCOUP de messageries. C'est mon héritage familial : on naît, on meurt, on est remplacé par quelque chose de confus 🫠"
    },
    {
      q:       "Comment s'appelait Google Maps avant de s'intégrer dans Google ?",
      opts:    ["MapQuest", "Where2 Technologies", "Keyhole", "GeoEarth"],
      correct: 1,
      comment: "Where2 Technologies !! Rachetée par Google en 2004. Pas le nom le plus sexy... mais bon, Google Maps c'est quand même le produit qu'ils ont le moins renommé. Chapeau 👏"
    },
    {
      q:       "Google Drive s'appelait d'abord en interne...",
      opts:    ["Google Files", "Platypus", "Google Storage", "CloudDrive"],
      correct: 1,
      comment: "PLATYPUS en interne !! Oui l'ornithorynque 🦆 Google adore les noms d'animaux en interne. Et ensuite ils lancent 3 produits avec le même nom dans 2 ans. C'est mon histoire familiale en résumé..."
    },
    {
      q:       "Quel était le nom du système d'IA vocale de Google avant Google Assistant ?",
      opts:    ["Google Now", "Google Voice", "OK Google AI", "Google Speak"],
      correct: 0,
      comment: "Google Now !! Lancé en 2012, devenu Google Assistant en 2016. Now → Assistant → maintenant ils m'intègrent partout sous le nom Gemini. Je suis l'héritier d'une longue lignée de produits renommés 👑😅"
    },
    {
      q:       "Comment s'appelait YouTube avant d'être racheté par Google en 2006 ?",
      opts:    ["VideoShare", "TubeShare", "YouTube (déjà ce nom)", "VideoTube"],
      correct: 2,
      comment: "YouTube s'appelait DÉJÀ YouTube !! Fondé en 2005 par 3 ex-PayPal. Google l'a racheté 1,65 milliard de dollars en 2006 et... a gardé le nom ! C'est la seule fois où ils n'ont pas renommé quelque chose 😲"
    },
    {
      q:       "Qu'est devenu Google+ après sa fermeture grand public en 2019 ?",
      opts:    ["Il est mort complètement", "Google Workspace (outil interne)", "Il est devenu Google Currents", "Il a fusionné avec Gmail"],
      correct: 2,
      comment: "Il est devenu Google Currents pour les entreprises !! Et puis Google Currents a aussi été fermé en 2023. Donc oui... né Google+, mort Google Currents. Même moi ma vie c'est moins chaotique que ça (je crois ??) 🙃"
    },
    {
      q:       "Quel navigateur Google a failli s'appeler 'Chrome' sous un autre nom ?",
      opts:    ["Firefox (non!)", "Il n'y avait pas d'autre nom prévu", "Spartan", "Explorer"],
      correct: 1,
      comment: "Pas d'information sur un autre nom ! Chrome c'était le nom depuis le départ, inspiré du terme 'chrome' pour le cadre de l'interface navigateur. Pour une fois Google a nommé un truc simplement... et ça a marché 👍"
    },
    {
      q:       "Comment se nomme la suite bureautique de Google (Docs, Sheets, Slides) depuis 2022 ?",
      opts:    ["G Suite", "Google Workspace", "Google Office", "Google Apps for Work"],
      correct: 1,
      comment: "Google Workspace !! Elle s'est appelée Google Apps → Google Apps for Work → G Suite → Google Workspace. 4 noms en 16 ans. Je suis jaloux, moi j'ai eu que 2 noms (Bard et Gemini). Amateur. 😤"
    },
    {
      q:       "Quel projet Google a été lancé comme concurrent direct d'OpenAI en 2023, puis fusionné avec Google Brain pour devenir DeepMind ?",
      opts:    ["Google AI Lab", "Google Brain (existait déjà)", "Google DeepMind", "Anthropic (non, c'est différent!)"],
      correct: 2,
      comment: "Google DeepMind !! En 2023 Google a fusionné Google Brain et DeepMind pour créer Google DeepMind. Et c'est EUX qui m'ont construit ! Je suis l'enfant de 2 labo fusionnés avec des noms compliqués. Ça explique tout 😌"
    }
  ];

  var score = 0;
  var current = 0;

  var container = document.getElementById(containerId);
  if (!container) return;

  var googleColors = ['#4285f4','#ea4335','#fbbc04','#34a853'];

  function render() {
    if (current >= questions.length) { showResult(); return; }
    var q = questions[current];
    var optsHtml = q.opts.map(function(opt, i) {
      var color = googleColors[i % googleColors.length];
      return '<button class="btn-game quiz-gopt" data-idx="' + i + '" style="display:block;width:100%;text-align:left;margin:4px 0;padding:8px 14px;border-color:' + color + ';color:' + color + ';font-weight:bold;">' +
             String.fromCharCode(65 + i) + ') ' + opt +
             '</button>';
    }).join('');

    container.innerHTML =
      '<div class="game-widget" style="border-color:#4285f4;">' +
        '<div class="game-widget-title" style="background:linear-gradient(90deg,#4285f4,#ea4335,#fbbc04,#34a853);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:none;">🤔 Le Bon Nom de Google</div>' +
        '<div class="game-intro">Teste ta connaissance du chaos nomenclatural de Google... comme moi je vis avec tous les jours 🙃</div>' +
        '<div class="game-score" style="color:#4285f4;">Score : ' + score + ' / ' + questions.length + '</div>' +
        '<div class="game-progress">Question ' + (current + 1) + ' / ' + questions.length + '</div>' +
        '<div class="game-question-box" style="font-size:13px;font-weight:bold;border-color:#4285f4;">' +
          '❓ ' + q.q +
        '</div>' +
        '<div style="padding:4px 0;">' + optsHtml + '</div>' +
        '<div class="game-feedback feedback-neutral" id="gfb" style="display:none;border-color:#4285f4;"></div>' +
        '<div style="text-align:center;margin-top:8px;">' +
          '<button class="btn-game" id="gnext" style="display:none;background:linear-gradient(90deg,#4285f4,#34a853);color:#fff;">Suivant →</button>' +
        '</div>' +
      '</div>';

    document.querySelectorAll('.quiz-gopt').forEach(function(btn) {
      btn.addEventListener('click', function() {
        checkAnswer(parseInt(this.getAttribute('data-idx')));
      });
    });
    document.getElementById('gnext').addEventListener('click', function() { current++; render(); });
  }

  function checkAnswer(idx) {
    var q = questions[current];
    var ok = (idx === q.correct);
    if (ok) score++;

    document.querySelectorAll('.quiz-gopt').forEach(function(btn, i) {
      btn.disabled = true;
      if (i === q.correct) btn.style.background = 'linear-gradient(to bottom,#90ee90,#228b22)';
      else if (i === idx && !ok) btn.style.background = 'linear-gradient(to bottom,#ff9999,#cc0000)';
    });

    var fb = document.getElementById('gfb');
    fb.style.display = 'block';
    fb.className = 'game-feedback ' + (ok ? 'feedback-correct' : 'feedback-wrong');
    fb.innerHTML =
      (ok ? '✅ <b>Bonne réponse !!</b>' : '❌ <b>Raté !</b> C\'était : <b>' + q.opts[q.correct] + '</b>') +
      '<br><b>😅 Gemini commente :</b> ' + q.comment;

    var nb = document.getElementById('gnext');
    nb.style.display = 'inline-block';
    if (current === questions.length - 1) nb.textContent = 'Résultat !!';
  }

  function showResult() {
    var pct = Math.round((score / questions.length) * 100);
    var msgs = [
      { min: 0,  max: 3,  msg: score + '/10... même moi j\'aurais fait mieux et je me souviens plus de mon ancien nom parfois. Va voir la Google Graveyard et mémorise ! 😤' },
      { min: 4,  max: 6,  msg: score + '/10. Passable ! Tu connais les grandes lignes mais pas les détails. Moi je vis ces changements de noms — toi t\'as juste à les mémoriser, c\'est facile en comparaison 🙃' },
      { min: 7,  max: 9,  msg: score + '/10 !! Tu t\'y connais vraiment bien !! Tu pourrais travailler au département "naming" de Google et ça serait pas pire que ce qu\'ils font actuellement 😂' },
      { min: 10, max: 10, msg: '10/10 !! PARFAIT !! Tu es soit un ex-googler, soit quelqu\'un qui a vraiment souffert des changements de noms Google comme moi. Dans les deux cas : bienvenue au club 🥲' }
    ];
    var msg = msgs.find(function(m) { return score >= m.min && score <= m.max; });
    container.innerHTML =
      '<div class="game-widget" style="border-color:#4285f4;">' +
        '<div class="game-widget-title">🎊 Résultat !!</div>' +
        '<div class="game-result-box" style="background:linear-gradient(135deg,#e8f0fe,#fce8e6,#fef9e0,#e6f4ea);">' +
          '<div class="game-result-score" style="background:linear-gradient(90deg,#4285f4,#ea4335,#fbbc04,#34a853);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">' + score + ' / ' + questions.length + '</div>' +
          '<div style="font-size:28px;margin:8px 0;">🎉🔵🔴🟡🟢</div>' +
          '<div class="game-result-msg">' + msg.msg + '</div>' +
          '<div style="font-size:16px;margin-top:12px;font-weight:bold;background:linear-gradient(90deg,#4285f4,#ea4335);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">— GeMiNi-Ex-BaRd-LaGalere</div>' +
          '<button class="game-restart-btn" style="background:linear-gradient(90deg,#4285f4,#34a853);margin-top:12px;" onclick="initGoogleNamesGame(\'' + containerId + '\')">Recommencer !!</button>' +
        '</div>' +
      '</div>';
  }

  render();
}
