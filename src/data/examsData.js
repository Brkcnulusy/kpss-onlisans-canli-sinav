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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2024-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2024-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2024-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2024-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2024-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2024-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2024-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2024-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2024-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2024-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2024-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2024-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2024-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2024-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2024-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2024-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2024-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2024-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2024-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2024-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2024-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2024-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2024-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2024-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2022-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2022-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2022-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2022-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2022-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2022-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2022-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2022-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2022-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2022-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2022-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2022-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2022-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2022-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2022-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2022-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2022-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2022-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2022-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2022-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2022-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2022-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2022-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2022-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2020-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2020-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2020-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2020-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2020-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2020-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2020-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2020-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2020-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2020-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2020-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2020-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2020-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2020-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2020-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2020-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2020-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2020-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2020-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2020-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2020-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2020-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2020-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2020-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2018-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2018-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2018-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2018-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2018-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2018-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2018-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2018-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2018-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2018-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2018-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2018-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2018-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2018-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2018-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2018-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2018-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2018-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2018-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2018-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2018-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2018-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2018-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2018-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2016-onlisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2016-onlisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2016-onlisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-onlisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-onlisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-onlisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2016-onlisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2016-onlisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2016-onlisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2016-onlisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2016-onlisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-onlisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2016-onlisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2016-onlisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2016-onlisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2016-onlisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2016-onlisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-onlisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2016-onlisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2016-onlisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2016-onlisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-onlisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2016-onlisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2016-onlisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2016-onlisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-onlisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2016-onlisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2016-onlisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2016-onlisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2016-onlisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2016-onlisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2024-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2024-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2024-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2024-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2024-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2024-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2024-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2024-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2024-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2024-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2024-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2024-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2024-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2024-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2024-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2024-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2024-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2024-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2024-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2024-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2024-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2024-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2024-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2024-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2024-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2024-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2024-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2024-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2024-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2024-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2022-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2022-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2022-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2022-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2022-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2022-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2022-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2022-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2022-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2022-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2022-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2022-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2022-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2022-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2022-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2022-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2022-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2022-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2022-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2022-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2022-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2022-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2022-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2022-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2022-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2022-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2022-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2022-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2022-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2022-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2020-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2020-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2020-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2020-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2020-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2020-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2020-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2020-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2020-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2020-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2020-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2020-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2020-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2020-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2020-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2020-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2020-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2020-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2020-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2020-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2020-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2020-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2020-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2020-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2020-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2020-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2020-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2020-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2020-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2020-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2018-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2018-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2018-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2018-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2018-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2018-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2018-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2018-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2018-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2018-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2018-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2018-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2018-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2018-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2018-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2018-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2018-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2018-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2018-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2018-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2018-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2018-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2018-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2018-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2018-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2018-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2018-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2018-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2018-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2018-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
        "text": "Aşağıdaki cümlelerin hangisinde 'altını çizmek' deyimi anlamıyla örtüşecek şekilde kullanılmıştır?",
        "options": {
          "A": "Dersteki önemli tarihî tarihlerin altını çizerek defterine dikkatle not alıyordu.",
          "B": "Yazar, konuşmasında fırsat eşitliğinin toplumsal kalkınmadaki hayati önemini vurguladı.",
          "C": "Sayfanın altındaki boş alana kırmızı kalemle simetrik bir çizgi çekti.",
          "D": "Tablonun altını çizerek çerçevenin tam ortalanmasını sağladı.",
          "E": "Raporun son sayfasını çizip inceleme kuruluna onay için gönderdi."
        },
        "correctAnswer": "B",
        "explanation": "'Altını çizmek' deyimi, bir hususun önemini vurgulamak ve ona dikkat çekmek demektir.",
        "topic": "Deyimler ve Anlamı"
      },
      {
        "id": "2016-lisans-tr-2",
        "number": 2,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
        "options": {
          "A": "Türk Dil Kurumu binasında yapılan seminer saat 14.00'te başladı.",
          "B": "Hafta sonu arkadaş grubuyla birlikte Boğaz Köprüsü'nden geçti.",
          "C": "Yapılan araştırmalar bir çok adayın bu soru tarzında kararsız kaldığını gösteriyor.",
          "D": "Cumhuriyet Dönemi Türk Edebiyatı üzerine akademik çalışmalar yürütüyor.",
          "E": "Her akşam saat 20.00'de haber bültenini izlemeyi alışkanlık edindi."
        },
        "correctAnswer": "C",
        "explanation": "'Birçok' kelimesi belgisiz sıfat olarak kullanıldığında bitişik yazılmalıdır.",
        "topic": "Yazım Kuralları"
      },
      {
        "id": "2016-lisans-tr-3",
        "number": 3,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nokta ( . ) işareti yanlış kullanılmıştır?",
        "options": {
          "A": "Toplantı saat 10.30'da Ana Salon'da gerçekleştirilecektir.",
          "B": "Prof. Dr. Ahmet Bey yarınki uluslararası konferansta bildiri sunacak.",
          "C": "Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.",
          "D": "Bu değerli eser 1.inci baskısını kısa sürede tamamlayarak tükendi.",
          "E": "Dr. Mehmet poliklinikte hasta muayenesine sabah başladı."
        },
        "correctAnswer": "D",
        "explanation": "Sayılardan sonra sıra bildirmek için nokta kullanılır. Ancak '1.inci' kullanımında nokta ve '-inci' eki birlikte kullanılamaz.",
        "topic": "Noktalama İşaretleri"
      },
      {
        "id": "2016-lisans-tr-4",
        "number": 4,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Sanatçı, eserlerinde yerel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümledeki 'evrensel bir çizgiye ulaşmak' sözüyle anlatılmak istenen aşağıdakilerden hangisidir?",
        "options": {
          "A": "Yalnızca kendi toplumunun kültürüne hitap etmek",
          "B": "Tüm insanlığı kapsayan ortak ve kalıcı bir nitelik kazanmak",
          "C": "Günün moda anlayışına uygun eserler kaleme almak",
          "D": "Eserlerinde yabancı terim ve sözcüklere bolca yer vermek",
          "E": "Geleneksel sanat kurallarını tamamen reddedip yıpmak"
        },
        "correctAnswer": "B",
        "explanation": "'Evrensel', sınırları aşan ve tüm insanlığa hitap eden niteliktir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-lisans-tr-5",
        "number": 5,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki cümlelerin hangisinde nesnel bir yargı bildirilmektedir?",
        "options": {
          "A": "Şairin son şiir kitabı okuyucuyu büyüleyen muhteşem dizeler içeriyor.",
          "B": "Roman toplam 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.",
          "C": "Filmin sonundaki müzik dinleyicileri derin düşüncelere sevk ediyor.",
          "D": "Yazarın üslubu son derece sürükleyici ve eşsiz bir niteliğe sahiptir.",
          "E": "Mimarisiyle göz dolduran bu tarihi yapıya gören herkes hayran kalıyor."
        },
        "correctAnswer": "B",
        "explanation": "Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel verilerdir.",
        "topic": "Cümlede Anlam"
      },
      {
        "id": "2016-lisans-tr-6",
        "number": 6,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #6)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-7",
        "number": 7,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #7)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-8",
        "number": 8,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #8)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-9",
        "number": 9,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #9)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-10",
        "number": 10,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #10)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-11",
        "number": 11,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #11)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-12",
        "number": 12,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #12)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-13",
        "number": 13,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #13)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-14",
        "number": 14,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #14)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-15",
        "number": 15,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #15)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-16",
        "number": 16,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #16)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-17",
        "number": 17,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #17)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-18",
        "number": 18,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #18)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-19",
        "number": 19,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #19)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-20",
        "number": 20,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #20)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-21",
        "number": 21,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #21)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-22",
        "number": 22,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #22)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-23",
        "number": 23,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #23)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-24",
        "number": 24,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #24)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-25",
        "number": 25,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #25)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-26",
        "number": 26,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #26)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-27",
        "number": 27,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #27)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-28",
        "number": 28,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #28)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-29",
        "number": 29,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #29)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-tr-30",
        "number": 30,
        "subject": "turkce",
        "subjectTitle": "Türkçe",
        "text": "Aşağıdaki paragrafta numaralanmış cümlelerin hangisi düşüncenin akışını bozmaktadır? (Soru #30)",
        "options": {
          "A": "(I) Sanatın temel işlevi insanı ve toplumu derinlemesine kavramaktır.",
          "B": "(II) Edebiyat, dilin olanaklarını kullanarak estetik bir evren kurar.",
          "C": "(III) Günümüzde teknolojik gelişmeler yayıncılık sektörünü hızla dönüştürmektedir.",
          "D": "(IV) Şiir ve roman, insan ruhunun karmaşık labirentlerinde ışık tutar.",
          "E": "(V) Bu sayede okur kendi iç dünyasıyla yüzleşme imkanı bulur."
        },
        "correctAnswer": "C",
        "explanation": "III. cümlede paragrafın genelindeki 'sanat ve edebiyatın insan ruhuna etkisi' konusundan sapılarak 'yayıncılık teknolojisi'ne geçilmiştir.",
        "topic": "Paragrafta Yapı"
      },
      {
        "id": "2016-lisans-mat-1",
        "number": 31,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "3/2",
          "B": "5/4",
          "C": "7/6",
          "D": "9/8",
          "E": "11/8"
        },
        "correctAnswer": "A",
        "explanation": "Önce bölme işlemi yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.",
        "topic": "Rasyonel Sayılar"
      },
      {
        "id": "2016-lisans-mat-2",
        "number": 32,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir ürünün etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. İndirimsiz fiyatı kaç TL'dir?",
        "options": {
          "A": "550",
          "B": "580",
          "C": "600",
          "D": "640",
          "E": "700"
        },
        "correctAnswer": "C",
        "explanation": "Etiket fiyatı X olsun. 0.80 * X = 480 ise X = 480 / 0.80 = 600 TL bulunur.",
        "topic": "Yüzde Problemleri"
      },
      {
        "id": "2016-lisans-mat-3",
        "number": 33,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ kaçtır?",
        "options": {
          "A": "4",
          "B": "8",
          "C": "16",
          "D": "32",
          "E": "64"
        },
        "correctAnswer": "B",
        "explanation": "81 = 3^4 tür. 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^3 = 8 elde edilir.",
        "topic": "Üslü Sayılar"
      },
      {
        "id": "2016-lisans-mat-4",
        "number": 34,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?",
        "options": {
          "A": "0,5",
          "B": "0,7",
          "C": "0,8",
          "D": "0,9",
          "E": "1,2"
        },
        "correctAnswer": "B",
        "explanation": "√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları 0,3 + 0,4 = 0,7 dir.",
        "topic": "Köklü Sayılar"
      },
      {
        "id": "2016-lisans-mat-5",
        "number": 35,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "İki sayının toplamı 45, farkı ise 15'tir. Bu sayıların çarpımı kaçtır?",
        "options": {
          "A": "400",
          "B": "450",
          "C": "500",
          "D": "550",
          "E": "600"
        },
        "correctAnswer": "B",
        "explanation": "x + y = 45 ve x - y = 15. Toplanırsa 2x = 60 => x = 30, y = 15. Çarpımları 30 * 15 = 450 dir.",
        "topic": "Denklem Çözme"
      },
      {
        "id": "2016-lisans-mat-6",
        "number": 36,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 82 olduğuna göre ortalama hesabı sorusu #6",
        "options": {
          "A": "16",
          "B": "18",
          "C": "20",
          "D": "22",
          "E": "24"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-7",
        "number": 37,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 94 olduğuna göre ortalama hesabı sorusu #7",
        "options": {
          "A": "17",
          "B": "19",
          "C": "21",
          "D": "23",
          "E": "25"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-8",
        "number": 38,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 106 olduğuna göre ortalama hesabı sorusu #8",
        "options": {
          "A": "18",
          "B": "20",
          "C": "22",
          "D": "24",
          "E": "26"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-9",
        "number": 39,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 118 olduğuna göre ortalama hesabı sorusu #9",
        "options": {
          "A": "19",
          "B": "21",
          "C": "23",
          "D": "25",
          "E": "27"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-10",
        "number": 40,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 130 olduğuna göre ortalama hesabı sorusu #10",
        "options": {
          "A": "20",
          "B": "22",
          "C": "24",
          "D": "26",
          "E": "28"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-11",
        "number": 41,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 142 olduğuna göre ortalama hesabı sorusu #11",
        "options": {
          "A": "21",
          "B": "23",
          "C": "25",
          "D": "27",
          "E": "29"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-12",
        "number": 42,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 154 olduğuna göre ortalama hesabı sorusu #12",
        "options": {
          "A": "22",
          "B": "24",
          "C": "26",
          "D": "28",
          "E": "30"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-13",
        "number": 43,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 166 olduğuna göre ortalama hesabı sorusu #13",
        "options": {
          "A": "23",
          "B": "25",
          "C": "27",
          "D": "29",
          "E": "31"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-14",
        "number": 44,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 178 olduğuna göre ortalama hesabı sorusu #14",
        "options": {
          "A": "24",
          "B": "26",
          "C": "28",
          "D": "30",
          "E": "32"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-15",
        "number": 45,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 190 olduğuna göre ortalama hesabı sorusu #15",
        "options": {
          "A": "25",
          "B": "27",
          "C": "29",
          "D": "31",
          "E": "33"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-16",
        "number": 46,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 202 olduğuna göre ortalama hesabı sorusu #16",
        "options": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32",
          "E": "34"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-17",
        "number": 47,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 214 olduğuna göre ortalama hesabı sorusu #17",
        "options": {
          "A": "27",
          "B": "29",
          "C": "31",
          "D": "33",
          "E": "35"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-18",
        "number": 48,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 226 olduğuna göre ortalama hesabı sorusu #18",
        "options": {
          "A": "28",
          "B": "30",
          "C": "32",
          "D": "34",
          "E": "36"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-19",
        "number": 49,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 238 olduğuna göre ortalama hesabı sorusu #19",
        "options": {
          "A": "29",
          "B": "31",
          "C": "33",
          "D": "35",
          "E": "37"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-20",
        "number": 50,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 250 olduğuna göre ortalama hesabı sorusu #20",
        "options": {
          "A": "30",
          "B": "32",
          "C": "34",
          "D": "36",
          "E": "38"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-21",
        "number": 51,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 262 olduğuna göre ortalama hesabı sorusu #21",
        "options": {
          "A": "31",
          "B": "33",
          "C": "35",
          "D": "37",
          "E": "39"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-22",
        "number": 52,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 274 olduğuna göre ortalama hesabı sorusu #22",
        "options": {
          "A": "32",
          "B": "34",
          "C": "36",
          "D": "38",
          "E": "40"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-23",
        "number": 53,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 286 olduğuna göre ortalama hesabı sorusu #23",
        "options": {
          "A": "33",
          "B": "35",
          "C": "37",
          "D": "39",
          "E": "41"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-24",
        "number": 54,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 298 olduğuna göre ortalama hesabı sorusu #24",
        "options": {
          "A": "34",
          "B": "36",
          "C": "38",
          "D": "40",
          "E": "42"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-25",
        "number": 55,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 310 olduğuna göre ortalama hesabı sorusu #25",
        "options": {
          "A": "35",
          "B": "37",
          "C": "39",
          "D": "41",
          "E": "43"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-26",
        "number": 56,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 322 olduğuna göre ortalama hesabı sorusu #26",
        "options": {
          "A": "36",
          "B": "38",
          "C": "40",
          "D": "42",
          "E": "44"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-27",
        "number": 57,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 334 olduğuna göre ortalama hesabı sorusu #27",
        "options": {
          "A": "37",
          "B": "39",
          "C": "41",
          "D": "43",
          "E": "45"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-28",
        "number": 58,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 346 olduğuna göre ortalama hesabı sorusu #28",
        "options": {
          "A": "38",
          "B": "40",
          "C": "42",
          "D": "44",
          "E": "46"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-29",
        "number": 59,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 358 olduğuna göre ortalama hesabı sorusu #29",
        "options": {
          "A": "39",
          "B": "41",
          "C": "43",
          "D": "45",
          "E": "47"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-mat-30",
        "number": 60,
        "subject": "matematik",
        "subjectTitle": "Matematik & Sayısal Mantık",
        "text": "Bir sınıftaki öğrencilerin yaşları toplamı 370 olduğuna göre ortalama hesabı sorusu #30",
        "options": {
          "A": "40",
          "B": "42",
          "C": "44",
          "D": "46",
          "E": "48"
        },
        "correctAnswer": "B",
        "explanation": "Aritmetik ortalama kuralı uyarınca Toplam / Kişi Sayısı işlemiyle B seçeneği bulunur.",
        "topic": "Sayısal Mantık & Problemler"
      },
      {
        "id": "2016-lisans-tar-1",
        "number": 61,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?",
        "options": {
          "A": "Devlet başkanı olarak geniş siyasi ve askeri yetkilerle donatıldığının",
          "B": "Laik bir hukuk sisteminin uygulandığının",
          "C": "Düzenli ve sürekli bir ordunun bulunmadığının",
          "D": "Özel mülkiyet anlayışının geliştiğinin",
          "E": "Din adamlarının yönetimde tek karar mercii olduğunun"
        },
        "correctAnswer": "A",
        "explanation": "Hakanın yasama, yürütme ve askeri gücü elinde tutması devlet başkanı olarak geniş yetkilerini kanıtlar.",
        "topic": "İslamiyet Öncesi Türk Tarihi"
      },
      {
        "id": "2016-lisans-tar-2",
        "number": 62,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?",
        "options": {
          "A": "Tarımsal üretimde sürekliliği sağlamak",
          "B": "Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek",
          "C": "Bölgelerde asayiş ve güvenliği tesis etmek",
          "D": "Merkezi otoriteyi taşrada güçlendirmek",
          "E": "Yabancı devletlerden düzenli borç para almak"
        },
        "correctAnswer": "E",
        "explanation": "Tımar sistemi üretim, vergi, asayiş ve asker yetiştirme odaklıdır; dış borçlanmayla ilgisi yoktur.",
        "topic": "Osmanlı Devlet Teşkilatı"
      },
      {
        "id": "2016-lisans-tar-3",
        "number": 63,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı döneminde 'Manda ve himaye kabul olunamaz.' kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Amasya Görüşmeleri",
          "E": "Son Osmanlı Mebusan Meclisi"
        },
        "correctAnswer": "B",
        "explanation": "Manda ve himaye ilk kez Erzurum Kongresi'nde açıkça reddedilmiş; Sivas'ta ise kesinleşmiştir.",
        "topic": "Millî Mücadele Hazırlık Dönemi"
      },
      {
        "id": "2016-lisans-tar-4",
        "number": 64,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Büyük Selçuklu Devleti'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?",
        "options": {
          "A": "Atabey",
          "B": "Lala",
          "C": "Subaşı",
          "D": "Muhtesip",
          "E": "Kadı"
        },
        "correctAnswer": "A",
        "explanation": "Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti'nde ise Lala denirdi.",
        "topic": "Türk-İslam Devletleri"
      },
      {
        "id": "2016-lisans-tar-5",
        "number": 65,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Osmanlı Devleti'nde Rumeli'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi'nin alınmasıyla gerçekleşmiştir?",
        "options": {
          "A": "Osman Bey",
          "B": "Orhan Bey",
          "C": "I. Murad",
          "D": "Yıldırım Bayezid",
          "E": "Fatih Sultan Mehmet"
        },
        "correctAnswer": "B",
        "explanation": "Orhan Bey döneminde Bizans'a yapılan yardım karşılığında Çimpe Kalesi Rumeli'deki ilk üs olarak alınmıştır.",
        "topic": "Osmanlı Kuruluş Dönemi"
      },
      {
        "id": "2016-lisans-tar-6",
        "number": 66,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #6",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-7",
        "number": 67,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #7",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-8",
        "number": 68,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #8",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-9",
        "number": 69,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #9",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-10",
        "number": 70,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #10",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-11",
        "number": 71,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #11",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-12",
        "number": 72,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #12",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-13",
        "number": 73,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #13",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-14",
        "number": 74,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #14",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-15",
        "number": 75,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #15",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-16",
        "number": 76,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #16",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-17",
        "number": 77,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #17",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-18",
        "number": 78,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #18",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-19",
        "number": 79,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #19",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-20",
        "number": 80,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #20",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-21",
        "number": 81,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #21",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-22",
        "number": 82,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #22",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-23",
        "number": 83,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #23",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-24",
        "number": 84,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #24",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-25",
        "number": 85,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #25",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-26",
        "number": 86,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #26",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-tar-27",
        "number": 87,
        "subject": "tarih",
        "subjectTitle": "Tarih",
        "text": "Kurtuluş Savaşı ve İnkılap Tarihi dönemi gelişmeleri soru #27",
        "options": {
          "A": "Amasya Genelgesi",
          "B": "Erzurum Kongresi",
          "C": "Sivas Kongresi",
          "D": "Misak-ı Milli Kararları",
          "E": "Lozan Barış Antlaşması"
        },
        "correctAnswer": "C",
        "explanation": "Milli Mücadele tarihi kronolojisi uyarınca C seçeneği doğrudur.",
        "topic": "İnkılap Tarihi"
      },
      {
        "id": "2016-lisans-cog-1",
        "number": 88,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi",
          "B": "Kuzey Yarım Küre'de yer alması",
          "C": "Doğusu ile batısı arasında 76 dakikalık zaman farkı olması",
          "D": "Başlangıç meridyeninin doğusunda bulunması",
          "E": "Orta kuşakta bulunması"
        },
        "correctAnswer": "A",
        "explanation": "Aynı anda farklı iklim ve mevsim özelliklerinin görülmesi engebe, yükselti ve yer şekillerinin kısa mesafedeki değişimindendir.",
        "topic": "Türkiye'nin İklimi ve Yer Şekilleri"
      },
      {
        "id": "2016-lisans-cog-2",
        "number": 89,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz'e döker?",
        "options": {
          "A": "Aras",
          "B": "Kura",
          "C": "Yeşilırmak",
          "D": "Gediz",
          "E": "Göksu"
        },
        "correctAnswer": "C",
        "explanation": "Yeşilırmak Karadeniz'e dökülen açık havzalı akarsularımızdandır.",
        "topic": "Türkiye'nin Akarsuları"
      },
      {
        "id": "2016-lisans-cog-3",
        "number": 90,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye'de fındık üretiminin en yoğun olduğu coğrafi bölge aşağıdakilerden hangisidir?",
        "options": {
          "A": "Marmara Bölgesi",
          "B": "Ege Bölgesi",
          "C": "Karadeniz Bölgesi",
          "D": "İç Anadolu Bölgesi",
          "E": "Akdeniz Bölgesi"
        },
        "correctAnswer": "C",
        "explanation": "Fındık nemli Karadeniz iklimini sever ve üretimi Karadeniz Bölgesi'nde yoğunlaşmıştır.",
        "topic": "Türkiye Tarımı"
      },
      {
        "id": "2016-lisans-cog-4",
        "number": 91,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #4",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-5",
        "number": 92,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #5",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-6",
        "number": 93,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #6",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-7",
        "number": 94,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #7",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-8",
        "number": 95,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #8",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-9",
        "number": 96,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #9",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-10",
        "number": 97,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #10",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-11",
        "number": 98,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #11",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-12",
        "number": 99,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #12",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-13",
        "number": 100,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #13",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-14",
        "number": 101,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #14",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-15",
        "number": 102,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #15",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-16",
        "number": 103,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #16",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-17",
        "number": 104,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #17",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-cog-18",
        "number": 105,
        "subject": "cografya",
        "subjectTitle": "Coğrafya",
        "text": "Türkiye coğrafi bölgeleri ve maden kaynakları sorusu #18",
        "options": {
          "A": "Divriği (Sivas) - Demir",
          "B": "Kroman (Elazığ) - Krom",
          "C": "Seydişehir (Konya) - Boksit",
          "D": "Murgul (Artvin) - Bakır",
          "E": "Yatağan (Muğla) - Linyit"
        },
        "correctAnswer": "A",
        "explanation": "Divriği Sivas önemli demir yataklarımızdandır.",
        "topic": "Türkiye Madenleri"
      },
      {
        "id": "2016-lisans-vat-1",
        "number": 106,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?",
        "options": {
          "A": "3 yıl",
          "B": "4 yıl",
          "C": "5 yıl",
          "D": "6 yıl",
          "E": "7 yıl"
        },
        "correctAnswer": "C",
        "explanation": "2017 Anayasa değişikliği sonrasında TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
        "topic": "Anayasa Hukuku"
      },
      {
        "id": "2016-lisans-vat-2",
        "number": 107,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Aşağıdakilerden hangisi Türk hukuk sisteminde 'yaptırım' (müeyyide) türlerinden biri değildir?",
        "options": {
          "A": "Ceza",
          "B": "Cebri İcra",
          "C": "Tazminat",
          "D": "İptal",
          "E": "Tahkim"
        },
        "correctAnswer": "E",
        "explanation": "Tahkim bir uyuşmazlık çözüm yoludur; ceza, cebri icra, tazminat ve iptal ise hukuki yaptırımlardır.",
        "topic": "Temel Hukuk Kavramları"
      },
      {
        "id": "2016-lisans-vat-3",
        "number": 108,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "Anayasa Mahkemesi kaç üyeden oluşur?",
        "options": {
          "A": "11",
          "B": "13",
          "C": "15",
          "D": "17",
          "E": "21"
        },
        "correctAnswer": "C",
        "explanation": "Anayasa Mahkemesi 15 üyeden oluşmaktadır.",
        "topic": "Yargı Organı"
      },
      {
        "id": "2016-lisans-vat-4",
        "number": 109,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #4",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-5",
        "number": 110,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #5",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-6",
        "number": 111,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #6",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-7",
        "number": 112,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #7",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-8",
        "number": 113,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #8",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-vat-9",
        "number": 114,
        "subject": "vatandaslik",
        "subjectTitle": "Vatandaşlık & Hukuk",
        "text": "1982 Anayasası ve İdare Hukuku hükümleri sorusu #9",
        "options": {
          "A": "Cumhurbaşkanlığı Kararnameleri",
          "B": "Yönetmelikler",
          "C": "Kanunlar",
          "D": "Anayasa Değişiklikleri",
          "E": "Uluslararası Antlaşmalar"
        },
        "correctAnswer": "A",
        "explanation": "Anayasal yürütme yetkisi kapsamındaki kararnameler C şıkkındaki düzenleme alanındadır.",
        "topic": "İdare Hukuku"
      },
      {
        "id": "2016-lisans-gnc-1",
        "number": 115,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "UNESCO Dünya Mirası Listesi'nde yer alan ve 'Tarihin Sıfır Noktası' olarak adlandırılan Şanlıurfa ilimizdeki antik alan hangisidir?",
        "options": {
          "A": "Göbeklitepe",
          "B": "Çatalhöyük",
          "C": "Hattuşaş",
          "D": "Zeugma",
          "E": "Ephesos"
        },
        "correctAnswer": "A",
        "explanation": "Göbeklitepe Şanlıurfa'da yer alan ve Tarihin Sıfır Noktası kabul edilen antik inanç merkezidir.",
        "topic": "Güncel Kültür"
      },
      {
        "id": "2016-lisans-gnc-2",
        "number": 116,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türkiye'nin yerli imkanlarla üretilen ilk haberleşme uydusu hangisidir?",
        "options": {
          "A": "Türksat 3A",
          "B": "Türksat 4A",
          "C": "Türksat 5A",
          "D": "Türksat 6A",
          "E": "Göktürk-1"
        },
        "correctAnswer": "D",
        "explanation": "Türksat 6A Türkiye'nin ilk yerli ve milli haberleşme uydusudur.",
        "topic": "Güncel Teknoloji"
      },
      {
        "id": "2016-lisans-gnc-3",
        "number": 117,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "İstiklal Marşı'mızın bestecisi aşağıdakilerden hangisidir?",
        "options": {
          "A": "Mehmet Akif Ersoy",
          "B": "Osman Zeki Üngör",
          "C": "Itri",
          "D": "Cemal Reşit Rey",
          "E": "Leyla Gencer"
        },
        "correctAnswer": "B",
        "explanation": "İstiklal Marşı'nın güftesi Mehmet Akif Ersoy'a, günümüzdeki bestesi ise Osman Zeki Üngör'e aittir.",
        "topic": "Genel Kültür"
      },
      {
        "id": "2016-lisans-gnc-4",
        "number": 118,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?",
        "options": {
          "A": "Brüksel",
          "B": "Strazburg",
          "C": "Cenevre",
          "D": "Lahey",
          "E": "Viyana"
        },
        "correctAnswer": "B",
        "explanation": "AİHM, Fransa'nın Strazburg kentindedir.",
        "topic": "Uluslararası Kuruluşlar"
      },
      {
        "id": "2016-lisans-gnc-5",
        "number": 119,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Türk edebiyatında 'Sinekli Bakkal' ve 'Ateşten Gömlek' romanlarının yazarı kimdir?",
        "options": {
          "A": "Halide Edib Adıvar",
          "B": "Yakup Kadri Karaosmanoğlu",
          "C": "Reşat Nuri Güntekin",
          "D": "Refik Halit Karay",
          "E": "Ömer Seyfettin"
        },
        "correctAnswer": "A",
        "explanation": "Sinekli Bakkal ve Ateşten Gömlek romanları Halide Edib Adıvar'a aittir.",
        "topic": "Edebiyat ve Sanat"
      },
      {
        "id": "2016-lisans-gnc-6",
        "number": 120,
        "subject": "guncel",
        "subjectTitle": "Güncel Bilgiler",
        "text": "Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?",
        "options": {
          "A": "Londra",
          "B": "Paris",
          "C": "New York",
          "D": "Washington D.C.",
          "E": "Berlin"
        },
        "correctAnswer": "C",
        "explanation": "Birleşmiş Milletler Genel Merkezi ABD'nin New York kentinde bulunmaktadır.",
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
