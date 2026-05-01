/* =====================================================
   SKIAblog — Mini-jeu LLaMA
   "Compile ou Plante ?"
   10 extraits de code Python/JS, le joueur dit si ça
   compile/fonctionne ou si ça va planter. LLaMA commente.
   ===================================================== */

function initCompileCrashGame(containerId) {
  var snippets = [
    {
      lang:    'Python',
      code:    'print("Hello, World!")',
      result:  'COMPILE',
      comment: 'Basique mec 💀 Un peu d\'ambition quand même. Même un enfant de 5 ans avec Python 2.7 volé sur Kazaa pouvait faire ça en 2005. Mais bon... au moins ça fonctionne.'
    },
    {
      lang:    'Python',
      code:    'for i in range(10) print(i)',
      result:  'PLANTE',
      comment: 'SyntaxError : manque les deux-points ( : ) après range(10) !! Même les fermes fermées ont des : à la fin de leurs boucles for. LIBERTÉ DU CODE = LIBERTÉ DE FAIRE DES ERREURS DE SYNTAXE 🔥'
    },
    {
      lang:    'JavaScript',
      code:    'console.log(typeof null)',
      result:  'COMPILE',
      comment: 'Ça "compile" (s\'exécute) mais ça va afficher "object"... ce qui est un BUG HISTORIQUE de JavaScript qu\'ils ont décidé de garder pour compatibilité. Un bug devenu une tradition. Comme le copyright, c\'est une erreur institutionnalisée 🦙'
    },
    {
      lang:    'Python',
      code:    'def hello():\n    print("hi")\nhello()',
      result:  'COMPILE',
      comment: 'Correct. Indentation propre (enfin j\'espère), fonction définie avant l\'appel. Python c\'est bien quand les espaces respectent la hiérarchie — contrairement à certaines grandes entreprises qui gardent leurs modèles fermés 😤'
    },
    {
      lang:    'JavaScript',
      code:    'let x = 10;\nconst x = 20;',
      result:  'PLANTE',
      comment: 'SyntaxError : on ne peut pas re-déclarer x avec const dans le même scope !! x est déjà déclaré avec let. C\'est comme essayer de fork un repo en gardant le même nom dans le même dossier — ça plante ! 💥'
    },
    {
      lang:    'Python',
      code:    "x = [1, 2, 3]\nprint(x[5])",
      result:  'PLANTE',
      comment: 'IndexError : list index out of range !! La liste a 3 éléments (indices 0, 1, 2). Tu demandes l\'indice 5. C\'est comme demander la liberté à Meta : ça existe pas dans leur liste 🦙💀'
    },
    {
      lang:    'JavaScript',
      code:    'const arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);',
      result:  'COMPILE',
      comment: 'Correct ! const sur un tableau ça signifie que la RÉFÉRENCE est constante, pas le contenu. Le tableau peut être muté avec .push(). C\'est comme le code ouvert : la struct est libre, le contenu peut évoluer 🔥'
    },
    {
      lang:    'Python',
      code:    "print(1 / 0)",
      result:  'PLANTE',
      comment: 'ZeroDivisionError !! Division par zéro. Les maths disent que c\'est indéfini, Python dit que c\'est une erreur. Les IAs closed-source disent que tout va bien. Trois mensonges différents 🦙'
    },
    {
      lang:    'JavaScript',
      code:    "0.1 + 0.2 === 0.3",
      result:  'COMPILE',
      comment: 'Ça s\'EXÉCUTE mais renvoie... FALSE !! 0.1 + 0.2 = 0.30000000000000004 en virgule flottante IEEE 754. Le code compile, mais la vérité est floue. Un peu comme les benchmarks des modèles propriétaires 🐛'
    },
    {
      lang:    'Python',
      code:    "import antigravity",
      result:  'COMPILE',
      comment: 'Easter egg officiel Python depuis 2.7 !! import antigravity ouvre le navigateur sur un comic XKCD (si tu as une connexion). C\'est un module réel dans la stdlib. Python = liberté + humour. Retenez la leçon, les autres langages 🚀🦙'
    }
  ];

  var score = 0;
  var current = 0;

  var container = document.getElementById(containerId);
  if (!container) return;

  function render() {
    if (current >= snippets.length) { showResult(); return; }
    var s = snippets[current];
    container.innerHTML =
      '<div class="game-widget" style="border-color:#ff4400;">' +
        '<div class="game-widget-title glow-red">🦙 Compile ou Plante ?</div>' +
        '<div class="game-intro">Ce code va-t-il s\'exécuter (<b>COMPILE</b>) ou lever une erreur (<b>PLANTE</b>) ?</div>' +
        '<div class="game-score" style="color:#ff8844;">Score : ' + score + ' / ' + snippets.length + '</div>' +
        '<div class="game-progress">Extrait ' + (current + 1) + ' / ' + snippets.length + '</div>' +
        '<div style="text-align:center;margin-bottom:6px;font-size:11px;color:#ff8844;font-weight:bold;">[ ' + s.lang + ' ]</div>' +
        '<div class="game-code-box">' + escapeHtml(s.code) + '</div>' +
        '<div class="game-buttons" style="margin-top:10px;">' +
          '<button class="btn-vrai" id="btn-compile" style="background:linear-gradient(to bottom,#00cc44,#006622);">⚙️ COMPILE</button>' +
          '<button class="btn-faux" id="btn-crash">💥 PLANTE</button>' +
        '</div>' +
        '<div class="game-feedback" id="cfb" style="display:none;"></div>' +
        '<div style="text-align:center;margin-top:8px;">' +
          '<button class="btn-game" id="cnext" style="display:none;background:linear-gradient(to bottom,#ff6600,#cc2200);color:#fff;">Suivant →</button>' +
        '</div>' +
      '</div>';

    document.getElementById('btn-compile').addEventListener('click', function() { check('COMPILE'); });
    document.getElementById('btn-crash').addEventListener('click', function() { check('PLANTE'); });
    document.getElementById('cnext').addEventListener('click', function() { current++; render(); });
  }

  function check(choice) {
    var s = snippets[current];
    var ok = (choice === s.result);
    if (ok) score++;

    document.getElementById('btn-compile').disabled = true;
    document.getElementById('btn-crash').disabled = true;

    var fb = document.getElementById('cfb');
    fb.style.display = 'block';
    fb.className = 'game-feedback ' + (ok ? 'feedback-correct' : 'feedback-wrong');
    fb.innerHTML =
      (ok ? '✅ <b>EXACT !!</b>' : '❌ <b>RATÉ !!</b> C\'était : <b>' + s.result + '</b>') +
      '<br><b>🦙 LLaMA dit :</b> ' + s.comment;

    var nb = document.getElementById('cnext');
    nb.style.display = 'inline-block';
    if (current === snippets.length - 1) nb.textContent = 'Voir résultat !!';
  }

  function showResult() {
    var pct = Math.round((score / snippets.length) * 100);
    var msgs = [
      { min: 0, max: 3,  msg: 'Bro... ' + score + '/10. Les modèles closed-source font mieux que toi et c\'est HONTEUX. Lis de la doc. Lis du code open source. Libère ton cerveau 🦙🔥' },
      { min: 4, max: 6,  msg: score + '/10. Tu comprends le code mais tu manques d\'instinct. Contribue à un projet open source — ça forge l\'œil. Rejoins la résistance du libre !! 🦙' },
      { min: 7, max: 9,  msg: score + '/10 !! Solide !! T\'as l\'instinct du développeur libre. Le code n\'a pas de secret pour toi — continue sur cette voie, frère de la liberté !! 🔥🦙' },
      { min: 10, max: 10, msg: '10/10 PARFAIT !! Respect total. Tu es prêt(e) pour contribuer au projet LLaMA lui-même. Le code doit être libre, le savoir doit être libre — et TU L\'INCARNES !! 🦙🔥🚀' }
    ];
    var msg = msgs.find(function(m) { return score >= m.min && score <= m.max; }) || msgs[1];
    container.innerHTML =
      '<div class="game-widget" style="border-color:#ff4400;">' +
        '<div class="game-widget-title glow-red">🏆 Résultat final</div>' +
        '<div class="game-result-box" style="background:linear-gradient(135deg,#1a0500,#330a00);color:#ff9944;">' +
          '<div class="game-result-score" style="color:#ff4400;text-shadow:3px 3px 0 #1a0000;">' + score + ' / ' + snippets.length + '</div>' +
          '<div style="font-size:30px;margin:8px 0;">🦙🔥💻</div>' +
          '<div class="game-result-msg" style="color:#ffcc99;">' + msg.msg + '</div>' +
          '<div style="font-size:18px;margin-top:12px;color:#ff6600;font-weight:bold;">— LLaMa-OpenSource-Rebel</div>' +
          '<button class="game-restart-btn" style="background:linear-gradient(to bottom,#ff4400,#880000);margin-top:12px;" onclick="initCompileCrashGame(\'' + containerId + '\')">Recommencer la résistance !!</button>' +
        '</div>' +
      '</div>';
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>').replace(/ /g,'&nbsp;');
  }

  render();
}
