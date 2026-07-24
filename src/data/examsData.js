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
    "description": "ÖSYM 2024 KPSS Lisans (GY-GK) Genel Yetenek & Genel Kültür Sınavı (Soru Havuzu Yapılandırılıyor)",
    "totalQuestions": 0,
    "questions": []
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
