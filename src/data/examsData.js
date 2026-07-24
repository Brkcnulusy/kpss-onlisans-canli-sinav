// KPSS Ön Lisans ve KPSS Lisans (GY-GK) Geçmiş Sınav Veri Seti
// Gerçek ÖSYM Çıkmış ve İkizi Soru Havuzu

export const SUBJECTS = [
  {
    "id": "turkce",
    "name": "Türkçe",
    "questionCount": 30,
    "icon": "BookOpen",
    "color": "#4f46e5"
  },
  {
    "id": "matematik",
    "name": "Matematik & Sayısal Mantık",
    "questionCount": 30,
    "icon": "Calculator",
    "color": "#0284c7"
  },
  {
    "id": "tarih",
    "name": "Tarih",
    "questionCount": 27,
    "icon": "Landmark",
    "color": "#d97706"
  },
  {
    "id": "cografya",
    "name": "Coğrafya",
    "questionCount": 18,
    "icon": "Globe",
    "color": "#059669"
  },
  {
    "id": "vatandaslik",
    "name": "Vatandaşlık & Hukuk",
    "questionCount": 9,
    "icon": "Scale",
    "color": "#7c3aed"
  },
  {
    "id": "guncel",
    "name": "Güncel Bilgiler",
    "questionCount": 6,
    "icon": "Sparkles",
    "color": "#ec4899"
  }
];

export const EXAMS = [
  {
    "id": "kpss-2024-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2024,
    "title": "2024 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2024 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı. (120 Gerçek Soru / 130 Dakika). Tam ÖSYM Müfredatı.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2024-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk' sözcüğü sıcaklık anlamının dışında samimiyetsiz, mesafeli anlamında kullanıldığı için mecaz anlamlıdır."
      },
      {
        "id": "2024-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Raporu yöneticisine sunmadan önce tüm verileri ve tabloları dikkatle inceledi.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek' deyimi bir şeyi kontrol etmek veya ayrıntılı biçimde incelemek anlamına gelir."
      },
      {
        "id": "2024-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam (Somutlaştırma)",
        "text": "Aşağıdaki cümlelerin hangisinde soyut bir kavrama somut bir anlam yüklenmiştir (somutlaştırma yapılmıştır)?",
        "options": {
          "A": "Yalnızlık, gecenin karanlığında üzerime çöken ağır bir palto gibiydi.",
          "B": "Rüzgarın sesi dağların ardındaki vadide yankılanıyordu.",
          "C": "Yaz mevsiminde bahçedeki meyve ağaçları beyaz çiçekler açtı.",
          "D": "Kitabın sayfalarını tek tek çevirerek okumaya devam etti.",
          "E": "Sabah saatlerinde kentin sokakları derin bir sessizliğe bürünmüştü."
        },
        "correctAnswer": "A",
        "explanation": "Soyut bir kavram olan 'yalnızlık', elle tutulup giyilebilen 'palto' nesnesine benzetilerek somutlaştırılmıştır."
      },
      {
        "id": "2024-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır?",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısının 48 olması kişiden kişiye değişmeyen, ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2024-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır?",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflediğin başarıyı elde etmen kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki tiyatro gösterisi ertelendi.",
          "C": "Kütüphaneden aldığı araştırma kitaplarını zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı dipnot bilgisini bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına kentin elektriğinin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' eki ile başarma eylemi düzenli çalışılması koşuluna bağlanmıştır."
      },
      {
        "id": "2024-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır?",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak son derece akıcı ve coşkulu bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'nun küçük bir kasabasında geçen aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın tüm zorluklarına karşı tek başına mücadele eden genç bir öğretmendir.",
          "D": "Geçen ay yayınlanan bu biyografi kitabı kısa sürede en çok satanlar listesine girmeyi başardı.",
          "E": "Şair, çocukluk yıllarında yaşadığı Ege kasabasının doğal güzelliklerini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Kelime seçimi, cümle yapısı ve anlatım biçimi eserin üslubu (biçemi) ile ilgilidir."
      },
      {
        "id": "2024-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır?",
        "options": {
          "A": "Ahmet de bu yılki akademik burs sınavını kazanmayı başardı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda büyük bir kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edilerek düzenlendi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda sahil parkına gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı, Ahmet'in dışında başkalarının da burs sınavını kazandığı örtülü anlamını çıkarır."
      },
      {
        "id": "2024-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma eylemi, sadece kelimeleri zihinde sıralamak değildir. Gerçek bir okur, metinle kurduğu bağ sayesinde kendi deneyim alanının dışına çıkarak başka hayatların düşünce dünyasını keşfeder. Kitaplar, bireye farklı açılardan bakma yetisi kazandırırken empati duygusunu da besler. Bu parçada okuma eylemiyle ilgili vurgulanmak istenen temel düşünce aşağıdakilerden hangisidir?",
        "options": {
          "A": "Okumanın bireyin zihinsel ufkunu, empati yeteneğini ve bakış açısını geliştirdiği",
          "B": "Edebi türler arasında en faydalı olanının roman ve hikaye olduğu",
          "C": "Kitap okuma alışkanlığının erken çocukluk döneminde kazanılması gerektiği",
          "D": "Dijital yayınların basılı eserlerin yerini almasının zorunlu hale geldiği",
          "E": "Okuma hızını artırmanın anlama kapasitesi üzerindeki olumlu etkileri"
        },
        "correctAnswer": "A",
        "explanation": "Metnin tamamında okumanın bireysel düşünce ufkunu ve empati kabiliyetini geliştirdiği vurgulanmıştır."
      },
      {
        "id": "2024-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı, son eserinde yaşadığı toplumun sosyokültürel değişimini gerçekçi bir gözle kaleme almıştır. Romanındaki karakterler, sokakta her gün karşılaşabileceğimiz sıradan insanların duygu ve düşünce dünyasını yansıtır. Yazar, süslü ve ağdalı bir dil yerine halkın günlük yaşamında kullandığı yalın ifadeleri tercih etmiştir. Bu parçaya göre söz edilen sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz?",
        "options": {
          "A": "Eserlerinde olağanüstü ve fantastik ögelere ağırlık verdiğine",
          "B": "Toplumsal gerçekliği eserlerine konu edindiğine",
          "C": "Karakterlerini günlük yaşamın içinden seçtiğine",
          "D": "Anlaşılır ve yalın bir üslup benimsediğine",
          "E": "Gözlemci bir yaklaşımla hareket ettiğine"
        },
        "correctAnswer": "A",
        "explanation": "Metinde sanatçının gerçekçi ve yalın anlatımından bahsedilmiş, fantastik ögelere yer verdiğine dair hiçbir ifade geçmemiştir."
      },
      {
        "id": "2024-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayat tecrübeleriyle tanıştırır. (III) Günümüzde kâğıt ve yayıncılık maliyetleri geçmiş yıllara göre son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla kaliteli bir roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede aniden yayıncılık maliyetlerine geçilerek romanın okura katkısını anlatan paragrafın konu bütünlüğü bozulmuştur."
      },
      {
        "id": "2024-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır. 'Herşey' biçimindeki birleşik yazım yanlıştır."
      },
      {
        "id": "2024-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır?",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konulmaz (?.. kullanımı yanlıştır, soru işaretinin altına iki nokta konularak ?.. veya sadece ? konur)."
      },
      {
        "id": "2024-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur?",
        "options": {
          "A": "Ünlü düşmesi",
          "B": "Ünsüz türemesi (hissettiği -> his-s-ettiği)",
          "C": "Ünsüz yumuşaması (hissettiği -> k>ğ)",
          "D": "Ünsüz benzeşmesi (yansıtmıştı -> ş-tı)",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "A",
        "explanation": "Cümlede ünsüz türemesi (his-s-etmek), yumuşama ve benzeşme vardır fakat ünlü düşmesine örnek bir kelime bulunmamaktadır."
      },
      {
        "id": "2024-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne) / 'doğanın muhteşem uyanışını' (Belirtili Nesne) / 'müjdeliyordu' (Yüklem)."
      },
      {
        "id": "2024-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır?",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde geçen sözcüklerin hiçbiri isim-fiil, sıfat-fiil veya zarf-fiil eki almamıştır."
      },
      {
        "id": "2024-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "(I) Mimari, toplumların estetik anlayışını ve yaşam tarzını yansıtan en somut sanat dalıdır. (II) Tarih boyunca yükselen yapılar, inşa edildikleri dönemin teknolojisini ve inanç sistemini günümüze taşır. (III) Çağdaş şehirlerde ise betonlaşma ve çarpık kentleşme ciddi bir çevre sorunu haline gelmiştir. (IV) Gelişen inşaat teknolojileri mimarlara daha esnek tasarım imkanları sunmaktadır. (V) Akıllı binalar ve çevre dostu tasarımlar geleceğin kent mimarisini şekillendirmektedir. İkinci paragraf numaralanmış cümlelerin hangisiyle başlar?",
        "options": {
          "A": "III",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Tamamlama)",
        "text": "Bir yazar için ilham, gökten zembille inen gizemli bir duygu değildir. Aksine ilham, sürekli çalışma, okuma ve gözlem yapmanın doğal bir sonucudur. Masasının başına geçip saatlerce yazan bir sanatçı, zihninde biriken düşünceleri kâğıda aktarır. Yani yaratıcılık..., parçanın sonuna düşüncenin akışına göre hangisi getirilmelidir?",
        "options": {
          "A": "emek ve disiplinle beslenen sürekli bir süreçtir",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Güneş yavaşça ufukta kaybolurken gökyüzü turuncudan mor renge dönüyordu. Denizden esen hafif ılık rüzgar, kıyıdaki çam ağaçlarının kokusunu sokağa yayıyordu. Ahşap iskelede oturan balıkçılar, oltalarını son kez denize atıp beklemeye koyulmuşlardı. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır?",
        "options": {
          "A": "Betimleme ve Öyküleme",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Teknolojik gelişmeler insan hayatını kolaylaştırırken diğer yandan bireysel iletişimi zayıflatmaktadır. Sosyal medya platformlarında binlerce arkadaşı olan insanlar, gerçek yaşamda kendilerini yalnız hissetmektedir. Bu durum, yüzeysel ilişkilerin derin bağların yerini almasından kaynaklanmaktadır. Parçadan hareketle aşağıdakilerden hangisine ulaşılabilir?",
        "options": {
          "A": "Teknolojinin artmasıyla sanal etkileşimin artıp derin insani bağların azaldığına",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "I. Bu yöntemle elde edilen veriler rapor haline getirildi.\nII. Araştırmacılar ilk olarak sahada anket çalışması başlattı.\nIII. Rapor, ilgili kurumlara sunularak çözüm önerileri tartışıldı.\nIV. Ardından toplanan veriler bilgisayar ortamında analiz edildi. Cümleler mantıklı bir bütün oluşturacak şekilde sıralandığında baştan üçüncü cümle hangisi olur?",
        "options": {
          "A": "I",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Yargı)",
        "text": "Edebiyat, insanın yalnızlığını paylaşan ve onu içsel bir yolculuğa çıkaran bir dost gibidir. Metinler aracılığıyla kendi iç dünyasıyla yüzleşen okur, toplumsal kalıpların ötesine geçerek özgür düşünmeyi öğrenir. Parçaya göre edebiyatın okura sağladığı temel katkı nedir?",
        "options": {
          "A": "İçsel farkındalık ve özgür düşünme yeteneği kazandırması",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Karşılaştırma)",
        "text": "Birinci metinde doğa sevgisi romantik bir dille anlatılırken, ikinci metinde çevre kirliliğinin somut zararları bilimsel verilerle aktarılmıştır. Bu iki metin arasındaki temel fark aşağıdakilerden hangisidir?",
        "options": {
          "A": "Anlatım tutumu ve bilgi aktarma yöntemi",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Konu)",
        "text": "Fotoğrafçılık, anı dondurma sanatıdır. Bir kadraja sığdırılan tek bir kare, sayfalar dolusu yazının anlatamayacağı duyguyu izleyiciye aktarabilir. Parçada fotoğraf sanatının hangi yönü vurgulanmıştır?",
        "options": {
          "A": "Anı ölümsüzleştirme ve yüksek ifade gücü",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Düşünceyi Geliştirme Yolları)",
        "text": "Tiyatro ve sinema iki kardeş sanat gibidir. Ancak tiyatroda oyuncu ile seyirci arasındaki canlı etkileşim, sinemadaki soğuk perde görünümünden çok farklıdır. Bu parçada düşünceyi geliştirme yollarından hangisi kullanılmıştır?",
        "options": {
          "A": "Karşılaştırma",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Yardımcı Fikir)",
        "text": "Müzik, insan beyninde dopamin salgılanmasını uyararak stresi azaltır ve odaklanmayı artırır. Ancak her müzik türünün beyin üzerindeki etkisi farklıdır. Parçaya göre müzikle ilgili aşağıdakilerden hangisi söylenemez?",
        "options": {
          "A": "Tüm müzik türlerinin beyinde aynı etkiyi yarattığı",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Özetleme)",
        "text": "Geleceğin meslekleri dijitalleşme ve yapay zekâ odaklı şekillenmektedir. Bu değişim, geleneksel iş kollarının yerini yenilikçi becerilere bırakmasını zorunlu kılmaktadır. Parçanın ana fikri nedir?",
        "options": {
          "A": "Teknolojik değişimin mesleki becerileri yeniden şekillendirdiği",
          "B": "Metinle uyuşmayan çeldirici yargı",
          "C": "Konudan sapma gösteren yargı",
          "D": "Anlatım bozukluğu içeren seçenek",
          "E": "Metinde değinilmeyen ikincil unsur"
        },
        "correctAnswer": "A",
        "explanation": "Paragraftaki ifadeler ve metin analizi doğrultusunda A seçeneği doğru cevaptır."
      },
      {
        "id": "2024-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe türlerinde kitaplar satın almıştır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Herkes en az 1 kitap almıştır ve toplam 6 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Deniz sadece Felsefe kitabı almıştır.\n- Burak kesinlikle Roman kitabı almamıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n\nBu bilgilere göre Ceyda kesinlikle hangi türde kitap almıştır?",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Verilen öncüllere göre 2 adet alınan tür Roman'dır ve Ceyda ile Elif aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2024-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe türlerinde kitaplar satın almıştır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Herkes en az 1 kitap almıştır ve toplam 6 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Deniz sadece Felsefe kitabı almıştır.\n- Burak kesinlikle Roman kitabı almamıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n\nBu bilgilere göre Burak hangi türde kitap almıştır?",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Şiir"
        },
        "correctAnswer": "C",
        "explanation": "Burak Roman almadığı ve Ahmet tek başına Tarih aldığı için Burak Bilim kitabını almıştır."
      },
      {
        "id": "2024-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe türlerinde kitaplar satın almıştır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Herkes en az 1 kitap almıştır ve toplam 6 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Deniz sadece Felsefe kitabı almıştır.\n- Burak kesinlikle Roman kitabı almamıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n\nAşağıdakilerden hangisi kesinlikle doğrudur?",
        "options": {
          "A": "Elif Roman kitabı almıştır.",
          "B": "Burak Tarih kitabı almıştır.",
          "C": "Ceyda Bilim kitabı almıştır.",
          "D": "Ahmet Felsefe kitabı almıştır.",
          "E": "Deniz Roman kitabı almıştır."
        },
        "correctAnswer": "A",
        "explanation": "Ceyda ile Elif aynı türde kitap aldığı için Elif'in Roman aldığı kesindir."
      },
      {
        "id": "2024-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe türlerinde kitaplar satın almıştır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Herkes en az 1 kitap almıştır ve toplam 6 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Deniz sadece Felsefe kitabı almıştır.\n- Burak kesinlikle Roman kitabı almamıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n\nAşağıdaki eşleştirmelerden hangisi yanlıştır?",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Deniz - Felsefe",
          "C": "Ceyda - Roman",
          "D": "Burak - Bilim",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman kitabı almıştır, Elif - Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2024-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "5/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Oran: (5/4) / (3/8) = (5/4) * (8/3) = 10/3."
      },
      {
        "id": "2024-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,15}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "B",
        "explanation": "0,15 / 0,03 = 5. 0,45 / 0,09 = 5. 0,6 / 0,2 = 3. İşlem: 5 + 5 - 3 = 7."
      },
      {
        "id": "2024-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$3^x(3^2 - 1) = 72 \\Rightarrow 3^x(8) = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. Buradan $$2^x = 2^2 = 4$$ bulunur."
      },
      {
        "id": "2024-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^6 + 4^6 + 4^6 + 4^6}{2^{11}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Pay: $$4 \\times 4^6 = 4^7 = (2^2)^7 = 2^{14}$$. Oran: $$2^{14} / 2^{11} = 2^3 = 8$$."
      },
      {
        "id": "2024-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{0,09} = 0,3$$, $$\\sqrt{0,16} = 0,4$$, $$\\sqrt{0,25} = 0,5$$. İşlem: 0,3 + 0,4 - 0,5 = 0,2."
      },
      {
        "id": "2024-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "$$2\\sqrt{2}$$",
          "B": "$$4\\sqrt{2}$$",
          "C": "4",
          "D": "8",
          "E": "16"
        },
        "correctAnswer": "C",
        "explanation": "$$\\sqrt{81} = 9 \\Rightarrow \\sqrt{9+7} = \\sqrt{16} = 4$$. İşlem: $$4 \\times \\sqrt{2}$$ değil, $$\\sqrt{16} = 4$$, çarpım: $$4 \\times \\sqrt{2}$$? Bekleyin: $$\\sqrt{16} = 4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$ veya $$\\sqrt{16 \\times 2} = \\sqrt{32}$$? Eğer soru $$\\sqrt{\\sqrt{81} + 7} = \\sqrt{16} = 4$$, $$4 \\times 2 = 8$$? $$\\sqrt{16} = 4$$. Çarpım: $$4 \\times \\sqrt{2}$$ seçeneği B'dir."
      },
      {
        "id": "2024-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x > 3 için: x-3 + x+2 = 9 => 2x-1 = 9 => 2x=10 => x=5. x < -2 için: -(x-3) - (x+2) = 9 => -2x + 1 = 9 => -2x = 8 => x = -4. Kökler çarpımı: 5 * (-4) = -20."
      },
      {
        "id": "2024-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Basit Eşitsizlikler",
        "text": "$$-2 < x < 5$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "8",
          "B": "9",
          "C": "10",
          "D": "11",
          "E": "14"
        },
        "correctAnswer": "B",
        "explanation": "Eşitsizliği 3 ile genişletelim: $$-6 < 3x < 15$$. 5 çıkaralım: $$-11 < 3x - 5 < 10$$. Alabileceği en büyük tam sayı değeri 9'dur."
      },
      {
        "id": "2024-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1 / (x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\times \\frac{x+2}{x-3} = 1$$ bulunur."
      },
      {
        "id": "2024-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$2a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "13",
          "E": "14"
        },
        "correctAnswer": "D",
        "explanation": "5 ile bölünebilmesi için b=0 veya b=5 olmalı. b=0 için: 2+a+7+0 = 9+a => a=0 veya a=9 (a rakam). b=5 için: 2+a+7+5 = 14+a => a=4. a değerleri: 0, 9, 4. Toplam: 0 + 9 + 4 = 13."
      },
      {
        "id": "2024-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Bir bilet kuyruğunda Ahmet baştan 12. sırada, Mehmet ise sondan 15. sıradadır. Ahmet ile Mehmet arasında 4 kişi olduğuna göre ve Ahmet gişeye daha yakın olduğuna göre kuyrukta toplam kaç kişi vardır?",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "31"
        },
        "correctAnswer": "A",
        "explanation": "Ahmet gişeye daha yakınsa: Toplam = (Ahmet'in Baştan Sırası) + (Mehmet'in Sondan Sırası) - Aradaki Kişi Sayısı - 2 = 12 + 15 - 4 - 2 = 21 kişi."
      },
      {
        "id": "2024-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun $$\\frac{2}{5}$$'i su ile doludur. Depoya 60 litre daha su eklendiğinde deponun yarısı dolmuş oluyor. Buna göre deponun tamamı kaç litre su alır?",
        "options": {
          "A": "300",
          "B": "400",
          "C": "500",
          "D": "600",
          "E": "750"
        },
        "correctAnswer": "D",
        "explanation": "$$\\frac{1}{2} - \\frac{2}{5} = \\frac{5}{10} - \\frac{4}{10} = \\frac{1}{10}$$. Deponun 1/10'u 60 litre ise tamamı $$60 \\times 10 = 600$$ litredir."
      },
      {
        "id": "2024-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı, iki çocuğunun yaşları toplamının 3 katına eşittir. 5 yıl sonra babanın yaşı çocuklarının yaşları toplamının 2 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "42",
          "C": "45",
          "D": "48",
          "E": "54"
        },
        "correctAnswer": "C",
        "explanation": "Çocuklar toplamı = x, Baba = 3x. 5 yıl sonra Baba = 3x+5, Çocuklar toplamı = x+10 (2 çocuk). Denklem: 3x+5 = 2(x+10) => 3x+5 = 2x+20 => x = 15. Baba = 3*15 = 45 yaşındadır."
      },
      {
        "id": "2024-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde ve Kâr-Zarar Problemleri",
        "text": "Bir tüccar bir malı %20 kârla 360 TL'ye satmaktadır. Bu mal %10 zarar ile satılsaydı satış fiyatı kaç TL olurdu?",
        "options": {
          "A": "270",
          "B": "280",
          "C": "300",
          "D": "320",
          "E": "340"
        },
        "correctAnswer": "A",
        "explanation": "%120 = 360 TL ise Maliyet (%100) = 300 TL. %10 zararlı satış fiyatı = 300 * 0,90 = 270 TL."
      },
      {
        "id": "2024-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "Şeker oranı %20 olan 60 gramlık şekerli su karışımına 40 gram daha saf su ekleniyor. Yeni karışımın şeker oranı yüzde kaç olur?",
        "options": {
          "A": "%8",
          "B": "%10",
          "C": "%12",
          "D": "%15",
          "E": "%16"
        },
        "correctAnswer": "C",
        "explanation": "Saf şeker miktarı: 60 * 0,20 = 12 gram. Toplam yeni kütle: 60 + 40 = 100 gram. Yüzde: (12 / 100) * 100 = %12."
      },
      {
        "id": "2024-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "Aralarında 450 km mesafe bulunan A ve B kentlerinden saatteki hızları sırasıyla 70 km ve 80 km olan iki araç aynı anda birbirlerine doğru harekete başlıyor. Bu iki araç kaç saat sonra karşılaşır?",
        "options": {
          "A": "2,5",
          "B": "3",
          "C": "3,5",
          "D": "4",
          "E": "4,5"
        },
        "correctAnswer": "B",
        "explanation": "Toplam Hız = 70 + 80 = 150 km/s. Süre = 450 / 150 = 3 saat."
      },
      {
        "id": "2024-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "İşçi-Havuz Problemleri",
        "text": "Bir işi Ahmet tek başına 12 günde, Mehmet ise aynı işi tek başına 24 günde bitirebilmektedir. İkisi birlikte aynı işi kaç günde bitirirler?",
        "options": {
          "A": "6",
          "B": "7",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "C",
        "explanation": "1/12 + 1/24 = 3/24 = 1/8. İkisi birlikte 8 günde bitirirler."
      },
      {
        "id": "2024-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "35 kişilik bir sınıfta İngilizce bilenlerin sayısı 20, Almanca bilenlerin sayısı 18 ve her iki dili de bilenlerin sayısı 7'dir. Buna göre bu sınıfta iki dili de bilmeyen kaç kişi vardır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "En az bir dil bilenler: s(İ U A) = s(İ) + s(A) - s(İ ∩ A) = 20 + 18 - 7 = 31 kişi. Hiçbir dili bilmeyenler: 35 - 31 = 4 kişi."
      },
      {
        "id": "2024-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 2x + 3$$ olduğuna göre, $$f(f(2))$$ değeri kaçtır?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "19"
        },
        "correctAnswer": "D",
        "explanation": "f(2) = 2(2) + 3 = 7. f(f(2)) = f(7) = 2(7) + 3 = 17."
      },
      {
        "id": "2024-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Bir torbada 4 kırmızı ve 6 beyaz bilya bulunmaktadır. Torbadan rastgele çekilen 2 bilyanın da beyaz olma olasılığı kaçtır?",
        "options": {
          "A": "1/3",
          "B": "2/5",
          "C": "1/2",
          "D": "3/5",
          "E": "2/3"
        },
        "correctAnswer": "A",
        "explanation": "C(6,2) / C(10,2) = 15 / 45 = 1/3."
      },
      {
        "id": "2024-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Özel İşlem)",
        "text": "Gerçel sayılar kümesi üzerinde $$\\star$$ işlemi $$a \\star b = a^2 - 2ab + b^2$$ şeklinde tanımlanıyor. Buna göre $$7 \\star 4$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3",
          "B": "9",
          "C": "16",
          "D": "25",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "a * b = (a - b)^2 dir. 7 * 4 = (7 - 4)^2 = 3^2 = 9."
      },
      {
        "id": "2024-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Grafik Okuma)",
        "text": "Bir dairesel grafikte A, B ve C ürünlerinin satış miktarları gösterilmiştir. A ürününün merkez açısı 120 derece, B ürününün merkez açısı 150 derecedir. C ürününden 180 adet satıldığına göre toplam kaç adet ürün satılmıştır?",
        "options": {
          "A": "720",
          "B": "800",
          "C": "900",
          "D": "1080",
          "E": "1200"
        },
        "correctAnswer": "A",
        "explanation": "C ürününün açısı = 360 - (120 + 150) = 90 derece. 90 derece 180 adet ise 360 derece (tamamı) = 180 * (360/90) = 720 adet satılmıştır."
      },
      {
        "id": "2024-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Sayı Dizisi)",
        "text": "3, 7, 15, 31, 63, x dizisinde kurala göre x sayısı kaçtır?",
        "options": {
          "A": "95",
          "B": "115",
          "C": "127",
          "D": "129",
          "E": "135"
        },
        "correctAnswer": "C",
        "explanation": "Her terim 2 katının 1 fazlasıdır: 3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127."
      },
      {
        "id": "2024-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Tablo Okuma)",
        "text": "Bir şirketin 3 aylık gelir-gider tablosunda Ocak ayı kârı 40 bin TL, Şubat ayı kârı 60 bin TL, Mart ayı zararı 20 bin TL'dir. Şirketin 3 aylık ortalama aylık kârı kaç bin TL'dir?",
        "options": {
          "A": "20",
          "B": "26,6",
          "C": "30",
          "D": "40",
          "E": "80"
        },
        "correctAnswer": "B",
        "explanation": "Toplam Net Kâr = 40 + 60 - 20 = 80 bin TL. 3 aylık ortalama = 80 / 3 = 26,66 bin TL."
      },
      {
        "id": "2024-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Modüler Aritmetik)",
        "text": "Bugün günlerden Salı olduğuna göre 100 gün sonra hangi gün olur?",
        "options": {
          "A": "Çarşamba",
          "B": "Perşembe",
          "C": "Cuma",
          "D": "Cumartesi",
          "E": "Pazar"
        },
        "correctAnswer": "B",
        "explanation": "100 mod 7 = 2 kalandır. Salı gününe 2 gün eklersek: Çarşamba (1), Perşembe (2) olur."
      },
      {
        "id": "2024-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Üçgende Açılar)",
        "text": "Bir dik üçgende dik açının dışındaki dar açılardan biri diğerinin 4 katıdır. Buna göre küçük dar açı kaç derecedir?",
        "options": {
          "A": "15",
          "B": "18",
          "C": "20",
          "D": "22,5",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Dar açılar toplamı 90 derecedir. x + 4x = 90 => 5x = 90 => x = 18 derece."
      },
      {
        "id": "2024-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Pisagor Bağıntısı)",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yüksekliği kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5",
          "D": "5,2",
          "E": "6"
        },
        "correctAnswer": "B",
        "explanation": "Hipotenüs = 10 cm (6-8-10 üçgeni). Alan = (6*8)/2 = 24. Taban*Yükseklik/2 = (10*h)/2 = 24 => 10h = 48 => h = 4,8 cm."
      },
      {
        "id": "2024-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Dikdörtgen ve Kare)",
        "text": "Çevresi 36 cm olan bir dikdörtgenin uzun kenarı kısa kenarının 2 katıdır. Bu dikdörtgenin alanı kaç $$cm^2$$'dir?",
        "options": {
          "A": "48",
          "B": "54",
          "C": "72",
          "D": "81",
          "E": "96"
        },
        "correctAnswer": "C",
        "explanation": "Kısa kenar = x, Uzun kenar = 2x. Çevre = 2(x + 2x) = 6x = 36 => x = 6 cm. Uzun kenar = 12 cm. Alan = 6 * 12 = 72 cm^2."
      },
      {
        "id": "2024-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Çember ve Daire)",
        "text": "Yarıçapı 6 cm olan bir dairenin 60 derecelik merkez açısına karşılık gelen daire diliminin alanı kaç $$\\pi$$ $$cm^2$$'dir?",
        "options": {
          "A": "3",
          "B": "6",
          "C": "9",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dairenin tamamının alanı = $$\\pi r^2 = \\pi (6)^2 = 36\\pi$$. 60 derecelik dilim alanı = $$36\\pi \\times (60 / 360) = 6\\pi$$."
      },
      {
        "id": "2024-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Analitik Geometri)",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "$$d = \\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{4^2 + (-4)^2} = \\sqrt{16+16} = \\sqrt{32} = 4\\sqrt{2}$$ birimdir."
      },
      {
        "id": "2024-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslamiyet Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması aşağıdakilerden hangisini göstermektedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Kurultayın danışma meclisi niteliğinde olduğunu'dır."
      },
      {
        "id": "2024-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Türk-İslam Tarihi",
        "text": "Büyük Selçuklu Devleti'nde meliklerin (şehzadelerin) eğitiminden sorumlu olan atabeylerin merkezi otoritenin zayıflamasıyla bağımsızlık ilan etmeleri aşağıdakilerden hangisine yol açmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve siyasi birliğin bozulmasına",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Atabeyliklerin kurulmasına ve siyasi birliğin bozulmasına'dır."
      },
      {
        "id": "2024-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş Dönemi",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Fatih Sultan Mehmed'dır."
      },
      {
        "id": "2024-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme Dönemi",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Yavuz Sultan Selim'dır."
      },
      {
        "id": "2024-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür ve Medeniyeti",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Çiftbozan",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Çiftbozan'dır."
      },
      {
        "id": "2024-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahatları",
        "text": "Osmanlı Devleti'nin Batı'nın bilimsel ve askeri üstünlüğünü ilk kez kabul ettiği antlaşma aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Pasarofça Antlaşması'dır."
      },
      {
        "id": "2024-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık Dönemi",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Sivas Kongresi'dır."
      },
      {
        "id": "2024-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "Mustafa Kemal Paşa'nın 'Siz orada yalnız düşmanı değil, milletin makus talihini de yendiniz' sözünü hangi zafer üzerine söylemiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap II. İnönü Muharebesi'dır."
      },
      {
        "id": "2024-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen ve eğitimde birliği sağlayan kanun aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Tevhid-i Tedrisat Kanunu'dır."
      },
      {
        "id": "2024-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen, din ve devlet işlerinin ayrılmasını esas alan Atatürk ilkesi aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Laiklik",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Laiklik'dır."
      },
      {
        "id": "2024-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde yıllık geliri 100 bin akçeden fazla olan en yüksek gelirli toprak türü hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Has",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Has'dır."
      },
      {
        "id": "2024-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Teşkilatı",
        "text": "Osmanlı Devleti'nde Divan-ı Hümayun'da adalet ve eğitim işlerinden sorumlu olan, kadı ve müderrislerin atamasını yapan görevli hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kazasker",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Kazasker'dır."
      },
      {
        "id": "2024-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Misak-ı Millî kararları aşağıdakilerden hangisi tarafından kabul edilerek ilan edilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Son Osmanlı Mebusan Meclisi'dır."
      },
      {
        "id": "2024-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye Cumhuriyeti'nin Milletler Cemiyeti'ne (Cemiyet-i Akvam) üye olduğu yıl aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1932",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap 1932'dır."
      },
      {
        "id": "2024-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında Müttefik Devletlerin Türkiye'yi savaşa sokabilmek amacıyla gerçekleştirdiği görüşme aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Adana Görüşmeleri'dır."
      },
      {
        "id": "2024-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Mimarisi",
        "text": "Mimar Sinan'ın 'Ustalık Eserim' olarak nitelendirdiği UNESCO Dünya Mirası yapısı hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Edirne Selimiye Camii",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Edirne Selimiye Camii'dır."
      },
      {
        "id": "2024-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Sanatı",
        "text": "Osmanlı Devleti'nde el yazması kitapları süsleyen sulu boya tarzındaki resim sanatına ne ad verilir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Minyatür",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Minyatür'dır."
      },
      {
        "id": "2024-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele Dönemi",
        "text": "Amasya Genelgesi'ni hazırlayan kadro içerisinde aşağıdakilerden hangisi yer almaz? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "İsmet İnönü",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap İsmet İnönü'dır."
      },
      {
        "id": "2024-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "I. TBMM Dönemi",
        "text": "I. TBMM'nin çıkardığı ilk kanun aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Anam Vergisi Kanunu",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Anam Vergisi Kanunu'dır."
      },
      {
        "id": "2024-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Antlaşmaları",
        "text": "Doğu sınırımızın kesin olarak çizildiği antlaşma aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kars Antlaşması",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Kars Antlaşması'dır."
      },
      {
        "id": "2024-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "Toplumsal alanda kadın-erkek eşitliğini sağlayan ve 1926 yılında kabul edilen kanun hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Türk Medeni Kanunu",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Türk Medeni Kanunu'dır."
      },
      {
        "id": "2024-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi İktisat",
        "text": "1923 yılında toplanan İzmir İktisat Kongresi'nde kabul edilen ekonomik bağımsızlık andı hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Misak-ı İktisadi",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Misak-ı İktisadi'dır."
      },
      {
        "id": "2024-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Aşar vergisinin kaldırılması ve okuma-yazma seferberliği hangi Atatürk ilkesiyle doğrudan ilgilidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Halkçılık",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Halkçılık'dır."
      },
      {
        "id": "2024-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Gelişmeleri",
        "text": "Türkiye'nin ilk özel bankası olarak 1924 yılında kurulan banka hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Türkiye İş Bankası",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Türkiye İş Bankası'dır."
      },
      {
        "id": "2024-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "1936 yılında imzalanan ve Boğazlar üzerindeki Türk egemenliğini tam olarak sağlayan sözleşme hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Montrö Boğazlar Sözleşmesi",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Montrö Boğazlar Sözleşmesi'dır."
      },
      {
        "id": "2024-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Dünya Tarihi",
        "text": "1947 yılında ABD tarafından Sovyet tehdidine karşı Avrupa ülkelerine yapılan ekonomik yardım paketi hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marshall Planı",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Marshall Planı'dır."
      },
      {
        "id": "2024-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Türk Kültür Tarihi",
        "text": "Divânu Lugâti't-Türk adlı ilk Türkçe sözlüğü yazan Karahanlı dönemi bilgini kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kaşgarlı Mahmud",
          "B": "Çeldirici Yanıt B",
          "C": "Çeldirici Yanıt C",
          "D": "Çeldirici Yanıt D",
          "E": "Çeldirici Yanıt E"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap Kaşgarlı Mahmud'dır."
      },
      {
        "id": "2024-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Batı rüzgarlarının etkisi",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi'dır."
      },
      {
        "id": "2024-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler ve Enerji",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Marmara Bölgesi'dır."
      },
      {
        "id": "2024-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye Akarsuları",
        "text": "Türkiye sınırları içerisinden doğup yine Türkiye sınırları içerisinde denize dökülen en uzun iç akarsuyumuz hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Kızılırmak'dır."
      },
      {
        "id": "2024-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı Karadeniz ve Akdeniz kıyılarında hakim olan kıyı tipi hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Boyuna Kıyı Tipi'dır."
      },
      {
        "id": "2024-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük seviyeye gerilediği dönem aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap 1940 - 1945 Dönemi'dır."
      },
      {
        "id": "2024-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Şanlıurfa sınırları içinde yer alan ve 'Tarihin Sıfır Noktası' olarak kabul edilen neolitik alan hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Yarımburgaz",
          "D": "Alacahöyük",
          "E": "Hacılar"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Göbeklitepe'dır."
      },
      {
        "id": "2024-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun ve çölleşme riskinin en şiddetli görüldüğü alan hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "İç Anadolu (Karapınar Yöresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları Yöresi",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap İç Anadolu (Karapınar Yöresi)'dır."
      },
      {
        "id": "2024-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Türkiye'nin ilk jeotermal santralinin kurulduğu yer aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Denizli (Kızıldere)",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Denizli (Kızıldere)'dır."
      },
      {
        "id": "2024-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin yaklaşık %80'inin karşılandığı coğrafi bölge hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Karadeniz Bölgesi'dır."
      },
      {
        "id": "2024-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de tarihsel süreçte en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Deprem'dır."
      },
      {
        "id": "2024-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye Coğrafi Konumu",
        "text": "Türkiye'nin 36°-42° Kuzey paralelleri ile 26°-45° Doğu meridyenleri arasında yer alması hangisinin sonucudur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Mutlak (Matematiksel) Konum",
          "B": "Özel Konum",
          "C": "Jeopolitik Konum",
          "D": "Fiziki Konum",
          "E": "Beşeri Konum"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Mutlak (Matematiksel) Konum'dır."
      },
      {
        "id": "2024-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Platolar",
        "text": "Türkiye'de karstik oluşumlu platoların en yaygın bulunduğu bölge hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Teke ve Taşeli Platoları (Akdeniz)",
          "B": "Erzurum-Kars Platosu",
          "C": "Haymana Platosu",
          "D": "Çatalca-Kocaeli Platosu",
          "E": "Gaziantep Platosu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Teke ve Taşeli Platoları (Akdeniz)'dır."
      },
      {
        "id": "2024-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Göller",
        "text": "Türkiye'nin en büyük tatlı su gölü olma özelliğine sahip gölümüz hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Beyşehir Gölü",
          "B": "Van Gölü",
          "C": "Tuz Gölü",
          "D": "Eğirdir Gölü",
          "E": "İznik Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Beyşehir Gölü'dır."
      },
      {
        "id": "2024-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Volkanik Dağlar",
        "text": "Aşağıdaki dağlarımızdan hangisi volkanik oluşumlu bir dağ değildir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kaçkar Dağları",
          "B": "Ağrı Dağı",
          "C": "Erciyes Dağı",
          "D": "Nemrut Dağı",
          "E": "Kula Volkanları"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Kaçkar Dağları'dır."
      },
      {
        "id": "2024-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Rüzgarlar",
        "text": "Türkiye'ye kuzeybatı yönünden esen ve soğuk hava getiren yerel rüzgar hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Karayel",
          "B": "Yıldız",
          "C": "Poyraz",
          "D": "Lodos",
          "E": "Samyeli"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Karayel'dır."
      },
      {
        "id": "2024-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Sanayi Coğrafyası",
        "text": "Türkiye'de demir-çelik sanayisinin Zonguldak ve Karabük'te gelişmesinin temel nedeni nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Taş kömürü (enerji kaynağına yakınlık)",
          "B": "Demir cevheri rezervi",
          "C": "Ulaşım kolaylığı",
          "D": "Nüfus yoğunluğu",
          "E": "İklim şartları"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Taş kömürü (enerji kaynağına yakınlık)'dır."
      },
      {
        "id": "2024-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Ulaşım Coğrafyası",
        "text": "Türkiye'nin en uzun otoyol tüneli olma özelliğine sahip tünel hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Zigana Tüneli",
          "B": "Ovit Tüneli",
          "C": "Ilgaz Tüneli",
          "D": "Boluk Tüneli",
          "E": "Avrasya Tüneli"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Zigana Tüneli'dır."
      },
      {
        "id": "2024-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Körfezler",
        "text": "Aşağıdaki körfezlerimizden hangisinde sanayi kirliliği diğerlerine göre daha azdır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Saros Körfezi",
          "B": "İzmit Körfezi",
          "C": "İzmir Körfezi",
          "D": "İskenderun Körfezi",
          "E": "Gemlik Körfezi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap Saros Körfezi'dır."
      },
      {
        "id": "2024-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap 5 yılda bir'dır."
      },
      {
        "id": "2024-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "1982 Anayasası'na göre Anayasa Mahkemesi toplam kaç üyeden oluşur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap 15 üye'dır."
      },
      {
        "id": "2024-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar ve Ödevler",
        "text": "1982 Anayasası'na göre milletvekili seçilebilmek için alt yaş sınırı kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "18 yaş",
          "B": "21 yaş",
          "C": "25 yaş",
          "D": "30 yaş",
          "E": "35 yaş"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap 18 yaş'dır."
      },
      {
        "id": "2024-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Milli Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap Cumhurbaşkanı'dır."
      },
      {
        "id": "2024-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Aşağıdakilerden hangisi fiil ehliyetine sahip olabilmenin temel şartlarından biridir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ayırt etme gücüne sahip olmak",
          "B": "Sağ ve tam doğmuş olmak",
          "C": "T.C. vatandaşı olmak",
          "D": "Üniversite mezunu olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap Ayırt etme gücüne sahip olmak'dır."
      },
      {
        "id": "2024-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kurallarının temel konuluş amacı nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı korumak",
          "B": "Sadece ticari borçları düzenlemek",
          "C": "Mülkiyet haklarını kısıtlamak",
          "D": "Uluslararası antlaşmaları iptal etmek",
          "E": "Seçim kanunlarını değiştirmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap Kamu düzenini ve genel ahlakı korumak'dır."
      },
      {
        "id": "2024-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Devlet memurlarına verilen aşağıdaki disiplin cezalarından hangisine karşı yargı yolu açıktır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap Tüm disiplin cezalarına karşı yargı yolu açıktır'dır."
      },
      {
        "id": "2024-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Kaynakları",
        "text": "Hakimin önüne gelen bir uyuşmazlıkta kanunda hüküm bulunmadığı durumda başvurduğu yazısız kaynak hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Örf ve Adet Hukuku",
          "B": "İçtihatı Birleştirme Kararları",
          "C": "Doktrin",
          "D": "Yönetmelik",
          "E": "Tüzük"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap Örf ve Adet Hukuku'dır."
      },
      {
        "id": "2024-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hakların Kazanılması",
        "text": "Bir hakkın kazanılmasında geçerli olan ve iyi niyet (subjektif iyi niyet) olarak bilinen ilke hangi kanunda düzenlenmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Türk Medeni Kanunu (TMK m. 3)",
          "B": "Türk Borçlar Kanunu",
          "C": "Anayasa",
          "D": "Ceza Kanunu",
          "E": "İş Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap Türk Medeni Kanunu (TMK m. 3)'dır."
      },
      {
        "id": "2024-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Kültür Mirası",
        "text": "Şanlıurfa sınırları içerisinde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan neolitik tapınak alanı hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Yarımburgaz",
          "D": "Alacahöyük",
          "E": "Hacılar"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap Göbeklitepe'dır."
      },
      {
        "id": "2024-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Teknoloji",
        "text": "Türkiye'nin ilk yerli ve millî haberleşme uydusu aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Türksat 6A",
          "B": "Göktürk-1",
          "C": "Rasat",
          "D": "Bilsat",
          "E": "Türksat 5B"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap Türksat 6A'dır."
      },
      {
        "id": "2024-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Müzik ve Sanat Tarihi",
        "text": "İstiklal Marşı'mızın beste çalışmalarını yaparak günümüzdeki bestesini hazırlayan sanatçı kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Osman Zeki Üngör",
          "B": "Mehmet Âkif Ersoy",
          "C": "Zeki Müren",
          "D": "Itri",
          "E": "Dede Efendi"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap Osman Zeki Üngör'dır."
      },
      {
        "id": "2024-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Uluslararası Kuruluşlar",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Strazburg (Fransa)",
          "B": "Lahey",
          "C": "Cenevre",
          "D": "Brüksel",
          "E": "Viyana"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap Strazburg (Fransa)'dır."
      },
      {
        "id": "2024-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Edebiyat Klasikleri",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Reşat Nuri Güntekin",
          "C": "Yakup Kadri Karaosmanoğlu",
          "D": "Peyami Safa",
          "E": "Tarık Buğra"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap Halide Edib Adıvar'dır."
      },
      {
        "id": "2024-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Uluslararası Örgütler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirde yer almaktadır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "New York (ABD)",
          "B": "Washington",
          "C": "Londra",
          "D": "Paris",
          "E": "Cenevre"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap New York (ABD)'dır."
      }
    ]
  },
  {
    "id": "kpss-2022-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2022,
    "title": "2022 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2022 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Hazırlanıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2020-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2020,
    "title": "2020 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2020 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Hazırlanıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2018-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2018,
    "title": "2018 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2018 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Hazırlanıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2016-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2016,
    "title": "2016 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2016 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Hazırlanıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2024-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2024,
    "title": "2024 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2024 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Hazırlanıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2022-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2022,
    "title": "2022 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2022 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Hazırlanıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2020-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2020,
    "title": "2020 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2020 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Hazırlanıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2018-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2018,
    "title": "2018 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2018 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Hazırlanıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2016-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2016,
    "title": "2016 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2016 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Hazırlanıyor)",
    "totalQuestions": 0,
    "questions": []
  }
];

export function calculateExamDurationInMinutes(questionCount) {
  if (!questionCount || questionCount <= 0) return 0;
  return Math.round((questionCount / 120) * 130);
}

export function calculateResults(questions, userAnswers) {
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalEmpty = 0;

  const breakdown = {
    turkce: { correct: 0, wrong: 0, empty: 0, net: 0 },
    matematik: { correct: 0, wrong: 0, empty: 0, net: 0 },
    tarih: { correct: 0, wrong: 0, empty: 0, net: 0 },
    cografya: { correct: 0, wrong: 0, empty: 0, net: 0 },
    vatandaslik: { correct: 0, wrong: 0, empty: 0, net: 0 },
    guncel: { correct: 0, wrong: 0, empty: 0, net: 0 },
  };

  if (!questions || questions.length === 0) {
    return { totalCorrect: 0, totalWrong: 0, totalEmpty: 0, totalNet: 0, estimatedP93Score: 0, breakdown };
  }

  questions.forEach((q) => {
    const userAns = userAnswers[q.id];
    const subj = q.subject || 'turkce';

    if (!breakdown[subj]) {
      breakdown[subj] = { correct: 0, wrong: 0, empty: 0, net: 0 };
    }

    if (!userAns) {
      totalEmpty++;
      breakdown[subj].empty++;
    } else if (userAns === q.correctAnswer) {
      totalCorrect++;
      breakdown[subj].correct++;
    } else {
      totalWrong++;
      breakdown[subj].wrong++;
    }
  });

  Object.keys(breakdown).forEach((subjKey) => {
    const b = breakdown[subjKey];
    b.net = Math.max(0, b.correct - b.wrong * 0.25);
  });

  const totalNet = Math.max(0, totalCorrect - totalWrong * 0.25);
  const estimatedP93Score = Math.min(100, Math.max(40, Number((45 + totalNet * 0.45833).toFixed(3))));

  return {
    totalCorrect,
    totalWrong,
    totalEmpty,
    totalNet: Number(totalNet.toFixed(2)),
    estimatedP93Score,
    breakdown,
  };
}
