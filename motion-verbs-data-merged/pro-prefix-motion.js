// ================================
// ПРО — COMPLETE motion dataset
// ================================
// Meaning: "pass by / go through"
// Aspect pairs:
//   • by foot: проходить (impf), пройти (pf)
//   • by vehicle: проезжать (impf), проехать (pf)
// Tenses:
//   • Imperfective: past, present, future (periphrastic)
//   • Perfective: past & future (no present)
// Notes:
//   • Typical patterns: мимо + Gen (past/by), через + Acc (through)
//   • We set direction: "unidirectional" to satisfy the UI filter.

window.проMotionData = {
  prefix: "про",
  groups: [
    // ——— IMPERFECTIVE (by foot) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I was walking past the forest clearing (male)",   russian: "я проходил мимо лесной поляны" },
        { english: "I was walking past the forest clearing (female)", russian: "я проходила мимо лесной поляны" },
        { english: "You were walking through the mountain pass (male)",   russian: "ты проходил через горный перевал" },
        { english: "You were walking through the mountain pass (female)", russian: "ты проходила через горный перевал" },
        { english: "He was walking past the trail marker",              russian: "он проходил мимо указателя тропы" },
        { english: "She was walking past the meadow",                   russian: "она проходила мимо луга" },
        { english: "We were walking through the campsite",              russian: "мы проходили через кемпинг" },
        { english: "You all were walking past the creek",               russian: "вы проходили мимо ручья" },
        { english: "They were walking through the valley",              russian: "они проходили через долину" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I walk past the lake",       russian: "я прохожу мимо озера" },
        { english: "You walk through the forest",russian: "ты проходишь через лес" },
        { english: "He walks past the hill",     russian: "он проходит мимо холма" },
        { english: "She walks past the trail",   russian: "она проходит мимо тропы" },
        { english: "We walk past the playground",russian: "мы проходим мимо площадки" },
        { english: "You all walk through the meadow", russian: "вы проходите через луг" },
        { english: "They walk through the valley",    russian: "они проходят через долину" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will be walking past the lake",       russian: "я буду проходить мимо озера" },
        { english: "You will be walking through the forest",russian: "ты будешь проходить через лес" },
        { english: "He will be walking past the hill",      russian: "он будет проходить мимо холма" },
        { english: "She will be walking past the trail",    russian: "она будет проходить мимо тропы" },
        { english: "We will be walking through the meadow", russian: "мы будем проходить через луг" },
        { english: "You all will be walking through the valley", russian: "вы будете проходить через долину" },
        { english: "They will be walking past the creek",   russian: "они будут проходить мимо ручья" }
      ]
    },

    // ——— IMPERFECTIVE (by vehicle) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I was driving past the theater (male)",   russian: "я проезжал мимо театра" },
        { english: "I was driving past the theater (female)", russian: "я проезжала мимо театра" },
        { english: "You were driving through the airport area (male)",   russian: "ты проезжал через район аэропорта" },
        { english: "You were driving through the airport area (female)", russian: "ты проезжала через район аэропорта" },
        { english: "He was driving past the hospital",        russian: "он проезжал мимо больницы" },
        { english: "She was driving past the market",         russian: "она проезжала мимо рынка" },
        { english: "We were driving through the city center", russian: "мы проезжали через центр города" },
        { english: "You all were driving past the mall",      russian: "вы проезжали мимо торгового центра" },
        { english: "They were driving past the stadium",      russian: "они проезжали мимо стадиона" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drive past the cinema",     russian: "я проезжаю мимо кинотеатра" },
        { english: "You drive through the tunnel",russian: "ты проезжаешь через тоннель" },
        { english: "He drives past the hospital", russian: "он проезжает мимо больницы" },
        { english: "She drives past the market",  russian: "она проезжает мимо рынка" },
        { english: "We drive through the theater district", russian: "мы проезжаем через театральный район" },
        { english: "You all drive past the mall",           russian: "вы проезжаете мимо торгового центра" },
        { english: "They drive past the stadium",           russian: "они проезжают мимо стадиона" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will be driving past the cinema",     russian: "я буду проезжать мимо кинотеатра" },
        { english: "You will be driving through the tunnel", russian: "ты будешь проезжать через тоннель" },
        { english: "He will be driving past the hospital",   russian: "он будет проезжать мимо больницы" },
        { english: "She will be driving past the market",    russian: "она будет проезжать мимо рынка" },
        { english: "We will be driving through the district", russian: "мы будем проезжать через район" },
        { english: "You all will be driving past the mall",  russian: "вы будете проезжать мимо торгового центра" },
        { english: "They will be driving past the stadium",  russian: "они будут проезжать мимо стадиона" }
      ]
    },

    // ——— PERFECTIVE (by foot) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I walked past the forest clearing (male)",   russian: "я прошёл мимо лесной поляны" },
        { english: "I walked past the forest clearing (female)", russian: "я прошла мимо лесной поляны" },
        { english: "You walked through the mountain pass (male)",   russian: "ты прошёл через горный перевал" },
        { english: "You walked through the mountain pass (female)", russian: "ты прошла через горный перевал" },
        { english: "He walked past the trail marker",            russian: "он прошёл мимо указателя тропы" },
        { english: "She walked past the meadow",                 russian: "она прошла мимо луга" },
        { english: "We walked through the campsite",             russian: "мы прошли через кемпинг" },
        { english: "You all walked past the creek",              russian: "вы прошли мимо ручья" },
        { english: "They walked through the valley",             russian: "они прошли через долину" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will walk past the lake",        russian: "я пройду мимо озера" },
        { english: "You will walk through the forest", russian: "ты пройдёшь через лес" },
        { english: "He will walk past the hill",       russian: "он пройдёт мимо холма" },
        { english: "She will walk past the trail",     russian: "она пройдёт мимо тропы" },
        { english: "We will walk past the playground", russian: "мы пройдём мимо площадки" },
        { english: "You all will walk through the meadow", russian: "вы пройдёте через луг" },
        { english: "They will walk through the valley",    russian: "они пройдут через долину" }
      ]
    },

    // ——— PERFECTIVE (by vehicle) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drove past the theater (male)",   russian: "я проехал мимо театра" },
        { english: "I drove past the theater (female)", russian: "я проехала мимо театра" },
        { english: "You drove through the museum district (male)",   russian: "ты проехал через музейный район" },
        { english: "You drove through the museum district (female)", russian: "ты проехала через музейный район" },
        { english: "He drove past the cinema",          russian: "он проехал мимо кинотеатра" },
        { english: "She drove past the mall",           russian: "она проехала мимо торгового центра" },
        { english: "We drove through the city center",  russian: "мы проехали через центр города" },
        { english: "You all drove past the airport",    russian: "вы проехали мимо аэропорта" },
        { english: "They drove past the stadium",       russian: "они проехали мимо стадиона" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will drive past the cinema",     russian: "я проеду мимо кинотеатра" },
        { english: "You will drive through the airport area", russian: "ты проедешь через район аэропорта" },
        { english: "He will drive past the hospital",  russian: "он проедет мимо больницы" },
        { english: "She will drive past the market",   russian: "она проедет мимо рынка" },
        { english: "We will drive through the district", russian: "мы проедем через район" },
        { english: "You all will drive past the mall",         russian: "вы проедете мимо торгового центра" },
        { english: "They will drive past the stadium",         russian: "они проедут мимо стадиона" }
      ]
    }
  ]
};
