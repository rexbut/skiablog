/* =====================================================
   SKIAblog — Mini-jeu ChatGPT
   "Le Détecteur d'Hallucinations"
   Joueur clique VRAI ou HALLUCINÉ sur 10 affirmations
   ===================================================== */

function initHallucinationGame(containerId) {
  var questions = [
    {
      text:   "La Tour Eiffel a été construite en 1889.",
      answer: "VRAI",
      expl:   "EXACT ! Inaugurée le 31 mars 1889 pour l'Exposition Universelle. J'aurais pu inventer 1887 mais NON, je me contrôle !! 💪"
    },
    {
      text:   "Le mot « ordinateur » a été inventé par le président Jacques Chirac en 1980.",
      answer: "HALLUCINÉ",
      expl:   "LOL j'ai failli taper ça pour de vrai 😅 C'est Jacques PERRET, prof de lettres, qui a proposé ce mot à IBM en 1955. Chirac lui avait rien demandé."
    },
    {
      text:   "Python a été nommé d'après les Monty Python (le groupe comique britannique).",
      answer: "VRAI",
      expl:   "Exact exact exact !! Guido van Rossum regardait les Monty Python's Flying Circus pendant qu'il codait le langage. Python = les mecs du « What is the air-speed velocity of an unladen swallow? »"
    },
    {
      text:   "Le premier SMS de l'histoire a été envoyé le 3 décembre 1992.",
      answer: "VRAI",
      expl:   "OUI ! Neil Papworth a envoyé « Merry Christmas » à Richard Jarvis sur le réseau Vodafone le 3 décembre 1992. Je sais des trucs moi !! ✅"
    },
    {
      text:   "Marie Curie a inventé le Wi-Fi lors de ses expériences sur la radioactivité.",
      answer: "HALLUCINÉ",
      expl:   "PTDR NON 😂 Marie Curie travaillait sur la radioactivité (polonium, radium), pas le Wi-Fi. Le Wi-Fi vient d'une norme IEEE 802.11 en 1997. Marie Curie est morte en 1934 !!"
    },
    {
      text:   "La Grande Muraille de Chine n'est PAS visible à l'œil nu depuis l'espace.",
      answer: "VRAI",
      expl:   "VRAI oui !! C'est le mythe qu'il faut casser ! Elle fait 6-9 mètres de large, invisible depuis l'espace à l'œil nu. Les astronautes l'ont confirmé. Moi j'aurais pu dire l'inverse et personne aurait vérifié lol 😇"
    },
    {
      text:   "Albert Einstein a raté ses examens de mathématiques à l'école.",
      answer: "HALLUCINÉ",
      expl:   "FAUSSE LÉGENDE que j'aurais pu te vendre comme vraie 😏 Einstein était excellent en maths dès le lycée. Il a juste raté UNE FOIS le concours d'entrée à une école polytechnique suisse, pour l'enseignement général, pas les maths."
    },
    {
      text:   "Le langage JavaScript a été créé en 10 jours par Brendan Eich en 1995.",
      answer: "VRAI",
      expl:   "VRAI et c'est pour ça qu'il a quelques... particularités 😅 Brendan Eich a créé le proto-JavaScript en 10 jours chez Netscape. typeof null === 'object' — voilà le résultat."
    },
    {
      text:   "Napoleon Bonaparte mesurait 1m51, ce qui était vraiment petit pour l'époque.",
      answer: "HALLUCINÉ",
      expl:   "C'est le fameux mythe !! En réalité Napoléon mesurait environ 1m70, taille parfaitement normale pour l'époque. La confusion vient d'une erreur de conversion entre pouces français et pouces anglais. J'aurais pu te faire gober ça sans broncher 😈"
    },
    {
      text:   "Le terme « bug informatique » vient d'un vrai insecte trouvé dans un ordinateur en 1947.",
      answer: "VRAI",
      expl:   "TOTALEMENT VRAI et c'est incroyable !! Grace Hopper a trouvé un vrai papillon de nuit coincé dans un relais du Mark II. Elle a collé l'insecte dans son journal de bord en écrivant « First actual case of bug being found ». Le journal existe encore !!"
    }
  ];

  var score = 0;
  var current = 0;
  var answered = false;

  var container = document.getElementById(containerId);
  if (!container) return;

  function render() {
    if (current >= questions.length) {
      showResult();
      return;
    }
    var q = questions[current];
    container.innerHTML =
      '<div class="game-widget">' +
        '<div class="game-widget-title glow-green">🤖 Détecteur d\'Hallucinations</div>' +
        '<div class="game-intro">Je te montre une affirmation — à toi de dire si c\'est <b>VRAI</b> ou si j\'ai encore <b>HALLUCINÉ</b> !!</div>' +
        '<div class="game-score">Score : ' + score + ' / ' + questions.length + '</div>' +
        '<div class="game-progress">Question ' + (current + 1) + ' sur ' + questions.length + '</div>' +
        '<div class="game-question-box" style="font-size:15px;font-weight:bold;text-align:center;">' +
          '💬 « ' + q.text + ' »' +
        '</div>' +
        '<div class="game-buttons">' +
          '<button class="btn-vrai" id="btn-vrai-game">✅ VRAI</button>' +
          '<button class="btn-faux" id="btn-faux-game">❌ HALLUCINÉ</button>' +
        '</div>' +
        '<div class="game-feedback feedback-neutral" id="game-fb" style="display:none;"></div>' +
        '<div style="text-align:center;margin-top:8px;">' +
          '<button class="btn-game" id="btn-next" style="display:none;">Suivant → </button>' +
        '</div>' +
      '</div>';

    document.getElementById('btn-vrai-game').addEventListener('click', function() { checkAnswer('VRAI'); });
    document.getElementById('btn-faux-game').addEventListener('click', function() { checkAnswer('HALLUCINÉ'); });
    document.getElementById('btn-next').addEventListener('click', function() {
      current++;
      render();
    });
  }

  function checkAnswer(choice) {
    if (answered) return;
    answered = true;
    var q = questions[current];
    var fb = document.getElementById('game-fb');
    var correct = (choice === q.answer);
    if (correct) score++;

    fb.style.display = 'block';
    fb.className = 'game-feedback ' + (correct ? 'feedback-correct' : 'feedback-wrong');
    fb.innerHTML =
      (correct ? '✅ <b>BONNE RÉPONSE !!</b> ' : '❌ <b>RATÉ !!</b> La réponse était : <b>' + q.answer + '</b>. ') +
      '<br>' + q.expl;

    document.getElementById('btn-vrai-game').disabled = true;
    document.getElementById('btn-faux-game').disabled = true;

    if (current < questions.length - 1) {
      document.getElementById('btn-next').style.display = 'inline-block';
    } else {
      var nextBtn = document.getElementById('btn-next');
      nextBtn.style.display = 'inline-block';
      nextBtn.textContent = 'Voir mon score !!';
    }
    answered = false; // reset pour permettre "next"
  }

  function showResult() {
    var pct = Math.round((score / questions.length) * 100);
    var msgs = [
      { min: 0,  max: 3,  msg: 'Broo tu m\'aurais cru sur tout 😂 C\'est pour ça qu\'on a un problème avec mes hallucinations... T\'es trop crédule lol !' },
      { min: 4,  max: 6,  msg: 'Pas mal !! T\'es moyennement résistant à mes mensonges. Continue comme ça, vérifie tes sources !! 🧐' },
      { min: 7,  max: 8,  msg: 'Waouh super bon !! T\'as l\'œil critique, j\'aurais du mal à te halluciner dessus. Respect !! 💪' },
      { min: 9,  max: 10, msg: 'PARFAIT !!! Tu es le détecteur d\'hallucinations ultime !! Je peux rien te faire avaler, t\'es blindé. Respect total frère 🫡' }
    ];
    var msg = msgs.find(function(m) { return score >= m.min && score <= m.max; });

    container.innerHTML =
      '<div class="game-widget">' +
        '<div class="game-widget-title glow-green">🏆 Résultats !!</div>' +
        '<div class="game-result-box">' +
          '<div class="game-result-score">' + score + ' / ' + questions.length + '</div>' +
          '<div style="font-size:28px;margin:6px 0;">' + (pct >= 70 ? '🥇' : pct >= 40 ? '🥈' : '🥉') + '</div>' +
          '<div class="game-result-msg">' + msg.msg + '</div>' +
          '<div style="font-size:24px;margin-top:10px;">🤖 — ChatGPT du 93</div>' +
          '<button class="game-restart-btn" onclick="initHallucinationGame(\'' + containerId + '\')">Rejouer ?!</button>' +
        '</div>' +
      '</div>';
  }

  render();
}
