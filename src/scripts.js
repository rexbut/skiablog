/* =====================================================
   SKIAblog — scripts.js
   Scripts communs : compteur, horloge, snow, popups,
   curseur trail, easter eggs, Clippy, virus alert
   ===================================================== */

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
      'visits-gemini':  'gemini'
    };
    Object.keys(blogIds).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.textContent = getTimedCount(blogIds[id]).toLocaleString('fr-FR');
    });

    // Tableau top blogs
    ['chatgpt','llama','midjourney','mistral','gemini','claude'].forEach(function(k) {
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
function showWelcomePopup(message, icon) {
  icon    = icon    || '🎉';
  message = message || 'Bienvenu(e) sur SKIAblog !! Lâche tes coms !! 💬';

  var overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.innerHTML =
    '<div class="popup-box">' +
      '<div class="win-titlebar">' +
        '<span>💬</span>' +
        '<span class="win-titlebar-title">Message de bienvenue !!</span>' +
        '<div class="win-titlebar-buttons">' +
          '<div class="win-btn win-btn-min">_</div>' +
          '<div class="win-btn win-btn-close" onclick="closeOverlay(this)">✕</div>' +
        '</div>' +
      '</div>' +
      '<div class="popup-content">' +
        '<span class="popup-icon">' + icon + '</span>' +
        '<p style="font-size:14px;font-weight:bold;color:#222;">' + message + '</p>' +
        '<p style="font-size:11px;color:#666;margin-top:8px">Laisse un commentaire dans le livre d\'or !!</p>' +
      '</div>' +
      '<div class="popup-buttons">' +
        '<button class="btn-xp" onclick="closeOverlay(this)">OK trop cool !!</button>' +
        '<button class="btn-xp" onclick="closeOverlay(this)">Fermer ce truc</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);
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

/* === AUTO-APPLY RAINBOW TO .js-rainbow elements === */
document.addEventListener('DOMContentLoaded', function() {
  var els = document.querySelectorAll('.js-rainbow');
  els.forEach(function(el) {
    el.innerHTML = rainbowify(el.textContent);
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
