// Kuroko Link — the other person's side of the conversation, in their browser.
(() => {
  const code = (location.pathname.split('/').filter(Boolean)[1] || new URLSearchParams(location.search).get('c') || '').toLowerCase();

  const LANGS = {
    ja: ['日本語', 'ja-JP'], en: ['English', 'en-US'], zh: ['中文', 'zh-CN'], ko: ['한국어', 'ko-KR'],
    uk: ['Українська', 'uk-UA'], es: ['Español', 'es-ES'], ru: ['Русский', 'ru-RU'],
    fr: ['Français', 'fr-FR'], de: ['Deutsch', 'de-DE'], pl: ['Polski', 'pl-PL']
  };

  const UI = {
    en: { connecting: 'Connecting…', waiting: 'Waiting for the other phone…', ok: 'Connected', lost: 'Reconnecting…', notSet: 'Link is not set up yet', lang: 'Your language', hint: 'Tap the button and speak. The other person hears and reads your words in their language.', mic: '🎤  Tap and speak', micOn: 'Listening… tap to send', send: 'Send', typePh: 'Or type here…', them: 'They said', you: 'You', replay: '▶ Play again', ended: 'The conversation has ended.', get: 'Get Kuroko for iPhone', noMic: 'Voice input is not available in this browser. Please type.', badLink: 'This link is not complete. Please scan the QR code again.' },
    ja: { connecting: '接続中…', waiting: '相手のスマホを待っています…', ok: '接続しました', lost: '再接続中…', notSet: 'Linkはまだ設定されていません', lang: 'あなたの言語', hint: 'ボタンを押して話してください。相手にはあなたの言葉が相手の言語で届きます。', mic: '🎤  タップして話す', micOn: '聞いています… タップで送信', send: '送信', typePh: 'または入力…', them: '相手', you: 'あなた', replay: '▶ もう一度再生', ended: '会話は終了しました。', get: 'iPhone版Kurokoを入手', noMic: 'このブラウザでは音声入力が使えません。入力してください。', badLink: 'リンクが不完全です。QRコードをもう一度読み取ってください。' },
    zh: { connecting: '连接中…', waiting: '正在等待对方手机…', ok: '已连接', lost: '重新连接中…', notSet: 'Link 尚未设置', lang: '你的语言', hint: '点按按钮说话。对方会用他的语言听到并看到你的话。', mic: '🎤  点按说话', micOn: '正在听… 点按发送', send: '发送', typePh: '或在此输入…', them: '对方说', you: '你', replay: '▶ 再播放一次', ended: '对话已结束。', get: '下载 iPhone 版 Kuroko', noMic: '此浏览器不支持语音输入，请打字。', badLink: '链接不完整，请重新扫描二维码。' },
    ko: { connecting: '연결 중…', waiting: '상대방 휴대폰을 기다리는 중…', ok: '연결됨', lost: '다시 연결 중…', notSet: 'Link가 아직 설정되지 않았습니다', lang: '내 언어', hint: '버튼을 누르고 말하세요. 상대방은 자신의 언어로 듣고 읽습니다.', mic: '🎤  눌러서 말하기', micOn: '듣는 중… 눌러서 보내기', send: '보내기', typePh: '또는 여기에 입력…', them: '상대방', you: '나', replay: '▶ 다시 듣기', ended: '대화가 끝났습니다.', get: 'iPhone용 Kuroko 받기', noMic: '이 브라우저에서는 음성 입력을 사용할 수 없습니다. 입력해 주세요.', badLink: '링크가 완전하지 않습니다. QR 코드를 다시 스캔해 주세요.' },
    uk: { connecting: 'Підключення…', waiting: 'Чекаю на телефон співрозмовника…', ok: 'Підключено', lost: 'Перепідключення…', notSet: 'Link ще не налаштовано', lang: 'Твоя мова', hint: 'Натисни кнопку й говори. Співрозмовник почує й прочитає твої слова своєю мовою.', mic: '🎤  Натисни й говори', micOn: 'Слухаю… натисни, щоб надіслати', send: 'Надіслати', typePh: 'Або напиши тут…', them: 'Співрозмовник', you: 'Ти', replay: '▶ Повторити', ended: 'Розмову завершено.', get: 'Завантажити Kuroko для iPhone', noMic: 'Цей браузер не підтримує голосовий ввід. Напиши текстом.', badLink: 'Посилання неповне. Відскануй QR-код ще раз.' },
    es: { connecting: 'Conectando…', waiting: 'Esperando el otro teléfono…', ok: 'Conectado', lost: 'Reconectando…', notSet: 'Link aún no está configurado', lang: 'Tu idioma', hint: 'Toca el botón y habla. La otra persona oirá y leerá tus palabras en su idioma.', mic: '🎤  Toca y habla', micOn: 'Escuchando… toca para enviar', send: 'Enviar', typePh: 'O escribe aquí…', them: 'Te dijeron', you: 'Tú', replay: '▶ Repetir', ended: 'La conversación ha terminado.', get: 'Descarga Kuroko para iPhone', noMic: 'Este navegador no admite entrada de voz. Escribe, por favor.', badLink: 'El enlace está incompleto. Escanea el código QR de nuevo.' },
    ru: { connecting: 'Подключение…', waiting: 'Жду телефон собеседника…', ok: 'Подключено', lost: 'Переподключение…', notSet: 'Link ещё не настроен', lang: 'Твой язык', hint: 'Нажми кнопку и говори. Собеседник услышит и прочитает твои слова на своём языке.', mic: '🎤  Нажми и говори', micOn: 'Слушаю… нажми, чтобы отправить', send: 'Отправить', typePh: 'Или напиши здесь…', them: 'Собеседник', you: 'Ты', replay: '▶ Повторить', ended: 'Разговор завершён.', get: 'Скачать Kuroko для iPhone', noMic: 'Этот браузер не поддерживает голосовой ввод. Напиши текстом.', badLink: 'Ссылка неполная. Отсканируй QR-код ещё раз.' }
  };

  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  const t = UI[browser] || UI.en;
  let myLang = LANGS[browser] ? browser : 'en';
  try { const saved = localStorage.getItem('kuroko-link-lang'); if (LANGS[saved]) myLang = saved; } catch {}
  document.documentElement.lang = browser;

  const $ = (id) => document.getElementById(id);
  const log = $('log'), mic = $('mic'), live = $('live'), dot = $('dot'), state = $('state');
  let soundOn = true, ws = null, ref = 1, joined = false, ended = false, appSeen = false, heartbeat = null;
  let config = null;

  // Interface text.
  $('langLabel').textContent = t.lang;
  $('hint').textContent = t.hint;
  mic.textContent = t.mic;
  $('typed').placeholder = t.typePh;
  $('sendBtn').textContent = t.send;
  const select = $('lang');
  Object.entries(LANGS).forEach(([k, v]) => { const o = document.createElement('option'); o.value = k; o.textContent = v[0]; if (k === myLang) o.selected = true; select.append(o); });

  function setState(kind, text) { dot.className = 'dot ' + kind; state.textContent = text; }

  // Channel (Supabase Realtime over a plain WebSocket).
  const topic = () => 'realtime:link-' + code;
  function raw(obj) { if (ws && ws.readyState === 1) ws.send(JSON.stringify(obj)); }
  function send(body) {
    body.from = 'partner';
    raw({ topic: topic(), event: 'broadcast', ref: String(++ref), join_ref: '1', payload: { type: 'broadcast', event: 'msg', payload: body } });
  }

  async function connect() {
    if (!code || code.length < 6) { setState('', t.badLink); return; }
    if (ws && ws.readyState <= 1) return;
    setState('wait', t.connecting);
    if (!config) {
      try { config = await fetch('/config.json', { cache: 'no-store' }).then(r => r.json()); } catch { config = {}; }
    }
    if (!config.supabaseUrl || !config.supabaseKey) { setState('', t.notSet); return; }
    const url = config.supabaseUrl.replace(/^https/, 'wss') + '/realtime/v1/websocket?apikey=' + encodeURIComponent(config.supabaseKey) + '&vsn=1.0.0';
    ws = new WebSocket(url);
    ws.onopen = () => {
      raw({ topic: topic(), event: 'phx_join', ref: '1', join_ref: '1', payload: { config: { broadcast: { self: false, ack: false }, presence: { key: '' }, private: false } } });
      clearInterval(heartbeat);
      heartbeat = setInterval(() => raw({ topic: 'phoenix', event: 'heartbeat', payload: {}, ref: String(++ref) }), 25000);
    };
    ws.onmessage = (e) => {
      let m; try { m = JSON.parse(e.data); } catch { return; }
      if (m.event === 'phx_reply' && m.topic === topic()) {
        if (m.payload && m.payload.status === 'ok') { joined = true; setState(appSeen ? 'ok' : 'wait', appSeen ? t.ok : t.waiting); send({ kind: 'hello', lang: myLang }); send({ kind: 'sync', known: appIds() }); }
      }
      if (m.event === 'broadcast' && m.payload && m.payload.payload && m.payload.payload.from === 'app') handle(m.payload.payload);
    };
    ws.onclose = () => { joined = false; clearInterval(heartbeat); if (!ended) { setState('wait', t.lost); setTimeout(connect, 2000); } };
  }

  function handle(msg) {
    if (!appSeen) { appSeen = true; setState('ok', t.ok); mic.disabled = !(Recognition || canRecord); }
    if (msg.lang) appLang = msg.lang;
    if (msg.kind === 'hello') return;
    if (msg.kind === 'say') {
      if (document.querySelector('[data-id="' + CSS.escape(msg.id) + '"]')) return;
      add({ id: msg.id, mine: false, orig: msg.text, tr: msg.translated, audio: msg.audio });
      // Lines resent after sleep: only the newest one is spoken.
      if (!msg.replay || msg.last) voiceOut(msg.audio, msg.translated);
    }
    if (msg.kind === 'echo') {
      const box = document.querySelector('[data-id="' + CSS.escape(msg.id) + '"]');
      if (box) {
        box.querySelector('.tr').textContent = msg.translated;
        if (typeof msg.text === 'string') box.querySelector('.orig').textContent = msg.text || '…?';
      }
    }
    if (msg.kind === 'end') finish();
  }

  // Kuroko server: recognizes and translates the phrase directly, without a round trip through the iPhone.
  let appLang = '';
  async function viaServer(body) {
    if (!appLang || !config || !config.supabaseUrl) return null;
    const stop = new AbortController(); const timer = setTimeout(() => stop.abort(), 15000);
    try {
      const r = await fetch(config.supabaseUrl + '/functions/v1/kuroko-link', {
        method: 'POST', signal: stop.signal,
        headers: { 'content-type': 'application/json', apikey: config.supabaseKey },
        body: JSON.stringify(Object.assign({}, body, { from: myLang, to: appLang }))
      });
      return r.ok ? await r.json() : null;
    } catch { return null; } finally { clearTimeout(timer); }
  }
  function fill(id, orig, tr) {
    const box = document.querySelector('[data-id="' + CSS.escape(id) + '"]');
    if (!box) return;
    if (orig != null) box.querySelector('.orig').textContent = orig;
    if (tr != null) box.querySelector('.tr').textContent = tr;
  }

  function appIds() { return [...document.querySelectorAll('.msg:not(.mine)')].map(d => d.dataset.id); }

  function add({ id, mine, orig, tr, audio }) {
    const hint = $('hint'); if (hint) hint.remove();
    const div = document.createElement('div');
    div.className = 'msg' + (mine ? ' mine' : '');
    div.dataset.id = id;
    const label = document.createElement('small'); label.textContent = mine ? t.you : t.them;
    const o = document.createElement('div'); o.className = 'orig'; o.textContent = orig;
    const r = document.createElement('div'); r.className = 'tr'; r.textContent = tr || '…';
    div.append(label, o, r);
    if (!mine) { const b = document.createElement('button'); b.textContent = t.replay; b.onclick = () => { pauseVoice(); queue = []; audio ? play(audio, true) : speak(r.textContent, true); }; div.append(b); }
    log.append(div);
    log.scrollTop = log.scrollHeight;
  }

  // ---------- Voice out ----------
  // One audio element for everything. Between phrases it plays silence in a loop:
  // this keeps the page alive when the screen locks, so translations are still spoken.
  const MORE = {
    en: { on: 'Microphone on · tap to turn off' }, ja: { on: 'マイクON · タップでオフ' }, zh: { on: '麦克风已开 · 点按关闭' },
    ko: { on: '마이크 켜짐 · 눌러서 끄기' }, uk: { on: 'Мікрофон увімкнено · натисни, щоб вимкнути' },
    es: { on: 'Micrófono activado · toca para apagar' }, ru: { on: 'Микрофон включён · нажми, чтобы выключить' }
  }[browser] || { on: 'Microphone on · tap to turn off' };

  const silence = (() => {
    const rate = 8000, n = rate, buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
    const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true);
    v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true);
    v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, n * 2, true);
    return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
  })();
  const player = new Audio();
  let speaking = false, queue = [];
  function idle() { player.onended = null; player.loop = true; player.src = silence; player.play().catch(() => {}); }
  function stopSpeech() {
    queue = []; speaking = false;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    if (!player.loop) idle();
  }
  function afterSpeech() { speaking = false; if (queue.length) return queue.shift()(); resumeVoice(); }

  function speak(text, force) {
    if (!text || !('speechSynthesis' in window) || (!soundOn && !force)) return afterSpeech();
    speaking = true;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANGS[myLang][1];
    const voice = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith(myLang));
    if (voice) u.voice = voice;
    u.onend = u.onerror = afterSpeech;
    speechSynthesis.speak(u);
  }

  // A natural voice recorded by the app (Google), when it sent one.
  function play(base64, force) {
    if (!soundOn && !force) return afterSpeech();
    speaking = true;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    player.loop = false;
    player.src = 'data:audio/mpeg;base64,' + base64;
    player.onended = () => { idle(); afterSpeech(); };
    player.play().catch(() => { idle(); afterSpeech(); });
  }

  // A translation arrived: speak it now, or right after the phrase the person is saying.
  function voiceOut(audio, text) {
    const run = () => { pauseVoice(); audio ? play(audio) : speak(text); };
    if (busySpeaking()) queue.push(run); else run();
  }

  // ---------- Voice in ----------
  // Short pauses don't cut the phrase: it is sent after 2.5 s of silence (or 40 s at most).
  // Hands-free: one tap turns the microphone on for the whole conversation.
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const PAUSE = 2500, LONGEST = 40000, FIRST_WORDS = 8000;
  let rec = null, listening = false, collected = '', current = '', lastHeard = 0, startedAt = 0, watch = null;
  let handsFree = false;
  // No speech recognition in this browser (e.g. Samsung Internet, in-app browsers): record the voice, the app recognizes it.
  let useRecognition = !!Recognition;
  const recordType = (window.MediaRecorder && MediaRecorder.isTypeSupported) ? ['audio/webm;codecs=opus', 'audio/ogg;codecs=opus', 'audio/webm', 'audio/mp4'].find(m => MediaRecorder.isTypeSupported(m)) : null;
  const canRecord = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && recordType);
  // Phones: the browser's recognizer beeps (Android) or stops after a short pause and mishears (iPhone Safari).
  // Recording is steadier: the phrase goes to the app, and Google recognizes it in the chosen language.
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && canRecord) useRecognition = false;
  // Shows why voice doesn't work, so we can fix it.
  const why = (reason) => { live.textContent = t.noMic + ' (' + reason + ')'; };
  if (!Recognition && !canRecord) { mic.style.display = 'none'; why('no voice input'); }

  const phrase = () => (collected + ' ' + current).trim();
  const busySpeaking = () => (listening && phrase()) || (recording && spoke);
  function micLabel() {
    mic.classList.toggle('on', handsFree);
    mic.textContent = handsFree ? MORE.on : t.mic;
  }
  function startVoice() { if (!handsFree || speaking || ended) return; useRecognition ? startListening() : startRecording(); }
  function resumeVoice() { setTimeout(startVoice, 350); }
  // Stop listening without sending (we're about to speak, so the mic doesn't hear the translation).
  function pauseVoice() {
    if (listening) { listening = false; clearInterval(watch); if (rec) { rec.onend = null; try { rec.abort(); } catch {} } collected = ''; current = ''; live.textContent = ''; }
    if (recording) { spoke = false; stopRecording(true); }
  }

  function startListening() {
    if (!Recognition || listening) return;
    collected = ''; current = '';
    startedAt = lastHeard = Date.now();
    listening = true; micLabel();
    clearInterval(watch);
    watch = setInterval(check, 300);
    runRecognizer();
  }

  // The browser stops after each short pause; we quietly start it again until the real pause.
  function runRecognizer() {
    rec = new Recognition();
    rec.lang = LANGS[myLang][1];
    rec.interimResults = true;
    rec.continuous = false;
    rec.onresult = (e) => {
      let text = '';
      for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript;
      current = text; lastHeard = Date.now();
      live.textContent = phrase();
    };
    rec.onend = () => {
      collected = phrase(); current = '';
      if (listening) {
        const now = Date.now();
        const waitingForFirstWords = !collected && now - startedAt < FIRST_WORDS;
        if ((waitingForFirstWords || now - lastHeard < PAUSE) && now - startedAt < LONGEST) {
          try { runRecognizer(); return; } catch {}
        }
        listening = false;
      }
      done();
    };
    // Some browsers (e.g. Samsung Internet) have the recognizer but it doesn't work: switch to recording.
    rec.onerror = (e) => {
      if (!['not-allowed', 'service-not-allowed', 'network', 'audio-capture', 'language-not-supported'].includes(e.error)) return;
      rec.onend = null; listening = false; clearInterval(watch);
      if (canRecord) { useRecognition = false; collected = ''; current = ''; startRecording(); }
      else { handsFree = false; micLabel(); why('speech: ' + e.error + ', rec: ' + (recordType || 'none')); }
    };
    rec.start();
  }

  function check() {
    if (!listening) return;
    const now = Date.now();
    if ((phrase() && now - lastHeard >= PAUSE) || now - startedAt >= LONGEST) stopListening();
  }

  function stopListening() {
    listening = false;
    clearInterval(watch);
    try { rec.stop(); } catch { done(); }
  }

  function done() {
    clearInterval(watch);
    live.textContent = '';
    const text = collected.trim();
    collected = ''; current = '';
    micLabel();
    if (text) say(text);
    if (queue.length) queue.shift()(); else resumeVoice();
  }

  // Keep the screen on while the conversation is open.
  let wakeLock = null;
  async function keepAwake() {
    try { if ('wakeLock' in navigator && document.visibilityState === 'visible' && !wakeLock) { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); } } catch {}
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible' || ended) return;
    keepAwake();
    // Back from sleep: reconnect at once and collect what was missed.
    if (!ws || ws.readyState > 1) connect(); else send({ kind: 'sync', known: appIds() });
    resumeVoice();
  });
  document.addEventListener('click', keepAwake, { once: true });
  keepAwake();

  // One tap: microphone on for the whole conversation. Another tap: off.
  mic.addEventListener('click', () => {
    if ('speechSynthesis' in window && !window.__unlocked) { window.__unlocked = true; speechSynthesis.speak(new SpeechSynthesisUtterance('')); }
    keepAwake();
    if (handsFree) {
      handsFree = false;
      if (listening) stopListening();
      if (recording) stopRecording();
      micLabel();
      return;
    }
    handsFree = true;
    micLabel();
    startVoice();
  });

  // Recording fallback: the phrase ends after 2.5 s of silence (or 30 s), then goes to the app as audio.
  let stream = null, recorder = null, chunks = [], recording = false, spoke = false, audioCtx = null, analyser = null, levelTimer = null;
  async function startRecording() {
    if (recording) return;
    try {
      if (!stream) stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
    } catch (err) { handsFree = false; micLabel(); why('mic: ' + (err && err.name || 'denied')); return; }
    if (!handsFree || speaking) { releaseMic(); return; }
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser(); analyser.fftSize = 1024;
      audioCtx.createMediaStreamSource(stream).connect(analyser);
    }
    try { await audioCtx.resume(); } catch {}
    chunks = []; spoke = false; live.textContent = '';
    try { recorder = new MediaRecorder(stream, { mimeType: recordType, audioBitsPerSecond: 24000 }); } catch (err) { why('recorder: ' + (err && err.name)); return; }
    recorder.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    recorder.onstop = finishRecording;
    recorder.start();
    recording = true; micLabel();
    let begun = Date.now(); let lastLoud = begun; const buf = new Float32Array(analyser.fftSize);
    clearInterval(levelTimer);
    levelTimer = setInterval(() => {
      analyser.getFloatTimeDomainData(buf);
      let sum = 0; for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
      const now = Date.now();
      if (Math.sqrt(sum / buf.length) > 0.03) { spoke = true; lastLoud = now; live.textContent = '🎤 …'; }
      if ((spoke && now - lastLoud >= PAUSE) || now - begun >= 30000) stopRecording();
      else if (!spoke && now - begun >= FIRST_WORDS) {
        // Nobody spoke yet: start a fresh recording on the same open microphone (no clicks, no beeps).
        try { recorder.ondataavailable = null; recorder.onstop = null; recorder.stop(); } catch {}
        chunks = [];
        recorder = new MediaRecorder(stream, { mimeType: recordType, audioBitsPerSecond: 24000 });
        recorder.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
        recorder.onstop = finishRecording;
        recorder.start();
        begun = lastLoud = now;
      }
    }, 150);
  }
  let quietStop = false;
  function stopRecording(quiet) {
    if (!recording) return;
    recording = false; clearInterval(levelTimer); quietStop = !!quiet;
    live.textContent = '';
    try { recorder.stop(); } catch {}
    releaseMic();
  }
  // Close the microphone completely, so the phone's speaker goes back to normal volume.
  function releaseMic() {
    try { stream && stream.getTracks().forEach(tr => tr.stop()); } catch {}
    stream = null;
    try { audioCtx && audioCtx.close(); } catch {}
    audioCtx = null; analyser = null;
  }
  function finishRecording() {
    micLabel();
    const blob = new Blob(chunks, { type: 'audio/webm' });
    const send_ = spoke && blob.size >= 1500 && !quietStop;
    if (quietStop) { quietStop = false; return; }
    if (send_) {
      const reader = new FileReader();
      reader.onload = async () => {
        const audio = String(reader.result).split(',')[1];
        const id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
        add({ id, mine: true, orig: '🎤 …', tr: '…' });
        // Fast path: the server recognizes and translates. MP4 (iPhone) and errors go the old way, through the app.
        const r = recordType.includes('mp4') ? null : await viaServer({ audio, mime: recordType });
        if (r && typeof r.text === 'string') {
          if (!r.text) { fill(id, '…?', ''); return; }
          fill(id, r.text, r.translated);
          send({ kind: 'say', id, text: r.text, lang: myLang, translated: r.translated });
        } else {
          send({ kind: 'say-audio', id, audio, mime: recordType, lang: myLang });
        }
      };
      reader.readAsDataURL(blob);
    }
    if (queue.length) queue.shift()(); else resumeVoice();
  }

  // One tap to start: browsers only play sound after the person has touched the page.
  const START = { en: 'Start the conversation', ja: '会話を始める', zh: '开始对话', ko: '대화 시작', uk: 'Почати розмову', es: 'Empezar la conversación', ru: 'Начать разговор' }[browser] || 'Start the conversation';
  const cover = document.createElement('div');
  cover.style.cssText = 'position:fixed;inset:0;z-index:9;display:flex;align-items:center;justify-content:center;background:#05261fe6;padding:24px';
  const go = document.createElement('button');
  go.textContent = '▶  ' + START;
  go.style.cssText = 'font:inherit;font-size:20px;font-weight:800;padding:20px 28px;border-radius:20px;border:0;background:#52e3c1;color:#05261f;width:100%;max-width:360px';
  cover.append(go); document.body.append(cover);
  go.addEventListener('click', () => {
    if ('speechSynthesis' in window && !window.__unlocked) { window.__unlocked = true; speechSynthesis.speak(new SpeechSynthesisUtterance('')); }
    idle();
    if ('mediaSession' in navigator) { try { navigator.mediaSession.metadata = new MediaMetadata({ title: 'Kuroko', artist: 'Live conversation' }); } catch {} }
    keepAwake();
    cover.remove();
  });

  async function say(text) {
    const id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    add({ id, mine: true, orig: text, tr: '…' });
    const r = await viaServer({ text });
    if (r && r.translated) { fill(id, null, r.translated); send({ kind: 'say', id, text, lang: myLang, translated: r.translated }); }
    else send({ kind: 'say', id, text, lang: myLang });
  }

  $('typeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const v = $('typed').value.trim();
    if (!v || !appSeen) return;
    $('typed').value = '';
    say(v);
  });

  select.addEventListener('change', () => {
    myLang = select.value;
    try { localStorage.setItem('kuroko-link-lang', myLang); } catch {}
    send({ kind: 'hello', lang: myLang });
  });

  $('sound').addEventListener('click', () => {
    soundOn = !soundOn;
    $('sound').textContent = soundOn ? '🔊' : '🔇';
    if (!soundOn) stopSpeech();
  });

  function finish() {
    ended = true;
    handsFree = false;
    if (listening) { listening = false; try { rec.stop(); } catch {} }
    try { wakeLock && wakeLock.release(); } catch {}
    setState('', t.ended);
    $('foot').innerHTML = '<div class="ended">' + t.ended + '<br><br><a href="/get?from=link">' + t.get + ' →</a></div>';
    try { ws && ws.close(); } catch {}
  }

  // A hint under the microphone: the phone must stay unlocked for the microphone to work.
  const LOCK = {
    en: 'Keep the screen unlocked: the microphone only works while the screen is on.',
    ja: '画面をロックしないでください。マイクは画面がオンのときだけ使えます。',
    zh: '请不要锁屏：只有屏幕亮着时麦克风才能工作。',
    ko: '화면을 잠그지 마세요. 화면이 켜져 있을 때만 마이크가 작동합니다.',
    uk: 'Не блокуй екран — мікрофон працює тільки з увімкненим екраном.',
    es: 'No bloquees la pantalla: el micrófono solo funciona con la pantalla encendida.',
    ru: 'Не блокируй экран — микрофон работает только при включённом экране.'
  }[browser] || 'Keep the screen unlocked: the microphone only works while the screen is on.';
  const lockHint = document.createElement('div');
  lockHint.textContent = '🔓 ' + LOCK;
  lockHint.style.cssText = 'font-size:13px;color:var(--muted);text-align:center;line-height:1.35';
  mic.insertAdjacentElement('afterend', lockHint);

  // The screen stays on; after a minute without a touch it dims by 20% (a dark layer saves battery on OLED screens).
  const dim = document.createElement('div');
  dim.style.cssText = 'position:fixed;inset:0;z-index:20;background:#000;opacity:0;pointer-events:none;transition:opacity 4s ease';
  document.body.append(dim);
  let dimTimer = null;
  function wake() { dim.style.transition = 'opacity .3s ease'; dim.style.opacity = '0'; clearTimeout(dimTimer); dimTimer = setTimeout(() => { dim.style.transition = 'opacity 4s ease'; dim.style.opacity = '0.2'; }, 60000); }
  ['pointerdown', 'keydown', 'touchstart'].forEach(ev => document.addEventListener(ev, wake, { passive: true }));
  wake();

  window.addEventListener('pagehide', () => send({ kind: 'bye' }));
  connect();
})();
