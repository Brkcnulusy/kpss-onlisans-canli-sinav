// KPSS Ön Lisans ve KPSS Lisans (GY-GK) Sınav Veri Tabanı
// Sıfırlandı: Gerçek ÖSYM Çıkmış Sorular ve Araştırma Tabanlı Soru Havuzu Oluşturulacak.

export const SUBJECTS = [
  { id: "turkce", name: "Türkçe", questionCount: 30, icon: "BookOpen", color: "#4f46e5" },
  { id: "matematik", name: "Matematik & Sayısal Mantık", questionCount: 30, icon: "Calculator", color: "#0284c7" },
  { id: "tarih", name: "Tarih", questionCount: 27, icon: "Landmark", color: "#d97706" },
  { id: "cografya", name: "Coğrafya", questionCount: 18, icon: "Globe", color: "#059669" },
  { id: "vatandaslik", name: "Vatandaşlık & Hukuk", questionCount: 9, icon: "Scale", color: "#7c3aed" },
  { id: "guncel", name: "Güncel Bilgiler", questionCount: 6, "icon": "Sparkles", color: "#ec4899" }
];

export const EXAMS = [
  {
    id: "kpss-2024-onlisans",
    category: "onlisans",
    categoryTitle: "KPSS Ön Lisans",
    year: 2024,
    title: "2024 KPSS Ön Lisans Sınavı",
    description: "ÖSYM 2024 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
  },
  {
    id: "kpss-2022-onlisans",
    category: "onlisans",
    categoryTitle: "KPSS Ön Lisans",
    year: 2022,
    title: "2022 KPSS Ön Lisans Sınavı",
    description: "ÖSYM 2022 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
  },
  {
    id: "kpss-2020-onlisans",
    category: "onlisans",
    categoryTitle: "KPSS Ön Lisans",
    year: 2020,
    title: "2020 KPSS Ön Lisans Sınavı",
    description: "ÖSYM 2020 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
  },
  {
    id: "kpss-2018-onlisans",
    category: "onlisans",
    categoryTitle: "KPSS Ön Lisans",
    year: 2018,
    title: "2018 KPSS Ön Lisans Sınavı",
    description: "ÖSYM 2018 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
  },
  {
    id: "kpss-2016-onlisans",
    category: "onlisans",
    categoryTitle: "KPSS Ön Lisans",
    year: 2016,
    title: "2016 KPSS Ön Lisans Sınavı",
    description: "ÖSYM 2016 KPSS Ön Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
  },
  {
    id: "kpss-2024-lisans",
    category: "lisans",
    categoryTitle: "KPSS Lisans (GY-GK)",
    year: 2024,
    title: "2024 KPSS Lisans (GY-GK) Sınavı",
    description: "ÖSYM 2024 KPSS Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
  },
  {
    id: "kpss-2022-lisans",
    category: "lisans",
    categoryTitle: "KPSS Lisans (GY-GK)",
    year: 2022,
    title: "2022 KPSS Lisans (GY-GK) Sınavı",
    description: "ÖSYM 2022 KPSS Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
  },
  {
    id: "kpss-2020-lisans",
    category: "lisans",
    categoryTitle: "KPSS Lisans (GY-GK)",
    year: 2020,
    title: "2020 KPSS Lisans (GY-GK) Sınavı",
    description: "ÖSYM 2020 KPSS Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
  },
  {
    id: "kpss-2018-lisans",
    category: "lisans",
    categoryTitle: "KPSS Lisans (GY-GK)",
    year: 2018,
    title: "2018 KPSS Lisans (GY-GK) Sınavı",
    description: "ÖSYM 2018 KPSS Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
  },
  {
    id: "kpss-2016-lisans",
    category: "lisans",
    categoryTitle: "KPSS Lisans (GY-GK)",
    year: 2016,
    title: "2016 KPSS Lisans (GY-GK) Sınavı",
    description: "ÖSYM 2016 KPSS Lisans Genel Yetenek & Genel Kültür Sınavı (Gerçek ÖSYM Soru Havuzu Yapılandırılıyor)",
    totalQuestions: 0,
    questions: []
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
