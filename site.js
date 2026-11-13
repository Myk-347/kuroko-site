const languages = ["ja", "en", "zh", "ko", "uk", "es", "ru"];
const langNames = { ja: "日本語", en: "English", zh: "中文", ko: "한국어", uk: "Українська", es: "Español", ru: "Русский" };
const translations = {
  ja: {
    homeTitle: "会話を支える、見えない相棒",
    homeLead:
      "自分の言葉で話し、相手の言葉で伝わる。KurokoはAirPodsで会話をリアルタイム翻訳し、次の一言を提案し、実際の会話から学ぶお手伝いをします。",
    download: "ダウンロード",
    translateLine: "耳元のライブ通訳。",
    speakLine: "Senpaiが次の言葉を提案し、自分で話す力を育てます。",
    clearLine: "近日公開",
    how: "使い方",
    story: "名前の由来",
    get: "iPhoneでKurokoを使う",
    tag: "会話に寄り添う、さりげない相棒",
    features: "会話のための3つの機能",
    featuresSub: "翻訳だけでなく、会話する力も身につけよう。",
    stepsSub: "いつもの会話のように自然に。",
    languages: "あなたの言語で話し、相手の言語で聞く",
    storyTitle: "舞台を支える、見えない存在。",
    storyText:
      "歌舞伎で黒子は、黒い衣装を着た舞台係です。誰も見ないことにしているけれど、彼らなしでは舞台は成り立ちません。Kurokoも同じように、会話の中でそっとあなたを支えます。",
    scan: "iPhoneのカメラでスキャン",
    available: "iPhone向けアプリ",
    interpreter: "耳元のライブ通訳",
    handsfree: "話すだけ。Kurokoが話者を判別し、両方向にハンズフリーで翻訳します。",
    modes: "会話に合わせて選べる3つのモード",
    modesSub: "一人で、AirPodを分け合って、またはもうすぐ自分のスマホから。",
    speakTitle: "翻訳するだけじゃない。話そう。",
    speakLead: "Senpaiが次の言葉をそっと提案。自分で話し、実際の会話から学びましょう。",
    clearTitle: "伝わるように話し、本当の意味を理解する。",
    clearLead: "言葉の背景にあるトーンや文化を理解し、安心して伝え合うために。",
    soon: "近日公開",
    privacy: "プライバシー",
    support: "サポート",
    terms: "利用規約",
    supportTitle: "サポート",
    privacyTitle: "プライバシーポリシー",
    termsTitle: "利用規約",
    comingTitle: "App Storeで近日公開",
    comingText: "Kurokoのリリース情報をお届けします。",
    email: "メールアドレス",
    notify: "リリースを知らせる",
    consent: "リリースのお知らせをメールで受け取ることに同意します。",
    sent: "ありがとうございます。リリース時にお知らせします。",
    step1: "AirPodsをつける",
    step1sub: "いつものイヤホンをつけるだけ。",
    step2: "自分の言語で話す",
    step2sub: "ボタンを押さず、自然に話そう。",
    step3: "相手には相手の言語で",
    step3sub: "相手も自分の言語で返答できます。",
    solo: "あなたはAirPods、相手はスマホに話しかけます。",
    split: "AirPodをひとつずつ。お互い自分の言語だけが聞こえます。",
    link: "コードをスキャンしてスマホから参加。インストール不要。",
    talk: "耳で相手の言葉を聞き、3つの返事からひとつ選んで声に出す。",
    learn: "実際の会話が、自分だけの教材になります。",
    practice: "本番の前に練習。デート、面接、大切な話し合いも。",
  },
  en: {
    homeTitle: "Your invisible helper in any conversation",
    homeLead:
      "Speak your language. Be understood in theirs. Kuroko translates live in your AirPods, suggests what to say, and helps you learn from every real conversation.",
    download: "Download",
    translateLine: "A live interpreter in your ear.",
    speakLine: "Senpai tells you what to say next — and helps you say it yourself.",
    clearLine: "Coming soon.",
    how: "How it works",
    story: "The story behind the name",
    get: "Get Kuroko for iPhone",
    tag: "A quiet companion for better conversations",
    features: "Three ways to find your voice",
    featuresSub: "Go beyond translating. Build the confidence to connect.",
    stepsSub: "Conversation, made natural from the very first hello.",
    languages: "Your language in. Their language out.",
    storyTitle: "The quiet helper behind every great performance.",
    storyText:
      "In kabuki theatre, kuroko are stagehands dressed in black. Everyone agrees not to see them — yet the show can’t go on without them. Kuroko is that quiet help, right there in your conversation.",
    scan: "Scan with your iPhone camera",
    available: "Available for iPhone",
    interpreter: "A live interpreter in your ear",
    handsfree: "Just talk. Kuroko knows who is speaking and translates both ways — hands-free.",
    modes: "One interpreter. Three ways to connect.",
    modesSub: "Pick the setup that fits the moment.",
    speakTitle: "Don’t just translate. Speak.",
    speakLead: "Senpai whispers what to say next — you say it yourself, and learn from every real conversation.",
    clearTitle: "Say it clearly. Understand what they really mean.",
    clearLead: "Catch the tone, context and meaning behind the words — so you can connect with confidence.",
    soon: "Coming soon",
    privacy: "Privacy",
    support: "Support",
    terms: "Terms",
    supportTitle: "Support",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Use",
    comingTitle: "Coming soon to the App Store",
    comingText: "Get a note when Kuroko is ready to download.",
    email: "Email address",
    notify: "Notify me",
    consent: "I agree to receive an email when Kuroko launches.",
    sent: "Thanks — we’ll let you know when Kuroko launches.",
    step1: "Put in your AirPods",
    step1sub: "Your favorite earbuds are all you need.",
    step2: "Speak your language",
    step2sub: "Just talk naturally. No buttons to press.",
    step3: "They hear theirs",
    step3sub: "They can reply in their own language, too.",
    solo: "You wear AirPods; they speak to your phone.",
    split: "One AirPod each. Each of you hears only your own language.",
    link: "They scan a code and join from their own phone — nothing to install.",
    talk: "Hear them in your ear. See three ways to answer. Read one aloud.",
    learn: "Your own conversations become your textbook.",
    practice: "Rehearse before it’s real — a date, a job interview, a difficult talk.",
  },
  zh: {
    homeTitle: "每一次对话，都有 Kuroko 默默相助",
    homeLead: "说你的语言，让对方听懂。Kuroko 通过 AirPods 实时翻译，提示你该说什么，也帮你从每一次真实对话中学习。",
    download: "下载",
    translateLine: "耳边的实时口译。",
    speakLine: "Senpai 提示下一句，也帮你学会自己表达。",
    clearLine: "即将推出。",
    how: "使用方法",
    story: "名字的由来",
    get: "获取 iPhone 版 Kuroko",
    tag: "对话中的贴心搭档",
    features: "让沟通更进一步",
    featuresSub: "不止是翻译，更帮你建立开口交流的自信。",
    stepsSub: "像日常对话一样自然。",
    languages: "用你的语言说，用对方的语言听。",
    storyTitle: "幕后的无声帮手。",
    storyText:
      "在歌舞伎剧场中，黑子身着黑衣，在幕后默默协助表演。观众仿佛看不见他们，但没有他们，演出就无法继续。Kuroko 也一样，悄悄陪伴在你的每一次对话中。",
    scan: "用 iPhone 相机扫描",
    available: "适用于 iPhone",
    interpreter: "耳边的实时口译",
    handsfree: "只需开口。Kuroko 自动识别说话者，双向免手动翻译。",
    modes: "三种模式，适合不同的对话",
    modesSub: "选择适合当下场景的交流方式。",
    speakTitle: "别只做翻译，也要开口说。",
    speakLead: "Senpai 悄悄提示下一句，你亲自表达，并从真实对话中不断学习。",
    clearTitle: "清楚表达，也听懂弦外之音。",
    clearLead: "理解言语背后的语气与文化，让每一次交流都更安心。",
    soon: "即将推出",
    privacy: "隐私",
    support: "支持",
    terms: "条款",
    supportTitle: "支持",
    privacyTitle: "隐私政策",
    termsTitle: "使用条款",
    comingTitle: "即将在 App Store 上架",
    comingText: "Kuroko 准备好后，我们会发送邮件通知。",
    email: "电子邮箱",
    notify: "通知我",
    consent: "我同意接收 Kuroko 上线通知邮件。",
    sent: "感谢关注！Kuroko 上线时会通知你。",
    step1: "戴上 AirPods",
    step1sub: "只需使用你常用的耳机。",
    step2: "用自己的语言说话",
    step2sub: "自然交谈，无需按按钮。",
    step3: "对方听到自己的语言",
    step3sub: "对方也可以用自己的语言回复。",
    solo: "你戴 AirPods，对方对着你的手机说话。",
    split: "一人一只 AirPod，各自只听到自己的语言。",
    link: "对方扫码即可通过自己的手机加入，无需安装。",
    talk: "在耳边听懂对方，看到三种回复方式，选一句说出来。",
    learn: "每一次真实对话，都是你的专属教材。",
    practice: "提前练习重要对话：约会、面试或难以启齿的话题。",
  },
  ko: {
    homeTitle: "어떤 대화든 곁에서 조용히 돕는 친구",
    homeLead:
      "내 언어로 말하고 상대의 언어로 전달하세요. Kuroko는 AirPods으로 실시간 통역하고, 다음에 할 말을 제안하며, 실제 대화로 배우도록 도와줍니다.",
    download: "다운로드",
    translateLine: "귓속의 실시간 통역사.",
    speakLine: "Senpai가 다음 말을 제안하고 직접 말하도록 도와줘요.",
    clearLine: "출시 예정.",
    how: "사용 방법",
    story: "이름에 담긴 이야기",
    get: "iPhone용 Kuroko 받기",
    tag: "대화를 위한 조용한 동반자",
    features: "대화를 돕는 세 가지 기능",
    featuresSub: "번역을 넘어, 직접 대화를 이어가는 자신감을 키워요.",
    stepsSub: "처음 인사부터 자연스럽게.",
    languages: "내 언어로 말하고, 상대의 언어로 들어요.",
    storyTitle: "무대 뒤에서 묵묵히 돕는 존재.",
    storyText:
      "가부키 극장의 쿠로코는 검은 옷을 입은 무대 보조자예요. 관객은 그들을 보지 않는 것으로 여기지만, 그들 없이는 공연이 이어질 수 없어요. Kuroko도 대화 속에서 조용히 당신을 도와요.",
    scan: "iPhone 카메라로 스캔",
    available: "iPhone에서 사용 가능",
    interpreter: "귓속의 실시간 통역사",
    handsfree: "그냥 말하세요. Kuroko가 화자를 알아채고 양방향으로 핸즈프리 번역해요.",
    modes: "상황에 맞는 세 가지 대화 모드",
    modesSub: "지금 필요한 방식으로 편하게 대화하세요.",
    speakTitle: "번역만 하지 말고, 직접 말해요.",
    speakLead: "Senpai가 다음 말을 속삭이면 직접 말해 보세요. 실제 대화로 배울 수 있어요.",
    clearTitle: "분명하게 말하고, 진짜 의미를 이해해요.",
    clearLead: "말투와 문화적 맥락까지 파악해 더 편안하게 소통해요.",
    soon: "출시 예정",
    privacy: "개인정보 처리방침",
    support: "지원",
    terms: "이용 약관",
    supportTitle: "지원",
    privacyTitle: "개인정보 처리방침",
    termsTitle: "이용 약관",
    comingTitle: "App Store 출시 예정",
    comingText: "Kuroko를 다운로드할 수 있게 되면 알려드릴게요.",
    email: "이메일 주소",
    notify: "알림 받기",
    consent: "Kuroko 출시 알림 이메일을 받는 데 동의합니다.",
    sent: "감사합니다. 출시 소식을 전해드릴게요.",
    step1: "AirPods 착용하기",
    step1sub: "평소 쓰는 이어폰이면 충분해요.",
    step2: "내 언어로 말하기",
    step2sub: "버튼을 누르지 않고 자연스럽게 말해요.",
    step3: "상대는 자기 언어로 들어요",
    step3sub: "상대도 자기 언어로 답할 수 있어요.",
    solo: "나는 AirPods, 상대는 휴대폰에 말해요.",
    split: "AirPod를 하나씩. 각자 자기 언어만 들려요.",
    link: "상대가 코드를 스캔해 휴대폰으로 참여해요. 설치는 필요 없어요.",
    talk: "귓속으로 듣고, 세 가지 답변 중 하나를 직접 말해요.",
    learn: "실제 대화가 나만의 교재가 돼요.",
    practice: "데이트, 면접, 중요한 대화를 미리 연습해요.",
  },
  uk: {
    homeTitle: "Твій непомітний помічник у кожній розмові",
    homeLead:
      "Говори своєю мовою. Будь зрозумілим для співрозмовника. Kuroko перекладає наживо в AirPods, підказує, що сказати, і допомагає вчитися з кожної реальної розмови.",
    download: "Завантажити",
    translateLine: "Живий перекладач у твоєму вусі.",
    speakLine: "Senpai підказує наступну фразу й допомагає заговорити самому.",
    clearLine: "Незабаром.",
    how: "Як це працює",
    story: "Історія назви",
    get: "Завантажити Kuroko для iPhone",
    tag: "Тихий помічник у розмові",
    features: "Три способи знайти спільну мову",
    featuresSub: "Не лише перекладай — набувай упевненості говорити.",
    stepsSub: "Спілкуйся природно від першого привітання.",
    languages: "Говори своєю мовою. Слухай мовою співрозмовника.",
    storyTitle: "Непомітний помічник за лаштунками.",
    storyText:
      "У театрі кабукі куроко — помічники сцени, одягнені в чорне. Глядачі ніби не помічають їх, та без них вистава не відбудеться. Kuroko так само тихо допомагає тобі просто під час розмови.",
    scan: "Скануй камерою iPhone",
    available: "Доступно для iPhone",
    interpreter: "Живий перекладач у твоєму вусі",
    handsfree: "Просто говори. Kuroko визначить мовця і перекладатиме в обидва боки без рук.",
    modes: "Три режими для різних розмов",
    modesSub: "Обирай, як зручніше саме зараз.",
    speakTitle: "Не просто перекладай. Говори.",
    speakLead: "Senpai підказує, що сказати, а ти говориш сам і вчишся на справжніх розмовах.",
    clearTitle: "Говори зрозуміло. Розумій справжній зміст.",
    clearLead: "Вловлюй тон, контекст і підтекст — для впевненого спілкування.",
    soon: "Незабаром",
    privacy: "Приватність",
    support: "Підтримка",
    terms: "Умови",
    supportTitle: "Підтримка",
    privacyTitle: "Політика конфіденційності",
    termsTitle: "Умови використання",
    comingTitle: "Незабаром в App Store",
    comingText: "Напишемо, коли Kuroko можна буде завантажити.",
    email: "Електронна пошта",
    notify: "Повідомити мене",
    consent: "Погоджуюсь отримати лист про запуск Kuroko.",
    sent: "Дякуємо! Повідомимо, коли Kuroko запуститься.",
    step1: "Одягни AirPods",
    step1sub: "Підійдуть твої звичні навушники.",
    step2: "Говори своєю мовою",
    step2sub: "Говори природно — без натискання кнопок.",
    step3: "Співрозмовник чує свою",
    step3sub: "Він також може відповісти своєю мовою.",
    solo: "Ти в AirPods, співрозмовник говорить у телефон.",
    split: "По одному AirPod кожному. Кожен чує лише свою мову.",
    link: "Співрозмовник сканує код і приєднується зі свого телефона — без встановлення.",
    talk: "Чуєш співрозмовника у вусі, бачиш три варіанти відповіді й читаєш один уголос.",
    learn: "Твої розмови стають твоїм підручником.",
    practice: "Потренуйся перед побаченням, співбесідою чи складною розмовою.",
  },
  es: {
    homeTitle: "Tu ayudante invisible en cada conversación",
    homeLead:
      "Habla en tu idioma. Hazte entender en el suyo. Kuroko traduce en directo en tus AirPods, te sugiere qué decir y te ayuda a aprender de cada conversación real.",
    download: "Descargar",
    translateLine: "Un intérprete en directo en tu oído.",
    speakLine: "Senpai te sugiere qué decir y te ayuda a expresarte.",
    clearLine: "Muy pronto.",
    how: "Cómo funciona",
    story: "El origen del nombre",
    get: "Descargar Kuroko para iPhone",
    tag: "Un compañero discreto para conversar",
    features: "Tres formas de conectar",
    featuresSub: "Más que traducir: gana confianza para conversar.",
    stepsSub: "Una conversación natural desde el primer saludo.",
    languages: "Habla tu idioma. Escucha el suyo.",
    storyTitle: "La ayuda discreta entre bambalinas.",
    storyText:
      "En el teatro kabuki, los kuroko son ayudantes vestidos de negro. El público hace como si no los viera, pero sin ellos la función no podría continuar. Kuroko te ayuda discretamente en cada conversación.",
    scan: "Escanea con la cámara del iPhone",
    available: "Disponible para iPhone",
    interpreter: "Un intérprete en directo en tu oído",
    handsfree: "Solo habla. Kuroko sabe quién habla y traduce en ambos sentidos, sin usar las manos.",
    modes: "Tres modos para cada conversación",
    modesSub: "Elige la forma que mejor se adapte al momento.",
    speakTitle: "No te limites a traducir. Habla.",
    speakLead: "Senpai te susurra qué decir; tú lo dices y aprendes de cada conversación real.",
    clearTitle: "Exprésate con claridad. Entiende lo que realmente quieren decir.",
    clearLead: "Comprende el tono, el contexto y la cultura detrás de las palabras.",
    soon: "Muy pronto",
    privacy: "Privacidad",
    support: "Ayuda",
    terms: "Condiciones",
    supportTitle: "Ayuda",
    privacyTitle: "Política de privacidad",
    termsTitle: "Condiciones de uso",
    comingTitle: "Muy pronto en App Store",
    comingText: "Te avisaremos cuando puedas descargar Kuroko.",
    email: "Correo electrónico",
    notify: "Avisadme",
    consent: "Acepto recibir un correo cuando Kuroko esté disponible.",
    sent: "Gracias. Te avisaremos cuando se lance Kuroko.",
    step1: "Ponte los AirPods",
    step1sub: "Solo necesitas tus auriculares de siempre.",
    step2: "Habla en tu idioma",
    step2sub: "Habla con naturalidad, sin pulsar botones.",
    step3: "La otra persona oye su idioma",
    step3sub: "También puede responder en su propio idioma.",
    solo: "Tú llevas AirPods; la otra persona habla al teléfono.",
    split: "Un AirPod para cada persona. Cada una oye su idioma.",
    link: "Escanea un código y únete desde tu móvil; sin instalar nada.",
    talk: "Escúchale en el oído. Elige una de tres respuestas y léela en voz alta.",
    learn: "Tus conversaciones se convierten en tu libro de texto.",
    practice: "Ensaya antes de una cita, una entrevista o una conversación difícil.",
  },
  ru: {
    homeTitle: "Незаметный помощник в каждом разговоре",
    homeLead:
      "Говори на своём языке — тебя поймут на своём. Kuroko переводит в AirPods, подсказывает, что ответить, и помогает учиться на каждом настоящем разговоре.",
    download: "Скачать",
    translateLine: "Переводчик в твоём ухе.",
    speakLine: "Senpai подсказывает ответ и помогает заговорить самому.",
    clearLine: "Скоро.",
    how: "Как это работает",
    story: "История названия",
    get: "Скачать Kuroko для iPhone",
    tag: "Тихий помощник в разговоре",
    features: "Три способа найти общий язык",
    featuresSub: "Не только переводи — учись общаться увереннее.",
    stepsSub: "Естественное общение с первой же встречи.",
    languages: "Говори на своём. Слушай на языке собеседника.",
    storyTitle: "Незаметный помощник за кулисами.",
    storyText:
      "В театре кабуки куроко — помощники сцены в чёрном. Зрители словно не замечают их, но без них представление не состоится. Kuroko так же незаметно помогает тебе прямо во время разговора.",
    scan: "Сканируй камерой iPhone",
    available: "Для iPhone",
    interpreter: "Переводчик в твоём ухе",
    handsfree: "Просто говори. Kuroko определит говорящего и переведёт в обе стороны без нажатий.",
    modes: "Три режима для разных разговоров",
    modesSub: "Выбери удобный способ общения.",
    speakTitle: "Не просто переводи. Говори.",
    speakLead: "Senpai подскажет, что сказать, а ты произнесёшь фразу сам и научишься на реальных беседах.",
    clearTitle: "Говори понятно. Понимай настоящий смысл.",
    clearLead: "Улавливай тон, контекст и подтекст — для уверенного общения.",
    soon: "Скоро",
    privacy: "Конфиденциальность",
    support: "Поддержка",
    terms: "Условия",
    supportTitle: "Поддержка",
    privacyTitle: "Политика конфиденциальности",
    termsTitle: "Условия использования",
    comingTitle: "Скоро в App Store",
    comingText: "Напишем, когда Kuroko появится для скачивания.",
    email: "Электронная почта",
    notify: "Сообщить мне",
    consent: "Согласен получать письмо о запуске Kuroko.",
    sent: "Спасибо! Сообщим, когда Kuroko запустится.",
    step1: "Надень AirPods",
    step1sub: "Подойдут твои обычные наушники.",
    step2: "Говори на своём языке",
    step2sub: "Общайся естественно, без кнопок.",
    step3: "Собеседник слышит свой",
    step3sub: "Он тоже может ответить на своём языке.",
    solo: "Ты в AirPods, собеседник говорит в телефон.",
    split: "По одному AirPod каждому. Каждый слышит свой язык.",
    link: "Сканирует код и подключается со своего телефона — установка не нужна.",
    talk: "Слышишь собеседника в ухе, видишь три ответа и читаешь один вслух.",
    learn: "Твои разговоры становятся учебником.",
    practice: "Потренируйся перед свиданием, собеседованием или сложным разговором.",
  },
};
// Strings that were hard-coded in English in the first version.
const extra = {
  en: {
    noteLang: "Japanese → English", eyeReal: "Made for real life", eyeSimple: "Simple as a conversation", eyeBorders: "Good conversations have no borders",
    forIphone: "Kuroko for iPhone", nextConv: "Your next conversation starts here.", learnMore: "Learn more",
    ariaHome: "Kuroko home", ariaFeatures: "Features", ariaLang: "Choose language", ariaBadge: "Download on the App Store",
    altPhone: "Kuroko translates a conversation live on an iPhone", altTheatre: "A quiet kuroko helper behind a kabuki theatre curtain", altQr: "QR code to download Kuroko for iPhone",
    trEyebrow: "Translate · Live interpretation", demoQ: "Where is the station?", demoA: "Go straight, then turn left.",
    jp: "Japanese", mine: "English", theySaid: "They said", youHear: "You hear", theyReply: "They reply", inEar: "Translation in your ear",
    eyeKeep: "Made to keep talking", b1t: "Hands-free", b1s: "No push-to-talk. Just speak — Kuroko knows who is talking.",
    b2t: "Offline too", b2s: "Best quality online. Offline translation steps in when the signal drops.",
    b3t: "Natural Japanese", b3s: "Polite, casual or keigo, depending on who you’re speaking with.",
    b4t: "Conversation history", b4s: "Read your conversations again with date and place. Audio is never stored.",
    eyeWay: "Your conversation, your way", q1: "“You wear AirPods, they talk to your phone.”", q2: "“One AirPod each. Each hears only their language.”", q3: "“Scan a code and join from your phone.”",
    eyeLangs: "Languages",
    spEyebrow: "Speak · Conversation coach", sayIn: "Say it in Japanese", means: "Means", meaningDemo: "Nice to meet you, I’m Mykola.",
    eyeGrow: "Three ways to grow", growTitle: "Talk. Learn. Practice.", growSub: "Turn real conversations into confidence and lasting knowledge.",
    talkQ: "Live conversation · your turn", learnQ: "Review after 1, 3, 7, 16 and 35 days", practiceQ: "12 situations · gentle corrections",
    eyeLevel: "Made for your level", levelTitle: "Find your own voice", levelSub: "The conversation adapts to your level, situation and style.",
    beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced", polite: "Polite", casual: "Casual", keigo: "Keigo", koreanPh: "Korean romanization",
    idiom: "“I’ll think about it.”", literal: "Literal translation", gentleNo: "A gentle way to say “no” in this context.", reallyMean: "What they may really mean",
    eyeMore: "A little more understanding", clear2Title: "Understand more than words",
    clear2Text: "Clear Talk helps you understand what sits behind a phrase — tone, politeness and cultural context. It can also help you be understood when every detail matters.",
    supportLead: "Need a hand with Kuroko? Write to us and we’ll be glad to help.", faq: "Frequently asked questions",
    f1q: "Do I need AirPods?", f1a: "AirPods let you hear translations privately. Without them Kuroko uses the iPhone microphone and speaker.",
    f2q: "Does Kuroko save audio?", f2a: "No. Audio is never stored. Conversation text, date and place are kept only on your iPhone, and you can delete them.",
    f3q: "Which languages can I use?", f3a: "Japanese, English, Chinese, Korean, Spanish, French, German, Polish, Ukrainian and Russian.",
    linkSource: "Link source:", consentNeed: "Please agree to receive the launch email.", submitFail: "Could not send right now. Please try again later.",
    notConnected: "Thanks! Sign-up opens very soon — please check back.", legalNote: "",
  },
  uk: {
    noteLang: "Японська → Українська", eyeReal: "Для справжнього життя", eyeSimple: "Просто, як розмова", eyeBorders: "У хорошої розмови немає кордонів",
    forIphone: "Kuroko для iPhone", nextConv: "Твоя наступна розмова починається тут.", learnMore: "Детальніше",
    ariaHome: "Kuroko — головна", ariaFeatures: "Функції", ariaLang: "Вибрати мову", ariaBadge: "Завантажити в App Store",
    altPhone: "Kuroko перекладає розмову наживо на iPhone", altTheatre: "Тихий помічник куроко за завісою театру кабукі", altQr: "QR-код для завантаження Kuroko на iPhone",
    trEyebrow: "Translate · Живий переклад", demoQ: "Де вокзал?", demoA: "Ідіть прямо, потім ліворуч.",
    jp: "Японська", mine: "Українська", theySaid: "Співрозмовник сказав", youHear: "Ти чуєш", theyReply: "Відповідь", inEar: "Переклад у вусі",
    eyeKeep: "Щоб розмова не зупинялась", b1t: "Без рук", b1s: "Не треба натискати кнопку. Просто говори — Kuroko знає, хто говорить.",
    b2t: "Офлайн теж", b2s: "Онлайн — найкраща якість. Без мережі Kuroko перемкнеться на офлайн-переклад.",
    b3t: "Природна японська", b3s: "Ввічливий, розмовний або кейґо — залежно від співрозмовника.",
    b4t: "Історія розмов", b4s: "Перечитуй розмови з датою та місцем. Звук не зберігається.",
    eyeWay: "Твоя розмова — твій спосіб", q1: "«Ти в AirPods, співрозмовник говорить у телефон.»", q2: "«По одному AirPod. Кожен чує лише свою мову.»", q3: "«Скануй код і приєднуйся зі свого телефона.»",
    eyeLangs: "Мови",
    spEyebrow: "Speak · Тренер розмови", sayIn: "Скажи японською", means: "Означає", meaningDemo: "Приємно познайомитися, я Микола.",
    eyeGrow: "Три способи рости", growTitle: "Говори. Вчися. Тренуйся.", growSub: "Справжні розмови перетворюються на впевненість і знання.",
    talkQ: "Жива розмова · твоя черга", learnQ: "Повторення через 1, 3, 7, 16 і 35 днів", practiceQ: "12 ситуацій · м'які виправлення",
    eyeLevel: "Під твій рівень", levelTitle: "Твій темп, твій стиль", levelSub: "Розмова підлаштовується під твій рівень, ситуацію і стиль.",
    beginner: "Початковий", intermediate: "Середній", advanced: "Просунутий", polite: "Ввічливий", casual: "Розмовний", keigo: "Кейґо", koreanPh: "Корейська латиницею",
    idiom: "«Я подумаю.»", literal: "Дослівний переклад", gentleNo: "М'який спосіб сказати «ні» в цій ситуації.", reallyMean: "Що насправді мають на увазі",
    eyeMore: "Трохи більше розуміння", clear2Title: "Розумій більше, ніж слова",
    clear2Text: "Clear Talk допоможе зрозуміти, що стоїть за фразою — тон, ввічливість і культурний контекст. А ще підкаже, як бути зрозумілим самому, коли важлива кожна деталь.",
    supportLead: "Потрібна допомога з Kuroko? Напиши нам — ми радо допоможемо.", faq: "Часті запитання",
    f1q: "Чи потрібні AirPods?", f1a: "З AirPods переклад чуєш лише ти. Без них Kuroko працює через мікрофон і динамік iPhone.",
    f2q: "Чи зберігається звук?", f2a: "Ні, звук ніколи не зберігається. Текст розмови, дата й місце лишаються тільки на твоєму iPhone, і їх можна видалити.",
    f3q: "Які мови підтримуються?", f3a: "Японська, англійська, китайська, корейська, іспанська, французька, німецька, польська, українська та російська.",
    linkSource: "Звідки перехід:", consentNeed: "Потрібно погодитися на отримання листа.", submitFail: "Не вдалося надіслати. Спробуй пізніше.",
    notConnected: "Дякуємо! Підписка відкриється зовсім скоро — заглянь пізніше.", legalNote: "Цей документ наведено англійською мовою.",
  },
  ru: {
    noteLang: "Японский → Русский", eyeReal: "Для настоящей жизни", eyeSimple: "Просто, как разговор", eyeBorders: "У хорошего разговора нет границ",
    forIphone: "Kuroko для iPhone", nextConv: "Твой следующий разговор начинается здесь.", learnMore: "Подробнее",
    ariaHome: "Kuroko — главная", ariaFeatures: "Функции", ariaLang: "Выбрать язык", ariaBadge: "Загрузить в App Store",
    altPhone: "Kuroko переводит разговор вживую на iPhone", altTheatre: "Тихий помощник куроко за занавесом театра кабуки", altQr: "QR-код для загрузки Kuroko на iPhone",
    trEyebrow: "Translate · Живой перевод", demoQ: "Где вокзал?", demoA: "Идите прямо, потом налево.",
    jp: "Японский", mine: "Русский", theySaid: "Собеседник сказал", youHear: "Ты слышишь", theyReply: "Ответ", inEar: "Перевод в ухе",
    eyeKeep: "Чтобы разговор не останавливался", b1t: "Без рук", b1s: "Не нужно нажимать кнопку. Просто говори — Kuroko знает, кто говорит.",
    b2t: "Офлайн тоже", b2s: "Онлайн — лучшее качество. Без сети Kuroko переключится на офлайн-перевод.",
    b3t: "Естественный японский", b3s: "Вежливый, разговорный или кэйго — в зависимости от собеседника.",
    b4t: "История разговоров", b4s: "Перечитывай разговоры с датой и местом. Звук не сохраняется.",
    eyeWay: "Твой разговор — твой способ", q1: "«Ты в AirPods, собеседник говорит в телефон.»", q2: "«По одному AirPod. Каждый слышит только свой язык.»", q3: "«Сканируй код и присоединяйся со своего телефона.»",
    eyeLangs: "Языки",
    spEyebrow: "Speak · Тренер разговора", sayIn: "Скажи по-японски", means: "Означает", meaningDemo: "Приятно познакомиться, я Николай.",
    eyeGrow: "Три способа расти", growTitle: "Говори. Учись. Тренируйся.", growSub: "Настоящие разговоры превращаются в уверенность и знания.",
    talkQ: "Живой разговор · твоя очередь", learnQ: "Повторение через 1, 3, 7, 16 и 35 дней", practiceQ: "12 ситуаций · мягкие исправления",
    eyeLevel: "Под твой уровень", levelTitle: "Твой темп, твой стиль", levelSub: "Разговор подстраивается под твой уровень, ситуацию и стиль.",
    beginner: "Начальный", intermediate: "Средний", advanced: "Продвинутый", polite: "Вежливый", casual: "Разговорный", keigo: "Кэйго", koreanPh: "Корейский латиницей",
    idiom: "«Я подумаю.»", literal: "Дословный перевод", gentleNo: "Мягкий способ сказать «нет» в этой ситуации.", reallyMean: "Что на самом деле имеют в виду",
    eyeMore: "Чуть больше понимания", clear2Title: "Понимай больше, чем слова",
    clear2Text: "Clear Talk поможет понять, что стоит за фразой — тон, вежливость и культурный контекст. А ещё подскажет, как быть понятым самому, когда важна каждая деталь.",
    supportLead: "Нужна помощь с Kuroko? Напиши нам — мы с радостью поможем.", faq: "Частые вопросы",
    f1q: "Нужны ли AirPods?", f1a: "С AirPods перевод слышишь только ты. Без них Kuroko работает через микрофон и динамик iPhone.",
    f2q: "Сохраняется ли звук?", f2a: "Нет, звук никогда не сохраняется. Текст разговора, дата и место остаются только на твоём iPhone, и их можно удалить.",
    f3q: "Какие языки поддерживаются?", f3a: "Японский, английский, китайский, корейский, испанский, французский, немецкий, польский, украинский и русский.",
    linkSource: "Откуда переход:", consentNeed: "Нужно согласиться на получение письма.", submitFail: "Не удалось отправить. Попробуй позже.",
    notConnected: "Спасибо! Подписка откроется совсем скоро — загляни позже.", legalNote: "Этот документ приведён на английском языке.",
  },
  ja: {
    noteLang: "日本語 → 英語", eyeReal: "リアルな毎日のために", eyeSimple: "会話のようにシンプル", eyeBorders: "いい会話に国境はない",
    forIphone: "iPhone版 Kuroko", nextConv: "次の会話は、ここから始まります。", learnMore: "詳しく見る",
    ariaHome: "Kuroko ホーム", ariaFeatures: "機能", ariaLang: "言語を選択", ariaBadge: "App Storeからダウンロード",
    altPhone: "iPhoneで会話をリアルタイム翻訳するKuroko", altTheatre: "歌舞伎の幕の後ろに控える黒子", altQr: "iPhone版KurokoをダウンロードするQRコード",
    trEyebrow: "Translate · ライブ通訳", demoQ: "Where is the station?", demoA: "Go straight, then turn left.",
    jp: "日本語", mine: "英語", theySaid: "相手の発言", youHear: "あなたが聞く", theyReply: "相手の返答", inEar: "耳元に翻訳",
    eyeKeep: "会話を止めないために", b1t: "ハンズフリー", b1s: "ボタン操作は不要。話すだけで、Kurokoが話し手を判別します。",
    b2t: "オフラインでも", b2s: "オンラインなら最高品質。電波がなくてもオフライン翻訳に切り替わります。",
    b3t: "自然な日本語", b3s: "相手に合わせて、丁寧語・タメ口・敬語を使い分けます。",
    b4t: "会話の履歴", b4s: "日時と場所つきで会話を読み返せます。音声は保存しません。",
    eyeWay: "あなたらしい会話のかたち", q1: "「あなたはAirPods、相手はスマホに話す。」", q2: "「AirPodをひとつずつ。お互い自分の言語だけを聞く。」", q3: "「コードを読み取って、自分のスマホから参加。」",
    eyeLangs: "対応言語",
    spEyebrow: "Speak · 会話コーチ", sayIn: "日本語で言うと", means: "意味", meaningDemo: "Nice to meet you, I’m Mykola.",
    eyeGrow: "3つの成長のかたち", growTitle: "話す。学ぶ。練習する。", growSub: "実際の会話が、自信と身につく知識に変わります。",
    talkQ: "ライブ会話 · あなたの番", learnQ: "1・3・7・16・35日後に復習", practiceQ: "12のシーン · やさしい添削",
    eyeLevel: "あなたのレベルに合わせて", levelTitle: "自分らしい話し方を", levelSub: "会話はレベル・場面・スタイルに合わせて変わります。",
    beginner: "初級", intermediate: "中級", advanced: "上級", polite: "丁寧", casual: "カジュアル", keigo: "敬語", koreanPh: "韓国語ローマ字",
    idiom: "“I’ll think about it.”", literal: "直訳", gentleNo: "この場面では、やんわりとした「いいえ」です。", reallyMean: "本当の意味",
    eyeMore: "もう少し深い理解を", clear2Title: "言葉以上を理解する",
    clear2Text: "Clear Talkは、言葉の裏にあるトーン、丁寧さ、文化的な背景を理解する手助けをします。大切な場面で、自分の言いたいことが正しく伝わるようにもサポートします。",
    supportLead: "Kurokoについてお困りですか？お気軽にご連絡ください。", faq: "よくある質問",
    f1q: "AirPodsは必要ですか？", f1a: "AirPodsがあれば翻訳をあなただけが聞けます。なくてもiPhoneのマイクとスピーカーで使えます。",
    f2q: "音声は保存されますか？", f2a: "いいえ。音声は一切保存しません。会話のテキスト・日時・場所はiPhone内にのみ保存され、削除できます。",
    f3q: "どの言語に対応していますか？", f3a: "日本語、英語、中国語、韓国語、スペイン語、フランス語、ドイツ語、ポーランド語、ウクライナ語、ロシア語です。",
    linkSource: "リンク元:", consentNeed: "お知らせメールの受け取りに同意してください。", submitFail: "送信できませんでした。しばらくしてからお試しください。",
    notConnected: "ありがとうございます！登録はまもなく開始します。", legalNote: "この文書は英語で提供されています。",
  },
  zh: {
    noteLang: "日语 → 中文", eyeReal: "为真实生活而生", eyeSimple: "像聊天一样简单", eyeBorders: "好的对话没有国界",
    forIphone: "iPhone 版 Kuroko", nextConv: "你的下一次对话，从这里开始。", learnMore: "了解更多",
    ariaHome: "Kuroko 首页", ariaFeatures: "功能", ariaLang: "选择语言", ariaBadge: "在 App Store 下载",
    altPhone: "Kuroko 在 iPhone 上实时翻译对话", altTheatre: "歌舞伎幕布后安静的黑子", altQr: "下载 iPhone 版 Kuroko 的二维码",
    trEyebrow: "Translate · 实时口译", demoQ: "车站在哪里？", demoA: "直走，然后左转。",
    jp: "日语", mine: "中文", theySaid: "对方说", youHear: "你听到", theyReply: "对方回答", inEar: "翻译在你耳边",
    eyeKeep: "让对话不中断", b1t: "免手动", b1s: "无需按键。直接说话，Kuroko 知道是谁在说。",
    b2t: "离线也能用", b2s: "在线质量最佳。没有网络时自动切换为离线翻译。",
    b3t: "地道的日语", b3s: "根据对象使用礼貌体、口语或敬语。",
    b4t: "对话记录", b4s: "带日期和地点重温对话。从不保存音频。",
    eyeWay: "你的对话，你的方式", q1: "“你戴 AirPods，对方对着手机说。”", q2: "“一人一只 AirPod，各自只听自己的语言。”", q3: "“扫码，用自己的手机加入。”",
    eyeLangs: "语言",
    spEyebrow: "Speak · 对话教练", sayIn: "用日语说", means: "意思", meaningDemo: "很高兴认识你，我是米科拉。",
    eyeGrow: "三种成长方式", growTitle: "对话。学习。练习。", growSub: "把真实对话变成自信和扎实的知识。",
    talkQ: "实时对话 · 轮到你", learnQ: "1、3、7、16、35 天后复习", practiceQ: "12 个场景 · 温和纠正",
    eyeLevel: "适合你的水平", levelTitle: "找到你自己的表达", levelSub: "对话会根据你的水平、场景和风格调整。",
    beginner: "初级", intermediate: "中级", advanced: "高级", polite: "礼貌", casual: "随意", keigo: "敬语", koreanPh: "韩语罗马字",
    idiom: "“我考虑一下。”", literal: "直译", gentleNo: "在这种场合，这是委婉的“不”。", reallyMean: "对方真正的意思",
    eyeMore: "多一点理解", clear2Title: "理解言外之意",
    clear2Text: "Clear Talk 帮你理解一句话背后的语气、礼貌和文化背景，也能在每个细节都重要时，帮你把话说清楚。",
    supportLead: "使用 Kuroko 需要帮助？写信给我们，我们很乐意帮忙。", faq: "常见问题",
    f1q: "需要 AirPods 吗？", f1a: "有 AirPods，只有你能听到翻译。没有的话，Kuroko 使用 iPhone 的麦克风和扬声器。",
    f2q: "Kuroko 会保存音频吗？", f2a: "不会，从不保存音频。对话文字、日期和地点只保存在你的 iPhone 上，并且可以删除。",
    f3q: "支持哪些语言？", f3a: "日语、英语、中文、韩语、西班牙语、法语、德语、波兰语、乌克兰语和俄语。",
    linkSource: "链接来源：", consentNeed: "请同意接收上线通知邮件。", submitFail: "暂时无法发送，请稍后再试。",
    notConnected: "谢谢！订阅即将开放，请稍后再来。", legalNote: "本文件以英文提供。",
  },
  ko: {
    noteLang: "일본어 → 한국어", eyeReal: "진짜 일상을 위해", eyeSimple: "대화처럼 간단하게", eyeBorders: "좋은 대화에는 국경이 없습니다",
    forIphone: "iPhone용 Kuroko", nextConv: "다음 대화는 여기서 시작됩니다.", learnMore: "자세히 보기",
    ariaHome: "Kuroko 홈", ariaFeatures: "기능", ariaLang: "언어 선택", ariaBadge: "App Store에서 다운로드",
    altPhone: "iPhone에서 대화를 실시간 번역하는 Kuroko", altTheatre: "가부키 막 뒤의 조용한 구로코", altQr: "iPhone용 Kuroko 다운로드 QR 코드",
    trEyebrow: "Translate · 실시간 통역", demoQ: "역이 어디예요?", demoA: "쭉 가다가 왼쪽으로 가세요.",
    jp: "일본어", mine: "한국어", theySaid: "상대방의 말", youHear: "내가 듣는 말", theyReply: "상대방의 대답", inEar: "귀로 듣는 번역",
    eyeKeep: "대화가 끊기지 않도록", b1t: "핸즈프리", b1s: "버튼을 누를 필요 없이 말하세요. Kuroko가 누가 말하는지 압니다.",
    b2t: "오프라인에서도", b2s: "온라인에서는 최고 품질, 신호가 없으면 오프라인 번역으로 전환됩니다.",
    b3t: "자연스러운 일본어", b3s: "상대에 따라 정중체, 반말, 경어를 사용합니다.",
    b4t: "대화 기록", b4s: "날짜와 장소와 함께 대화를 다시 읽을 수 있습니다. 음성은 저장하지 않습니다.",
    eyeWay: "나만의 대화 방식", q1: "“나는 AirPods, 상대는 휴대폰에 말해요.”", q2: "“AirPod 한쪽씩. 각자 자기 언어만 들어요.”", q3: "“코드를 스캔하고 내 휴대폰으로 참여해요.”",
    eyeLangs: "언어",
    spEyebrow: "Speak · 대화 코치", sayIn: "일본어로 말하기", means: "뜻", meaningDemo: "처음 뵙겠습니다, 미콜라입니다.",
    eyeGrow: "성장하는 세 가지 방법", growTitle: "대화. 학습. 연습.", growSub: "실제 대화를 자신감과 오래가는 지식으로 바꿔 보세요.",
    talkQ: "실시간 대화 · 내 차례", learnQ: "1, 3, 7, 16, 35일 후 복습", practiceQ: "12가지 상황 · 부드러운 교정",
    eyeLevel: "내 수준에 맞게", levelTitle: "나만의 목소리를 찾아요", levelSub: "대화가 내 수준, 상황, 스타일에 맞춰집니다.",
    beginner: "초급", intermediate: "중급", advanced: "고급", polite: "정중", casual: "캐주얼", keigo: "경어", koreanPh: "한국어 로마자",
    idiom: "“생각해 볼게요.”", literal: "직역", gentleNo: "이 상황에서는 부드럽게 “아니요”라는 뜻입니다.", reallyMean: "실제로 하려는 말",
    eyeMore: "조금 더 깊은 이해", clear2Title: "말 너머를 이해하기",
    clear2Text: "Clear Talk는 말 뒤에 숨은 어조, 예의, 문화적 맥락을 이해하도록 돕고, 모든 세부가 중요할 때 내 뜻이 정확히 전달되도록 도와줍니다.",
    supportLead: "Kuroko 사용에 도움이 필요하신가요? 편하게 연락 주세요.", faq: "자주 묻는 질문",
    f1q: "AirPods가 꼭 필요한가요?", f1a: "AirPods가 있으면 번역을 나만 들을 수 있습니다. 없으면 iPhone 마이크와 스피커를 사용합니다.",
    f2q: "음성이 저장되나요?", f2a: "아니요, 음성은 절대 저장하지 않습니다. 대화 텍스트, 날짜, 장소는 iPhone에만 저장되며 삭제할 수 있습니다.",
    f3q: "어떤 언어를 지원하나요?", f3a: "일본어, 영어, 중국어, 한국어, 스페인어, 프랑스어, 독일어, 폴란드어, 우크라이나어, 러시아어입니다.",
    linkSource: "링크 출처:", consentNeed: "출시 안내 메일 수신에 동의해 주세요.", submitFail: "지금은 보낼 수 없습니다. 잠시 후 다시 시도해 주세요.",
    notConnected: "감사합니다! 곧 신청이 시작됩니다.", legalNote: "이 문서는 영어로 제공됩니다.",
  },
  es: {
    noteLang: "Japonés → Español", eyeReal: "Hecho para la vida real", eyeSimple: "Tan simple como hablar", eyeBorders: "Las buenas conversaciones no tienen fronteras",
    forIphone: "Kuroko para iPhone", nextConv: "Tu próxima conversación empieza aquí.", learnMore: "Más información",
    ariaHome: "Inicio de Kuroko", ariaFeatures: "Funciones", ariaLang: "Elegir idioma", ariaBadge: "Descargar en el App Store",
    altPhone: "Kuroko traduce una conversación en vivo en un iPhone", altTheatre: "Un discreto kuroko tras el telón de un teatro kabuki", altQr: "Código QR para descargar Kuroko para iPhone",
    trEyebrow: "Translate · Interpretación en vivo", demoQ: "¿Dónde está la estación?", demoA: "Siga recto y luego a la izquierda.",
    jp: "Japonés", mine: "Español", theySaid: "Te dijeron", youHear: "Tú oyes", theyReply: "Te responden", inEar: "Traducción en tu oído",
    eyeKeep: "Para que la conversación siga", b1t: "Manos libres", b1s: "Sin botones. Solo habla: Kuroko sabe quién está hablando.",
    b2t: "También sin conexión", b2s: "La mejor calidad en línea. Sin señal, entra la traducción sin conexión.",
    b3t: "Japonés natural", b3s: "Cortés, coloquial o keigo, según con quién hables.",
    b4t: "Historial de conversaciones", b4s: "Relee tus conversaciones con fecha y lugar. El audio nunca se guarda.",
    eyeWay: "Tu conversación, a tu manera", q1: "«Tú con AirPods, la otra persona habla al teléfono.»", q2: "«Un AirPod para cada uno. Cada uno oye solo su idioma.»", q3: "«Escanea un código y únete desde tu teléfono.»",
    eyeLangs: "Idiomas",
    spEyebrow: "Speak · Entrenador de conversación", sayIn: "Dilo en japonés", means: "Significa", meaningDemo: "Encantado, soy Mykola.",
    eyeGrow: "Tres formas de crecer", growTitle: "Habla. Aprende. Practica.", growSub: "Convierte conversaciones reales en confianza y conocimiento duradero.",
    talkQ: "Conversación en vivo · tu turno", learnQ: "Repaso a los 1, 3, 7, 16 y 35 días", practiceQ: "12 situaciones · correcciones amables",
    eyeLevel: "Hecho para tu nivel", levelTitle: "Encuentra tu propia voz", levelSub: "La conversación se adapta a tu nivel, situación y estilo.",
    beginner: "Principiante", intermediate: "Intermedio", advanced: "Avanzado", polite: "Cortés", casual: "Informal", keigo: "Keigo", koreanPh: "Coreano romanizado",
    idiom: "«Lo pensaré.»", literal: "Traducción literal", gentleNo: "Una forma amable de decir «no» en este contexto.", reallyMean: "Lo que quizá quieren decir",
    eyeMore: "Un poco más de comprensión", clear2Title: "Entiende más que palabras",
    clear2Text: "Clear Talk te ayuda a entender lo que hay detrás de una frase: el tono, la cortesía y el contexto cultural. Y también a hacerte entender cuando cada detalle importa.",
    supportLead: "¿Necesitas ayuda con Kuroko? Escríbenos y te ayudaremos con gusto.", faq: "Preguntas frecuentes",
    f1q: "¿Necesito AirPods?", f1a: "Con AirPods solo tú oyes la traducción. Sin ellos, Kuroko usa el micrófono y el altavoz del iPhone.",
    f2q: "¿Kuroko guarda el audio?", f2a: "No. El audio nunca se guarda. El texto, la fecha y el lugar de la conversación quedan solo en tu iPhone y puedes borrarlos.",
    f3q: "¿Qué idiomas puedo usar?", f3a: "Japonés, inglés, chino, coreano, español, francés, alemán, polaco, ucraniano y ruso.",
    linkSource: "Origen del enlace:", consentNeed: "Acepta recibir el correo del lanzamiento.", submitFail: "No se pudo enviar ahora. Inténtalo más tarde.",
    notConnected: "¡Gracias! El registro abrirá muy pronto.", legalNote: "Este documento se ofrece en inglés.",
  },
};
const SUPPORT_EMAIL = "nikolay.sht@gmail.com";
const p = location.pathname.replace(/\/$/, "") || "/";
let page = decodeURIComponent(p.split("/").filter(Boolean).pop() || "home");
const routeMap = {
  "index.html": "home",
  translate: "translate",
  "translate.html": "translate",
  speak: "speak",
  "speak.html": "speak",
  "clear-talk": "clear-talk",
  "clear-talk.html": "clear-talk",
  privacy: "privacy",
  "privacy.html": "privacy",
  support: "support",
  "support.html": "support",
  terms: "terms",
  "terms.html": "terms",
  "coming-soon.html": "coming-soon",
};
page = routeMap[page] || page;
const prefix = p.split("/").filter(Boolean)[0];
let currentLang = languages.includes(prefix) ? prefix : localStorage.getItem("kuroko-lang") || "";
if (!languages.includes(currentLang)) {
  const browser = (navigator.language || "en").slice(0, 2);
  currentLang = languages.includes(browser) ? browser : "en";
}
document.documentElement.lang = currentLang;
const pagePath = {
  home: "/",
  translate: "/translate",
  speak: "/speak",
  "clear-talk": "/clear-talk",
  privacy: "/privacy",
  support: "/support",
  terms: "/terms",
};
function href(to) {
  return `/${currentLang}${to === "home" ? "/" : to}`;
}
function safe(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
const t = Object.assign({}, translations.en, extra.en, translations[currentLang] || {}, extra[currentLang] || {});
const logo = '<img src="/kuroko-mark.svg" alt="" width="42" height="42">';
const mail = `<a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>`;
function navLink(name, label) {
  return `<a data-link="${name}" class="${page === name ? "active" : ""}" href="${href(pagePath[name])}">${label}</a>`;
}
function badge() {
  return `<a class="app-badge" href="/get?from=${page === "home" ? "home" : page}" aria-label="${t.ariaBadge}"><span class="apple" aria-hidden="true"></span><span><small>Download on the</small><b>App Store</b></span></a>`;
}
function qr() {
  return `<div class="qr-card" data-qr><img src="/qr-home.svg" alt="${t.altQr}"><div><strong>${t.scan}</strong><span>kurokotalk.com/get</span></div></div>`;
}
function navs(cls) {
  return `<nav class="${cls}" aria-label="${t.ariaFeatures}">${navLink("translate", "Translate")}${navLink("speak", "Speak")}${navLink("clear-talk", "Clear Talk")}</nav>`;
}
function header() {
  return `<header class="header shell"><a class="brand" href="${href("/")}" aria-label="${t.ariaHome}">${logo}<span>Kuroko</span></a>${navs("nav")}<div class="actions"><div class="language-wrap"><button class="language-button" aria-label="${t.ariaLang}" aria-expanded="false">◎</button><div class="language-menu" role="menu">${languages.map((l) => `<button role="menuitem" data-lang="${l}" class="${l === currentLang ? "selected" : ""}">${langNames[l]}</button>`).join("")}</div></div><a class="cta" href="/get?from=${page === "home" ? "home" : page}">${t.download}<span aria-hidden="true">↗</span></a></div></header>${navs("mobile-nav shell")}`;
}
function footer() {
  return `<footer class="footer"><div class="shell footer-main"><a class="footer-brand" href="${href("/")}">Kuroko 黒子</a><div class="footer-links"><a href="${href("/privacy")}">${t.privacy}</a><a href="${href("/support")}">${t.support}</a><a href="${href("/terms")}">${t.terms}</a>${mail}</div><div class="footer-right"><span>© Headway Consulting</span><span>${langNames[currentLang]}</span></div></div></footer>`;
}
function downloadBand() {
  return `<section class="section shell"><div class="download-band"><div><span class="eyebrow">${t.forIphone}</span><h2>${t.get}</h2><p>${t.nextConv}</p></div><div class="download-tools">${qr()}${badge()}</div></div></section>`;
}
const strip = `<span>🇯🇵 日本語</span><span>🇬🇧 English</span><span>🇨🇳 中文</span><span>🇰🇷 한국어</span><span>🇺🇦 Українська</span><span>🇪🇸 Español</span><span>🇷🇺 Русский</span><span>🇫🇷 Français</span><span>🇩🇪 Deutsch</span><span>🇵🇱 Polski</span>`;
function home() {
  return `<main><section class="hero shell"><div class="hero-copy"><span class="eyebrow">${t.tag}</span><h1>${t.homeTitle}</h1><p class="lead">${t.homeLead}</p><div class="hero-actions">${badge()}${qr()}</div></div><div class="visual"><img src="/phone-scene.svg" alt="${t.altPhone}"><div class="floating-note"><span>${t.noteLang}</span>駅はどこですか？</div></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">${t.eyeReal}</span><h2>${t.features}</h2></div><p>${t.featuresSub}</p></div><div class="feature-grid"><a class="feature-card translate" href="${href("/translate")}"><div class="feature-icon" aria-hidden="true">◉</div><h3>Translate</h3><p>${t.translateLine}</p><span class="more">${t.learnMore} →</span></a><a class="feature-card speak" href="${href("/speak")}"><div class="feature-icon" aria-hidden="true">✳</div><h3>Speak</h3><p>${t.speakLine}</p><span class="more">${t.learnMore} →</span></a><a class="feature-card clear" href="${href("/clear-talk")}"><div class="feature-icon" aria-hidden="true">◇</div><h3>Clear Talk</h3><p>${t.clearLine}</p><span class="more">${t.soon} →</span></a></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">${t.eyeSimple}</span><h2>${t.how}</h2></div><p>${t.stepsSub}</p></div><div class="steps"><div class="step"><span class="step-num">01</span><span class="step-icon">🎧</span><div><h3>${t.step1}</h3><p>${t.step1sub}</p></div></div><div class="step"><span class="step-num">02</span><span class="step-icon">◖</span><div><h3>${t.step2}</h3><p>${t.step2sub}</p></div></div><div class="step"><span class="step-num">03</span><span class="step-icon">↗</span><div><h3>${t.step3}</h3><p>${t.step3sub}</p></div></div></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">${t.eyeBorders}</span><h2>${t.languages}</h2></div></div><div class="language-strip">${strip}</div></section><section class="section shell story"><img src="/theatre.svg" alt="${t.altTheatre}"><div><span class="eyebrow">黒子 · kuroko</span><h2>${t.storyTitle}</h2><p>${t.storyText}</p></div></section>${downloadBand()}</main>`;
}
function translatePage() {
  return `<main><section class="page-hero shell"><div><span class="eyebrow" style="color:#8af0d1">${t.trEyebrow}</span><h1>${t.interpreter}</h1><p class="lead">${t.handsfree}</p><div class="hero-actions">${badge()}${qr()}</div></div><div class="page-visual" style="--feature:#34c759"><div class="dialogue"><div class="bubble">駅はどこですか？<small>${t.jp} · ${t.theySaid}</small></div><div class="bubble alt">${t.demoQ}<small>${t.mine} · ${t.youHear}</small></div><div class="bubble">まっすぐ行って、左です。<small>${t.jp} · ${t.theyReply}</small></div><div class="bubble alt">${t.demoA}<small>${t.inEar}</small></div></div></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">${t.eyeKeep}</span><h2>${t.features}</h2></div></div><div class="benefit-grid"><article class="benefit"><i>◉</i><h3>${t.b1t}</h3><p>${t.b1s}</p></article><article class="benefit"><i>⌁</i><h3>${t.b2t}</h3><p>${t.b2s}</p></article><article class="benefit"><i>文</i><h3>${t.b3t}</h3><p>${t.b3s}</p></article><article class="benefit"><i>▤</i><h3>${t.b4t}</h3><p>${t.b4s}</p></article></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">${t.eyeWay}</span><h2>${t.modes}</h2></div><p>${t.modesSub}</p></div><div class="mode-grid"><article class="mode"><div class="mode-icon">🎧</div><h3>Solo</h3><p>${t.solo}</p><p class="quote">${t.q1}</p></article><article class="mode"><div class="mode-icon">◉◉</div><h3>Split</h3><p>${t.split}</p><p class="quote">${t.q2}</p></article><article class="mode"><div class="mode-icon">⌗</div><h3>Link <span class="tag">${t.soon}</span></h3><p>${t.link}</p><p class="quote">${t.q3}</p></article></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">${t.eyeLangs}</span><h2>${t.languages}</h2></div></div><div class="language-strip">${strip}</div></section>${downloadBand()}</main>`;
}
function speakPage() {
  return `<main><section class="page-hero shell"><div><span class="eyebrow" style="color:#ffdb76">${t.spEyebrow}</span><h1>${t.speakTitle}</h1><p class="lead">${t.speakLead}</p><div class="hero-actions">${badge()}${qr()}</div></div><div class="page-visual" style="--feature:#ffbd3d"><div class="phrase-card"><div class="label">${t.sayIn}</div><p class="jp">はじめまして、ミコラです。</p><p class="romaji">hajimemashite, mikora desu.</p><div class="label">${t.means}</div><p class="meaning">${t.meaningDemo}</p></div></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">${t.eyeGrow}</span><h2>${t.growTitle}</h2></div><p>${t.growSub}</p></div><div class="mode-grid"><article class="mode"><div class="mode-icon">◖</div><h3>Talk</h3><p>${t.talk}</p><p class="quote">${t.talkQ}</p></article><article class="mode"><div class="mode-icon">▤</div><h3>Learn</h3><p>${t.learn}</p><p class="quote">${t.learnQ}</p></article><article class="mode"><div class="mode-icon">✳</div><h3>Practice</h3><p>${t.practice}</p><p class="quote">${t.practiceQ}</p></article></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">${t.eyeLevel}</span><h2>${t.levelTitle}</h2></div><p>${t.levelSub}</p></div><div class="level-chips"><span class="chip">${t.beginner}</span><span class="chip">${t.intermediate}</span><span class="chip">${t.advanced}</span><span class="chip">${t.polite} 丁寧語</span><span class="chip">${t.casual} タメ口</span><span class="chip">${t.keigo} 敬語</span><span class="chip">Romaji</span><span class="chip">Pinyin</span><span class="chip">${t.koreanPh}</span></div></section>${downloadBand()}</main>`;
}
function clearPage() {
  return `<main><section class="page-hero shell"><div><span class="eyebrow" style="color:#75d7f4">Clear Talk · ${t.soon}</span><h1>${t.clearTitle}</h1><p class="lead">${t.clearLead}</p><span class="coming">${t.soon}</span><div class="hero-actions" style="margin-top:21px">${badge()}${qr()}</div></div><div class="page-visual" style="--feature:#32ade6"><div class="dialogue"><div class="bubble">ちょっと考えておきます。</div><div class="bubble alt">${t.idiom}<small>${t.literal}</small></div><div class="bubble alt">${t.gentleNo}<small>${t.reallyMean}</small></div></div></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">${t.eyeMore}</span><h2>${t.clear2Title}</h2></div></div><p class="lead" style="max-width:780px">${t.clear2Text}</p></section>${downloadBand()}</main>`;
}
const UPDATED = "Last updated: November 13, 2026.";
function legalNote() {
  return t.legalNote ? `<p><em>${t.legalNote}</em></p>` : "";
}
function article() {
  if (page === "privacy")
    return `<main class="shell"><article class="article"><span class="eyebrow">Kuroko · ${t.privacy}</span><h1>${t.privacyTitle}</h1>${legalNote()}
<p>Kuroko is an iPhone app by Headway Consulting (“we”). This policy explains what happens to your information when you use Kuroko. In short: there is no account, no advertising and no tracking, audio is never stored, and your conversations stay on your iPhone.</p>
<h2>What Kuroko uses</h2>
<p><strong>Microphone and speech.</strong> Kuroko listens only while you have a conversation or practice running. Speech is turned into text by Apple speech recognition on your iPhone and, when you are online, by Google Cloud Speech-to-Text. Audio is used only for this and is never saved by Kuroko.</p>
<p><strong>Text for translation and coaching.</strong> To translate, recognised text is sent to Google Cloud Translation, or translated by Apple on your device when you are offline. To suggest replies, explain phrases and run practice conversations, the relevant text is sent to Anthropic’s Claude API.</p>
<p><strong>Location (optional).</strong> If you allow it, Kuroko looks up the name of the district and city where a conversation took place, to label it in your history. Precise coordinates are not stored. You can refuse or turn this off in iOS Settings at any time.</p>
<h2>What is stored, and where</h2>
<p>Your conversation history (text, date and place), saved phrases and settings are stored only on your iPhone. We do not have a server copy. Deleting a conversation, a phrase, or the app removes it.</p>
<h2>Service providers</h2>
<p>Text and audio sent for recognition, translation or coaching are processed by Google (Google Cloud) and Anthropic, under their own terms and privacy policies, solely to return the result to you. We do not sell your information or share it for advertising.</p>
<h2>Kuroko Link</h2>
<p>When Link becomes available, a short-lived session on kurokotalk.com relays conversation text between your iPhone and your partner’s browser. Messages are passed through and not stored; a session ends when you stop it, and after two hours at most.</p>
<h2>This website</h2>
<p>kurokotalk.com does not use advertising cookies. It may count page visits anonymously. If you leave your email to hear about the launch, we use it only for that and you can ask us to remove it.</p>
<h2>Children</h2>
<p>Kuroko is not directed at children under 13.</p>
<h2>Your choices and contact</h2>
<p>You can deny microphone or location access in iOS Settings, stop a conversation at any time and delete your history. For any privacy question, write to ${mail}.</p>
<p>${UPDATED}</p></article></main>`;
  if (page === "terms")
    return `<main class="shell"><article class="article"><span class="eyebrow">Kuroko · ${t.terms}</span><h1>${t.termsTitle}</h1>${legalNote()}
<p>These terms apply to the Kuroko app and the kurokotalk.com website, provided by Headway Consulting. By using Kuroko you agree to them.</p>
<h2>What Kuroko is</h2>
<p>Kuroko helps you talk across languages: live translation, reply suggestions and language practice. Translations and suggestions are produced automatically and can be wrong or incomplete. Use your own judgment, and do not rely on Kuroko alone for medical, legal, financial, safety or other important decisions.</p>
<h2>Using Kuroko well</h2>
<p>Use Kuroko lawfully and respectfully. Let the people you talk with know that you are using a translation app when that matters, and follow local rules about recording or processing conversations.</p>
<h2>Purchases</h2>
<p>If Kuroko offers paid features, the price, renewal, cancellation and any trial are shown in the App Store before you buy. Purchases are handled by Apple under Apple’s terms.</p>
<h2>Third-party services</h2>
<p>Some features rely on Apple, Google and Anthropic services. Their availability may change, and their own terms also apply.</p>
<h2>No warranty</h2>
<p>Kuroko is provided “as is”. To the extent the law allows, we are not liable for indirect losses or for decisions made based on automated translations or suggestions.</p>
<h2>Changes and contact</h2>
<p>We may update these terms; the date below shows the latest version. Questions: ${mail}.</p>
<p>${UPDATED}</p></article></main>`;
  return `<main class="shell"><article class="article"><span class="eyebrow">Kuroko · ${t.support}</span><h1>${t.supportTitle}</h1><p>${t.supportLead}</p><p>${mail}</p><h2>${t.faq}</h2><div class="faq"><h3>${t.f1q}</h3><p>${t.f1a}</p></div><div class="faq"><h3>${t.f2q}</h3><p>${t.f2a}</p></div><div class="faq"><h3>${t.f3q}</h3><p>${t.f3a}</p></div></article></main>`;
}
function coming() {
  const query = new URLSearchParams(location.search);
  return `<main class="shell"><article class="article"><span class="eyebrow">黒子 · Kuroko</span><h1>${t.comingTitle}</h1><p>${t.comingText}</p><form class="signup" data-signup><input type="email" name="email" placeholder="${t.email}" autocomplete="email" required aria-label="${t.email}"><button class="cta" type="submit">${t.notify} →</button></form><label class="consent"><input type="checkbox" name="consent" required> ${t.consent}</label><p class="status" role="status" aria-live="polite"></p><p style="font-size:12px;margin-top:27px">${t.linkSource} ${safe(query.get("from") || "site")}</p></article></main>`;
}
let content =
  page === "home"
    ? home()
    : page === "translate"
      ? translatePage()
      : page === "speak"
        ? speakPage()
        : page === "clear-talk"
          ? clearPage()
          : ["privacy", "support", "terms"].includes(page)
            ? article()
            : page === "coming-soon"
              ? coming()
              : home();
document.querySelector("#app").innerHTML = header() + content + footer();
document.querySelectorAll("[data-lang]").forEach((b) =>
  b.addEventListener("click", () => {
    localStorage.setItem("kuroko-lang", b.dataset.lang);
    const bare = pagePath[page] || "/";
    location.href = `/${b.dataset.lang}${bare === "/" ? "/" : bare}`;
  }),
);
const langButton = document.querySelector(".language-button"),
  menu = document.querySelector(".language-menu");
langButton.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  langButton.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".language-wrap")) {
    menu.classList.remove("open");
    langButton.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menu.classList.remove("open");
    langButton.setAttribute("aria-expanded", "false");
  }
});
function qrSvg(value) {
  const bytes = new TextEncoder().encode(value),
    ec = 13,
    blocks = Math.max(1, Math.ceil((bytes.length + 2) / 26));
  if (blocks > 5) return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" fill="white"/></svg>';
  const dataPer = 26,
    eccPer = 13,
    capacity = blocks * dataPer,
    buffer = [0x40];
  let length = bytes.length;
  while (length > 0) {
    buffer.push(Math.min(255, length));
    const take = Math.min(255, length);
    for (let i = 0; i < take; i++) buffer.push(bytes[bytes.length - length + i]);
    length -= take;
  }
  let used = buffer.length;
  buffer.push(0);
  while (buffer.length < capacity) buffer.push(buffer.length % 2 ? 0x11 : 0xec);
  const gfExp = Array(512),
    gfLog = Array(256);
  let x = 1;
  for (let i = 0; i < 255; i++) {
    gfExp[i] = x;
    gfLog[x] = i;
    x <<= 1;
    if (x & 256) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) gfExp[i] = gfExp[i - 255];
  const mul = (a, b) => (a && b ? gfExp[gfLog[a] + gfLog[b]] : 0);
  let gen = [1];
  for (let i = 0; i < eccPer; i++) {
    const next = Array(gen.length + 1).fill(0);
    gen.forEach((v, j) => {
      next[j] ^= v;
      next[j + 1] ^= mul(v, gfExp[i]);
    });
    gen = next;
  }
  const dataBlocks = [],
    eccBlocks = [];
  for (let b = 0; b < blocks; b++) {
    const d = buffer.slice(b * dataPer, (b + 1) * dataPer),
      rem = Array(eccPer).fill(0);
    d.forEach((v) => {
      const factor = v ^ rem[0];
      for (let j = 0; j < eccPer - 1; j++) rem[j] = rem[j + 1] ^ mul(gen[j + 1], factor);
      rem[eccPer - 1] = mul(gen[eccPer], factor);
    });
    dataBlocks.push(d);
    eccBlocks.push(rem);
  }
  const code = [];
  for (let i = 0; i < dataPer; i++) for (let b = 0; b < blocks; b++) if (i < dataBlocks[b].length) code.push(dataBlocks[b][i]);
  for (let i = 0; i < eccPer; i++) for (let b = 0; b < blocks; b++) code.push(eccBlocks[b][i]);
  const version = blocks <= 2 ? 3 : blocks <= 4 ? 4 : 5,
    n = 17 + 4 * version,
    m = Array.from({ length: n }, () => Array(n).fill(null));
  const set = (xx, yy, v) => {
    if (xx >= 0 && yy >= 0 && xx < n && yy < n) m[yy][xx] = v;
  };
  function finder(fx, fy) {
    for (let dy = -1; dy <= 7; dy++)
      for (let dx = -1; dx <= 7; dx++) {
        const xx = fx + dx,
          yy = fy + dy;
        if (xx < 0 || yy < 0 || xx >= n || yy >= n) continue;
        set(
          xx,
          yy,
          dx >= 0 &&
            dx <= 6 &&
            dy >= 0 &&
            dy <= 6 &&
            (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4)),
        );
      }
  }
  finder(0, 0);
  finder(n - 7, 0);
  finder(0, n - 7);
  for (let i = 8; i < n - 8; i++) {
    if (m[6][i] === null) set(i, 6, i % 2 === 0);
    if (m[i][6] === null) set(6, i, i % 2 === 0);
  }
  const align = version === 3 ? [22] : version === 4 ? [26] : [30];
  for (const ay of align)
    for (const ax of align)
      if (m[ay][ax] === null)
        for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
  for (let i = 0; i < 9; i++) {
    if (m[8][i] === null) set(i, 8, false);
    if (m[i][8] === null) set(8, i, false);
  }
  for (let i = 0; i < 8; i++) {
    if (m[8][n - 1 - i] === null) set(n - 1 - i, 8, false);
    if (m[n - 1 - i][8] === null) set(8, n - 1 - i, false);
  }
  set(8, n - 8, true);
  let bits = [];
  code.forEach((v) => {
    for (let k = 7; k >= 0; k--) bits.push((v >> k) & 1);
  });
  let bi = 0,
    up = true;
  for (let right = n - 1; right >= 1; right -= 2) {
    if (right === 6) right--;
    for (let vert = 0; vert < n; vert++) {
      const yy = up ? n - 1 - vert : vert;
      for (let j = 0; j < 2; j++) {
        const xx = right - j;
        if (m[yy][xx] !== null) continue;
        let bit = bi < bits.length ? bits[bi++] : 0;
        if ((yy + xx) % 2 === 0) bit ^= 1;
        set(xx, yy, bit === 1);
      }
    }
    up = !up;
  }
  const fmt = (level, mask) => {
    const data = (level << 3) | mask;
    let rem = data << 10;
    for (let i = 14; i >= 10; i--) if ((rem >> i) & 1) rem ^= 0x537 << (i - 10);
    return ((data << 10) | rem) ^ 0x5412;
  };
  const f = fmt(1, 0);
  for (let i = 0; i < 15; i++) {
    const bit = (f >> i) & 1;
    let ax, ay, bx, by;
    if (i < 6) {
      ax = 8;
      ay = i;
    } else if (i < 8) {
      ax = 8;
      ay = i + 1;
    } else {
      ax = 14 - i;
      ay = 8;
    }
    if (i < 8) {
      bx = n - 1 - i;
      by = 8;
    } else if (i < 9) {
      bx = 8;
      by = 7;
    } else {
      bx = 8;
      by = n - 15 + i;
    }
    set(ax, ay, !!bit);
    set(bx, by, !!bit);
  }
  let rects = "";
  for (let yy = 0; yy < n; yy++)
    for (let xx = 0; xx < n; xx++) if (m[yy][xx]) rects += `<rect x="${xx + 4}" y="${yy + 4}" width="1" height="1"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n + 8} ${n + 8}"><rect width="${n + 8}" height="${n + 8}" rx="2" fill="#fff"/><g fill="#06271f">${rects}</g></svg>`;
}
document.querySelectorAll("[data-qr]").forEach((card, i) => {
  const from = page === "home" ? "home" : page;
  const route = `/${currentLang}/get?from=${encodeURIComponent(from)}&slot=${i}`;
  const target = location.origin === "null" ? `https://kurokotalk.com${route}` : `${location.origin}${route}`;
  const img = card.querySelector("img");
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(qrSvg(target));
  img.alt = `QR code for ${from}, linking to ${target}`;
  card.dataset.target = target;
  const caption = card.querySelector("span");
  if (caption) caption.textContent = `${location.host || "kurokotalk.com"}${route}`;
});
function addAlternateLinks() {
  const head = document.head;
  const base = "https://kurokotalk.com";
  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = base + href(pagePath[page] || "/");
  head.append(canonical);
  languages.forEach((l) => {
    const a = document.createElement("link");
    a.rel = "alternate";
    a.hreflang = l;
    a.href = base + `/${l}${(pagePath[page] || "/") === "/" ? "/" : pagePath[page]}`;
    head.append(a);
  });
  const x = document.createElement("link");
  x.rel = "alternate";
  x.hreflang = "x-default";
  x.href = base + "/en" + (pagePath[page] || "/");
  head.append(x);
}
addAlternateLinks();
fetch("/config.json")
  .then((r) => r.json())
  .then((c) => {
    if (c.supportEmail) document.querySelectorAll('a[href^="mailto:"]').forEach((a) => (a.href = "mailto:" + c.supportEmail));
    if (c.appStoreId) {
      const banner = document.querySelector('meta[name="apple-itunes-app"]');
      if (banner) banner.content = `app-id=${c.appStoreId}`;
    }
  })
  .catch(() => {});
const form = document.querySelector("[data-signup]");
if (form) {
  const checkbox = document.querySelector(".consent input");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = document.querySelector(".status");
    if (!checkbox.checked) {
      checkbox.focus();
      status.textContent = t.consentNeed;
      return;
    }
    const config = await fetch("/config.json")
      .then((r) => r.json())
      .catch(() => ({}));
    const data = new FormData(form);
    data.set("consent", "yes");
    if (config.signupEndpoint) {
      try {
        const response = await fetch(config.signupEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error("Request failed");
        status.textContent = t.sent;
        form.reset();
      } catch {
        status.textContent = t.submitFail;
      }
    } else {
      status.textContent = t.notConnected;
    }
  });
}
