// до- prefix motion verbs — COMPLETE
// Meaning: "reach (up to) a destination"
// Aspect pairs:
//   by foot: доходить (impf) ↔ дойти (pf)
//   by vehicle: доезжать (impf) ↔ доехать (pf)
// Construction: ДО + Genitive (до леса, до моста, до театра)

window.доMotionData = {
  prefix: "до",
  groups: [
    // ——— IMPERFECTIVE (by foot) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I was reaching the forest clearing (male)",   russian: "я доходил до лесной поляны" },
        { english: "I was reaching the forest clearing (female)", russian: "я доходила до лесной поляны" },
        { english: "You used to reach the mountain lodge (male)", russian: "ты доходил до горного домика" },
        { english: "You used to reach the mountain lodge (female)", russian: "ты доходила до горного домика" },
        { english: "He would reach the trail marker",             russian: "он доходил до указателя тропы" },
        { english: "She would reach the meadow",                  russian: "она доходила до луга" },
        { english: "We often reached the campsite",               russian: "мы доходили до места стоянки" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I reach the lake (when I go)",        russian: "я дохожу до озера" },
        { english: "You reach the forest",                russian: "ты доходишь до леса" },
        { english: "He reaches the hill",                 russian: "он доходит до холма" },
        { english: "She reaches the trail",               russian: "она доходит до тропы" },
        { english: "We reach the playground",             russian: "мы доходим до площадки" },
        { english: "You all reach the creek",             russian: "вы доходите до ручья" },
        { english: "They reach the meadow",               russian: "они доходят до луга" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will be reaching the lake",        russian: "я буду доходить до озера" },
        { english: "You will be reaching the forest",    russian: "ты будешь доходить до леса" },
        { english: "He will be reaching the hill",       russian: "он будет доходить до холма" },
        { english: "She will be reaching the trail",     russian: "она будет доходить до тропы" },
        { english: "We will be reaching the playground", russian: "мы будем доходить до площадки" },
        { english: "You all will be reaching the creek", russian: "вы будете доходить до ручья" },
        { english: "They will be reaching the meadow",   russian: "они будут доходить до луга" }
      ]
    },

    // ——— IMPERFECTIVE (by vehicle) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I was reaching the theater (male)",   russian: "я доезжал до театра" },
        { english: "I was reaching the theater (female)", russian: "я доезжала до театра" },
        { english: "You used to reach the museum (male)", russian: "ты доезжал до музея" },
        { english: "You used to reach the museum (female)", russian: "ты доезжала до музея" },
        { english: "He would reach the cinema",           russian: "он доезжал до кинотеатра" },
        { english: "She would reach the mall",            russian: "она доезжала до торгового центра" },
        { english: "We often reached the airport",        russian: "мы доезжали до аэропорта" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I reach the cinema (by transport)", russian: "я доезжаю до кинотеатра" },
        { english: "You reach the airport",            russian: "ты доезжаешь до аэропорта" },
        { english: "He reaches the hospital",          russian: "он доезжает до больницы" },
        { english: "She reaches the market",           russian: "она доезжает до рынка" },
        { english: "We reach the park",                russian: "мы доезжаем до парка" },
        { english: "You all reach the stadium",        russian: "вы доезжаете до стадиона" },
        { english: "They reach the restaurant",        russian: "они доезжают до ресторана" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will be reaching the cinema",   russian: "я буду доезжать до кинотеатра" },
        { english: "You will be reaching the airport", russian: "ты будешь доезжать до аэропорта" },
        { english: "He will be reaching the hospital", russian: "он будет доезжать до больницы" },
        { english: "She will be reaching the market",  russian: "она будет доезжать до рынка" },
        { english: "We will be reaching the park",     russian: "мы будем доезжать до парка" },
        { english: "You all will be reaching the stadium", russian: "вы будете доезжать до стадиона" },
        { english: "They will be reaching the restaurant", russian: "они будут доезжать до ресторана" }
      ]
    },

    // ——— PERFECTIVE (by foot) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I reached the forest clearing (male)",   russian: "я дошёл до лесной поляны" },
        { english: "I reached the forest clearing (female)", russian: "я дошла до лесной поляны" },
        { english: "He reached the trail marker",            russian: "он дошёл до указателя тропы" },
        { english: "She reached the meadow",                 russian: "она дошла до луга" },
        { english: "We reached the campsite",                russian: "мы дошли до места стоянки" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will reach the lake",   russian: "я дойду до озера" },
        { english: "You will reach the forest", russian: "ты дойдёшь до леса" },
        { english: "He will reach the hill",    russian: "он дойдёт до холма" },
        { english: "We will reach the playground", russian: "мы дойдём до площадки" },
        { english: "They will reach the meadow",  russian: "они дойдут до луга" }
      ]
    },

    // ——— PERFECTIVE (by vehicle) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I reached the theater (male)",   russian: "я доехал до театра" },
        { english: "I reached the theater (female)", russian: "я доехала до театра" },
        { english: "He reached the cinema",          russian: "он доехал до кинотеатра" },
        { english: "She reached the mall",           russian: "она доехала до торгового центра" },
        { english: "We reached the airport",         russian: "мы доехали до аэропорта" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will reach the cinema",    russian: "я доеду до кинотеатра" },
        { english: "You will reach the airport", russian: "ты доедешь до аэропорта" },
        { english: "He will reach the hospital", russian: "он доедет до больницы" },
        { english: "We will reach the park",     russian: "мы доедем до парка" },
        { english: "They will reach the restaurant", russian: "они доедут до ресторана" }
      ]
    }
  ]
};