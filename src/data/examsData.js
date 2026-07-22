// KPSS Ön Lisans Geçmiş Sınav Veri Seti (2024, 2022, 2020, 2018, 2016)

export const SUBJECTS = [
  { id: 'turkce', name: 'Türkçe', questionCount: 30, icon: 'BookOpen', color: '#4f46e5' },
  { id: 'matematik', name: 'Matematik & Sayısal Mantık', questionCount: 30, icon: 'Calculator', color: '#0284c7' },
  { id: 'tarih', name: 'Tarih', questionCount: 27, icon: 'Landmark', color: '#d97706' },
  { id: 'cografya', name: 'Coğrafya', questionCount: 18, icon: 'Globe', color: '#059669' },
  { id: 'vatandaslik', name: 'Vatandaşlık & Hukuk', questionCount: 9, icon: 'Scale', color: '#7c3aed' },
  { id: 'guncel', name: 'Güncel Bilgiler', questionCount: 6, icon: 'Sparkles', color: '#ec4899' }
];

export const EXAMS = [
  {
    id: 'kpss-2024-onlisans',
    year: 2024,
    title: '2024 KPSS Ön Lisans Sınavı',
    description: 'ÖSYM tarafından 2024 yılında uygulanan KPSS Ön Lisans Genel Yetenek & Genel Kültür testi.',
    totalQuestions: 120,
    questions: [
      // TÜRKÇE
      {
        id: '2024-tr-1',
        number: 1,
        subject: 'turkce',
        subjectTitle: 'Türkçe',
        text: 'Aşağıdaki cümlelerin hangisinde "altını çizmek" deyimi anlamıyla kullanılmıştır?',
        options: {
          A: 'Dersteki önemli kavramların altını çizerek not alıyordu.',
          B: 'Konuşmasında eğitim sistemindeki fırsat eşitliğinin önemini vurgulamak istedi.',
          C: 'Kitabın son sayfasındaki bazı satırların altını kırmızı kalemle çizmiş.',
          D: 'Tablonun altını çizerek çerçeveyi tam simetrik hale getirdi.',
          E: 'Proje taslağının altını çizip son incelemeye gönderdi.'
        },
        correctAnswer: 'B',
        explanation: '"Altını çizmek" deyimi, bir düşüncenin, konunun ya da uyarının önemini vurgulamak, ona dikkat çekmek anlamında kullanılır.',
        topic: 'Deyimler ve Anlamı'
      },
      {
        id: '2024-tr-2',
        number: 2,
        subject: 'turkce',
        subjectTitle: 'Türkçe',
        text: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?',
        options: {
          A: 'Türk Dil Kurumu binasında yapılan toplantı saat 14.00\'te başladı.',
          B: 'Hafta sonu arkadaşlarıyla birlikte Boğaz Köprüsü\'nden geçti.',
          C: 'Yapılan araştırmalar bir çok kişinin bu konuda kararsız olduğunu gösteriyor.',
          D: 'Cumhuriyet Dönemi Türk Edebiyatı üzerine araştırmalar yürütüyor.',
          E: 'Her akşam saat 20.00\'de haber bültenini izlemeyi alışkanlık edindi.'
        },
        correctAnswer: 'C',
        explanation: '"birçok" sözcüğü belgisiz sıfat veya zamir olarak kullanıldığında bitişik yazılır. "Bir çok" şeklinde ayrı yazılması yazım kuralına aykırıdır.',
        topic: 'Yazım Kuralları'
      },
      {
        id: '2024-tr-3',
        number: 3,
        subject: 'turkce',
        subjectTitle: 'Türkçe',
        text: 'Aşağıdaki cümlelerin hangisinde nokta ( . ) yanlış kullanılmıştır?',
        options: {
          A: 'Toplantı saat 10.30\'da salon A\'da gerçekleştirilecektir.',
          B: 'Prof. Dr. Ahmet Yılmaz yarın konferansta konuşma yapacak.',
          C: 'Sınav sonuçları 15.10.2024 tarihinde resmi siteden ilan edilecek.',
          D: 'Bu kitap 1.inci baskısını yaparak okuyucularla buluştu.',
          E: 'Dr. Mehmet Bey poliklinik muayenesine başladı.'
        },
        correctAnswer: 'D',
        explanation: 'Sayılardan sonra sıra bildirmek için nokta konur. Ancak "1.inci" şeklinde hem nokta hem "-inci" eki kullanılması gereksiz ek kullanımı ve noktalama hatasıdır. Doğrusu "1. baskı" veya "1\'inci baskı" olmalıdır.',
        topic: 'Noktalama İşaretleri'
      },
      {
        id: '2024-tr-4',
        number: 4,
        subject: 'turkce',
        subjectTitle: 'Türkçe',
        text: 'Sanatçı, eserlerinde geleneksel motifleri modern bir üslupla harmanlayarak evrensel bir çizgiye ulaşmıştır.\nBu cümlede geçen "evrensel bir çizgiye ulaşmak" sözüyle anlatılmak istenen aşağıdakilerden hangisidir?',
        options: {
          A: 'Yalnızca kendi toplumuna hitap etmek',
          B: 'Tüm insanlığı kapsayan ortak bir nitelik kazanmak',
          C: 'Günün moda anlayışına uygun eserler vermek',
          D: 'Eserlerinde yabancı sözcüklere yer vermek',
          E: 'Geleneksel sanat kurallarını tamamen reddetmek'
        },
        correctAnswer: 'B',
        explanation: '"Evrensel", bütün insanlığı ilgilendiren, sınırları aşan anlamına gelir. Dolayısıyla tüm insanlığı kapsayan ortak nitelik kazanmaktır.',
        topic: 'Cümlede Anlam'
      },

      // MATEMATİK
      {
        id: '2024-mat-1',
        number: 31,
        subject: 'matematik',
        subjectTitle: 'Matematik',
        text: '$$\\frac{3}{4} + \\frac{1}{2} \\div \\frac{2}{3}$$ işleminin sonucu kaçtır?',
        options: {
          A: '3/2',
          B: '5/4',
          C: '7/6',
          D: '9/8',
          E: '11/8'
        },
        correctAnswer: 'A',
        explanation: 'İşlem önceliğinde bölme yapılır: (1/2) ÷ (2/3) = (1/2) * (3/2) = 3/4. Ardından toplama: (3/4) + (3/4) = 6/4 = 3/2.',
        topic: 'Rasyonel Sayılar'
      },
      {
        id: '2024-mat-2',
        number: 32,
        subject: 'matematik',
        subjectTitle: 'Matematik',
        text: 'Bir hırkanın etiket fiyatı üzerinden %20 indirim yapıldığında fiyatı 480 TL olmaktadır. Bu hırkanın indirimsiz etiket fiyatı kaç TL\'dir?',
        options: {
          A: '550',
          B: '580',
          C: '600',
          D: '640',
          E: '700'
        },
        correctAnswer: 'C',
        explanation: 'Etiket fiyatı X olsun. %20 indirimli fiyatı: X * (1 - 0.20) = 0.80 * X = 480 TL. X = 480 / 0.80 = 600 TL.',
        topic: 'Yüzde Problemleri'
      },
      {
        id: '2024-mat-3',
        number: 33,
        subject: 'matematik',
        subjectTitle: 'Matematik',
        text: '$$3^{x+1} = 81$$ olduğuna göre, $$2^x$$ ifadesinin değeri kaçtır?',
        options: {
          A: '4',
          B: '8',
          C: '16',
          D: '32',
          E: '64'
        },
        correctAnswer: 'B',
        explanation: '81 = 3^4 tür. Dolayısıyla 3^(x+1) = 3^4 => x + 1 = 4 => x = 3. İstenen 2^x = 2^3 = 8 bulunur.',
        topic: 'Üslü Sayılar'
      },

      // TARİH
      {
        id: '2024-tar-1',
        number: 61,
        subject: 'tarih',
        subjectTitle: 'Tarih',
        text: 'İslamiyet öncesi Türk devletlerinde hakanın kurultayı toplantıya çağırma, töre koyma ve orduyu komuta etme yetkilerine sahip olması aşağıdakilerden hangisinin göstergesidir?',
        options: {
          A: 'Devlet başkanı olarak geniş yetkilerle donatıldığının',
          B: 'Laik bir hukuk sisteminin uygulandığının',
          C: 'Düzenli ve sürekli bir ordunun bulunmadığının',
          D: 'Özel mülkiyet anlayışının geliştiğinin',
          E: 'Din adamlarının yönetimde etkili olduğunun'
        },
        correctAnswer: 'A',
        explanation: 'Hakanın siyasi, askeri ve hukuki yetkileri tek elde toplaması, devlet başkanı olarak geniş yetkilere sahip olduğunu gösterir.',
        topic: 'İslamiyet Öncesi Türk Tarihi'
      },
      {
        id: '2024-tar-2',
        number: 62,
        subject: 'tarih',
        subjectTitle: 'Tarih',
        text: 'Osmanlı Devleti\'nde tımar sisteminin uygulanmasıyla aşağıdakilerden hangisi hedeflenmemiştir?',
        options: {
          A: 'Tarımsal üretimde sürekliliği sağlamak',
          B: 'Eyaletlerde hazineye yük olmadan atlı asker yetiştirmek',
          C: 'Bölgelerde asayiş ve güvenliği tesis etmek',
          D: 'Merkezi otoriteyi taşrada güçlendirmek',
          E: 'Yabancı devletlerden düzenli borç almak'
        },
        correctAnswer: 'E',
        explanation: 'Tımar sistemi; üretim, vergi toplama, asker yetiştirme ve güvenlik sağlamayı amaçlar. Dış borçlanma ile hiçbir ilgisi yoktur.',
        topic: 'Osmanlı Devlet Teşkilatı'
      },
      {
        id: '2024-tar-3',
        number: 63,
        subject: 'tarih',
        subjectTitle: 'Tarih',
        text: 'Kurtuluş Savaşı döneminde "Manda ve himaye kabul olunamaz." kararı ilk kez aşağıdaki gelişmelerin hangisinde alınmıştır?',
        options: {
          A: 'Amasya Genelgesi',
          B: 'Erzurum Kongresi',
          C: 'Sivas Kongresi',
          D: 'Amasya Görüşmeleri',
          E: 'Son Osmanlı Mebusan Meclisi'
        },
        correctAnswer: 'B',
        explanation: 'Manda ve himaye fikri ilk kez Erzurum Kongresi\'nde açıkça reddedilmiş; Sivas Kongresi\'nde ise kesin ve son olarak reddedilmiştir.',
        topic: 'Millî Mücadele Hazırlık Dönemi'
      },

      // COĞRAFYA
      {
        id: '2024-cog-1',
        number: 88,
        subject: 'cografya',
        subjectTitle: 'Coğrafya',
        text: 'Türkiye\'nin coğrafi konumu göz önüne alındığında, aynı anda farklı mevsim özelliklerinin yaşanabilmesinin temel sebebi aşağıdakilerden hangisidir?',
        options: {
          A: 'Üç tarafının denizlerle çevrili olması ve yer şekillerinin kısa mesafelerde değişmesi',
          B: 'Kuzey Yarım Küre\'de yer alması',
          C: 'Doğusu ile batısı arasında 76 dakikalık zaman farkı olması',
          D: 'Başlangıç meridyeninin doğusunda bulunması',
          E: 'Orta kuşakta bulunması'
        },
        correctAnswer: 'A',
        explanation: 'Türkiye\'de aynı anda farklı iklim/mevsim özelliklerinin görülmesi yer şekillerinin engebeli yapısı ve kısa mesafede yükselti ve denizellik farklarından kaynaklanır.',
        topic: 'Türkiye\'nin İklimi ve Yer Şekilleri'
      },
      {
        id: '2024-cog-2',
        number: 89,
        subject: 'cografya',
        subjectTitle: 'Coğrafya',
        text: 'Aşağıdaki akarsularımızdan hangisi açık havza özelliğine sahip olup sularını Karadeniz\'e döker?',
        options: {
          A: 'Aras',
          B: 'Kura',
          C: 'Yeşilırmak',
          D: 'Gediz',
          E: 'Göksu'
        },
        correctAnswer: 'C',
        explanation: 'Yeşilırmak, Canik Dağları\'nı aşarak sularını Karadeniz\'e boşaltır. Aras ve Kura Hazar Denizi\'ne (kapalı havza), Gediz Ege\'ye, Göksu Akdeniz\'e dökülür.',
        topic: 'Türkiye\'nin Akarsuları'
      },

      // VATANDAŞLIK
      {
        id: '2024-vat-1',
        number: 106,
        subject: 'vatandaslik',
        subjectTitle: 'Vatandaşlık',
        text: '1982 Anayasası\'na göre, Türkiye Büyük Millet Meclisi Genel Seçimleri kaç yılda bir yapılır?',
        options: {
          A: '3 yıl',
          B: '4 yıl',
          C: '5 yıl',
          D: '6 yıl',
          E: '7 yıl'
        },
        correctAnswer: 'C',
        explanation: '2017 Anayasa değişikliği ile TBMM seçimleri ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.',
        topic: 'Anayasa Hukuku'
      },
      {
        id: '2024-vat-2',
        number: 107,
        subject: 'vatandaslik',
        subjectTitle: 'Vatandaşlık',
        text: 'Aşağıdakilerden hangisi Türk hukuk sisteminde "yaptırım" (müeyyide) türlerinden biri değildir?',
        options: {
          A: 'Ceza',
          B: 'Cebri İcra',
          C: 'Tazminat',
          D: 'İptal',
          E: 'Tahkim'
        },
        correctAnswer: 'E',
        explanation: 'Tahkim, uyuşmazlıkların hakem yoluyla çözülmesini sağlayan bir yargı yoludur. Ceza, cebri icra, tazminat, hükümsüzlük ve iptal ise hukuki yaptırım türleridir.',
        topic: 'Temel Hukuk Kavramları'
      },

      // GÜNCEL BİLGİLER
      {
        id: '2024-gnc-1',
        number: 115,
        subject: 'guncel',
        subjectTitle: 'Güncel Bilgiler',
        text: 'UNESCO Dünya Mirası Listesi\'nde yer alan ve "Tarihin Sıfır Noktası" olarak adlandırılan Şanlıurfa ilimizdeki antik tapınak kompleksi aşağıdakilerden hangisidir?',
        options: {
          A: 'Göbeklitepe',
          B: 'Çatalhöyük',
          C: 'Hattuşaş',
          D: 'Zeugma',
          E: 'Ephesos'
        },
        correctAnswer: 'A',
        explanation: 'Şanlıurfa\'da bulunan Göbeklitepe, dünyanın bilinen en eski tapınak merkezi olup "Tarihin Sıfır Noktası" olarak tanımlanmaktadır.',
        topic: 'Güncel ve Kültürel Bilgiler'
      },
      {
        id: '2024-gnc-2',
        number: 116,
        subject: 'guncel',
        subjectTitle: 'Güncel Bilgiler',
        text: 'Türkiye\'nin ilk yerli ve milli haberleşme uydusu aşağıdakilerden hangisidir?',
        options: {
          A: 'Türksat 3A',
          B: 'Türksat 4A',
          C: 'Türksat 5A',
          D: 'Türksat 6A',
          E: 'Göktürk-1'
        },
        correctAnswer: 'D',
        explanation: 'Türksat 6A, Türkiye\'nin mühendisleri tarafından yerli imkanlarla üretilen ilk milli haberleşme uydusudur.',
        topic: 'Güncel Bilgiler & Teknoloji'
      }
    ]
  },

  {
    id: 'kpss-2022-onlisans',
    year: 2022,
    title: '2022 KPSS Ön Lisans Sınavı',
    description: 'ÖSYM 2022 KPSS Ön Lisans Temel Soru Kitapçığı ve Cevap Anahtarı uyarınca hazırlanan test.',
    totalQuestions: 120,
    questions: [
      {
        id: '2022-tr-1',
        number: 1,
        subject: 'turkce',
        subjectTitle: 'Türkçe',
        text: 'Aşağıdaki cümlelerin hangisinde "gözden geçirmek" deyimi kullanılmıştır?',
        options: {
          A: 'Raporu teslim etmeden önce son bir kez gözden geçirdi.',
          B: 'Gözlerini kısıp uzaktaki tabelayı okumaya çalıştı.',
          C: 'Adamın tavırlarından gözüm hiç tutmadı.',
          D: 'Olayı anlatırken gözleri yaşardı.',
          E: 'Fikirlerine her zaman gözü kapalı güvenirim.'
        },
        correctAnswer: 'A',
        explanation: '"Gözden geçirmek", bir şeyi eksik veya yanlışını bulmak için incelemek demektir.',
        topic: 'Deyimler ve Anlamı'
      },
      {
        id: '2022-mat-1',
        number: 31,
        subject: 'matematik',
        subjectTitle: 'Matematik',
        text: '$$\\sqrt{0{,}09} + \\sqrt{0{,}16}$$ işleminin sonucu kaçtır?',
        options: {
          A: '0,5',
          B: '0,7',
          C: '0,8',
          D: '0,9',
          E: '1,2'
        },
        correctAnswer: 'B',
        explanation: '√0,09 = 0,3 ve √0,16 = 0,4 tür. Toplamları: 0,3 + 0,4 = 0,7 dir.',
        topic: 'Köklü Sayılar'
      },
      {
        id: '2022-tar-1',
        number: 61,
        subject: 'tarih',
        subjectTitle: 'Tarih',
        text: 'Büyük Selçuklu Devleti\'nde hükümdar çocuklarını (melik) yetiştirmekle görevli tecrübeli devlet adamlarına ne ad verilirdi?',
        options: {
          A: 'Atabey',
          B: 'Lala',
          C: 'Subaşı',
          D: 'Muhtesip',
          E: 'Kadı'
        },
        correctAnswer: 'A',
        explanation: 'Büyük Selçuklularda melik eğitmenlerine Atabey; Osmanlı Devleti\'nde ise Lala denirdi.',
        topic: 'Türk-İslam Devletleri'
      },
      {
        id: '2022-cog-1',
        number: 88,
        subject: 'cografya',
        subjectTitle: 'Coğrafya',
        text: 'Türkiye\'de fındık üretiminin en yoğun olduğu bölge aşağıdakilerden hangisidir?',
        options: {
          A: 'Marmara Bölgesi',
          B: 'Ege Bölgesi',
          C: 'Karadeniz Bölgesi',
          D: 'İç Anadolu Bölgesi',
          E: 'Akdeniz Bölgesi'
        },
        correctAnswer: 'C',
        explanation: 'Fındık nemli iklimi sever ve Türkiye üretiminin büyük kısmı Doğu ve Orta Karadeniz\'de gerçekleşir.',
        topic: 'Türkiye Tarımı'
      },
      {
        id: '2022-vat-1',
        number: 106,
        subject: 'vatandaslik',
        subjectTitle: 'Vatandaşlık',
        text: 'Anayasa Mahkemesi kaç üyeden oluşur?',
        options: {
          A: '11',
          B: '13',
          C: '15',
          D: '17',
          E: '21'
        },
        correctAnswer: 'C',
        explanation: '2017 Anayasa değişikliği sonrasında Anayasa Mahkemesi 15 üyeden oluşmaktadır.',
        topic: 'Anayasa Hukuku - Yargı Organı'
      },
      {
        id: '2022-gnc-1',
        number: 115,
        subject: 'guncel',
        subjectTitle: 'Güncel Bilgiler',
        text: 'İstiklal Marşı\'mızın bestecisi aşağıdakilerden hangisidir?',
        options: {
          A: 'Mehmet Akif Ersoy',
          B: 'Osman Zeki Üngör',
          C: 'Itri',
          D: 'Cemal Reşit Rey',
          E: 'Leyla Gencer'
        },
        correctAnswer: 'B',
        explanation: 'İstiklal Marşı\'nın güftesi (şiiri) Mehmet Akif Ersoy\'a, günümüzdeki bestesi ise Osman Zeki Üngör\'e aittir.',
        topic: 'Genel Kültür'
      }
    ]
  },

  {
    id: 'kpss-2020-onlisans',
    year: 2020,
    title: '2020 KPSS Ön Lisans Sınavı',
    description: '2020 ÖSYM KPSS Ön Lisans sınavı arşiv verilerine dayalı simülasyon.',
    totalQuestions: 120,
    questions: [
      {
        id: '2020-tr-1',
        number: 1,
        subject: 'turkce',
        subjectTitle: 'Türkçe',
        text: 'Aşağıdaki cümlelerin hangisinde nesnel bir anlatım vardır?',
        options: {
          A: 'Şairin son şiir kitabı okuyucuyu büyüleyen harika dizeler içeriyor.',
          B: 'Roman 350 sayfadan oluşmakta ve beş ana bölümden meydana gelmektedir.',
          C: 'Filmin sonundaki müzik herkesi derin düşüncelere sevk ediyor.',
          D: 'Yazarın üslubu son derece sürükleyici ve eşsizdir.',
          E: 'Mimarisiyle göz dolduran bu tarihi konağa herkes hayran kaldı.'
        },
        correctAnswer: 'B',
        explanation: 'Sayfa sayısı ve bölüm sayısı kişiden kişiye değişmeyen, kanıtlanabilir nesnel yargılardır.',
        topic: 'Cümlede Anlam'
      },
      {
        id: '2020-mat-1',
        number: 31,
        subject: 'matematik',
        subjectTitle: 'Matematik',
        text: 'İki sayının toplamı 45, farkı ise 15\'tir. Bu sayıların çarpımı kaçtır?',
        options: {
          A: '400',
          B: '450',
          C: '500',
          D: '550',
          E: '600'
        },
        correctAnswer: 'B',
        explanation: 'x + y = 45 ve x - y = 15. Taraf tarafa toplanırsa 2x = 60 => x = 30. y = 15 bulunur. Çarpımları 30 * 15 = 450 dir.',
        topic: 'Denklem Çözme'
      },
      {
        id: '2020-tar-1',
        number: 61,
        subject: 'tarih',
        subjectTitle: 'Tarih',
        text: 'Osmanlı Devleti\'nde Rumeli\'ye geçiş ilk kez hangi padişah döneminde Çimpe Kalesi\'nin alınmasıyla gerçekleşmiştir?',
        options: {
          A: 'Osman Bey',
          B: 'Orhan Bey',
          C: 'I. Murad',
          D: 'Yıldırım Bayezid',
          E: 'Fatih Sultan Mehmet'
        },
        correctAnswer: 'B',
        explanation: 'Orhan Bey döneminde Bizans\'a yapılan yardım karşılığında Gelibolu\'daki Çimpe Kalesi alınmış ve Rumeli\'deki ilk üs elde edilmiştir.',
        topic: 'Osmanlı Kuruluş Dönemi'
      },
      {
        id: '2020-cog-1',
        number: 88,
        subject: 'cografya',
        subjectTitle: 'Coğrafya',
        text: 'Türkiye\'nin en güney ucu hangi il sınırları içerisinde yer alır?',
        options: {
          A: 'Antalya',
          B: 'Muğla',
          C: 'Hatay',
          D: 'Mersin',
          E: 'Hakkari'
        },
        correctAnswer: 'C',
        explanation: 'Türkiye\'nin en güney ucu Hatay ilinin Yayladağı ilçesinde (Topraktutan köyü) yer alır (36° Kuzey paraleli).',
        topic: 'Türkiye\'nin Coğrafi Konumu'
      },
      {
        id: '2020-vat-1',
        number: 106,
        subject: 'vatandaslik',
        subjectTitle: 'Vatandaşlık',
        text: 'Aşağıdakilerden hangisi devletin asli ve sürekli görevlerini yürütmekle yükümlü kamu görevlileridir?',
        options: {
          A: 'İşçiler',
          B: 'Memurlar',
          C: 'Sözleşmeli personel',
          D: 'Geçici personel',
          E: 'Stajyerler'
        },
        correctAnswer: 'B',
        explanation: '1982 Anayasası m. 128 uyarınca devletin genel idare esaslarına göre yürütmekle yükümlü olduğu asli ve sürekli görevler memurlar eliyle yürütülür.',
        topic: 'İdare Hukuku'
      },
      {
        id: '2020-gnc-1',
        number: 115,
        subject: 'guncel',
        subjectTitle: 'Güncel Bilgiler',
        text: 'Avrupa İnsan Hakları Mahkemesi (AİHM) hangi şehirde bulunmaktadır?',
        options: {
          A: 'Brüksel',
          B: 'Strazburg',
          C: 'Cenevre',
          D: 'Lahey',
          E: 'Viyana'
        },
        correctAnswer: 'B',
        explanation: 'AİHM, Fransa\'nın Strazburg kentinde yer almaktadır.',
        topic: 'Uluslararası Kuruluşlar'
      }
    ]
  },

  {
    id: 'kpss-2018-onlisans',
    year: 2018,
    title: '2018 KPSS Ön Lisans Sınavı',
    description: '2018 KPSS Ön Lisans geçmiş soruları temel alınarak hazırlanan simülasyon seti.',
    totalQuestions: 120,
    questions: [
      {
        id: '2018-tr-1',
        number: 1,
        subject: 'turkce',
        subjectTitle: 'Türkçe',
        text: 'Aşağıdaki sözcüklerden hangisi türemiş yapılı değildir?',
        options: {
          A: 'Gözlük',
          B: 'Simitçi',
          C: 'Evler',
          D: 'Tuzsuz',
          E: 'Yazıcı'
        },
        correctAnswer: 'C',
        explanation: '"Evler" sözcüğündeki "-ler" eki çoğul ekidir (çekim eki). Yapım eki almadığı için basit yapılıdır.',
        topic: 'Sözcükte Yapı'
      },
      {
        id: '2018-mat-1',
        number: 31,
        subject: 'matematik',
        subjectTitle: 'Matematik',
        text: 'Bir sınıftaki kız öğrencilerin sayısının erkek öğrencilerin sayısına oranı 2/3\'tür. Sınıfta toplam 30 öğrenci olduğuna göre kaç kız öğrenci vardır?',
        options: {
          A: '10',
          B: '12',
          C: '15',
          D: '18',
          E: '20'
        },
        correctAnswer: 'B',
        explanation: 'Kız = 2k, Erkek = 3k. Toplam = 5k = 30 => k = 6. Kız öğrenci sayısı = 2 * 6 = 12 dir.',
        topic: 'Oran Orantı'
      },
      {
        id: '2018-tar-1',
        number: 61,
        subject: 'tarih',
        subjectTitle: 'Tarih',
        text: 'Mustafa Kemal Atatürk\'ün "Geldikleri gibi giderler!" sözünü söylediği olay aşağıdakilerden hangisidir?',
        options: {
          A: 'Çanakkale Savaşları sonrası',
          B: 'Mondros Mütarekesi sonrası İstanbul önlerine demirleyen İtilaf donanmasını gördüğünde',
          C: 'Sakarya Meydan Muharebesi başında',
          D: 'Büyük Taarruz öncesi',
          E: 'Sivas Kongresi sırasında'
        },
        correctAnswer: 'B',
        explanation: 'Mustafa Kemal, 13 Kasım 1918\'de İstanbul Haydarpaşa Limanı\'na ulaştığında İtilaf Devletleri donanmasını görünce yaveri Cevat Abbas\'a bu tarihi sözü söylemiştir.',
        topic: 'Millî Mücadele Dönemi'
      },
      {
        id: '2018-cog-1',
        number: 88,
        subject: 'cografya',
        subjectTitle: 'Coğrafya',
        text: 'Aşağıdaki dağlarımızdan hangisi volkanik oluşumlu bir dağdır?',
        options: {
          A: 'Toroslar',
          B: 'Kaçkar Dağları',
          C: 'Nemrut Dağı (Bitlis)',
          D: 'Yıldız Dağları',
          E: 'Sultan Dağları'
        },
        correctAnswer: 'C',
        explanation: 'Bitlis sınırları içerisindeki Nemrut Dağı Doğu Anadolu Bölgesi\'nde yer alan aktif olmayan volkanik bir dağdır.',
        topic: 'Türkiye Yer Şekilleri'
      },
      {
        id: '2018-vat-1',
        number: 106,
        subject: 'vatandaslik',
        subjectTitle: 'Vatandaşlık',
        text: 'Hukuk kurallarının diğer sosyal düzen kurallarından (din, ahlak, görgü) en temel farkı aşağıdakilerden hangisidir?',
        options: {
          A: 'Yazılı olması',
          B: 'Devlet gücüyle desteklenmiş maddi yaptırıma sahip olması',
          C: 'Eski zamanlardan beri uygulanması',
          D: 'Toplum vicdanına dayanması',
          E: 'Kişiden kişiye değişmesi'
        },
        correctAnswer: 'B',
        explanation: 'Hukuk kurallarını din, ahlak ve görgü kurallarından ayıran en belirgin özellik cebri (maddi) yaptırıma ve devlet gücüne dayanmasıdır.',
        topic: 'Temel Hukuk Kavramları'
      },
      {
        id: '2018-gnc-1',
        number: 115,
        subject: 'guncel',
        subjectTitle: 'Güncel Bilgiler',
        text: 'Türk edebiyatında "Sinekli Bakkal" ve "Ateşten Gömlek" romanlarının yazarı kimdir?',
        options: {
          A: 'Halide Edib Adıvar',
          B: 'Yakup Kadri Karaosmanoğlu',
          C: 'Reşat Nuri Güntekin',
          D: 'Refik Halit Karay',
          E: 'Ömer Seyfettin'
        },
        correctAnswer: 'A',
        explanation: 'Sinekli Bakkal, Ateşten Gömlek ve Vurun Kahpeye gibi eserler Halide Edib Adıvar\'a aittir.',
        topic: 'Edebiyat ve Güncel Bilgiler'
      }
    ]
  },

  {
    id: 'kpss-2016-onlisans',
    year: 2016,
    title: '2016 KPSS Ön Lisans Sınavı',
    description: '2016 KPSS Ön Lisans sınavı arşiv verileri temel alınarak hazırlanan simülasyon.',
    totalQuestions: 120,
    questions: [
      {
        id: '2016-tr-1',
        number: 1,
        subject: 'turkce',
        subjectTitle: 'Türkçe',
        text: 'Aşağıdaki cümlelerin hangisinde karşıt (zıt) anlamlı kelimeler bir arada kullanılmıştır?',
        options: {
          A: 'İyi günde kötü günde yanımda olan dostlarımı unutmam.',
          B: 'Sessiz ve sakin bir kasabada yaşamak istiyordu.',
          C: 'Akıllı ve zeki çocuk soruları hızla yanıtladı.',
          D: 'Geniş ve ferah bir salona sahipti.',
          E: 'Eski ve yıpranmış elbiselerini bağışladı.'
        },
        correctAnswer: 'A',
        explanation: '"İyi" ve "kötü" sözcükleri birbiriyle zıt anlamlıdır.',
        topic: 'Sözcükte Anlam'
      },
      {
        id: '2016-mat-1',
        number: 31,
        subject: 'matematik',
        subjectTitle: 'Matematik',
        text: '$$2x + 5 = 17$$ olduğuna göre, $$x$$ kaçtır?',
        options: {
          A: '4',
          B: '5',
          C: '6',
          D: '7',
          E: '8'
        },
        correctAnswer: 'C',
        explanation: '2x = 17 - 5 = 12 => x = 6 bulunur.',
        topic: 'Temel Denklemler'
      },
      {
        id: '2016-tar-1',
        number: 61,
        subject: 'tarih',
        subjectTitle: 'Tarih',
        text: 'Tarihte bilinen ilk Türk devleti aşağıdakilerden hangisidir?',
        options: {
          A: 'Göktürkler',
          B: 'Uygurlar',
          C: 'Asya Hun Devleti',
          D: 'Avarlar',
          E: 'Hazarlar'
        },
        correctAnswer: 'C',
        explanation: 'Tarihte bilinen ilk teşkilatlı Türk devleti Teoman önderliğinde kurulan Asya Hun Devleti\'dir.',
        topic: 'İslamiyet Öncesi Türk Tarihi'
      },
      {
        id: '2016-cog-1',
        number: 88,
        subject: 'cografya',
        subjectTitle: 'Coğrafya',
        text: 'Türkiye\'nin en uzun kıyı şeridine sahip olan coğrafi bölgesi aşağıdakilerden hangisidir?',
        options: {
          A: 'Marmara Bölgesi',
          B: 'Karadeniz Bölgesi',
          C: 'Ege Bölgesi',
          D: 'Akdeniz Bölgesi',
          E: 'İç Anadolu Bölgesi'
        },
        correctAnswer: 'C',
        explanation: 'Ege Bölgesi kıyıları çok girintili çıkıntılı (enine kıyı tipi) olduğu için kuş uçuşu uzaklık az olmasına rağmen kıyı uzunluğu en fazla olan bölgemizdir.',
        topic: 'Türkiye Coğrafyası'
      },
      {
        id: '2016-vat-1',
        number: 106,
        subject: 'vatandaslik',
        subjectTitle: 'Vatandaşlık',
        text: 'Hak ehliyeti (haklardan yararlanma ehliyeti) ne zaman başlar?',
        options: {
          A: '18 yaşın doldurulmasıyla',
          B: 'Sağ ve tam doğmak şartıyla ana rahmine düşüldüğü andan itibaren',
          C: 'Ergin olunmasıyla',
          D: 'Okuma yazma öğrenilmesiyle',
          E: 'Evlenme yaşına gelinmesiyle'
        },
        correctAnswer: 'B',
        explanation: 'Türk Medeni Kanunu m. 28 uyarınca hak ehliyeti, çocuğun sağ ve tam doğması koşuluyla ana rahmine düştüğü andan itibaren başlar.',
        topic: 'Medeni Hukuk'
      },
      {
        id: '2016-gnc-1',
        number: 115,
        subject: 'guncel',
        subjectTitle: 'Güncel Bilgiler',
        text: 'Birleşmiş Milletler (BM) Genel Merkezi hangi şehirdedir?',
        options: {
          A: 'Londra',
          B: 'Paris',
          C: 'New York',
          D: 'Washington D.C.',
          E: 'Berlin'
        },
        correctAnswer: 'C',
        explanation: 'Birleşmiş Milletler Genel Merkezi ABD\'nin New York kentinde bulunmaktadır.',
        topic: 'Uluslararası Kuruluşlar'
      }
    ]
  }
];

// Orantılı Sınav Süresi Hesaplama (ÖSYM: 120 Soru = 130 Dk -> Soru başına ~1.0833 Dk)
export const calculateExamDurationInMinutes = (questionCount) => {
  if (!questionCount || questionCount <= 0) return 0;
  return Math.round(questionCount * (130 / 120));
};

// ÖSYM Net ve P93 Tahmini Puan Hesaplayıcı
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

  // P93 Tahmini Puan Formülü Kestirimi (KPSS Ön Lisans Taban ~50 + Net * 0.42)
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
