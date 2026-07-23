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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Ön Lisans 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Ön Lisans 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Ön Lisans 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Ön Lisans 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Ön Lisans 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2024-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2024-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2024-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Lisans (GY-GK) 2024)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2022-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2022-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2022-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Lisans (GY-GK) 2022)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2020-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2020-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2020-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Lisans (GY-GK) 2020)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2018-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2018-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2018-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Lisans (GY-GK) 2018)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #11 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #12 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #13 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #14 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #15 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #16 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #17 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #18 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #19 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #20 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #21 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #22 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #23 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #24 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #25 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #26 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "C",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #27 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "D",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #28 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "E",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #29 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "A",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
      },
      {
        "id": "2016-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Türkçe dil bilgisi ve paragraf analizi sorusu #30 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "A seçeneği analizi",
          "B": "B seçeneği analizi",
          "C": "C seçeneği analizi",
          "D": "D seçeneği analizi",
          "E": "E seçeneği analizi"
        },
        "correctAnswer": "B",
        "explanation": "Türkçe dil bilgisi kuralı uyarınca doğru cevap şıkkıdır.",
        "topic": "Türkçe Gramer ve Paragraf"
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
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #6 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #7 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #8 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #9 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #10 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #11 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #12 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #13 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #14 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #15 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #16 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #17 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #18 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #19 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #20 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #21 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #22 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #23 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #24 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #25 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #26 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
      },
      {
        "id": "2016-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi sorusu #27 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli",
          "E": "Lozan Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi ve Atatürk İlkeleri"
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
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #4 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #5 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #6 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #7 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #8 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #9 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #10 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #11 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #12 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #13 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #14 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #15 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #16 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #17 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
      },
      {
        "id": "2016-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafyası ve maden yatakları sorusu #18 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Doğu Anadolu Bölgesi"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "Türkiye Coğrafyası ve Madenler"
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
        "text": "1982 Anayasası idare hukuku sorusu #4 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #5 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #6 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #7 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #8 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası idare hukuku sorusu #9 (KPSS Lisans (GY-GK) 2016)",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnamesi",
          "B": "Yönetmelik",
          "C": "Kanun",
          "D": "Anayasa Değişikliği",
          "E": "Uluslararası Antlaşma"
        },
        "correctAnswer": "A",
        "explanation": "A seçeneği doğrudur.",
        "topic": "İdare Hukuku"
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

// Orantılı Sınav Süresi Hesaplama (ÖSYM: 120 Soru = 130 Dk -> Soru başına ~1.0833 Dk)
export const calculateExamDurationInMinutes = (questionCount) => {
  if (!questionCount || questionCount <= 0) return 0;
  return Math.round(questionCount * (130 / 120));
};

// ÖSYM Net ve Tahmini Puan Hesaplayıcı
export const calculateResults = (questions, userAnswers) => {
  const breakdown = {};
  SUBJECTS.forEach(sub => {
    breakdown[sub.id] = { correct: 0, wrong: 0, empty: 0, net: 0 };
  });

  let totalCorrect = 0;
  let totalWrong = 0;
  let totalEmpty = 0;

  questions.forEach(q => {
    const subId = q.subject;
    const ans = userAnswers[q.id];

    if (!ans) {
      totalEmpty++;
      if (breakdown[subId]) breakdown[subId].empty++;
    } else if (ans === q.correctAnswer) {
      totalCorrect++;
      if (breakdown[subId]) breakdown[subId].correct++;
    } else {
      totalWrong++;
      if (breakdown[subId]) breakdown[subId].wrong++;
    }
  });

  // Net hesabı: 4 yanlış 1 doğruyu götürür
  Object.keys(breakdown).forEach(subId => {
    const sub = breakdown[subId];
    sub.net = Math.max(0, sub.correct - (sub.wrong / 4));
  });

  const totalNet = Math.max(0, totalCorrect - (totalWrong / 4));

  // Tahmini Puan Formülü Kestirimi (Taban ~50 + Net * 0.416)
  const estimatedP93Score = Number((50 + (totalNet * 0.416)).toFixed(3));

  return {
    totalCorrect,
    totalWrong,
    totalEmpty,
    totalNet: Number(totalNet.toFixed(2)),
    estimatedP93Score,
    breakdown
  };
};
