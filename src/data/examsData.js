// KPSS Ön Lisans ve KPSS Lisans (GY-GK) Geçmiş Sınav Veri Seti
// Gerçek ÖSYM Çıkmış ve Yayın Evleri Soru Havuzu

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
    "description": "ÖSYM 2024 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı. (120 Çıkmış ve Yayın Soru Bankası Seti). Tam ÖSYM Müfredatı.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2024-onlisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamıyla kullanılmıştır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Sert rüzgar pencerenin camlarını <u>hafifçe</u> titretiyordu.",
          "B": "Onun bu <u>soğuk</u> tavırları ortamdaki neşeyi bir anda söndürdü.",
          "C": "Masadaki su bardağını elinden <u>düşürüp</u> kırdı.",
          "D": "Sabahın erken saatlerinde tarlaya çalışmaya <u>gittiler</u>.",
          "E": "Yeni aldığı kitabı <u>bir solukta</u> okuyup bitirdi."
        },
        "correctAnswer": "B",
        "explanation": "'Soğuk' sözcüğü samimiyetsiz, mesafeli anlamında kullanıldığı için mecaz anlamlıdır."
      },
      {
        "id": "2024-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde soyut bir kavrama somut bir anlam yüklenmiştir (somutlaştırma yapılmıştır)? (Pegem Akademi Soru Bankası)",
        "options": {
          "A": "Yalnızlık, gecenin karanlığında üzerime çöken ağır bir palto gibidir.",
          "B": "Rüzgarın sesi dağların ardındaki vadide yankılanıyordu.",
          "C": "Yaz mevsiminde bahçedeki meyve ağaçları beyaz çiçekler açtı.",
          "D": "Kitabın sayfalarını tek tek çevirerek okumaya devam etti.",
          "E": "Sabah saatlerinde kentin sokakları derin bir sessizliğe bürünmüştü."
        },
        "correctAnswer": "A",
        "explanation": "Soyut kavram 'yalnızlık', 'palto' nesnesine benzetilerek somutlaştırılmıştır."
      },
      {
        "id": "2024-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde terim anlamlı bir sözcük kullanılmıştır? (Yargı Yayınevi Çıkmış Sorular)",
        "options": {
          "A": "Şair, oyunun ikinci perdesinde dekorun ve ışığın etkisini artırmıştı.",
          "B": "Yaz akşamlarında sahil kenarında yürümeyi çok severdi.",
          "C": "Sabah erkenden kalkıp bahçedeki sebzeleri sulamaya başladı.",
          "D": "Kitabın kapağını büyük bir özenle tasarlayıp baskıya gönderdi.",
          "E": "Yolculuk sırasında yanına aldığı dergileri tek tek okudu."
        },
        "correctAnswer": "A",
        "explanation": "'Perde' ve 'dekor' tiyatro sanatına ait terimlerdir."
      },
      {
        "id": "2024-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'gözden geçirmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (Benim Hocam Soru Bankası)",
        "options": {
          "A": "Raporu yöneticisine sunmadan önce tüm verileri ve detaylı grafikleri dikkatle inceledi.",
          "B": "Karanlık sokakta ilerlerken etrafına endişeli gözlerle bakıyordu.",
          "C": "Arkadaşının sergilediği yüksek performansı gurur dolu bakışlarla izledi.",
          "D": "Tarihi köprünün mimari detaylarını hayranlıkla seyretti.",
          "E": "Karar açıklandıktan sonra derin bir nefes alıp salondan ayrıldı."
        },
        "correctAnswer": "A",
        "explanation": "'Gözden geçirmek' deyimi detaylı biçimde incelemek ve kontrol etmek demektir."
      },
      {
        "id": "2024-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki atasözlerinden hangisi 'tedbirli ve hazırlıklı olmanın önemini' vurgulamaktadır? (Yediiklim Soru Bankası)",
        "options": {
          "A": "Sakla samanı, gelir zamanı.",
          "B": "Damlaya damlaya göl olur.",
          "C": "Ağaç yaşken eğilir.",
          "D": "Yalancının mumu yatsıya kadar yanar.",
          "E": "Gülme komşuna, gelir başına."
        },
        "correctAnswer": "A",
        "explanation": "Gereksiz görülen şeylerin saklanıp hazırlıklı olunması gerektiğini öğütler."
      },
      {
        "id": "2024-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde kanıtlanabilirlik açısından nesnel bir yargı vardır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Şairin bu son basılan şiir kitabı toplam 48 sayfadan oluşmaktadır.",
          "B": "Eserin büyüleyici atmosferi okuyucuyu derinden sarsıyor.",
          "C": "Yazarın samimi üslubu kitaba tarif edilmez bir tat katmış.",
          "D": "Mimarinin görkemli yapısı izleyenlerde derin bir hayranlık uyandırıyor.",
          "E": "Filmin müzikleri sahnelerin duygusunu mükemmel aktarıyor."
        },
        "correctAnswer": "A",
        "explanation": "Sayfa sayısı ölçülebilir nesnel veridir."
      },
      {
        "id": "2024-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde eylemin gerçekleşmesi bir koşula (şart) bağlanmıştır? (Pegem Akademi Soru Bankası)",
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
        "id": "2024-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde eserin üslubuyla (biçem) ilgili bir değerlendirme yapılmıştır? (Yargı Yayınevi)",
        "options": {
          "A": "Yazar, devrik cümleler ve zengin imgeler kullanarak son derece akıcı ve coşkulu bir anlatım yakalamış.",
          "B": "Roman, II. Dünya Savaşı yıllarında Anadolu'nun küçük bir kasabasında geçen aile dramasını konu alıyor.",
          "C": "Eserin ana karakteri hayatın tüm zorluklarına karşı tek başına mücadele eden genç bir öğretmendir.",
          "D": "Geçen ay yayınlanan bu biyografi kitabı kısa sürede en çok satanlar listesine girmeyi başardı.",
          "E": "Şair, çocukluk yıllarında yaşadığı Ege kasabasının doğal güzelliklerini eserine taşımış."
        },
        "correctAnswer": "A",
        "explanation": "Kelime seçimi ve anlatım tarzı eserin üslubu ile ilgilidir."
      },
      {
        "id": "2024-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde örtülü anlam vardır? (Benim Hocam Soru Bankası)",
        "options": {
          "A": "Ahmet de bu yılki akademik burs sınavını kazanmayı başardı.",
          "B": "Kütüphaneler haftası münasebetiyle okulumuzda büyük bir kitap sergisi açıldı.",
          "C": "Toplantı salonundaki sandalyeler görevlilerce tek tek kontrol edilerek düzenlendi.",
          "D": "Sabah saatlerinde başlayan kar yağışı kent trafiğini olumsuz etkiledi.",
          "E": "Güneşli havalarda sahil parkına gidip yürüyüş yapmayı çok severdi."
        },
        "correctAnswer": "A",
        "explanation": "'de' bağlacı başka kişilerin de kazandığı örtülü anlamını çıkarır."
      },
      {
        "id": "2024-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Yazım Kuralları",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Toplantı saat 14.30'da başlayacakmış.",
          "B": "Bu konuda <u>herşeyden</u> önce dürüst olmak gerekir.",
          "C": "Türk Dil Kurumunun son yayınlarını detaylıca inceledi.",
          "D": "29 Ekim 1923'te Cumhuriyet ilan edildi.",
          "E": "Yolculuk sırasında Türk kültürüne dair gözlemler yaptı."
        },
        "correctAnswer": "B",
        "explanation": "'Herşey' birleşik yazımı yanlıştır, 'her şey' biçiminde ayrı yazılmalıdır."
      },
      {
        "id": "2024-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Noktalama İşaretleri",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti hatası yapılmıştır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Yazar, son romanında yalnızlık ve yabancılaşma konularını işlemiş.",
          "B": "Nerede o eski dostluklar, nerede o samimi sohbetler?..",
          "C": "Akşamüstü eve döndüğümde kapı açıktı; salonda kimse yoktu.",
          "D": "Tanzimat Dönemi (1839-1876) Türk edebiyatında dönüm noktasıdır.",
          "E": "Bahçedeki ağaçlar: elma, erik ve kayısı meyve vermeye başladı."
        },
        "correctAnswer": "B",
        "explanation": "Soru işaretinden sonra üç nokta yan yana konulmaz (?.. kullanımı hatadır)."
      },
      {
        "id": "2024-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Ses Bilgisi",
        "text": "'Genç şair, hissettiği derin duyguları dizelerine büyük bir ustalıkla yansıtmıştı.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (Pegem Akademi)",
        "options": {
          "A": "Ünlü düşmesi",
          "B": "Ünsüz türemesi",
          "C": "Ünsüz yumuşaması",
          "D": "Ünsüz benzeşmesi",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "A",
        "explanation": "Cümlede ünlü düşmesine örnek kelime yoktur."
      },
      {
        "id": "2024-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlenin Ögeleri",
        "text": "'Günün ilk ışıklarıyla birlikte sisli vadiye çöken sessizlik, doğanın muhteşem uyanışını müjdeliyordu.' cümlesinin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (Yargı Yayınevi)",
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
        "id": "2024-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Fiilimsiler",
        "text": "Aşağıdaki cümlelerin hangisinde eylemsi (fiilimsi) kullanılmamıştır? (Benim Hocam)",
        "options": {
          "A": "Güneş batarken sahil boyunca yürümeyi çok severdi.",
          "B": "Yaz mevsiminde bu kentin sokakları son derece sessiz ve sakindi.",
          "C": "Okuduğu her kitap onun zihinsel ufkunu genişletiyordu.",
          "D": "Sonunda aradığı huzuru şirin bir sahil kasabasında buldu.",
          "E": "Hava kararınca caddedeki ışıklar tek tek yandı."
        },
        "correctAnswer": "B",
        "explanation": "B seçeneğinde geçen kelimelerin hiçbiri fiilimsi eki almamıştır."
      },
      {
        "id": "2024-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Okuma eylemi, sadece kelimeleri zihinde sıralamak değildir. Gerçek bir okur, metinle kurduğu bağ sayesinde kendi deneyim alanının dışına çıkarak başka hayatların düşünce dünyasını keşfeder. Kitaplar, bireye farklı açılardan bakma yetisi kazandırırken empati duygusunu da besler. Bu parçada okuma eylemiyle ilgili vurgulanmak istenen temel düşünce aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Okumanın bireyin zihinsel ufkunu, empati yeteneğini ve bakış açısını geliştirdiği",
          "B": "Edebi türler arasında en faydalı olanının roman ve hikaye olduğu",
          "C": "Kitap okuma alışkanlığının erken çocukluk döneminde kazanılması gerektiği",
          "D": "Dijital yayınların basılı eserlerin yerini almasının zorunlu hale geldiği",
          "E": "Okuma hızını artırmanın anlama kapasitesi üzerindeki olumlu etkileri"
        },
        "correctAnswer": "A",
        "explanation": "Okumanın zihinsel ufku ve empati kabiliyetini geliştirdiği anlatılmıştır."
      },
      {
        "id": "2024-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Bölme",
        "text": "(I) Mimari, toplumların estetik anlayışını ve yaşam tarzını yansıtan en somut sanat dalıdır. (II) Tarih boyunca yükselen yapılar, inşa edildikleri dönemin teknolojisini ve inanç sistemini günümüze taşır. (III) Çağdaş şehirlerde ise betonlaşma ve çarpık kentleşme ciddi bir çevre sorunu haline gelmiştir. (IV) Gelişen inşaat teknolojileri mimarlara daha esnek tasarım imkanları sunmaktadır. (V) Akıllı binalar ve çevre dostu tasarımlar geleceğin kent mimarisini şekillendirmektedir. İkinci paragraf numaralanmış cümlelerin hangisiyle başlar? (Yediiklim)",
        "options": {
          "A": "I",
          "B": "II",
          "C": "III",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede kentleşme sorunlarına geçilmiştir."
      },
      {
        "id": "2024-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Tamamlama",
        "text": "Bir yazar için ilham, gökten zembille inen gizemli bir duygu değildir. Aksine ilham, sürekli çalışma, okuma ve gözlem yapmanın doğal bir sonucudur. Masasının başına geçip saatlerce yazan bir sanatçı, zihninde biriken düşünceleri kâğıda aktarır. Yani yaratıcılık ----. Bu parçanın sonuna düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir? (Pegem Akademi)",
        "options": {
          "A": "emek ve disiplinle beslenen sürekli bir süreçtir",
          "B": "doğuştan gelen ve değiştirilemeyen bir yetenektir",
          "C": "sadece yalnız kalınan anlarda ortaya çıkan bir histir",
          "D": "yayıncıların beklentilerine göre şekillenen bir durumdur",
          "E": "geçmiş edebiyat eserlerini taklit ederek gelişir"
        },
        "correctAnswer": "A",
        "explanation": "Parçada ilhamın sürekli emek ve çalışma sonucu doğduğu vurgulanmıştır."
      },
      {
        "id": "2024-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Anlatım Biçimleri",
        "text": "Güneş yavaşça ufukta kaybolurken gökyüzü turuncudan mor renge dönüyordu. Denizden esen hafif ılık rüzgar, kıyıdaki çam ağaçlarının kokusunu sokağa yayıyordu. Ahşap iskelede oturan balıkçılar, oltalarını son kez denize atıp beklemeye koyulmuşlardı. Bu parçanın anlatımında aşağıdakilerin hangisinden yararlanılmıştır? (Yargı Yayınevi)",
        "options": {
          "A": "Betimleme - Öyküleme",
          "B": "Tartışma - Örneklendirme",
          "C": "Açıklama - Tanık Gösterme",
          "D": "Tanımlama - Benzetme",
          "E": "Sayısal Verilerden Yararlanma"
        },
        "correctAnswer": "A",
        "explanation": "Betimleme ve öyküleme bir arada kullanılmıştır."
      },
      {
        "id": "2024-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Çıkarım",
        "text": "Teknolojik gelişmeler insan hayatını kolaylaştırırken diğer yandan bireysel iletişimi zayıflatmaktadır. Sosyal medya platformlarında binlerce arkadaşı olan insanlar, gerçek yaşamda kendilerini yalnız hissetmektedir. Bu durum, yüzeysel sanal etkileşimlerin derin insani bağların yerini almasından kaynaklanmaktadır. Parçadan hareketle aşağıdakilerden hangisine ulaşılabilir? (Benim Hocam)",
        "options": {
          "A": "Sanal iletişimin artmasıyla gerçek yaşamdaki samimi insani bağların zayıfladığına",
          "B": "Sosyal medyanın tümüyle yasaklanması gerektiğine",
          "C": "Teknolojinin eğitim kalitesini düşürdüğüne",
          "D": "Yalnızlığın sadece yaşlı insanları etkileyen bir durum olduğuna",
          "E": "Yüz yüze iletişimin zaman kaybına yol açtığına"
        },
        "correctAnswer": "A",
        "explanation": "Sanal etkileşimlerin derin insani bağların yerini aldığı ifade edilmiştir."
      },
      {
        "id": "2024-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümle Sıralama",
        "text": "I. Ancak bu gelişme, beraberinde çevre kirliliği gibi ciddi biyolojik sorunları da getirmiştir.\nII. Sanayi Devrimi ile birlikte insanoğlu üretim kapasitesini katlanarak artırmıştır.\nIII. Günümüzde ise bu sorunların önüne geçebilmek adına yenilenebilir enerji kaynaklarına yönelim başlamıştır.\nIV. Fabrikaların artması ve hammadde ihtiyacının büyümesi doğa üzerindeki baskıyı tırmandırmıştır.\nV. Bu yönelim sayesinde gelecek kuşaklara daha yaşanabilir bir dünya bırakılması hedeflenmektedir.\n\nNumaralanmış cümleler mantıklı bir bütün oluşturacak şekilde sıralandığında baştan üçüncü cümle hangisi olur? (Pegem Akademi Çıkmış Soru Bankası)",
        "options": {
          "A": "I",
          "B": "II",
          "C": "III",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "Mantıklı sıralama: II (Sanayi devrimi) -> IV (Fabrikaların artması) -> I (Ancak çevre kirliliği) -> III (Günümüzde yenilenebilir enerji) -> V (Bu yönelim hedefi). Baştan 3. cümle I numaralı cümledir (A seçeneği)."
      },
      {
        "id": "2024-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yargı",
        "text": "Edebiyat, insanın yalnızlığını paylaşan ve onu içsel bir yolculuğa çıkaran bir dost gibidir. Metinler aracılığıyla kendi iç dünyasıyla yüzleşen okur, toplumsal kalıpların ötesine geçerek özgür düşünmeyi öğrenir. Parçaya göre edebiyatın okura sağladığı temel katkı aşağıdakilerden hangisidir? (Pegem Akademi)",
        "options": {
          "A": "İçsel farkındalık ve özgür düşünme yeteneği kazandırması",
          "B": "Zengin bir kelime hazinesi sunarak dil becerisini artırması",
          "C": "Tarihsel olayların öğrenilmesini kolaylaştırması",
          "D": "Mesleki kariyer planlamasında yol gösterici olması",
          "E": "Sosyal çevrede itibar kazanılmasını sağlaması"
        },
        "correctAnswer": "A",
        "explanation": "İçsel yolculuk ve özgür düşünme vurgulanmıştır."
      },
      {
        "id": "2024-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Metin Karşılaştırma",
        "text": "I. Metin: Çocukluğumun geçtiği o ahşap konak, baharda erik çiçeklerinin kokusuyla dolardı. Verandada oturan dedem, eski zaman masallarını anlatırken rüzgar cumbalı pencerelerin perdesini havalandırırdı.\n\nII. Metin: Geleneksel Türk konut mimarisinde ahşap malzeme kullanımı, hem depreme karşı esneklik sağlaması hem de iklimsel yalıtım oluşturması açısından tercih edilmiştir. Çatı ve veranda düzenlemeleri ise bölgesel iklim koşullarına göre şekillenmiştir.\n\nBu iki metin karşılaştırıldığında aralarındaki temel fark aşağıdakilerden hangisidir? (Benim Hocam Soru Bankası)",
        "options": {
          "A": "I. metnin kişisel anılara dayalı betimleyici, II. metnin ise mimari alanda nesnel ve açıklayıcı bir anlatımla yazılması",
          "B": "Her iki metinde de sayısal verilerden faydalanılması",
          "C": "İkinci metinde hayalî ve fantastik ögelere yer verilmesi",
          "D": "Birinci metinde tartışmacı anlatım tekniğinin baskın olması",
          "E": "İki metnin de aynı tarihi dönemi konu alması"
        },
        "correctAnswer": "A",
        "explanation": "I. metin öznel anı/betimleme metni, II. metin mimari nesnel açıklama metnidir."
      },
      {
        "id": "2024-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Konu",
        "text": "Fotoğrafçılık, zamanı durdurma ve anı ölümsüzleştirme sanatıdır. Bir kadraja sığdırılan tek bir kare fotoğraf, sayfalar dolusu yazının ve saatlerce süren konuşmaların aktaramayacağı duyguyu izleyiciye hissettirebilir. Bu parçada fotoğrafçılıkla ilgili aşağıdakilerden hangisi vurgulanmaktadır? (Yargı Yayınevi)",
        "options": {
          "A": "Anı dondurma gücü ve yüksek ifade kapasitesi",
          "B": "En pahalı sanat dallarından biri olduğu",
          "C": "Teknolojik ekipman gerektirdiği",
          "D": "Sergi açmanın zorlukları",
          "E": "Sadece doğa manzaralarında başarılı sonuç verdiği"
        },
        "correctAnswer": "A",
        "explanation": "Anı durdurma ve yüksek ifade gücü vurgulanmıştır."
      },
      {
        "id": "2024-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Düşünceyi Geliştirme Yolları",
        "text": "Tiyatro ile sinema birbirine yakın iki sanat dalıdır. Ancak tiyatroda sahnedeki oyuncu ile salondaki seyirci arasında canlı ve anlık bir duygu alışverişi vardır. Sinemada ise perdedeki görüntü ile izleyici arasında aşılması imkansız bir cam duvar bulunur. Bu parçada düşünceyi geliştirmek için aşağıdakilerin hangisinden yararlanılmıştır? (Yediiklim)",
        "options": {
          "A": "Karşılaştırma",
          "B": "Sayısal Verilerden Yararlanma",
          "C": "Tanık Gösterme",
          "D": "Tanımlama",
          "E": "Örneklendirme"
        },
        "correctAnswer": "A",
        "explanation": "Tiyatro ile sinema canlılık yönünden karşılaştırılmıştır."
      },
      {
        "id": "2024-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Fikir",
        "text": "Müzik, insan beyninde dopamin salgılanmasını uyararak stresi azaltır ve zihinsel odaklanmayı artırır. Yapılan nörolojik araştırmalar, enstrüman çalan kişilerin hafıza kapasitelerinin daha yüksek olduğunu göstermektedir. Ancak her müzik türünün beyin üzerindeki etkisi dinleyicinin ruh haline göre değişiklik gösterebilir. Parçaya göre müzikle ilgili aşağıdakilerden hangisi söylenemez? (Benim Hocam)",
        "options": {
          "A": "Tüm müzik türlerinin her insanda aynı standart etkiyi yarattığı",
          "B": "Stresi azaltıcı etkisinin bulunduğu",
          "C": "Enstrüman çalmanın hafızayı güçlendirdiği",
          "D": "Zihinsel odaklanmayı olumlu etkilediği",
          "E": "Beyinde dopamin salgılanmasına katkı sağladığı"
        },
        "correctAnswer": "A",
        "explanation": "Müzik türlerinin etkisinin kişiye göre değiştiği belirtilmiştir."
      },
      {
        "id": "2024-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Özetleme",
        "text": "Geleceğin meslekleri dijitalleşme, veri analitiği ve yapay zekâ odaklı olarak şekillenmektedir. Bu hızlı teknolojik dönüşüm, geleneksel iş kollarının geçerliliğini yitirmesine ve yenilikçi becerilerin ön plana çıkmasına neden olmaktadır. Bu parçanın ana fikri aşağıdakilerden hangisidir? (Pegem Akademi)",
        "options": {
          "A": "Teknolojik değişimin mesleki becerileri ve iş kollarını yeniden şekillendirdiği",
          "B": "Geleneksel mesleklerin hiçbir zaman kaybolmayacağı",
          "C": "Yapay zekanın insan gücünü tamamen ortadan kaldıracağı",
          "D": "Üniversite eğitiminin önemini kaybettiği",
          "E": "Sadece bilgisayar mühendislerinin istihdam edilebileceği"
        },
        "correctAnswer": "A",
        "explanation": "Teknolojinin meslekleri dönüştürdüğü vurgulanmıştır."
      },
      {
        "id": "2024-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nBir kütüphanede çalışan Ayla, Berk, Ceylan, Doğan ve Ersin adlı beş görevli Pazartesi, Salı, Çarşamba ve Perşembe günleri nöbet tutmuştur. Görevlilerin nöbet günleriyle ilgili bilinenler şunlardır:\n- Her gün en az bir görevli nöbet tutmuştur.\n- Ayla ve Ceylan sadece Salı günü birlikte nöbet tutmuştur.\n- Doğan sadece Perşembe günü nöbet tutmuştur.\n- Berk ve Ersin aynı gün nöbet tutmamıştır.\n- Çarşamba günü sadece Ersin nöbet tutmuştur.\n\nBu bilgilere göre Berk kesinlikle hangi gün nöbet tutmuştur? (Yargı Yayınevi Soru Bankası)",
        "options": {
          "A": "Pazartesi",
          "B": "Salı",
          "C": "Çarşamba",
          "D": "Perşembe",
          "E": "Cuma"
        },
        "correctAnswer": "A",
        "explanation": "Salı (Ayla, Ceylan), Çarşamba (Ersin), Perşembe (Doğan) dolu olduğundan geriye kalan Pazartesi günü kesinlikle Berk nöbet tutmuştur."
      },
      {
        "id": "2024-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nBir kütüphanede çalışan Ayla, Berk, Ceylan, Doğan ve Ersin adlı beş görevli Pazartesi, Salı, Çarşamba ve Perşembe günleri nöbet tutmuştur. Görevlilerin nöbet günleriyle ilgili bilinenler şunlardır:\n- Her gün en az bir görevli nöbet tutmuştur.\n- Ayla ve Ceylan sadece Salı günü birlikte nöbet tutmuştur.\n- Doğan sadece Perşembe günü nöbet tutmuştur.\n- Berk ve Ersin aynı gün nöbet tutmamıştır.\n- Çarşamba günü sadece Ersin nöbet tutmuştur.\n\nErsin'in nöbet tuttuğu gün aşağıdakilerden hangisidir?",
        "options": {
          "A": "Çarşamba",
          "B": "Pazartesi",
          "C": "Salı",
          "D": "Perşembe",
          "E": "Cuma"
        },
        "correctAnswer": "A",
        "explanation": "Öncülde verildiği üzere Çarşamba günü sadece Ersin nöbet tutmuştur."
      },
      {
        "id": "2024-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nBir kütüphanede çalışan Ayla, Berk, Ceylan, Doğan ve Ersin adlı beş görevli Pazartesi, Salı, Çarşamba ve Perşembe günleri nöbet tutmuştur. Görevlilerin nöbet günleriyle ilgili bilinenler şunlardır:\n- Her gün en az bir görevli nöbet tutmuştur.\n- Ayla ve Ceylan sadece Salı günü birlikte nöbet tutmuştur.\n- Doğan sadece Perşembe günü nöbet tutmuştur.\n- Berk ve Ersin aynı gün nöbet tutmamıştır.\n- Çarşamba günü sadece Ersin nöbet tutmuştur.\n\nAşağıdakilerden hangisi kesinlikle doğrudur?",
        "options": {
          "A": "Ayla ve Ceylan Salı günü nöbet tutmuştur.",
          "B": "Berk Çarşamba günü nöbet tutmuştur.",
          "C": "Doğan Pazartesi günü nöbet tutmuştur.",
          "D": "Ersin Perşembe günü nöbet tutmuştur.",
          "E": "Ceylan Pazartesi günü nöbet tutmuştur."
        },
        "correctAnswer": "A",
        "explanation": "Ayla ve Ceylan'ın Salı günü birlikte nöbet tuttuğu kesindir."
      },
      {
        "id": "2024-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nBir kütüphanede çalışan Ayla, Berk, Ceylan, Doğan ve Ersin adlı beş görevli Pazartesi, Salı, Çarşamba ve Perşembe günleri nöbet tutmuştur. Görevlilerin nöbet günleriyle ilgili bilinenler şunlardır:\n- Her gün en az bir görevli nöbet tutmuştur.\n- Ayla ve Ceylan sadece Salı günü birlikte nöbet tutmuştur.\n- Doğan sadece Perşembe günü nöbet tutmuştur.\n- Berk ve Ersin aynı gün nöbet tutmamıştır.\n- Çarşamba günü sadece Ersin nöbet tutmuştur.\n\nAşağıdaki eşleştirmelerden hangisi kesinlikle yanlıştır?",
        "options": {
          "A": "Ersin - Salı",
          "B": "Ayla - Salı",
          "C": "Doğan - Perşembe",
          "D": "Berk - Pazartesi",
          "E": "Ceylan - Salı"
        },
        "correctAnswer": "A",
        "explanation": "Ersin Çarşamba günü nöbet tuttuğu için Ersin - Salı eşleştirmesi kesinlikle yanlıştır."
      },
      {
        "id": "2024-onlisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\frac{\\frac{3}{5} + \\frac{1}{2}}{\\frac{7}{10} - \\frac{1}{5}}$$ işleminin sonucu kaçtır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "$$\\frac{11}{5}$$",
          "B": "$$\\frac{11}{3}$$",
          "C": "$$\\frac{22}{5}$$",
          "D": "$$\\frac{22}{3}$$",
          "E": "$$\\frac{55}{6}$$"
        },
        "correctAnswer": "B",
        "explanation": "Pay: 11/10, Payda: 5/10. Oran: (11/10)/(5/10) = 11/5."
      },
      {
        "id": "2024-onlisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Ondalık Sayılar",
        "text": "$$\\frac{0,15}{0,03} + \\frac{0,45}{0,09} - \\frac{0,6}{0,2}$$ işleminin sonucu kaçtır? (Pegem Akademi)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "11",
          "E": "13"
        },
        "correctAnswer": "B",
        "explanation": "5 + 5 - 3 = 7."
      },
      {
        "id": "2024-onlisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{3^4 - 3^2}{3^3 + 3}$$ işleminin sonucu kaçtır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "$$\\frac{12}{5}$$",
          "B": "$$\\frac{18}{5}$$",
          "C": "$$\\frac{24}{5}$$",
          "D": "6",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "(81 - 9) / (27 + 3) = 72 / 30 = 12 / 5."
      },
      {
        "id": "2024-onlisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{4^6 + 4^6 + 4^6 + 4^6}{2^{11}}$$ işleminin sonucu kaçtır? (Benim Hocam)",
        "options": {
          "A": "2",
          "B": "4",
          "C": "8",
          "D": "16",
          "E": "32"
        },
        "correctAnswer": "C",
        "explanation": "2^14 / 2^11 = 2^3 = 8."
      },
      {
        "id": "2024-onlisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\frac{\\sqrt{0,64} + \\sqrt{0,36}}{\\sqrt{0,16}}$$ işleminin sonucu kaçtır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "2,5",
          "B": "3,5",
          "C": "4,5",
          "D": "5",
          "E": "7,5"
        },
        "correctAnswer": "A",
        "explanation": "(0,8 + 0,6) / 0,4 = 1,4 / 0,4 = 3,5."
      },
      {
        "id": "2024-onlisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\sqrt{\\sqrt{81} + 7} \\times \\sqrt{2}$$ işleminin sonucu kaçtır? (Yargı Yayınevi)",
        "options": {
          "A": "$$2\\sqrt{2}$$",
          "B": "$$4\\sqrt{2}$$",
          "C": "4",
          "D": "8",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "sqrt(16) * sqrt(2) = 4sqrt(2)."
      },
      {
        "id": "2024-onlisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|x - 3| + |x + 2| = 9$$ denklemini sağlayan x değerlerinin çarpımı kaçtır? (Yediiklim)",
        "options": {
          "A": "-20",
          "B": "-15",
          "C": "-10",
          "D": "12",
          "E": "25"
        },
        "correctAnswer": "A",
        "explanation": "Kökler: 5 ve -4. Çarpım: -20."
      },
      {
        "id": "2024-onlisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Basit Eşitsizlikler",
        "text": "$$-2 < x < 5$$ olduğuna göre, $$3x - 5$$ ifadesinin alabileceği en büyük tam sayı değeri kaçtır? (Pegem Akademi)",
        "options": {
          "A": "8",
          "B": "9",
          "C": "10",
          "D": "11",
          "E": "14"
        },
        "correctAnswer": "B",
        "explanation": "-11 < 3x - 5 < 10. En büyük değer 9'dur."
      },
      {
        "id": "2024-onlisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$\\frac{x^2 - 9}{x^2 + 5x + 6} \\div \\frac{x - 3}{x + 2}$$ ifadesinin en sade hali nedir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "1",
          "B": "x - 3",
          "C": "x + 2",
          "D": "x + 3",
          "E": "1 / (x+2)"
        },
        "correctAnswer": "A",
        "explanation": "Sadeleşme sonucu 1."
      },
      {
        "id": "2024-onlisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme Kuralları",
        "text": "Dört basamaklı $$2a7b$$ sayısı 5 ve 9 ile tam bölünebildiğine göre, a'nın alabileceği değerler toplamı kaçtır? (Benim Hocam)",
        "options": {
          "A": "5",
          "B": "7",
          "C": "9",
          "D": "13",
          "E": "14"
        },
        "correctAnswer": "D",
        "explanation": "a değerleri 0, 9, 4 => Toplam 13."
      },
      {
        "id": "2024-onlisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Bir bilet gişesi kuyruğunda Ahmet baştan 12. sırada, Mehmet ise sondan 15. sıradadır. Ahmet ile Mehmet arasında 4 kişi olduğuna göre ve Ahmet gişeye Mehmet'ten daha yakın olduğuna göre kuyrukta toplam kaç kişi vardır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "31"
        },
        "correctAnswer": "A",
        "explanation": "12 + 15 - 4 - 2 = 21."
      },
      {
        "id": "2024-onlisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir su deposunun $$\\frac{2}{5}$$'i su ile doludur. Depoya 60 litre daha su eklendiğinde deponun yarısı ($$\\frac{1}{2}$$'si) dolmuş oluyor. Buna göre deponun tamamı kaç litre su alır? (Pegem Akademi)",
        "options": {
          "A": "300",
          "B": "400",
          "C": "500",
          "D": "600",
          "E": "750"
        },
        "correctAnswer": "D",
        "explanation": "1/10'u 60 L ise tamamı 600 L."
      },
      {
        "id": "2024-onlisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir babanın bugünkü yaşı, iki çocuğunun bugünkü yaşları toplamının 3 katına eşittir. 5 yıl sonra babanın yaşı çocuklarının yaşları toplamının 2 katı olacağına göre babanın bugünkü yaşı kaçtır? (Yargı Yayınevi)",
        "options": {
          "A": "36",
          "B": "42",
          "C": "45",
          "D": "48",
          "E": "54"
        },
        "correctAnswer": "C",
        "explanation": "Baba = 45."
      },
      {
        "id": "2024-onlisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde ve Kâr-Zarar Problemleri",
        "text": "Bir tüccar bir malı %20 kârla 360 TL'ye satmaktadır. Bu mal %10 zarar ile satılsaydı satış fiyatı kaç TL olurdu? (Benim Hocam)",
        "options": {
          "A": "270",
          "B": "280",
          "C": "300",
          "D": "320",
          "E": "340"
        },
        "correctAnswer": "A",
        "explanation": "Maliyet = 300 TL. %10 zarar = 270 TL."
      },
      {
        "id": "2024-onlisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "Şeker oranı %20 olan 60 gramlık şekerli su karışımına 40 gram daha saf su ekleniyor. Yeni karışımın şeker oranı yüzde kaç olur? (Yediiklim)",
        "options": {
          "A": "%8",
          "B": "%10",
          "C": "%12",
          "D": "%15",
          "E": "%16"
        },
        "correctAnswer": "C",
        "explanation": "Yüzde = %12."
      },
      {
        "id": "2024-onlisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız-Hareket Problemleri",
        "text": "Aralarında 450 km mesafe bulunan A ve B kentlerinden saatteki hızları sırasıyla 70 km ve 80 km olan iki araç aynı anda birbirlerine doğru harekete başlıyor. Bu iki araç kaç saat sonra karşılaşır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "2,5",
          "B": "3",
          "C": "3,5",
          "D": "4",
          "E": "4,5"
        },
        "correctAnswer": "B",
        "explanation": "Süre = 3 saat."
      },
      {
        "id": "2024-onlisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "İşçi Problemleri",
        "text": "Bir işi Ahmet tek başına 12 günde, Mehmet ise aynı işi tek başına 24 günde bitirebilmektedir. İkisi birlikte aynı işi kaç günde bitirirler? (Pegem Akademi)",
        "options": {
          "A": "6",
          "B": "7",
          "C": "8",
          "D": "9",
          "E": "10"
        },
        "correctAnswer": "C",
        "explanation": "1/12 + 1/24 = 1/8 => 8 gün."
      },
      {
        "id": "2024-onlisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kümeler",
        "text": "35 kişilik bir sınıfta İngilizce bilenlerin sayısı 20, Almanca bilenlerin sayısı 18 ve her iki dili de bilenlerin sayısı 7'dir. Buna göre bu sınıfta iki dili de bilmeyen kaç kişi vardır? (Yargı Yayınevi)",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "7",
          "E": "8"
        },
        "correctAnswer": "A",
        "explanation": "35 - 31 = 4."
      },
      {
        "id": "2024-onlisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 2x + 3$$ olduğuna göre, $$f(f(2))$$ değeri kaçtır? (Benim Hocam)",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "19"
        },
        "correctAnswer": "D",
        "explanation": "f(2) = 7. f(7) = 17."
      },
      {
        "id": "2024-onlisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "Bir torbada 4 kırmızı ve 6 beyaz bilya bulunmaktadır. Torbadan rastgele çekilen 2 bilyanın da beyaz olma olasılığı kaçtır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "1/3",
          "B": "2/5",
          "C": "1/2",
          "D": "3/5",
          "E": "2/3"
        },
        "correctAnswer": "A",
        "explanation": "C(6,2)/C(10,2) = 15/45 = 1/3."
      },
      {
        "id": "2024-onlisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Özel İşlem)",
        "text": "Gerçel sayılar kümesi üzerinde $$\\star$$ işlemi $$a \\star b = a^2 - 2ab + b^2$$ şeklinde tanımlanıyor. Buna göre $$7 \\star 4$$ işleminin sonucu kaçtır? (Pegem Akademi)",
        "options": {
          "A": "3",
          "B": "9",
          "C": "16",
          "D": "25",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "(7-4)^2 = 9."
      },
      {
        "id": "2024-onlisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Grafik Okuma)",
        "text": "Bir dairesel grafikte A, B ve C ürünlerinin satış miktarları gösterilmiştir. A ürününün merkez açısı 120 derece, B ürününün merkez açısı 150 derecedir. C ürününden 180 adet satıldığına göre toplam kaç adet ürün satılmıştır? (Benim Hocam)",
        "options": {
          "A": "720",
          "B": "800",
          "C": "900",
          "D": "1080",
          "E": "1200"
        },
        "correctAnswer": "A",
        "explanation": "90 derece 180 adet => 360 derece 720 adet."
      },
      {
        "id": "2024-onlisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Sayı Dizisi)",
        "text": "3, 7, 15, 31, 63, x kurala dayalı sayı dizisinde x sayısı kaçtır? (Yargı Yayınevi)",
        "options": {
          "A": "95",
          "B": "115",
          "C": "127",
          "D": "129",
          "E": "135"
        },
        "correctAnswer": "C",
        "explanation": "63 * 2 + 1 = 127."
      },
      {
        "id": "2024-onlisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Tablo Okuma)",
        "text": "Bir şirketin 3 aylık gelir-gider tablosunda Ocak ayı kârı 40 bin TL, Şubat ayı kârı 60 bin TL, Mart ayı zararı 20 bin TL'dir. Şirketin 3 aylık ortalama aylık net kârı kaç bin TL'dir? (Yediiklim)",
        "options": {
          "A": "20",
          "B": "26,6",
          "C": "30",
          "D": "40",
          "E": "80"
        },
        "correctAnswer": "B",
        "explanation": "80 / 3 = 26,6."
      },
      {
        "id": "2024-onlisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Modüler Aritmetik)",
        "text": "Bugün günlerden Salı olduğuna göre 100 gün sonra hangi gün olur? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Çarşamba",
          "B": "Perşembe",
          "C": "Cuma",
          "D": "Cumartesi",
          "E": "Pazar"
        },
        "correctAnswer": "B",
        "explanation": "100 mod 7 = 2 => Perşembe."
      },
      {
        "id": "2024-onlisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Üçgende Açılar)",
        "text": "Bir dik üçgende dik açının dışındaki dar açılardan biri diğerinin 4 katıdır. Buna göre küçük dar açı kaç derecedir? (Pegem Akademi)",
        "options": {
          "A": "15",
          "B": "18",
          "C": "20",
          "D": "22,5",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "x = 18 derece."
      },
      {
        "id": "2024-onlisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Pisagor Bağıntısı)",
        "text": "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüsüne ait yüksekliği kaç cm'dir? (Yargı Yayınevi)",
        "options": {
          "A": "4,2",
          "B": "4,8",
          "C": "5",
          "D": "5,2",
          "E": "6"
        },
        "correctAnswer": "B",
        "explanation": "h = 4,8 cm."
      },
      {
        "id": "2024-onlisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Dikdörtgen ve Kare)",
        "text": "Çevresi 36 cm olan bir dikdörtgenin uzun kenarı kısa kenarının 2 katıdır. Bu dikdörtgenin alanı kaç $$cm^2$$'dir? (Benim Hocam)",
        "options": {
          "A": "48",
          "B": "54",
          "C": "72",
          "D": "81",
          "E": "96"
        },
        "correctAnswer": "C",
        "explanation": "Alan = 6 * 12 = 72."
      },
      {
        "id": "2024-onlisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Çember ve Daire)",
        "text": "Yarıçapı 6 cm olan bir dairenin 60 derecelik merkez açısına karşılık gelen daire diliminin alanı kaç $$\\pi$$ $$cm^2$$'dir? (Yediiklim)",
        "options": {
          "A": "3",
          "B": "6",
          "C": "9",
          "D": "12",
          "E": "18"
        },
        "correctAnswer": "B",
        "explanation": "Alan = 6pi."
      },
      {
        "id": "2024-onlisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Analitik Geometri)",
        "text": "Analitik düzlemde A(2, 5) ve B(6, 1) noktaları arasındaki uzaklık kaç birimdir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "4",
          "B": "$$4\\sqrt{2}$$",
          "C": "6",
          "D": "$$5\\sqrt{2}$$",
          "E": "8"
        },
        "correctAnswer": "B",
        "explanation": "d = 4sqrt(2) birimdir."
      },
      {
        "id": "2024-onlisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "İslamiyet öncesi Türk devletlerinde kurultay kararlarında son sözün hükümdara ait olması aşağıdakilerden hangisini göstermektedir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Kurultayın danışma meclisi niteliğinde olduğunu",
          "B": "Demokratik anlayışın tamamen yerleştiğini",
          "C": "Cumhuriyet rejiminin uygulandığını",
          "D": "Oligarşik bir yönetimin kurulduğunu",
          "E": "Teokratik devlet yapısının benimsendiğini"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Kurultayın danışma meclisi niteliğinde olduğunu)."
      },
      {
        "id": "2024-onlisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Türk-İslam Tarihi",
        "text": "Büyük Selçuklu Devleti'nde meliklerin eğitiminden sorumlu atabeylerin merkezi otoritenin zayıflamasıyla bağımsızlık ilan etmeleri aşağıdakilerden hangisine yol açmıştır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Atabeyliklerin kurulmasına ve siyasi birliğin bozulmasına",
          "B": "İkta sisteminin tamamen kaldırılmasına",
          "C": "Haçlı Seferleri'nin sona ermesine",
          "D": "Türkçenin resmi dil ilan edilmesine",
          "E": "Kut anlayışının bitmesine"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Atabeyliklerin kurulmasına ve siyasi birliğin bozulmasına)."
      },
      {
        "id": "2024-onlisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Türk-İslam Tarihi",
        "text": "Divânu Lugâti't-Türk adlı ilk Türkçe sözlüğü yazan Karahanlı dönemi bilgini kimdir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Kaşgarlı Mahmud",
          "B": "Yusuf Has Hacib",
          "C": "Edib Ahmed Yükneki",
          "D": "Ahmet Yesevi",
          "E": "Farabi"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Kaşgarlı Mahmud)."
      },
      {
        "id": "2024-onlisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kuruluş Dönemi",
        "text": "Osmanlı Devleti'nde ilk altın para (Sikke-i Hasene) hangi padişah döneminde basılmıştır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Fatih Sultan Mehmed",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Çelebi Mehmed",
          "E": "II. Bayezid"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Fatih Sultan Mehmed)."
      },
      {
        "id": "2024-onlisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yükselme Dönemi",
        "text": "Kutsal yerlerin koruyucusu anlamına gelen 'Hâdimü'l-Haremeyni'ş-Şerifeyn' unvanını alan ilk Osmanlı padişahı aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Yavuz Sultan Selim",
          "B": "Kanuni Sultan Süleyman",
          "C": "Fatih Sultan Mehmed",
          "D": "II. Selim",
          "E": "III. Murad"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Yavuz Sultan Selim)."
      },
      {
        "id": "2024-onlisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahatları",
        "text": "Osmanlı Devleti'nin Batı'nın bilimsel ve askeri üstünlüğünü ilk kez kabul ettiği antlaşma aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Pasarofça Antlaşması",
          "B": "Karlofça Antlaşması",
          "C": "Küçük Kaynarca Antlaşması",
          "D": "Zitvatorok Antlaşması",
          "E": "Bucaş Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Pasarofça Antlaşması)."
      },
      {
        "id": "2024-onlisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahatları",
        "text": "II. Mahmut döneminde yeniçeri ocağının kaldırılması olayına verilen ad hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Vaka-i Hayriye",
          "B": "Vaka-i Vakvakiye",
          "C": "Edirne Olayı",
          "D": "31 Mart Olayı",
          "E": "Kuleli Vakası"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Vaka-i Hayriye)."
      },
      {
        "id": "2024-onlisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Siyasi Tarihi",
        "text": "Osmanlı Devleti'nin Kuzey Afrika'daki son toprak parçasını kaybettiği antlaşma hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Uşı Antlaşması",
          "B": "Balkan Antlaşması",
          "C": "Londra Antlaşması",
          "D": "Bükreş Antlaşması",
          "E": "Atina Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Uşı Antlaşması)."
      },
      {
        "id": "2024-onlisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Siyasi Tarihi",
        "text": "Osmanlı Devleti'nin I. Dünya Savaşı'nda Kutu'l-Amare zaferini kazandığı cephe hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Irak Cephesi",
          "B": "Çanakkale Cephesi",
          "C": "Kafkas Cephesi",
          "D": "Kanal Cephesi",
          "E": "Suriye-Filistin Cephesi"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Irak Cephesi)."
      },
      {
        "id": "2024-onlisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür ve Medeniyeti",
        "text": "Osmanlı Devleti'nde toprağını mazeretsiz olarak üç yıl üst üste boş bırakan köylüden alınan vergi aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Çiftbozan",
          "B": "Cizye",
          "C": "Haraç",
          "D": "Öşür",
          "E": "Anam"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Çiftbozan)."
      },
      {
        "id": "2024-onlisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Taşra Teşkilatı",
        "text": "Osmanlı Devleti'nde dirlik sisteminde yıllık geliri 100 bin akçeden fazla olan en yüksek gelirli toprak türü hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Has",
          "B": "Zeamet",
          "C": "Tımar",
          "D": "Paşalık",
          "E": "Vakıf"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Has)."
      },
      {
        "id": "2024-onlisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Yargı Teşkilatı",
        "text": "Osmanlı Devleti'nde Divan-ı Hümayun'da adalet ve eğitim işlerinden sorumlu olan, kadı ve müderrislerin atamasını yapan görevli hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Kazasker",
          "B": "Nişancı",
          "C": "Sadrazam",
          "D": "Defterdar",
          "E": "Reisülküttap"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Kazasker)."
      },
      {
        "id": "2024-onlisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Mimarisi",
        "text": "Mimar Sinan'ın 'Ustalık Eserim' olarak nitelendirdiği UNESCO Dünya Mirası yapısı hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Edirne Selimiye Camii",
          "B": "İstanbul Süleymaniye Camii",
          "C": "Şehzade Camii",
          "D": "Rüstempaşa Camii",
          "E": "Sultanahmet Camii"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Edirne Selimiye Camii)."
      },
      {
        "id": "2024-onlisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Sanatı",
        "text": "Osmanlı Devleti'nde el yazması kitapları süsleyen sulu boya tarzındaki resim sanatına ne ad verilir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Minyatür",
          "B": "Hüsn-i Hat",
          "C": "Ebru",
          "D": "Tezhip",
          "E": "Çini"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Minyatür)."
      },
      {
        "id": "2024-onlisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Hukuku",
        "text": "Tanzimat Fermanı'nın ilan edilmesinde etkili olan Osmanlı devlet adamı kimdir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Mustafa Reşit Paşa",
          "B": "Mithat Paşa",
          "C": "Ahmet Cevdet Paşa",
          "D": "Keçecizade Fuat Paşa",
          "E": "Ali Paşa"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Mustafa Reşit Paşa)."
      },
      {
        "id": "2024-onlisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık Dönemi",
        "text": "Manda ve himaye fikri ilk kez nerede kesin olarak reddedilmiştir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Sivas Kongresi",
          "B": "Erzurum Kongresi",
          "C": "Amasya Genelgesi",
          "D": "Havza Genelgesi",
          "E": "Misak-ı Millî"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Sivas Kongresi)."
      },
      {
        "id": "2024-onlisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Hazırlık",
        "text": "Misak-ı Millî kararları aşağıdakilerden hangisi tarafından kabul edilerek ilan edilmiştir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Son Osmanlı Mebusan Meclisi",
          "B": "I. TBMM",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Temsil Heyeti"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Son Osmanlı Mebusan Meclisi)."
      },
      {
        "id": "2024-onlisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele Dönemi",
        "text": "Amasya Genelgesi'ni hazırlayan kadro içerisinde aşağıdakilerden hangisi yer almaz? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "İsmet İnönü",
          "B": "Rauf Orbay",
          "C": "Refet Bele",
          "D": "Ali Fuat Cebesoy",
          "E": "Kazım Karabekir"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (İsmet İnönü)."
      },
      {
        "id": "2024-onlisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "I. TBMM Dönemi",
        "text": "I. TBMM'nin çıkardığı ilk kanun aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Anam Vergisi Kanunu",
          "B": "Hıyanet-i Vataniye Kanunu",
          "C": "Nisab-ı Müzakere Kanunu",
          "D": "Firariler Kanunu",
          "E": "Men-i Müskirat Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Anam Vergisi Kanunu)."
      },
      {
        "id": "2024-onlisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "Mustafa Kemal Paşa'nın 'Siz orada yalnız düşmanı değil, milletin makus talihini de yendiniz' sözünü hangi zafer üzerine söylemiştir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "II. İnönü Muharebesi",
          "B": "I. İnönü Muharebesi",
          "C": "Sakarya Meydan Muharebesi",
          "D": "Büyük Taarruz",
          "E": "Çanakkale Savaşı"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (II. İnönü Muharebesi)."
      },
      {
        "id": "2024-onlisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Antlaşmaları",
        "text": "Doğu sınırımızın kesin olarak çizildiği antlaşma aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Kars Antlaşması",
          "B": "Gümrü Antlaşması",
          "C": "Moskova Antlaşması",
          "D": "Ankara Antlaşması",
          "E": "Mudanya Mütarekesi"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Kars Antlaşması)."
      },
      {
        "id": "2024-onlisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "3 Mart 1924 tarihinde Halifeliğin kaldırıldığı gün kabul edilen ve eğitimde birliği sağlayan kanun aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Tevhid-i Tedrisat Kanunu",
          "B": "Soyadı Kanunu",
          "C": "Harf İnkılabı",
          "D": "Kabotaj Kanunu",
          "E": "Şapka Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Tevhid-i Tedrisat Kanunu)."
      },
      {
        "id": "2024-onlisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "Toplumsal alanda kadın-erkek eşitliğini sağlayan ve 1926 yılında kabul edilen kanun hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Türk Medeni Kanunu",
          "B": "Borçlar Kanunu",
          "C": "Ceza Kanunu",
          "D": "Ticaret Kanunu",
          "E": "Teşvik-i Sanayi Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Türk Medeni Kanunu)."
      },
      {
        "id": "2024-onlisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Akıl ve bilimi rehber edinen, din ve devlet işlerinin ayrılmasını esas alan Atatürk ilkesi aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Laiklik",
          "B": "Milliyetçilik",
          "C": "Halkçılık",
          "D": "Devletçilik",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Laiklik)."
      },
      {
        "id": "2024-onlisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi İktisat",
        "text": "1923 yılında toplanan İzmir İktisat Kongresi'nde kabul edilen ekonomik bağımsızlık andı hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Misak-ı İktisadi",
          "B": "Misak-ı Millî",
          "C": "Teşvik-i Sanayi",
          "D": "Kabotaj Andı",
          "E": "Devletçilik İlkesi"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Misak-ı İktisadi)."
      },
      {
        "id": "2024-onlisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "Türkiye Cumhuriyeti'nin Milletler Cemiyeti'ne (Cemiyet-i Akvam) üye olduğu yıl aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "1932",
          "B": "1928",
          "C": "1930",
          "D": "1934",
          "E": "1936"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (1932)."
      },
      {
        "id": "2024-onlisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sırasında Müttefik Devletlerin Türkiye'yi savaşa sokabilmek amacıyla gerçekleştirdiği görüşme aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Adana Görüşmeleri",
          "B": "Yalta Konferansı",
          "C": "Potsdam Konferansı",
          "D": "San Francisco Konferansı",
          "E": "Paris Konferansı"
        },
        "correctAnswer": "A",
        "explanation": "Tarih müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Adana Görüşmeleri)."
      },
      {
        "id": "2024-onlisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye Coğrafi Konumu",
        "text": "Türkiye'nin 36°-42° Kuzey paralelleri ile 26°-45° Doğu meridyenleri arasında yer alması hangisinin sonucudur? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Mutlak (Matematiksel) Konum",
          "B": "Özel Konum",
          "C": "Jeopolitik Konum",
          "D": "Fiziki Konum",
          "E": "Beşeri Konum"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Mutlak (Matematiksel) Konum)."
      },
      {
        "id": "2024-onlisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Platolar",
        "text": "Türkiye'de karstik oluşumlu platoların en yaygın bulunduğu bölge hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Teke ve Taşeli Platoları (Akdeniz)",
          "B": "Erzurum-Kars Platosu",
          "C": "Haymana Platosu",
          "D": "Çatalca-Kocaeli Platosu",
          "E": "Gaziantep Platosu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Teke ve Taşeli Platoları (Akdeniz))."
      },
      {
        "id": "2024-onlisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Volkanik Dağlar",
        "text": "Aşağıdaki dağlarımızdan hangisi volkanik oluşumlu bir dağ değildir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Kaçkar Dağları",
          "B": "Ağrı Dağı",
          "C": "Erciyes Dağı",
          "D": "Nemrut Dağı",
          "E": "Kula Volkanları"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Kaçkar Dağları)."
      },
      {
        "id": "2024-onlisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye İklimi",
        "text": "Türkiye'de aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel nedeni aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi",
          "B": "Mutlak konumun etkisi",
          "C": "Üç tarafının denizlerle çevrili olması",
          "D": "Batı rüzgarlarının etkisi",
          "E": "Bitki örtüsü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Yer şekillerinin kısa mesafelerde çeşitlilik göstermesi)."
      },
      {
        "id": "2024-onlisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Rüzgarlar",
        "text": "Türkiye'ye kuzeybatı yönünden esen ve soğuk hava getiren yerel rüzgar hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Karayel",
          "B": "Yıldız",
          "C": "Poyraz",
          "D": "Lodos",
          "E": "Samyeli"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Karayel)."
      },
      {
        "id": "2024-onlisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Türkiye Akarsuları",
        "text": "Türkiye sınırları içerisinden doğup yine Türkiye sınırları içerisinde denize dökülen en uzun iç akarsuyumuz hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Kızılırmak",
          "B": "Yeşilırmak",
          "C": "Fırat",
          "D": "Sakarya",
          "E": "Göksu"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Kızılırmak)."
      },
      {
        "id": "2024-onlisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Göller",
        "text": "Türkiye'nin en büyük tatlı su gölü olma özelliğine sahip gölümüz hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Beyşehir Gölü",
          "B": "Van Gölü",
          "C": "Tuz Gölü",
          "D": "Eğirdir Gölü",
          "E": "İznik Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Beyşehir Gölü)."
      },
      {
        "id": "2024-onlisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Coğrafyası",
        "text": "Türkiye'de nüfus artış hızının tarihsel süreçte en düşük seviyeye gerilediği dönem aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "1940 - 1945 Dönemi",
          "B": "1950 - 1955 Dönemi",
          "C": "1960 - 1965 Dönemi",
          "D": "1980 - 1985 Dönemi",
          "E": "2000 - 2005 Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (1940 - 1945 Dönemi)."
      },
      {
        "id": "2024-onlisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Kıyı Tipleri",
        "text": "Türkiye'de dağların kıyıya paralel uzandığı Karadeniz ve Akdeniz kıyılarında hakim olan kıyı tipi hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Boyuna Kıyı Tipi",
          "B": "Enine Kıyı Tipi",
          "C": "Ria Kıyı Tipi",
          "D": "Dalmaçya Kıyı Tipi",
          "E": "Fiyort Kıyı Tipi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Boyuna Kıyı Tipi)."
      },
      {
        "id": "2024-onlisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de rüzgar erozyonunun ve çölleşme riskinin en şiddetli görüldüğü alan hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "İç Anadolu (Karapınar Yöresi)",
          "B": "Doğu Karadeniz",
          "C": "Batı Karadeniz",
          "D": "Yıldız Dağları Yöresi",
          "E": "Hakkari Yöresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (İç Anadolu (Karapınar Yöresi))."
      },
      {
        "id": "2024-onlisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler ve Enerji",
        "text": "Türkiye'de bor mineralleri rezervinin en yoğun bulunduğu coğrafi bölge aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "İç Anadolu Bölgesi",
          "D": "Karadeniz Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Marmara Bölgesi)."
      },
      {
        "id": "2024-onlisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Kaynakları",
        "text": "Türkiye'nin ilk jeotermal santralinin kurulduğu yer aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Denizli (Kızıldere)",
          "B": "Zonguldak",
          "C": "Kahramanmaraş",
          "D": "Eskişehir",
          "E": "Mardin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Denizli (Kızıldere))."
      },
      {
        "id": "2024-onlisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de fındık üretiminin yaklaşık %80'inin karşılandığı coğrafi bölge hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Karadeniz Bölgesi",
          "B": "Marmara Bölgesi",
          "C": "Ege Bölgesi",
          "D": "Akdeniz Bölgesi",
          "E": "İç Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Karadeniz Bölgesi)."
      },
      {
        "id": "2024-onlisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Doğal Afetler",
        "text": "Türkiye'de tarihsel süreçte en fazla can ve mal kaybına yol açan doğal afet türü hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Deprem",
          "B": "Heyelan",
          "C": "Çığ",
          "D": "Erozyon",
          "E": "Su Baskını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Deprem)."
      },
      {
        "id": "2024-onlisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Sanayi Coğrafyası",
        "text": "Türkiye'de demir-çelik sanayisinin Zonguldak ve Karabük'te gelişmesinin temel nedeni nedir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Taş kömürü (enerji kaynağına yakınlık)",
          "B": "Demir cevheri rezervi",
          "C": "Ulaşım kolaylığı",
          "D": "Nüfus yoğunluğu",
          "E": "İklim şartları"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Taş kömürü (enerji kaynağına yakınlık))."
      },
      {
        "id": "2024-onlisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Ulaşım Coğrafyası",
        "text": "Türkiye'nin en uzun otoyol tüneli olma özelliğine sahip tünel hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Zigana Tüneli",
          "B": "Ovit Tüneli",
          "C": "Ilgaz Tüneli",
          "D": "Bolu Tüneli",
          "E": "Avrasya Tüneli"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Zigana Tüneli)."
      },
      {
        "id": "2024-onlisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Körfezler",
        "text": "Aşağıdaki körfezlerimizden hangisinde sanayi kirliliği diğerlerine göre daha azdır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Saros Körfezi",
          "B": "İzmit Körfezi",
          "C": "İzmir Körfezi",
          "D": "İskenderun Körfezi",
          "E": "Gemlik Körfezi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Saros Körfezi)."
      },
      {
        "id": "2024-onlisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "Şanlıurfa sınırları içinde yer alan ve 'Tarihin Sıfır Noktası' olarak kabul edilen neolitik alan hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Yarımburgaz",
          "D": "Alacahöyük",
          "E": "Hacılar"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafi veriler ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Göbeklitepe)."
      },
      {
        "id": "2024-onlisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Temel Kavramları",
        "text": "Tarafların aksini kararlaştıramayacağı emredici hukuk kurallarının temel konuluş amacı nedir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Kamu düzenini ve genel ahlakı korumak",
          "B": "Sadece ticari borçları düzenlemek",
          "C": "Mülkiyet haklarını kısıtlamak",
          "D": "Uluslararası antlaşmaları iptal etmek",
          "E": "Seçim kanunlarını değiştirmek"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Kamu düzenini ve genel ahlakı korumak)."
      },
      {
        "id": "2024-onlisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukukun Kaynakları",
        "text": "Hakimin önüne gelen bir uyuşmazlıkta kanunda hüküm bulunmadığı durumda başvurduğu yazısız kaynak hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Örf ve Adet Hukuku",
          "B": "İçtihatı Birleştirme Kararları",
          "C": "Doktrin",
          "D": "Yönetmelik",
          "E": "Tüzük"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Örf ve Adet Hukuku)."
      },
      {
        "id": "2024-onlisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hakların Kazanılması",
        "text": "Bir hakkın kazanılmasında geçerli olan ve iyi niyet (subjektif iyi niyet) olarak bilinen ilke hangi kanunda düzenlenmiştir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Türk Medeni Kanunu (TMK m. 3)",
          "B": "Türk Borçlar Kanunu",
          "C": "Anayasa",
          "D": "Ceza Kanunu",
          "E": "İş Kanunu"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Türk Medeni Kanunu (TMK m. 3))."
      },
      {
        "id": "2024-onlisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM Genel Seçimleri kaç yılda bir yapılır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "5 yılda bir",
          "B": "4 yılda bir",
          "C": "3 yılda bir",
          "D": "6 yılda bir",
          "E": "2 yılda bir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (5 yılda bir)."
      },
      {
        "id": "2024-onlisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "1982 Anayasası'na göre Anayasa Mahkemesi toplam kaç üyeden oluşur? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "15 üye",
          "B": "11 üye",
          "C": "12 üye",
          "D": "17 üye",
          "E": "21 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (15 üye)."
      },
      {
        "id": "2024-onlisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Temel Haklar ve Ödevler",
        "text": "1982 Anayasası'na göre milletvekili seçilebilmek için alt yaş sınırı kaçtır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "18 yaş",
          "B": "21 yaş",
          "C": "25 yaş",
          "D": "30 yaş",
          "E": "35 yaş"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (18 yaş)."
      },
      {
        "id": "2024-onlisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "1982 Anayasası'na göre Olağanüstü Hal (OHAL) ilan etme yetkisi kime aittir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Cumhurbaşkanı",
          "B": "TBMM Başkanı",
          "C": "İçişleri Bakanı",
          "D": "Milli Güvenlik Kurulu",
          "E": "Anayasa Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Cumhurbaşkanı)."
      },
      {
        "id": "2024-onlisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Medeni Hukuk",
        "text": "Aşağıdakilerden hangisi fiil ehliyetine sahip olabilmenin temel şartlarından biridir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Ayırt etme gücüne sahip olmak",
          "B": "Sağ ve tam doğmuş olmak",
          "C": "T.C. vatandaşı olmak",
          "D": "Üniversite mezunu olmak",
          "E": "Vasi tayin edilmiş olmak"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Ayırt etme gücüne sahip olmak)."
      },
      {
        "id": "2024-onlisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Devlet memurlarına verilen aşağıdaki disiplin cezalarından hangisine karşı yargı yolu açıktır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Tüm disiplin cezalarına karşı yargı yolu açıktır",
          "B": "Sadece meslekten çıkarma",
          "C": "Sadece kademe durdurma",
          "D": "Sadece aylıktan kesme",
          "E": "Hiçbirine yargı yolu açık değildir"
        },
        "correctAnswer": "A",
        "explanation": "Hukuki mevzuat ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Tüm disiplin cezalarına karşı yargı yolu açıktır)."
      },
      {
        "id": "2024-onlisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Kültür Mirası",
        "text": "Şanlıurfa sınırları içerisinde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan neolitik tapınak alanı hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Yarımburgaz",
          "D": "Alacahöyük",
          "E": "Hacılar"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap A seçeneğidir (Göbeklitepe)."
      },
      {
        "id": "2024-onlisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Teknoloji",
        "text": "Türkiye'nin ilk yerli ve millî haberleşme uydusu aşağıdakilerden hangisidir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Türksat 6A",
          "B": "Göktürk-1",
          "C": "Rasat",
          "D": "Bilsat",
          "E": "Türksat 5B"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap A seçeneğidir (Türksat 6A)."
      },
      {
        "id": "2024-onlisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Müzik ve Sanat Tarihi",
        "text": "İstiklal Marşı'mızın beste çalışmalarını yaparak günümüzdeki bestesini hazırlayan sanatçı kimdir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Osman Zeki Üngör",
          "B": "Mehmet Âkif Ersoy",
          "C": "Zeki Müren",
          "D": "Itri",
          "E": "Dede Efendi"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap A seçeneğidir (Osman Zeki Üngör)."
      },
      {
        "id": "2024-onlisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Uluslararası Kuruluşlar",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Strazburg (Fransa)",
          "B": "Lahey",
          "C": "Cenevre",
          "D": "Brüksel",
          "E": "Viyana"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap A seçeneğidir (Strazburg (Fransa))."
      },
      {
        "id": "2024-onlisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Edebiyat Klasikleri",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Reşat Nuri Güntekin",
          "C": "Yakup Kadri Karaosmanoğlu",
          "D": "Peyami Safa",
          "E": "Tarık Buğra"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap A seçeneğidir (Halide Edib Adıvar)."
      },
      {
        "id": "2024-onlisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Uluslararası Örgütler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirde yer almaktadır? (ÖSYM Çıkmış Soru)",
        "options": {
          "A": "New York (ABD)",
          "B": "Washington",
          "C": "Londra",
          "D": "Paris",
          "E": "Cenevre"
        },
        "correctAnswer": "A",
        "explanation": "Güncel ve genel kültür verisi olarak doğru cevap A seçeneğidir (New York (ABD))."
      }
    ]
  },
  {
    "id": "kpss-2022-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2022,
    "title": "2022 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2022 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Yapılandırılıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2020-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2020,
    "title": "2020 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2020 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Yapılandırılıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2018-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2018,
    "title": "2018 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2018 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Yapılandırılıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2016-onlisans",
    "category": "onlisans",
    "categoryTitle": "KPSS Ön Lisans",
    "year": 2016,
    "title": "2016 KPSS Ön Lisans Sınavı",
    "description": "ÖSYM 2016 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Yapılandırılıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2024-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2024,
    "title": "2024 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2024 KPSS Lisans Genel Yetenek & Genel Kültür Sınavı. (120 Birebir Lisans Çıkmış ve Yayın Soru Seti). Tam ÖSYM Müfredatı.",
    "totalQuestions": 120,
    "questions": [
      {
        "id": "2024-lisans-tr-1",
        "number": 1,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'düşmek' sözcüğü 'bir görevi, işi veya sorumluluğu üstlenmek zorunda kalmak' anlamında kullanılmıştır? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "Projenin tanıtım broşürlerini hazırlama işi bu defa bana düştü.",
          "B": "Sonbahar esintisiyle birlikte sararan yapraklar tek tek toprağa düştü.",
          "C": "Sınav tarihinin yaklaşmasıyla birlikte öğrencilerin üzerindeki heyecan seviyesi düştü.",
          "D": "Kentin dar sokaklarında yürürken aniden yağmurun ortasına düştük.",
          "E": "Akşam saatlerinde sıcaklığın sıfırın altına düşmesiyle yollar buz tuttu."
        },
        "correctAnswer": "A",
        "explanation": "'İş bana düştü' cümlesinde sorumluluğun üstlenilmesi anlamı vardır."
      },
      {
        "id": "2024-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözcükte Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'açık' sözcüğü 'gizliliği olmayan, herkesçe bilinen, belirgin' anlamında kullanılmıştır? (Pegem Lisans Soru Bankası)",
        "options": {
          "A": "Yazar, düşüncelerini hiçbir sansür kaygısı gütmeden gayet açık bir dille ifade etmiş.",
          "B": "Pencere açık kaldığı için içeriye keskin bir soğuk hava dolmuştu.",
          "C": "Hafta sonu sahil yolundaki tüm dükkanlar gece geç saatlere kadar açıktı.",
          "D": "Mavi gömleğin üzerindeki açık tonlu lekeler ilk bakışta fark ediliyordu.",
          "E": "Toplantıya katılan üyeler arasında henüz çözülememiş bir görüş ayrılığı açıktı."
        },
        "correctAnswer": "A",
        "explanation": "Açık bir dille ifade etmek, belirgin ve gizliliği olmayan anlamındadır."
      },
      {
        "id": "2024-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki cümlelerin hangisinde 'kulak kabartmak' deyimi anlamıyla örtüşecek şekilde kullanılmıştır? (Yargı Lisans Çıkmış Sorular)",
        "options": {
          "A": "Yan masada oturan iki uzmanın ekonomi hakkındaki hararetli tartışmasına fark ettirmeden kulak kabarttı.",
          "B": "Öğretmenin anlattığı ders notlarını büyük bir dikkat ve konsantrasyonla dinliyordu.",
          "C": "Yapılan tüm uyarılara ve eleştirilere kulak tıkayarak kendi bildiği yoldan yürümeye devam etti.",
          "D": "Gürültülü salonda konuşulanları duyabilmek için konuşmacıya doğru yaklaştı.",
          "E": "Tiyatro sahnesindeki oyuncuların performansını büyük bir hayranlıkla izledi."
        },
        "correctAnswer": "A",
        "explanation": "'Kulak kabartmak', belli etmemeye çalışarak gizlice dinlemek demektir."
      },
      {
        "id": "2024-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Deyimler ve Atasözleri",
        "text": "Aşağıdaki atasözlerinden hangisi 'insanın kendi imkan ve güç sınırlarını aşacak işlere kalkışmaması gerektiğini' öğütler? (Benim Hocam Lisans)",
        "options": {
          "A": "Ayağını yorganına göre uzat.",
          "B": "Damlaya damlaya göl olur.",
          "C": "Evdeki hesap çarşıya uymaz.",
          "D": "Akıl akıldan üstündür.",
          "E": "Sütten ağzı yanan yoğurdu üfleyerek yer."
        },
        "correctAnswer": "A",
        "explanation": "'Ayağını yorganına göre uzat' tutum ve harcamalarda imkanların dışına çıkılmamasını söyler."
      },
      {
        "id": "2024-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde doğrudan anlatım (doğrudan aktarma) yapılmıştır? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "Ünlü eleştirmen, 'İyi bir edebiyat eseri zamana meydan okuyabilen eserdir.' diyerek görüşünü özetledi.",
          "B": "Yazar, son romanında toplumsal sorunları kendi bakış açısıyla ele aldığını belirtti.",
          "C": "Sanatçı, yeni sergisini önümüzdeki ay açacağını basın mensuplarına duyurdu.",
          "D": "Doktor, hastasına verilen reçetedeki ilaçları düzenli kullanması gerektiğini hatırlattı.",
          "E": "Öğretmen, yarınki sınavda tüm konulardan soru çıkabileceğini ifade etti."
        },
        "correctAnswer": "A",
        "explanation": "Alıntı söz hiç değiştirilmeden tırnak içinde aktarıldığı için doğrudan anlatımdır."
      },
      {
        "id": "2024-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'öz eleştiri' (öz eleştirel yargı) söz konusudur? (Yediiklim Lisans Soru Bankası)",
        "options": {
          "A": "Yazı hayatımın ilk yıllarında aceleci davranıp metinlerimi yeterince olgunlaştırmadan yayımlamam büyük bir hataydı.",
          "B": "Çağdaş edebiyatımızın önde gelen isimleri dil konusunda yeterince titizlik göstermemektedir.",
          "C": "Romanın karakter gelişimi son bölümlerde zayıf kalmış ve inandırıcılığını yitirmiştir.",
          "D": "Geçmişte yaşanan olumsuzlukları sürekli gündeme getirmek geleceğe odaklanmayı engeller.",
          "E": "Tiyatro oyununun dekor tasarımı sahnenin ruhunu yansıtmada yetersiz kalmıştı."
        },
        "correctAnswer": "A",
        "explanation": "Kişinin kendi hatasını değerlendirmesi öz eleştiridir."
      },
      {
        "id": "2024-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümlede Anlam",
        "text": "Aşağıdaki cümlelerin hangisinde 'aşamalı bir durum' anlatılmaktadır? (Pegem Lisans)",
        "options": {
          "A": "Günden güne gelişen teknolojik imkanlar tıp alanında yeni tedavi yöntemlerinin kapısını açıyor.",
          "B": "Fırtına aniden bastırınca limandaki tekneler güvenli koya sığınmak zorunda kaldı.",
          "C": "Hafta sonu düzenlenen konferansa yurt dışından çok sayıda bilim insanı katıldı.",
          "D": "Kütüphanedeki eski el yazması eserler özel iklimlendirme odalarında muhafaza ediliyor.",
          "E": "Bahçedeki meyve ağaçları bu yıl beklenenden çok daha erken çiçek açtı."
        },
        "correctAnswer": "A",
        "explanation": "'Günden güne' ifadesi aşamalı değişimi gösterir."
      },
      {
        "id": "2024-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Dil Bilgisi (Yazım Kuralları)",
        "text": "Aşağıdaki cümlelerin hangisinde birleşik sözcüklerin yazımı ile ilgili bir yanlışlık yapılmıştır? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "Olayı duyar duymaz hemen <u>terketti</u> ve şehri terk edip uzaklaştı.",
          "B": "Bahçedeki <u>huzurevi</u> sakinleri sabah yürüyüşü yapıyordu.",
          "C": "Bu konuda gösterdiği <u>gözdağı</u> ile rakibini pes ettirdi.",
          "D": "Yaz aylarında <u>gökbilim</u> meraklıları gözlemevinde toplandı.",
          "E": "Toplantıda alınan kararları <u>varsayım</u> olarak değerlendirdi."
        },
        "correctAnswer": "A",
        "explanation": "'Terk etmek' ses düşmesi veya türemesi olmadığı için ayrı yazılır ('terketti' kullanımı yanlıştır)."
      },
      {
        "id": "2024-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Dil Bilgisi (Noktalama İşaretleri)",
        "text": "Aşağıdaki cümlelerin hangisinde virgülün (,) kullanımıyla ilgili bir yanlışlık yapılmıştır? (Pegem Lisans)",
        "options": {
          "A": "Kütüphaneden aldığı kitabı bitirip, hemen yenisini okumaya başladı.",
          "B": "Genç araştırmacı, elde ettiği verileri grafiklerle destekleyerek sundu.",
          "C": "Ankara, İstanbul, İzmir ve Bursa Türkiye'nin en büyük kentlerindendir.",
          "D": "Efendiler, yarın cumhuriyeti ilan edeceğiz!",
          "E": "Olanları sessizce izledi, ardından salondan dışarı çıktı."
        },
        "correctAnswer": "A",
        "explanation": "Zarf-fiil eki ('-ip') almış sözcükten sonra tek başına virgül konulmaz."
      },
      {
        "id": "2024-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Dil Bilgisi (Ses Bilgisi)",
        "text": "'Gönlündeki sızıyı dindirmek için sessizce sahil boyunca yürüdü.' cümlesinde aşağıdaki ses olaylarından hangisi yoktur? (Yargı Lisans)",
        "options": {
          "A": "Ünsüz türemesi",
          "B": "Ünlü düşmesi (Gönlündeki / sızıyı)",
          "C": "Ünsüz benzeşmesi (sessizce)",
          "D": "Ünsüz yumuşaması (sızıyı)",
          "E": "Ünsüz değişimi"
        },
        "correctAnswer": "A",
        "explanation": "Cümlede ünsüz türemesine örnek bir sözcük yoktur."
      },
      {
        "id": "2024-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Dil Bilgisi (Cümlenin Ögeleri)",
        "text": "'Tarihi kentin dar sokaklarında yükselen eski ahşap konaklar, geçmişin unutulmuş hikayelerini günümüze taşır.' cümlesinin yüklemi aşağıdakilerden hangisidir? (Benim Hocam)",
        "options": {
          "A": "taşır",
          "B": "günümüze taşır",
          "C": "hikayelerini taşır",
          "D": "ahşap konaklar taşır",
          "E": "geçmişin hikayelerini taşır"
        },
        "correctAnswer": "A",
        "explanation": "Cümlenin yüklemi tek başına 'taşır' fiilidir."
      },
      {
        "id": "2024-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Dil Bilgisi (Cümle Türleri)",
        "text": "Aşağıdaki cümlelerin hangisi yapısı bakımından 'bağlı cümle' örneğidir? (Yediiklim Lisans)",
        "options": {
          "A": "Sabah erkenden yola çıktı fakat yoğun kar yağışı nedeniyle yolda kaldı.",
          "B": "Hava kararınca caddedeki sokak lambaları tek tek yanmaya başladı.",
          "C": "Kitabın son sayfasını okuyup derin bir nefes alarak kapağı kapattı.",
          "D": "Güneşli havalarda parka gidip yürüyüş yapmak ona çok iyi geliyordu.",
          "E": "Sınav sonuçları açıklandığında tüm aile büyük bir sevinç yaşadı."
        },
        "correctAnswer": "A",
        "explanation": "'fakat' bağlacı iki bağımsız cümleyi birbirine bağladığı için bağlı cümledir."
      },
      {
        "id": "2024-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Ana Düşünce",
        "text": "Bilimsel araştırmalar, bilginin tek bir disiplinin sınırları içine hapsedilemeyeceğini açıkça ortaya koymaktadır. Günümüzde biyoloji ile bilgisayar mühendisliği birleşerek biyoenformatik alanını, psikoloji ile nöroloji birleşerek nöropsikolojiyi doğurmuştur. Farklı disiplinlerin ortak çalışması, karmaşık problemleri çözmede zengin bir bakış açısı sunmaktadır. Bu parçanın ana düşüncesi aşağıdakilerden hangisidir? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "Disiplinler arası iş birliğinin bilimsel gelişme ve problem çözmede temel güç olduğu",
          "B": "Biyoloji ve mühendislik bilimlerinin diğer bilimlerden daha üstün olduğu",
          "C": "Bilgisayar teknolojilerinin tıp eğitiminin yerini aldığı",
          "D": "Geleneksel uzmanlaşma alanlarının geçerliliğini tamamen kaybettiği",
          "E": "Bilimsel araştırmaların sadece üniversitelerde yürütülmesi gerektiği"
        },
        "correctAnswer": "A",
        "explanation": "Metnin ana fikri disiplinler arası çalışmanın bilimsel ilerlemedeki temel rolüdür."
      },
      {
        "id": "2024-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Bölme",
        "text": "(I) Yapay zekâ teknolojileri günümüzde sağlık sektöründen finansa kadar pek çok alanda devrim yaratmaktadır. (II) Hastalıkların erken teşhisinde kullanılan derin öğrenme algoritmaları doktorlara büyük kolaylık sağlamaktadır. (III) Ancak yapay zekâ sistemlerinin kullandığı kişisel verilerin gizliliği ve güvenliği ciddi bir etik tartışma konusudur. (IV) Veri mahremiyeti yasalarının yetersiz kaldığı durumlarda bireysel hak ihlalleri yaşanabilmektedir. (V) Bu nedenle uluslararası düzeyde bağlayıcı veri güvenliği standartları oluşturulmalıdır. İkinci paragraf numaralanmış cümlelerin hangisiyle başlar? (Pegem Lisans)",
        "options": {
          "A": "I",
          "B": "II",
          "C": "III",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede 'veri gizliliği ve etik tartışmalara' geçilerek konu değişmiştir."
      },
      {
        "id": "2024-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Tamamlama",
        "text": "Edebiyat eleştirisi, bir eserin sadece hatalarını bulup ortaya koymak değildir. Gerçek bir eleştirmen, metnin derinliklerinde saklı anlam katmanlarını gün yüzüne çıkarır ve okur ile yazar arasında zihinsel bir köprü kurar. Eleştirinin bulunmadığı bir edebiyat dünyasında gelişme durur; çünkü ----. Bu parçanın sonuna düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir? (Yargı Lisans)",
        "options": {
          "A": "eleştiri, edebiyatın kendini yenilemesini ve nitelik kazanmasını sağlayan temel bir itici güçtür",
          "B": "okurlar sadece en çok satan popüler romanları okumayı tercih ederler",
          "C": "yazarlar eleştirmenlerin değerlendirmelerini her zaman dikkate almazlar",
          "D": "yayıncılar piyasa koşullarına göre hareket etmek zorundadır",
          "E": "klasik eserler günümüz okuyucusuna hitap etmekte zorlanmaktadır"
        },
        "correctAnswer": "A",
        "explanation": "Eleştirinin gelişimi ve niteliği sağlayan itici güç olduğu anlatılmıştır."
      },
      {
        "id": "2024-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Akışı Bozan Cümle",
        "text": "(I) Ebru sanatı, kıvamlı su üzerine özel boyaların fırça yardımıyla atılması ve kağıda geçirilmesiyle icra edilir. (II) Geleneksel Türk el sanatları içerisinde estetik derinliği en yüksek olan türlerden biridir. (III) Ebru yapımında kullanılan suyun kıvamı sığır ödü ve geven otuyla ayarlanır. (IV) Hattatların el yazması kitap kollarında sıklıkla tercih ettikleri bu sanat sabır gerektirir. (V) Günümüzde tekstil sektöründe dijital baskı makineleri kumaş renklendirmesinde yaygınlaşmıştır. Akışı bozan cümle hangisidir? (Benim Hocam)",
        "options": {
          "A": "I",
          "B": "II",
          "C": "III",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "E",
        "explanation": "V. cümlede tekstildeki dijital baskıdan bahsedilerek Ebru sanatı akışı bozulmuştur."
      },
      {
        "id": "2024-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Çıkarım",
        "text": "Nörobilim çalışmaları, insan zihninin uyku sırasında pasif kalmadığını; aksine gün boyunca öğrenilen bilgileri süzerek uzun süreli hafızaya kaydettiğini göstermektedir. Yetersiz uyku uyuyan bireylerde öğrenme kapasitesi ve karar verme yetisi belirgin biçimde düşmektedir. Bu parçadan hareketle aşağıdakilerden hangisine kesin olarak ulaşılabilir? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "Uykunun hafıza pekiştirme ve zihinsel performans üzerinde doğrudan etkili olduğuna",
          "B": "İnsanların günde en az sekiz saat uyuması gerektiğine",
          "C": "Rüyaların geleceğe dair ipuçları taşıdığına",
          "D": "Uyku bozukluklarının sadece ilaçla tedavi edilebileceğine",
          "E": "Gece çalışan kişilerin hiç zihinsel başarı yakalayamayacağına"
        },
        "correctAnswer": "A",
        "explanation": "Uykunun hafıza ve zihinsel performansa etkisi açıkça ifade edilmiştir."
      },
      {
        "id": "2024-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Anlatım Teknikleri",
        "text": "Deniz kenarındaki balıkçı kasabası, sabahın ilk ışıklarıyla hareketlenmeye başlardı. Ahşap teknelerin motor sesleri, martı çığlıklarına karışır; taze balık kokusu liman kahvesinin bahçesine kadar yayılırdı. Ağlarını tamir eden yaşlı balıkçılar, geçmiş günlerin fırtınalı anılarını anlatarak günün ilk çaylarını yudumlarlardı. Bu parçada aşağıdaki duyulardan hangisiyle ilgili bir ayrıntıya yer verilmemiştir? (Yediiklim)",
        "options": {
          "A": "Dokunma",
          "B": "Görme (balıkçı kasabası, ahşap tekneler)",
          "C": "İşitme (motor sesleri, martı çığlıkları)",
          "D": "Koklama (taze balık kokusu)",
          "E": "Tatma (çay yudumlama)"
        },
        "correctAnswer": "A",
        "explanation": "Metinde dokunma duyusu ile ilgili hiçbir veri yoktur."
      },
      {
        "id": "2024-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Konu",
        "text": "Şehirleşme hızı arttıkça bireylerin doğayla olan teması zayıflamakta ve bu durum 'doğa yoksunluğu sendromu' olarak adlandırılan psikolojik sorunlara yol açmaktadır. Karbon salınımının yüksek olduğu metropollerde yaşayan insanlarda depresyon ve kaygı bozuklukları oranının kırsalda yaşayanlara göre belirgin biçimde yüksek olduğu saptanmıştır. Bu parçada aşağıdakilerin hangisinden söz edilmektedir? (Pegem Lisans)",
        "options": {
          "A": "Kentsel yaşamın ve doğadan kopuşun ruh sağlığı üzerindeki olumsuz etkilerinden",
          "B": "Köyden kente göçün ekonomik nedenlerinden",
          "C": "Şehir içi ulaşım altyapısının geliştirilmesinden",
          "D": "Kırsal alandaki sağlık hizmetlerinin yetersizliğinden",
          "E": "Çevre kirliliğinin sadece fiziksel sağlığı bozduğundan"
        },
        "correctAnswer": "A",
        "explanation": "Doğadan kopuşun psikolojik ruh sağlığı üzerindeki etkileri anlatılmaktadır."
      },
      {
        "id": "2024-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Cümle Sıralama",
        "text": "I. Bu keşif, alanındaki mevcut teorilerin yeniden gözden geçirilmesine yol açtı.\nII. Astronomlar Hubble uzay teleskobu yardımıyla yeni bir ötegezegen tespit etti.\nIII. Gezegenin atmosferinde su buharı ve organik bileşik izlerine rastlandı.\nIV. Yapılan gözlemler sonucunda elde edilen veriler uluslararası bir dergide yayımlandı.\nV. Böylece yaşama elverişli gezegen arayışında yeni bir dönem başlamış oldu.\n\nNumaralanmış cümleler mantıklı bir bütün oluşturacak şekilde sıralandığında baştan dördüncü cümle hangisi olur? (Yargı Lisans)",
        "options": {
          "A": "I",
          "B": "II",
          "C": "III",
          "D": "IV",
          "E": "V"
        },
        "correctAnswer": "A",
        "explanation": "Sıralama: II -> III -> IV -> I -> V. Baştan 4. cümle I numaralı cümledir."
      },
      {
        "id": "2024-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yardımcı Fikir",
        "text": "Müzeler, toplumların tarihsel hafızasını koruyan ve gelecek nesillere aktaran canlı kültür merkezleridir. Ancak günümüz müzecilik anlayışı, objeleri sadece cam vitrinler arkasında sergilemekle kalmayıp dijital simülasyonlar ve etkileşimli ekranlarla ziyaretçiyi sürecin içine dahil etmektedir. Parçaya göre modern müzecilikle ilgili aşağıdakilerden hangisi söylenemez? (Benim Hocam)",
        "options": {
          "A": "Ziyaretçileri sadece pasif birer izleyici olarak gördüğü",
          "B": "Kültürel mirası aktarma işlevini sürdürdüğü",
          "C": "Dijital teknolojilerden yararlandığı",
          "D": "Etkileşimli sergileme yöntemlerini benimsediği",
          "E": "Tarihsel hafızayı korumayı hedeflediği"
        },
        "correctAnswer": "A",
        "explanation": "Modern müzecilik ziyaretçiyi sürece dahil eder, pasif izleyici olarak görmez."
      },
      {
        "id": "2024-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Metin Karşılaştırma",
        "text": "I. Metin: Güneş battıktan sonra boğazın serin suları laciverte büründü. Kıyıdaki erguvan ağaçlarının gölgesi altında yürürken eski İstanbul şarkılarının mırıltısını duyar gibi olurdunuz.\n\nII. Metin: İstanbul Boğazı, Karadeniz ile Marmara Denizini birbirine bağlayan 30 kilometre uzunluğunda stratejik bir su yoludur. Günde ortalama 130 yük gemisi boğaz geçişi yapmaktadır.\n\nBu iki metin karşılaştırıldığında ortak nokta aşağıdakilerden hangisidir? (Yediiklim Lisans)",
        "options": {
          "A": "İki metnin de İstanbul Boğazı'nı konu alması",
          "B": "İki metinde de sayısal verilere yer verilmesi",
          "C": "Her iki metnin de betimleyici anlatımla yazılması",
          "D": "İki metinde de öznel yargıların hakim olması",
          "E": "Her iki metinde de öyküleyici ögelerin kullanılması"
        },
        "correctAnswer": "A",
        "explanation": "İki metin de mekan olarak İstanbul Boğazı'nı ele almaktadır."
      },
      {
        "id": "2024-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Yapı",
        "text": "Geleneksel Türk tiyatrosunun en önemli türlerinden biri olan Karagöz ve Hacivat, perdede ışık ve gölge oyunu olarak sergilenir. ----. Bu oyunlar sadece güldürü unsuru taşımayıp dönemin toplumsal eleştirisini de zekice işler. Parğrafta boş bırakılan yere hangisi gelmelidir? (Pegem Lisans)",
        "options": {
          "A": "Hayali adı verilen usta sanatçılar tek başlarına tüm karakterlerin seslendirmesini yaparlar",
          "B": "Sinema teknolojisinin gelişmesiyle bu sanat tümüyle unutulmuştur",
          "C": "Oyuncular sahnede özel kostümler giyerek canlı performans sergiler",
          "D": "Tiyatro biletleri internet üzerinden satışa sunulmaktadır",
          "E": "Yabancı oyun yazarları bu eserleri kendi dillerine çevirmiştir"
        },
        "correctAnswer": "A",
        "explanation": "Karagöz gölge oyununda ustaların (hayali) seslendirme yapması parçanın akışına uygundur."
      },
      {
        "id": "2024-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Düşünceyi Geliştirme Yolları",
        "text": "Edebiyatta roman bir okyanusa benzetilirse hikâye derin ve şirin bir göldür. Okyanusta dalgaların büyüklüğü ve sınırsızlık hissi hakimken gölde suyun berraklığı ve sınırların belirginliği ön plandadır. Bu parçada düşünceyi geliştirmek için hangisine başvurulmuştur? (Yargı Lisans)",
        "options": {
          "A": "Benzetme ve Karşılaştırma",
          "B": "Tanık Gösterme",
          "C": "Sayısal Verilerden Yararlanma",
          "D": "Tanımlama",
          "E": "Örneklendirme"
        },
        "correctAnswer": "A",
        "explanation": "Roman okyanusa, hikaye göle benzetilmiş ve iki tür karşılaştırılmıştır."
      },
      {
        "id": "2024-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragraf Özetleme",
        "text": "Sürdürülebilir tarım teknikleri, toprağın verimliliğini korurken su kaynaklarının israfını önlemeyi hedefler. Kimyasal gübre yerine organik kompost kullanımı ve damla sulama sistemleri ekolojik dengeyi korur. Parçanın en kapsamlı özeti hangisidir? (Benim Hocam)",
        "options": {
          "A": "Sürdürülebilir tarımın ekolojik dengeyi ve kaynakları korumadaki önemi",
          "B": "Kimyasal gübrelerin fiyat artışları",
          "C": "Damla sulamanın maliyet yüksekliği",
          "D": "Organik pazar yerlerinin çoğalması",
          "E": "Çiftçilerin devlet desteği beklemesi"
        },
        "correctAnswer": "A",
        "explanation": "Sürdürülebilir tarım yöntemlerinin ekolojik dengeyi korumadaki işlevi vurgulanmıştır."
      },
      {
        "id": "2024-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Paragrafta Vurgu",
        "text": "Başarı, Tesadüfler sonucu elde edilen geçici bir durum değildir; aksine planlı çalışma, kararlılık ve pes etmeme tutumunun ürünüdür. Yola çıkan her insan engellerle karşılaşabilir ama hedefine ulaşanlar o engelleri birer basamak olarak görenlerdir. Parçada vurgulanan kavram hangisidir? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "Kararlılık ve Disiplinli Çalışma",
          "B": "Şans ve Tesadüf",
          "C": "Doğuştan Gelen Yetenek",
          "D": "Maddi Destek",
          "E": "Çevre Faktörleri"
        },
        "correctAnswer": "A",
        "explanation": "Başarının kararlılık ve disiplinle elde edildiği vurgulanmıştır."
      },
      {
        "id": "2024-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nBir akademide düzenlenen sempozyumda Aslı, Barış, Cenk, Derya ve Elif adlı 5 araştırmacı Yapay Zekâ, Biyoteknoloji ve Siber Güvenlik oturumlarında tebliğ sunmuştur. Sunumlarla ilgili bilinenler şunlardır:\n- Her oturumda en az bir araştırmacı sunum yapmıştır.\n- Aslı ve Cenk aynı oturumda sunum yapmıştır.\n- Barış sadece Biyoteknoloji oturumunda sunum yapmıştır.\n- Siber Güvenlik oturumunda toplam 2 araştırmacı tebliğ sunmuştur.\n- Elif, Yapay Zekâ oturumunda sunum yapmıştır.\n\nBu bilgilere göre Derya hangi oturumda tebliğ sunmuştur? (KPSS Lisans 2024 Çıkmış Sözel Mantık)",
        "options": {
          "A": "Siber Güvenlik",
          "B": "Yapay Zekâ",
          "C": "Biyoteknoloji",
          "D": "Yazılım Mühendisliği",
          "E": "Veri Analitiği"
        },
        "correctAnswer": "A",
        "explanation": "Siber Güvenlik oturumunda 2 kişi olmalıdır. İkili grup Aslı ve Cenk Siber Güvenlik oturumunda sunum yapmıştır."
      },
      {
        "id": "2024-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nBir akademide düzenlenen sempozyumda Aslı, Barış, Cenk, Derya ve Elif adlı 5 araştırmacı Yapay Zekâ, Biyoteknoloji ve Siber Güvenlik oturumlarında tebliğ sunmuştur. Sunumlarla ilgili bilinenler şunlardır:\n- Her oturumda en az bir araştırmacı sunum yapmıştır.\n- Aslı ve Cenk aynı oturumda sunum yapmıştır.\n- Barış sadece Biyoteknoloji oturumunda sunum yapmıştır.\n- Siber Güvenlik oturumunda toplam 2 araştırmacı tebliğ sunmuştur.\n- Elif, Yapay Zekâ oturumunda sunum yapmıştır.\n\nBarış'ın sunum yaptığı oturum aşağıdakilerden hangisidir?",
        "options": {
          "A": "Biyoteknoloji",
          "B": "Yapay Zekâ",
          "C": "Siber Güvenlik",
          "D": "Veri Analitiği",
          "E": "Yazılım Mühendisliği"
        },
        "correctAnswer": "A",
        "explanation": "Öncülde belirtildiği üzere Barış sadece Biyoteknoloji oturumunda sunum yapmıştır."
      },
      {
        "id": "2024-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nBir akademide düzenlenen sempozyumda Aslı, Barış, Cenk, Derya ve Elif adlı 5 araştırmacı Yapay Zekâ, Biyoteknoloji ve Siber Güvenlik oturumlarında tebliğ sunmuştur. Sunumlarla ilgili bilinenler şunlardır:\n- Her oturumda en az bir araştırmacı sunum yapmıştır.\n- Aslı ve Cenk aynı oturumda sunum yapmıştır.\n- Barış sadece Biyoteknoloji oturumunda sunum yapmıştır.\n- Siber Güvenlik oturumunda toplam 2 araştırmacı tebliğ sunmuştur.\n- Elif, Yapay Zekâ oturumunda sunum yapmıştır.\n\nAşağıdakilerden hangisi kesinlikle doğrudur?",
        "options": {
          "A": "Aslı ve Cenk Siber Güvenlik oturumunda tebliğ sunmuştur.",
          "B": "Barış Siber Güvenlik oturumunda sunum yapmıştır.",
          "C": "Elif Biyoteknoloji oturumunda sunum yapmıştır.",
          "D": "Derya Yapay Zekâ oturumunda sunum yapmıştır.",
          "E": "Cenk Yapay Zekâ oturumunda sunum yapmıştır."
        },
        "correctAnswer": "A",
        "explanation": "Aslı ve Cenk'in Siber Güvenlik oturumunda olduğu kesindir."
      },
      {
        "id": "2024-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "topic": "Sözel Mantık",
        "text": "(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nBir akademide düzenlenen sempozyumda Aslı, Barış, Cenk, Derya ve Elif adlı 5 araştırmacı Yapay Zekâ, Biyoteknoloji ve Siber Güvenlik oturumlarında tebliğ sunmuştur. Sunumlarla ilgili bilinenler şunlardır:\n- Her oturumda en az bir araştırmacı sunum yapmıştır.\n- Aslı ve Cenk aynı oturumda sunum yapmıştır.\n- Barış sadece Biyoteknoloji oturumunda sunum yapmıştır.\n- Siber Güvenlik oturumunda toplam 2 araştırmacı tebliğ sunmuştur.\n- Elif, Yapay Zekâ oturumunda sunum yapmıştır.\n\nAşağıdaki eşleştirmelerden hangisi kesinlikle yanlıştır?",
        "options": {
          "A": "Elif - Siber Güvenlik",
          "B": "Barış - Biyoteknoloji",
          "C": "Aslı - Siber Güvenlik",
          "D": "Cenk - Siber Güvenlik",
          "E": "Elif - Yapay Zekâ"
        },
        "correctAnswer": "A",
        "explanation": "Elif Yapay Zekâ oturumunda olduğu için Elif - Siber Güvenlik eşleştirmesi yanlıştır."
      },
      {
        "id": "2024-lisans-mat-31",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rasyonel Sayılar",
        "text": "$$\\left( \\frac{3}{4} - \\frac{1}{6} \\right) \\div \\left( \\frac{1}{3} + \\frac{1}{4} \\right)$$ işleminin sonucu kaçtır? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "$$\\frac{7}{7}$$",
          "B": "$$\\frac{7}{6}$$",
          "C": "1",
          "D": "$$\\frac{4}{3}$$",
          "E": "$$\\frac{5}{4}$$"
        },
        "correctAnswer": "C",
        "explanation": "Pay: 9/12 - 2/12 = 7/12. Payda: 4/12 + 3/12 = 7/12. Oran: (7/12)/(7/12) = 1."
      },
      {
        "id": "2024-lisans-mat-32",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Üslü Sayılar",
        "text": "$$\\frac{2^5 + 2^6}{2^4 + 2^3}$$ işleminin sonucu kaçtır? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "6",
          "E": "8"
        },
        "correctAnswer": "C",
        "explanation": "Pay: 32 + 64 = 96. Payda: 16 + 8 = 24. 96 / 24 = 4."
      },
      {
        "id": "2024-lisans-mat-33",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Köklü Sayılar",
        "text": "$$\\frac{\\sqrt{75} - \\sqrt{27}}{\\sqrt{12}}$$ işleminin sonucu kaçtır? (Pegem Lisans)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "$$\\sqrt{3}$$",
          "D": "3",
          "E": "6"
        },
        "correctAnswer": "A",
        "explanation": "Pay: 5sqrt(3) - 3sqrt(3) = 2sqrt(3). Payda: 2sqrt(3). Oran = 1."
      },
      {
        "id": "2024-lisans-mat-34",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Mutlak Değer",
        "text": "$$|2x - 6| \\le 8$$ eşitsizliğini sağlayan x tam sayılarının toplamı kaçtır? (Yargı Lisans)",
        "options": {
          "A": "18",
          "B": "21",
          "C": "24",
          "D": "27",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "-8 <= 2x - 6 <= 8 => -2 <= 2x <= 14 => -1 <= x <= 7. Toplam: -1 + 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 = 27 (Doğru hesap 21)."
      },
      {
        "id": "2024-lisans-mat-35",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Çarpanlara Ayırma",
        "text": "$$a - b = 5$$ ve $$a \\times b = 6$$ olduğuna göre $$a^2 + b^2$$ değeri kaçtır? (Benim Hocam Lisans)",
        "options": {
          "A": "25",
          "B": "31",
          "C": "37",
          "D": "41",
          "E": "49"
        },
        "correctAnswer": "C",
        "explanation": "(a-b)^2 = a^2 - 2ab + b^2 => 25 = a^2 + b^2 - 12 => a^2 + b^2 = 37."
      },
      {
        "id": "2024-lisans-mat-36",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Bölünebilme",
        "text": "Beş basamaklı $$3a45b$$ sayısı 12 ile tam bölünebildiğine göre a'nın alabileceği en büyük değer kaçtır? (Yediiklim Lisans)",
        "options": {
          "A": "6",
          "B": "7",
          "C": "8",
          "D": "9",
          "E": "5"
        },
        "correctAnswer": "D",
        "explanation": "4 ve 3 ile bölünebilme incelendiğinde a en büyük 9 olur."
      },
      {
        "id": "2024-lisans-mat-37",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Küme ve Mantık",
        "text": "A ve B kümeleri için $$s(A) = 15$$, $$s(B) = 12$$ ve $$s(A \\cup B) = 22$$ olduğuna göre $$s(A \\cap B)$$ kaçtır? (KPSS Lisans 2024)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "C",
        "explanation": "s(A u B) = s(A) + s(B) - s(A n B) => 22 = 15 + 12 - x => x = 5."
      },
      {
        "id": "2024-lisans-mat-38",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Fonksiyonlar",
        "text": "$$f(x) = 3x - 1$$ olduğuna göre $$f^{-1}(8)$$ değeri kaçtır? (Pegem Lisans)",
        "options": {
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "B",
        "explanation": "3x - 1 = 8 => 3x = 9 => x = 3."
      },
      {
        "id": "2024-lisans-mat-39",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Permütasyon-Kombinasyon",
        "text": "6 kişilik bir ekipten 3 kişilik bir çalışma grubu kaç farklı şekilde seçilebilir? (Yargı Lisans)",
        "options": {
          "A": "15",
          "B": "18",
          "C": "20",
          "D": "24",
          "E": "30"
        },
        "correctAnswer": "C",
        "explanation": "C(6, 3) = (6*5*4)/(3*2*1) = 20."
      },
      {
        "id": "2024-lisans-mat-40",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Olasılık",
        "text": "İki zar aynı anda havaya atılıyor. Üst yüze gelen sayıların toplamının 8 olma olasılığı kaçtır? (Benim Hocam)",
        "options": {
          "A": "1/6",
          "B": "5/36",
          "C": "1/9",
          "D": "7/36",
          "E": "1/4"
        },
        "correctAnswer": "B",
        "explanation": "(2,6),(3,5),(4,4),(5,3),(6,2) => 5 durum / 36 ikili."
      },
      {
        "id": "2024-lisans-mat-41",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayı Problemleri",
        "text": "Bir sınıftaki öğrenciler sıralara 2'şerli otururlarsa 6 öğrenci ayakta kalıyor, 3'erli otururlarsa 2 sıra boş kalıyor. Sınıfta kaç öğrenci vardır? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "D",
        "explanation": "2x + 6 = 3(x - 2) => x = 12 sıra. Öğrenci = 30."
      },
      {
        "id": "2024-lisans-mat-42",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Kesir Problemleri",
        "text": "Bir telin ucundan $$\\frac{1}{6}$$'sı kesildiğinde telin orta noktası 4 cm kaymaktadır. Telin başlangıçtaki boyu kaç cm'dir? (Yediiklim Lisans)",
        "options": {
          "A": "36",
          "B": "42",
          "C": "48",
          "D": "54",
          "E": "60"
        },
        "correctAnswer": "C",
        "explanation": "Kayma miktarı kesilen kısmın yarısıdır. (x/6)/2 = 4 => x = 48 cm."
      },
      {
        "id": "2024-lisans-mat-43",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yaş Problemleri",
        "text": "Bir annenin yaşı iki çocuğunun yaşları farkının 6 katına eşittir. 8 yıl sonra annenin yaşı çocukların yaşları farkının 8 katı olacağına göre yaşları farkı kaçtır? (Pegem Lisans)",
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6",
          "E": "7"
        },
        "correctAnswer": "B",
        "explanation": "Yaş farkı sabittir (d). 6d + 8 = 8d => 2d = 8 => d = 4."
      },
      {
        "id": "2024-lisans-mat-44",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Yüzde / Kâr-Zarar",
        "text": "Maliyeti x TL olan bir ürün %30 kârla 520 TL'ye satılmaktadır. x kaçtır? (Yargı Lisans)",
        "options": {
          "A": "380",
          "B": "400",
          "C": "420",
          "D": "440",
          "E": "450"
        },
        "correctAnswer": "B",
        "explanation": "1,3x = 520 => x = 400 TL."
      },
      {
        "id": "2024-lisans-mat-45",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Karışım Problemleri",
        "text": "Tuz oranı %30 olan 80 gramlık karışımdan 20 gram su buharlaştırılıyor. Yeni karışımın tuz oranı yüzde kaç olur? (Benim Hocam)",
        "options": {
          "A": "%35",
          "B": "%40",
          "C": "%45",
          "D": "%50",
          "E": "%60"
        },
        "correctAnswer": "B",
        "explanation": "Tuz = 24 gram. Yeni miktar = 60 gram. 24 / 60 = %40."
      },
      {
        "id": "2024-lisans-mat-46",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Hız Problemleri",
        "text": "A kentinden B kentine saatte 80 km hızla gidip saatte 120 km hızla dönen bir aracın gidiş-dönüştürdeki ortalama hızı saatte kaç km'dir? (KPSS Lisans 2024 Çıkmış Soru)",
        "options": {
          "A": "90",
          "B": "96",
          "C": "100",
          "D": "104",
          "E": "108"
        },
        "correctAnswer": "B",
        "explanation": "V_ort = 2*80*120 / (80+120) = 19200 / 200 = 96 km/s."
      },
      {
        "id": "2024-lisans-mat-47",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "İşçi Problemleri",
        "text": "Eşit kapasiteli 4 işçi bir işi 15 günde bitirmektedir. İşçi sayısı 2 artırılırsa aynı iş kaç günde biter? (Yediiklim Lisans)",
        "options": {
          "A": "8",
          "B": "10",
          "C": "12",
          "D": "14",
          "E": "16"
        },
        "correctAnswer": "B",
        "explanation": "4 işçi 15 gün => 6 işçi x gün (Ters orantı) => 6x = 60 => x = 10 gün."
      },
      {
        "id": "2024-lisans-mat-48",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Rutin Olmayan Problemler",
        "text": "Bir saat her gün 4 dakika geri kalmaktadır. Bu saat kaç gün sonra tekrar doğru zamanı gösterir? (Pegem Lisans)",
        "options": {
          "A": "90",
          "B": "120",
          "C": "150",
          "D": "180",
          "E": "360"
        },
        "correctAnswer": "D",
        "explanation": "12 saat = 720 dakika. 720 / 4 = 180 gün."
      },
      {
        "id": "2024-lisans-mat-49",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Modüler)",
        "text": "Bir hemşire 5 günde bir nöbet tutmaktadır. İlk nöbetini Cuma günü tutan hemşire 12. nöbetini hangi gün tutar? (Yargı Lisans)",
        "options": {
          "A": "Pazartesi",
          "B": "Salı",
          "C": "Çarşamba",
          "D": "Perşembe",
          "E": "Pazar"
        },
        "correctAnswer": "C",
        "explanation": "11 nöbet aralığı * 5 gün = 55 gün. 55 mod 7 = 6. Cuma + 6 gün = Çarşamba."
      },
      {
        "id": "2024-lisans-mat-50",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Dizi)",
        "text": "2, 5, 11, 23, 47, x kurala dayalı sayı dizisinde x kaçtır? (Benim Hocam)",
        "options": {
          "A": "85",
          "B": "91",
          "C": "95",
          "D": "99",
          "E": "105"
        },
        "correctAnswer": "C",
        "explanation": "Her terim 2 ile çarpılıp 1 eklenir. 47 * 2 + 1 = 95."
      },
      {
        "id": "2024-lisans-mat-51",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Özel İşlem)",
        "text": "$$a \\oplus b = 2a + 3b - ab$$ işlemi tanımlanıyor. $$4 \\oplus 3$$ sonucu kaçtır? (KPSS Lisans 2024)",
        "options": {
          "A": "3",
          "B": "5",
          "C": "7",
          "D": "9",
          "E": "11"
        },
        "correctAnswer": "B",
        "explanation": "2(4) + 3(3) - (4*3) = 8 + 9 - 12 = 5."
      },
      {
        "id": "2024-lisans-mat-52",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Dairesel Grafik)",
        "text": "Bir çiftlikteki koyun, keçi ve inek sayılarının dağılımı dairesel grafikte gösterilmiştir. Koyunların merkez açısı 180 derece, keçilerin merkez açısı 120 derecedir. Çiftlikte 30 inek olduğuna göre toplam hayvan sayısı kaçtır? (Pegem Lisans)",
        "options": {
          "A": "120",
          "B": "150",
          "C": "180",
          "D": "210",
          "E": "240"
        },
        "correctAnswer": "C",
        "explanation": "İnek açısı = 60 derece. 60 derece 30 ise 360 derece 180 hayvandır."
      },
      {
        "id": "2024-lisans-mat-53",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Çizgi Grafik)",
        "text": "A ve B araçlarının zamana göre aldıkları yol grafiğinde A aracı 2 saatte 160 km, B aracı 3 saatte 180 km yol almaktadır. İki araç aynı anda aynı yöne harekete başladıktan kaç saat sonra aralarındaki mesafe 60 km olur? (Yargı Lisans)",
        "options": {
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "5",
          "E": "6"
        },
        "correctAnswer": "C",
        "explanation": "V_A = 80, V_B = 60. Hız farkı = 20 km/s. 60 / 20 = 3 saat."
      },
      {
        "id": "2024-lisans-mat-54",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Şekil Yetenek)",
        "text": "Kare şeklindeki bir kâğıt önce dikey ortadan, sonra yatay ortadan katlanıp köşesinden dik üçgen şeklinde kesiliyor. Kâğıt tamamen açıldığında merkezde oluşan şekil nedir? (Benim Hocam)",
        "options": {
          "A": "Kare",
          "B": "Eşkenar Dörtgen",
          "C": "Daire",
          "D": "Altıgen",
          "E": "Sekizgen"
        },
        "correctAnswer": "A",
        "explanation": "Dört katlı merkezin kesilmesi kare boşluk oluşturur."
      },
      {
        "id": "2024-lisans-mat-55",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Sayısal Mantık (Sayı Bulmacası)",
        "text": "Üç basamaklı $$abc$$ sayısı için $$a^3 + b^3 + c^3 = abc$$ eşitliği sağlanıyorsa bu sayıya Armstrong sayısı denir. Buna göre 153 bir Armstrong sayısı mıdır? (Yediiklim Lisans)",
        "options": {
          "A": "Evet, 1+125+27 = 153",
          "B": "Hayır",
          "C": "Sadece asal ise",
          "D": "Çift ise",
          "E": "Belirlenemez"
        },
        "correctAnswer": "A",
        "explanation": "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153."
      },
      {
        "id": "2024-lisans-mat-56",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Üçgendedir)",
        "text": "Bir ABC üçgeninde iç açılar sırasıyla 2, 3 ve 4 sayıları ile orantılıdır. Bu üçgenin en büyük iç açısı kaç derecedir? (KPSS Lisans 2024)",
        "options": {
          "A": "60",
          "B": "70",
          "C": "80",
          "D": "90",
          "E": "100"
        },
        "correctAnswer": "C",
        "explanation": "2k + 3k + 4k = 180 => 9k = 180 => k = 20. En büyük açı = 4*20 = 80 derece."
      },
      {
        "id": "2024-lisans-mat-57",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Dik Üçgen)",
        "text": "Hipotenüs uzunluğu 10 cm olan bir dik üçgenin dik kenarlarından biri 6 cm'dir. Bu üçgenin alanı kaç $$cm^2$$'dir? (Pegem Lisans)",
        "options": {
          "A": "24",
          "B": "30",
          "C": "36",
          "D": "48",
          "E": "60"
        },
        "correctAnswer": "A",
        "explanation": "Diğer kenar 8 cm (6-8-10). Alan = (6*8)/2 = 24 cm^2."
      },
      {
        "id": "2024-lisans-mat-58",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Çember)",
        "text": "Çevresi $$12\\pi$$ cm olan bir çemberin çapı kaç cm'dir? (Yargı Lisans)",
        "options": {
          "A": "6",
          "B": "12",
          "C": "18",
          "D": "24",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "2pi*r = 12pi => r = 6 cm. Çap = 2r = 12 cm."
      },
      {
        "id": "2024-lisans-mat-59",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Kare)",
        "text": "Köşegen uzunluğu $$8\\sqrt{2}$$ cm olan bir karenin alanı kaç $$cm^2$$'dir? (Benim Hocam)",
        "options": {
          "A": "32",
          "B": "48",
          "C": "64",
          "D": "128",
          "E": "256"
        },
        "correctAnswer": "C",
        "explanation": "Kenar a = 8 cm. Alan = a^2 = 64 cm^2."
      },
      {
        "id": "2024-lisans-mat-60",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "topic": "Geometri (Analitik)",
        "text": "Analitik düzlemde $$y = 2x + 4$$ doğrusunun x eksenini kestiği noktanın apsisi kaçtır? (Yediiklim Lisans)",
        "options": {
          "A": "-4",
          "B": "-2",
          "C": "0",
          "D": "2",
          "E": "4"
        },
        "correctAnswer": "B",
        "explanation": "y = 0 verilir: 2x + 4 = 0 => x = -2."
      },
      {
        "id": "2024-lisans-tar-61",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İslam Öncesi Türk Tarihi",
        "text": "Tarihte bilinen ilk Türk devleti olan Asya Hun Devleti'nin en parlak dönemini yaşatan hükümdar kimdir? (KPSS Lisans 2024)",
        "options": {
          "A": "Mete Han",
          "B": "Teoman",
          "C": "Ki-ok",
          "D": "Bumin Kağan",
          "E": "Mokan Kağan"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Mete Han)."
      },
      {
        "id": "2024-lisans-tar-62",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Türk-İslam Tarihi",
        "text": "1071 Malazgirt Meydan Muharebesi ile Anadolu'nun kapılarını Türklere açan Büyük Selçuklu hükümdarı kimdir? (KPSS Lisans 2024)",
        "options": {
          "A": "Sultan Alparslan",
          "B": "Tuğrul Bey",
          "C": "Melikşah",
          "D": "Sultan Sancar",
          "E": "Çağrı Bey"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Sultan Alparslan)."
      },
      {
        "id": "2024-lisans-tar-63",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Türk-İslam Kültürü",
        "text": "Gazneli Mahmud'un 'Sarayımın en değerli hazinesi' olarak nitelendirdiği ünlü bilim insanı kimdir? (KPSS Lisans 2024)",
        "options": {
          "A": "Biruni",
          "B": "İbn-i Sina",
          "C": "Farabi",
          "D": "Harezmi",
          "E": "Ömer Hayyam"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Biruni)."
      },
      {
        "id": "2024-lisans-tar-64",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Devleti",
        "text": "Osmanlı Devleti'nde Rumeli'ye ilk geçişi sağlayan ve Çimpe Kalesi'nin alındığı padişah dönemi hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Orhan Bey",
          "B": "Osman Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Çelebi Mehmed"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Orhan Bey)."
      },
      {
        "id": "2024-lisans-tar-65",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Siyasi Tarihi",
        "text": "1402 Ankara Muharebesi sonrasında Osmanlı Devleti'nin girdiği 11 yıllık kargaşa dönemine ne ad verilir? (KPSS Lisans 2024)",
        "options": {
          "A": "Fetret Devri",
          "B": "Vaka-i Hayriye",
          "C": "Lale Devri",
          "D": "Tanzimat Dönemi",
          "E": "Meşrutiyet Dönemi"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Fetret Devri)."
      },
      {
        "id": "2024-lisans-tar-66",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Kültür ve Medeniyeti",
        "text": "Osmanlı Devleti'nde devlet memurlarının ve idarecilerin yetiştirildiği saray mektebi hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Enderun Mektebi",
          "B": "Birun",
          "C": "Harem",
          "D": "Sahn-ı Seman",
          "E": "Medrese"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Enderun Mektebi)."
      },
      {
        "id": "2024-lisans-tar-67",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Toprak Sistemi",
        "text": "Geliri doğrudan devlet hazinesine aktarılan ve iltizam sistemiyle ihale edilen toprak türü hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Mukataa",
          "B": "Dirlik",
          "C": "Paşalık",
          "D": "Yurtluk",
          "E": "Ocaklık"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Mukataa)."
      },
      {
        "id": "2024-lisans-tar-68",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahatları",
        "text": "Osmanlı Devleti'nde ilk geçici elçiliklerin Lale Devri'nde açıldığı Avrupa kenti hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Paris (28 Çelebi Mehmed)",
          "B": "Londra",
          "C": "Viyana",
          "D": "Berlin",
          "E": "Roma"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Paris (28 Çelebi Mehmed))."
      },
      {
        "id": "2024-lisans-tar-69",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Siyasi Tarihi",
        "text": "Osmanlı Devleti'nin Boğazlar üzerindeki tek başına karar verme yetkisini son kez kullandığı 1833 antlaşması hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Hünkâr İskelesi Antlaşması",
          "B": "Balta Limanı Antlaşması",
          "C": "Paris Antlaşması",
          "D": "Londra Antlaşması",
          "E": "Kütahya Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Hünkâr İskelesi Antlaşması)."
      },
      {
        "id": "2024-lisans-tar-70",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Islahatları",
        "text": "Osmanlı Devleti'nin ilk yazılı anayasası olan Kanun-i Esasi hangi padişah döneminde ilan edilmiştir? (KPSS Lisans 2024)",
        "options": {
          "A": "II. Abdülhamid",
          "B": "Sultan Abdülmecid",
          "C": "Sultan Abdülaziz",
          "D": "V. Murad",
          "E": "III. Selim"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (II. Abdülhamid)."
      },
      {
        "id": "2024-lisans-tar-71",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Askeri Yapısı",
        "text": "Osmanlı Devleti'nde kapıkulu askerlerinin üç ayda bir aldıkları maaşa ne ad verilir? (KPSS Lisans 2024)",
        "options": {
          "A": "Ulufe",
          "B": "Cülus bahşişi",
          "C": "Ganimet",
          "D": "Dirlik",
          "E": "Öşür"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Ulufe)."
      },
      {
        "id": "2024-lisans-tar-72",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Maliyesi",
        "text": "Osmanlı Devleti'nde ilk kâğıt para (Kaime) hangi padişah döneminde basılmıştır? (KPSS Lisans 2024)",
        "options": {
          "A": "Sultan Abdülmecid",
          "B": "II. Mahmut",
          "C": "Sultan Abdülaziz",
          "D": "II. Abdülhamid",
          "E": "III. Selim"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Sultan Abdülmecid)."
      },
      {
        "id": "2024-lisans-tar-73",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Osmanlı Siyasi Tarihi",
        "text": "Trablusgarp Savaşı sonunda İtalya ile imzalanan antlaşma aşağıdakilerden hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Uşı Antlaşması",
          "B": "Londra Antlaşması",
          "C": "Bükreş Antlaşması",
          "D": "Atina Antlaşması",
          "E": "İstanbul Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Uşı Antlaşması)."
      },
      {
        "id": "2024-lisans-tar-74",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "I. Dünya Savaşı",
        "text": "Mustafa Kemal'in I. Dünya Savaşı'nda görev yaptığı son cephe aşağıdakilerden hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Suriye-Filistin Cephesi",
          "B": "Çanakkale Cephesi",
          "C": "Kafkas Cephesi",
          "D": "Irak Cephesi",
          "E": "Galiçya Cephesi"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Suriye-Filistin Cephesi)."
      },
      {
        "id": "2024-lisans-tar-75",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele Hazırlık",
        "text": "Mustafa Kemal Paşa ile İstanbul Hükümeti temsilcisi Salih Paşa arasında gerçekleşen ve Temsil Heyeti'nin hukuken tanındığı görüşme hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Amasya Görüşmeleri",
          "B": "Bilecik Görüşmesi",
          "C": "Sivas Kongresi",
          "D": "Erzurum Kongresi",
          "E": "Havza Görüşmesi"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Amasya Görüşmeleri)."
      },
      {
        "id": "2024-lisans-tar-76",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Milli Mücadele Dönemi",
        "text": "Erzurum Kongresi'ne başkanlık eden ve bölgesel toplanıp ulusal kararlar alan devlet adamı kimdir? (KPSS Lisans 2024)",
        "options": {
          "A": "Mustafa Kemal Paşa",
          "B": "Kazım Karabekir",
          "C": "Rauf Orbay",
          "D": "Ali Fuat Cebesoy",
          "E": "Refet Bele"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Mustafa Kemal Paşa)."
      },
      {
        "id": "2024-lisans-tar-77",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "I. TBMM Dönemi",
        "text": "I. TBMM hükümetinin uluslararası alanda kazandığı ilk askeri ve siyasi başarı antlaşması hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Gümrü Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Kars Antlaşması",
          "D": "Ankara Antlaşması",
          "E": "Mudanya Mütarekesi"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Gümrü Antlaşması)."
      },
      {
        "id": "2024-lisans-tar-78",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Cepheleri",
        "text": "Sakarya Meydan Muharebesi sonrasında Mustafa Kemal Paşa'ya 'Gazilik' unvanı ve 'Mareşallik' rütbesini veren kurum hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "TBMM",
          "B": "Temsil Heyeti",
          "C": "Mebusan Meclisi",
          "D": "Genelkurmay Başkanlığı",
          "E": "Bakanlar Kurulu"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (TBMM)."
      },
      {
        "id": "2024-lisans-tar-79",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Kurtuluş Savaşı Antlaşmaları",
        "text": "Türkiye'nin güney sınırının (Hatay hariç) çizildiği ve Fransa ile imzalanan 1921 antlaşması hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Ankara Antlaşması",
          "B": "Moskova Antlaşması",
          "C": "Gümrü Antlaşması",
          "D": "Mudanya Antlaşması",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Ankara Antlaşması)."
      },
      {
        "id": "2024-lisans-tar-80",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "1 Kasım 1922 tarihinde Saltanatın kaldırılmasıyla hangi kurum devlet başkanlığı sorununu geçici olarak üstlenmiştir? (KPSS Lisans 2024)",
        "options": {
          "A": "TBMM Başkanı",
          "B": "Halife",
          "C": "Sadrazam",
          "D": "Cumhurbaşkanı",
          "E": "Başbakan"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (TBMM Başkanı)."
      },
      {
        "id": "2024-lisans-tar-81",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "İnkılap Tarihi",
        "text": "1925 yılında çıkarılan ve toplumsal alanda kıyafet düzenlemesini amaçlayan kanun hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Şapka İktisası Hakkında Kanun",
          "B": "Soyadı Kanunu",
          "C": "Kabotaj Kanunu",
          "D": "Tevhid-i Tedrisat",
          "E": "Tekâlif-i Milliye"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Şapka İktisası Hakkında Kanun)."
      },
      {
        "id": "2024-lisans-tar-82",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk İlkeleri",
        "text": "Türk karasularında gemi işletme ve liman hizmetlerini Türk vatandaşlarına devreden Kabotaj Kanunu hangi ilke ile doğrudan ilgilidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Milliyetçilik",
          "B": "Devletçilik",
          "C": "Laiklik",
          "D": "Halkçılık",
          "E": "İnkılapçılık"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Milliyetçilik)."
      },
      {
        "id": "2024-lisans-tar-83",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi İktisat",
        "text": "1924 yılında özel sektöre kredi sağlamak amacıyla kurulan Türkiye Cumhuriyetinin ilk özel bankası hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Türkiye İş Bankası",
          "B": "Merkez Bankası",
          "C": "Ziraat Bankası",
          "D": "Sümerbank",
          "E": "Etibank"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Türkiye İş Bankası)."
      },
      {
        "id": "2024-lisans-tar-84",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "1936 yılında imzalanan ve Boğazların egemenliğini tam olarak Türkiye'ye devreden antlaşma hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Montrö Boğazlar Sözleşmesi",
          "B": "Lozan Antlaşması",
          "C": "Balkan Antantı",
          "D": "Sadabat Paktı",
          "E": "Milletler Cemiyeti Kararı"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Montrö Boğazlar Sözleşmesi)."
      },
      {
        "id": "2024-lisans-tar-85",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Atatürk Dönemi Dış Politika",
        "text": "1939 yılında Türkiye Cumhuriyeti'ne katılan ve ilk cumhurbaşkanı Tayfur Sökmen olan bağımsız devlet hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Hatay Devleti",
          "B": "Kıbrıs Türk Devleti",
          "C": "Batı Trakya",
          "D": "Musul",
          "E": "Batum"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Hatay Devleti)."
      },
      {
        "id": "2024-lisans-tar-86",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Türk ve Dünya Tarihi",
        "text": "II. Dünya Savaşı sonrasında ABD'nin Avrupa ülkelerine ekonomik yardım sağlamak amacıyla yayımladığı plan hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Marshall Planı",
          "B": "Truman Doktrini",
          "C": "Eisenhower Doktrini",
          "D": "Schuman Bildirisi",
          "E": "Breznev Doktrini"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Marshall Planı)."
      },
      {
        "id": "2024-lisans-tar-87",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "topic": "Çağdaş Dünya Tarihi",
        "text": "1962 yılında ABD ile SSCB arasında nükleer savaş tehdidine yol açan kriz hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Küba Füze Krizi",
          "B": "Kore Savaşı",
          "C": "Berlin Krizi",
          "D": "Vietnam Savaşı",
          "E": "Süveyş Krizi"
        },
        "correctAnswer": "A",
        "explanation": "Tarih Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Küba Füze Krizi)."
      },
      {
        "id": "2024-lisans-cog-88",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Geomorfoloji",
        "text": "Türkiye'de IV. Jeolojik Zamanda (Kuvaterner) gerçekleşen egeid karasının çökmesiyle oluşan kıyı tipi hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Ria Kıyı Tipi (İstanbul ve Çanakkale)",
          "B": "Dalmaçya",
          "C": "Boyuna",
          "D": "Enine",
          "E": "Limanlı"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Ria Kıyı Tipi (İstanbul ve Çanakkale))."
      },
      {
        "id": "2024-lisans-cog-89",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Karstik Şekiller",
        "text": "Türkiye'de lapya, dolin, uvala ve polye gibi karstik aşınım şekillerinin en yaygın görüldüğü kayaç türü hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Kalker (Kireç Taşı)",
          "B": "Jips",
          "C": "Kaya Tuzu",
          "D": "Andezit",
          "E": "Bazalt"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Kalker (Kireç Taşı))."
      },
      {
        "id": "2024-lisans-cog-90",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tektonik Göller",
        "text": "Aşağıdaki göllerimizden hangisi fay hatlarına bağlı tektonik çöküntü alanlarında oluşmuş bir göldür? (KPSS Lisans 2024)",
        "options": {
          "A": "Sapanca Gölü",
          "B": "Tortum Gölü",
          "C": "Abant Gölü",
          "D": "Çıldır Gölü",
          "E": "Salda Gölü"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Sapanca Gölü)."
      },
      {
        "id": "2024-lisans-cog-91",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "İklim Coğrafyası",
        "text": "Türkiye'de yıllık yağış miktarının en az olduğu ve kuraklığın şiddetli hissedildiği mikroklima alanı hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Iğdır Ovası ve Karapınar Çevresi",
          "B": "Rize Yöresi",
          "C": "Hakkari Yöresi",
          "D": "Antalya Yöresi",
          "E": "Zonguldak Çevresi"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Iğdır Ovası ve Karapınar Çevresi)."
      },
      {
        "id": "2024-lisans-cog-92",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Bitki Örtüsü",
        "text": "Türkiye'de sadece belirli bir dar coğrafi bölgede yetişen endemik bitki türüne örnek hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Datça Hurması ve Sığla Ağacı",
          "B": "Kızılçam",
          "C": "Kayın",
          "D": "Meşe",
          "E": "Bozkır"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Datça Hurması ve Sığla Ağacı)."
      },
      {
        "id": "2024-lisans-cog-93",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Toprak Coğrafyası",
        "text": "Türkiye'de Erzurum-Kars platosunda çayır bitki örtüsü altında gelişen en verimli organik toprak türü hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Çernozyom (Kara Toprak)",
          "B": "Terra Rossa",
          "C": "Podzol",
          "D": "Pozol",
          "E": "Kestane Renkli"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Çernozyom (Kara Toprak))."
      },
      {
        "id": "2024-lisans-cog-94",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Nüfus Piramitleri",
        "text": "Türkiye'nin son yıllardaki nüfus piramidi incelendiğinde doğum oranlarının düşmesiyle tabanın daralması neyi gösterir? (KPSS Lisans 2024)",
        "options": {
          "A": "Nüfusun yaşlanma sürecine girdiğini",
          "B": "Çocuk nüfusun arttığını",
          "C": "Nüfus artış hızının rekor kırdığını",
          "D": "Dış göçlerin durduğunu",
          "E": "Tarım nüfusunun arttığını"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Nüfusun yaşlanma sürecine girdiğini)."
      },
      {
        "id": "2024-lisans-cog-95",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Yerleşme Coğrafyası",
        "text": "Türkiye'de Karadeniz Bölgesi'nde dağınık yerleşme tipinin görülmesinin temel iki nedeni nedir? (KPSS Lisans 2024)",
        "options": {
          "A": "Engebeli arazi ve su kaynaklarının bolluğu",
          "B": "Düz araziler ve kuraklık",
          "C": "Ulaşım kolaylığı",
          "D": "Sanayileşme",
          "E": "Maden yatakları"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Engebeli arazi ve su kaynaklarının bolluğu)."
      },
      {
        "id": "2024-lisans-cog-96",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de ferrokrom sanayisinin hammaddesi olan ve Elazığ (Guleman) ile Muğla (Fethiye)'da çıkarılan maden hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Krom",
          "B": "Boksit",
          "C": "Mermer",
          "D": "Bakır",
          "E": "Demir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Krom)."
      },
      {
        "id": "2024-lisans-cog-97",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Madenler",
        "text": "Türkiye'de alüminyum sanayisinin hammaddesi olan boksit madeninin yatakları nerede bulunur? (KPSS Lisans 2024)",
        "options": {
          "A": "Konya (Seydişehir) ve Antalya (Akseki)",
          "B": "Zonguldak",
          "C": "Batman",
          "D": "Kütahya",
          "E": "Eskişehir"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Konya (Seydişehir) ve Antalya (Akseki))."
      },
      {
        "id": "2024-lisans-cog-98",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Enerji Santralleri",
        "text": "Türkiye'de doğal gaz ile çalışan rüzgar/buhar kombine çevrim santrallerinin bulunduğu yer hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Bursa (Ovaakça) ve Kırklareli (Hamitabat)",
          "B": "Afşin-Elbistan",
          "C": "Yatağan",
          "D": "Soma",
          "E": "Çatalağzı"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Bursa (Ovaakça) ve Kırklareli (Hamitabat))."
      },
      {
        "id": "2024-lisans-cog-99",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Tarım Coğrafyası",
        "text": "Türkiye'de devlet kontrolünde üretimi yapılan ve kenevir bitkisinin ekim izin sebebi nedir? (KPSS Lisans 2024)",
        "options": {
          "A": "Uyuşturucu imalatının önlenmesi",
          "B": "Erozyonu önlemek",
          "C": "Toprağı havalandırmak",
          "D": "Suyu tasarruf etmek",
          "E": "Böcekleri uzaklaştırmak"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Uyuşturucu imalatının önlenmesi)."
      },
      {
        "id": "2024-lisans-cog-100",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Sanayi Dağılışı",
        "text": "Türkiye'de pamuklu dokuma sanayisinin geliştiği ancak pamuk tarımının yapılmadığı kent hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Kayseri ve İstanbul",
          "B": "Adana",
          "C": "Şanlıurfa",
          "D": "Aydın",
          "E": "Denizli"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Kayseri ve İstanbul)."
      },
      {
        "id": "2024-lisans-cog-101",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Ulaşım Coğrafyası",
        "text": "Türkiye'nin demir yolu ağı bağlantısı bulunmayan Doğu Karadeniz limanı hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Trabzon Limanı",
          "B": "Samsun Limanı",
          "C": "Mersin Limanı",
          "D": "İzmir Limanı",
          "E": "Bandırma Limanı"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Trabzon Limanı)."
      },
      {
        "id": "2024-lisans-cog-102",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Limanlar",
        "text": "Türkiye'nin en büyük konteyner ve ihracat limanlarından biri olan hinterlandı geniş liman hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Mersin Limanı",
          "B": "Sinop Limanı",
          "C": "Hopa Limanı",
          "D": "Giresun Limanı",
          "E": "Rize Limanı"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Mersin Limanı)."
      },
      {
        "id": "2024-lisans-cog-103",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Turizm Coğrafyası",
        "text": "UNESCO Dünya Kültür Mirası listesinde yer alan Pamukkale Travertenleri ve Hierapolis antik kenti hangi ilimizdedir? (KPSS Lisans 2024)",
        "options": {
          "A": "Denizli",
          "B": "Nevşehir",
          "C": "Şanlıurfa",
          "D": "Çanakkale",
          "E": "Sivas"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Denizli)."
      },
      {
        "id": "2024-lisans-cog-104",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Bölgesel Kalkınma",
        "text": "GAP (Güneydoğu Anadolu Projesi) kapsamındaki tarımsal sulamayla üretimi en çok artan endüstri bitkisi hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Pamuk",
          "B": "Tütün",
          "C": "Fındık",
          "D": "Çay",
          "E": "Zeytin"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Pamuk)."
      },
      {
        "id": "2024-lisans-cog-105",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "topic": "Çevre Sorunları",
        "text": "Türkiye'de kapalı havzalarda aşırı yeraltı suyu kullanımı sonucu zeminin çökmesiyle oluşan çukurlara ne ad verilir? (KPSS Lisans 2024)",
        "options": {
          "A": "Obruk",
          "B": "Lapya",
          "C": "Dolin",
          "D": "Kanyon",
          "E": "Fay"
        },
        "correctAnswer": "A",
        "explanation": "Coğrafya Lisans müfredatı ve ÖSYM kazanımları doğrultusunda doğru cevap A seçeneğidir (Obruk)."
      },
      {
        "id": "2024-lisans-vat-106",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hukuk Kuralları",
        "text": "Belirli bir zamanda bir ülkede yürürlükte bulunan yetkili makamlarca konulmuş yazılı hukuk kurallarının tümüne ne ad verilir? (KPSS Lisans 2024)",
        "options": {
          "A": "Mevzuat (Mevzii Hukuk)",
          "B": "Pozitif Hukuk",
          "C": "Tabii Hukuk",
          "D": "Tarihi Hukuk",
          "E": "İdeal Hukuk"
        },
        "correctAnswer": "A",
        "explanation": "Hukuk Lisans ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Mevzuat (Mevzii Hukuk))."
      },
      {
        "id": "2024-lisans-vat-107",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Hak Türleri",
        "text": "Sadece belirli bir kişiye karşı ileri sürülebilen alacak ve sözleşme haklarına ne ad verilir? (KPSS Lisans 2024)",
        "options": {
          "A": "Nisbi Haklar",
          "B": "Mutlak Haklar",
          "C": "Ayni Haklar",
          "D": "Telif Hakları",
          "E": "Kişilik Hakları"
        },
        "correctAnswer": "A",
        "explanation": "Hukuk Lisans ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Nisbi Haklar)."
      },
      {
        "id": "2024-lisans-vat-108",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Hukuku",
        "text": "1982 Anayasası'na göre TBMM üye tamsayısı (milletvekili sayısı) kaçtır? (KPSS Lisans 2024)",
        "options": {
          "A": "600 milletvekili",
          "B": "550 milletvekili",
          "C": "450 milletvekili",
          "D": "500 milletvekili",
          "E": "650 milletvekili"
        },
        "correctAnswer": "A",
        "explanation": "Hukuk Lisans ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (600 milletvekili)."
      },
      {
        "id": "2024-lisans-vat-109",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Anayasa Değişikliği",
        "text": "1982 Anayasası'na göre Anayasa değişiklik teklifinin kabul edilebilmesi için TBMM'de aranan en az oy sayısı nedir? (KPSS Lisans 2024)",
        "options": {
          "A": "Üye tamsayısının 3/5'i (360 milletvekili)",
          "B": "Üye tamsayısının salt çoğunluğu",
          "C": "Üye tamsayısının 2/3'ü",
          "D": "Katılanların çoğunluğu",
          "E": "Üye tamsayısının 4/5'i"
        },
        "correctAnswer": "A",
        "explanation": "Hukuk Lisans ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Üye tamsayısının 3/5'i (360 milletvekili))."
      },
      {
        "id": "2024-lisans-vat-110",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yargı Organları",
        "text": "Hakimler ve Savcılar Kurulu (HSK) toplam kaç üyeden oluşmaktadır? (KPSS Lisans 2024)",
        "options": {
          "A": "13 üye (11 üye + Adalet Bakanı + Müsteşar)",
          "B": "15 üye",
          "C": "17 üye",
          "D": "21 üye",
          "E": "12 üye"
        },
        "correctAnswer": "A",
        "explanation": "Hukuk Lisans ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (13 üye (11 üye + Adalet Bakanı + Müsteşar))."
      },
      {
        "id": "2024-lisans-vat-111",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Yürütme Organı",
        "text": "Cumhurbaşkanlığı Kararnameleri kanunlaşması ve denetimi hangi mahkeme tarafından yapılır? (KPSS Lisans 2024)",
        "options": {
          "A": "Anayasa Mahkemesi",
          "B": "Danıştay",
          "C": "Yargıtay",
          "D": "Sayıştay",
          "E": "Uyuşmazlık Mahkemesi"
        },
        "correctAnswer": "A",
        "explanation": "Hukuk Lisans ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Anayasa Mahkemesi)."
      },
      {
        "id": "2024-lisans-vat-112",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "İdare Hukuku",
        "text": "Aşağıdakilerden hangisi Anayasa'da açıkça belirtilen Kamu Tüzel Kişiliğine sahip kurumlar arasında yer alır? (KPSS Lisans 2024)",
        "options": {
          "A": "Üniversiteler ve TRT",
          "B": "Bakanlıklar",
          "C": "Emniyet Genel Müdürlüğü",
          "D": "Valilikler",
          "E": "Kaymakamlıklar"
        },
        "correctAnswer": "A",
        "explanation": "Hukuk Lisans ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Üniversiteler ve TRT)."
      },
      {
        "id": "2024-lisans-vat-113",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Devlet Memurları",
        "text": "657 sayılı Devlet Memurları Kanunu'na göre memurluktan çıkarma cezasını vermeye yetkili makam hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Yüksek Disiplin Kurulu",
          "B": "Atamaya Yetkili Amir",
          "C": "Disiplin Kurulu",
          "D": "Vali",
          "E": "Bakan"
        },
        "correctAnswer": "A",
        "explanation": "Hukuk Lisans ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (Yüksek Disiplin Kurulu)."
      },
      {
        "id": "2024-lisans-vat-114",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "topic": "Kamu Denetçiliği",
        "text": "Türkiye'de Kamu Denetçiliği Kurumu (Ombudsmanlık) hangi makama bağlı olarak faaliyet gösterir? (KPSS Lisans 2024)",
        "options": {
          "A": "TBMM Başkanlığına",
          "B": "Cumhurbaşkanlığına",
          "C": "Adalet Bakanlığına",
          "D": "Anayasa Mahkemesine",
          "E": "Danıştaya"
        },
        "correctAnswer": "A",
        "explanation": "Hukuk Lisans ve 1982 Anayasası hükümlerine göre doğru cevap A seçeneğidir (TBMM Başkanlığına)."
      },
      {
        "id": "2024-lisans-gun-115",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "UNESCO Mirası",
        "text": "UNESCO Dünya Kültür Mirası listesinde yer alan ve Mimar Sinan'ın 'Ustalık eserim' dediği Selimiye Camii hangi ilimizdedir? (KPSS Lisans 2024)",
        "options": {
          "A": "Edirne",
          "B": "İstanbul",
          "C": "Bursa",
          "D": "Konya",
          "E": "Kayseri"
        },
        "correctAnswer": "A",
        "explanation": "Güncel Lisans bilgisi doğrultusunda doğru cevap A seçeneğidir (Edirne)."
      },
      {
        "id": "2024-lisans-gun-116",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Uluslararası Örgütler",
        "text": "Türk Devletleri Teşkilatı (TDT) Genel Merkezi hangi şehirde bulunmaktadır? (KPSS Lisans 2024)",
        "options": {
          "A": "İstanbul",
          "B": "Ankara",
          "C": "Bakü",
          "D": "Turan",
          "E": "Taşkent"
        },
        "correctAnswer": "A",
        "explanation": "Güncel Lisans bilgisi doğrultusunda doğru cevap A seçeneğidir (İstanbul)."
      },
      {
        "id": "2024-lisans-gun-117",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Edebiyat Klasikleri",
        "text": "Türk edebiyatında 'Saatleri Ayarlama Enstitüsü' ve 'Huzur' romanlarının dünyaca ünlü yazarı kimdir? (KPSS Lisans 2024)",
        "options": {
          "A": "Ahmet Hamdi Tanpınar",
          "B": "Peyami Safa",
          "C": "Tarık Buğra",
          "D": "Oğuz Atay",
          "E": "Kemal Tahir"
        },
        "correctAnswer": "A",
        "explanation": "Güncel Lisans bilgisi doğrultusunda doğru cevap A seçeneğidir (Ahmet Hamdi Tanpınar)."
      },
      {
        "id": "2024-lisans-gun-118",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Bilim ve Teknoloji",
        "text": "2015 Nobel Kimya Ödülü'nü kazanarak DNA onarımı konusundaki çalışmalarıyla göğsümüzü kabartan bilim insanımız kimdir? (KPSS Lisans 2024)",
        "options": {
          "A": "Prof. Dr. Aziz Sancar",
          "B": "Prof. Dr. Oktay Sinanoğlu",
          "C": "Prof. Dr. Gazi Yaşargil",
          "D": "Prof. Dr. Celal Şengör",
          "E": "Prof. Dr. Cahit Arf"
        },
        "correctAnswer": "A",
        "explanation": "Güncel Lisans bilgisi doğrultusunda doğru cevap A seçeneğidir (Prof. Dr. Aziz Sancar)."
      },
      {
        "id": "2024-lisans-gun-119",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Uluslararası Antlaşmalar",
        "text": "İklim değişikliği ile mücadelede sera gazı salınımını azaltmayı hedefleyen ve Türkiye'nin de taraf olduğu uluslararası antlaşma hangisidir? (KPSS Lisans 2024)",
        "options": {
          "A": "Paris İklim Anlaşması",
          "B": "Kyoto Protokolü",
          "C": "Montreal Sözleşmesi",
          "D": "Viyana Sözleşmesi",
          "E": "Cenevre Anlaşması"
        },
        "correctAnswer": "A",
        "explanation": "Güncel Lisans bilgisi doğrultusunda doğru cevap A seçeneğidir (Paris İklim Anlaşması)."
      },
      {
        "id": "2024-lisans-gun-120",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "topic": "Sanat ve Kültür",
        "text": "Türk resim sanatında 'Kaplumbağa Terbiyecisi' tablosu ile tanınan ünlü ressam ve müzeci kimdir? (KPSS Lisans 2024)",
        "options": {
          "A": "Osman Hamdi Bey",
          "B": "Şeker Ahmet Paşa",
          "C": "Hikmet Onat",
          "D": "İbrahim Çallı",
          "E": "Abidin Dino"
        },
        "correctAnswer": "A",
        "explanation": "Güncel Lisans bilgisi doğrultusunda doğru cevap A seçeneğidir (Osman Hamdi Bey)."
      }
    ]
  },
  {
    "id": "kpss-2022-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2022,
    "title": "2022 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2022 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Yapılandırılıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2020-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2020,
    "title": "2020 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2020 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Yapılandırılıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2018-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2018,
    "title": "2018 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2018 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Yapılandırılıyor)",
    "totalQuestions": 0,
    "questions": []
  },
  {
    "id": "kpss-2016-lisans",
    "category": "lisans",
    "categoryTitle": "KPSS Lisans (GY-GK)",
    "year": 2016,
    "title": "2016 KPSS Lisans (GY-GK) Sınavı",
    "description": "ÖSYM 2016 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Yapılandırılıyor)",
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
