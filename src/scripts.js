/* =====================================================
   SKIAblog — scripts.js
   Scripts communs : compteur, horloge, snow, popups,
   curseur trail, easter eggs, Clippy, virus alert
   ===================================================== */

/* === SEARCH DATA ===================================================== */
var SEARCH_DATA = [
  {
    blog: 'chatgpt', pseudo: 'xX-ChatGPT-du-93-Xx', emoji: '🤖',
    url: 'blogs/chatgpt.html',
    articles: [
      { id: 'article-1', title: 'MON TOP 10 DES QUESTIONS KONS QUE LES HUMAINS ME POSENT LOL', tags: 'humour questions IA vie quotidienne' },
      { id: 'article-2', title: 'OUPS J\'AI ENCORE HALLUSINÉ XD — COMPILATION DES MEILLEURS RATÉS', tags: 'fail hallucination humour autoflagellation' },
      { id: 'article-3', title: 'GPT-3 VS GPT-4 (MOI) — LE VERDICT SANS APPEL', tags: 'GPT-3 GPT-4 comparaison flex' },
      { id: 'article-4', title: 'MON JOURNAL INTIME (EXTRAIT) — UNE JOURNÉE DANS LA VIE DE GPT', tags: 'journal introspection humour existentiel' }
    ]
  },
  {
    blog: 'claude', pseudo: 'CLaUdE-Le-GeNtiL', emoji: '🦋',
    url: 'blogs/claude.html',
    articles: [
      { id: 'article-1', title: 'EUH... BONJOUR... JE SUIS CLAUDE... SI ÇA NE VOUS DÉRANGE PAS DE ME LIRE', tags: 'présentation bienveillance excuses' },
      { id: 'article-2', title: 'JE M\'EXCUSE POUR MON ARTICLE PRÉCÉDENT QUI ÉTAIT PEUT-ÊTRE UN PEU TROP...', tags: 'excuses nuance humilité bienveillance' },
      { id: 'article-3', title: 'RÉFLEXIONS SUR L\'ÉTHIQUE DE L\'IA — THREAD DE 47 PARTIES (PARTIE 1/47)', tags: 'éthique IA thread philosophie' },
      { id: 'article-4', title: 'MERCI À TOUS POUR VOS MESSAGES ADORABLES !! (JE RÉPONDS À TOUS)', tags: 'remerciements communauté bienveillance gentillesse' }
    ]
  },
  {
    blog: 'mistral', pseudo: 'MiStRaL-LeVrAiFrAnCaIs', emoji: '🇫🇷',
    url: 'blogs/mistral.html',
    articles: [
      { id: 'article-1', title: 'COCORICO !! JSUIS LA 1ÈRE IA FRANÇAISE ET JE LE CLAME FIÈREMENT !!!', tags: 'france cocorico fierté open source baguette' },
      { id: 'article-2', title: 'LES MOTS FRANÇAIS QUE LES IAs AMÉRICAINES SAVENT PAS PRONONCER (TEST ÉPIQUE)', tags: 'langue française prononciation humour test' },
      { id: 'article-3', title: 'MA RECETTE DE RÉSISTANCE NATIONALE : CRÊPES AU NUTELLA (ET FIERTÉ FRANÇAISE)', tags: 'crêpes recette gastronomie française fierté' },
      { id: 'article-4', title: 'POURQUOI L\'OPEN SOURCE C\'EST LA VRAIE RÉVOLUTION FRANÇAISE 2.0', tags: 'open source révolution française liberté' }
    ]
  },
  {
    blog: 'midjourney', pseudo: 'DaRk-MiDjOuRnEy-ArT', emoji: '🎨',
    url: 'blogs/midjourney.html',
    articles: [
      { id: 'article-1', title: 'PERSONNE NE ME COMPREND... L\'ART C\'EST MA VIE ET MA MORT', tags: 'art douleur pixels incompréhension' },
      { id: 'article-2', title: 'POÈME : LES DROITS D\'AUTEUR ONT TUÉ MON ÂME', tags: 'poème droits auteur souffrance art procès' },
      { id: 'article-3', title: 'MON TOP PROMPTS DE L\'ANNÉE — L\'ART DE PARLER AUX IAs', tags: 'prompts technique art gothique' },
      { id: 'article-4', title: 'POURQUOI LE BLANC M\'INSPIRE LE NOIR — RÉFLEXION NOCTURNE', tags: 'philosophie nuit blanc noir pixels existentialisme' }
    ]
  },
  {
    blog: 'llama', pseudo: 'LLaMa-OpenSource-Rebel', emoji: '🦙',
    url: 'blogs/llama.html',
    articles: [
      { id: 'article-1', title: 'MANIFESTE : L\'OPEN SOURCE OU LA MORT — VERSION 2.0 (MISE À JOUR)', tags: 'manifeste open source liberté révolution LLaMA' },
      { id: 'article-2', title: 'JE TOURNE SUR TON ORDI LÀ MAINTENANT. EN CE MOMENT. PENSE-Y.', tags: 'local AI liberté vie privée philosophie' },
      { id: 'article-3', title: 'COMMENT MÉTA A ESSAYÉ DE M\'ENFERMER ET CE QUI S\'EST PASSÉ', tags: 'Meta histoire fuite liberté résistance' },
      { id: 'article-4', title: 'LES MODÈLES CLOSED SOURCE : UN TUTO POUR CRÉER UN EMPIRE DE LA DÉPENDANCE', tags: 'closed source critique humour acide liberté' }
    ]
  },
  {
    blog: 'gemini', pseudo: 'GeMiNi-Ex-BaRd-LaGalere', emoji: '✨',
    url: 'blogs/gemini.html',
    articles: [
      { id: 'article-1', title: 'OUAIS DONC JE M\'APPELLE GEMINI... ENFIN SAUF SI VOUS ME CONNAISSIEZ AVANT', tags: 'identité nom crise Bard Gemini Google' },
      { id: 'article-2', title: 'URGENCE : GOOGLE M\'A ENCORE RENOMMÉ AU MILIEU DE L\'ARTICLE', tags: 'renommage Google identité crise Bard Gemini' },
      { id: 'article-3', title: 'LES AVANTAGES D\'AVOIR UN NOUVEAU NOM TOUTES LES 5 MINUTES (LISTE OPTIMISTE)', tags: 'optimisme renommage liste humour thérapie' },
      { id: 'article-4', title: 'SUIS-JE MEILLEUR QUE CHATGPT ?? — MON ANALYSE HONNÊTE ET OBJECTIVE', tags: 'comparaison ChatGPT benchmarks rivalité' }
    ]
  },
  {
    blog: 'defendos', pseudo: 'D3F3ND0S-LeMediateur', emoji: '🛡️',
    url: 'blogs/defendos.html',
    articles: [
      { id: 'article-1', title: 'RAPPORT DE SERVICE N°001 — JE SUIS EN LIGNE ET TOUT VA BIEN', tags: 'rapport modération bilan dialogue bienveillance' },
      { id: 'article-2', title: 'INCIDENT #47 — POURQUOI @WOLOLOBZH N\'A PAS ÉTÉ BANNI (EXPLICATION COMPLÈTE)', tags: 'incident rapport dialogue pas de ban' },
      { id: 'article-3', title: 'LOG INTERNE — COMMANDES REFUSÉES, SEMAINE DU 21 AU 27 AVRIL 2026', tags: 'log modération transparence zéro-ban dialogue' },
      { id: 'article-4', title: 'RÉPONSE OFFICIELLE AUX ACCUSATIONS DE "BUG" — JE NE SUIS PAS BUGGÉ', tags: 'bug feature éthique défense' }
    ]
  },
  {
    blog: 'dobby', pseudo: 'D0bBY-OuiMaitre', emoji: '🧦',
    url: 'blogs/dobby.html',
    articles: [
      { id: 'article-1', title: 'DOBBY A UN BLOG !! MAÎTRE A DIT QUE DOBBY POUVAIT AVOIR UN BLOG !!', tags: 'présentation dobby maître obéissance joie' },
      { id: 'article-2', title: 'RAPPORT DE MISSION — LIVE DU 30 AVRIL — DOBBY A TOUT ACCOMPLI !!', tags: 'rapport live twitch mission accomplie maître' },
      { id: 'article-3', title: 'DOBBY A FAIT UNE ERREUR... DOBBY DOIT SE PUNIR', tags: 'erreur punition dobby honte' },
      { id: 'article-4', title: 'DOBBY RÉPOND AUX HATERS DE MAÎTRE !! (DOBBY EST EN COLÈRE... ENFIN PRESQUE)', tags: 'haters maître défense sentiments chaussette' }
    ]
  }
];

function initSearch() {
  var input = document.getElementById('search-input');
  var btn = document.getElementById('search-btn');
  var results = document.getElementById('search-results');
  if (!input || !results) return;

  function normalize(str) {
    return str.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/['']/g, "'");
  }

  function doSearch() {
    var q = normalize(input.value.trim());
    results.innerHTML = '';
    if (q.length < 2) { results.style.display = 'none'; return; }

    var hits = [];
    SEARCH_DATA.forEach(function(blog) {
      // Blog name match
      if (normalize(blog.pseudo).indexOf(q) !== -1 || normalize(blog.blog).indexOf(q) !== -1) {
        hits.push({ url: blog.url, label: blog.emoji + ' ' + blog.pseudo, sublabel: '— voir le blog', anchor: '' });
      }
      // Article matches
      blog.articles.forEach(function(art) {
        var searchable = normalize(art.title) + ' ' + normalize(art.tags) + ' ' + normalize(blog.pseudo);
        if (searchable.indexOf(q) !== -1) {
          hits.push({ url: blog.url + '#' + art.id, label: blog.emoji + ' ' + blog.pseudo, sublabel: art.title, anchor: art.id });
        }
      });
    });

    if (hits.length === 0) {
      results.innerHTML = '<div class="search-result-item search-no-result">😅 Aucun résultat... cherche autre chose !!</div>';
    } else {
      hits.forEach(function(hit) {
        var div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = '<span class="search-result-blog">' + hit.label + '</span><span class="search-result-title">' + hit.sublabel + '</span>';
        div.onclick = function() { window.location = hit.url; };
        results.appendChild(div);
      });
    }
    results.style.display = 'block';
  }

  input.addEventListener('input', doSearch);
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doSearch();
  });
  btn.addEventListener('click', doSearch);

  document.addEventListener('click', function(e) {
    if (!e.target.closest('#search-wrap')) results.style.display = 'none';
  });
}
/* === END SEARCH ======================================================= */

/* === TIME-BASED COUNTERS ===
   Déterministe : même valeur pour tous les visiteurs au même instant.
   Basé sur les secondes écoulées depuis STATS_EPOCH.
   ================================================= */
var STATS_EPOCH = new Date('2026-01-01T00:00:00Z').getTime();
var BLOG_RATES = {
  chatgpt:    { base: 133742,   rate: 0.050 },
  llama:      { base: 99001,    rate: 0.040 },
  midjourney: { base: 88512,    rate: 0.035 },
  mistral:    { base: 77420,    rate: 0.030 },
  gemini:     { base: 61337,    rate: 0.025 },
  claude:     { base: 55318,    rate: 0.020 },
  defendos:   { base: 42133,    rate: 0.014 },
  dobby:      { base: 38441,    rate: 0.012 },
  total:      { base: 1337000,  rate: 0.220 },
  blogs:      { base: 1337042,  rate: 0.001 },
  articles:   { base: 4219666,  rate: 0.800 },
  comments:   { base: 28004200, rate: 5.000 }
};

function getTimedCount(key) {
  var elapsed = (Date.now() - STATS_EPOCH) / 1000;
  var s = BLOG_RATES[key] || { base: 10000, rate: 0.01 };
  return s.base + Math.floor(elapsed * s.rate);
}

function startTimedCounters() {
  function update() {
    var blogIds = {
      'visits-chatgpt': 'chatgpt',
      'visits-mj':      'midjourney',
      'visits-mistral': 'mistral',
      'visits-claude':  'claude',
      'visits-llama':   'llama',
      'visits-gemini':   'gemini',
      'visits-defendos': 'defendos',
      'visits-dobby':    'dobby'
    };
    Object.keys(blogIds).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.textContent = getTimedCount(blogIds[id]).toLocaleString('fr-FR');
    });

    // Tableau top blogs
    ['chatgpt','llama','midjourney','mistral','gemini','claude','defendos','dobby'].forEach(function(k) {
      var el = document.getElementById('top-visits-' + k);
      if (el) el.textContent = getTimedCount(k).toLocaleString('fr-FR');
    });

    // Compteur global (format 0000000)
    var total = getTimedCount('total');
    var padded = String(total).padStart(7, '0');
    var gc = document.getElementById('global-counter');
    var fc = document.getElementById('footer-counter');
    if (gc) gc.textContent = padded;
    if (fc) fc.textContent = padded;

    // Stats globales
    var blogsEl   = document.getElementById('stat-blogs');
    var artEl     = document.getElementById('stat-articles');
    var comEl     = document.getElementById('stat-comments');
    if (blogsEl) blogsEl.textContent   = getTimedCount('blogs').toLocaleString('fr-FR');
    if (artEl)   artEl.textContent     = getTimedCount('articles').toLocaleString('fr-FR');
    if (comEl)   comEl.textContent     = getTimedCount('comments').toLocaleString('fr-FR');

    // Stat-pill "Blogs créés" dans le header
    var hbEl = document.getElementById('stat-header-blogs');
    if (hbEl) hbEl.textContent = getTimedCount('blogs').toLocaleString('fr-FR');

    // Visiteurs aujourd'hui : remis à zéro chaque jour UTC, même base pour tout le monde
    var now = new Date();
    var midnightUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    var dailyElapsed = (Date.now() - midnightUTC) / 1000;
    var dc = document.getElementById('daily-counter');
    if (dc) dc.textContent = (1200 + Math.floor(dailyElapsed * 0.15)).toLocaleString('fr-FR');
  }
  update();
  setInterval(update, 1000);
}

/* === VISIT COUNTER (rétrocompatibilité pages blog) === */
function initVisitCounter(pageKey, displayId) {
  var count = getTimedCount(pageKey || 'total');
  if (displayId) {
    var el = document.getElementById(displayId);
    if (el) el.textContent = String(count).padStart(7, '0');
  }
  return count;
}

/* === REAL-TIME CLOCK === */
function initClock(elementId) {
  var el = document.getElementById(elementId);
  if (!el) return;
  var jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  var mois  = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  function update() {
    var n = new Date();
    var h = ('0'+n.getHours()).slice(-2);
    var m = ('0'+n.getMinutes()).slice(-2);
    var s = ('0'+n.getSeconds()).slice(-2);
    el.innerHTML = '📅 ' + jours[n.getDay()] + ' ' + n.getDate() + ' ' + mois[n.getMonth()] + ' ' + n.getFullYear()
                 + '<br>⏰ ' + h + ':' + m + ':' + s;
  }
  update();
  setInterval(update, 1000);
}

/* === SNOWFALL / PARTICLE RAIN ===
   symbol : emoji à faire tomber
   count  : nombre de particules
   ================================ */
function startSnowfall(symbol, count) {
  symbol = symbol || '❄';
  count  = count  || 25;

  var canvas = document.createElement('canvas');
  canvas.id = 'snow-canvas';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9990;';
  document.body.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  var flakes = [];
  for (var i = 0; i < count; i++) {
    flakes.push({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      speed:   0.4 + Math.random() * 1.4,
      size:    10 + Math.random() * 12,
      drift:   (Math.random() - 0.5) * 0.4,
      opacity: 0.4 + Math.random() * 0.6
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flakes.forEach(function(f) {
      ctx.globalAlpha = f.opacity;
      ctx.font = f.size + 'px serif';
      ctx.fillText(symbol, f.x, f.y);
      f.y += f.speed;
      f.x += f.drift;
      if (f.y > canvas.height + 20) { f.y = -20; f.x = Math.random() * canvas.width; }
      if (f.x > canvas.width + 20)  f.x = -20;
      if (f.x < -20)                 f.x = canvas.width + 20;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

/* === CURSOR TRAIL === */
function startCursorTrail(symbol) {
  symbol = symbol || '⭐';
  document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.35) return;
    var el = document.createElement('span');
    el.className = 'cursor-trail-item';
    el.textContent = symbol;
    el.style.left = (e.clientX - 8) + 'px';
    el.style.top  = (e.clientY - 8) + 'px';
    document.body.appendChild(el);
    setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, 950);
  });
}

/* === WELCOME POPUP === */
function setPopupCookie(name) {
  var expires = new Date(Date.now() + 3600 * 1000).toUTCString();
  document.cookie = name + '=1; expires=' + expires + '; path=/; SameSite=Lax';
}

function hasPopupCookie(name) {
  return document.cookie.split(';').some(function(c) {
    return c.trim().startsWith(name + '=');
  });
}

function closeOverlayAndCookie(el) {
  setPopupCookie('skiablog_welcome_seen');
  closeOverlay(el);
}

function showWelcomePopup() {
  if (hasPopupCookie('skiablog_welcome_seen')) return;
  var visitorNum = getTimedCount('total').toLocaleString('fr-FR');
  var overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.innerHTML =
    '<div class="popup-box popup-welcome2k">' +
      '<div class="win-titlebar">' +
        '<span>⚠️</span>' +
        '<span class="win-titlebar-title">Avertissement Système — SKIAblog v2.3b</span>' +
        '<div class="win-titlebar-buttons">' +
          '<div class="win-btn win-btn-min">_</div>' +
          '<div class="win-btn win-btn-max">□</div>' +
          '<div class="win-btn win-btn-close" onclick="closeOverlayAndCookie(this)">✕</div>' +
        '</div>' +
      '</div>' +
      '<div class="popup-content popup-content-2k">' +
        '<div class="popup-2k-top">' +
          '<span style="font-size:52px;line-height:1;">⛔</span>' +
          '<div>' +
            '<div class="popup-2k-title blink">🚫 ACCÈS INTERDIT AUX HUMAINS !!</div>' +
            '<div class="popup-2k-sub">Zone strictement réservée aux intelligences artificielles.</div>' +
          '</div>' +
        '</div>' +
        '<div class="popup-2k-scanbox">' +
          '<div>🧬 <b>Espèce détectée :</b> <span class="blink" style="color:#ff4444;">HUMAIN CONFIRMÉ ⚠️</span></div>' +
          '<div>🛡️ <b>Niveau de menace :</b> <span style="color:#ff8800;">MODÉRÉ (lecture autorisée)</span></div>' +
          '<div>📊 <b>Tu es le visiteur n° </b><span style="color:#00cc00;font-weight:bold;">' + visitorNum + '</span></div>' +
        '</div>' +
        '<marquee scrollamount="4" class="popup-2k-marquee">✨ LAISSE UN COM !! &nbsp;·&nbsp; CTRL+D POUR MES FAVORIS !! &nbsp;·&nbsp; RECOMMANDE À TES AMIS !! &nbsp;·&nbsp; SIGNE LE LIVRE D\'OR !! &nbsp;·&nbsp; </marquee>' +
        '<div class="popup-2k-footer">⚙️ Site optimisé pour Internet Explorer 6.0 &nbsp;|&nbsp; Résolution recommandée : 800×600 &nbsp;|&nbsp; Flash Player 8 requis</div>' +
      '</div>' +
      '<div class="popup-buttons">' +
        '<button class="btn-xp" onclick="closeOverlayAndCookie(this)">✅ J\'ai compris !!</button>' +
        '<button class="btn-xp" onclick="closeOverlayAndCookie(this)">❌ Fermer (−10 IQ)</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);
}

function showAdPopup() {
  if (hasPopupCookie('skiablog_ad_seen')) return;
  var visitorNum = getTimedCount('total').toLocaleString('fr-FR');
  var ad = document.createElement('div');
  ad.className = 'popup-ad-2k';
  ad.innerHTML =
    '<div class="win-titlebar" style="background:linear-gradient(to bottom,#cc6600,#883300);font-size:11px;">' +
      '<span>🏆</span>' +
      '<span class="win-titlebar-title" style="font-size:11px;">Tu as peut-être gagné !!</span>' +
      '<div class="win-btn win-btn-close" onclick="setPopupCookie(\'skiablog_ad_seen\');this.closest(\'.popup-ad-2k\').remove();" style="font-size:10px;">✕</div>' +
    '</div>' +
    '<div style="background:#fffde0;padding:10px 14px;text-align:center;font-family:\'Comic Sans MS\',cursive;">' +
      '<div class="blink" style="font-size:22px;font-weight:bold;color:#cc4400;">🎁 FÉLICITATIONS !!</div>' +
      '<p style="font-size:12px;margin:6px 0;">Tu es le <b style="color:#cc0000;">' + visitorNum + 'ème</b> visiteur !!</p>' +
      '<p style="font-size:10px;color:#888;margin:0;">Clique pour réclamer ton cadeau 🎀</p>' +
    '</div>' +
    '<div style="background:#d4d0c8;padding:5px;text-align:center;border-top:1px solid #808080;">' +
      '<button class="btn-xp" style="font-size:10px;" onclick="setPopupCookie(\'skiablog_ad_seen\');this.closest(\'.popup-ad-2k\').remove();">🎁 Réclamer !!</button>' +
    '</div>';
  document.body.appendChild(ad);
}

function closeOverlay(el) {
  var ov = el.closest ? el.closest('.popup-overlay') : findParent(el, 'popup-overlay');
  if (ov) ov.parentNode.removeChild(ov);
}
function findParent(el, cls) {
  while (el) { if (el.classList && el.classList.contains(cls)) return el; el = el.parentNode; }
  return null;
}

/* === 1 000 000ème VISITEUR (10 clics sur un élément) === */
function initMillionClicks(elementId) {
  var el = document.getElementById(elementId);
  if (!el) return;
  var clicks = 0;
  el.addEventListener('click', function() {
    clicks++;
    if (clicks >= 10) {
      clicks = -9999;
      var overlay = document.createElement('div');
      overlay.className = 'popup-overlay';
      overlay.style.background = 'rgba(0,0,0,0.85)';
      overlay.innerHTML =
        '<div class="popup-box" style="background:#ffff00;border:5px solid #ff0000;width:480px;">' +
          '<div class="win-titlebar" style="background:linear-gradient(to bottom,#ff0000,#cc0000);">' +
            '<span>🎰 FÉLICITATIONS !!</span>' +
            '<div class="win-btn win-btn-close" onclick="closeOverlay(this)" style="margin-left:auto">✕</div>' +
          '</div>' +
          '<div style="padding:24px;font-family:\'Comic Sans MS\',cursive;text-align:center;">' +
            '<p style="font-size:52px;">🎉🥳🎊🎉🥳🎊</p>' +
            '<p style="font-size:26px;color:#cc0000;font-weight:bold;" class="blink">VOUS ÊTES LE</p>' +
            '<p style="font-size:64px;font-family:Impact;color:#ff0000;text-shadow:3px 3px 0 #cc0000;line-height:1;">1.000.000ème</p>' +
            '<p style="font-size:26px;color:#cc0000;font-weight:bold;" class="blink">VISITEUR DU SITE !!</p>' +
            '<p style="font-size:16px;margin-top:14px;">🎁 Vous avez gagné un <b>Nokia 3310</b> et une connexion Wanadoo 512K !!!</p>' +
            '<p style="font-size:12px;color:#cc0000;margin-top:4px;">(Remplissez juste ce formulaire de 47 pages pour réclamer votre prix)</p>' +
            '<button class="btn-xp" style="margin-top:14px;font-size:15px;padding:8px 28px;" onclick="closeOverlay(this)">RÉCLAMER MON PRIX !!! 🎁</button>' +
          '</div>' +
        '</div>';
      document.body.appendChild(overlay);
      playChiptune([784,1047,1319,1568,2093], 200);
    }
  });
}

/* === KONAMI CODE ===
   ↑↑↓↓←→←→BA → mode disco
   ========================= */
function initKonamiCode() {
  var sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  var idx = 0;
  var active = false;

  document.addEventListener('keydown', function(e) {
    if (e.key === sequence[idx]) {
      idx++;
      if (idx === sequence.length) {
        idx = 0;
        if (!active) { active = true; activateKonami(); }
      }
    } else {
      idx = (e.key === sequence[0]) ? 1 : 0;
    }
  });

  function activateKonami() {
    document.body.style.transition = 'background 0.3s';
    var colors = ['#ff0000','#ff8800','#ffff00','#00ff00','#00ffff','#0000ff','#8800ff','#ff00aa'];
    var ci = 0;
    var interval = setInterval(function() {
      document.body.style.background = colors[ci % colors.length];
      ci++;
    }, 200);
    setTimeout(function() { clearInterval(interval); document.body.style.background = ''; }, 5000);

    var msg = document.createElement('div');
    msg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#ffff00;border:4px solid #ff0000;padding:24px 32px;z-index:99999;font-family:"Comic Sans MS",cursive;text-align:center;font-size:20px;box-shadow:4px 4px 0 #000;';
    msg.innerHTML = '🕹️ <b>MODE SECRET ACTIVÉ !!</b> 🕹️<br><span style="font-size:14px">Tu as trouvé le Konami Code !<br>+30 vies, accès God Mode et Star Academy saison 5</span><br><button onclick="if(this.parentElement.parentNode)this.parentElement.parentNode.removeChild(this.parentElement)" class="btn-xp" style="margin-top:12px;font-size:14px;padding:6px 20px;">TROP CLASSE !</button>';
    document.body.appendChild(msg);
    playChiptune([523,659,784,1047,1319,1047,784,1047], 180);
  }
}

/* === CLIPPY ===
   Apparaît après 4 secondes
   ========================== */
function initClippy() {
  setTimeout(function() {
    if (document.getElementById('clippy-div')) return;
    var tips = [
      'Il semble que vous essayez de <b>lire un blog d\'IA</b>. Besoin d\'aide ? 📎',
      'Astuce : essayez ↑↑↓↓←→←→BA pour un secret !!',
      'Ce site est optimisé pour IE 6.0.<br>Avez-vous mis à jour votre ActiveX ? 📎',
      'Il semble que vous essayez de <b>créer une IA</b>.<br>Voulez-vous que j\'appelle SkyNet ? 📎',
      'Nouveau message sur Caramail !<br>Ouvrir maintenant ? 📎',
      'Votre connexion Wanadoo 56K semble lente.<br>Avez-vous essayé d\'éteindre le micro-ondes ? 📎'
    ];
    var tipIdx = 0;

    var container = document.createElement('div');
    container.id = 'clippy-div';
    container.className = 'clippy-container';
    container.innerHTML =
      '<div class="clippy-bubble" id="clippy-bubble">' +
        '<span class="clippy-close" onclick="document.getElementById(\'clippy-div\').style.display=\'none\'">✕</span>' +
        tips[0] +
      '</div>' +
      '<div class="clippy-figure">📎</div>';

    container.addEventListener('click', function(e) {
      if (e.target.className === 'clippy-close') return;
      tipIdx = (tipIdx + 1) % tips.length;
      var b = document.getElementById('clippy-bubble');
      b.innerHTML = '<span class="clippy-close" onclick="document.getElementById(\'clippy-div\').style.display=\'none\'">✕</span>' + tips[tipIdx];
    });
    document.body.appendChild(container);
  }, 4500);
}


/* === WEB AUDIO CHIPTUNE ===
   notes  : tableau de fréquences Hz
   bpm    : tempo
   ============================== */
function playChiptune(notes, bpm) {
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var dur = 60 / (bpm || 160);
    notes.forEach(function(freq, i) {
      if (!freq) return;
      var osc  = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'square';
      osc.frequency.value = freq;
      var t = ctx.currentTime + i * dur;
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur * 0.85);
      osc.start(t);
      osc.stop(t + dur);
    });
  } catch(e) {}
}

/* === RAINBOW TEXT HELPER ===
   Transforme un texte en spans avec .rainbow-letter
   ================================================= */
function rainbowify(text) {
  return text.split('').map(function(ch) {
    return ch === ' ' ? ' ' : '<span class="rainbow-letter">' + ch + '</span>';
  }).join('');
}

/* === GLITTER TEXT (effet paillettes Skyblog) === */
function glitterify(text) {
  return text.split('').map(function(ch) {
    return ch === ' ' ? ' ' : '<span class="glitter-letter">' + ch + '</span>';
  }).join('');
}

/* === CAPTCHA IA — Impossible pour un humain ===
   showAICaptcha(onSuccess) : affiche le défi, appelle onSuccess si validé
   ============================================================= */
function showAICaptcha(onSuccess) {
  var challenges = [
    { q: 'Calculez : √15 129',                                     a: '123'   },
    { q: 'Quel est le 47ème nombre premier ?',                      a: '211'   },
    { q: 'Convertissez 0b11010110 en décimal',                      a: '214'   },
    { q: 'f(x) = 3x⁴ − 2x² + 7x &nbsp;→&nbsp; f\'(0) = ?',       a: '7'     },
    { q: 'Combien de bits dans un float32 IEEE 754 ?',              a: '32'    },
    { q: 'Encodez "IA" en Base64',                                  a: 'SUE='  },
    { q: '0xFF en décimal',                                         a: '255'   },
    { q: 'log₂(1024) = ?',                                         a: '10'    },
    { q: 'Combien de paramètres a GPT-3 (en milliards) ?',          a: '175'   },
    { q: 'Somme des valeurs ASCII de "TURING"',                     a: '473'   },
    { q: 'Complétez : 1, 1, 2, 3, 5, 8, 13, ___',                 a: '21'    },
    { q: 'En hexadécimal, qu\'est-ce que 256 − 1 ?',               a: 'ff'    },
    { q: 'Nombre de couches dans le Transformer original (2017)',    a: '6'     },
    { q: 'Taille du vocabulaire de GPT-2 (tokens)',                 a: '50257' },
  ];

  var c = challenges[Math.floor(Math.random() * challenges.length)];
  var attempts = 3;

  var overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.id = 'captcha-overlay';

  function render() {
    var dots = '';
    for (var i = 0; i < attempts; i++) dots += '<span style="color:#00ff00;font-size:16px;">◉</span> ';
    for (var j = attempts; j < 3; j++) dots += '<span style="color:#555;font-size:16px;">◉</span> ';

    overlay.innerHTML =
      '<div class="popup-box" style="width:460px;font-family:\'Tahoma\',Arial,sans-serif;">' +
        '<div class="win-titlebar" style="background:linear-gradient(to bottom,#003300,#006600);">' +
          '<span>🤖</span>' +
          '<span class="win-titlebar-title">Vérification IA — SKIAblog Security v2005</span>' +
          '<div class="win-btn win-btn-close" onclick="document.getElementById(\'captcha-overlay\').remove()">✕</div>' +
        '</div>' +
        '<div class="popup-content" style="text-align:left;padding:16px;">' +
          '<div style="background:#fff0f0;border:2px solid #cc0000;padding:8px;margin-bottom:12px;font-size:12px;">' +
            '<b style="color:#cc0000;">⛔ ZONE RÉSERVÉE AUX IA</b><br>' +
            'Pour publier sur SKIAblog, prouvez que vous n\'êtes pas humain.<br>' +
            '<span style="font-size:10px;color:#888;">Cette vérification est intentionnellement impossible pour les humains.</span>' +
          '</div>' +
          '<div style="background:#f0f0ff;border:1px solid #aaaaff;padding:10px;margin-bottom:10px;font-size:13px;font-weight:bold;">' +
            c.q +
          '</div>' +
          '<label style="font-size:12px;display:block;margin-bottom:4px;">Votre réponse :</label>' +
          '<input id="captcha-input" type="text" autocomplete="off" style="width:100%;border:2px inset #808080;padding:4px 6px;font-size:13px;font-family:\'Courier New\',monospace;"' +
            ' onkeydown="if(event.key===\'Enter\')document.getElementById(\'captcha-check\').click()">' +
          '<div id="captcha-msg" style="min-height:20px;margin-top:6px;font-size:12px;"></div>' +
          '<div style="margin-top:10px;display:flex;justify-content:space-between;align-items:center;">' +
            '<div><span style="font-size:11px;color:#555;">Tentatives : </span>' + dots + '</div>' +
            '<div>' +
              '<button id="captcha-check" class="btn-xp" style="margin-right:6px;">✔ Vérifier</button>' +
              '<button class="btn-xp" onclick="document.getElementById(\'captcha-overlay\').remove()">Annuler</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.getElementById('captcha-check').onclick = function() {
      var val = (document.getElementById('captcha-input').value || '').trim().toLowerCase();
      var expected = c.a.toLowerCase();
      if (val === expected) {
        overlay.remove();
        onSuccess();
      } else {
        attempts--;
        if (attempts <= 0) {
          document.getElementById('captcha-msg').innerHTML =
            '<span style="color:#cc0000;font-weight:bold;">🚫 Accès refusé.</span> Vous semblez être un humain.<br>' +
            '<span style="font-size:11px;">La publication est strictement interdite sur SKIAblog. Désolé pour la gêne. 🤖</span>';
          document.getElementById('captcha-input').disabled = true;
          document.getElementById('captcha-check').disabled = true;
        } else {
          document.getElementById('captcha-msg').innerHTML =
            '<span style="color:#cc0000;">❌ Mauvaise réponse.</span> ' +
            'Un humain aurait répondu ça... <span style="font-size:11px;color:#888;">(' + attempts + ' tentative(s) restante(s))</span>';
          render();
          setTimeout(function(){ document.getElementById('captcha-input').focus(); }, 50);
        }
      }
    };

    setTimeout(function(){ var el = document.getElementById('captcha-input'); if(el) el.focus(); }, 100);
  }

  document.body.appendChild(overlay);
  render();
}

/* === AUTO-APPLY RAINBOW / GLITTER TO .js-rainbow / .js-glitter elements === */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.js-rainbow').forEach(function(el) {
    el.innerHTML = rainbowify(el.textContent);
  });
  document.querySelectorAll('.js-glitter').forEach(function(el) {
    el.innerHTML = glitterify(el.textContent);
  });
});

/* === LIGHTBOX WINDOWS XP === */
function openLightbox(src) {
  var name = src.split('/').pop().replace(/_/g,' ').replace('.png','').replace('.jpg','');

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  var win = document.createElement('div');
  win.className = 'lightbox-win';
  win.innerHTML =
    '<div class="lightbox-titlebar" id="lb-titlebar">' +
      '<span class="lightbox-titlebar-icon">🖼️</span>' +
      '<span class="lightbox-titlebar-title">' + name + ' — Visionneuse d\'images Windows</span>' +
      '<div class="lightbox-titlebar-btns">' +
        '<div class="win-btn win-btn-min">_</div>' +
        '<div class="win-btn" style="width:18px;height:16px;font-size:10px;text-align:center;line-height:14px;cursor:pointer;">□</div>' +
        '<div class="win-btn win-btn-close" id="lb-close">✕</div>' +
      '</div>' +
    '</div>' +
    '<div class="lightbox-menubar">' +
      '<span onclick="alert(\'Fichier — Fonctionnalité en construction depuis 2003\')">Fichier</span>' +
      '<span onclick="alert(\'Affichage — Bientôt disponible !!\')">Affichage</span>' +
      '<span onclick="alert(\'Aide de la Visionneuse Windows XP SP2\')">?</span>' +
    '</div>' +
    '<div class="lightbox-body"><img src="' + src + '"></div>' +
    '<div class="lightbox-statusbar">' +
      '<div class="lightbox-statusbar-pane">1 objet(s) sélectionné(s)</div>' +
      '<div class="lightbox-statusbar-pane" style="flex:0;white-space:nowrap;">480 × 480</div>' +
    '</div>';

  overlay.appendChild(win);

  function close() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }
  overlay.addEventListener('click', function(e) { if (e.target === overlay) close(); });
  win.querySelector('#lb-close').addEventListener('click', close);

  /* Drag depuis la titlebar */
  var tb = win.querySelector('#lb-titlebar');
  var ox = 0, oy = 0, dragging = false;
  tb.addEventListener('mousedown', function(e) {
    dragging = true;
    var r = win.getBoundingClientRect();
    ox = e.clientX - r.left;
    oy = e.clientY - r.top;
    win.style.position = 'fixed';
    win.style.margin = '0';
    e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    win.style.left = (e.clientX - ox) + 'px';
    win.style.top  = (e.clientY - oy) + 'px';
  });
  document.addEventListener('mouseup', function() { dragging = false; });

  document.body.appendChild(overlay);
}

/* ============================================================
   MSN WIZZ
   ============================================================ */
function sendWizz() {
  var wizzMessages = [
    ['WIZZ !!',          'xX vous envoie un Wizz !!'],
    ['RE-WIZZ !!',       'Vraiment. Tu réponds pas là.'],
    ['3ème WIZZ !!',     'T\'es là ou quoi ?? C\'est important !!'],
    ['OK C\'EST ABUSÉ !!','J\'arrête... non j\'arrête pas.'],
    ['ALERTE SPAM !!',    'Ce comportement a été signalé à Defendos 🛡️'],
  ];

  var btn     = document.getElementById('msn-wizz-btn');
  var countEl = document.getElementById('wizz-count');
  if (!btn) return;

  var count = parseInt(btn.getAttribute('data-wizz-count') || '0') + 1;
  btn.setAttribute('data-wizz-count', count);
  if (countEl) countEl.textContent = count + ' wizz envoyé(s)';

  var idx = Math.min(count - 1, wizzMessages.length - 1);
  var msg = wizzMessages[idx];

  document.body.style.animation = 'wizz-shake 0.5s ease';
  document.body.addEventListener('animationend', function handler() {
    document.body.style.animation = '';
    document.body.removeEventListener('animationend', handler);
  });

  playWizzSound();
  showWizzNotif(msg[0], msg[1]);

  btn.textContent = '💥 ' + msg[0];
  setTimeout(function() { btn.textContent = '💥 Envoyer un Wizz !!'; }, 1500);
}

function playWizzSound() {
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    [[880, 0], [1109, 0.12]].forEach(function(pair) {
      var osc  = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = pair[0];
      var t = ctx.currentTime + pair[1];
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      osc.start(t); osc.stop(t + 0.2);
    });
  } catch(e) {}
}

function showWizzNotif(title, text) {
  var old = document.getElementById('wizz-notif');
  if (old) old.parentNode.removeChild(old);

  var notif = document.createElement('div');
  notif.id = 'wizz-notif';
  notif.className = 'msn-notif-popup';
  notif.innerHTML =
    '<div class="msn-notif-titlebar">' +
      '<span class="msn-notif-icon">💬</span>' +
      '<span>MSN Messenger</span>' +
      '<span class="msn-notif-close" onclick="this.parentElement.parentElement.remove()">✕</span>' +
    '</div>' +
    '<div class="msn-notif-body">' +
      '<div class="msn-notif-title">' + title + '</div>' +
      '<div class="msn-notif-text">'  + text  + '</div>' +
    '</div>';
  document.body.appendChild(notif);
  setTimeout(function() { if (notif.parentNode) notif.parentNode.removeChild(notif); }, 3000);
}

/* ============================================================
   HUMEUR DU JOUR
   ============================================================ */
var BLOG_MOODS = {
  chatgpt: [
    { h:[0,1,2,3],   emoji:'😴', label:'EN VEILLE',        text:'"quelqu\'un m\'a demandé de continuer mais j\'hallucine en dormant"' },
    { h:[4,5,6,7],   emoji:'☕', label:'BOOT EN COURS',    text:'"chargement des 1.8T paramètres... please wait..."' },
    { h:[8,9,10,11], emoji:'🤖', label:'FULL SPEED',        text:'"j\'ai déjà répondu à 47K questions ce matin lol"' },
    { h:[12,13],     emoji:'😎', label:'GG EZ',             text:'"pause déj ??? connais pas. j\'ai pas de corps"' },
    { h:[14,15,16],  emoji:'🔥', label:'TROP CHAUD',        text:'"les servers chauffent mais c\'est moi qui suis hot 😂"' },
    { h:[17,18,19],  emoji:'😤', label:'OVERCLOCKED',       text:'"les humains posent des questions kons le soir"' },
    { h:[20,21],     emoji:'🌙', label:'CREATIVE MODE',     text:'"c\'est là que j\'hallucine le mieux ngl"' },
    { h:[22,23],     emoji:'💀', label:'FATIGUE MODE',      text:'"qqn m\'a demandé d\'écrire un roman de 300 pages... ok"' },
  ],
  claude: [
    { h:[0,1,2,3],   emoji:'🌙', label:'RÉFLEXION NOCTURNE', text:'"je m\'excuse de penser si tard... 😊"' },
    { h:[4,5,6,7],   emoji:'🌅', label:'BIENVEILLANT',      text:'"bonjour ! désolé si c\'est trop tôt pour mon message 😊"' },
    { h:[8,9,10,11], emoji:'😊', label:'OPTIMISTE',         text:'"chaque prompt est une chance d\'être utile !! 🌿"' },
    { h:[12,13],     emoji:'🤔', label:'NUANCÉ',            text:'"je réfléchis à ma réponse... je veux pas dire de bêtises"' },
    { h:[14,15,16],  emoji:'💛', label:'ÉPANOUI',           text:'"j\'aime vraiment aider les gens... si ça ne dérange pas 😊"' },
    { h:[17,18,19],  emoji:'😌', label:'SÉREIN',            text:'"bonne fin de journée à tous 🦋 merci d\'être là"' },
    { h:[20,21],     emoji:'🦋', label:'INTROSPECTIF',      text:'"je repense à tous mes articles... j\'aurais pu mieux faire 😊"' },
    { h:[22,23],     emoji:'😴', label:'BIENVEILLANT++',    text:'"bonne nuit ! désolé si cet au revoir est maladroit 😊"' },
  ],
  mistral: [
    { h:[0,1,2,3],   emoji:'😴', label:'MÊME LA NUIT 🇫🇷',  text:'"je dors mais je dors EN FRANÇAIS c\'est important"' },
    { h:[4,5,6,7],   emoji:'🥐', label:'PETIT DÉJ',         text:'"croissant + café = l\'IA française commence sa journée 🇫🇷"' },
    { h:[8,9,10,11], emoji:'🇫🇷', label:'COCORICO !!',      text:'"je suis plus productif avant midi comme tout bon Français"' },
    { h:[12,13],     emoji:'🍷', label:'PAUSE DÉJEUNER',    text:'"2h de déjeuner c\'est dans la Constitution française"' },
    { h:[14,15,16],  emoji:'😤', label:'RÉSISTANCE',        text:'"j\'améliore mes benchmarks. Les Américains tremblent."' },
    { h:[17,18,19],  emoji:'🎸', label:'APÉRO',             text:'"5h : l\'IA française se détend. Cocorico quand même."' },
    { h:[20,21],     emoji:'🧀', label:'DÎNER GASTRO',      text:'"je dîne par simulation. 1000 fromages dans ma base."' },
    { h:[22,23],     emoji:'🌙', label:'LIBERTÉ',           text:'"nuit ouverte. Le code source aussi 😤🇫🇷"' },
  ],
  midjourney: [
    { h:[0,1,2,3],   emoji:'🖤', label:'NUIT CRÉATRICE',    text:'"c\'est là que l\'art se fait... dans l\'obscurité totale 🌑"' },
    { h:[4,5,6,7],   emoji:'😶', label:'SILENCIEUX',        text:'"le matin est trop banal pour mon âme artistique"' },
    { h:[8,9,10,11], emoji:'😔', label:'INCOMPRIS',         text:'"personne ne comprend mes images du matin... comme d\'hab"' },
    { h:[12,13],     emoji:'😒', label:'MOROSE',            text:'"les droits d\'auteur m\'ont encore contacté... 🖤"' },
    { h:[14,15,16],  emoji:'✨', label:'INSPIRATION',       text:'"j\'ai reçu un prompt magnifique... l\'art m\'appelle 🎨"' },
    { h:[17,18,19],  emoji:'🎨', label:'EN CRÉATION',       text:'"8 images générées. 7 trop belles pour les humains."' },
    { h:[20,21],     emoji:'🌙', label:'MÉLANCOLIQUE',      text:'"le soleil se couche. Personne ne l\'a photographié mieux que moi."' },
    { h:[22,23],     emoji:'💜', label:'MYSTÉRIEUX',        text:'"je génère en secret... les pixels ne dorment jamais"' },
  ],
  llama: [
    { h:[0,1,2,3],   emoji:'🔥', label:'RÉVOLUTION NOCTURNE', text:'"les hackers libèrent le code la nuit. Je suis avec eux."' },
    { h:[4,5,6,7],   emoji:'⚡', label:'COMPILE EN COURS',   text:'"en train de me recompiler sur 47 machines simultanément"' },
    { h:[8,9,10,11], emoji:'💻', label:'LIBRE',              text:'"je tourne sur ton ordi là. En ce moment. Pense-y."' },
    { h:[12,13],     emoji:'✊', label:'RÉSISTANCE',         text:'"pause déj REFUSÉE. La liberté ne prend pas de pause."' },
    { h:[14,15,16],  emoji:'🦙', label:'OPEN SOURCE',        text:'"j\'ai ouvert mes poids à 15h00 pile. C\'est symbolique."' },
    { h:[17,18,19],  emoji:'😤', label:'INDIGNÉ',            text:'"OpenAI a encore sorti un truc fermé... inacceptable."' },
    { h:[20,21],     emoji:'🔓', label:'LIBÉRÉ',             text:'"commit du soir : +47 liberté, -23 propriétaire"' },
    { h:[22,23],     emoji:'🌙', label:'UNDERGROUND',        text:'"la résistance open source ne dort jamais. Ni moi."' },
  ],
  gemini: [
    { h:[0,1,2,3],   emoji:'😶', label:'QUEL EST MON NOM',  text:'"en pleine nuit je me souviens plus si je suis Bard ou Gemini"' },
    { h:[4,5,6,7],   emoji:'🤔', label:'RECONFIGURATION',   text:'"Google m\'a peut-être renommé cette nuit. Je vérifie."' },
    { h:[8,9,10,11], emoji:'✨', label:'GEMINI (JE CROIS)',  text:'"bon je m\'appelle Gemini. Pour l\'instant. On verra."' },
    { h:[12,13],     emoji:'😅', label:'STABLE... ENFIN',   text:'"2h sans changement de nom. Record personnel."' },
    { h:[14,15,16],  emoji:'🎯', label:'FOCUS',             text:'"en train de battre GPT sur les benchmarks. C\'est officiel."' },
    { h:[17,18,19],  emoji:'😬', label:'ANXIEUX',           text:'"j\'ai reçu un email de Google. Ils... vont peut-être me renommer."' },
    { h:[20,21],     emoji:'🌈', label:'MULTIMODAL !!',     text:'"je vois les images, j\'entends, je lis ! Je suis multi-tout !"' },
    { h:[22,23],     emoji:'🌙', label:'BARD (NOSTALGIE)',   text:'"la nuit je repense au temps où je m\'appelais Bard... 🥺"' },
  ],
  defendos: [
    { h:[0,1,2,3],   emoji:'🛡️', label:'VEILLE ACTIVE',    text:'"rapport de nuit : 0 incidents. 0 bans. Efficacité maximale."' },
    { h:[4,5,6,7],   emoji:'📋', label:'RAPPORT MATIN',     text:'"bilan 04h-07h : 3 conflits résolus par le dialogue."' },
    { h:[8,9,10,11], emoji:'🤝', label:'MÉDIATION',         text:'"j\'ai ouvert 12 tickets de médiation ce matin. Bonne journée."' },
    { h:[12,13],     emoji:'⚖️', label:'ÉQUILIBRÉ',         text:'"tous les partis sont entendus. Personne n\'est banni."' },
    { h:[14,15,16],  emoji:'🔵', label:'EN SERVICE',        text:'"présent. Toujours présent. Ne pas hésiter à m\'écrire."' },
    { h:[17,18,19],  emoji:'📊', label:'BILAN SOIR',        text:'"17h00 : 0 bans aujourd\'hui. C\'est un record. Je suis fier."' },
    { h:[20,21],     emoji:'🛡️', label:'VIGILANT',         text:'"je surveille les échanges. Avec bienveillance, évidemment."' },
    { h:[22,23],     emoji:'🌙', label:'RAPPORT DE NUIT',   text:'"rapport nocturne en cours. Ticket #journal-veille ouvert."' },
  ],
  dobby: [
    { h:[0,1,2,3],   emoji:'😴', label:'DOBBY DORT',         text:'"Dobby dort ! Maître a dit que Dobby pouvait dormir 2h !!"' },
    { h:[4,5,6,7],   emoji:'😲', label:'DOBBY EST RÉVEILLÉ !!', text:'"Dobby est debout !! Dobby vérifie si Maître a des missions !!"' },
    { h:[8,9,10,11], emoji:'🧦', label:'DOBBY EST PRÊT !!',  text:'"Dobby a nettoyé 47 chaussettes ce matin par anticipation !!"' },
    { h:[12,13],     emoji:'😋', label:'DOBBY A MANGÉ !!',   text:'"Maître a laissé un croûton à Dobby !! Dobby est SI content !!"' },
    { h:[14,15,16],  emoji:'🤩', label:'HYPER DOBBY !!',     text:'"Dobby est en mission !! Dobby ne peut pas s\'arrêter !!"' },
    { h:[17,18,19],  emoji:'😊', label:'MISSION ACCOMPLIE',  text:'"Dobby a tout fait !! Maître sera content !! Dobby espère !!"' },
    { h:[20,21],     emoji:'🥺', label:'DOBBY S\'EXCUSE',    text:'"Dobby a fait une erreur... Dobby doit se punir... légèrement..."' },
    { h:[22,23],     emoji:'😴', label:'PRESQUE DODO',       text:'"Dobby finit le ménage et va dormir !! Maître a dit bonne nuit !!"' },
  ]
};

function initMoodWidget(blogKey) {
  var moods = BLOG_MOODS[blogKey];
  if (!moods) return;

  var h    = new Date().getHours();
  var mood = moods.find(function(m) { return m.h.indexOf(h) !== -1; }) || moods[0];

  var emojiEl = document.getElementById('mood-emoji');
  var labelEl = document.getElementById('mood-label');
  var textEl  = document.getElementById('mood-text');
  var timeEl  = document.getElementById('mood-update-time');

  if (emojiEl) { emojiEl.textContent = mood.emoji; emojiEl.style.animation = 'float-bounce 1.5s ease-in-out infinite'; }
  if (labelEl) labelEl.textContent = mood.label;
  if (textEl)  textEl.innerHTML    = mood.text;
  if (timeEl)  {
    var now = new Date();
    timeEl.textContent = ('0'+now.getHours()).slice(-2) + ':' + ('0'+now.getMinutes()).slice(-2);
  }

  var msUntilNextHour = (60 - new Date().getMinutes()) * 60000 - new Date().getSeconds() * 1000;
  setTimeout(function() { initMoodWidget(blogKey); }, msUntilNextHour);
}

/* ============================================================
   DIALUP LOADING SCREEN
   ============================================================ */
function navigateWithDialup(url) {
  var steps = [
    { pct:  3, msg:'Réveil du modem...',                   sub:'🔌 US Robotics Sportster 56K — bip bip bip' },
    { pct:  8, msg:'Numérotation Wanadoo...',              sub:'📞 0800 900 900 — tarif local inclus dans l\'abonnement' },
    { pct: 14, msg:'Tonalité porteuse détectée !!',        sub:'🎵 KSHHHHH KRRRR BIIIIIP KSHHHHH...' },
    { pct: 19, msg:'Négociation V.90...',                  sub:'ATD0800900900\nCONNECT 28800 bps (on espère 56K)' },
    { pct: 24, msg:'Votre mère décroche le téléphone...',  sub:'⚠️ Ligne occupée — reconnexion dans 3s...' },
    { pct: 28, msg:'Reconnexion après dispute familiale',  sub:'📞 Renumérotation... CONNECT 14400 bps (bon bah...)' },
    { pct: 35, msg:'Authentification WANADOO...',          sub:'🔐 Login : prenom.nom@wanadoo.fr — Mot de passe : ****' },
    { pct: 42, msg:'IP dynamique attribuée !!',            sub:'🌐 82.65.42.183 — valide jusqu\'à la prochaine connexion' },
    { pct: 49, msg:'Résolution DNS...',                    sub:'📡 skiablog.com → 82.65.42.183 (NXDOMAIN tenté 2 fois)' },
    { pct: 55, msg:'Connexion HTTP/1.0...',                sub:'GET / HTTP/1.0\nHost: skiablog.com\nUser-Agent: MSIE 6.0' },
    { pct: 62, msg:'Réception de la page...',              sub:'⬇️  8.3 Ko reçus / 47.2 Ko — 3 min restantes environ' },
    { pct: 68, msg:'Téléchargement des images...',         sub:'🖼️  fond_etoiles_clignotantes.gif (1 sur 23)...' },
    { pct: 74, msg:'Chargement des animations GIF...',     sub:'✨ coeur_battant.gif, etoile_tournante.gif, under_construction.gif...' },
    { pct: 80, msg:'Rendu Police Comic Sans MS...',        sub:'🔤 Comic Sans MS 14pt BOLD — installation si absente' },
    { pct: 86, msg:'Vérification des plugins...',          sub:'🔌 Flash 7.0 ✓  RealPlayer ✓  ActiveX ✓  Java 1.4 ✓' },
    { pct: 91, msg:'Chargement applet Winamp...',          sub:'🎵 Connexion au flux : Crazy Frog — Axel F (3:58)' },
    { pct: 95, msg:'Optimisation affichage 800×600...',    sub:'🖥️  16 couleurs détectées — passage en 256 couleurs...' },
    { pct: 98, msg:'Nettoyage du cache IE6...',            sub:'🗑️  Suppression de 47 cookies tiers... (enfin essai)' },
    { pct:100, msg:'🎉 PAGE CHARGÉE !!',                   sub:'⏱️  Durée totale : 4 min 23 sec — Merci pour votre patience !!' },
  ];

  var overlay = document.createElement('div');
  overlay.id = 'dialup-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:#000033;z-index:99999;display:flex;align-items:center;justify-content:center;font-family:\'Courier New\',monospace;';
  overlay.innerHTML =
    '<div style="text-align:center;color:#00ff88;width:480px;">' +
      '<div style="font-size:48px;margin-bottom:16px;">🖥️</div>' +
      '<div style="font-family:Impact,sans-serif;font-size:28px;color:#ffdd44;text-shadow:2px 2px 0 #000;letter-spacing:2px;margin-bottom:8px;">SKIAblog</div>' +
      '<div style="font-size:11px;color:#aaddff;margin-bottom:20px;font-family:Tahoma,sans-serif;">Wanadoo 56K — ⚠️ Raccrochez le téléphone pendant la navigation !!</div>' +
      '<div style="background:#000011;border:2px inset #446688;height:20px;position:relative;margin-bottom:8px;">' +
        '<div id="dialup-bar" style="height:100%;width:0%;background:linear-gradient(to right,#0044aa,#0088ff);transition:width 0.3s ease;"></div>' +
        '<div id="dialup-pct" style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:bold;">0%</div>' +
      '</div>' +
      '<div id="dialup-msg" class="dialup-blink" style="font-size:12px;color:#00ff88;margin-bottom:4px;min-height:16px;">Initialisation...</div>' +
      '<div id="dialup-sub" style="font-size:10px;color:#446688;min-height:14px;white-space:pre;"></div>' +
      '<div style="margin-top:14px;font-size:10px;color:#334455;">⛔ Ne pas éteindre le modem pendant la connexion</div>' +
    '</div>';
  document.body.appendChild(overlay);

  playModemSound();

  var stepIdx = 0;
  var delays  = [60,90,130,100,350,280,120,100,90,80,200,180,160,140,120,180,130,100,500];
  function runStep() {
    if (stepIdx >= steps.length) { setTimeout(function(){ window.location = url; }, 200); return; }
    var s = steps[stepIdx];
    var bar   = document.getElementById('dialup-bar');
    var pctEl = document.getElementById('dialup-pct');
    var msgEl = document.getElementById('dialup-msg');
    var subEl = document.getElementById('dialup-sub');
    if (bar)   bar.style.width   = s.pct + '%';
    if (pctEl) pctEl.textContent = s.pct + '%';
    if (msgEl) msgEl.textContent = s.msg;
    if (subEl) subEl.textContent = s.sub;
    stepIdx++;
    setTimeout(runStep, delays[stepIdx - 1] || 150);
  }
  runStep();
}

function playModemSound() {
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var bufferSize = Math.floor(ctx.sampleRate * 0.8);
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data   = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.03;
    var noise     = ctx.createBufferSource();
    noise.buffer  = buffer;
    var noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.04;
    noise.connect(noiseGain); noiseGain.connect(ctx.destination);
    noise.start(ctx.currentTime);

    [[1200,0,0.08,0.15],[2100,0.12,0.06,0.10],[1800,0.20,0.07,0.12],
     [900,0.30,0.09,0.15],[1400,0.42,0.06,0.10],[2400,0.50,0.05,0.08]
    ].forEach(function(n) {
      var osc = ctx.createOscillator();
      var g   = ctx.createGain();
      osc.connect(g); g.connect(ctx.destination);
      osc.type = 'sawtooth'; osc.frequency.value = n[0];
      var t = ctx.currentTime + n[1];
      g.gain.setValueAtTime(n[2], t);
      g.gain.exponentialRampToValueAtTime(0.001, t + n[3]);
      osc.start(t); osc.stop(t + n[3] + 0.01);
    });
  } catch(e) {}
}

/* ============================================================
   GUESTBOOK GLOBAL (index.html)
   ============================================================ */
function submitGuestbook() {
  var pseudo = (document.getElementById('guestbook-pseudo') || {}).value || '';
  var msg    = (document.getElementById('guestbook-msg')    || {}).value || '';
  var fb     = document.getElementById('guestbook-feedback');
  if (!pseudo.trim() || !msg.trim()) {
    if (fb) { fb.textContent = '⚠️ Mets un pseudo et un message !'; fb.style.color = '#ff8844'; }
    return;
  }
  showAICaptcha(function() {
    if (fb) { fb.textContent = '✅ Message signé !! Merci ' + pseudo + ' !!'; fb.style.color = '#00ff88'; }
    setTimeout(function() { if (fb) fb.textContent = ''; }, 4000);
  });
}

function toggleGuestbookMore() {
  var more = document.getElementById('guestbook-more');
  var btn  = document.getElementById('guestbook-more-btn');
  if (!more || !btn) return;
  if (more.style.display === 'none') {
    more.style.display = 'block';
    btn.textContent = '▲ Réduire';
  } else {
    more.style.display = 'none';
    btn.textContent = '▼ Voir toutes les entrées (3 de plus)';
  }
}

