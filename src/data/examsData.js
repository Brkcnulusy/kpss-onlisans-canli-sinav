// KPSS Ön Lisans ve KPSS Lisans (GY-GK) Geçmiş Sınav Veri Seti (2024, 2022, 2020, 2018, 2016)
// Her sınav yılı ve düzeyi için 120 soruluk tam ÖSYM müfredat seti

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
    "description": "ÖSYM 2024 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
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
        "explanation": "'Soğuk' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2024-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Raporu yöneticisine sunmadan önce tüm verileri dikkatle inceledi.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'gözden geçirmek' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2024-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2024)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2024-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2024-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2024-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2024-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2024)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2024-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2024-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2024-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2024-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2024-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2024-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2024-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2024-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2024-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceyda ve Elif aynı türde almıştır. (Soru #27) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2024-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceyda ve Elif aynı türde almıştır. (Soru #28) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Burak almıştır."
      },
      {
        "id": "2024-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceyda ve Elif aynı türde almıştır. (Soru #29) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim almıştır.",
          "C": "Ahmet aynı almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman aldığı kesindir."
      },
      {
        "id": "2024-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceyda ve Elif aynı türde almıştır. (Soru #30) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2024-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{5}{4} + \\frac{4}{2}}{\\frac{7}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "13/3",
          "B": "5/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2024-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,20}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "17",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2024-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2024-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+3} + 4^{5+3} + 4^{5+3} + 4^{5+3}}{2^{10+3}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2024-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2024-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{3}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "6",
          "B": "$$4\\sqrt{3}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2024-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 5| + |x + 2| = 12$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "-28",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2024-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-3 < x < 10$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "24",
          "B": "25",
          "C": "23",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2024-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 4}{x^2 + 4x + 4} \\div \\frac{x - 2}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1",
          "B": "x - 2",
          "C": "x + 2",
          "D": "x + 2",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2024-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$5a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2024-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #15) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #5) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #10) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #15) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #5) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #10) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #15) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #5) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #10) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #15) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #5) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #10) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #15) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #5) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #10) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2024-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2024-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2024-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2024-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2024-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #61) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #62) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #63) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #64) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #65) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #66) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #67) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #68) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #69) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #70) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #71) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #72) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #73) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #74) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #75) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #76) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #77) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #78) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #79) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #80) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #81) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #82) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #83) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #84) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #85) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #86) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #87) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #88) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #89) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #90) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #91) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #92) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #93) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #94) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #95) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #96) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #97) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #98) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #99) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #100) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #101) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #102) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #103) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #104) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #105) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #106) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #107) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #108) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #109) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #110) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #111) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #112) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #113) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #114) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Göbeklitepe",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' neolitik alanı hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Yarımburgaz",
          "D": "Alacahöyük",
          "E": "Hacılar"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Türksat 6A",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Türksat 6A",
          "B": "Göktürk-1",
          "C": "Rasat",
          "D": "Bilsat",
          "E": "Türksat 5B"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Osman Zeki Üngör",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Osman Zeki Üngör",
          "B": "Mehmet Âkif Ersoy",
          "C": "Zeki Müren",
          "D": "Itri",
          "E": "Dede Efendi"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "AİHM",
        "text": "Avrupa İnsan Hakları Mahkemesi hangi şehirdedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Strazburg",
          "B": "Lahey",
          "C": "Cenevre",
          "D": "Brüksel",
          "E": "Viyana"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Halide Edib Adıvar",
        "text": "'Sinekli Bakkal' romanının yazarı kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Reşat Nuri Güntekin",
          "C": "Yakup Kadri",
          "D": "Peyami Safa",
          "E": "Tarık Buğra"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Birleşmiş Milletler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "New York",
          "B": "Washington",
          "C": "Londra",
          "D": "Paris",
          "E": "Cenevre"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
  },
  {
    "id": "kpss-2022-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2022,
    "title": "2022 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2022 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2022-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>keskin</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Keskin' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2022-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'kulak kabartmak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yan masada konuşulan gizli konuyu çaktırmadan dinlemeye çalışıyordu.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'kulak kabartmak' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2022-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2022)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2022-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2022-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2022-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2022-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2022)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2022-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2022-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2022-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2022-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2022-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2022-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2022-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2022-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2022-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAli, Banu, Can, Derya ve Emre adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Can ve Emre aynı türde almıştır. (Soru #27) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2022-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAli, Banu, Can, Derya ve Emre adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Can ve Emre aynı türde almıştır. (Soru #28) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Banu almıştır."
      },
      {
        "id": "2022-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAli, Banu, Can, Derya ve Emre adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Can ve Emre aynı türde almıştır. (Soru #29) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Derya Roman almıştır.",
          "B": "Can Bilim almıştır.",
          "C": "Ali aynı almıştır.",
          "D": "Emre Roman almıştır.",
          "E": "Banu Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Emre'in Roman aldığı kesindir."
      },
      {
        "id": "2022-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAli, Banu, Can, Derya ve Emre adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Can ve Emre aynı türde almıştır. (Soru #30) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Ali - Tarih",
          "B": "Banu - Bilim",
          "C": "Can - Roman",
          "D": "Derya - Felsefe",
          "E": "Emre - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Emre Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2022-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "5/3",
          "B": "3/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2022-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,18}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2022-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+3} - 3^x = 216$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2022-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+4} + 4^{5+4} + 4^{5+4} + 4^{5+4}}{2^{10+4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2022-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2022-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{4096} + -48} \\times \\sqrt{8}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "16",
          "B": "$$4\\sqrt{8}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2022-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 10$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2022-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-4 < x < 8$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "18",
          "B": "19",
          "C": "17",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2022-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 81}{x^2 + 11x + 18} \\div \\frac{x - 9}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1",
          "B": "x - 9",
          "C": "x + 2",
          "D": "x + 9",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2022-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$3a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2022-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #12) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #17) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #7) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #12) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #17) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #7) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #12) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #17) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #7) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #12) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #17) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #7) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #12) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #17) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #7) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2022-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2022-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2022-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2022-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(9, 5) ve B(13, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2022-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #61) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #62) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #63) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #64) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #65) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #66) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #67) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #68) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #69) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #70) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #71) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #72) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #73) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #74) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #75) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #76) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #77) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #78) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #79) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #80) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #81) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #82) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #83) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #84) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #85) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #86) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #87) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #88) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #89) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #90) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #91) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #92) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #93) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #94) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #95) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #96) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #97) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #98) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #99) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #100) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #101) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #102) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #103) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #104) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #105) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #106) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #107) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #108) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #109) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #110) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #111) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #112) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #113) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #114) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Bursa",
        "text": "2022 Türk Dünyası Kültür Başkenti seçilen şehrimiz hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Bursa",
          "B": "Eskişehir",
          "C": "Kastamonu",
          "D": "Khiva",
          "E": "Nizip"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Çanakkale Köprüsü",
        "text": "Dünyanın en uzun orta açıklıklı asma köprüsü olan 1915 Çanakkale Köprüsü nerededir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Çanakkale Boğazı",
          "B": "İstanbul Boğazı",
          "C": "İzmit Körfezi",
          "D": "Osmangazi",
          "E": "Gördes"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Aziz Sancar",
        "text": "Nobel Kimya Ödülü kazanan ilk Türk bilim insanı kimdir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Prof. Dr. Aziz Sancar",
          "B": "Uğur Şahin",
          "C": "Cahit Arf",
          "D": "Gazi Yaşargil",
          "E": "Oktay Sinanoğlu"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Sabahattin Ali",
        "text": "'Kürk Mantolu Madonna' ve 'Kuyucaklı Yusuf' yazarı kimdir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Sabahattin Ali",
          "B": "Sait Faik",
          "C": "Orhan Kemal",
          "D": "Yaşar Kemal",
          "E": "Ahmet Hamdi Tanpınar"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "NATO",
        "text": "NATO Genel Merkezi hangi şehirdedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Brüksel",
          "B": "Varşova",
          "C": "Berlin",
          "D": "Roma",
          "E": "Madrid"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Sıfır Atık",
        "text": "Sıfır Atık projesine öncülük eden ve BM ödülü alan ülke hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Türkiye",
          "B": "Almanya",
          "C": "Japonya",
          "D": "Güney Kore",
          "E": "İsveç"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
  },
  {
    "id": "kpss-2020-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2020,
    "title": "2020 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2020 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2020-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>pişmek</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Pişmek' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2020-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'göze girmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Disiplinli çalışması ve üretkenliği ile müdürün takdirini kazandı.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'göze girmek' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2020-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2020)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2020-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2020-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2020-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2020-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2020)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2020-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2020-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2020-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2020-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2020-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2020-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2020-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2020-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2020-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nArda, Berrin, Cem, Dilek ve Eren adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cem ve Eren aynı türde almıştır. (Soru #27) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2020-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nArda, Berrin, Cem, Dilek ve Eren adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cem ve Eren aynı türde almıştır. (Soru #28) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Berrin almıştır."
      },
      {
        "id": "2020-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nArda, Berrin, Cem, Dilek ve Eren adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cem ve Eren aynı türde almıştır. (Soru #29) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Dilek Roman almıştır.",
          "B": "Cem Bilim almıştır.",
          "C": "Arda aynı almıştır.",
          "D": "Eren Roman almıştır.",
          "E": "Berrin Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Eren'in Roman aldığı kesindir."
      },
      {
        "id": "2020-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nArda, Berrin, Cem, Dilek ve Eren adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cem ve Eren aynı türde almıştır. (Soru #30) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Arda - Tarih",
          "B": "Berrin - Bilim",
          "C": "Cem - Roman",
          "D": "Dilek - Felsefe",
          "E": "Eren - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Eren Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2020-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{10}{4} + \\frac{2}{2}}{\\frac{12}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "14/3",
          "B": "10/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2020-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,16}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "8",
          "B": "10",
          "C": "12",
          "D": "13",
          "E": "14"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2020-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+4} - 3^x = 648$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2020-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+1} + 4^{5+1} + 4^{5+1} + 4^{5+1}}{2^{10+1}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2020-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2020-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{2401} + -33} \\times \\sqrt{7}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "14",
          "B": "$$4\\sqrt{7}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2020-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 10| + |x + 2| = 17$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "-48",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2020-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-1 < x < 6$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "12",
          "B": "13",
          "C": "11",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2020-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 49}{x^2 + 9x + 14} \\div \\frac{x - 7}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1",
          "B": "x - 7",
          "C": "x + 2",
          "D": "x + 7",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2020-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$10a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2020-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #9) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #14) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #13) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #9) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #14) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #13) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #9) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #14) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #13) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #9) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #14) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #13) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #9) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #14) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #13) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2020-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2020-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2020-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2020-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(7, 5) ve B(11, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2020-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #61) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #62) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #63) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #64) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #65) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #66) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #67) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #68) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #69) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #70) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #71) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #72) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #73) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #74) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #75) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #76) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #77) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #78) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #79) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #80) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #81) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #82) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #83) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #84) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #85) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #86) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #87) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #88) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #89) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #90) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #91) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #92) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #93) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #94) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #95) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #96) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #97) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #98) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #99) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #100) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #101) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #102) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #103) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #104) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #105) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #106) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #107) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #108) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #109) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #110) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #111) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #112) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #113) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #114) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Bilge Tonyukuk",
        "text": "2020 Yılı UNESCO tarafından ne yılı ilan edilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Bilge Tonyukuk Yılı",
          "B": "Yunus Emre Yılı",
          "C": "Hacı Bektaş Yılı",
          "D": "Evliya Çelebi Yılı",
          "E": "Kaşgarlı Mahmud Yılı"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Sakarya Gaz Sahası",
        "text": "Karadeniz'de keşfedilen ilk doğal gaz kuyusu hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tuna-1 Kuyusu",
          "B": "Kanuni-1",
          "C": "Fatih-2",
          "D": "Yavuz-3",
          "E": "Amasra-1"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Yaşar Kemal",
        "text": "'İnce Memed' romanının yazarı kimdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yaşar Kemal",
          "B": "Orhan Pamuk",
          "C": "Kemal Tahir",
          "D": "Tarık Buğra",
          "E": "Peyami Safa"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Mehmet Âkif Ersoy",
        "text": "İstiklal Marşı'mızın şairi kimdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Mehmet Âkif Ersoy",
          "B": "Faruk Nafiz",
          "C": "Yahya Kemal",
          "D": "Necip Fazıl",
          "E": "Ahmet Haşim"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Gevher Nesibe",
        "text": "Dünyanın ilk tıp fakültesi sayılan Gevher Nesibe Darüşşifası hangi ilimizdedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kayseri",
          "B": "Sivas",
          "C": "Erzurum",
          "D": "Konya",
          "E": "Bursa"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "BioNTech",
        "text": "Koronavirüs mRNA aşısını geliştiren BioNTech kurucusu bilim insanları kimlerdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Prof. Dr. Uğur Şahin ve Özlem Türeci",
          "B": "Aziz Sancar",
          "C": "Gazi Yaşargil",
          "D": "Cahit Arf",
          "E": "Hulusi Behçet"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
  },
  {
    "id": "kpss-2018-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2018,
    "title": "2018 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2018 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2018-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>ağır</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Ağır' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2018-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'ipini pazara çıkarmak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yaptığı hileli işleri belgeleriyle ortaya koyarak maskesini düşürdü.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'ipini pazara çıkarmak' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2018-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2018)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2018-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2018-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2018-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2018-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2018)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2018-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2018-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2018-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2018-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2018-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2018-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2018-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2018-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2018-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAslı, Barış, Ceren, Davut ve Ece adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceren ve Ece aynı türde almıştır. (Soru #27) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2018-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAslı, Barış, Ceren, Davut ve Ece adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceren ve Ece aynı türde almıştır. (Soru #28) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Barış almıştır."
      },
      {
        "id": "2018-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAslı, Barış, Ceren, Davut ve Ece adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceren ve Ece aynı türde almıştır. (Soru #29) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Davut Roman almıştır.",
          "B": "Ceren Bilim almıştır.",
          "C": "Aslı aynı almıştır.",
          "D": "Ece Roman almıştır.",
          "E": "Barış Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Ece'in Roman aldığı kesindir."
      },
      {
        "id": "2018-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAslı, Barış, Ceren, Davut ve Ece adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceren ve Ece aynı türde almıştır. (Soru #30) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Aslı - Tarih",
          "B": "Barış - Bilim",
          "C": "Ceren - Roman",
          "D": "Davut - Felsefe",
          "E": "Ece - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Ece Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2018-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{8}{4} + \\frac{3}{2}}{\\frac{10}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "14/3",
          "B": "8/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2018-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,14}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "6",
          "B": "8",
          "C": "10",
          "D": "11",
          "E": "12"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2018-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+1} - 3^x = 24$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2018-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+2} + 4^{5+2} + 4^{5+2} + 4^{5+2}}{2^{10+2}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2018-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2018-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{1296} + -20} \\times \\sqrt{6}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "12",
          "B": "$$4\\sqrt{6}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2018-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 8| + |x + 2| = 15$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "-40",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2018-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "6",
          "B": "7",
          "C": "5",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2018-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 25}{x^2 + 7x + 10} \\div \\frac{x - 5}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1",
          "B": "x - 5",
          "C": "x + 2",
          "D": "x + 5",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2018-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$8a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2018-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #6) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #11) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #16) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #6) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #11) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #16) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #6) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #11) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #16) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #6) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #11) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #16) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #6) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #11) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #16) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2018-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2018-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2018-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2018-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(5, 5) ve B(9, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2018-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #61) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #62) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #63) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #64) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #65) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #66) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #67) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #68) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #69) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #70) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #71) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #72) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #73) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #74) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #75) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #76) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #77) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #78) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #79) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #80) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #81) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #82) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #83) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #84) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #85) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #86) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #87) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #88) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #89) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #90) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #91) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #92) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #93) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #94) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #95) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #96) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #97) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #98) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #99) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #100) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #101) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #102) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #103) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #104) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #105) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #106) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #107) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #108) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #109) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #110) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #111) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #112) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #113) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #114) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Göbeklitepe 2018",
        "text": "2018 yılında UNESCO Dünya Mirası Kalıcı Listesi'ne giren alan hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Efes",
          "C": "Hierapolis",
          "D": "Troy",
          "E": "Aphrodisias"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Lale Aytaman",
        "text": "Türkiye'nin ilk kadın valisi kimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Lale Aytaman",
          "B": "Tansu Çiller",
          "C": "Türkan Akyol",
          "D": "Filiz Dinçmen",
          "E": "Muazzez İlmiye Çığ"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Geleneksel Tiyatro",
        "text": "Kel Hasan Efendi'nin tiyatro kavuğunu taşıyan merhum ustalarımızdandır: (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Rasim Öztekin",
          "B": "Kemal Sunal",
          "C": "Şener Şen",
          "D": "Halit Akçatepe",
          "E": "Zeki Alasya"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Phaselis",
        "text": "Phaselis Antik Kenti hangi ilimizdedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Antalya",
          "B": "Muğla",
          "C": "İzmir",
          "D": "Aydın",
          "E": "Mersin"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Nâzım Hikmet",
        "text": "'Memleketimden İnsan Manzaraları' yazarı kimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Nâzım Hikmet",
          "B": "Orhan Veli",
          "C": "Cahit Sıtkı",
          "D": "Attilâ İlhan",
          "E": "Cemal Süreya"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Valla Kanyonu",
        "text": "Valla Kanyonu hangi ilimizdedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kastamonu",
          "B": "Sinop",
          "C": "Karabük",
          "D": "Bolu",
          "E": "Artvin"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
  },
  {
    "id": "kpss-2016-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2016,
    "title": "2016 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2016 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2016-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>sıkı</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Sıkı' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2016-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'dili çözülmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Uzun süren mahcubiyetin ardından aniden konuşmaya başladı.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'dili çözülmek' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2016-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2016)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2016-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2016-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2016-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2016-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2016)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2016-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2016-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2016-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2016-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2016-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2016-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2016-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2016-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2016-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAyşe, Bora, Ceylan, Doğan ve Emin adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceylan ve Emin aynı türde almıştır. (Soru #27) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2016-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAyşe, Bora, Ceylan, Doğan ve Emin adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceylan ve Emin aynı türde almıştır. (Soru #28) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Bora almıştır."
      },
      {
        "id": "2016-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAyşe, Bora, Ceylan, Doğan ve Emin adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceylan ve Emin aynı türde almıştır. (Soru #29) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Doğan Roman almıştır.",
          "B": "Ceylan Bilim almıştır.",
          "C": "Ayşe aynı almıştır.",
          "D": "Emin Roman almıştır.",
          "E": "Bora Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Emin'in Roman aldığı kesindir."
      },
      {
        "id": "2016-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAyşe, Bora, Ceylan, Doğan ve Emin adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Ceylan ve Emin aynı türde almıştır. (Soru #30) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ayşe - Tarih",
          "B": "Bora - Bilim",
          "C": "Ceylan - Roman",
          "D": "Doğan - Felsefe",
          "E": "Emin - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Emin Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2016-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{6}{4} + \\frac{4}{2}}{\\frac{8}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "14/3",
          "B": "6/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2016-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,21}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "13",
          "B": "15",
          "C": "17",
          "D": "18",
          "E": "19"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2016-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2016-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+3} + 4^{5+3} + 4^{5+3} + 4^{5+3}}{2^{10+3}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2016-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2016-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{625} + -9} \\times \\sqrt{5}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "10",
          "B": "$$4\\sqrt{5}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2016-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 6| + |x + 2| = 13$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "-32",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2016-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-3 < x < 11$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "27",
          "B": "28",
          "C": "26",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2016-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2016-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$6a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2016-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #12) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #8) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #13) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #12) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #8) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #13) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #12) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #8) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #13) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #12) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #8) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #13) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #12) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #8) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #13) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2016-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2016-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2016-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2016-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(3, 5) ve B(7, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2016-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #61) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #62) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #63) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #64) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #65) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #66) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #67) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #68) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #69) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #70) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #71) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #72) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #73) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #74) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #75) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #76) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #77) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #78) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #79) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #80) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #81) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #82) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #83) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #84) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #85) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #86) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #87) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #88) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #89) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #90) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #91) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #92) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #93) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #94) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #95) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #96) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #97) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #98) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #99) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #100) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #101) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #102) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #103) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #104) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #105) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #106) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #107) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #108) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #109) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #110) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #111) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #112) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #113) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #114) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Ani Harabeleri",
        "text": "2016 yılında UNESCO Dünya Mirası Listesi'ne giren Ani Harabeleri nerededir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kars",
          "B": "Van",
          "C": "Ağrı",
          "D": "Iğdır",
          "E": "Erzurum"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "RASAT",
        "text": "Türkiye'nin ilk yerli gözlem uydusu hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "RASAT",
          "B": "BILSAT",
          "C": "GÖKTÜRK-2",
          "D": "GÖKTÜRK-1",
          "E": "TÜRKSAT 3A"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Pîrî Reis",
        "text": "Dünya haritasını çizen ünlü Türk denizcisi kimdir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Pîrî Reis",
          "B": "Barbaros Hayreddin",
          "C": "Seydi Ali Reis",
          "D": "Turgut Reis",
          "E": "Oruç Reis"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Oğuz Atay",
        "text": "'Tutunamayanlar' romanının yazarı kimdir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Oğuz Atay",
          "B": "Yusuf Atılgan",
          "C": "Adalet Ağaoğlu",
          "D": "Vüs'at O. Bener",
          "E": "Bilge Karasu"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Edirnekapı",
        "text": "Mehmet Âkif Ersoy'un kabri hangi şehitliktedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Edirnekapı Şehitliği",
          "B": "Zincirlikuyu",
          "C": "Aşiyan",
          "D": "Karacaahmet",
          "E": "Zeytinburnu"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Atatürk Barajı",
        "text": "GAP kapsamındaki en büyük hidroelektrik barajımız hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Atatürk Barajı",
          "B": "Karakaya Barajı",
          "C": "Keban Barajı",
          "D": "Ilısu Barajı",
          "E": "Birecik Barajı"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
  },
  {
    "id": "kpss-2024-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2024,
    "title": "2024 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2024 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2024-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>derin</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Derin' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2024-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'ayak uydurmak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Şirketteki yeni teknolojik sistemlere kısa sürede entegre oldu.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'ayak uydurmak' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2024-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2024)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2024-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2024-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2024-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2024-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2024)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2024-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2024-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2024-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2024-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2024-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2024-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2024-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2024-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2024-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2024-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAlper, Büşra, Cahit, Damla ve Enes adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cahit ve Enes aynı türde almıştır. (Soru #27) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2024-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAlper, Büşra, Cahit, Damla ve Enes adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cahit ve Enes aynı türde almıştır. (Soru #28) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Büşra almıştır."
      },
      {
        "id": "2024-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAlper, Büşra, Cahit, Damla ve Enes adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cahit ve Enes aynı türde almıştır. (Soru #29) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Damla Roman almıştır.",
          "B": "Cahit Bilim almıştır.",
          "C": "Alper aynı almıştır.",
          "D": "Enes Roman almıştır.",
          "E": "Büşra Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Enes'in Roman aldığı kesindir."
      },
      {
        "id": "2024-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAlper, Büşra, Cahit, Damla ve Enes adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cahit ve Enes aynı türde almıştır. (Soru #30) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Alper - Tarih",
          "B": "Büşra - Bilim",
          "C": "Cahit - Roman",
          "D": "Damla - Felsefe",
          "E": "Enes - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Enes Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2024-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{4}{4} + \\frac{1}{2}}{\\frac{6}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "6/3",
          "B": "4/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2024-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,19}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "16",
          "E": "17"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2024-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+3} - 3^x = 216$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2024-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+4} + 4^{5+4} + 4^{5+4} + 4^{5+4}}{2^{10+4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2024-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2024-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{256} + 0} \\times \\sqrt{4}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "8",
          "B": "$$4\\sqrt{4}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2024-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 4| + |x + 2| = 11$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "-24",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2024-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-4 < x < 9$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "21",
          "B": "22",
          "C": "20",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2024-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 100}{x^2 + 12x + 20} \\div \\frac{x - 10}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "1",
          "B": "x - 10",
          "C": "x + 2",
          "D": "x + 10",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2024-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2024-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2024-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2024-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2024-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2024-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2024-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(10, 5) ve B(14, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2024-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #61) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #62) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #63) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #64) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #65) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #66) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #67) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #68) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #69) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #70) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #71) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #72) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #73) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #74) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #75) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #76) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #77) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #78) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #79) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #80) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #81) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #82) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #83) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #84) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #85) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #86) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #87) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2024-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #88) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #89) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #90) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #91) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #92) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #93) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #94) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #95) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #96) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #97) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #98) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #99) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #100) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #101) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #102) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #103) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #104) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #105) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #106) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #107) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #108) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #109) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #110) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #111) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #112) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #113) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #114) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Göbeklitepe",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' neolitik alanı hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Yarımburgaz",
          "D": "Alacahöyük",
          "E": "Hacılar"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Türksat 6A",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Türksat 6A",
          "B": "Göktürk-1",
          "C": "Rasat",
          "D": "Bilsat",
          "E": "Türksat 5B"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Osman Zeki Üngör",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Osman Zeki Üngör",
          "B": "Mehmet Âkif Ersoy",
          "C": "Zeki Müren",
          "D": "Itri",
          "E": "Dede Efendi"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "AİHM",
        "text": "Avrupa İnsan Hakları Mahkemesi hangi şehirdedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Strazburg",
          "B": "Lahey",
          "C": "Cenevre",
          "D": "Brüksel",
          "E": "Viyana"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Halide Edib Adıvar",
        "text": "'Sinekli Bakkal' romanının yazarı kimdir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Reşat Nuri Güntekin",
          "C": "Yakup Kadri",
          "D": "Peyami Safa",
          "E": "Tarık Buğra"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2024-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Birleşmiş Milletler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "New York",
          "B": "Washington",
          "C": "Londra",
          "D": "Paris",
          "E": "Cenevre"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
  },
  {
    "id": "kpss-2022-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2022,
    "title": "2022 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2022 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2022-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>tatlı</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Tatlı' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2022-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'çileden çıkmak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Göz göre göre yapılan adaletsizlik karşısında aşırı öfkelendi.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'çileden çıkmak' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2022-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2022)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2022-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2022-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2022-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2022-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2022)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2022-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2022-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2022-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2022-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2022-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2022-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2022-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2022-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2022-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2022-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAtilla, Bahar, Cihan, Duygu ve Erhan adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cihan ve Erhan aynı türde almıştır. (Soru #27) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2022-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAtilla, Bahar, Cihan, Duygu ve Erhan adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cihan ve Erhan aynı türde almıştır. (Soru #28) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Bahar almıştır."
      },
      {
        "id": "2022-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAtilla, Bahar, Cihan, Duygu ve Erhan adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cihan ve Erhan aynı türde almıştır. (Soru #29) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Duygu Roman almıştır.",
          "B": "Cihan Bilim almıştır.",
          "C": "Atilla aynı almıştır.",
          "D": "Erhan Roman almıştır.",
          "E": "Bahar Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Erhan'in Roman aldığı kesindir."
      },
      {
        "id": "2022-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAtilla, Bahar, Cihan, Duygu ve Erhan adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cihan ve Erhan aynı türde almıştır. (Soru #30) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Atilla - Tarih",
          "B": "Bahar - Bilim",
          "C": "Cihan - Roman",
          "D": "Duygu - Felsefe",
          "E": "Erhan - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Erhan Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2022-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{2}{4} + \\frac{2}{2}}{\\frac{4}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "6/3",
          "B": "2/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2022-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,17}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "9",
          "B": "11",
          "C": "13",
          "D": "14",
          "E": "15"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2022-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+4} - 3^x = 648$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2022-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+1} + 4^{5+1} + 4^{5+1} + 4^{5+1}}{2^{10+1}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2022-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2022-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{3}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "6",
          "B": "$$4\\sqrt{3}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2022-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 2| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "-16",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2022-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-1 < x < 7$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "15",
          "B": "16",
          "C": "14",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2022-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 64}{x^2 + 10x + 16} \\div \\frac{x - 8}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "1",
          "B": "x - 8",
          "C": "x + 2",
          "D": "x + 8",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2022-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$2a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2022-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #7) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #7) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #7) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #7) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #7) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2022-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2022-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2022-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2022-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2022-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(8, 5) ve B(12, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2022-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #61) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #62) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #63) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #64) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #65) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #66) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #67) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #68) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #69) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #70) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #71) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #72) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #73) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #74) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #75) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #76) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #77) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #78) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #79) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #80) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #81) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #82) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #83) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #84) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #85) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #86) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #87) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2022-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #88) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #89) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #90) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #91) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #92) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #93) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #94) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #95) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #96) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #97) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #98) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #99) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #100) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #101) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #102) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #103) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #104) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #105) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #106) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #107) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #108) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #109) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #110) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #111) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #112) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #113) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #114) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Bursa",
        "text": "2022 Türk Dünyası Kültür Başkenti seçilen şehrimiz hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Bursa",
          "B": "Eskişehir",
          "C": "Kastamonu",
          "D": "Khiva",
          "E": "Nizip"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Çanakkale Köprüsü",
        "text": "Dünyanın en uzun orta açıklıklı asma köprüsü olan 1915 Çanakkale Köprüsü nerededir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Çanakkale Boğazı",
          "B": "İstanbul Boğazı",
          "C": "İzmit Körfezi",
          "D": "Osmangazi",
          "E": "Gördes"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Aziz Sancar",
        "text": "Nobel Kimya Ödülü kazanan ilk Türk bilim insanı kimdir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Prof. Dr. Aziz Sancar",
          "B": "Uğur Şahin",
          "C": "Cahit Arf",
          "D": "Gazi Yaşargil",
          "E": "Oktay Sinanoğlu"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Sabahattin Ali",
        "text": "'Kürk Mantolu Madonna' ve 'Kuyucaklı Yusuf' yazarı kimdir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Sabahattin Ali",
          "B": "Sait Faik",
          "C": "Orhan Kemal",
          "D": "Yaşar Kemal",
          "E": "Ahmet Hamdi Tanpınar"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "NATO",
        "text": "NATO Genel Merkezi hangi şehirdedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Brüksel",
          "B": "Varşova",
          "C": "Berlin",
          "D": "Roma",
          "E": "Madrid"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2022-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Sıfır Atık",
        "text": "Sıfır Atık projesine öncülük eden ve BM ödülü alan ülke hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Türkiye",
          "B": "Almanya",
          "C": "Japonya",
          "D": "Güney Kore",
          "E": "İsveç"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
  },
  {
    "id": "kpss-2020-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2020,
    "title": "2020 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2020 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2020-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>açık</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Açık' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2020-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'ekmeğini taştan çıkarmak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "En zor ekonomik koşullarda bile geçimini sağladı.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'ekmeğini taştan çıkarmak' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2020-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2020)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2020-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2020-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2020-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2020-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2020)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2020-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2020-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2020-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2020-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2020-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2020-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2020-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2020-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2020-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2020-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAydın, Begüm, Cevdet, Deniz ve Emin adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cevdet ve Emin aynı türde almıştır. (Soru #27) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2020-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAydın, Begüm, Cevdet, Deniz ve Emin adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cevdet ve Emin aynı türde almıştır. (Soru #28) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Begüm almıştır."
      },
      {
        "id": "2020-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAydın, Begüm, Cevdet, Deniz ve Emin adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cevdet ve Emin aynı türde almıştır. (Soru #29) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Cevdet Bilim almıştır.",
          "C": "Aydın aynı almıştır.",
          "D": "Emin Roman almıştır.",
          "E": "Begüm Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Emin'in Roman aldığı kesindir."
      },
      {
        "id": "2020-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAydın, Begüm, Cevdet, Deniz ve Emin adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cevdet ve Emin aynı türde almıştır. (Soru #30) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Aydın - Tarih",
          "B": "Begüm - Bilim",
          "C": "Cevdet - Roman",
          "D": "Deniz - Felsefe",
          "E": "Emin - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Emin Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2020-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{9}{4} + \\frac{3}{2}}{\\frac{11}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "15/3",
          "B": "9/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2020-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,15}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "7",
          "B": "9",
          "C": "11",
          "D": "12",
          "E": "13"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2020-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+1} - 3^x = 24$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2020-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+2} + 4^{5+2} + 4^{5+2} + 4^{5+2}}{2^{10+2}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2020-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2020-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{4096} + -48} \\times \\sqrt{8}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "16",
          "B": "$$4\\sqrt{8}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2020-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 9| + |x + 2| = 16$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "-44",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2020-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 5$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "9",
          "B": "10",
          "C": "8",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2020-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 36}{x^2 + 8x + 12} \\div \\frac{x - 6}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "1",
          "B": "x - 6",
          "C": "x + 2",
          "D": "x + 6",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2020-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$9a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2020-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #9) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #9) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #9) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #9) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #9) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "45",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #14) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "60",
          "B": "72",
          "C": "90",
          "D": "108",
          "E": "120"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "90",
          "B": "108",
          "C": "135",
          "D": "162",
          "E": "180"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2020-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2020-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2020-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2020-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2020-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(6, 5) ve B(10, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2020-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #61) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #62) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #63) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #64) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #65) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #66) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #67) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #68) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #69) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #70) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #71) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #72) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #73) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #74) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #75) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #76) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #77) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #78) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #79) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #80) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #81) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #82) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #83) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #84) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #85) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #86) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #87) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2020-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #88) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #89) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #90) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #91) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #92) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #93) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #94) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #95) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #96) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #97) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #98) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #99) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #100) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #101) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #102) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #103) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #104) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #105) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #106) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #107) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #108) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #109) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #110) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #111) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #112) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #113) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #114) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Bilge Tonyukuk",
        "text": "2020 Yılı UNESCO tarafından ne yılı ilan edilmiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Bilge Tonyukuk Yılı",
          "B": "Yunus Emre Yılı",
          "C": "Hacı Bektaş Yılı",
          "D": "Evliya Çelebi Yılı",
          "E": "Kaşgarlı Mahmud Yılı"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Sakarya Gaz Sahası",
        "text": "Karadeniz'de keşfedilen ilk doğal gaz kuyusu hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Tuna-1 Kuyusu",
          "B": "Kanuni-1",
          "C": "Fatih-2",
          "D": "Yavuz-3",
          "E": "Amasra-1"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Yaşar Kemal",
        "text": "'İnce Memed' romanının yazarı kimdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yaşar Kemal",
          "B": "Orhan Pamuk",
          "C": "Kemal Tahir",
          "D": "Tarık Buğra",
          "E": "Peyami Safa"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Mehmet Âkif Ersoy",
        "text": "İstiklal Marşı'mızın şairi kimdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Mehmet Âkif Ersoy",
          "B": "Faruk Nafiz",
          "C": "Yahya Kemal",
          "D": "Necip Fazıl",
          "E": "Ahmet Haşim"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Gevher Nesibe",
        "text": "Dünyanın ilk tıp fakültesi sayılan Gevher Nesibe Darüşşifası hangi ilimizdedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kayseri",
          "B": "Sivas",
          "C": "Erzurum",
          "D": "Konya",
          "E": "Bursa"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2020-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "BioNTech",
        "text": "Koronavirüs mRNA aşısını geliştiren BioNTech kurucusu bilim insanları kimlerdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Prof. Dr. Uğur Şahin ve Özlem Türeci",
          "B": "Aziz Sancar",
          "C": "Gazi Yaşargil",
          "D": "Cahit Arf",
          "E": "Hulusi Behçet"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
  },
  {
    "id": "kpss-2018-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2018,
    "title": "2018 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2018 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2018-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>kuru</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Kuru' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2018-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'göz boyamak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Gösterişli kapak tasarımıyla kitabın niteliksiz içeriğini gizledi.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'göz boyamak' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2018-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2018)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2018-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2018-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2018-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2018-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2018)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2018-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2018-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2018-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2018-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2018-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2018-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2018-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2018-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2018-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2018-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAnıl, Berna, Coşkun, Didem ve Eray adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Coşkun ve Eray aynı türde almıştır. (Soru #27) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2018-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAnıl, Berna, Coşkun, Didem ve Eray adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Coşkun ve Eray aynı türde almıştır. (Soru #28) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Berna almıştır."
      },
      {
        "id": "2018-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAnıl, Berna, Coşkun, Didem ve Eray adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Coşkun ve Eray aynı türde almıştır. (Soru #29) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Didem Roman almıştır.",
          "B": "Coşkun Bilim almıştır.",
          "C": "Anıl aynı almıştır.",
          "D": "Eray Roman almıştır.",
          "E": "Berna Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Eray'in Roman aldığı kesindir."
      },
      {
        "id": "2018-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAnıl, Berna, Coşkun, Didem ve Eray adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Coşkun ve Eray aynı türde almıştır. (Soru #30) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Anıl - Tarih",
          "B": "Berna - Bilim",
          "C": "Coşkun - Roman",
          "D": "Didem - Felsefe",
          "E": "Eray - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Eray Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2018-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{7}{4} + \\frac{4}{2}}{\\frac{9}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "15/3",
          "B": "7/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2018-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,22}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "14",
          "B": "16",
          "C": "18",
          "D": "19",
          "E": "20"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2018-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2018-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+3} + 4^{5+3} + 4^{5+3} + 4^{5+3}}{2^{10+3}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2018-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2018-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{2401} + -33} \\times \\sqrt{7}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "14",
          "B": "$$4\\sqrt{7}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2018-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 7| + |x + 2| = 14$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "-36",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2018-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-3 < x < 12$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "30",
          "B": "31",
          "C": "29",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2018-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 16}{x^2 + 6x + 8} \\div \\frac{x - 4}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "1",
          "B": "x - 4",
          "C": "x + 2",
          "D": "x + 4",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2018-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$7a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2018-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #15) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "100",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "200"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #11) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "60",
          "D": "72",
          "E": "80"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #10) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "70",
          "B": "84",
          "C": "105",
          "D": "126",
          "E": "140"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2018-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2018-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2018-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2018-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2018-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(4, 5) ve B(8, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2018-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #61) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #62) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #63) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #64) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #65) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #66) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #67) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #68) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #69) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #70) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #71) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #72) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #73) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #74) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #75) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #76) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #77) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #78) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #79) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #80) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #81) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #82) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #83) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #84) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #85) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #86) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #87) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2018-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #88) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #89) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #90) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #91) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #92) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #93) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #94) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #95) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #96) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #97) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #98) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #99) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #100) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #101) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #102) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #103) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #104) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #105) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #106) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #107) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #108) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #109) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #110) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #111) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #112) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #113) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #114) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Göbeklitepe 2018",
        "text": "2018 yılında UNESCO Dünya Mirası Kalıcı Listesi'ne giren alan hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Efes",
          "C": "Hierapolis",
          "D": "Troy",
          "E": "Aphrodisias"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Lale Aytaman",
        "text": "Türkiye'nin ilk kadın valisi kimdir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Lale Aytaman",
          "B": "Tansu Çiller",
          "C": "Türkan Akyol",
          "D": "Filiz Dinçmen",
          "E": "Muazzez İlmiye Çığ"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Geleneksel Tiyatro",
        "text": "Kel Hasan Efendi'nin tiyatro kavuğunu taşıyan merhum ustalarımızdandır: (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Rasim Öztekin",
          "B": "Kemal Sunal",
          "C": "Şener Şen",
          "D": "Halit Akçatepe",
          "E": "Zeki Alasya"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Phaselis",
        "text": "Phaselis Antik Kenti hangi ilimizdedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Antalya",
          "B": "Muğla",
          "C": "İzmir",
          "D": "Aydın",
          "E": "Mersin"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Nâzım Hikmet",
        "text": "'Memleketimden İnsan Manzaraları' yazarı kimdir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Nâzım Hikmet",
          "B": "Orhan Veli",
          "C": "Cahit Sıtkı",
          "D": "Attilâ İlhan",
          "E": "Cemal Süreya"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2018-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Valla Kanyonu",
        "text": "Valla Kanyonu hangi ilimizdedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kastamonu",
          "B": "Sinop",
          "C": "Karabük",
          "D": "Bolu",
          "E": "Artvin"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
  },
  {
    "id": "kpss-2016-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2016,
    "title": "2016 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2016 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı. (120 Soru / 130 Dk). zorluk seviyesine uygun tam sınav simülasyonu.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2016-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>yumuşak</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Yumuşak' sözcüğü soyut ve mecazi bir durumu ifade etmektedir."
      },
      {
        "id": "2016-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'etki altında kalmak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Çevresindekilerin yönlendirmesiyle kararını son anda değiştirdi.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gururla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'etki altında kalmak' deyimi cümlede tam anlam karşılığı ile kullanılmıştır."
      },
      {
        "id": "2016-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Balkona çıkıp deniz havası alınca zihnen biraz olsun açıldım. (Dönem 2016)",
          "B": "Tekne kıyıdan iki mil kadar açıldıktan sonra motor aniden arızalandı.",
          "C": "Yeni açılan kütüphaneye öğrenciler ilk günden büyük ilgi gösterdi.",
          "D": "Kilitli tahta kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Güneşte fazla kalan kumaşın rengi günden güne açılmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Balkona çıkıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2016-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Nesnel Yargı)",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir ve kanıtlanabilir nesnel bir veridir."
      },
      {
        "id": "2016-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Koşul-Sonuç)",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile eylem koşula bağlanmıştır."
      },
      {
        "id": "2016-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Üslup)",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak akıcı bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'da geçen bir aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın zorluklarına karşı yılmadan mücadele ediyor.",
          "D": "Yayınlanan bu son kitap kısa sürede en çok satanlar listesine girdi.",
          "E": "Şair, çocukluk yıllarında yaşadığı kasabanın atmosferini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Anlatım biçimi, kelime seçimi ve cümle yapısı üslup ile ilgilidir."
      },
      {
        "id": "2016-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam (Örtülü Anlam)",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Ahmet de bu yılki akademik derece sınavını başarıyla kazandı. (2016)",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de sınavı kazandığı örtülü anlamını vermektedir."
      },
      {
        "id": "2016-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunarak empati yeteneğini geliştirir. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu, empati gücünü ve tecrübesini geliştirdiği",
          "B": "Sadece klasik edebi eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini almasının zorunlu olduğu",
          "E": "Hızlı okuma tekniklerinin okul müfredatına girmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parğraftaki temel vurgu okumanın bireysel ve zihinsel gelişime etkisidir."
      },
      {
        "id": "2016-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz kanlı canlı insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Eserlerinde fantastik ve olağanüstü kurgulara ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden aktif biçimde faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi anlatı vurgulanmış, fantastik/olağanüstü kurgulardan bahsedilmemiştir."
      },
      {
        "id": "2016-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu akışı bozulmuştur."
      },
      {
        "id": "2016-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' ayrı yazılır, 'herşey' yazımı hatalıdır."
      },
      {
        "id": "2016-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı yanlıştır."
      },
      {
        "id": "2016-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük yoktur."
      },
      {
        "id": "2016-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne / Belirtili Nesne / Yüklem dizilimidir."
      },
      {
        "id": "2016-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcük Türleri ve Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2016-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #16 (Cümle Tamamlama) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragraf Bölme)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #17 (Paragraf Bölme) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragraf Bölme kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Yardımcı Düşünce)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #18 (Yardımcı Düşünce) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Yardımcı Düşünce kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Ana Fikir Çıkarımı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #19 (Ana Fikir Çıkarımı) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Ana Fikir Çıkarımı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Metin Tamamlama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #20 (Metin Tamamlama) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Metin Tamamlama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Anlatım Biçimleri)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #21 (Anlatım Biçimleri) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Anlatım Biçimleri kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Kapsamlı Yargı)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #22 (Kapsamlı Yargı) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Kapsamlı Yargı kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Çoklu Paragraf Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #23 (Çoklu Paragraf Analizi) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Çoklu Paragraf Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Paragrafta Çıkarım)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #24 (Paragrafta Çıkarım) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafta Çıkarım kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Cümle Sıralama)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #25 (Cümle Sıralama) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Cümle Sıralama kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf (Liderlik ve Vizyon Analizi)",
        "text": "Paragrafta anlatım teknikleri ve metin analizi sorusu #26 (Liderlik ve Vizyon Analizi) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Liderlik ve Vizyon Analizi kurallarına göre doğru cevap A seçeneğidir."
      },
      {
        "id": "2016-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAykut, Bengi, Cüneyt, Derya ve Erkan adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cüneyt ve Erkan aynı türde almıştır. (Soru #27) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "İki kişi aynı tür olan Roman'ı almıştır."
      },
      {
        "id": "2016-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAykut, Bengi, Cüneyt, Derya ve Erkan adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cüneyt ve Erkan aynı türde almıştır. (Soru #28) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Geriye kalan Bilim kitabını Bengi almıştır."
      },
      {
        "id": "2016-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAykut, Bengi, Cüneyt, Derya ve Erkan adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cüneyt ve Erkan aynı türde almıştır. (Soru #29) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Derya Roman almıştır.",
          "B": "Cüneyt Bilim almıştır.",
          "C": "Aykut aynı almıştır.",
          "D": "Erkan Roman almıştır.",
          "E": "Bengi Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Erkan'in Roman aldığı kesindir."
      },
      {
        "id": "2016-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAykut, Bengi, Cüneyt, Derya ve Erkan adlı beş arkadaş Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Cüneyt ve Erkan aynı türde almıştır. (Soru #30) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Aykut - Tarih",
          "B": "Bengi - Bilim",
          "C": "Cüneyt - Roman",
          "D": "Derya - Felsefe",
          "E": "Erkan - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Erkan Roman aldığı için Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2016-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{5}{4} + \\frac{1}{2}}{\\frac{7}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "7/3",
          "B": "5/2",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Rasyonel sayılarda pay ve payda işlemleri yapılarak oranlanır."
      },
      {
        "id": "2016-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,20}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "17",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler rasyonel sayılara dönüştürülüp hesaplanır."
      },
      {
        "id": "2016-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+3} - 3^x = 216$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Üslü ortak çarpan parantezine alınarak x değeri bulunur."
      },
      {
        "id": "2016-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^{5+4} + 4^{5+4} + 4^{5+4} + 4^{5+4}}{2^{10+4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "Tabanlar 2 kuvvetine çevrilip üsler oranlanır."
      },
      {
        "id": "2016-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0,09} + \\sqrt{0,16} - \\sqrt{0,25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2 bulunur."
      },
      {
        "id": "2016-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{1296} + -20} \\times \\sqrt{6}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "12",
          "B": "$$4\\sqrt{6}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "İç içe kökler dışa çıkarılarak çarpılır."
      },
      {
        "id": "2016-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 5| + |x + 2| = 12$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "-28",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Mutlak değer aralıkları incelenerek kökler çarpımı bulunur."
      },
      {
        "id": "2016-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-4 < x < 10$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "24",
          "B": "25",
          "C": "23",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Eşitsizlik 3 ile çarpılıp 5 çıkarılarak sınır bulunur."
      },
      {
        "id": "2016-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 4}{x^2 + 4x + 4} \\div \\frac{x - 2}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "1",
          "B": "x - 2",
          "C": "x + 2",
          "D": "x + 2",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Çarpanlara ayırma yöntemi ile sadeleştirme yapılır."
      },
      {
        "id": "2016-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$5a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "5 ve 9 ile bölünebilme kuralları uygulanır."
      },
      {
        "id": "2016-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "ÖSYM standartlarında Sayı Problemleri sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Sayı Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "ÖSYM standartlarında Kesir Problemleri sorusu (Varyasyon #8) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Kesir Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "ÖSYM standartlarında Sıra Problemleri sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Sıra Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "ÖSYM standartlarında Yaş Problemleri sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Yaş Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Problemleri",
        "text": "ÖSYM standartlarında Yüzde Problemleri sorusu (Varyasyon #8) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Yüzde Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar Problemleri",
        "text": "ÖSYM standartlarında Kâr-Zarar Problemleri sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Kâr-Zarar Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "ÖSYM standartlarında Hız-Hareket Problemleri sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Hız-Hareket Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "ÖSYM standartlarında Karışım Problemleri sorusu (Varyasyon #8) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Karışım Problemleri denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "ÖSYM standartlarında Kümeler sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Kümeler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "ÖSYM standartlarında Fonksiyonlar sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Fonksiyonlar denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "ÖSYM standartlarında Olasılık sorusu (Varyasyon #8) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Olasılık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "ÖSYM standartlarında Diziler sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Diziler denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "ÖSYM standartlarında Permütasyon sorusu (Varyasyon #12) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "80",
          "B": "96",
          "C": "120",
          "D": "144",
          "E": "160"
        },
        "correctAnswer": "A",
        "explanation": "Permütasyon denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "ÖSYM standartlarında Modüler Aritmetik sorusu (Varyasyon #8) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "30",
          "D": "36",
          "E": "40"
        },
        "correctAnswer": "A",
        "explanation": "Modüler Aritmetik denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "ÖSYM standartlarında Sayısal Mantık sorusu (Varyasyon #13) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "50",
          "B": "60",
          "C": "75",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Sayısal Mantık denklem adımları ile A seçeneğine ulaşılır."
      },
      {
        "id": "2016-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Geometri sorusu #56 (Üçgende Açılar) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "20",
          "B": "24",
          "C": "28",
          "D": "30",
          "E": "36"
        },
        "correctAnswer": "A",
        "explanation": "Üçgende Açılar geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2016-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor ve Özel Üçgenler",
        "text": "Geometri sorusu #57 (Pisagor ve Özel Üçgenler) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "30",
          "B": "36",
          "C": "42",
          "D": "45",
          "E": "54"
        },
        "correctAnswer": "A",
        "explanation": "Pisagor ve Özel Üçgenler geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2016-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen ve Kare",
        "text": "Geometri sorusu #58 (Dikdörtgen ve Kare) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "40",
          "B": "48",
          "C": "56",
          "D": "60",
          "E": "72"
        },
        "correctAnswer": "A",
        "explanation": "Dikdörtgen ve Kare geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2016-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çember ve Daire",
        "text": "Geometri sorusu #59 (Çember ve Daire) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "18"
        },
        "correctAnswer": "A",
        "explanation": "Çember ve Daire geometrik teoremleri uygulanmıştır."
      },
      {
        "id": "2016-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "İki nokta arası uzaklık formülüyle hesaplanır."
      },
      {
        "id": "2016-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #61) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #62) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #63) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #64) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #65) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #66) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #67) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #68) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #69) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #70) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #71) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #72) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (Soru #73) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde en yüksek gelirli toprak türü hangisidir? (Soru #74) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Sistemi",
        "text": "Osmanlı Devleti'nde adalet işlerine bakan ve kadıların atamasını yapan görevli kimdir? (Soru #75) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele",
        "text": "Misak-ı Millî kararları hangi kurul veya meclis tarafından kabul edilmiştir? (Soru #76) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (Soru #77) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında müttefiklerin Türkiye'yi savaşa sokmak için düzenlediği görüşme hangisidir? (Soru #78) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması neyi gösterir? (Soru #79) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "Oligarşik yapıyı",
          "E": "Teokratik düzeni"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İlk Türk İslam Devletleri",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin bağımsızlık ilan etmesi neye yol açmıştır? (Soru #80) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve merkezi otoritenin zayıflamasına",
          "B": "İkta sisteminin kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçe'nin resmi dil olmasına",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (Soru #81) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme",
        "text": "Kutsal yerlerin koruyucusu (Hâdimü'l-Haremeyni'ş-Şerifeyn) unvanını alan ilk Osmanlı padişahı kimdir? (Soru #82) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür Medeniyet",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (Soru #83) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahat",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (Soru #84) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (Soru #85) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (Soru #86) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün hangisi de kabul edilmiştir? (Soru #87) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarihsel kronoloji ve ÖSYM müfredatına göre doğru yanıt A seçeneğidir."
      },
      {
        "id": "2016-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #88) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #89) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #90) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #91) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #92) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #93) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #94) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #95) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü alan hangisidir? (Soru #96) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "İç Anadolu (Karapınar)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Jeotermal enerji santrallerinin ilk kurulduğu ve en yaygın olduğu ilimiz hangisidir? (Soru #97) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Denizli",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin en yoğun yapıldığı coğrafi bölge hangisidir? (Soru #98) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (Soru #99) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (Soru #100) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumunun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Rüzgarların yönü",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (Soru #101) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Akarsular",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehir hangisidir? (Soru #102) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi hakimdir? (Soru #103) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük olduğu dönem hangisidir? (Soru #104) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizin sınırları içerisindedir? (Soru #105) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM müfredatına göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #106) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #107) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Memurlara verilen hangi disiplin cezasına karşı yargı yolu açıktır? (Soru #108) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (Soru #109) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (Soru #110) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (Soru #111) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (Soru #112) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "MGK",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Fiil ehliyetine sahip olabilmek için gerekli şartlar nelerdir? (Soru #113) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurup mezun olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kuralları neyi korur? (Soru #114) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı",
          "B": "Sadece ticari borçları",
          "C": "Mülkiyet haklarını",
          "D": "Uluslararası sözleşmeleri",
          "E": "Seçim kanunlarını"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki düzenlemelere göre A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Ani Harabeleri",
        "text": "2016 yılında UNESCO Dünya Mirası Listesi'ne giren Ani Harabeleri nerededir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kars",
          "B": "Van",
          "C": "Ağrı",
          "D": "Iğdır",
          "E": "Erzurum"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "RASAT",
        "text": "Türkiye'nin ilk yerli gözlem uydusu hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "RASAT",
          "B": "BILSAT",
          "C": "GÖKTÜRK-2",
          "D": "GÖKTÜRK-1",
          "E": "TÜRKSAT 3A"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Pîrî Reis",
        "text": "Dünya haritasını çizen ünlü Türk denizcisi kimdir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Pîrî Reis",
          "B": "Barbaros Hayreddin",
          "C": "Seydi Ali Reis",
          "D": "Turgut Reis",
          "E": "Oruç Reis"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Oğuz Atay",
        "text": "'Tutunamayanlar' romanının yazarı kimdir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Oğuz Atay",
          "B": "Yusuf Atılgan",
          "C": "Adalet Ağaoğlu",
          "D": "Vüs'at O. Bener",
          "E": "Bilge Karasu"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Edirnekapı",
        "text": "Mehmet Âkif Ersoy'un kabri hangi şehitliktedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Edirnekapı Şehitliği",
          "B": "Zincirlikuyu",
          "C": "Aşiyan",
          "D": "Karacaahmet",
          "E": "Zeytinburnu"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      },
      {
        "id": "2016-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Atatürk Barajı",
        "text": "GAP kapsamındaki en büyük hidroelektrik barajımız hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Atatürk Barajı",
          "B": "Karakaya Barajı",
          "C": "Keban Barajı",
          "D": "Ilısu Barajı",
          "E": "Birecik Barajı"
        },
        "correctAnswer": "A",
        "explanation": "Güncel genel kültür bilgisi olarak A seçeneği doğrudur."
      }
    ]
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
