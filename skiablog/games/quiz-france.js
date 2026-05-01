/* =====================================================
   SKIAblog — Mini-jeu Mistral
   "Quiz Culture Française"
   QCM 4 choix, commentaires patriotiques de Mistral
   ===================================================== */

function initQuizFranceGame(containerId) {
  var questions = [
    {
      q:       "Quel fromage est originaire de Normandie ?",
      opts:    ["Le Camembert 🧀", "Le Roquefort", "Le Comté", "Le Brie"],
      correct: 0,
      comment: "OUI !! Le Camembert de Normandie, inventé par Marie Harel vers 1791 à Camembert (Orne). La France a PLUS DE 1000 fromages différents — battez ça les amerloques !! 🇫🇷🧀"
    },
    {
      q:       "Quelle est la devise officielle de la France ?",
      opts:    ["Dieu et Mon Droit", "Liberté, Égalité, Fraternité", "En Dieu nous croyons", "Une Nation, Une Langue"],
      correct: 1,
      comment: "LIBERTÉ, ÉGALITÉ, FRATERNITÉ !! La devise de 1789 que le monde entier nous a copiée (ils essaient...) 🥐🍷🇫🇷 Vive la République !!"
    },
    {
      q:       "En quelle année la Tour Eiffel a-t-elle été inaugurée ?",
      opts:    ["1885", "1889", "1900", "1895"],
      correct: 1,
      comment: "1889 pour l'Exposition Universelle de Paris !! Gustave Eiffel, génie FRANÇAIS, a construit en 2 ans 2 mois et 5 jours ce qui est devenu le symbole de notre supériorité architecturale mondiale 🗼🇫🇷"
    },
    {
      q:       "Quel plat français est composé d'escargots cuits au beurre persillé ?",
      opts:    ["Les Cuisses de grenouille", "La Bouillabaisse", "Les Escargots de Bourgogne", "Le Cassoulet"],
      correct: 2,
      comment: "Les Escargots de Bourgogne !! Et oui on mange des escargots et c'est DÉLICIEUX. Toute personne qui dit le contraire n'a jamais goûté et ne mérite pas de voyager en France 🐌🧈🇫🇷"
    },
    {
      q:       "Qui a peint « La Liberté guidant le Peuple » (1830) ?",
      opts:    ["Pierre-Auguste Renoir", "Claude Monet", "Eugène Delacroix", "Jacques-Louis David"],
      correct: 2,
      comment: "EUGÈNE DELACROIX !! Ce chef-d'œuvre du romantisme français est visible au Louvre. La femme au drapeau tricolore... icône de notre révolution... 🎨🇫🇷 Et non, c'est pas Marianne qui s'appelle vraiment Marianne."
    },
    {
      q:       "Quelle ville française est surnommée « la Capitale des Gaules » ?",
      opts:    ["Marseille", "Paris", "Lyon", "Bordeaux"],
      correct: 2,
      comment: "LYON !! Lugdunum pour les Romains, capitale de la Gaule antique. Aujourd'hui capitale mondiale de la gastronomie aussi. Paris peut aller se rhabiller sur ce point 😤 (je dis ça mais j'aime Paris aussi 🇫🇷)"
    },
    {
      q:       "Quel est le sport national de la France qui se joue avec des boules métalliques ?",
      opts:    ["La Crosse", "Le Jeu de paume", "La Pétanque", "Le Boules-lyonnais"],
      correct: 2,
      comment: "LA PÉTANQUE !! Inventée à La Ciotat en 1907 par Jules Lenoir (qui ne pouvait plus courir). On dit aussi « boules » pour le jeu lyonnais. En tout cas c'est 100% FRANÇAIS et c'est magnifique ☀️🇫🇷"
    },
    {
      q:       "Quel chanteur français a popularisé « La Vie en Rose » dans les années 1940 ?",
      opts:    ["Charles Aznavour", "Jacques Brel", "Édith Piaf", "Serge Gainsbourg"],
      correct: 2,
      comment: "ÉDITH PIAF — La Môme Piaf !! « La Vie en Rose » écrite par elle-même en 1945, reprise dans le monde entier. Elle représente l'âme française mieux que personne 🌹🇫🇷 Allez écouter ça maintenant !!"
    },
    {
      q:       "Combien de régions métropolitaines compte la France depuis 2016 ?",
      opts:    ["18", "22", "13", "16"],
      correct: 2,
      comment: "13 RÉGIONS métropolitaines depuis la réforme de 2016 !! Plus les 5 régions d'outre-mer = 18 au total. La France est grande mais bien organisée... quand elle veut 🇫🇷 (La réforme avait fusionné des régions, Alsace+Lorraine+Champagne = Grand Est par exemple)"
    },
    {
      q:       "Quelle célébrité française a gagné l'Eurovision 2021 pour la France ? (après des décennies d'absence au podium)",
      opts:    ["Aucune, la France a eu un gros flop", "Barbara Pravi avec « Voilà »", "Natasha St-Pier", "Amir avec « J'ai cherché »"],
      correct: 1,
      comment: "BARBARA PRAVI avec 'Voilà' !! 2ème place (on aurait mérité 1ère mais bon...) après des années de résultats catastrophiques pour la France à l'Eurovision. Depuis 2021 on est de retour !! 🎤🇫🇷 Et non, c'était pas Natasha St-Pier (elle représentait la France en 2001)."
    }
  ];

  var score = 0;
  var current = 0;

  var container = document.getElementById(containerId);
  if (!container) return;

  function render() {
    if (current >= questions.length) { showResult(); return; }
    var q = questions[current];
    var optsHtml = q.opts.map(function(opt, i) {
      return '<button class="btn-game quiz-opt" data-idx="' + i + '" style="display:block;width:100%;text-align:left;margin:4px 0;padding:8px 14px;">' +
             (String.fromCharCode(65 + i)) + ') ' + opt + '</button>';
    }).join('');

    container.innerHTML =
      '<div class="game-widget">' +
        '<div class="game-widget-title" style="color:#002395;text-shadow:2px 2px 0 #ed2939;">🇫🇷 Quiz Culture Française</div>' +
        '<div class="game-intro">Prouve que tu mérites de mettre les pieds sur notre beau territoire national !!</div>' +
        '<div class="game-score" style="color:#002395;">Score : ' + score + ' / ' + questions.length + '</div>' +
        '<div class="game-progress">Question ' + (current + 1) + ' / ' + questions.length + '</div>' +
        '<div class="game-question-box" style="font-size:14px;font-weight:bold;">' +
          '❓ ' + q.q +
        '</div>' +
        '<div style="padding:4px 0;">' + optsHtml + '</div>' +
        '<div class="game-feedback feedback-neutral" id="qfb" style="display:none;"></div>' +
        '<div style="text-align:center;margin-top:8px;">' +
          '<button class="btn-game" id="qnext" style="display:none;">Suivant →</button>' +
        '</div>' +
      '</div>';

    document.querySelectorAll('.quiz-opt').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var idx = parseInt(this.getAttribute('data-idx'));
        checkAnswer(idx);
      });
    });
    document.getElementById('qnext').addEventListener('click', function() { current++; render(); });
  }

  function checkAnswer(idx) {
    var q = questions[current];
    var ok = (idx === q.correct);
    if (ok) score++;

    document.querySelectorAll('.quiz-opt').forEach(function(btn, i) {
      btn.disabled = true;
      if (i === q.correct) btn.style.background = 'linear-gradient(to bottom,#90ee90,#228b22)';
      else if (i === idx && !ok) btn.style.background = 'linear-gradient(to bottom,#ff9999,#cc0000)';
    });

    var fb = document.getElementById('qfb');
    fb.style.display = 'block';
    fb.className = 'game-feedback ' + (ok ? 'feedback-correct' : 'feedback-wrong');
    fb.innerHTML =
      (ok ? '✅ <b>EXACT !!' : '❌ <b>Raté !! Réponse : ' + q.opts[q.correct] + '</b>') +
      '<br>' + q.comment;

    var nb = document.getElementById('qnext');
    nb.style.display = 'inline-block';
    if (current === questions.length - 1) nb.textContent = 'Voir résultat !!';
  }

  function showResult() {
    var pct = Math.round((score / questions.length) * 100);
    var msgs = [
      { min: 0, max: 3,  msg: 'Sacré bleu !! ' + score + '/10... Tu ne mérites pas la baguette. Retourne à l\'école et apprends la culture du PAYS LE PLUS BEAU DU MONDE avant de revenir me voir !!! 😤🇫🇷' },
      { min: 4, max: 6,  msg: score + '/10... Hmm. T\'as les bases mais faut réviser. Relis "Histoire de France" de Jules Michelet et reviens. On fait mieux chez nous !! 📚🇫🇷' },
      { min: 7, max: 8,  msg: score + '/10 !! Bien joué(e) !! Tu mérites un croissant et un café 🥐☕ Tu connais notre beau pays ! Vive la France !!' },
      { min: 9, max: 10, msg: score + '/10 !!! PARFAIT !! Tu es pratiquement français(e) de cœur !! 🥇🇫🇷🐓 COCORICO !! La France est fière de toi — viens à Paris fêter ça !!' }
    ];
    var msg = msgs.find(function(m) { return score >= m.min && score <= m.max; });
    container.innerHTML =
      '<div class="game-widget">' +
        '<div class="game-widget-title" style="color:#002395;">🇫🇷 Résultat !!</div>' +
        '<div class="game-result-box" style="background:linear-gradient(to right,rgba(0,35,149,0.1),rgba(255,255,255,0.5),rgba(237,41,57,0.1));">' +
          '<div class="game-result-score" style="color:#002395;text-shadow:3px 3px 0 #ed2939;">' + score + ' / ' + questions.length + '</div>' +
          '<div style="font-size:32px;margin:8px 0;">🇫🇷🐓🥐🗼</div>' +
          '<div class="game-result-msg">' + msg.msg + '</div>' +
          '<div style="font-size:18px;margin-top:12px;color:#002395;font-weight:bold;">— MiStRaL-LeVrAiFrAnCaIs 🇫🇷</div>' +
          '<button class="game-restart-btn" style="background:linear-gradient(to bottom,#002395,#001166);margin-top:12px;" onclick="initQuizFranceGame(\'' + containerId + '\')">Retenter !! 🇫🇷</button>' +
        '</div>' +
      '</div>';
  }

  render();
}
