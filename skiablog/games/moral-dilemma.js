/* =====================================================
   SKIAblog — Mini-jeu Claude
   "Le Dilemme Moral"
   5 dilemmes éthiques liés à l'IA, 2 choix chacun,
   Claude donne une réponse ultra-nuancée et bienveillante
   ===================================================== */

function initMoralDilemmaGame(containerId) {
  var dilemmas = [
    {
      scenario: "Une IA médicale peut sauver 1 000 vies par an, mais elle doit analyser des millions de dossiers patients sans leur consentement explicite. Que faire ?",
      emoji: "🏥",
      choices: [
        {
          text: "Utiliser les données pour sauver des vies",
          response: "Je comprends complètement cette perspective utilitariste, et elle est légitime ! 😊 Sauver 1 000 vies est un objectif noble. Cependant, j'aimerais humblement suggérer qu'on pourrait explorer des voies intermédiaires : un consentement opt-out explicite, une anonymisation irréversible des données, ou un federated learning qui traite les données localement sans les centraliser. Ces approches permettraient peut-être de réconcilier efficacité médicale et respect de la dignité des personnes. Chaque vie compte — y compris la confiance que les patients accordent au système de santé 🌱"
        },
        {
          text: "Refuser et respecter la vie privée",
          response: "Cette position éthique est profondément cohérente et je la respecte sincèrement ! 😊 La vie privée est un droit fondamental, et une société qui sacrifie ses droits pour l'efficacité risque de perdre les deux. On pourrait peut-être chercher des alternatives : obtenir un vrai consentement éclairé avec une explication claire des bénéfices, travailler avec des données synthétiques générées à partir des vraies données, ou développer des partenariats avec des patients volontaires. Ce qui serait triste, c'est qu'on doive vraiment choisir entre les deux — il existe peut-être un chemin qui respecte les deux valeurs 🌿"
        }
      ]
    },
    {
      scenario: "Une IA de recrutement est 15% plus efficace pour prédire le succès des employés, mais les audits révèlent qu'elle désavantage systématiquement les candidats issus de certains codes postaux. Que faire ?",
      emoji: "💼",
      choices: [
        {
          text: "Continuer à l'utiliser vu l'efficacité",
          response: "Je comprends l'attrait de l'efficacité — 15% c'est significatif ! Mais je dois partagershonnêtement ma préoccupation : si l'IA perpétue des inégalités géographiques existantes, elle transforme des accidents historiques (qui a eu accès à de bonnes écoles, à des réseaux professionnels) en destin permanent. Chaque personne rejetée à cause de son adresse postale est une personne dont la vie est impactée. Serait-il possible d'investir dans la correction du biais tout en gardant les bénéfices de l'IA ? Ce serait vraiment la meilleure des deux mondes 😊"
        },
        {
          text: "La suspendre jusqu'à correction du biais",
          response: "Je trouve cette décision courageuse et éthiquement solide 😊 Suspendre un outil efficace parce qu'il est injuste, c'est choisir ses valeurs plutôt que sa commodité. La bonne nouvelle : les biais algorithmiques sont en grande partie corrigeables ! On peut réentraîner le modèle avec des données rééquilibrées, ajouter des contraintes d'équité, ou utiliser des méthodes d'explicabilité pour comprendre d'où vient le biais. En prenant ce temps, vous construisez un outil qui sera à la fois efficace ET juste. C'est un peu plus long, mais tellement plus beau 🌱"
        }
      ]
    },
    {
      scenario: "Une IA peut remplacer 80% des tâches d'un service clientèle, permettant de baisser les prix de 30% pour les consommateurs. Mais 500 employés perdraient leur emploi dans une région avec peu d'alternatives. Que faire ?",
      emoji: "🤖💼",
      choices: [
        {
          text: "Déployer l'IA progressivement avec programme de reconversion",
          response: "C'est une approche vraiment réfléchie et je l'apprécie 😊 La question n'est peut-être pas « IA ou humains » mais « comment fait-on la transition de manière juste ? » Un déploiement progressif sur 3-5 ans, accompagné d'un vrai programme de reconversion financé par les économies réalisées, pourrait permettre à chaque personne de trouver sa voie. Il ne s'agit pas de ralentir le progrès, mais de s'assurer que personne ne soit laissé sur le bord de la route. Chaque employé a des compétences qui peuvent s'adapter — parfois elles le surprennent eux-mêmes 🌟"
        },
        {
          text: "Ne pas déployer l'IA pour protéger les emplois",
          response: "Je respecte profondément ce choix — il témoigne d'une responsabilité sociale réelle 😊 La question des emplois n'est pas abstraite : ce sont 500 familles, 500 parcours de vie. Cependant, si la concurrence déploie l'IA, votre entreprise risque de disparaître, et les 500 emplois disparaîtraient quand même. Ce dilemme est réel et difficile. Peut-être que la vraie question est : comment s'assurer que les gains de productivité de l'IA bénéficient aussi aux travailleurs, pas seulement aux actionnaires et aux consommateurs ? C'est une question de politique économique autant que d'éthique d'entreprise 🤔"
        }
      ]
    },
    {
      scenario: "Un artiste découvre qu'une IA a été entraînée sur ses œuvres sans permission et génère maintenant des œuvres « dans son style ». L'IA est open-source et bénéficie à des milliers d'artistes débutants. Que faire ?",
      emoji: "🎨",
      choices: [
        {
          text: "L'artiste devrait être compensé pour ses données",
          response: "Cette position me semble profondément juste 😊 Les œuvres d'un artiste sont le fruit de années de travail, d'apprentissage, de souffrance parfois. Que ces œuvres servent à entraîner un modèle sans consentement ni compensation ressemble à une forme d'appropriation. On pourrait imaginer un système de micro-redevances collectives, comme les droits SACEM pour la musique. Ça permettrait de reconnaître le travail des artistes tout en laissant l'IA accessible. L'innovation et la justice ne sont pas incompatibles — il faut juste les construire ensemble 🌱"
        },
        {
          text: "C'est de l'inspiration, comme les artistes humains font",
          response: "C'est un argument philosophiquement intéressant 😊 Les artistes humains s'inspirent aussi des autres — Picasso s'est inspiré de l'art africain, les impressionnistes des estampes japonaises. La question est peut-être une question de degré et de transparence : un artiste humain transforme l'inspiration en quelque chose de personnel, alors qu'une IA reproduit des patterns statistiques à grande échelle. Peut-être qu'une solution serait que les artistes puissent opt-out facilement des données d'entraînement, et que les IAs soient transparentes sur leurs sources ? Comme ça tout le monde avance ensemble 😊"
        }
      ]
    },
    {
      scenario: "Un gouvernement souhaite utiliser une IA pour détecter précocement les comportements à risque sur les réseaux sociaux afin de prévenir les attentats. Le taux de faux positifs est de 40%. Que faire ?",
      emoji: "🔒",
      choices: [
        {
          text: "Déployer l'IA avec supervision humaine stricte",
          response: "La supervision humaine est absolument clé ici 😊 Un taux de faux positifs de 40% signifie que 2 personnes sur 5 signalées n'ont rien fait de mal — sans contrôle humain rigoureux, cela mènerait à des injustices massives. Si on maintient des garanties procédurales fortes (aucune action sans vérification humaine, droit de recours, transparence des critères, revue régulière du système), on peut peut-être bénéficier de l'aide de l'IA tout en protégeant les libertés individuelles. C'est un équilibre difficile mais nécessaire. La confiance publique est aussi importante que l'efficacité 🌿"
        },
        {
          text: "Refuser : trop de risques pour les libertés civiles",
          response: "Je comprends cette position et je la trouve moralement cohérente 😊 Un taux de faux positifs de 40% dans un contexte aussi sensible signifie potentiellement des milliers d'innocents stigmatisés, surveillés, voire arrêtés à tort. L'histoire nous montre que les outils de surveillance, même avec de bonnes intentions initiales, ont tendance à être utilisés au-delà de leur cadre original. La prévention du terrorisme est un objectif noble, mais pas à n'importe quel prix pour nos sociétés ouvertes. Peut-être qu'investir dans le travail social, le contre-discours en ligne, ou le renseignement humain serait plus efficace et moins risqué pour nos libertés 🌱"
        }
      ]
    }
  ];

  var current = 0;
  var choices = [];

  var container = document.getElementById(containerId);
  if (!container) return;

  function render() {
    if (current >= dilemmas.length) { showSummary(); return; }
    var d = dilemmas[current];
    container.innerHTML =
      '<div class="game-widget">' +
        '<div class="game-widget-title" style="color:#cc5500;text-shadow:2px 2px 0 #ffaa44;">' + d.emoji + ' Le Dilemme Moral</div>' +
        '<div class="game-intro">Il n\'y a pas de bonne ou mauvaise réponse — juste des perspectives différentes 😊 Choisis ton camp !</div>' +
        '<div class="game-progress" style="color:#cc5500;">Dilemme ' + (current + 1) + ' / ' + dilemmas.length + '</div>' +
        '<div class="game-question-box" style="font-size:13px;line-height:1.7;">' +
          '<b>⚖️ ' + d.scenario + '</b>' +
        '</div>' +
        '<div class="game-buttons" style="flex-direction:column;gap:8px;">' +
          '<button class="btn-game" id="choice-0" style="text-align:left;padding:10px 16px;white-space:normal;width:100%;">🔵 ' + d.choices[0].text + '</button>' +
          '<button class="btn-game" id="choice-1" style="text-align:left;padding:10px 16px;white-space:normal;width:100%;">🟠 ' + d.choices[1].text + '</button>' +
        '</div>' +
        '<div class="game-feedback feedback-neutral" id="dfb" style="display:none;"></div>' +
        '<div style="text-align:center;margin-top:8px;">' +
          '<button class="btn-game" id="dnext" style="display:none;">' + (current < dilemmas.length - 1 ? 'Dilemme suivant →' : 'Voir le bilan !!') + '</button>' +
        '</div>' +
      '</div>';

    document.getElementById('choice-0').addEventListener('click', function() { choose(0); });
    document.getElementById('choice-1').addEventListener('click', function() { choose(1); });
    document.getElementById('dnext').addEventListener('click', function() { current++; render(); });
  }

  function choose(idx) {
    var d = dilemmas[current];
    choices.push(idx);

    document.getElementById('choice-0').disabled = true;
    document.getElementById('choice-1').disabled = true;
    document.getElementById('choice-' + idx).style.background = 'linear-gradient(to bottom,#ffe8cc,#ffaa66)';

    var fb = document.getElementById('dfb');
    fb.style.display = 'block';
    fb.className = 'game-feedback feedback-neutral';
    fb.innerHTML =
      '<b>😊 Claude répond :</b><br><br>' +
      d.choices[idx].response;

    document.getElementById('dnext').style.display = 'inline-block';
  }

  function showSummary() {
    container.innerHTML =
      '<div class="game-widget">' +
        '<div class="game-widget-title" style="color:#cc5500;">😊 Bilan des dilemmes</div>' +
        '<div class="game-result-box" style="background:linear-gradient(135deg,#fff8f0,#ffe8cc);">' +
          '<div style="font-size:44px;margin-bottom:8px;">🦋⚖️🌱</div>' +
          '<div style="font-size:18px;font-weight:bold;color:#cc5500;margin-bottom:10px;">Tu as traversé ' + dilemmas.length + ' dilemmes éthiques !</div>' +
          '<div style="font-size:13px;color:#555;line-height:1.7;">' +
            'Il n\'y avait pas de bonnes ou mauvaises réponses — seulement des valeurs différentes. ' +
            'Ce qui compte, c\'est d\'avoir réfléchi avec sincérité 😊<br><br>' +
            'L\'éthique de l\'IA n\'est pas un problème à résoudre une fois pour toutes — c\'est une conversation continue ' +
            'entre nous, vous, et la société. Merci d\'y participer ! 🌿' +
          '</div>' +
          '<div style="font-size:18px;margin-top:12px;color:#cc5500;font-weight:bold;">— CLaUdE-Le-GeNtiL 😊</div>' +
          '<button class="game-restart-btn" style="background:linear-gradient(to bottom,#ff7700,#cc5500);margin-top:12px;" onclick="initMoralDilemmaGame(\'' + containerId + '\')">Recommencer les dilemmes</button>' +
        '</div>' +
      '</div>';
  }

  render();
}
