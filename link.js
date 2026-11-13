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
        if (m.payload && m.payload.status === 'ok') { joined = true; setState(appSeen ? 'ok' : 'wait', appSeen ? t.ok : t.waiting); send({ kind: 'hello', lang: myLang }); }
      }
      if (m.event === 'broadcast' && m.payload && m.payload.payload && m.payload.payload.from === 'app') handle(m.payload.payload);
    };
    ws.onclose = () => { joined = false; clearInterval(heartbeat); if (!ended) { setState('wait', t.lost); setTimeout(connect, 2000); } };
  }

  function handle(msg) {
    if (!appSeen) { appSeen = true; setState('ok', t.ok); mic.disabled = !Recognition; }
    if (msg.kind === 'hello') return;
    if (msg.kind === 'say') {
      add({ id: msg.id, mine: false, orig: msg.text, tr: msg.translated });
      speak(msg.translated);
    }
    if (msg.kind === 'echo') {
      const el = document.querySelector('[data-id="' + CSS.escape(msg.id) + '"] .tr');
      if (el) el.textContent = msg.translated;
    }
    if (msg.kind === 'end') finish();
  }

  function add({ id, mine, orig, tr }) {
    const hint = $('hint'); if (hint) hint.remove();
    const div = document.createElement('div');
    div.className = 'msg' + (mine ? ' mine' : '');
    div.dataset.id = id;
    const label = document.createElement('small'); label.textContent = mine ? t.you : t.them;
    const o = document.createElement('div'); o.className = 'orig'; o.textContent = orig;
    const r = document.createElement('div'); r.className = 'tr'; r.textContent = tr || '…';
    div.append(label, o, r);
    if (!mine) { const b = document.createElement('button'); b.textContent = t.replay; b.onclick = () => speak(r.textContent, true); div.append(b); }
    log.append(div);
    log.scrollTop = log.scrollHeight;
  }

  // Voice out.
  function speak(text, force) {
    if (!text || !('speechSynthesis' in window) || (!soundOn && !force)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANGS[myLang][1];
    const voice = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith(myLang));
    if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }

  // Voice in.
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null, heard = '', listening = false;
  if (!Recognition) { mic.style.display = 'none'; live.textContent = t.noMic; }

  function startListening() {
    if (!Recognition || listening) return;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    rec = new Recognition();
    rec.lang = LANGS[myLang][1];
    rec.interimResults = true;
    rec.continuous = false;
    heard = '';
    rec.onresult = (e) => {
      let text = '';
      for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript;
      heard = text; live.textContent = text;
    };
    rec.onend = () => { listening = false; mic.classList.remove('on'); mic.textContent = t.mic; live.textContent = ''; if (heard.trim()) say(heard.trim()); };
    rec.onerror = () => {};
    listening = true; mic.classList.add('on'); mic.textContent = t.micOn;
    rec.start();
  }

  mic.addEventListener('click', () => {
    // iOS: the first tap also unlocks the voice output.
    if ('speechSynthesis' in window && !window.__unlocked) { window.__unlocked = true; speechSynthesis.speak(new SpeechSynthesisUtterance('')); }
    if (listening) rec.stop(); else startListening();
  });

  function say(text) {
    const id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    add({ id, mine: true, orig: text, tr: '…' });
    send({ kind: 'say', id, text, lang: myLang });
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
    if (!soundOn && 'speechSynthesis' in window) speechSynthesis.cancel();
  });

  function finish() {
    ended = true;
    if (rec && listening) rec.stop();
    setState('', t.ended);
    $('foot').innerHTML = '<div class="ended">' + t.ended + '<br><br><a href="/get?from=link">' + t.get + ' →</a></div>';
    try { ws && ws.close(); } catch {}
  }

  window.addEventListener('pagehide', () => send({ kind: 'bye' }));
  connect();
})();
