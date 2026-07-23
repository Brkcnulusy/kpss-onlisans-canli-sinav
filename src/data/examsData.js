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
    "description": "ÖSYM 2024 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2024-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2024-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2024-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2024-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2024-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2024-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2024-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2024-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2024-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2024-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2024-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2024-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2024-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2024-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2024-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2024-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2024-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2024-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2024-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2024-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2024-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2024-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2024-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2024-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2024-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2024-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2024-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2024-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2024-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2024-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2024-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2024-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2024-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2024-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2024-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2024-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2024-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2024-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2024-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2024-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2024-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2024-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2024-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2024-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2024-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2024-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2024-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2024-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2024-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2024-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2024-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2024-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2024-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2024-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2024-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2024-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2024-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2024-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2024-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2024-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2024-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2024-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2024-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2024-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2024-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2024-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2024-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2024-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2024-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2024-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2024-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2024-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2024-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2024-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2024-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2024-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2024-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2024-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2024-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2024-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2024-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2024-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2024-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2024-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2024-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2024-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2024-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2024-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2024-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2024-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2024-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2024-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2024-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2024-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2024-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2024-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2024-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2024-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2024-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2024-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2024-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2024-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2024-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2024-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2024-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2024-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2024-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2024-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2024-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2024-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2024-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2024-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
      }
    ]
  },
  {
    "id": "kpss-2022-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2022,
    "title": "2022 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2022 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2022-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2022-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2022-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2022-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2022-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2022-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2022-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2022-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2022-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2022-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2022-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2022-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2022-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2022-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2022-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2022-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2022-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2022-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2022-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2022-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2022-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2022-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2022-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2022-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2022-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2022-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2022-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2022-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2022-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2022-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2022-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2022-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2022-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2022-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2022-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2022-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2022-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2022-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2022-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2022-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2022-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2022-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2022-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2022-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2022-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2022-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2022-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2022-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2022-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2022-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2022-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2022-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2022-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2022-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2022-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2022-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2022-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2022-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2022-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2022-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2022-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2022-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2022-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2022-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2022-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2022-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2022-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2022-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2022-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2022-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2022-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2022-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2022-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2022-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2022-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2022-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2022-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2022-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2022-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2022-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2022-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2022-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2022-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2022-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2022-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2022-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2022-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2022-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2022-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2022-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2022-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2022-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2022-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2022-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2022-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2022-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2022-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2022-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2022-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2022-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2022-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2022-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2022-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2022-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2022-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2022-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2022-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2022-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2022-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2022-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2022-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2022-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
      }
    ]
  },
  {
    "id": "kpss-2020-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2020,
    "title": "2020 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2020 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2020-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2020-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2020-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2020-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2020-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2020-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2020-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2020-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2020-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2020-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2020-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2020-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2020-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2020-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2020-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2020-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2020-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2020-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2020-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2020-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2020-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2020-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2020-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2020-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2020-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2020-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2020-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2020-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2020-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2020-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2020-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2020-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2020-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2020-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2020-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2020-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2020-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2020-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2020-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2020-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2020-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2020-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2020-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2020-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2020-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2020-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2020-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2020-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2020-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2020-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2020-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2020-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2020-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2020-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2020-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2020-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2020-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2020-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2020-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2020-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2020-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2020-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2020-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2020-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2020-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2020-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2020-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2020-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2020-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2020-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2020-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2020-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2020-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2020-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2020-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2020-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2020-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2020-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2020-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2020-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2020-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2020-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2020-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2020-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2020-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2020-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2020-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2020-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2020-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2020-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2020-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2020-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2020-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2020-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2020-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2020-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2020-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2020-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2020-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2020-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2020-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2020-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2020-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2020-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2020-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2020-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2020-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2020-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2020-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2020-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2020-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2020-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
      }
    ]
  },
  {
    "id": "kpss-2018-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2018,
    "title": "2018 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2018 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2018-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2018-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2018-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2018-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2018-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2018-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2018-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2018-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2018-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2018-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2018-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2018-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2018-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2018-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2018-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2018-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2018-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2018-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2018-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2018-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2018-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2018-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2018-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2018-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2018-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2018-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2018-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2018-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2018-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2018-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2018-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2018-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2018-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2018-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2018-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2018-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2018-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2018-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2018-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2018-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2018-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2018-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2018-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2018-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2018-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2018-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2018-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2018-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2018-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2018-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2018-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2018-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2018-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2018-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2018-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2018-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2018-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2018-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2018-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2018-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2018-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2018-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2018-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2018-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2018-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2018-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2018-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2018-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2018-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2018-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2018-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2018-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2018-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2018-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2018-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2018-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2018-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2018-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2018-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2018-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2018-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2018-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2018-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2018-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2018-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2018-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2018-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2018-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2018-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2018-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2018-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2018-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2018-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2018-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2018-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2018-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2018-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2018-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2018-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2018-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2018-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2018-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2018-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2018-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2018-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2018-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2018-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2018-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2018-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2018-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2018-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2018-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
      }
    ]
  },
  {
    "id": "kpss-2016-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2016,
    "title": "2016 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2016 KPSS Ön Lisans Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2016-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2016-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2016-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2016-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2016-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2016-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2016-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2016-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2016-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2016-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2016-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2016-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2016-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2016-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2016-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2016-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2016-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2016-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2016-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2016-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2016-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2016-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2016-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2016-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2016-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2016-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2016-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2016-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2016-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2016-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2016-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2016-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2016-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2016-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2016-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2016-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2016-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2016-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2016-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2016-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2016-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2016-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2016-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2016-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2016-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2016-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2016-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2016-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2016-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2016-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2016-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2016-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2016-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2016-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2016-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2016-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2016-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2016-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2016-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2016-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2016-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2016-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2016-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2016-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2016-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2016-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2016-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2016-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2016-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2016-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2016-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2016-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2016-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2016-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2016-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2016-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2016-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2016-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2016-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2016-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2016-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2016-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2016-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2016-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2016-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2016-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2016-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2016-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2016-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2016-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2016-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2016-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2016-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2016-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2016-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2016-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2016-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2016-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2016-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2016-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2016-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2016-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2016-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2016-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2016-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2016-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2016-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2016-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2016-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2016-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2016-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2016-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
      }
    ]
  },
  {
    "id": "kpss-2024-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2024,
    "title": "2024 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2024 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2024-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2024-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2024-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2024-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2024-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2024-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2024-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2024-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans 2024)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2024-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans 2024)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2024-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2024-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Lisans 2024)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2024-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Lisans 2024)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2024-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans 2024)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2024-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2024-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Lisans 2024)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2024-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2024-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2024-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2024-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Lisans 2024)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2024-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Lisans 2024)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2024-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Lisans 2024)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2024-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2024-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2024-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans 2024)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2024-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2024-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2024-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2024-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2024-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2024-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2024-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2024-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2024-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2024-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2024-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2024-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2024-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2024-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2024-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2024-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2024-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2024-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2024-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2024-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2024-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2024-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2024-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2024-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2024-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2024-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2024-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2024-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2024-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2024-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2024-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2024-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2024-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2024-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2024-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2024-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2024-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2024-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Lisans 2024)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2024-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Lisans 2024)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2024-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2024-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Lisans 2024)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2024-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2024-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Lisans 2024)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2024-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2024-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2024-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Lisans 2024)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2024-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2024-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2024-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2024-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2024-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2024-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Lisans 2024)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2024-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans 2024)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2024-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Lisans 2024)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2024-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2024-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2024-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2024-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2024-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2024-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2024-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2024-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Lisans 2024)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2024-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2024-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2024-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2024-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2024-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2024-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2024-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2024-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Lisans 2024)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2024-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2024-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Lisans 2024)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2024-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2024-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Lisans 2024)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2024-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2024-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2024-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2024-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Lisans 2024)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2024-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Lisans 2024)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2024-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Lisans 2024)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Lisans 2024)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2024-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Lisans 2024)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2024-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2024-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2024-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2024-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2024-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2024-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2024-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
      }
    ]
  },
  {
    "id": "kpss-2022-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2022,
    "title": "2022 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2022 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2022-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2022-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2022-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2022-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2022-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2022-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans 2022)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2022-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans 2022)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2022-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans 2022)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2022-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans 2022)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2022-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Lisans 2022)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2022-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Lisans 2022)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2022-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Lisans 2022)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2022-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans 2022)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2022-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2022-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Lisans 2022)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2022-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Lisans 2022)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2022-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2022-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2022-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Lisans 2022)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2022-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Lisans 2022)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2022-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Lisans 2022)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2022-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Lisans 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2022-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Lisans 2022)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2022-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans 2022)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2022-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans 2022)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2022-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2022-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2022-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2022-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2022-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2022-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2022-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2022-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2022-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2022-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2022-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2022-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2022-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2022-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2022-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2022-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2022-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2022-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2022-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2022-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2022-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2022-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2022-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2022-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2022-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2022-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2022-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2022-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2022-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2022-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2022-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2022-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2022-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2022-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2022-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2022-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2022-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Lisans 2022)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2022-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Lisans 2022)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2022-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2022-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Lisans 2022)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2022-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2022-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Lisans 2022)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2022-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Lisans 2022)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2022-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2022-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Lisans 2022)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2022-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2022-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2022-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2022-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2022-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2022-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Lisans 2022)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2022-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans 2022)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2022-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Lisans 2022)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2022-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2022-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Lisans 2022)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2022-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2022-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2022-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2022-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2022-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2022-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Lisans 2022)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2022-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2022-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2022-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2022-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2022-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2022-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2022-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2022-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Lisans 2022)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2022-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2022-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Lisans 2022)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2022-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Lisans 2022)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2022-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Lisans 2022)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2022-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2022-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2022-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2022-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Lisans 2022)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2022-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Lisans 2022)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2022-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Lisans 2022)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Lisans 2022)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2022-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Lisans 2022)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2022-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2022-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2022-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2022-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2022-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2022-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2022-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
      }
    ]
  },
  {
    "id": "kpss-2020-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2020,
    "title": "2020 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2020 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2020-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2020-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2020-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2020-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2020-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2020-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans 2020)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2020-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans 2020)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2020-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans 2020)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2020-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans 2020)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2020-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Lisans 2020)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2020-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Lisans 2020)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2020-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Lisans 2020)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2020-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans 2020)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2020-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2020-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Lisans 2020)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2020-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Lisans 2020)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2020-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2020-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2020-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Lisans 2020)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2020-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Lisans 2020)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2020-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Lisans 2020)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2020-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Lisans 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2020-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Lisans 2020)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2020-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans 2020)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2020-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans 2020)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2020-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2020-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2020-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2020-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2020-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2020-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2020-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2020-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2020-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2020-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2020-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2020-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2020-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2020-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2020-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2020-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2020-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2020-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2020-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2020-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2020-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2020-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2020-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2020-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2020-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2020-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2020-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2020-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2020-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2020-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2020-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2020-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2020-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2020-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2020-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2020-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2020-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Lisans 2020)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2020-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Lisans 2020)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2020-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2020-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Lisans 2020)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2020-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2020-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Lisans 2020)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2020-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Lisans 2020)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2020-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2020-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Lisans 2020)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2020-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2020-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2020-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2020-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2020-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2020-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Lisans 2020)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2020-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans 2020)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2020-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Lisans 2020)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2020-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2020-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Lisans 2020)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2020-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2020-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2020-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2020-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2020-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2020-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Lisans 2020)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2020-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2020-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2020-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2020-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2020-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2020-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2020-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2020-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Lisans 2020)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2020-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2020-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Lisans 2020)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2020-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Lisans 2020)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2020-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Lisans 2020)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2020-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2020-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2020-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2020-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Lisans 2020)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2020-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Lisans 2020)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2020-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Lisans 2020)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Lisans 2020)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2020-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Lisans 2020)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2020-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans 2020)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2020-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2020-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2020-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2020-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2020-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2020-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
      }
    ]
  },
  {
    "id": "kpss-2018-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2018,
    "title": "2018 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2018 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2018-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2018-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2018-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2018-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2018-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2018-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans 2018)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2018-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans 2018)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2018-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans 2018)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2018-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans 2018)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2018-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Lisans 2018)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2018-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Lisans 2018)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2018-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Lisans 2018)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2018-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans 2018)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2018-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2018-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Lisans 2018)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2018-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Lisans 2018)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2018-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2018-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2018-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Lisans 2018)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2018-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Lisans 2018)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2018-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Lisans 2018)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2018-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Lisans 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2018-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Lisans 2018)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2018-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans 2018)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2018-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans 2018)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2018-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2018-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2018-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2018-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2018-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2018-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2018-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2018-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2018-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2018-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2018-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2018-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2018-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2018-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2018-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2018-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2018-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2018-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2018-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2018-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2018-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2018-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2018-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2018-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2018-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2018-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2018-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2018-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2018-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2018-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2018-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2018-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2018-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2018-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2018-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2018-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2018-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Lisans 2018)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2018-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Lisans 2018)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2018-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2018-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Lisans 2018)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2018-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2018-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Lisans 2018)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2018-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Lisans 2018)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2018-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2018-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Lisans 2018)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2018-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2018-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2018-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2018-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2018-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2018-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Lisans 2018)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2018-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans 2018)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2018-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Lisans 2018)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2018-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2018-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Lisans 2018)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2018-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2018-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2018-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2018-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2018-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2018-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Lisans 2018)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2018-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2018-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2018-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2018-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2018-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2018-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2018-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2018-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Lisans 2018)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2018-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2018-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Lisans 2018)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2018-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Lisans 2018)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2018-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Lisans 2018)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2018-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2018-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2018-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2018-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Lisans 2018)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2018-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Lisans 2018)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2018-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Lisans 2018)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Lisans 2018)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2018-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Lisans 2018)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2018-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans 2018)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2018-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2018-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2018-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2018-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2018-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2018-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
      }
    ]
  },
  {
    "id": "kpss-2016-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2016,
    "title": "2016 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2016 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Tam Sınav Simülasyonu (120 Soru / 130 Dk).",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2016-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk tavır' ifadesi samimiyetsiz, mesafeli anlamında mecaz olarak kullanılmıştır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2016-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Dosyadaki belgeleri teslim etmeden önce dikkatle inceledi.",
          "B": "Karanlıkta ilerlerken etrafına endişeyle bakıyordu.",
          "C": "Arkadaşının başarısını büyük bir gururla izledi.",
          "D": "Raporun son sayfasını imzalamadan masaya bıraktı.",
          "E": "Tarihi binanın detaylarını hayranlıkla seyretti."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek', bir şeyi incelemek, kontrol etmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2016-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde 'açılmak' sözcüğü 'ferahlamak, rahatlamak' anlamında kullanılmıştır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Balkona çıkıp temiz hava alınca zihnen biraz olsun açıldım.",
          "B": "Bahçedeki kırmızı güller sabah güneşinde açıldı.",
          "C": "Yeni kütüphane haftaya törenle hizmete açılacak.",
          "D": "Gemi fırtınaya rağmen açığa doğru seyretti.",
          "E": "Kapının kilidi zorlanınca menteşesi açıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Açılmak' A seçeneğinde ferahlamak anlamındadır.",
        "topic": "Sözcükte Anlam"
      },
      {
        "id": "2016-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Şairin son kitabı okuyucuyu büyüleyen dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan ve beş ana bölümden oluşmaktadır.",
          "C": "Filmin müziği dinleyenleri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece etkileyici ve eşsizdir.",
          "E": "Mimarisiyle göz dolduran bu esere herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa ve bölüm sayısı nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde koşula bağlılık (şart) söz konusudur? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Şiddetli yağmur yağdığı için toplantı ertelendi.",
          "B": "Projeni zamanında teslim edersen hafta sonu tatile çıkabilirsin.",
          "C": "Sınavı kazanmak amacıyla gece gündüz çalışıyordu.",
          "D": "Kitap okumayı sevdiğinden zamanını kütüphanede geçirirdi.",
          "E": "Hava kararmasına rağmen yürüyüşe devam ettiler."
        },
        "correctAnswer": "B",
        "explanation": "Tatile çıkma şartı projenin teslimine bağlanmıştır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde üslup (biçem) ile ilgili bir özelliğe değinilmiştir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yazar eserinde Anadolu insanının yaşam mücadelesini anlatır.",
          "B": "Romanda köylülerin ekonomik sorunları ele alınmıştır.",
          "C": "Sanatçı devrik cümleler ve özgün benzetmeler kullanmıştır.",
          "D": "Hikaye Ege kıyısındaki bir kasabada geçmektedir.",
          "E": "Şiirlerinde yalnızlık ve gurbet temalarını işler."
        },
        "correctAnswer": "C",
        "explanation": "Devrik cümle ve kelime seçimi üslubu gösterir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Toplantıya bu kez Ahmet de katıldı.",
          "B": "Dün akşam kütüphanede ders çalıştık.",
          "C": "Yarın sabah Ankara'ya otobüsle gideceğiz.",
          "D": "Yeni aldığı arabayı kapının önüne park etti.",
          "E": "Yaz aylarında sahil kasabaları kalabalık olur."
        },
        "correctAnswer": "A",
        "explanation": "'Ahmet de katıldı' ifadesi başkalarının da katıldığı anlamını taşır.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Okuma alışkanlığı kazanmak bireyin zihinsel dünyasını zenginleştirir. Kitaplar farklı hayat tecrübelerini sunar. Bu parçada vurgulanmak istenen temel düşünce nedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Okuma alışkanlığı kişisel gelişimi ve ufku genişletir.",
          "B": "Her kitap mutlaka bir ders vermelidir.",
          "C": "Kütüphaneler toplumların temel hazinesidir.",
          "D": "Yazarlar okuyucunun beklentisine göre yazmalıdır.",
          "E": "Klasikler güncel eserlerden daha değerlidir."
        },
        "correctAnswer": "A",
        "explanation": "Ana düşünce okuma alışkanlığının kişisel gelişime katkısıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2016-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı eserlerinde toplumsal sorunları gerçekçi bir gözle ele alır. Bu parçaya göre sanatçıyla ilgili hangisine ulaşılamaz? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Eserlerinde gözlem gücünden yararlandığına",
          "B": "Toplumsal konulara duyarsız kalmadığına",
          "C": "Yalnızca hayal gücüne dayalı kurgular ürettiğine",
          "D": "Gerçekçi bir yaklaşım benimsediğine",
          "E": "İnsan ve toplum ilişkisini işlediğine"
        },
        "correctAnswer": "C",
        "explanation": "Sanatçının yalnız hayal gücüne dayandığı söylenemez.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2016-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki parçada numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "(I) Edebiyat insan ruhunun en derin kıvrımlarına ışık tutar.",
          "B": "(II) Yazarlar sözcükleri birer fırça gibi kullanarak tablolar çizer.",
          "C": "(III) Yayıncılık sektöründeki maliyet artışları kitap fiyatlarını etkilemiştir.",
          "D": "(IV) Okur bu estetik evrende kendi duygularının karşılığını bulur.",
          "E": "(V) Böylece edebiyat bireyi özgürleştiren bir güç haline gelir."
        },
        "correctAnswer": "C",
        "explanation": "(III) numaralı cümlede maliyetten bahsedilerek akış bozulmuştur.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (KPSS Lisans 2016)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Her şey' sözcüğü her zaman ayrı yazılır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2016-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (KPSS Lisans 2016)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konmaz; soru işareti ve iki nokta (?..) şeklinde kullanılır.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2016-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (KPSS Lisans 2016)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünsüz yumuşaması",
          "C": "Ünsüz benzeşmesi",
          "D": "Ünlü düşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "D",
        "explanation": "Cümlede ünlü düşmesine örnek bir sözcük bulunmamaktadır.",
        "topic": "Ses Bilgisi"
      },
      {
        "id": "2016-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (KPSS Lisans 2016)",
        "options": {
          "A": "Özne - Belirtili Nesne - Yüklem",
          "B": "Zarf Tamlayıcısı - Özne - Yüklem",
          "C": "Dolaylı Tümleç - Özne - Belirtili Nesne - Yüklem",
          "D": "Özne - Zarf Tamlayıcısı - Yüklem",
          "E": "Zarf Tamlayıcısı - Belirtili Nesne - Yüklem"
        },
        "correctAnswer": "A",
        "explanation": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik' (Özne), 'doğanın muhteşem uyanışını' (Belirtili Nesne), 'müjdeliyordu' (Yüklem).",
        "topic": "Cümlenin Ögeleri"
      },
      {
        "id": "2016-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde fiilimsi (eylemsi) kullanılmamıştır? (KPSS Lisans 2016)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde herhangi bir eylemsi (isim-fiil, sıfat-fiil, zarf-fiil) yer almamaktadır.",
        "topic": "Sözcük Türleri ve Fiilimsiler"
      },
      {
        "id": "2016-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "'Sanatçı, eserlerinde sadece kendi iç dünyasını yansıtmakla kalmaz; ---.' Bu cümle düşüncenin akışına göre aşağıdakilerden hangisiyle sürdürülebilir? (KPSS Lisans 2016)",
        "options": {
          "A": "aynı zamanda toplumun duygu ve beklentilerine de tercüman olur",
          "B": "geleneksel kalıplara sıkı sıkıya bağlı kalmayı tercih eder",
          "C": "günlük hayatın karmaşasından uzak durmaya çalışır",
          "D": "okuyucunun beklentilerini tamamen göz ardı eder",
          "E": "edebiyat tarihinin geçmiş dönemlerini detaylıca inceler"
        },
        "correctAnswer": "A",
        "explanation": "'...kalmaz; aynı zamanda toplumun duygu ve beklentilerine de tercüman olur' ifadesi düşüncenin akışını tamamlar.",
        "topic": "Paragrafta Cümle Tamamlama"
      },
      {
        "id": "2016-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(I) Klasik müzik, yüzyıllar boyunca insan ruhunu dinlendiren en köklü müzik türlerinden biridir. (II) Mozart ve Beethoven gibi ustaların eserleri günümüzde de geniş kitlelerce dinlenmektedir. (III) Müzik dinlemek insan beynindeki odaklanma mekanizmasını harekete geçirir. (IV) Düzenli olarak klasik müzik dinleyen bireylerin stres seviyesinde belirgin bir düşüş gözlemlenmiştir. (V) Ayrıca bilim insanları müziğin hafıza üzerindeki olumlu etkilerini araştırmaktadır. Bu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar? (KPSS Lisans 2016)",
        "options": {
          "A": "II",
          "B": "III",
          "C": "IV",
          "D": "V",
          "E": "I"
        },
        "correctAnswer": "B",
        "explanation": "I ve II. cümlelerde klasik müziğin geçmişi anlatılırken III. cümleden itibaren müziğin beyin ve zihin üzerindeki etkilerine geçilmiştir.",
        "topic": "Paragrafı İkiye Bölme"
      },
      {
        "id": "2016-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Mimar Sinan, yapıtlarında estetik ile işlevselliği kusursuz bir şekilde harmanlamıştır. Eserlerinde kullandığı dahi statik hesaplamalar sayesinde binaları yüzyıllardır depremlere meydan okumaktadır. Çıraklık eseri Şehzade Camii, kalfalık eseri Süleymaniye Camii ve ustalık eseri Selimiye Camii Türk-İslam mimarisinin zirve noktalarıdır. Bu parçadan Mimar Sinan ile ilgili aşağıdakilerden hangisine ulaşılamaz? (KPSS Lisans 2016)",
        "options": {
          "A": "Eserlerinde görselliğin yanında kullanışlılığa da önem verdiğine",
          "B": "Mühendislik ve matematiksel hesaplamalarda üstün bir yeteneğe sahip olduğuna",
          "C": "Eserlerini farklı mesleki gelişim dönemlerine ayırdığına",
          "D": "Yapılarının zamana ve doğal afetlere karşı dayanıklı olduğuna",
          "E": "Tüm eserlerini sadece İstanbul sınırları içerisinde inşa ettiğine"
        },
        "correctAnswer": "E",
        "explanation": "Selimiye Camii Edirne'dedir; parçada tüm eserlerin sadece İstanbul'da inşa edildiğine dair bir bilgi yoktur.",
        "topic": "Paragrafta Yardımcı Düşünce"
      },
      {
        "id": "2016-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Günümüzde dijital teknolojilerin yaygınlaşmasıyla birlikte bilgiye erişim hızı olağanüstü artmıştır. Ancak bu durum, bilgiyi yüzeysel tüketme tehlikesini de beraberinde getirmektedir. Derinlemesine okuma ve eleştirel düşünme becerileri, ekran odaklı hızlı okuma alışkanlığı karşısında giderek zayıflamaktadır. Bu parçada asıl yakınlan durum aşağıdakilerden hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Dijital cihazların maliyetlerinin yüksek olması",
          "B": "Bilgiye ulaşma imkanlarının kısıtlanması",
          "C": "Hızlı bilgi tüketiminin derinlemesine ve eleştirel okumayı zayıflatması",
          "D": "Gençlerin teknoloji kullanımına aşırı ilgi göstermesi",
          "E": "Geleneksel kütüphanelerin kapanma noktasına gelmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada temel yakınma konusu, dijitalleşmenin getirdiği hızlı okuma alışkanlığının eleştirel okumayı zayıflatmasıdır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2016-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Dille kültür arasındaki ilişki etle tırnak gibidir. Bir ulusun dili ne kadar zengin ve canlıysa, kültürel mirası da o derece güçlüdür. Dilini kaybeden bir toplum, ---. Bu yüzden ana dilin korunması ulusal kimliğin devamı için hayati önem taşır. Bu parçada boş bırakılan yere düşüncenin akışına göre hangisi getirilmelidir? (KPSS Lisans 2016)",
        "options": {
          "A": "zamanla tarihsel ve kültürel kimliğini de yitirmeye mahkûmdur",
          "B": "ekonomik kalkınmasını daha hızlı gerçekleştirir",
          "C": "evrensel bilim diline daha kolay uyum sağlar",
          "D": "farklı kültürlerle iletişim kurmakta zorlanmaz",
          "E": "edebiyat alanında yeni türlerin doğmasına öncülük eder"
        },
        "correctAnswer": "A",
        "explanation": "Dille kültür bağı vurgulandığı için dilini kaybeden toplumun kültürel kimliğini de yitireceği ifade edilmelidir.",
        "topic": "Paragraf Tamamlama"
      },
      {
        "id": "2016-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Güneş yükseldikçe tarladaki başaklar altın sarısı bir renge bürünüyordu. Uzaktan hafif bir rüzgar esiyor, ekinlerin kokusunu vadi boyunca yayıyordu. Kuşların neşeli cıvıltıları, traktörlerin derinden gelen patpat seslerine karışıyordu. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (KPSS Lisans 2016)",
        "options": {
          "A": "Öyküleme - Betimleme",
          "B": "Tartışma - Tanımlama",
          "C": "Örneklendirme - Tanık Gösterme",
          "D": "Karşılaştırma - Sayısal Verilerden Yararlanma",
          "E": "Benzetme - Tartışma"
        },
        "correctAnswer": "A",
        "explanation": "Duyulara hitap eden ayrıntılarla niteleme yapılmış (betimleme) ve olay/akış işlenmiştir (öyküleme).",
        "topic": "Anlatım Biçimleri"
      },
      {
        "id": "2016-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yapay zeka sistemleri günümüzde sanat ve edebiyat alanında da eserler üretmeye başlamıştır. Şiir yazan, tablo çizen veya beste yapan algoritmalar insanları hayrete düşürmektedir. Ancak bir esere 'sanat eseri' ruhunu veren temel öğe, insanın duygu birikimi ve yaşanmışlığıdır. Bu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Yapay zeka gelecekte tüm sanatçıların yerini alacaktır.",
          "B": "Teknolojik algoritmalar insani duygulardan yoksun olduğu için gerçek sanat ruhunu tam olarak yakalayamaz.",
          "C": "Sanat eserlerinin değeri sadece kullanılan teknolojiyle ölçülür.",
          "D": "İnsanlar artık yapay zekanın ürettiği müzikleri dinlemeyi tercih etmektedir.",
          "E": "Sanat eğitimi yapay zeka mühendisliği ile birleştirilmelidir."
        },
        "correctAnswer": "B",
        "explanation": "Parçada yapay zekanın insani duygu ve yaşanmışlıktan yoksun olduğu vurgulanmaktadır.",
        "topic": "Paragrafta Çıkarım"
      },
      {
        "id": "2016-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(23 ve 24. soruları aşağıdaki parçaya göre cevaplayınız.)\n\n'Anadolu'da geleneksel el sanatlarından biri olan halıcılık, yüzyıllardır motiflerinde binbir çeşit hikaye gizler. Genç kızlar sevinçlerini, hüzünlerini ve umutlarını dokudukları ilmiklere nakış nakış işlerler. Kök boyalarla renklendirilen yün ipler, doğanın tüm canlılığını halıya taşır. Ancak sanayileşme ile birlikte fabrika halılarının yaygınlaşması, el dokuması halıcılığı yok olma tehlikesiyle karşı karşıya getirmiştir.'\n\nBu parçaya göre el dokuması halıların en belirgin özelliği aşağıdakilerden hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Fabrikalarda seri üretilmesi",
          "B": "Sentetik boyalarla renklendirilmesi",
          "C": "Dokuyan kişinin duygu ve yaşantılarını motiflerde yansıtması",
          "D": "Sadece belirli bölgelerde satılması",
          "E": "Desenlerinin yabancı kültürlerden ithal edilmesi"
        },
        "correctAnswer": "C",
        "explanation": "Parçada dokuyan kişilerin duygu ve umutlarını ilmiklere işlediği açıkça belirtilmektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2016-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki parçadan hareketle el dokuması halıcılık ile ilgili aşağıdakilerden hangisi söylenemez? (KPSS Lisans 2016)",
        "options": {
          "A": "Doğal malzemeler ve kök boyalar kullanıldığı",
          "B": "Sanayileşmenin bu sanata olumsuz etki yaptığı",
          "C": "Geleneksel Anadolu kültürünün bir parçası olduğu",
          "D": "Günümüzde devlet tarafından zorunlu ders olarak okutulduğu",
          "E": "Fabrika üretimi halıların rekabeti karşısında gerilediği"
        },
        "correctAnswer": "D",
        "explanation": "Parçada halıcılığın okullarda zorunlu ders olarak okutulduğuna dair bir bilgi geçmemektedir.",
        "topic": "Çoklu Paragraf Soruları"
      },
      {
        "id": "2016-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "I. Bu köprüler sayesinde iki kıta arasındaki ulaşım süresi dakikalara inmiştir.\nII. İstanbul, Asya ile Avrupa'yı birbirine bağlayan eşsiz bir coğrafi konuma sahiptir.\nIII. Tarih boyunca bu stratejik konum kenti bir ticaret ve kültür merkezi yapmıştır.\nIV. Günümüzde ise boğaz üzerinde yükselen devasa köprüler bu bağı simgelemektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir bütün oluşturulduğunda sıralama nasıl olmalıdır? (KPSS Lisans 2016)",
        "options": {
          "A": "II - III - IV - I",
          "B": "I - II - III - IV",
          "C": "III - I - IV - II",
          "D": "IV - II - I - III",
          "E": "II - I - IV - III"
        },
        "correctAnswer": "A",
        "explanation": "Mantıksal akış II (giriş), III (tarihsel süreç), IV (günümüz köprüleri) ve I (sonuç) şeklindedir.",
        "topic": "Cümle Sıralama"
      },
      {
        "id": "2016-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Başarılı bir lider, ekibine sadece talimat veren kişi değildir. Gerçek liderlik; çalışanların potansiyelini ortaya çıkaran, onlara güven duyan ve ortak bir vizyon etrafında kenetlenmelerini sağlayan bir ilham kaynağı olabilmektir. Bu parçaya göre ideal liderin temel niteliği nedir? (KPSS Lisans 2016)",
        "options": {
          "A": "Katı kurallar koyup tavizsiz uygulamak",
          "B": "Tüm kararları tek başına almak",
          "C": "Çalışanlara ilham verip mevcudiyeti geliştirmek",
          "D": "Sadece finansal hedeflere odaklanmak",
          "E": "Ekip üyeleri arasındaki rekabeti körüklemek"
        },
        "correctAnswer": "C",
        "explanation": "Parçada liderliğin ilham verme ve potansiyel geliştirme yönü vurgulanmıştır.",
        "topic": "Paragrafta Ana Düşünce"
      },
      {
        "id": "2016-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz ve Elif adlı beş arkadaş bir kütüphaneden Roman, Tarih, Bilim ve Felsefe türünde kitaplar almışlardır. Kişilerin aldıkları kitaplarla ilgili bilinenler şunlardır:\n- Toplam 5 kitap alınmıştır ve her kişi en az 1 kitap almıştır.\n- Roman türünde 2 kitap alınmıştır.\n- Ceyda ve Elif aynı türde kitap almıştır.\n- Ahmet sadece Tarih kitabı almıştır.\n- Deniz Felsefe kitabı almıştır.\n\nBuna göre Ceyda ve Elif hangi türde kitap almıştır? (KPSS Lisans 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Felsefe",
          "D": "Bilim",
          "E": "Sosyoloji"
        },
        "correctAnswer": "A",
        "explanation": "Roman türünden 2 kitap alındığından ve Ceyda ile Elif aynı türde kitap aldığından, her ikisi de Roman almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2016-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Yukarıdaki bilgilere göre Burak hangi türde kitap almıştır? (KPSS Lisans 2016)",
        "options": {
          "A": "Roman",
          "B": "Tarih",
          "C": "Bilim",
          "D": "Felsefe",
          "E": "Psikoloji"
        },
        "correctAnswer": "C",
        "explanation": "Ahmet: Tarih, Deniz: Felsefe, Ceyda & Elif: Roman aldığı için geriye kalan Bilim kitabını Burak almıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2016-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdakilerden hangisi kesinlikle doğrudur? (KPSS Lisans 2016)",
        "options": {
          "A": "Deniz Roman almıştır.",
          "B": "Ceyda Bilim kitabı almıştır.",
          "C": "Ahmet ve Deniz aynı türde kitap almıştır.",
          "D": "Elif Roman almıştır.",
          "E": "Burak Felsefe almıştır."
        },
        "correctAnswer": "D",
        "explanation": "Elif'in Roman türünde kitap aldığı kesin olarak doğrudur.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2016-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki kişi-kitap türü eşleştirmelerinden hangisi yanlıştır? (KPSS Lisans 2016)",
        "options": {
          "A": "Ahmet - Tarih",
          "B": "Burak - Bilim",
          "C": "Ceyda - Roman",
          "D": "Deniz - Felsefe",
          "E": "Elif - Tarih"
        },
        "correctAnswer": "E",
        "explanation": "Elif Roman almıştır, dolayısıyla Elif - Tarih eşleştirmesi yanlıştır.",
        "topic": "Sözel Mantık"
      },
      {
        "id": "2016-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8} - \\frac{1}{4}}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "10/3",
          "B": "8/3",
          "C": "7/2",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 3/4 + 2/4 = 5/4. Payda: 5/8 - 2/8 = 3/8. Bölme: (5/4) ÷ (3/8) = (5/4) * (8/3) = 10/3.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2016-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{0{,}12}{0{,}03} + \\frac{0{,}45}{0{,}09} - \\frac{0{,}6}{0{,}2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "B",
        "explanation": "4 + 5 - 3 = 6.",
        "topic": "Ondalık Sayılar"
      },
      {
        "id": "2016-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+2} - 3^x = 72$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "3^x * 8 = 72 => 3^x = 9 => x = 2. 2^2 = 4.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2016-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{4^5 + 4^5 + 4^5 + 4^5}{2^8}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "C",
        "explanation": "4 * 4^5 = 4^6 = 2^12. 2^12 / 2^8 = 2^4 = 16.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2016-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16} - \\sqrt{0{,}25}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,1",
          "B": "0,2",
          "C": "0,3",
          "D": "0,4",
          "E": "0,5"
        },
        "correctAnswer": "B",
        "explanation": "0,3 + 0,4 - 0,5 = 0,2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2016-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "√(9 + 7) = √16 = 4. 4 * √2 = 4√2.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2016-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır?",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "x = 5 ve x = -4. Çarpımları: -20.",
        "topic": "Mutlak Değer"
      },
      {
        "id": "2016-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$-2 < x < 4$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "-11 < 3x - 5 < 7 => En büyük tam sayı = 6.",
        "topic": "Basit Eşitsizlikler"
      },
      {
        "id": "2016-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir?",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1/(x+2)"
        },
        "correctAnswer": "A",
        "explanation": "(x-3)(x+3)/[(x+2)(x+3)] ÷ (x-3)/(x+2) = 1.",
        "topic": "Çarpanlara Ayırma"
      },
      {
        "id": "2016-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dört basamaklı $$4a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır?",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "C",
        "explanation": "b=0 için a=7, b=5 için a=2. Toplam = 9.",
        "topic": "Bölünebilme Kuralları"
      },
      {
        "id": "2016-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Hangi sayının 3 katının 12 eksiği, aynı sayının yarısının 18 fazlasına eşittir?",
        "options": {
          "A": "10",
          "B": "12",
          "C": "14",
          "D": "16",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "3x - 12 = x/2 + 18 => 5x/2 = 30 => x = 12.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2016-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir su deposunun 3/5'i doludur. Depoya 40 litre su eklendiğinde 4/5'i dolu hale geldiğine göre tamamı kaç litredir?",
        "options": {
          "A": "150",
          "B": "180",
          "C": "200",
          "D": "240",
          "E": "300"
        },
        "correctAnswer": "C",
        "explanation": "1/5 = 40 litredir => Tamamı 200 litredir.",
        "topic": "Kesir Problemleri"
      },
      {
        "id": "2016-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "36"
        },
        "correctAnswer": "C",
        "explanation": "2x + 6 = 3(x - 2) => x = 12. Öğrenci = 30.",
        "topic": "Sayı Problemleri"
      },
      {
        "id": "2016-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir babanın yaşı oğlunun yaşının 4 katıdır. 6 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacağına göre babanın bugünkü yaşı kaçtır?",
        "options": {
          "A": "36",
          "B": "40",
          "C": "44",
          "D": "48",
          "E": "52"
        },
        "correctAnswer": "D",
        "explanation": "Oğul=12, Baba=48.",
        "topic": "Yaş Problemleri"
      },
      {
        "id": "2016-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Maliyeti 500 TL olan bir mal %30 kârla satılırken satış fiyatı üzerinden %10 indirim yapılıyor. Malın son satış fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "575",
          "C": "585",
          "D": "600",
          "E": "620"
        },
        "correctAnswer": "C",
        "explanation": "500 * 1.30 = 650. 650 * 0.90 = 585 TL.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2016-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir tüccar elindeki malın 1/3'ünü %20 zararla, kalan kısmını %40 kârla satıyor. Tüm satış sonundaki toplam kâr oranı % kaçtır?",
        "options": {
          "A": "15",
          "B": "20",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "100 TL zararlı = 80 TL. 200 TL kârlı = 280 TL. Toplam 360 TL => %20 kâr.",
        "topic": "Kâr - Zarar Problemleri"
      },
      {
        "id": "2016-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Aralarında 450 km mesafe bulunan iki şehirden hızları 70 km ve 80 km olan iki araç birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?",
        "options": {
          "A": "2",
          "B": "2.5",
          "C": "3",
          "D": "3.5",
          "E": "4"
        },
        "correctAnswer": "C",
        "explanation": "Süre = 450 / 150 = 3 saat.",
        "topic": "Hız - Hareket Problemleri"
      },
      {
        "id": "2016-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Tuz oranı %20 olan 60 gram tuzlu su ile tuz oranı %40 olan 40 gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı % kaçtır?",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "Tuz = 28 gr / 100 gr => %28.",
        "topic": "Karışım Problemleri"
      },
      {
        "id": "2016-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "35 kişilik bir sınıfta Almanca bilen 18, İngilizce bilen 22 kişi vardır. Her iki dili de bilen 8 kişi olduğuna göre hiçbir dili bilmeyen kaç kişi vardır?",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "A",
        "explanation": "Bilmeyenler = 35 - (18 + 22 - 8) = 3.",
        "topic": "Kümeler"
      },
      {
        "id": "2016-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$f(x) = 3x - 5$$ olduğuna göre, $$f(2)$$ değeri kaçtır?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5"
        },
        "correctAnswer": "A",
        "explanation": "f(2) = 6 - 5 = 1.",
        "topic": "Fonksiyonlar"
      },
      {
        "id": "2016-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki zar aynı anda havaya atılıyor. Zarların üst yüzüne gelen sayıların toplamının 8 olma olasılığı kaçtır?",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "Uygun durumlar = 5. Toplam = 36 => 5/36.",
        "topic": "Olasılık"
      },
      {
        "id": "2016-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dizide her terim kendisinden önceki iki terimin toplamına eşittir. İlk iki terimi 2 ve 3 olan dizinin 6. terimi kaçtır?",
        "options": {
          "A": "13",
          "B": "18",
          "C": "21",
          "D": "24",
          "E": "31"
        },
        "correctAnswer": "C",
        "explanation": "6. terim = 21.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2016-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir çember üzerindeki 8 nokta kullanılarak en fazla kaç farklı doğru parçası çizilebilir?",
        "options": {
          "A": "24",
          "B": "28",
          "C": "32",
          "D": "36",
          "E": "56"
        },
        "correctAnswer": "B",
        "explanation": "C(8,2) = 28.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2016-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "1'den 50'ye kadar olan doğal sayılardan kaç tanesi 3 ile bölünebildiği halde 5 ile bölünemez?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "14",
          "D": "15",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "16 - 3 = 13.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2016-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir dijital saat HH:MM formatında çalışmaktadır. Gün içerisinde saat göstergesinde kaç kez '4' rakamı görülür?",
        "options": {
          "A": "6",
          "B": "12",
          "C": "14",
          "D": "24",
          "E": "44"
        },
        "correctAnswer": "D",
        "explanation": "24 kez görülür.",
        "topic": "Sayısal Mantık"
      },
      {
        "id": "2016-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. En büyük iç açı kaç derecedir?",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "En büyük açı = 80°.",
        "topic": "Geometri - Üçgende Açı"
      },
      {
        "id": "2016-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yükseklik kaç cm'dir?",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5,2",
          "D": "5,4",
          "E": "6,0"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm.",
        "topic": "Geometri - Dik Üçgen"
      },
      {
        "id": "2016-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Çevresi 36 cm olan bir dikdörtgenin kısa kenarının uzun kenarına oranı 4/5'tir. Alanı kaç cm²'dir?",
        "options": {
          "A": "64",
          "B": "72",
          "C": "80",
          "D": "96",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 80 cm².",
        "topic": "Geometri - Dikdörtgen"
      },
      {
        "id": "2016-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Yarıçapı 6 cm olan bir dairenin 60°'lik merkez açısına sahip diliminin alanı kaç π cm²'dir?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "8",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Dilim alanı = 6π cm².",
        "topic": "Geometri - Dairede Alan"
      },
      {
        "id": "2016-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir?",
        "options": {
          "A": "4",
          "B": "$4\\sqrt{2}$",
          "C": "6",
          "D": "$5\\sqrt{2}$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "Uzaklık = 4√2 birim.",
        "topic": "Geometri - Analitik Geometri"
      },
      {
        "id": "2016-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma ve orduyu komuta etme yetkisi neyi gösterir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Geniş siyasi ve askeri yetkilerle donatıldığını",
          "B": "Laik sistem uygulandığını",
          "C": "Düzenli ordu bulunmadığını",
          "D": "Özel mülkiyet geliştiğini",
          "E": "Din adamlarının tek yetkili olduğunu"
        },
        "correctAnswer": "A",
        "explanation": "Geniş devlet yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2016-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla hangisi hedeflenmemiştir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Tarımsal üretimi sürdürmek",
          "B": "Atlı asker yetiştirmek",
          "C": "Güvenliği tesis etmek",
          "D": "Merkezi otoriteyi güçlendirmek",
          "E": "Dış borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sisteminin dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2016-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Manda ve himaye fikri ilk kez nerede reddedilmiştir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "İlk kez Erzurum Kongresi'nde reddedildi.",
        "topic": "Millî Mücadele Hazırlık"
      },
      {
        "id": "2016-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde melik eğitmenlerine ne ad verilirdi? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Selçuklularda Atabey denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2016-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi ile olmuştur? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde gerçekleşti.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2016-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Amasya Genelgesi'nde yer alan 'Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.' kararı aşağıdakilerden hangisinin ifadesidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Millî Mücadele'nin gerekçesi",
          "B": "Millî Mücadele'nin yöntemi",
          "C": "Manda ve himayenin kabulü",
          "D": "İstanbul Hükümetine bağlılık",
          "E": "Düzenli ordunun kurulması"
        },
        "correctAnswer": "A",
        "explanation": "Vatanın bütünlüğünün tehlikede olması Millî Mücadele'nin temel gerekçesidir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2016-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Mustafa Kemal Paşa 'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz.' sözünü hangi zafer üzerine söylemiştir? (KPSS Lisans 2016)",
        "options": {
          "A": "I. İnönü Muharebesi",
          "B": "II. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "B",
        "explanation": "Bu tarihi söz İsmet Paşa'ya II. İnönü Zaferi sonrası çekilen telgrafta söylenmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2016-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Erzurum Kongresi'nde alınan 'Manda ve himaye kabul olunamaz.' kararı ilk kez hangisini doğrulamaktadır? (KPSS Lisans 2016)",
        "options": {
          "A": "Tam bağımsızlık ilkesini",
          "B": "Saltanatın kaldırılmasını",
          "C": "Bölgesel yönetimi",
          "D": "Meclis hükümeti sistemini",
          "E": "Laiklik anlayışını"
        },
        "correctAnswer": "A",
        "explanation": "Manda ve himayenin reddedilmesi koşulsuz tam bağımsızlık hedefini gösterir.",
        "topic": "Kurtuluş Savaşı Hazırlık"
      },
      {
        "id": "2016-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "TBMM Hükümetinin uluslararası alanda imzaladığı ilk siyasi ve askeri antlaşma hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Ankara Antlaşması",
          "D": "Lozan Antlaşması",
          "E": "Mudanya Ateşkesi"
        },
        "correctAnswer": "A",
        "explanation": "Ermenistan ile imzalanan Gümrü Antlaşması TBMM'nin ilk diplomatik başarısıdır.",
        "topic": "Doğu Cephesi"
      },
      {
        "id": "2016-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Sakarya Meydan Muharebesi'nden sonra TBMM tarafından Mustafa Kemal Paşa'ya hangi rütbe ve unvan verilmiştir? (KPSS Lisans 2016)",
        "options": {
          "A": "Gazi ve Mareşal",
          "B": "Başkomutan ve Paşa",
          "C": "Müşir ve Sadrazam",
          "D": "Reisicumhur ve Orgeneral",
          "E": "Başvekil ve Kaptan-ı Derya"
        },
        "correctAnswer": "A",
        "explanation": "Sakarya Zaferi sonrası TBMM tarafından Mareşal rütbesi ve Gazilik unvanı tevcih edilmiştir.",
        "topic": "Kurtuluş Savaşı Cepheleri"
      },
      {
        "id": "2016-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Lozan Barış Antlaşması'nda çözümü sonraya bırakılan tek sınır konusu hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Irak Sınırı (Musul Sorunu)",
          "B": "Suriye Sınırı",
          "C": "Yunanistan Sınırı",
          "D": "Bulgaristan Sınırı",
          "E": "Kars Sınırı"
        },
        "correctAnswer": "A",
        "explanation": "Musul sorunu İngiltere ile ikili görüşmelere bırakılmış ve Lozan'da çözülemeyen tek konu olmuştur.",
        "topic": "Lozan Antlaşması"
      },
      {
        "id": "2016-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen kanunla hangisi gerçekleştirilmiştir? (KPSS Lisans 2016)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu kabul edildi",
          "B": "Soyadı Kanunu çıkarıldı",
          "C": "Harf İnkılabı yapıldı",
          "D": "Cumhuriyet ilan edildi",
          "E": "Tekke ve zaviyeler kapatıldı"
        },
        "correctAnswer": "A",
        "explanation": "3 Mart 1924'te Halifeliğin kaldırılmasıyla birlikte Tevhid-i Tedrisat ve Şeriye-Evkaf Vekaleti kaldırıldı.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde toplumsal alanda eşitliği sağlamak amacıyla yapılan inkılap hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Soyadı Kanunu'nun kabulü",
          "B": "Aşar vergisinin kaldırılması",
          "C": "Kabotaj Kanunu'nun kabulü",
          "D": "Merkez Bankası'nın kurulması",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Ağa, paşa, bey gibi unvanların kaldırılması ve Soyadı Kanunu toplumsal eşitliği pekiştirmiştir.",
        "topic": "Toplumsal İnkılaplar"
      },
      {
        "id": "2016-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Akıl ve bilimi rehber edinme' ilkesi doğrudan hangi Atatürk ilkesi ile ilişkilidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Laiklik",
          "B": "Devletçilik",
          "C": "Milliyetçilik",
          "D": "Halkçılık",
          "E": "Devletçilik"
        },
        "correctAnswer": "A",
        "explanation": "Laiklik dinamik, akılcı ve bilimsel düşünceyi esas alan Atatürk ilkesidir.",
        "topic": "Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Lisans 2016)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "III. Selim",
          "C": "II. Mahmut",
          "D": "Sultan Abdülaziz",
          "E": "II. Abdülhamid"
        },
        "correctAnswer": "A",
        "explanation": "Tanzimat Dönemi'nde Sultan Abdülmecid döneminde Kaime adı verilen ilk kâğıt para basılmıştır.",
        "topic": "Osmanlı Tarihi"
      },
      {
        "id": "2016-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Üretimde sürekliliği sağlamak amacıyla toprağını boş bırakan köylüden Çiftbozan vergisi alınırdı.",
        "topic": "Osmanlı Sosyo-Ekonomik"
      },
      {
        "id": "2016-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Türk tarihinde ilk düzenli ordu (Yaya ve Müsellem) hangi hükümdar zamanında kurulmuştur? (KPSS Lisans 2016)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "İlk düzenli Osmanlı ordusu Yaya ve Müsellem adıyla Orhan Bey döneminde teşkilatlanmıştır.",
        "topic": "Osmanlı Kuruluş"
      },
      {
        "id": "2016-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk Dönemi Türk dış politikasında Türkiye'nin Milletler Cemiyeti'ne üye olduğu yıl hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Türkiye, barışçıl dış politikası sayesinde 1932 yılında Milletler Cemiyeti'ne üye olmuştur.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2016-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "II. Dünya Savaşı sırasında müttefik devletlerin Türkiye'yi savaşa sokmak için yaptığı görüşme hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "İnönü ile Churchill arasında gerçekleşen Adana Görüşmeleri Türkiye'nin savaşa girmesi talebini içerir.",
        "topic": "Çağdaş Türk ve Dünya Tarihi"
      },
      {
        "id": "2016-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiğine inanılan anlayış hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Kut Anlayışı",
          "B": "Töre",
          "C": "Kurultay",
          "D": "Balbal",
          "E": "Yassı"
        },
        "correctAnswer": "A",
        "explanation": "Eski Türklerde siyasi iktidar ve yönetme hakkının Tanrı vergisi olduğuna inanılması Kut anlayışıdır.",
        "topic": "İslam Öncesi Türk Tarihi"
      },
      {
        "id": "2016-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti ile Bizans arasında yapılan ilk büyük savaş hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Pasinler Savaşı",
          "B": "Malazgirt Savaşı",
          "C": "Miryokefalon Savaşı",
          "D": "Katlvan Savaşı",
          "E": "Dandanakan Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "1048 Pasinler Savaşı Selçuklular ile Bizans arasındaki ilk ciddi meydan muharebesidir.",
        "topic": "Türk-İslam Tarihi"
      },
      {
        "id": "2016-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Karahanlılar Dönemi'nde Yusuf Has Hacib tarafından yazılan ve ilk Türkçe Siyasetname kabul edilen eser hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Kutadgu Bilig",
          "B": "Divânu Lugâti't-Türk",
          "C": "Atabetü'l-Hakayık",
          "D": "Divân-ı Hikmet",
          "E": "Siyasetnâme"
        },
        "correctAnswer": "A",
        "explanation": "Kutadgu Bilig (Mutluluk Veren Bilgi) Türk-İslam edebiyatının ve ilk siyasetnamesinin baş yapıtıdır.",
        "topic": "Türk-İslam Kültürü"
      },
      {
        "id": "2016-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde medreselerde ders veren öğretim üyelerine ne ad verilirdi? (KPSS Lisans 2016)",
        "options": {
          "A": "Müderris",
          "B": "Kadı",
          "C": "Lala",
          "D": "Nişancı",
          "E": "Müfti"
        },
        "correctAnswer": "A",
        "explanation": "Osmanlı ilmiye sınıfında medresede eğitim veren hocalara Müderris denirdi.",
        "topic": "Osmanlı Kültür Medeniyet"
      },
      {
        "id": "2016-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Cumhuriyet Dönemi'nde kadınlara milletvekili seçme ve seçilme hakkı hangi yılda verilmiştir? (KPSS Lisans 2016)",
        "options": {
          "A": "1934",
          "B": "1930",
          "C": "1933",
          "D": "1926",
          "E": "1938"
        },
        "correctAnswer": "A",
        "explanation": "Türk kadınları 1930'da belediye, 1933'te muhtarlık ve 1934'te milletvekili seçme/seçilme hakkı elde etti (034 kodlaması).",
        "topic": "Kadın Hakları İnkılabı"
      },
      {
        "id": "2016-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı kimdir? (KPSS Lisans 2016)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Fatih Sultan Mehmed",
          "C": "Kanuni Sultan Süleyman",
          "D": "II. Bayezid",
          "E": "I. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Yavuz Sultan Selim Mısır Seferi sonrası Mekke ve Medine'nin hizmetkârı unvanını üstlenmiştir.",
        "topic": "Osmanlı Yükselme"
      },
      {
        "id": "2016-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ettiği ilk antlaşma hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Lale Devri Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "1718 Pasarofça Antlaşması ile Lale Devri başlamış ve Batı'nın üstünlüğü kabul edilmiştir.",
        "topic": "Osmanlı Duraklama-Gerileme"
      },
      {
        "id": "2016-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi doğrultusunda Balkan Antantı hangi yılda imzalanmıştır? (KPSS Lisans 2016)",
        "options": {
          "A": "1934",
          "B": "1932",
          "C": "1936",
          "D": "1938",
          "E": "1930"
        },
        "correctAnswer": "A",
        "explanation": "Balkan Paktı (Antantı) 1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında imzalandı.",
        "topic": "Atatürk Dönemi Dış Politika"
      },
      {
        "id": "2016-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de olması",
          "C": "Zaman farkı olması",
          "D": "Doğuda bulunması",
          "E": "Orta kuşakta olması"
        },
        "correctAnswer": "A",
        "explanation": "Yer şekillerinin engebeli yapısındandır.",
        "topic": "Türkiye'nin İklimi"
      },
      {
        "id": "2016-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Sularını Karadeniz'e döken açık havzalı akarsuyumuz hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülür.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2016-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Fındık üretiminin en yoğun olduğu coğrafi bölge hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara",
          "B": "Ege",
          "C": "Karadeniz",
          "D": "İç Anadolu",
          "E": "Akdeniz"
        },
        "correctAnswer": "C",
        "explanation": "Karadeniz Bölgesi'dir.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2016-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi (Güney Marmara)",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Dünya bor rezervinin büyük kısmı Türkiye'de olup Balıkesir, Kütahya, Eskişehir (Marmara/İç Batı) çevresindedir.",
        "topic": "Madenler"
      },
      {
        "id": "2016-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin en uzun iç akarsuyu olma özelliğine sahip nehrimiz hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Sınırlarımız içerisindeki doğup denize dökülen en uzun nehrimiz Kızılırmak'tır.",
        "topic": "Türkiye Akarsuları"
      },
      {
        "id": "2016-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı bölgelerde hangi kıyı tipi görülür? (KPSS Lisans 2016)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Karadeniz ve Akdeniz'de dağlar kıyıya paralel uzandığı için Boyuna Kıyı Tipi hakimdir.",
        "topic": "Kıyı Tipleri"
      },
      {
        "id": "2016-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de mikrolima alanı olarak bilinen ve zeytin ile narenciye yetiştirilebilen Doğu Karadeniz ili hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Rize",
          "B": "Trabzon",
          "C": "Artvin (Çoruh Vadisi)",
          "D": "Giresun",
          "E": "Ordu"
        },
        "correctAnswer": "A",
        "explanation": "Rize ve çevresi kış ılıklığı sebebiyle mikroklimal alandır (Rize'de narenciye, Artvin'de zeytin).",
        "topic": "Türkiye İklimi"
      },
      {
        "id": "2016-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye nüfusunun tarihsel gelişiminde nüfus artış hızının en düşük olduğu dönem hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "1940 - 1945 Dönemi (II. Dünya Savaşı)",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "II. Dünya Savaşı yıllarında erkeklerin askere alınması sebebiyle nüfus artış hızı en düşük seviyeye inmiştir.",
        "topic": "Nüfus Coğrafyası"
      },
      {
        "id": "2016-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de en fazla demir cevheri çıkarılan ve işlenen ilimiz aşağıdakilerden hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Sivas (Divriği) / Malatya (Hekimhan)",
          "B": "Kültür / Batman",
          "C": "Kastamonu (Küre)",
          "D": "Artvin (Murgul)",
          "E": "Zonguldak"
        },
        "correctAnswer": "A",
        "explanation": "Sivas-Divriği ve Malatya-Hekimhan Türkiye'nin ana demir yataklarıdır.",
        "topic": "Madenler"
      },
      {
        "id": "2016-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Köy altı yerleşmelerinden olan 'Dalyan' en çok hangi ekonomik faaliyetle ilgilidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Su Ürünleri ve Balıkçılık",
          "B": "Büyükbaş Hayvancılık",
          "C": "Ormancılık",
          "D": "Tahıl Tarımı",
          "E": "Madencilik"
        },
        "correctAnswer": "A",
        "explanation": "Dalyanlar kıyılarda balık avlamak ve yetiştirmek için kurulan geçici/sürekli yerleşmelerdir.",
        "topic": "Yerleşme Coğrafyası"
      },
      {
        "id": "2016-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de Jeotermal Enerji santrallerinin ilk kurulduğu ve en yaygın olduğu il hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Denizli (Sarayköy) / Aydın",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Kırık hattı ve fay hatlarının yoğun olduğu Denizli-Sarayköy ve Aydın jeotermal enerjide öncüdür.",
        "topic": "Enerji Kaynakları"
      },
      {
        "id": "2016-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Doğu Anadolu Bölgesi'nde büyükbaş hayvancılığın yaygın olmasının temel iklimsel nedeni hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Yaz yağışları ve gür çayırlar",
          "B": "Kış kuraklığı",
          "C": "Akdeniz iklimi etkisi",
          "D": "Rüzgar şiddeti",
          "E": "Orman örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Erzurum-Kars platomuzda yaz yağışlarıyla yeşeren alpin çayırları büyükbaş hayvancılığı geliştirmiştir.",
        "topic": "Hayvancılık"
      },
      {
        "id": "2016-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de rüzgar erozyonunun en şiddetli görüldüğü bölge hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "İç Anadolu Bölgesi (Karapınar çevresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Kuraklık, bitki örtüsü yoksunluğu ve nadas alanları nedeniyle İç Anadolu (Karapınar) rüzgar erozyonunda ilktir.",
        "topic": "Toprak ve Erozyon"
      },
      {
        "id": "2016-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki göllerimizden hangisi oluşum yönüyle 'Volkanik Set Gölü' özelliğindedir? (KPSS Lisans 2016)",
        "options": {
          "A": "Van Gölü / Çıldır Gölü",
          "B": "Tuz Gölü",
          "C": "Manyas Gölü",
          "D": "Bafa (Çamiçi) Gölü",
          "E": "Tortum Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Van, Çıldır, Erçek, Nazik gölleri Doğu Anadolu'da volkanik set gölleridir.",
        "topic": "Türkiye Gölleri"
      },
      {
        "id": "2016-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fön rüzgarlarının en belirgin görüldüğü coğrafi alan hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "Doğu Karadeniz Kıyıları (Rize-Artvin)",
          "B": "Ege Grabenleri",
          "C": "Çukurova",
          "D": "Trakya Ovası",
          "E": "Güneydoğu Anadolu"
        },
        "correctAnswer": "A",
        "explanation": "Kuzey Anadolu Dağları'nı aşan hava kütleleri Rize ve Trabzon yamaçlarından inerken fön etkisi yapar.",
        "topic": "Rüzgarlar"
      },
      {
        "id": "2016-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin UNESCO Dünya Mirası Listesi'nde yer alan 'Çatalhöyük Neolitik Kenti' hangi ilimizdedir? (KPSS Lisans 2016)",
        "options": {
          "A": "Konya",
          "B": "Çorum",
          "C": "Şanlıurfa",
          "D": "Denizli",
          "E": "Nevşehir"
        },
        "correctAnswer": "A",
        "explanation": "Çatalhöyük Neolitik Kenti Konya ilimizin Çumra ilçesindedir.",
        "topic": "Turizm Coğrafyası"
      },
      {
        "id": "2016-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de kış mevsiminde ılık ve yağışlı havanın etkili olmasını sağlayan alçak basınç merkezi hangisidir? (KPSS Lisans 2016)",
        "options": {
          "A": "İzlanda Alçak Basıncı",
          "B": "Sibirya Yüksek Basıncı",
          "C": "Basra Alçak Basıncı",
          "D": "Asor Yüksek Basıncı",
          "E": "Muson Basıncı"
        },
        "correctAnswer": "A",
        "explanation": "İzlanda dinamik alçak basıncı kışın Türkiye'ye girdiğinde hava ılık ve bol yağışlı geçer.",
        "topic": "Basınç ve Rüzgarlar"
      },
      {
        "id": "2016-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye sınırları dışına çıkan ve Basra Körfezi'ne dökülen akarsularımız hangileridir? (KPSS Lisans 2016)",
        "options": {
          "A": "Fırat ve Dicle",
          "B": "Kura ve Aras",
          "C": "Çoruh ve Kura",
          "D": "Asi ve Bakırçay",
          "E": "Seyhan ve Ceyhan"
        },
        "correctAnswer": "A",
        "explanation": "Fırat ve Dicle nehirlerimiz Irak'ta birleşip Şattülarap adıyla Basra Körfezi'ne dökülür.",
        "topic": "Akarsular ve Havzalar"
      },
      {
        "id": "2016-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "5 yılda bir yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2016-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hangisi Türk hukukunda yaptırım türü değildir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim çözüm yoludur.",
        "topic": "Temel Hukuk"
      },
      {
        "id": "2016-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "15 üyeden oluşur.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2016-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Milletvekili seçilme yaşı kaçtır? (KPSS Lisans 2016)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "25",
          "D": "30",
          "E": "35"
        },
        "correctAnswer": "A",
        "explanation": "2017 Anayasa değişikliği ile milletvekili seçilme alt yaşı 18'e indirilmiştir.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2016-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Cumhurbaşkanı Kararnamelerinin yargısal denetimini hangi organ yapar? (KPSS Lisans 2016)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Kamu Denetçiliği Kurumu"
        },
        "correctAnswer": "A",
        "explanation": "Cumhurbaşkanlığı Kararnamelerinin Anayasa'ya uygunluğunu Anayasa Mahkemesi denetler.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2016-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "İdare hukukunda memurlara verilen disiplin cezalarından hangisine karşı yargı yolu kapalı DEĞİLDİR? (KPSS Lisans 2016)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Uyarma cezası",
          "C": "Kınama cezası",
          "D": "Aylıktan kesme",
          "E": "Kademe ilerlemesinin durdurulması"
        },
        "correctAnswer": "A",
        "explanation": "1982 Anayasası uyarınca uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu açıktır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Türk Medeni Kanunu'na göre fiil ehliyetine sahip olabilmek için aranan şartlar hangisinde doğru verilmiştir? (KPSS Lisans 2016)",
        "options": {
          "A": "Ergin olmak, ayırt etme gücüne sahip olmak, kısıtlı olmamak",
          "B": "Sağ ve tam doğmak",
          "C": "18 yaşını doldurmak ve üniversite mezunu olmak",
          "D": "T.C. vatandaşı olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Fiil ehliyeti şartları: Sezgin (ayırt etme gücü var), Ergin (reşit) ve Kısıtsız olmaktır.",
        "topic": "Medeni Hukuk"
      },
      {
        "id": "2016-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Hukuk kurallarının emredici, tamamlayıcı, yorumlayıcı ve tanımlayıcı türleri vardır. Tarafların aksini kararlaştıramayacağı kurallara ne ad verilir? (KPSS Lisans 2016)",
        "options": {
          "A": "Emredici Hukuk Kuralları",
          "B": "Tamamlayıcı Hukuk Kuralları",
          "C": "Yorumlayıcı Hukuk Kuralları",
          "D": "Yedek Hukuk Kuralları",
          "E": "Mülga Kurallar"
        },
        "correctAnswer": "A",
        "explanation": "Kamu düzenini ve genel ahlakı koruyan, aksine sözleşme yapılamayan kurallar emredicidir.",
        "topic": "Hukukun Temel Kavramları"
      },
      {
        "id": "2016-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (KPSS Lisans 2016)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Millî Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir; karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2016-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Şanlıurfa'da bulunan 'Tarihin Sıfır Noktası' antik alanı hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe'dir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2016-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin ilk yerli haberleşme uydusu hangisidir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A'dır.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2016-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi kimdir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "Osman Zeki Üngör'dür.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2016-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "AİHM hangi şehirde bulunmaktadır? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "Strazburg'dadır.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2016-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' yazarı kimdir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Halide Edib Adıvar'dır.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2016-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir? (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "New York'tadır.",
        "topic": "Uluslararası Kuruluşlar"
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
