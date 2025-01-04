let timer;
let timeLeft = 60; // Başlangıç süresi
let score = 0; // Başlangıç puanı
let currentGame = ""; // Şu anki oyun türü
let currentUser = ""; // Şu anki kullanıcı adı

// Oyunlar için kelimeler
const words = {
    "karisikHarfler": [
        "elma", "masa", "araba", "kedi", "köpek", "pencere", "telefon", "kamera", "bilgisayar", "yazılım",
        "okul", "top", "dondurma", "park", "yatak", "kalem", "kitap", "defter", "çiçek",
        "gitar", "televizyon", "kutu", "adam", "eldiven", "kar", "ışık", "çanta", "mutfak",
        "halı", "resim", "ağaç", "şemsiye", "tencere", "ayakkabı", "kuş", "balık",
        "yıldız", "deniz", "güneş", "bulut", "ay", "kumar", "sinema", "tiyatro", "otobüs", "tren",
        "uçak", "limon", "portakal", "muz", "karpuz", "çilek", "kiraz", "dut", "armut", "üzüm", "nar",
        "kalorifer", "buzdolabı", "şarj", "dolap", "masaüstü", "klavye", "fare", "bilim", "radyo", "pazartesi",
        "salı", "çarşamba", "perşembe", "cuma", "cumartesi", "pazar", "yemek", "çorba", "salata", "börek",
        "kırmızı", "mavi", "yeşil", "beyaz", "sarı", "mor", "turuncu", "gri", "siyah", "kahverengi",
        "taş", "toprak", "su", "hoca", "öğrenci", "okul", "şeker", "tatlı", "tuzlu", "acı",
        "balon", "kamyon", "jip", "sandal", "gemi", "otobüs", "tren", "uçak", "helikopter",
        "bahçe", "orman", "şehir", "köy", "ev", "apartman", "daire", "oda", "balkon", "çatı",
        "duvar", "kapı", "pencere", "koltuk", "sandık", "yatak", "kasa", "ayna", "tablo", "zincir",
        "dergi", "gazete", "film", "kamera", "lamba", "televizyon", "radyo", "müzik", "keman",
        "flüt", "gitar", "davul","piyano", "sanat", "tablo", "fotoğraf", "heykel",
        "yazar", "kitap", "şiir", "roman", "hikaye", "masal", "tarih", "coğrafya", "fizik",
        "kimya", "biyoloji", "matematik", "geometri", "felsefe", "edebiyat",
        "dil", "din", "sanat", "müzik", "resim", "spor", "futbol", "basketbol", "voleybol",
        "yüzme", "tenis", "golf", "satranç", "hentbol", "kano", "sörf", "kayak",
        "mavi", "kırmızı", "siyah", "beyaz", "sarı", "turuncu", "yeşil", "mor", "pembe", "bej",
        "limon", "greyfurt", "mandalina", "kivi", "avokado", "havuç", "domates", "salatalık", "patlıcan", "soğan",
        "biber", "marul", "karnabahar", "brokoli", "fasulye", "bezelye", "nohut", "mercimek", "pirinç", "bulgur",
        "kepek", "kinoa", "çörekotu", "ceviz", "fındık", "badem", "zeytin", "peynir", "tereyağı", "süt",
        "yoğurt", "kaymak", "dondurma", "bal", "çikolata", "şeker", "reçel", "pekmez", "tahin", "helva", "üzüm", "incir", "kayısı",
        "erik", "şeftali", "kavun", "karpuz", "vişne", "çilek", "kiraz"
    ],
    "ingTurkKelime": {
        "apple": "elma", "table": "masa", "car": "araba", "cat": "kedi", "dog": "köpek",
        "window": "pencere", "phone": "telefon", "camera": "kamera", "computer": "bilgisayar", "book": "kitap",
        "notebook": "defter", "school": "okul", "icecream": "dondurma", "park": "park", "home": "ev",
        "software": "yazılım", "door": "kapı", "teacher": "öğretmen", "student": "öğrenci", "flower": "çiçek",
        "garden": "bahçe", "water": "su", "chair": "sandalye", "lamp": "lamba", "picture": "resim",
        "wall": "duvar", "roof": "çatı", "kitchen": "mutfak", "ball": "top", "glass": "bardak",
        "plate": "tabak", "fork": "çatal", "spoon": "kaşık", "knife": "bıçak", "bus": "otobüs",
        "train": "tren", "plane": "uçak", "ship": "gemi", "mountain": "dağ", "river": "nehir",
        "lake": "göl", "forest": "orman", "sky": "gökyüzü", "sun": "güneş", "moon": "ay",
        "star": "yıldız", "tree": "ağaç", "bookstore": "kitapçı", "library": "kütüphane",
        "bread": "ekmek", "cheese": "peynir", "milk": "süt", "egg": "yumurta",
        "fish": "balık", "chicken": "tavuk", "meat": "et", "soup": "çorba", "salad": "salata",
        "orange": "portakal", "banana": "muz", "grape": "üzüm", "peach": "şeftali", "night": "gece",
        "cherry": "kiraz", "strawberry": "çilek", "watermelon": "karpuz", "pineapple": "ananas",
        "rabbit": "tavşan", "tiger": "kaplan", "lion": "aslan", "bird": "kuş", "ring": "yüzük",
        "horse": "at", "cow": "inek", "sheep": "koyun", "goat": "keçi",
        "elephant": "fil", "snake": "yılan", "spider": "örümcek", "bear": "ayı", "wolf": "kurt",
        "fox": "tilki", "monkey": "maymun", "frog": "kurbağa", "bee": "arı", "ant": "karınca",
        "mouse": "fare", "day": "gün", "donkey": "eşek", "camel": "deve",
        "bottle": "şişe", "dolphin": "yunus", "shark": "köpekbalığı", "hair": "saç",
        "jellyfish": "denizanası", "crab": "yengeç", "hand": "el", "penguin": "penguen",
        "panda": "panda", "koala": "koala", "kangaroo": "kanguru", "parrot": "papağan", "squirrel": "sincap"
    },
    "zitAnlamli": {
        "iyi": "kötü", "büyük": "küçük", "uzun": "kısa", "hızlı": "yavaş", "güzel": "çirkin",
        "açık": "kapalı", "sıcak": "soğuk", "aç": "tok", "yüksek": "alçak", "zengin": "fakir",
        "güçlü": "güçsüz", "doğru": "yanlış", "geniş": "dar", "temiz": "kirli", "şişman": "zayıf",
        "kalın": "ince", "sert": "yumuşak", "hafif": "ağır", "aydınlık": "karanlık",
        "uzak": "yakın", "mutlu": "üzgün", "kuru": "ıslak", "boş": "dolu", "yeni": "eski",
        "çalışkan": "tembel", "doğal": "yapay", "gece": "gündüz", "ilk": "son", "tatlı": "acı",
        "ucuz": "pahalı", "normal": "anormal", "kirli": "temiz", "dikkatli": "dikkatsiz",
        "başarılı": "başarısız", "yararlı": "zararlı", "meşgul": "müsait", "pozitif": "negatif",
        "parlak": "mat", "sağ": "sol", "çok": "az", "zor": "kolay", "sığ": "derin",
        "sorun": "çözüm", "genç": "yaşlı", "karanlık": "aydınlık", "taze": "bayat",
        "tutsak": "özgür", "var": "yok", "unutmak": "hatırlamak", "alt": "üst",
        "aynı": "farklı", "barış": "savaş", "bulanık": "berrak", "cesur": "korkak", "cimri": "cömert",
        "düzenli": "dağınık", "erken": "geç", "galip": "mağlup", "geri": "ileri",
        "gülmek": "ağlamak", "inmek": "çıkmak", "zam": "indirim", "günah": "sevap", "katı": "sıvı",
        "yaz": "kış", "kıtlık": "bolluk", "kuzey": "güney", "doğu": "batı", 
        "mağlubiyet": "galibiyet", "minimum": "maksimum", "ödül": "ceza", "sabah": "akşam", "ret": "kabul",
        "kibar": "kaba", "sonbahar": "ilkbahar", "tekil": "çoğul", "orijinal": "sahte", "yaramaz": "uslu",
        "parlak": "mat", "sık": "seyrek", "başlamak": "bitirmek", "gelir": "gider", "somut": "soyut",
        "geçmiş": "gelecek", "evet": "hayır", "azalmak": "çoğalmak", "çekmek": "itmek", "eksik": "fazla",
        "ilkel": "modern", "iniş": "çıkış", "tavan": "taban", "toplama": "çıkarma", "üretim": "tüketim"
    }

};

let highScores = JSON.parse(localStorage.getItem('highScores')) || []; // Yüksek skorları yerel depolamadan al

// Kullanıcı girişi fonksiyonu
function login() {
    const usernameInput = document.getElementById('username').value.trim();
    if (usernameInput) {
        currentUser = usernameInput; // Kullanıcı adı belirleniyor
        document.getElementById('current-user').textContent = currentUser;
        document.querySelector('.login-section').classList.add('hidden');
        document.querySelector('.game-selection').classList.remove('hidden');
        updateScoreboard(); // Skor tablosunu güncelle
    } else {
        alert("Lütfen bir kullanıcı adı girin!"); // Kullanıcı adı girilmezse uyarı
    }
}

// Kullanıcı çıkışı fonksiyonu
function logout() {
    currentUser = ""; // Kullanıcıyı sıfırla
    document.getElementById('username').value = "";
    document.querySelector('.login-section').classList.remove('hidden');
    document.querySelector('.game-selection').classList.add('hidden');
}

// Oyun başlatma fonksiyonu
function startGame(gameType) {
    // Yeni oyun başladığında tebrik mesajı göstermek için flag'i sıfırlıyoruz
    congratsMessageShown = false;
    document.querySelector('.game-selection').classList.add('hidden');
    document.getElementById('game-area').style.display = 'block';
    
    // İpucu alanını sıfırla
    hintUsed = false; // İpucu kullanılmadı, false olarak ayarlanıyor

    // İpucu butonunu etkinleştir
    const hintButton = document.getElementById('hint-button');
    hintButton.disabled = false;

    currentGame = gameType; // Oyun türü belirleniyor
    timeLeft = 60; // Süre sıfırlanıyor
    score = 0; // Puan sıfırlanıyor
    currentHighScore = getHighScore(gameType); // Yüksek puan alınıyor
    updateScoreAndTimer(); // Skor ve zaman güncelleniyor
    timer = setInterval(updateTimer, 1000); // Zamanlayıcı başlatılıyor
    loadNextQuestion(); // Sonraki soru yükleniyor
    setDescription(gameType); // Oyun açıklaması belirleniyor
}

let lastQuestionAnswer = ""; // Son sorunun cevabını tutan değişken

// Zaman güncelleniyor
function updateTimer() {
    timeLeft--;
    updateScoreAndTimer(); // Skor ve zaman güncelleniyor
    if (timeLeft <= 0) {
        clearInterval(timer); // Zamanlayıcıyı durdur

        // Süre bittiğinde, ekranda görünen sorunun cevabını lastQuestionAnswer olarak güncelle
        const currentAnswer = document.getElementById('game-content').dataset.answer;
        lastQuestionAnswer = currentAnswer; // Ekranda görünen sorunun cevabını lastQuestionAnswer olarak kaydet

        // Süre bitti mesajını göster
        const timeErrorMessage = document.getElementById("time-error-message"); // Hata mesajı alanı
        timeErrorMessage.textContent = `Süre Bitti! Son Cevap: ${lastQuestionAnswer}`; // Mesajı güncelle
        timeErrorMessage.style.display = "block"; // Mesajı görünür yap

        // 3 saniye sonra mesajı gizle ve oyunu bitir
        setTimeout(() => {
            timeErrorMessage.style.display = "none";
            endGame(); // Oyunu bitir
        }, 3000);
    }
}

// Kullanıcı cevabını kontrol etme
function checkAnswer(event) {
    // Kullanıcının Enter tuşuna basıp basmadığını kontrol et
    if (event.key === "Enter") {
        const userInput = document.getElementById('user-input').value.trim().toLowerCase();
        const correctAnswer = document.getElementById('game-content').dataset.answer.toLowerCase();
        const errorMessage = document.getElementById('error-message');

        if (userInput === correctAnswer) {
            score += 10; // Doğru cevap verildiğinde puan artırılıyor
            errorMessage.textContent = ""; // Hata mesajını temizle

            const highestScore = getHighScore(currentGame); // Geçmiş en yüksek skoru al
            if (score > highestScore && !congratsMessageShown) {
                showCongratsMessage(); // Tebrik mesajı göster
                congratsMessageShown = true; // Tebrik mesajının gösterildiğini kaydet
            }

            updateScoreAndTimer(); // Skor ve zaman güncelleniyor
            loadNextQuestion(); // Sonraki soru yükleniyor
        } else {
            // Cevap yanlışsa hata mesajını göster
            errorMessage.textContent = "Cevap yanlış. Tekrar deneyiniz.";
            
            // Hata mesajını 2 saniye sonra temizle
            setTimeout(() => {
                errorMessage.textContent = "";
            }, 2000);
        }
    }
}

// Oyun bitişi
function endGame() {
    clearInterval(timer); // Zamanlayıcıyı durdur
    document.getElementById('game-area').style.display = 'none';
    document.querySelector('.game-selection').classList.remove('hidden');

    saveHighScore(); // Yüksek skoru kaydet
    updateScoreboard(); // Skor tablosunu güncelle
}

// Yüksek skoru kaydetme
function saveHighScore() {
    const existingScore = highScores.find(
        (entry) => entry.game === currentGame && entry.user === currentUser
    );

    if (existingScore) {
        if (score > existingScore.score) {
            existingScore.score = score; // Yüksek skor güncelleniyor
        }
    } else {
        highScores.push({ game: currentGame, user: currentUser, score }); // Yeni skor ekleniyor
    }

    localStorage.setItem('highScores', JSON.stringify(highScores)); // Yüksek skorlar yerel depolamaya kaydediliyor
}

// Tebrik mesajı gösterme
let congratsMessageShown = false; // Tebrik mesajının gösterilip gösterilmediğini kontrol etmek için flag

function showCongratsMessage() {
    const congratsMessage = document.getElementById('congrats-message');
    congratsMessage.style.display = 'block';
    setTimeout(() => {
        congratsMessage.style.display = 'none'; // Mesaj birkaç saniye sonra kayboluyor
    }, 3000);
}

// En yüksek skoru almak için fonksiyon
function getHighestScoreForGame(game) {
    const gameScores = highScores.filter(entry => entry.game === game); // Oyun bazında filtreleme

    if (gameScores.length === 0) {
        return null; // Eğer skor yoksa null döner
    }

    return gameScores.reduce((max, entry) => {
        return entry.score > max.score ? entry : max; // En yüksek skoru döndürür
    });
}

// Yüksek skoru almak
function getHighScore(game) {
    const highestScoreEntry = getHighestScoreForGame(game);
    return highestScoreEntry ? highestScoreEntry.score : 0; // Yüksek skor döndürülür
}

// Oyun ismi döndürme
function getGameName(game) {
    switch (game) {
        case 'karisikHarfler': return 'Karışık Harflerden Kelime Bulma';
        case 'ingTurkKelime': return 'İngilizce-Türkçe Kelime Bulma';
        case 'zitAnlamli': return 'Zıt Anlamlısını Bulma';
        default: return 'Bilinmeyen Oyun';
    }
}

// Skor ve zaman güncelleme
function updateScoreAndTimer() {
    document.getElementById('timer').textContent = `Zaman: ${timeLeft}`;
    document.getElementById('score').textContent = `Puan: ${score}`;
}

// Oyun açıklamasını belirleme
function setDescription(game) {
    const descriptionElement = document.getElementById('description');
    switch (game) {
        case 'karisikHarfler':
            descriptionElement.textContent = "Karışık harflerden doğru kelimeyi bulmaya çalışın! Cevabınızı girdikten sonra Enter'a basınız.";
            break;
        case 'ingTurkKelime':
            descriptionElement.textContent = "İngilizce kelimenin Türkçe karşılığını bulmaya çalışın! Cevabınızı girdikten sonra Enter'a basınız.";
            break;
        case 'zitAnlamli':
            descriptionElement.textContent = "Verilen kelimenin zıt anlamlısını bulun! Cevabınızı girdikten sonra Enter'a basınız.";
            break;
    }
}

let usedWords = {
    "karisikHarfler": [],
    "ingTurkKelime": [],
    "zitAnlamli": []
};

function loadNextQuestion() {
    const hintArea = document.getElementById('hint-area');
    hintArea.textContent = "(1 İPUCU HAKKINIZ VAR) 5 puan karşılığında cevabın başharfini öğrenebilirsiniz!";
    const hintButton = document.getElementById('hint-button');

    const gameData = words[currentGame];
    let question, answer;

    if (currentGame === "karisikHarfler") {
        let word;
        let shuffledWord;
        do {
            word = gameData[Math.floor(Math.random() * gameData.length)]; // Kelime seçiliyor

            do {
                shuffledWord = word.split('').sort(() => Math.random() - 0.5).join(''); // Kelime karıştırılıyor
            } while (shuffledWord === word); // Karıştırılmış kelime orijinal kelimeyle aynıysa tekrar karıştır

        } while (usedWords["karisikHarfler"].includes(shuffledWord)); // Daha önce kullanılmışsa yeni kelime seç

        usedWords["karisikHarfler"].push(shuffledWord);

        question = shuffledWord;
        answer = word;
    } else if (currentGame === "ingTurkKelime") {
        const keys = Object.keys(gameData);
        let word;
        do {
            word = keys[Math.floor(Math.random() * keys.length)]; // İngilizce kelime seçiliyor
        } while (usedWords["ingTurkKelime"].includes(word));

        usedWords["ingTurkKelime"].push(word);

        question = word;
        answer = gameData[word];

    } else if (currentGame === "zitAnlamli") {
        const keys = Object.keys(gameData);
        let word;
        do {
            word = keys[Math.floor(Math.random() * keys.length)];
        } while (usedWords["zitAnlamli"].includes(word));

        usedWords["zitAnlamli"].push(word);

        question = word;
        answer = gameData[word];
    }

    const gameContent = document.getElementById('game-content');
    gameContent.textContent = question;
    gameContent.dataset.answer = answer;
    document.getElementById('user-input').value = "";

    // Eğer ipucu kullanıldıysa, mesajı "İpucu kullanıldı" yap
    if (hintUsed) {
        hintArea.textContent = "İpucu kullanıldı";
        hintButton.disabled = true;
        hintButton.textContent = "İpucu hakkınız bitti.";
    } else {
        hintArea.textContent = "(1 İPUCU HAKKINIZ VAR) 5 puan karşılığında cevabın başharfini öğrenebilirsiniz!"; // Normal ipucu mesajı
        hintButton.textContent = "İpucu Al";
    }
}

// Skor tablosunu güncelleme
function updateScoreboard() {
    const tableBody = document.getElementById('score-table-body');
    tableBody.innerHTML = "";

    const games = ["karisikHarfler", "ingTurkKelime", "zitAnlamli"];
    
    games.forEach(game => {
        const highestScoreEntry = getHighestScoreForGame(game);

        if (highestScoreEntry) {
            const row = document.createElement('tr');
            const gameCell = document.createElement('td');
            const userCell = document.createElement('td');
            const scoreCell = document.createElement('td');

            gameCell.textContent = getGameName(game);
            userCell.textContent = highestScoreEntry.user;
            scoreCell.textContent = highestScoreEntry.score;

            row.appendChild(gameCell);
            row.appendChild(userCell);
            row.appendChild(scoreCell);

            tableBody.appendChild(row);
        }
    });
}

let hintUsed = false; // İpucu kullanılıp kullanılmadığını kontrol eden flag

function showHint() {
    if (hintUsed) return; // İpucu zaten kullanıldıysa bir şey yapma

    const hintArea = document.getElementById('hint-area');
    const correctAnswer = document.getElementById('game-content').dataset.answer;

    // İpucu mesajını güncelle
    const hintMessage = `İpucu: ${correctAnswer.charAt(0).toUpperCase()}`;
    hintArea.textContent = hintMessage;

    hintUsed = true; // İpucu kullanıldı olarak işaretle

    // Puan azalt
    score -= 5;
    updateScoreAndTimer(); // Skor güncelleniyor
}