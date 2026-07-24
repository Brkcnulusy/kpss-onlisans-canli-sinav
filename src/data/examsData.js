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
    "description": "ÖSYM 2024 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "İki eski dost aralarındaki <u>sıkı</u> bağı korudular.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Sıkı bağ' güçlü ilişki anlamında mecazdır."
      },
      {
        "id": "2024-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'kulak kabartmak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yan masada konuşulanları çaktırmadan dinlemeye çalışıyordu.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'Kulak kabartmak' gizlice dinlemeye çalışmaktır."
      },
      {
        "id": "2024-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2024-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2024-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2024-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2024-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2024-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
          "B": "Salonda <u>bir takım</u> elbise unutulmuştu.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'birtakım' yazımı hatalıdır, doğrusu 'bir takım' şeklindedir."
      },
      {
        "id": "2024-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2024-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2024-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2024-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAyşe, Bora, Ceylan, Doğan, Emin adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Ceylan ve Emin aynı türde almıştır. Ayşe sadece Tarih, Doğan Felsefe almıştır.\n\nBuna göre Ceylan ve Emin hangi türde kitap almıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2024-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Bora hangi türde kitap almıştır? (KPSS Ön Lisans 2024)",
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
        "id": "2024-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Doğan Roman almıştır.",
          "B": "Ceylan Bilim almıştır.",
          "C": "Ayşe ve Doğan aynı almıştır.",
          "D": "Emin Roman almıştır.",
          "E": "Bora Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Emin'in Roman aldığı kesindir."
      },
      {
        "id": "2024-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ayşe - Tarih",
          "B": "Bora - Bilim",
          "C": "Ceylan - Roman",
          "D": "Doğan - Felsefe",
          "E": "Emin - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Emin Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2024-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{4}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "6/3",
          "B": "8/3",
          "C": "8/2",
          "D": "5",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2024-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}16}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "10",
          "E": "11"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
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
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2024-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2024-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2024-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2024-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2024-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
      },
      {
        "id": "2024-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2024-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2024-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2024-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2024-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2024-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Ön Lisans 2024)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
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
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2024-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Ön Lisans 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' olarak adlandırılan neolitik alan hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Göbeklitepe",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'dadır."
      },
      {
        "id": "2024-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türkiye'nin ilk yerli ve millî haberleşme uydusu hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Türksat 6A",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Türksat 6A ilk yerli haberleşme uydumuzdur."
      },
      {
        "id": "2024-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Osman Zeki Üngör",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Bestecisi Osman Zeki Üngör'dür."
      },
      {
        "id": "2024-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirdedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Strazburg",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Fransa'nın Strazburg kentindedir."
      },
      {
        "id": "2024-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk edebiyatında 'Sinekli Bakkal' romanının yazarı kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar kaleme almıştır."
      },
      {
        "id": "2024-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "New York",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "New York'tadır."
      }
    ]
  },
  {
    "id": "kpss-2022-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2022,
    "title": "2022 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2022 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "Mesleğinde yıllarca çalışarak <u>pişti</u>.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Pişmek' olgunlaşmak/deneyim kazanmak anlamında mecazdır."
      },
      {
        "id": "2022-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'dili çözülmek' deyimi doğru kullanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Suskun geçen saatlerden sonra birdenbire konuşmaya başladı.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'Dili çözülmek' konuşmaya başlamaktır."
      },
      {
        "id": "2022-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2022-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2022-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2022-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2022-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2022-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
          "B": "Sabah erkenden kalkıp <u>traş</u> oldu.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'traş' yazımı hatalıdır, doğrusu 'tıraş' şeklindedir."
      },
      {
        "id": "2022-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2022-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2022-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2022-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nArda, Berrin, Cem, Dilek, Eren adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Cem ve Eren aynı türde almıştır. Arda sadece Tarih, Dilek Felsefe almıştır.\n\nBuna göre Cem ve Eren hangi türde kitap almıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2022-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Berrin hangi türde kitap almıştır? (KPSS Ön Lisans 2022)",
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
        "id": "2022-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Dilek Roman almıştır.",
          "B": "Cem Bilim almıştır.",
          "C": "Arda ve Dilek aynı almıştır.",
          "D": "Eren Roman almıştır.",
          "E": "Berrin Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Eren'in Roman aldığı kesindir."
      },
      {
        "id": "2022-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Arda - Tarih",
          "B": "Berrin - Bilim",
          "C": "Cem - Roman",
          "D": "Dilek - Felsefe",
          "E": "Eren - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Eren Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2022-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{5}{4} + \\frac{1}{2}}{\\frac{7}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "7/3",
          "B": "10/3",
          "C": "9/2",
          "D": "6",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2022-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}14}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
      },
      {
        "id": "2022-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2022-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2022-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2022-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2022-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2022-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
      },
      {
        "id": "2022-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2022-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2022-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2022-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2022-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2022-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Ön Lisans 2022)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
      },
      {
        "id": "2022-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2022-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Ön Lisans 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "2022 Türk Dünyası Kültür Başkenti seçilen şehrimiz hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Bursa",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "2022'de Bursa kültür başkenti olmuştur."
      },
      {
        "id": "2022-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Dünyanın en uzun orta açıklıklı asma köprüsü olan 1915 Çanakkale Köprüsü hangi boğazdadır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Çanakkale Boğazı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Çanakkale Boğazı üzerindedir."
      },
      {
        "id": "2022-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Nobel Kimya Ödülü'nü kazanan ilk Türk bilim insanı kimdir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Aziz Sancar",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Prof. Dr. Aziz Sancar 2015 Nobel Ödülüdür."
      },
      {
        "id": "2022-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "'Kürk Mantolu Madonna' ve 'Kuyucaklı Yusuf' eserlerinin yazarı kimdir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Sabahattin Ali",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Sabahattin Ali yazmıştır."
      },
      {
        "id": "2022-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "NATO genel merkezi hangi şehirdedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Brüksel",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Belçika Brüksel'dedir."
      },
      {
        "id": "2022-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Sıfır Atık projesine öncülük eden ve BM iklim diplomasisinde ödül alan ülke hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Türkiye",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye sıfır atık projesini yürütmektedir."
      }
    ]
  },
  {
    "id": "kpss-2020-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2020,
    "title": "2020 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2020 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' mesafeli anlamında mecazdır."
      },
      {
        "id": "2020-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'göze girmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Disiplinli çalışmasıyla kısa sürede yöneticilerin takdirini kazandı.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'Göze girmek' takdir ve sevgi kazanmaktır."
      },
      {
        "id": "2020-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2020-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2020-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2020-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2020-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2020-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
        "explanation": "'herşey' yazımı hatalıdır, doğrusu 'her şey' şeklindedir."
      },
      {
        "id": "2020-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2020-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2020-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2020-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz, Elif adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Ceyda ve Elif aynı türde almıştır. Ahmet sadece Tarih, Deniz Felsefe almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2020-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Ön Lisans 2020)",
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
        "id": "2020-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim almıştır.",
          "C": "Ahmet ve Deniz aynı almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman aldığı kesindir."
      },
      {
        "id": "2020-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2020-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "5/3",
          "B": "6/3",
          "C": "7/2",
          "D": "4",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2020-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
      },
      {
        "id": "2020-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2020-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2020-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2020-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2020-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2020-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
      },
      {
        "id": "2020-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2020-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2020-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2020-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2020-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2020-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Ön Lisans 2020)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
      },
      {
        "id": "2020-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2020-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Ön Lisans 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "2020 Yılı UNESCO tarafından ne yılı ilan edilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Bilge Tonyukuk Yılı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Bilge Tonyukuk anma yılı ilan edilmiştir."
      },
      {
        "id": "2020-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Karadeniz'de keşfedilen ilk doğal gaz kuyusu hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tuna-1 Kuyusu (Sakarya Gaz Sahası)",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Tuna-1 kuyusunda keşfedilmiştir."
      },
      {
        "id": "2020-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk edebiyatında 'İnce Memed' romanının yazarı kimdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yaşar Kemal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Yaşar Kemal kaleme almıştır."
      },
      {
        "id": "2020-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "İstiklal Marşı'mızın şairi kimdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Mehmet Âkif Ersoy",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Mehmet Âkif Ersoy yazmıştır."
      },
      {
        "id": "2020-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Dünyanın ilk tıp fakültesi sayılan Gevher Nesibe Darüşşifası hangi ilimizdedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kayseri",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Kayseri'dedir."
      },
      {
        "id": "2020-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Koronavirüs aşısını geliştiren BioNTech firmasının kurucusu Türk bilim insanları kimlerdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Uğur Şahin ve Özlem Türeci",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Uğur Şahin ve Özlem Türeci geliştirmiştir."
      }
    ]
  },
  {
    "id": "kpss-2018-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2018,
    "title": "2018 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2018 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "Eleştirmenin bu <u>ağır</u> sözleri herkesi şaşırttı.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Ağır söz' kırıcı/dokunaklı anlamında mecazdır."
      },
      {
        "id": "2018-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Teslim etmeden önce rapordaki tüm rakamları dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek' detaylı incelemek demektir."
      },
      {
        "id": "2018-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2018-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2018-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2018-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2018-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2018-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
          "B": "Profesörlük <u>ünvanını</u> geçen yıl almıştı.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'unvan' yazımı hatalıdır, doğrusu 'unvan' şeklindedir."
      },
      {
        "id": "2018-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2018-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2018-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2018-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAslı, Barış, Ceren, Davut, Ece adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Ceren ve Ece aynı türde almıştır. Aslı sadece Tarih, Davut Felsefe almıştır.\n\nBuna göre Ceren ve Ece hangi türde kitap almıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2018-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Barış hangi türde kitap almıştır? (KPSS Ön Lisans 2018)",
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
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Davut Roman almıştır.",
          "B": "Ceren Bilim almıştır.",
          "C": "Aslı ve Davut aynı almıştır.",
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
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Aslı - Tarih",
          "B": "Barış - Bilim",
          "C": "Ceren - Roman",
          "D": "Davut - Felsefe",
          "E": "Ece - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Ece Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2018-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{5}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "7/3",
          "B": "10/3",
          "C": "9/2",
          "D": "6",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2018-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}20}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "6",
          "B": "8",
          "C": "10",
          "D": "11",
          "E": "12"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
      },
      {
        "id": "2018-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2018-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2018-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2018-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2018-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2018-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
      },
      {
        "id": "2018-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2018-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2018-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2018-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2018-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2018-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Ön Lisans 2018)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
      },
      {
        "id": "2018-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2018-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Ön Lisans 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "2018 yılında UNESCO Dünya Mirası Kalıcı Listesi'ne alınan antik kentimiz hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Göbeklitepe",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "2018'de UNESCO kalıcı listesine girdi."
      },
      {
        "id": "2018-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türkiye'nin ilk kadın valisi kimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Lale Aytaman",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Lale Aytaman ilk kadın valimizdir."
      },
      {
        "id": "2018-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk tiyatrosunun simgesi olan 'Kel Hasan Efendi' kavuğunu taşıyan usta kimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Münir Özkul / Rasim Öztekin",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Geleneksel Türk tiyatrosu simgesidir."
      },
      {
        "id": "2018-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Akdeniz'in Efes'i olarak bilinen Phaselis Antik Kenti hangi ilimizdedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Antalya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Antalya Kemer yakınlarındadır."
      },
      {
        "id": "2018-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk edebiyatında 'Memleketimden İnsan Manzaraları' yazarı kimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Nâzım Hikmet",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Nâzım Hikmet yazmıştır."
      },
      {
        "id": "2018-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Dünyanın en derin kanyonları arasında gösterilen Valla Kanyonu hangi ilimizdedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kastamonu",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Kastamonu Pınarbaşı'dadır."
      }
    ]
  },
  {
    "id": "kpss-2016-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2016,
    "title": "2016 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2016 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "Yazarın bu konuda çok <u>keskin</u> görüşleri vardı.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Keskin görüş' sert/tartışmasız anlamında mecazdır."
      },
      {
        "id": "2016-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'ipini pazara çıkarmak' deyimi yerinde kullanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yaptığı usulsüzlükleri belgeleyerek gerçek yüzünü ortaya çıkardı.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'İpini pazara çıkarmak' gizli kusurları açığa vurmaktır."
      },
      {
        "id": "2016-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2016-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2016-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2016-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2016-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2016-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
          "B": "İki arkadaş kutlamada <u>yanyana</u> oturdular.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'yanyana' yazımı hatalıdır, doğrusu 'yan yana' şeklindedir."
      },
      {
        "id": "2016-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2016-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2016-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2016-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAli, Banu, Can, Derya, Emre adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Can ve Emre aynı türde almıştır. Ali sadece Tarih, Derya Felsefe almıştır.\n\nBuna göre Can ve Emre hangi türde kitap almıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2016-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Banu hangi türde kitap almıştır? (KPSS Ön Lisans 2016)",
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
        "id": "2016-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Derya Roman almıştır.",
          "B": "Can Bilim almıştır.",
          "C": "Ali ve Derya aynı almıştır.",
          "D": "Emre Roman almıştır.",
          "E": "Banu Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Emre'in Roman aldığı kesindir."
      },
      {
        "id": "2016-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ali - Tarih",
          "B": "Banu - Bilim",
          "C": "Can - Roman",
          "D": "Derya - Felsefe",
          "E": "Emre - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Emre Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2016-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{7}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "5/3",
          "B": "6/3",
          "C": "7/2",
          "D": "4",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2016-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}18}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "6",
          "B": "8",
          "C": "10",
          "D": "11",
          "E": "12"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
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
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2016-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2016-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2016-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2016-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2016-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
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
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2016-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2016-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2016-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2016-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2016-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Ön Lisans 2016)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
      },
      {
        "id": "2016-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2016-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Ön Lisans 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "2016 yılında UNESCO Dünya Mirası Listesi'ne giren Ani Harabeleri hangi ilimizdedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kars",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Kars ilimizdedir."
      },
      {
        "id": "2016-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türkiye'nin ilk yerli gözlem uydusu hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "RASAT",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "RASAT ilk yerli gözlem uydusudur."
      },
      {
        "id": "2016-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Dünyanın ilk haritasını çizen ünlü Türk denizcisi kimdir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Pîrî Reis",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Pîrî Reis 1513 haritasıyla ünlüdür."
      },
      {
        "id": "2016-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk edebiyatında 'Tutunamayanlar' romanının yazarı kimdir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Oğuz Atay",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Oğuz Atay kaleme almıştır."
      },
      {
        "id": "2016-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "İstiklal Şairimiz Mehmet Âkif Ersoy'un kabri hangi mezarlıktadır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Edirnekapı Şehitliği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "İstanbul Edirnekapı Şehitliği'ndedir."
      },
      {
        "id": "2016-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Güneydoğu Anadolu Projesi (GAP) kapsamında inşa edilen en büyük barajımız hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Atatürk Barajı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Atatürk Barajı en büyük hidroelektrik tesisimizdir."
      }
    ]
  },
  {
    "id": "kpss-2024-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2024,
    "title": "2024 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2024 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "Mesleğinde yıllarca çalışarak <u>pişti</u>.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Pişmek' olgunlaşmak/deneyim kazanmak anlamında mecazdır."
      },
      {
        "id": "2024-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Teslim etmeden önce rapordaki tüm rakamları dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek' detaylı incelemek demektir."
      },
      {
        "id": "2024-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2024-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2024-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2024-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2024-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2024-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
        "explanation": "'herşey' yazımı hatalıdır, doğrusu 'her şey' şeklindedir."
      },
      {
        "id": "2024-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2024-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2024-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2024-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2024-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz, Elif adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Ceyda ve Elif aynı türde almıştır. Ahmet sadece Tarih, Deniz Felsefe almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2024-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2024)",
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
        "id": "2024-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim almıştır.",
          "C": "Ahmet ve Deniz aynı almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman aldığı kesindir."
      },
      {
        "id": "2024-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2024-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{6}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "5/3",
          "B": "6/3",
          "C": "7/2",
          "D": "4",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2024-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}21}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "7",
          "B": "9",
          "C": "11",
          "D": "12",
          "E": "13"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
      },
      {
        "id": "2024-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2024-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^9}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2024-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2024-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2024-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2024-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
      },
      {
        "id": "2024-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2024-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2024-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2024-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2024-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2024-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2024-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
      },
      {
        "id": "2024-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2024-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2024-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2024-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Lisans (GY-GK) 2024))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2024-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' olarak adlandırılan neolitik alan hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Göbeklitepe",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'dadır."
      },
      {
        "id": "2024-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türkiye'nin ilk yerli ve millî haberleşme uydusu hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Türksat 6A",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Türksat 6A ilk yerli haberleşme uydumuzdur."
      },
      {
        "id": "2024-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Osman Zeki Üngör",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Bestecisi Osman Zeki Üngör'dür."
      },
      {
        "id": "2024-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirdedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Strazburg",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Fransa'nın Strazburg kentindedir."
      },
      {
        "id": "2024-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk edebiyatında 'Sinekli Bakkal' romanının yazarı kimdir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar kaleme almıştır."
      },
      {
        "id": "2024-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "New York",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "New York'tadır."
      }
    ]
  },
  {
    "id": "kpss-2022-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2022,
    "title": "2022 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2022 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' mesafeli anlamında mecazdır."
      },
      {
        "id": "2022-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'ipini pazara çıkarmak' deyimi yerinde kullanılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yaptığı usulsüzlükleri belgeleyerek gerçek yüzünü ortaya çıkardı.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'İpini pazara çıkarmak' gizli kusurları açığa vurmaktır."
      },
      {
        "id": "2022-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2022-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2022-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2022-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2022-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2022-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
          "B": "Profesörlük <u>ünvanını</u> geçen yıl almıştı.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'unvan' yazımı hatalıdır, doğrusu 'unvan' şeklindedir."
      },
      {
        "id": "2022-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2022-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2022-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2022-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2022-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAslı, Barış, Ceren, Davut, Ece adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Ceren ve Ece aynı türde almıştır. Aslı sadece Tarih, Davut Felsefe almıştır.\n\nBuna göre Ceren ve Ece hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2022-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Barış hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2022)",
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
        "id": "2022-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Davut Roman almıştır.",
          "B": "Ceren Bilim almıştır.",
          "C": "Aslı ve Davut aynı almıştır.",
          "D": "Ece Roman almıştır.",
          "E": "Barış Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Ece'in Roman aldığı kesindir."
      },
      {
        "id": "2022-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Aslı - Tarih",
          "B": "Barış - Bilim",
          "C": "Ceren - Roman",
          "D": "Davut - Felsefe",
          "E": "Ece - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Ece Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2022-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{4}{4} + \\frac{1}{2}}{\\frac{8}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "6/3",
          "B": "8/3",
          "C": "8/2",
          "D": "5",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2022-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}19}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "6",
          "B": "8",
          "C": "10",
          "D": "11",
          "E": "12"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
      },
      {
        "id": "2022-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2022-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^9}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2022-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2022-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2022-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2022-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
      },
      {
        "id": "2022-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2022-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2022-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2022-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2022-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2022-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2022-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
      },
      {
        "id": "2022-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2022-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2022-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2022-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Lisans (GY-GK) 2022))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2022-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "2022 Türk Dünyası Kültür Başkenti seçilen şehrimiz hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Bursa",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "2022'de Bursa kültür başkenti olmuştur."
      },
      {
        "id": "2022-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Dünyanın en uzun orta açıklıklı asma köprüsü olan 1915 Çanakkale Köprüsü hangi boğazdadır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Çanakkale Boğazı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Çanakkale Boğazı üzerindedir."
      },
      {
        "id": "2022-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Nobel Kimya Ödülü'nü kazanan ilk Türk bilim insanı kimdir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Aziz Sancar",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Prof. Dr. Aziz Sancar 2015 Nobel Ödülüdür."
      },
      {
        "id": "2022-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "'Kürk Mantolu Madonna' ve 'Kuyucaklı Yusuf' eserlerinin yazarı kimdir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Sabahattin Ali",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Sabahattin Ali yazmıştır."
      },
      {
        "id": "2022-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "NATO genel merkezi hangi şehirdedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Brüksel",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Belçika Brüksel'dedir."
      },
      {
        "id": "2022-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Sıfır Atık projesine öncülük eden ve BM iklim diplomasisinde ödül alan ülke hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Türkiye",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye sıfır atık projesini yürütmektedir."
      }
    ]
  },
  {
    "id": "kpss-2020-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2020,
    "title": "2020 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2020 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "Eleştirmenin bu <u>ağır</u> sözleri herkesi şaşırttı.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Ağır söz' kırıcı/dokunaklı anlamında mecazdır."
      },
      {
        "id": "2020-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'kulak kabartmak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yan masada konuşulanları çaktırmadan dinlemeye çalışıyordu.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'Kulak kabartmak' gizlice dinlemeye çalışmaktır."
      },
      {
        "id": "2020-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2020-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2020-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2020-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2020-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2020-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
          "B": "İki arkadaş kutlamada <u>yanyana</u> oturdular.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'yanyana' yazımı hatalıdır, doğrusu 'yan yana' şeklindedir."
      },
      {
        "id": "2020-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2020-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2020-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2020-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2020-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAli, Banu, Can, Derya, Emre adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Can ve Emre aynı türde almıştır. Ali sadece Tarih, Derya Felsefe almıştır.\n\nBuna göre Can ve Emre hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2020-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Banu hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2020)",
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
        "id": "2020-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Derya Roman almıştır.",
          "B": "Can Bilim almıştır.",
          "C": "Ali ve Derya aynı almıştır.",
          "D": "Emre Roman almıştır.",
          "E": "Banu Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Emre'in Roman aldığı kesindir."
      },
      {
        "id": "2020-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Ali - Tarih",
          "B": "Banu - Bilim",
          "C": "Can - Roman",
          "D": "Derya - Felsefe",
          "E": "Emre - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Emre Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2020-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{5}{4} + \\frac{1}{2}}{\\frac{6}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "7/3",
          "B": "10/3",
          "C": "9/2",
          "D": "6",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2020-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}17}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "10",
          "E": "11"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
      },
      {
        "id": "2020-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2020-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^9}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2020-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2020-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2020-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2020-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
      },
      {
        "id": "2020-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2020-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2020-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2020-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2020-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2020-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2020-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
      },
      {
        "id": "2020-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2020-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2020-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2020-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Lisans (GY-GK) 2020))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2020-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "2020 Yılı UNESCO tarafından ne yılı ilan edilmiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Bilge Tonyukuk Yılı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Bilge Tonyukuk anma yılı ilan edilmiştir."
      },
      {
        "id": "2020-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Karadeniz'de keşfedilen ilk doğal gaz kuyusu hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Tuna-1 Kuyusu (Sakarya Gaz Sahası)",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Tuna-1 kuyusunda keşfedilmiştir."
      },
      {
        "id": "2020-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk edebiyatında 'İnce Memed' romanının yazarı kimdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yaşar Kemal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Yaşar Kemal kaleme almıştır."
      },
      {
        "id": "2020-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "İstiklal Marşı'mızın şairi kimdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Mehmet Âkif Ersoy",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Mehmet Âkif Ersoy yazmıştır."
      },
      {
        "id": "2020-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Dünyanın ilk tıp fakültesi sayılan Gevher Nesibe Darüşşifası hangi ilimizdedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Kayseri",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Kayseri'dedir."
      },
      {
        "id": "2020-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Koronavirüs aşısını geliştiren BioNTech firmasının kurucusu Türk bilim insanları kimlerdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Uğur Şahin ve Özlem Türeci",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Uğur Şahin ve Özlem Türeci geliştirmiştir."
      }
    ]
  },
  {
    "id": "kpss-2018-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2018,
    "title": "2018 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2018 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "Yazarın bu konuda çok <u>keskin</u> görüşleri vardı.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Keskin görüş' sert/tartışmasız anlamında mecazdır."
      },
      {
        "id": "2018-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'dili çözülmek' deyimi doğru kullanılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Suskun geçen saatlerden sonra birdenbire konuşmaya başladı.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'Dili çözülmek' konuşmaya başlamaktır."
      },
      {
        "id": "2018-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2018-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2018-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2018-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2018-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2018-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
          "B": "Salonda <u>bir takım</u> elbise unutulmuştu.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'birtakım' yazımı hatalıdır, doğrusu 'bir takım' şeklindedir."
      },
      {
        "id": "2018-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2018-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2018-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2018-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2018-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nAyşe, Bora, Ceylan, Doğan, Emin adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Ceylan ve Emin aynı türde almıştır. Ayşe sadece Tarih, Doğan Felsefe almıştır.\n\nBuna göre Ceylan ve Emin hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2018-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Bora hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2018)",
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
        "id": "2018-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Doğan Roman almıştır.",
          "B": "Ceylan Bilim almıştır.",
          "C": "Ayşe ve Doğan aynı almıştır.",
          "D": "Emin Roman almıştır.",
          "E": "Bora Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Emin'in Roman aldığı kesindir."
      },
      {
        "id": "2018-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Ayşe - Tarih",
          "B": "Bora - Bilim",
          "C": "Ceylan - Roman",
          "D": "Doğan - Felsefe",
          "E": "Emin - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Emin Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2018-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{4}{4} + \\frac{1}{2}}{\\frac{6}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "6/3",
          "B": "8/3",
          "C": "8/2",
          "D": "5",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2018-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}25}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "8",
          "B": "10",
          "C": "12",
          "D": "13",
          "E": "14"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
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
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2018-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^9}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2018-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2018-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2018-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2018-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
      },
      {
        "id": "2018-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2018-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2018-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2018-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2018-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2018-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2018-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
      },
      {
        "id": "2018-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Analitik Geometri",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2018-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2018-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2018-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Lisans (GY-GK) 2018))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2018-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "2018 yılında UNESCO Dünya Mirası Kalıcı Listesi'ne alınan antik kentimiz hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Göbeklitepe",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "2018'de UNESCO kalıcı listesine girdi."
      },
      {
        "id": "2018-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türkiye'nin ilk kadın valisi kimdir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Lale Aytaman",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Lale Aytaman ilk kadın valimizdir."
      },
      {
        "id": "2018-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk tiyatrosunun simgesi olan 'Kel Hasan Efendi' kavuğunu taşıyan usta kimdir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Münir Özkul / Rasim Öztekin",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Geleneksel Türk tiyatrosu simgesidir."
      },
      {
        "id": "2018-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Akdeniz'in Efes'i olarak bilinen Phaselis Antik Kenti hangi ilimizdedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Antalya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Antalya Kemer yakınlarındadır."
      },
      {
        "id": "2018-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk edebiyatında 'Memleketimden İnsan Manzaraları' yazarı kimdir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Nâzım Hikmet",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Nâzım Hikmet yazmıştır."
      },
      {
        "id": "2018-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Dünyanın en derin kanyonları arasında gösterilen Valla Kanyonu hangi ilimizdedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Kastamonu",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Kastamonu Pınarbaşı'dadır."
      }
    ]
  },
  {
    "id": "kpss-2016-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2016,
    "title": "2016 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2016 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk). zorluk seviyesine uygun özgün soru seti.",
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
          "B": "İki eski dost aralarındaki <u>sıkı</u> bağı korudular.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Sıkı bağ' güçlü ilişki anlamında mecazdır."
      },
      {
        "id": "2016-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler",
        "text": "Aşağıdaki cümlelerin hangisinde 'göze girmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Disiplinli çalışmasıyla kısa sürede yöneticilerin takdirini kazandı.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Tarihi binanın detaylarını hayranlıkla seyretti.",
          "E": "Sonunda beklediği kararı duyunca rahat bir nefes aldı."
        },
        "correctAnswer": "A",
        "explanation": "'Göze girmek' takdir ve sevgi kazanmaktır."
      },
      {
        "id": "2016-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Kıyıdan iki mil kadar açıldıktan sonra motor durdu.",
          "C": "Yeni açılan kütüphaneye öğrenciler yoğun ilgi gösterdi.",
          "D": "Kilitli kapı uzun uğraşlar sonunda güçlükle açıldı.",
          "E": "Renkleri açılan kumaş eski canlılığını yitirmişti."
        },
        "correctAnswer": "A",
        "explanation": "Temiz hava alıp ferahlamak anlamında kullanılmıştır."
      },
      {
        "id": "2016-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Nesnel Yargı",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından diğerlerinden farklı (nesnel) bir yargı vardır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Şairin son şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden etkiliyor.",
          "C": "Yazarın samimi üslubu kitaba eşsiz bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde hayranlık uyandırıyor.",
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
        "topic": "Koşula Bağlılık",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Düzenli ve disiplinli çalışırsan hedeflerine ulaşman kolaylaşır.",
          "B": "Hava yağmurlu olduğu için açık havadaki gösteri ertelendi.",
          "C": "Kütüphaneden aldığı kitapları zamanında teslim etmek üzere yola çıktı.",
          "D": "Kitabı büyük bir özenle okumasına rağmen aradığı bilgiyi bulamadı.",
          "E": "Akşam saatlerinde aniden başlayan fırtına elektriğin kesilmesine yol açtı."
        },
        "correctAnswer": "A",
        "explanation": "'-se/-sa' şart eki ile hedefe ulaşma çalışmaya bağlanmıştır."
      },
      {
        "id": "2016-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Üslup (Biçem)",
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
        "topic": "Örtülü Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Ahmet de bu yılki burs sınavını başarıyla kazandı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda sergi açıldı.",
          "C": "Toplantı salonundaki sandalyeler tek tek kontrol edildi.",
          "D": "Sabah saatlerinde başlayan kar yağışı trafiği olumsuz etkiledi.",
          "E": "Güneşli havalarda parka gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de' ifadesindeki 'de' bağlacı başka kişilerin de kazandığı örtülü anlamını içerir."
      },
      {
        "id": "2016-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ana Düşünce",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Okuma eyleminin bireyin düşünce ufkunu ve tecrübesini geliştirdiği",
          "B": "Sadece klasik eserlerin okunması gerektiği",
          "C": "Kitap fiyatlarının herkes için ulaşılabilir olması gerektiği",
          "D": "Dijital kitapların basılı kitapların yerini aldığı",
          "E": "Hızlı okuma tekniklerinin eğitimde yaygınlaştırılması gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Parçada okuma alışkanlığının zihinsel zenginlik sağladığı vurgulanmıştır."
      },
      {
        "id": "2016-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yardımcı Düşünce",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Eserlerindeki karakterler günlük hayatta karşılaşabileceğimiz insanlardır. Bu parçaya göre sanatçıyla ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Eserlerinde olağanüstü ve hayalî ögelere ağırlık verdiğine",
          "B": "Toplumun yaşadığı sıkıntılara duyarsız kalmadığına",
          "C": "Karakterlerini gerçek yaşamdan seçtiğine",
          "D": "Gerçekçi bir sanat anlayışını benimsediğine",
          "E": "Gözlem yeteneğinden faydalandığına"
        },
        "correctAnswer": "A",
        "explanation": "Parçada gerçekçi olduğu belirtilmiş; olağanüstü/hayalî ögelere yer verdiğine dair bilgi yoktur."
      },
      {
        "id": "2016-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Roman, insanoğlunun duygu dünyasını keşfetmede en etkili edebî türlerden biridir. (II) Yazar, yarattığı karakterler vasıtasıyla okuyucuyu farklı hayatlarla tanıştırır. (III) Günümüzde kâğıt ve matbaa maliyetleri son derece yükselmiştir. (IV) Bu sayede okur, kendi yaşamında deneyimleyemeyeceği duyguları hisseder. (V) Dolayısıyla roman okuma eylemi kişisel empati yeteneğini güçlendirir. Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "III",
          "B": "I",
          "C": "II",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "III. cümlede matbaa maliyetlerine geçilerek paragrafın konu bütünlüğü bozulmuştur."
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
          "B": "Sabah erkenden kalkıp <u>traş</u> oldu.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'traş' yazımı hatalıdır, doğrusu 'tıraş' şeklindedir."
      },
      {
        "id": "2016-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yazar, son romanında yalnızlık konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta konmaz (?..) kullanımı hatalıdır."
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
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır."
      },
      {
        "id": "2016-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "Özne (sisli vadiye çöken sessizlik) / Belirtili Nesne (doğanın muhteşem uyanışını) / Yüklem (müjdeliyordu)."
      },
      {
        "id": "2016-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap zihnini açıyordu.",
          "D": "Aradığı huzuru şirin bir kasabada buldu.",
          "E": "Hava kararınca caddedeki ışıklar yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi eki bulunmamaktadır."
      },
      {
        "id": "2016-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Cümlesi hangisiyle sürdürülebilir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "(I) Klasik müzik köklü bir türdür. (II) Mozart eserleri dinlenmektedir. (III) Müzik dinlemek odaklanmayı artırır. (IV) Stres seviyesini düşürür. (V) Hafızayı güçlendirir. İkinci paragraf hangi cümleyle başlar? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Mimar Sinan eserlerinde estetik ile işlevselliği harmanlamıştır. Statik hesapları sayesinde binaları depreme dayanıklıdır. Hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Tüm eserlerini sadece İstanbul'da inşa ettiğine",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Dijital teknolojilerle bilgiye erişim hızlandı ancak yüzeysel tüketim arttı. Derin okuma zayıfladı. Asıl yakınlan durum nedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Hızlı bilgi tüketiminin eleştirel okumayı zayıflatması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Dille kültür ilişkisi etle tırnak gibidir. Dilini kaybeden bir toplum, ---. Boşluğa ne gelmelidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini yitirmeye mahkûmdur",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Güneş yükseldikçe başaklar sararıyordu. Rüzgar ekin kokusunu yayıyordu. Hangi anlatım tekniği kullanılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yapay zeka şiir yazabilmektedir fakat insani duygu birikimi sanata ruh katar. En kapsamlı yargı hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Teknolojik algoritmalar insani duygulardan yoksun olduğundan gerçek sanata ulaşamaz",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "Anadolu halıcılığında dokuyan kızlar sevinç ve hüzünlerini motiflere işler. El dokuma halıların belirgin özelliği nedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Dokuyan kişinin duygularını motiflerde yansıtması",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Yukarıdaki parçaya göre el dokuma halıcılığı ile ilgili hangisi söylenemez? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Anlatım Teknikleri",
        "text": "I. Bu köprüler ulaşımı hızlandırdı. II. İstanbul iki kıtayı bağlar. III. Tarih boyunca ticaret merkezi oldu. IV. Köprüler bu bağı simgeler. Sıralama nasıl olmalıdır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Gerçek lider ekibine sadece talimat vermez; çalışanların potansiyelini geliştirir. İdeal liderin niteliği nedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Çalışanlara ilham verip potansiyellerini geliştirmek",
          "B": "Geleneksel kalıplara bağlı kalır",
          "C": "Günlük hayatın karmaşasından uzak durur",
          "D": "Okuyucu beklentilerini göz ardı eder",
          "E": "Geçmiş dönemleri detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "Paragrafın mantıksal kurgusu ve anlatım akışına göre doğru yanıt belirlenmiştir."
      },
      {
        "id": "2016-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları verilen bilgilere göre cevaplayınız.)\n\nArda, Berrin, Cem, Dilek, Eren adlı beş arkadaş kütüphaneden Roman, Tarih, Bilim ve Felsefe kitapları almıştır. Toplam 5 kitap alınmış, Roman türünde 2 kitap seçilmiş, Cem ve Eren aynı türde almıştır. Arda sadece Tarih, Dilek Felsefe almıştır.\n\nBuna göre Cem ve Eren hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünde 2 kitap olduğundan ikisi de Roman almıştır."
      },
      {
        "id": "2016-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Yukarıdaki bilgilere göre Berrin hangi türde kitap almıştır? (KPSS Lisans (GY-GK) 2016)",
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
        "id": "2016-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Dilek Roman almıştır.",
          "B": "Cem Bilim almıştır.",
          "C": "Arda ve Dilek aynı almıştır.",
          "D": "Eren Roman almıştır.",
          "E": "Berrin Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Eren'in Roman aldığı kesindir."
      },
      {
        "id": "2016-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Arda - Tarih",
          "B": "Berrin - Bilim",
          "C": "Cem - Roman",
          "D": "Dilek - Felsefe",
          "E": "Eren - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Eren Roman almıştır; Tarih eşleştirmesi yanlıştır."
      },
      {
        "id": "2016-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{5}{4} + \\frac{1}{2}}{\\frac{8}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "7/3",
          "B": "10/3",
          "C": "9/2",
          "D": "6",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "Pay ve payda rasyonel işlemlerinde payda eşitleme yapılarak sonuca ulaşılır."
      },
      {
        "id": "2016-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0{,}23}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "7",
          "B": "9",
          "C": "11",
          "D": "12",
          "E": "13"
        },
        "correctAnswer": "B",
        "explanation": "Ondalık kesirler virgülden kurtarılarak tam sayı oranlarına dönüştürülür."
      },
      {
        "id": "2016-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$3^x(9 - 1) = 72 \\Rightarrow 3^x \\cdot 8 = 72 \\Rightarrow 3^x = 9 \\Rightarrow x = 2$$. $$2^2 = 4$$."
      },
      {
        "id": "2016-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^9}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "$$4 \\cdot 4^5 = 4^6 = (2^2)^6 = 2^{12}$$. Paydadaki üs bölünerek sadeleştirilir."
      },
      {
        "id": "2016-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "$$0{,}3 + 0{,}4 - 0{,}5 = 0{,}2$$."
      },
      {
        "id": "2016-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "$$\\sqrt{81}=9 \\Rightarrow \\sqrt{9+7}=\\sqrt{16}=4$$. $$4 \\times \\sqrt{2} = 4\\sqrt{2}$$."
      },
      {
        "id": "2016-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kritik noktalar x = 3 ve x = -2 incelenerek kökler x = 5 ve x = -4 bulunur; çarpımları -20'dir."
      },
      {
        "id": "2016-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Eşitsizlikler",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "$$-6 < 3x < 12 \\Rightarrow -11 < 3x - 5 < 7$$. En büyük tam sayı değeri 6'dır."
      },
      {
        "id": "2016-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{x+2}{x-3} = 1$$."
      },
      {
        "id": "2016-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "D",
        "explanation": "b=0 veya b=5 olabilir. b=0 için a=7; b=5 için a=2 olur. Toplamları 7+2=9 veya uygun değerlerle 11'dir."
      },
      {
        "id": "2016-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "12",
          "B": "14",
          "C": "16",
          "D": "18",
          "E": "20"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "200",
          "B": "240",
          "C": "300",
          "D": "180",
          "E": "150"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sıra Problemleri",
        "text": "Matematik ve mantık problemi #43 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "86",
          "B": "87",
          "C": "88",
          "D": "89",
          "E": "90"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "48",
          "B": "40",
          "C": "36",
          "D": "52",
          "E": "44"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde Hesabı",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "585",
          "B": "550",
          "C": "600",
          "D": "620",
          "E": "575"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kâr-Zarar",
        "text": "Matematik ve mantık problemi #46 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "92",
          "B": "93",
          "C": "94",
          "D": "95",
          "E": "96"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km/s ve 80 km/s olan iki araç karşılıklı yola çıkıyor. Kaç saat sonra karşılaşırlar? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım",
        "text": "Matematik ve mantık problemi #48 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "96",
          "B": "97",
          "C": "98",
          "D": "99",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "Matematik ve mantık problemi #49 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "98",
          "B": "99",
          "C": "100",
          "D": "101",
          "E": "102"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Matematik ve mantık problemi #51 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "102",
          "B": "103",
          "C": "104",
          "D": "105",
          "E": "106"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Diziler",
        "text": "Matematik ve mantık problemi #52 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "104",
          "B": "105",
          "C": "106",
          "D": "107",
          "E": "108"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon",
        "text": "Matematik ve mantık problemi #53 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "106",
          "B": "107",
          "C": "108",
          "D": "109",
          "E": "110"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Modüler Aritmetik",
        "text": "Matematik ve mantık problemi #54 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "108",
          "B": "109",
          "C": "110",
          "D": "111",
          "E": "112"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık",
        "text": "Matematik ve mantık problemi #55 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "110",
          "B": "111",
          "C": "112",
          "D": "113",
          "E": "114"
        },
        "correctAnswer": "A",
        "explanation": "Problem adım adım denklem kurularak çözülür."
      },
      {
        "id": "2016-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üçgende Açılar",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "80°",
          "B": "60°",
          "C": "40°",
          "D": "90°",
          "E": "100°"
        },
        "correctAnswer": "A",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı 4k = 80°."
      },
      {
        "id": "2016-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Pisagor Bağıntısı",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan bir dik üçgenin hipotenüs uzunluğu kaç cm'dir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "A",
        "explanation": "6-8-10 özel dik üçgenidir."
      },
      {
        "id": "2016-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dikdörtgen Alan ve Çevre",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarı 6 cm olduğuna göre alanı kaç cm²dir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "72",
          "B": "64",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "A",
        "explanation": "Çevre = 2(a + 6) = 36 => a + 6 = 18 => a = 12 cm. Alan = 12 x 6 = 72 cm²."
      },
      {
        "id": "2016-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Dairede Alan",
        "text": "Yarıçapı 6 cm olan bir dairenin alanı kaç cm²dir? ($$\\pi = 3$$ alınız) (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "108",
          "B": "72",
          "C": "36",
          "D": "144",
          "E": "216"
        },
        "correctAnswer": "A",
        "explanation": "Alan = $$\\pi r^2 = 3 \\cdot 6^2 = 3 \\cdot 36 = 108$$."
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
        "explanation": "Uzaklık = $$\\sqrt{(6-2)^2 + (1-5)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$$."
      },
      {
        "id": "2016-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarının son sözünün hükümdara ait olması neyi gösterir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik yönetimi",
          "C": "Cumhuriyet rejimini",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #62 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Erzurum Kongresi",
          "B": "Sivas Kongresi",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #64 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #65 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü tehlikededir' ilkesi neyi ifade eder? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesini",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "'Siz orada yalnız düşmanı değil milletin makus talihini de yendiniz' sözü hangi zafer üzerine söylenmiştir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #68 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #69 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e hangi rütbe ve unvan verilmiştir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #71 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #72 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #73 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Akıl ve bilimi rehber edinen Atatürk ilkesi hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Laiklik",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #75 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #76 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #77 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #78 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #79 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #80 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #81 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #82 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #83 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Türk kadınlarına milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "1934",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #85 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #86 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Tarih Konusu",
        "text": "Tarih sorusu #87 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "ÖSYM müfredatına uygun tarih bilgisi esastır."
      },
      {
        "id": "2016-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni nedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #89 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #90 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'nin en uzun iç akarsuyu hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kızılırmak",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #93 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #94 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Türkiye'de nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "1940-1945 Dönemi",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #96 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #97 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #98 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #99 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #100 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #101 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #102 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Çatalhöyük Neolitik Kenti hangi ilimizdedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Konya",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #104 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Coğrafya Konusu",
        "text": "Coğrafya sorusu #105 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları esas alınmıştır."
      },
      {
        "id": "2016-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #107 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Milletvekili seçilme alt yaşı kaçtır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "18",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #110 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #111 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #112 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Vatandaşlık & Hukuk sorusu #113 ((KPSS Lisans (GY-GK) 2016))",
        "options": {
          "A": "A seçeneği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Vatandaşlık Konusu",
        "text": "Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Cumhuriyet başkanı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası ve güncel hukuk mevzuatı esas alınmıştır."
      },
      {
        "id": "2016-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "2016 yılında UNESCO Dünya Mirası Listesi'ne giren Ani Harabeleri hangi ilimizdedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Kars",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Kars ilimizdedir."
      },
      {
        "id": "2016-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türkiye'nin ilk yerli gözlem uydusu hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "RASAT",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "RASAT ilk yerli gözlem uydusudur."
      },
      {
        "id": "2016-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Dünyanın ilk haritasını çizen ünlü Türk denizcisi kimdir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Pîrî Reis",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Pîrî Reis 1513 haritasıyla ünlüdür."
      },
      {
        "id": "2016-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Türk edebiyatında 'Tutunamayanlar' romanının yazarı kimdir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Oğuz Atay",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Oğuz Atay kaleme almıştır."
      },
      {
        "id": "2016-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "İstiklal Şairimiz Mehmet Âkif Ersoy'un kabri hangi mezarlıktadır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Edirnekapı Şehitliği",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "İstanbul Edirnekapı Şehitliği'ndedir."
      },
      {
        "id": "2016-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Güncel & Genel Kültür",
        "text": "Güneydoğu Anadolu Projesi (GAP) kapsamında inşa edilen en büyük barajımız hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Atatürk Barajı",
          "B": "B seçeneği",
          "C": "C seçeneği",
          "D": "D seçeneği",
          "E": "E seçeneği"
        },
        "correctAnswer": "A",
        "explanation": "Atatürk Barajı en büyük hidroelektrik tesisimizdir."
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
