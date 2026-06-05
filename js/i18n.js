// Shared i18n for all metronome pages — 15 languages
const LANGS = {
'zh-CN':{}, en:{}, fr:{}, de:{}, it:{}, es:{}, pt:{}, el:{}, ru:{}, pl:{}, ja:{}, ko:{}, th:{}, vi:{}, my:{}
};
const LANG_NAMES = { 'zh-CN':'中文','en':'English','fr':'Français','de':'Deutsch','it':'Italiano','es':'Español','pt':'Português','el':'Ελληνικά','ru':'Русский','pl':'Polski','ja':'日本語','ko':'한국어','th':'ไทย','vi':'Tiếng Việt','my':'မြန်မာ' };

function t(k,l) {
  if (!LANGS[l]) l='zh-CN';
  return LANGS[l][k] || LANGS['zh-CN'][k] || k;
}

function applyAllLang(l) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    const v = t(k, l);
    if (el.tagName === 'TITLE' || el.tagName === 'META') {
      el.setAttribute('content', v);
    } else {
      el.textContent = v;
    }
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'), l);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'), l);
  });
  document.documentElement.lang = l;
  try { localStorage.setItem('metronome-lang', l); } catch(e) {}
}

// ===================== TRANSLATIONS =====================

// --- Nav ---
const _T = (k, zh, en, fr, de, it, es, pt, el, ru, pl, ja, ko, th, vi, my) => {
  const arr = [zh,en,fr,de,it,es,pt,el,ru,pl,ja,ko,th,vi,my];
  const keys = ['zh-CN','en','fr','de','it','es','pt','el','ru','pl','ja','ko','th','vi','my'];
  keys.forEach((key,i) => { LANGS[key][k] = arr[i] || en; });
};

_T('nav-tuner','乐器调音器','Instrument Tuner','Accordeur','Stimmgerät','Accordatore','Afinador','Afinador','Χορδιστής','Тюнер','Tuner','チューナー','튜너','เครื่องตั้งเสียง','Bộ chỉnh nhạc cụ','တူရိယာညှိကိရိယာ');
_T('nav-staff','认识五线谱','Learn the Staff','Lire la partition','Noten lesen','Leggere lo spartito','Leer partitura','Ler partitura','Ανάγνωση παρτιτούρας','Нотный стан','Nuty','五線譜を読む','오선보 읽기','อ่านโน้ต','Đọc bản nhạc','ဂီတသင်္ကေတဖတ်ရန်');
_T('nav-metronome','免费在线节拍器','Free Online Metronome','Métronome gratuit','Kostenloses Metronom','Metronomo gratuito','Metrónomo gratuito','Metrônomo grátis','Δωρεάν μετρονόμος','Бесплатный метроном','Darmowy metronom','無料オンラインメトロノーム','무료 온라인 메트로놈','เครื่องเมตรอนอมออนไลน์ฟรี','Máy đập nhịp miễn phí','အခမဲ့မက်ထရိုနုမ်');
_T('nav-circle','音乐五度圈','Circle of Fifths','Cycle des quintes','Quintenzirkel','Circolo delle quinte','Círculo de quintas','Círculo de quintas','Κύκλος των πεμπτών','Квинтовый круг','Koło kwintowe','五度圏','5도권','วงกลมคู่ห้า','Vòng tròn quãng năm','ပဉ္စမအဝိုင်း');
_T('nav-ear','绝对音感练耳','Ear Training','Entraînement auditif','Gehörtraining','Ear training','Entrenamiento auditivo','Treino auditivo','Εκπαίδευση αυτιού','Тренировка слуха','Trening słuchu','聴音訓練','청음 훈련','ฝึกหู','Luyện tai','နားလေ့ကျင့်ခြင်း');

// --- Common ---
_T('theme-day','☀️','☀️','☀️','☀️','☀️','☀️','☀️','☀️','☀️','☀️','☀️','☀️','☀️','☀️','☀️');
_T('theme-night','🌙','🌙','🌙','🌙','🌙','🌙','🌙','🌙','🌙','🌙','🌙','🌙','🌙','🌙','🌙');
_T('back-home','← 返回节拍器','← Back to Metronome','← Retour au métronome','← Zurück zum Metronom','← Torna al metronomo','← Volver al metrónomo','← Voltar ao metrônomo','← Πίσω στον μετρονόμο','← Назад к метроному','← Powrót do metronomu','← メトロノームに戻る','← 메트로놈으로 돌아가기','← กลับไปเมตรอนอม','← Về máy đập nhịp','← မက်ထရိုနုမ်သို့ပြန်သွား');

// --- Tuner ---
_T('tuner-title','🎸 乐器调音器','🎸 Instrument Tuner','🎸 Accordeur','🎸 Stimmgerät','🎸 Accordatore','🎸 Afinador','🎸 Afinador','🎸 Χορδιστής','🎸 Тюнер','🎸 Tuner','🎸 チューナー','🎸 튜너','🎸 เครื่องตั้งเสียง','🎸 Bộ chỉnh nhạc cụ','🎸 တူရိယာညှိကိရိယာ');
_T('tuner-desc','Chromatic Tuner — 点击麦克风按钮开始','Chromatic Tuner — tap mic to start','Accordeur chromatique','Chromatisches Stimmgerät','Accordatore cromatico','Afinador cromático','Afinador cromático','Χρωματικός χορδιστής','Хроматический тюнер','Tuner chromatyczny','クロマチックチューナー','반음계 튜너','จูนเนอร์โครมาติก','Bộ chỉnh âm sắc','ခရိုမက်တစ်တူရိယာညှိကိရိယာ');
_T('tuner-chromatic','半音阶','Chromatic','Chromatique','Chromatisch','Cromatico','Cromático','Cromático','Χρωματικό','Хроматический','Chromatyczny','クロマチック','반음계','โครมาติก','Âm sắc','ခရိုမက်တစ်');
_T('tuner-guitar','🎸 吉他','🎸 Guitar','🎸 Guitare','🎸 Gitarre','🎸 Chitarra','🎸 Guitarra','🎸 Guitarra','🎸 Κιθάρα','🎸 Гитара','🎸 Gitara','🎸 ギター','🎸 기타','🎸 กีตาร์','🎸 Ghi-ta','🎸 ဂီတာ');
_T('tuner-ukulele','🪕 尤克里里','🪕 Ukulele','🪕 Ukulélé','🪕 Ukulele','🪕 Ukulele','🪕 Ukelele','🪕 Ukulele','🪕 Ουκουλέλε','🪕 Укулеле','🪕 Ukulele','🪕 ウクレレ','🪕 우쿨렐레','🪕 อูคูเลเล่','🪕 Ukulele','🪕 ယူကူလေးလေ');
_T('tuner-bass','贝斯','Bass','Basse','Bass','Basso','Bajo','Baixo','Μπάσο','Бас','Bas','ベース','베이스','เบส','Bass','ဘေ့စ်');
_T('tuner-violin','🎻 小提琴','🎻 Violin','🎻 Violon','🎻 Violine','🎻 Violino','🎻 Violín','🎻 Violino','🎻 Βιολί','🎻 Скрипка','🎻 Skrzypce','🎻 バイオリン','🎻 바이올린','🎻 ไวโอลิน','🎻 Vĩ cầm','🎻 တယော');
_T('tuner-start','🎤 开始调音','🎤 Start Tuning','🎤 Démarrer','🎤 Starten','🎤 Avvia','🎤 Iniciar','🎤 Iniciar','🎤 Έναρξη','🎤 Начать','🎤 Start','🎤 開始','🎤 시작','🎤 เริ่ม','🎤 Bắt đầu','🎤 စတင်ရန်');
_T('tuner-stop','⏹ 停止调音','⏹ Stop','⏹ Arrêter','⏹ Stopp','⏹ Ferma','⏹ Parar','⏹ Parar','⏹ Διακοπή','⏹ Стоп','⏹ Stop','⏹ 停止','⏹ 정지','⏹ หยุด','⏹ Dừng','⏹ ရပ်ရန်');
_T('tuner-listening','正在监听…请弹奏一个音','Listening… play a note','Écoute… jouez une note','Hört zu… spiel eine Note','In ascolto… suona','Escuchando… toca','Ouvindo… toque','Ακούω… παίξε','Слушаю… сыграйте','Słucham… zagraj','聴取中…音を鳴らして','듣는 중… 음을 연주하세요','กำลังฟัง… เล่นโน้ต','Đang nghe… chơi một nốt','နားထောင်နေသည်… သံတစ်သံတီးပါ');
_T('tuner-idle','等待信号…','Waiting for signal…','En attente…','Warte auf Signal…','In attesa…','Esperando…','Aguardando…','Αναμονή…','Ожидание…','Oczekiwanie…','待機中…','신호 대기 중…','รอสัญญาณ…','Đợi tín hiệu…','အချက်ပြမှုစောင့်ဆိုင်းနေ…');
_T('tuner-hint','点击麦克风按钮，允许浏览器访问麦克风','Tap mic button, allow browser microphone access','Appuyez sur le micro','Mikrofonzugriff erlauben','Tocca il microfono','Toca el micrófono','Toque no microfone','Πατήστε το μικρόφωνο','Нажмите микрофон','Kliknij mikrofon','マイクボタンを押して許可','마이크 버튼을 누르고 허용하세요','กดปุ่มไมโครโฟน อนุญาตให้เบราว์เซอร์เข้าถึงไมโครโฟน','Nhấn nút mic, cho phép trình duyệt truy cập mic','မိုက်ခလုတ်နှိပ်၍ မိုက်ခွင့်ပြုပါ');
_T('tuner-stopped','已停止','Stopped','Arrêté','Gestoppt','Fermato','Detenido','Parado','Διακόπηκε','Остановлен','Zatrzymany','停止中','정지됨','หยุดแล้ว','Đã dừng','ရပ်တန့်ပြီး');
_T('tuner-no-mic','⚠️ 无法访问麦克风，请检查浏览器权限设置','⚠ Cannot access microphone, check permissions','⚠ Micro indisponible','⚠ Mikrofon nicht verfügbar','⚠ Microfono non disponibile','⚠ Micrófono no disponible','⚠ Microfone indisponível','⚠ Το μικρόφωνο μη διαθέσιμο','⚠ Микрофон недоступен','⚠ Mikrofon niedostępny','⚠ マイクにアクセスできません','⚠ 마이크 접근 불가','⚠ ไม่สามารถเข้าถึงไมโครโฟน','⚠ Không truy cập được mic','⚠ မိုက်မရနိုင်ပါ');
_T('tuner-in-tune','✓ 准了！','✓ In tune!','✓ Juste !','✓ Gestimmt!','✓ Intonato!','✓ ¡Afinado!','✓ Afinado!','✓ Σωστά!','✓ Точно!','✓ Zgodnie!','✓ 合ってる！','✓ 맞았어요!','✓ ตรงแล้ว!','✓ Đúng rồi!','✓ တိကျပြီ');
_T('tuner-sharp','偏高 ↑ ','Sharp ↑ ','Trop haut ↑ ','Zu hoch ↑ ','Troppo alto ↑ ','Alto ↑ ','Alto ↑ ','Ψηλά ↑ ','Выше ↑ ','Za wysoko ↑ ','高い ↑ ','높음 ↑ ','สูงไป ↑ ','Cao ↑ ','မြင့် ↑ ');
_T('tuner-flat','偏低 ↓ ','Flat ↓ ','Trop bas ↓ ','Zu tief ↓ ','Troppo basso ↓ ','Bajo ↓ ','Baixo ↓ ','Χαμηλά ↓ ','Ниже ↓ ','Za nisko ↓ ','低い ↓ ','낮음 ↓ ','ต่ำไป ↓ ','Thấp ↓ ','နိမ့် ↓ ');

// --- Staff ---
_T('staff-title','🎼 认识五线谱','🎼 Learn the Staff','🎼 Lire la partition','🎼 Noten lesen','🎼 Leggere lo spartito','🎼 Leer partitura','🎼 Ler partitura','🎼 Ανάγνωση παρτιτούρας','🎼 Нотный стан','🎼 Czytanie nut','🎼 五線譜を読む','🎼 오선보 읽기','🎼 อ่านโน้ต','🎼 Đọc bản nhạc','🎼 ဂီတသင်္ကေတဖတ်ရန်');
_T('staff-subtitle','零基础入门——用最简单的话学会看谱','Zero to reading music — the simplest guide','Guide simple pour débutants','Einfache Einführung','Guida semplice','Guía sencilla','Guia simples','Απλός οδηγός','Простое руководство','Prosty przewodnik','ゼロから読譜','기초부터 배우는 오선보','เริ่มจากศูนย์','Từ số 0 học đọc nhạc','အခြေခံမှစ၍');
_T('staff-s1','📏 一、五线谱长什么样？','📏 1. What Does a Staff Look Like?','1. À quoi ressemble une portée ?','1. Wie sieht ein Notensystem aus?','1. Che aspetto ha il pentagramma?','1. ¿Qué aspecto tiene un pentagrama?','1. Como é uma pauta?','1. Πώς μοιάζει το πεντάγραμμο;','1. Как выглядит нотный стан?','1. Jak wygląda pięciolinia?','1. 五線譜はどんな形？','1. 오선보는 어떻게 생겼나요?','1. บรรทัดห้าเส้นมีลักษณะอย่างไร?','1. Khuông nhạc trông như thế nào?','1. ဂီတသင်္ကေတမျဉ်းကြောင်းက ဘယ်လိုပုံစံလဲ။');
_T('staff-s2','🔑 二、谱号——决定每条线代表什么音','🔑 2. Clefs — What Each Line Means','2. Les clés','2. Notenschlüssel','2. Le chiavi','2. Las claves','2. As claves','2. Κλειδιά','2. Ключи','2. Klucze','2. 音部記号','2. 음자리표','2. กุญแจประจำหลัก','2. Khóa nhạc','2. သော့သံစဉ်');
_T('staff-s3','🎵 三、音符——声音的长短','🎵 3. Notes — How Long a Sound Lasts','3. Les notes','3. Noten','3. Le note','3. Las notas','3. As notas','3. Νότες','3. Ноты','3. Nuty','3. 音符','3. 음표','3. โน้ต','3. Nốt nhạc','3. ဂီတသင်္ကေတ');
_T('staff-s4','🤫 四、休止符——不发声的时候','🤫 4. Rests — Moments of Silence','4. Les silences','4. Pausen','4. Le pause','4. Los silencios','4. As pausas','4. Παύσεις','4. Паузы','4. Pauzy','4. 休符','4. 쉼표','4. ตัวหยุด','4. Dấu lặng','4. တိတ်ဆိတ်ချိန်');
_T('staff-s5','⏱️ 五、拍号和节拍','⏱️ 5. Time Signatures & Beat','5. Les mesures','5. Taktarten','5. Il tempo','5. Compás','5. Compasso','5. Μέτρο','5. Размер','5. Metrum','5. 拍子記号','5. 박자표','5. อัตราจังหวะ','5. Số chỉ nhịp','5. စည်းချက်သင်္ကေတ');
_T('staff-s6','📋 六、速查卡','📋 6. Quick Reference','6. Fiche mémo','6. Spickzettel','6. Riferimento rapido','6. Referencia rápida','6. Consulta rápida','6. Γρήγορη αναφορά','6. Шпаргалка','6. Ściąga','6. 早見表','6. 빠른 참조','6. ข้อมูลอ้างอิงด่วน','6. Tham khảo nhanh','6. အမြန်ကိုးကား');
_T('staff-line-hint','💡 一句话记住：线从下往上数 1→5，间从下往上数 1→4。高音越高位置越靠上。','💡 Lines count 1→5 bottom-up, spaces 1→4. Higher pitch = higher position.','Les lignes comptent de 1 à 5 de bas en haut','Linien von unten 1→5 zählen','Le linee si contano dal basso 1→5','Las líneas se cuentan de abajo arriba 1→5','Linhas contam de baixo para cima 1→5','Οι γραμμές μετριούνται από κάτω 1→5','Линии считаются снизу вверх 1→5','Linie liczy się od dołu 1→5','線は下から1→5と数える','선은 아래에서 위로 1→5','นับเส้นจากล่างขึ้นบน 1→5','Đếm dòng từ dưới lên 1→5','မျဉ်းများကို အောက်မှအပေါ် ၁→၅ ရေတွက်');
_T('staff-treble','🎻 高音谱号（G 谱号）','🎻 Treble Clef (G Clef)','Clé de sol','Violinschlüssel','Chiave di violino','Clave de sol','Clave de sol','Κλειδί του Σολ','Скрипичный ключ','Klucz wiolinowy','ト音記号','높은음자리표','กุญแจซอล','Khóa Sol','ထရက်ဘယ်သော့');
_T('staff-bass','🎹 低音谱号（F 谱号）','🎹 Bass Clef (F Clef)','Clé de fa','Bassschlüssel','Chiave di basso','Clave de fa','Clave de fá','Κλειδί του Φα','Басовый ключ','Klucz basowy','ヘ音記号','낮은음자리표','กุญแจฟา','Khóa Fa','ဘေ့စ်သော့');
_T('staff-whole','全音符','Whole Note','Ronde','Ganze Note','Semibreve','Redonda','Semibreve','Ολόκληρο','Целая нота','Cała nuta','全音符','온음표','โน้ตตัวกลม','Nốt tròn','တစ်သံလုံး');
_T('staff-half','二分音符','Half Note','Blanche','Halbe Note','Minima','Blanca','Mínima','Μισό','Половинная','Półnuta','二分音符','2분음표','โน้ตตัวขาว','Nốt trắng','နှစ်သံတစ်ဝက်');
_T('staff-quarter','四分音符','Quarter Note','Noire','Viertelnote','Semiminima','Negra','Semínima','Τέταρτο','Четвертная','Ćwierćnuta','四分音符','4분음표','โน้ตตัวดำ','Nốt đen','လေးသံတစ်စိတ်');
_T('staff-eighth','八分音符','Eighth Note','Croche','Achtelnote','Croma','Corchea','Colcheia','Όγδοο','Восьмая','Ósemka','八分音符','8분음표','โน้ตตัวเขบ็ตหนึ่งชั้น','Nốt móc đơn','ရှစ်သံတစ်စိတ်');
_T('staff-sixteenth','十六分音符','Sixteenth Note','Double croche','Sechzehntel','Semicroma','Semicorchea','Semicolcheia','Δέκατο έκτο','Шестнадцатая','Szesnastka','十六分音符','16분음표','โน้ตตัวเขบ็ตสองชั้น','Nốt móc kép','ဆယ့်ခြောက်သံ');
_T('staff-whole-rest','全休止','Whole Rest','Pause','Ganze Pause','Pausa di semibreve','Silencio de redonda','Pausa de semibreve','Παύση ολοκλήρου','Целая пауза','Pauza całonutowa','全休符','온쉼표','ตัวหยุดตัวกลม','Dấu lặng tròn','တစ်သံလုံးတိတ်');
_T('staff-half-rest','二分休止','Half Rest','Demi-pause','Halbe Pause','Pausa di minima','Silencio de blanca','Pausa de mínima','Παύση μισού','Половинная пауза','Pauza półnutowa','二分休符','2분쉼표','ตัวหยุดตัวขาว','Dấu lặng trắng','နှစ်သံတစ်ဝက်တိတ်');
_T('staff-quarter-rest','四分休止','Quarter Rest','Soupir','Viertelpause','Pausa di semiminima','Silencio de negra','Pausa de semínima','Παύση τετάρτου','Четвертная пауза','Pauza ćwierćnutowa','四分休符','4분쉼표','ตัวหยุดตัวดำ','Dấu lặng đen','လေးသံတစ်စိတ်တိတ်');
_T('staff-48','4拍','4 beats','4 temps','4 Schläge','4 battiti','4 tiempos','4 tempos','4 χτύποι','4 доли','4 uderzenia','4拍','4박','4 จังหวะ','4 phách','၄ ချက်');
_T('staff-24','2拍','2 beats','2 temps','2 Schläge','2 battiti','2 tiempos','2 tempos','2 χτύποι','2 доли','2 uderzenia','2拍','2박','2 จังหวะ','2 phách','၂ ချက်');
_T('staff-14','1拍','1 beat','1 temps','1 Schlag','1 battito','1 tiempo','1 tempo','1 χτύπος','1 доля','1 uderzenie','1拍','1박','1 จังหวะ','1 phách','၁ ချက်');
_T('staff-12','½拍','½ beat','½ temps','½ Schlag','½ battito','½ tiempo','½ tempo','½ χτύπος','½ доли','½ uderzenia','½拍','½박','½ จังหวะ','½ phách','½ ချက်');
_T('staff-14v','¼拍','¼ beat','¼ temps','¼ Schlag','¼ battito','¼ tiempo','¼ tempo','¼ χτύπος','¼ доли','¼ uderzenia','¼拍','¼박','¼ จังหวะ','¼ phách','¼ ချက်');
_T('staff-math','数学关系：1 个全音符 = 2 个二分音符 = 4 个四分音符 = 8 个八分音符。全是 ×2 或 ÷2 的关系，非常好记。','Math: 1 whole = 2 half = 4 quarter = 8 eighth notes. All ×2 or ÷2.','1 ronde = 2 blanches = 4 noires','1 Ganze = 2 Halbe = 4 Viertel','1 semibreve = 2 minime = 4 semiminime','1 redonda = 2 blancas = 4 negras','1 semibreve = 2 mínimas = 4 semínimas','×2 και ÷2','Всегда ×2 или ÷2','Zawsze ×2 lub ÷2','1全音符=2二分=4四分=8八分','온음표=2분=4분=8분 관계','โน้ตตัวกลม 1 ตัว = ตัวขาว 2 = ตัวดำ 4','1 nốt tròn = 2 trắng = 4 đen = 8 móc đơn','တစ်လုံး=၂တစ်ဝက်=၄လေးစိတ်');
_T('staff-rest-tip','全休止"吊"在第四线下面 → 像倒挂的帽子。二分休止"坐"在第三线上面 → 像小板凳。','Whole rest hangs below line 4. Half rest sits on line 3.','La pause pend sous la 4e ligne','Ganze Pause hängt unter Linie 4','La pausa di semibreve pende','El silencio de redonda cuelga','펴머리','休符の覚え方','จำง่ายๆ','Mẹo ghi nhớ','မှတ်ဉာဏ်နည်း');
_T('staff-ts-title','分母：以几分音符为 1 拍。分子：每小节有几拍。','Denominator = beat unit. Numerator = beats per bar.','Dénominateur = unité de temps','Nenner = Schlageinheit','Denominatore = unità','Denominador = unidad','Denominador = unidade','Παρονομαστής','Знаменатель = длительность','Mianownik = jednostka','分母=1拍の単位','분모=1박의 단위','ตัวส่วน = หน่วยจังหวะ','Mẫu số = đơn vị phách','ပိုင်းခြေ = တစ်ချက်စာ');
_T('staff-44','强 弱 次强 弱 — 最常见的拍子','Strong Weak Medium Weak — most common','Le plus commun','Am häufigsten','Il più comune','El más común','O mais comum','Το πιο κοινό','Самый частый','Najczęstszy','最も一般的','가장 일반적인','พบมากที่สุด','Phổ biến nhất','အသုံးအများဆုံး');
_T('staff-34','强 弱 弱 — 圆舞曲、华尔兹','Strong Weak Weak — Waltz','Valse','Walzer','Valzer','Vals','Valsa','Βαλς','Вальс','Walc','ワルツ','왈츠','วอลทซ์','Valse','ဝေါ့ဇ်');
_T('staff-24p','强 弱 — 进行曲、儿歌','Strong Weak — March','Marche','Marsch','Marcia','Marcha','Marcha','Εμβατήριο','Марш','Marsz','行進曲','행진곡','มาร์ช','Hành khúc','စစ်ချီသီချင်း');
_T('staff-68','强 弱 弱 次强 弱 弱 — 流动感、民谣','Compound feel — Folk','Fluide — Folk','Fließend — Folk','Fluido — Folk','Fluido — Folk','Fluido — Folk','Ρευστό','Плавно','Płynny','流れるような','흐르는 느낌','ลื่นไหล','Trôi chảy','စီးဆင်းသလို');
_T('staff-treble-mnem','线：E-G-B-D-F 口诀：Every Good Boy Deserves Food。间：F-A-C-E 口诀：FACE','Lines: E-G-B-D-F. Spaces: F-A-C-E.','Lignes: Mi-Sol-Si-Ré-Fa','Linien: E-G-H-D-F','Linee: Mi-Sol-Si-Re-Fa','Líneas: Mi-Sol-Si-Re-Fa','Linhas: Mi-Sol-Si-Ré-Fá','Γραμμές: Μι-Σολ-Σι-Ρε-Φα','Линии: Ми-Соль-Си-Ре-Фа','Linie: E-G-H-D-F','線：E-G-B-D-F','선: E-G-B-D-F','เส้น: E-G-B-D-F','Dòng: E-G-B-D-F','မျဉ်း: E-G-B-D-F');
_T('staff-bass-mnem','线：G-B-D-F-A 口诀：Good Boys Do Fine Always。间：A-C-E-G 口诀：All Cows Eat Grass','Lines: G-B-D-F-A. Spaces: A-C-E-G.','Lignes: Sol-Si-Ré-Fa-La','Linien: G-H-D-F-A','Linee: Sol-Si-Re-Fa-La','Líneas: Sol-Si-Re-Fa-La','Linhas: Sol-Si-Ré-Fá-Lá','Γραμμές: Σολ-Σι-Ρε-Φα-Λα','Линии: Соль-Си-Ре-Фа-Ля','Linie: G-H-D-F-A','線：G-B-D-F-A','선: G-B-D-F-A','เส้น: G-B-D-F-A','Dòng: G-B-D-F-A','မျဉ်း: G-B-D-F-A');
_T('staff-tip','🎯 学习建议：五个板块按顺序学。多画多认，光看是学不会的。配合节拍器练节奏更有效！','🎯 Tip: Learn in order. Draw and practice — just reading won\'t cut it!','Apprenez dans l\'ordre, dessinez !','Der Reihe nach lernen, zeichnen!','Impara in ordine, disegna!','¡Aprende en orden, dibuja!','Aprenda na ordem, desenhe!','Μάθετε με σειρά','Учите по порядку','Ucz się po kolei','順番に学んで、描いて練習','순서대로 배우고 그리면서 익히세요','เรียนรู้ตามลำดับ ฝึกวาด','Học theo thứ tự, vừa học vừa vẽ','အစဉ်လိုက်လေ့လာပါ');

// --- Circle of Fifths ---
_T('cof-title','🎵 音乐五度圈','🎵 Circle of Fifths','🎵 Cycle des quintes','🎵 Quintenzirkel','🎵 Circolo delle quinte','🎵 Círculo de quintas','🎵 Círculo de quintas','🎵 Κύκλος των πεμπτών','🎵 Квинтовый круг','🎵 Koło kwintowe','🎵 五度圏','🎵 5도권','🎵 วงกลมคู่ห้า','🎵 Vòng tròn quãng năm','🎵 ပဉ္စမအဝိုင်း');
_T('cof-subtitle','Circle of Fifths — 点任意键查看它的和弦家族','Circle of Fifths — click any key to see chord family','Cliquez pour voir les accords','Klick für Akkorde','Clicca per vedere gli accordi','Haz clic para ver acordes','Clique para ver acordes','Κάντε κλικ','Нажмите для аккордов','Kliknij po akordy','クリックでコード表示','클릭하여 코드 보기','คลิกเพื่อดูคอร์ด','Nhấn để xem hợp âm','နှိပ်၍ ကော့ဒ်ကြည့်');
_T('cof-cw','顺时针 → 升号 ♯','Clockwise → Sharps ♯','Sens horaire → dièses','Uhrzeigersinn → Kreuze','Orario → diesis','Horario → sostenidos','Horário → sustenidos','Ωρολογιακά → διέσεις','По часовой → диезы','Zgodnie z zegarem → krzyżyki','時計回り→♯','시계방향→♯','ตามเข็ม→ชาร์ป','Cùng chiều kim → thăng','နာရီလက်တံအတိုင်း→♯');
_T('cof-ccw','逆时针 → 降号 ♭','Counter-clockwise → Flats ♭','Sens inverse → bémols','Gegen Uhrzeigersinn → B','Antiorario → bemolli','Antihorario → bemoles','Anti-horário → bemóis','Αντίθετα → υφέσεις','Против часовой → бемоли','Przeciwnie → bemole','反時計回り→♭','반시계방향→♭','ทวนเข็ม→แฟล็ต','Ngược chiều kim → giáng','နာရီလက်တံပြောင်းပြန်→♭');
_T('cof-center','五度圈','Circle of 5ths','Cycle des quintes','Quintenzirkel','Circolo delle quinte','Círculo de quintas','Círculo de quintas','Κύκλος των 5','Квинтовый круг','Koło kwintowe','五度圏','5도권','วงกลมคู่ 5','Vòng 5','၅ပဉ္စမအဝိုင်း');
_T('cof-chord-family','和弦家族：','Chord Family: ','Famille d\'accords : ','Akkordfamilie: ','Famiglia di accordi: ','Familia de acordes: ','Família de acordes: ','Οικογένεια συγχορδιών: ','Семейство аккордов: ','Rodzina akordów: ','コードファミリー：','코드 패밀리: ','ตระกูลคอร์ด: ','Gia đình hợp âm: ','ကော့ဒ်မိသားစု: ');
_T('cof-of',' 的七级和弦','\'s 7 Diatonic Chords',' 7 accords diatoniques',' 7 diatonische Akkorde',' 7 accordi diatonici',' 7 acordes diatónicos',' 7 acordes diatônicos',' 7 διατονικές συγχορδίες',' 7 диатонических аккордов',' 7 akordów diatonicznych','の7つのダイアトニックコード','의 7개 다이어토닉 코드',' คอร์ดไดอาโทนิกทั้ง 7',' 7 hợp âm diatonic','၏ ၇ဒိုင်ယာတိုနစ်ကော့ဒ်');
_T('cof-legend','🟢 绿圈 = 大三和弦 (I/IV/V) 🔴 红圈 = 小三和弦 (ii/iii/vi) 🟣 紫圈 = 减三和弦 (vii°)','🟢 Green = Major 🔴 Red = Minor 🟣 Purple = Diminished','🟢 Vert = Majeur 🔴 Rouge = Mineur 🟣 Violet = Diminué','🟢 Grün = Dur 🔴 Rot = Moll 🟣 Lila = Vermindert','🟢 Verde = Maggiore 🔴 Rosso = Minore 🟣 Viola = Diminuito','🟢 Verde = Mayor 🔴 Rojo = Menor 🟣 Morado = Disminuido','🟢 Verde = Maior 🔴 Vermelho = Menor 🟣 Roxo = Diminuto','🟢 Πράσινο = Μείζον 🔴 Κόκκινο = Ελάσσον 🟣 Μωβ = Ελαττωμένη','🟢 Зелёный = Мажор 🔴 Красный = Минор 🟣 Фиолетовый = Уменьш.','🟢 Zielony = Dur 🔴 Czerwony = Moll 🟣 Fioletowy = Zmniejszona','🟢 緑 = 長 🔴 赤 = 短 🟣 紫 = 減','🟢 초록 = 장 🔴 빨강 = 단 🟣 보라 = 감','🟢 เขียว = เมเจอร์ 🔴 แดง = ไมเนอร์ 🟣 ม่วง = ดิมินิช','🟢 Xanh = Trưởng 🔴 Đỏ = Thứ 🟣 Tím = Giảm','🟢 အစိမ်း = မေဂျာ 🔴 အနီ = မိုင်နာ 🟣 ခရမ်း = ဒင်မစ်ရှ်');
_T('cof-what','📖 什么是五度圈？','📖 What is the Circle of Fifths?','Qu\'est-ce que le cycle des quintes ?','Was ist der Quintenzirkel?','Cos\'è il circolo delle quinte?','¿Qué es el círculo de quintas?','O que é o círculo de quintas?','Τι είναι ο κύκλος των πεμπτών;','Что такое квинтовый круг?','Czym jest koło kwintowe?','五度圏とは？','5도권이란?','วงกลมคู่ห้าคืออะไร?','Vòng tròn quãng năm là gì?','ပဉ္စမအဝိုင်းဆိုတာဘာလဲ။');
_T('cof-core','🛠️ 核心技能：一眼找出任何调的各级和弦','🛠️ Core Skill: Find all diatonic chords for any key','Trouver tous les accords','Alle Akkorde finden','Trova tutti gli accordi','Encuentra todos los acordes','Encontre todos os acordes','Βρείτε όλες τις συγχορδίες','Найти все аккорды','Znajdź wszystkie akordy','すべてのコードを見つける','모든 코드 찾기','หาคอร์ดทั้งหมด','Tìm tất cả hợp âm','ကော့ဒ်အားလုံးရှာပါ');
_T('cof-how','👀 怎么读五度圈？','👀 How to read the Circle of Fifths?','Comment lire le cycle des quintes ?','Wie liest man den Quintenzirkel?','Come si legge?','¿Cómo se lee?','Como ler?','Πώς διαβάζεται;','Как читать?','Jak czytać?','五度圏の読み方','5도권 읽는 법','อ่านวงกลมคู่ห้าอย่างไร?','Cách đọc vòng tròn quãng năm?','ပဉစမအဝိုင်းကိုဘယ်လိုဖတ်မလဲ။');
_T('cof-deg','级数','Degree','Degré','Stufe','Grado','Grado','Grau','Βαθμός','Ступень','Stopień','度数','도수','ขั้น','Bậc','အဆင့်');
_T('cof-chord-col','和弦','Chord','Accord','Akkord','Accordo','Acorde','Acorde','Συγχορδία','Аккорд','Akord','コード','코드','คอร์ด','Hợp âm','ကော့ဒ်');
_T('cof-type-col','类型','Type','Type','Typ','Tipo','Tipo','Tipo','Τύπος','Тип','Typ','タイプ','유형','ประเภท','Loại','အမျိုးအစား');
_T('cof-pos-col','圈上位置','Circle Position','Position','Position','Posizione','Posición','Posição','Θέση','Позиция','Pozycja','位置','위치','ตำแหน่ง','Vị trí','တည်နေရာ');
_T('cof-major-tag','大三','Maj','Maj','Dur','Magg','May','Maior','Μείζ','Маж','Dur','長','장','เมเจอร์','Trưởng','မေဂျာ');
_T('cof-minor-tag','小三','min','min','moll','min','men','men','Ελάσ','Мин','moll','短','단','ไมเนอร์','Thứ','မိုင်နာ');
_T('cof-dim-tag','减三','dim','dim','verm','dim','dis','dim','Ελατ','Ум','zm','減','감','ดิมินิช','Giảm','ဒင်');
_T('cof-rule','🎸 规律：I、IV、V 是大三和弦（圈上紧邻的 3 个外圈大调）；vi = I的关系小调（同一位置内圈），ii = IV的关系小调，iii = V的关系小调；vii° = ii根音顺2格的关系小调降五度。选 C 调记熟 → 换任意调照搬即可。','Rule: I,IV,V=major; vi=rel min of I; ii=rel min of IV; iii=rel min of V; vii°=dim. Memorize in C, apply to any key.','Règle: I,IV,V=majeur, vi=mineur relatif','Regel: I,IV,V=Dur, vi=relatives Moll','Regola: I,IV,V=maggiore','Regla: I,IV,V=mayor','Regra: I,IV,V=maior','Κανόνας','Правило','Zasada','ルール','규칙','กฎ','Quy tắc','စည်းမျဉ်း');

// --- Ear Training ---
_T('ear-title','🎵 绝对音感练耳','🎵 Ear Training','🎵 Entraînement auditif','🎵 Gehörtraining','🎵 Ear Training','🎵 Entrenamiento auditivo','🎵 Treino auditivo','🎵 Εκπαίδευση αυτιού','🎵 Тренировка слуха','🎵 Trening słuchu','🎵 聴音訓練','🎵 청음 훈련','🎵 ฝึกหู','🎵 Luyện tai','🎵 နားလေ့ကျင့်ခြင်း');
_T('ear-desc','听两个音 → 判断音程 → 翻答案对比','Listen → Identify interval → Reveal answer','Écoutez → Identifiez → Vérifiez','Hören → Erkennen → Prüfen','Ascolta → Identifica → Verifica','Escucha → Identifica → Verifica','Ouça → Identifique → Verifique','Ακούστε → Βρείτε → Ελέγξτε','Слушай → Определи → Проверь','Słuchaj → Rozpoznaj → Sprawdź','聴く→判別→答え','듣기→판별→확인','ฟัง→ระบุ→ตรวจ','Nghe→Đoán→Xem đáp án','နားထောင်→ခွဲခြား→အဖြေစစ်');
_T('ear-asc','⬆ 上行','⬆ Ascending','⬆ Ascendant','⬆ Aufsteigend','⬆ Ascendente','⬆ Ascendente','⬆ Ascendente','⬆ Ανιών','⬆ Вверх','⬆ W górę','⬆ 上行','⬆ 상행','⬆ ขาขึ้น','⬆ Đi lên','⬆ အပေါ်တက်');
_T('ear-desc-mode','⬇ 下行','⬇ Descending','⬇ Descendant','⬇ Absteigend','⬇ Discendente','⬇ Descendente','⬇ Descendente','⬇ Κατιών','⬇ Вниз','⬇ W dół','⬇ 下行','⬇ 하행','⬆ ขาลง','⬇ Đi xuống','⬇ အောက်ဆင်း');
_T('ear-both','↕ 混合','↕ Mixed','↕ Mixte','↕ Gemischt','↕ Misto','↕ Mixto','↕ Misto','↕ Μεικτό','↕ Смешанный','↕ Mieszany','↕ 混合','↕ 혼합','↕ ผสม','↕ Hỗn hợp','↕ ရောထွေး');
_T('ear-play-hint','点击播放音程','Tap to play interval','Appuyez pour jouer','Tippen zum Abspielen','Tocca per ascoltare','Toca para escuchar','Toque para ouvir','Πατήστε για αναπαραγωγή','Нажмите для воспроизведения','Kliknij by odtworzyć','タップして再生','탭하여 재생','กดเพื่อเล่น','Nhấn để phát','နှိပ်၍ဖွင့်');
_T('ear-replay','可以反复点击播放','Tap again to replay','Appuyez à nouveau','Erneut tippen','Tocca di nuovo','Toca de nuevo','Toque novamente','Πατήστε ξανά','Нажмите ещё раз','Kliknij ponownie','もう一度タップ','다시 탭','กดอีกครั้งเพื่อเล่นซ้ำ','Nhấn lại để phát lại','ထပ်နှိပ်၍ပြန်ဖွင့်');
_T('ear-reveal','👁 翻看答案','👁 Reveal Answer','👁 Voir la réponse','👁 Antwort zeigen','👁 Mostra risposta','👁 Mostrar respuesta','👁 Mostrar resposta','👁 Δείτε απάντηση','👁 Показать ответ','👁 Pokaż odpowiedź','👁 答えを見る','👁 정답 보기','👁 ดูคำตอบ','👁 Xem đáp án','👁 အဖြေကြည့်');
_T('ear-next','➡ 下一题','➡ Next','➡ Suivant','➡ Weiter','➡ Prossimo','➡ Siguiente','➡ Próximo','➡ Επόμενο','➡ Далее','➡ Dalej','➡ 次へ','➡ 다음','➡ ถัดไป','➡ Tiếp','➡ နောက်တစ်ခု');
_T('ear-correct','✅ 我答对了','✅ I got it right','✅ J\'ai bon','✅ Richtig','✅ Giusto','✅ ¡Correcto!','✅ Acertei!','✅ Σωστά!','✅ Верно!','✅ Dobrze!','✅ 正解！','✅ 맞았어요!','✅ ถูกต้อง!','✅ Đúng rồi!','✅ မှန်တယ်။');
_T('ear-wrong','❌ 我答错了','❌ I got it wrong','❌ Faux','❌ Falsch','❌ Sbagliato','❌ Mal','❌ Errei','❌ Λάθος','❌ Неверно','❌ Źle','❌ 不正解','❌ 틀렸어요','❌ ผิด','❌ Sai rồi','❌ မှားတယ်။');
_T('ear-select-all','全选','Select All','Tout sélectionner','Alle auswählen','Seleziona tutto','Seleccionar todo','Selecionar tudo','Επιλογή όλων','Выбрать всё','Zaznacz wszystkie','全て選択','모두 선택','เลือกทั้งหมด','Chọn tất cả','အားလုံးရွေး');
_T('ear-select-none','全不选','Deselect All','Tout désélectionner','Alle abwählen','Deseleziona tutto','Deseleccionar todo','Desmarcar tudo','Αποεπιλογή','Снять всё','Odznacz wszystkie','全て解除','모두 해제','ยกเลิกทั้งหมด','Bỏ chọn tất cả','အားလုံးဖြုတ်');
_T('ear-select-easy','入门 (3/4/5 度)','Beginner (3rds/4ths/5ths)','Débutant','Anfänger','Principiante','Principiante','Iniciante','Αρχάριος','Начинающий','Początkujący','初級','초급','ระดับเริ่มต้น','Mới bắt đầu','အစပြုသူ');
_T('ear-filter-title','🎯 选择练习音程','🎯 Select Intervals to Practice','Choisir les intervalles','Intervalle auswählen','Scegli intervalli','Elige intervalos','Escolha intervalos','Επιλογή διαστημάτων','Выбор интервалов','Wybierz interwały','練習する音程を選択','연습할 음정 선택','เลือกช่วงคู่','Chọn quãng để luyện','လေ့ကျင့်မည့်အကွာအဝေးရွေး');
_T('ear-ref-title','📋 音程速查表','📋 Interval Reference','Référence des intervalles','Intervall-Referenz','Riferimento intervalli','Referencia de intervalos','Referência de intervalos','Αναφορά διαστημάτων','Справка интервалов','Referencja interwałów','音程早見表','음정 참조표','ตารางอ้างอิงช่วงคู่','Bảng tham khảo quãng','အကွာအဝေးကိုးကားဇယား');
_T('ear-semi-col','半音数','Semitones','Demi-tons','Halbtöne','Semitoni','Semitonos','Semitons','Ημιτόνια','Полутона','Półtony','半音数','반음수','จำนวนครึ่งเสียง','Số bán cung','တစ်ဝက်သံအရေအတွက်');
_T('ear-name-col','音程','Interval','Intervalle','Intervall','Intervallo','Intervalo','Intervalo','Διάστημα','Интервал','Interwał','音程','음정','ช่วงคู่','Quãng','အကွာအဝေး');
_T('ear-abbr-col','简称','Abbr','Abrév','Abk','Abbr','Abrev','Abrev','Συντ','Сокр','Skr','略称','약칭','ตัวย่อ','Tắt','အတိုကောက်');
_T('ear-qual-col','性质','Quality','Qualité','Qualität','Qualità','Calidad','Qualidade','Ποιότητα','Качество','Jakość','性質','성질','คุณภาพ','Tính chất','အရည်အသွေး');
_T('ear-song-col','记忆歌曲','Memory Song','Chanson','Lied','Canzone','Canción','Canção','Τραγούδι','Песня','Piosenka','記憶曲','기억곡','เพลงจำ','Bài hát gợi nhớ','မှတ်ဉာဏ်သီချင်း');
_T('ear-playing','播放中…','Playing…','Joue…','Spielt…','In riproduzione…','Reproduciendo…','Tocando…','Αναπαραγωγή…','Играет…','Gra…','再生中…','재생 중…','กำลังเล่น…','Đang phát…','ဖွင့်နေသည်…');
_T('ear-score-rate','% 正确率','% Accuracy','% de réussite','% Genauigkeit','% precisione','% acierto','% acerto','% ακρίβεια','% точность','% celności','% 正解率','% 정답률','% ความแม่นยำ','% chính xác','% တိကျမှု');

// --- Interval names ---
_T('int-m2','小二度','minor 2nd','seconde mineure','kleine Sekunde','seconda minore','segunda menor','segunda menor','μικρή δευτέρα','малая секунда','sekunda mała','短二度','단2도','ไมเนอร์เซคันด์','quãng 2 thứ','အသေးစားဒုတိယ');
_T('int-M2','大二度','major 2nd','seconde majeure','große Sekunde','seconda maggiore','segunda mayor','segunda maior','μεγάλη δευτέρα','большая секунда','sekunda wielka','長二度','장2도','เมเจอร์เซคันด์','quãng 2 trưởng','အကြီးစားဒုတိယ');
_T('int-m3','小三度','minor 3rd','tierce mineure','kleine Terz','terza minore','tercera menor','terça menor','μικρή τρίτη','малая терция','tercja mała','短三度','단3도','ไมเนอร์เทิร์ด','quãng 3 thứ','အသေးစားတတိယ');
_T('int-M3','大三度','major 3rd','tierce majeure','große Terz','terza maggiore','tercera mayor','terça maior','μεγάλη τρίτη','большая терция','tercja wielka','長三度','장3도','เมเจอร์เทิร์ด','quãng 3 trưởng','အကြီးစားတတိယ');
_T('int-P4','纯四度','perfect 4th','quarte juste','reine Quarte','quarta giusta','cuarta justa','quarta justa','καθαρή τετάρτη','чистая кварта','kwarta czysta','完全四度','완전4도','เพอร์เฟคโฟร์ท','quãng 4 đúng','စင်ကြယ်စတုတ္ထ');
_T('int-TT','增四/减五','tritone','triton','Tritonus','tritono','tritono','trítono','τρίτονο','тритон','tryton','三全音','트라이톤','ไทรโทน','quãng 3 cung','ထရိုင်တုန်း');
_T('int-P5','纯五度','perfect 5th','quinte juste','reine Quinte','quinta giusta','quinta justa','quinta justa','καθαρή πέμπτη','чистая квинта','kwinta czysta','完全五度','완전5도','เพอร์เฟคฟิฟธ์','quãng 5 đúng','စင်ကြယ်ပဉ္စမ');
_T('int-m6','小六度','minor 6th','sixte mineure','kleine Sexte','sesta minore','sexta menor','sexta menor','μικρή έκτη','малая секста','seksta mała','短六度','단6도','ไมเนอร์ซิกซ์','quãng 6 thứ','အသေးစားဆဋ္ဌမ');
_T('int-M6','大六度','major 6th','sixte majeure','große Sexte','sesta maggiore','sexta mayor','sexta maior','μεγάλη έκτη','большая секста','seksta wielka','長六度','장6도','เมเจอร์ซิกซ์','quãng 6 trưởng','အကြီးစားဆဋ္ဌမ');
_T('int-m7','小七度','minor 7th','septième mineure','kleine Septime','settima minore','séptima menor','sétima menor','μικρή εβδόμη','малая септима','septyma mała','短七度','단7도','ไมเนอร์เซเวนธ์','quãng 7 thứ','အသေးစား�သတ္တမ');
_T('int-M7','大七度','major 7th','septième majeure','große Septime','settima maggiore','séptima mayor','sétima maior','μεγάλη εβδόμη','большая септима','septyma wielka','長七度','장7도','เมเจอร์เซเวนธ์','quãng 7 trưởng','အကြီးစားသတ္တမ');
_T('int-P8','纯八度','perfect octave','octave juste','reine Oktave','ottava giusta','octava justa','oitava justa','καθαρή οκτάβα','чистая октава','oktawa czysta','完全八度','완전8도','เพอร์เฟคออกเทฟ','quãng 8 đúng','စင်ကြယ်အဋ္ဌမ');

// --- misc ---
_T('ear-c','不协和','Dissonant','Dissonant','Dissonant','Dissonante','Disonante','Dissonante','Διάφωνο','Диссонанс','Dysonans','不協和','불협화','ไม่กลมกลืน','Nghịch','အသံမညီ');
_T('ear-cc','协和','Consonant','Consonant','Konsonant','Consonante','Consonante','Consonante','Σύμφωνο','Консонанс','Konsonans','協和','협화','กลมกลืน','Thuận','အသံညီ');
_T('ear-cp','完全协和','Perfect Consonance','Consonance parfaite','Perfekte Konsonanz','Consonanza perfetta','Consonancia perfecta','Consonância perfeita','Τέλεια συμφωνία','Совершенный консонанс','Perfekcyjny konsonans','完全協和','완전협화','กลมกลืนสมบูรณ์','Hòa âm hoàn hảo','ပြီးပြည့်စုံညီညွတ်');
_T('ear-ct','紧张','Tense','Tendu','Spannungsvoll','Teso','Tenso','Tenso','Τεντωμένο','Напряжённый','Napięty','緊張','긴장','ตึงเครียด','Căng thẳng','တင်းမာ');

// Auto-init
document.addEventListener('DOMContentLoaded', function() {
  const saved = localStorage.getItem('metronome-lang') || 'zh-CN';
  applyAllLang(saved);
  const sel = document.querySelector('[id*="langSelect"]');
  if (sel) { sel.value = saved; sel.addEventListener('change', function(){ applyAllLang(this.value); }); }
});
