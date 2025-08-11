// у- prefix motion verbs — COMPLETE
// Meaning: "depart / go away (leave a place)"
// Aspect pairs:
//   by foot: уходить (impf) ↔ уйти (pf)
//   by vehicle: уезжать (impf) ↔ уехать (pf)
// Typical governance: из + Gen (from inside), с + Gen (from surface/open area), от + Gen (from/away from a point)

window.уMotionData = {
  prefix: "у",
  groups: [
    // ——— IMPERFECTIVE (by foot: уходить) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I was leaving the forest clearing (male)",   russian: "я уходил с лесной поляны" },
        { english: "I was leaving the forest clearing (female)", russian: "я уходила с лесной поляны" },
        { english: "You used to leave the mountain lodge (male)",   russian: "ты уходил из горного домика" },
        { english: "You used to leave the mountain lodge (female)", russian: "ты уходила из горного домика" },
        { english: "He was leaving the hiking trail",            russian: "он уходил с тропы" },
        { english: "She was leaving the meadow",                 russian: "она уходила с луга" },
        { english: "We often left the campsite",                 russian: "мы уходили с места стоянки" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I leave the clearing",        russian: "я ухожу с поляны" },
        { english: "You leave the forest",        russian: "ты уходишь из леса" },
        { english: "He leaves the trail",         russian: "он уходит с тропы" },
        { english: "She leaves the valley",       russian: "она уходит из долины" },
        { english: "We leave the campsite",       russian: "мы уходим с места стоянки" },
        { english: "You all leave the creek area",russian: "вы уходите от ручья" },
        { english: "They leave the meadow",       russian: "они уходят с луга" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will be leaving the clearing",   russian: "я буду уходить с поляны" },
        { english: "You will be leaving the forest",   russian: "ты будешь уходить из леса" },
        { english: "He will be leaving the hill",      russian: "он будет уходить с холма" },
        { english: "She will be leaving the trail",    russian: "она будет уходить с тропы" },
        { english: "We will be leaving the playground",russian: "мы будем уходить с площадки" },
        { english: "You all will be leaving the creek",russian: "вы будете уходить от ручья" },
        { english: "They will be leaving the meadow",  russian: "они будут уходить с луга" }
      ]
    },

    // ——— IMPERFECTIVE (by vehicle: уезжать) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I was driving away from the theater (male)",   russian: "я уезжал из театра" },
        { english: "I was driving away from the theater (female)", russian: "я уезжала из театра" },
        { english: "You used to leave the museum (male)",          russian: "ты уезжал из музея" },
        { english: "You used to leave the museum (female)",        russian: "ты уезжала из музея" },
        { english: "He was leaving the cinema",                    russian: "он уезжал из кинотеатра" },
        { english: "She was leaving the mall",                     russian: "она уезжала из торгового центра" },
        { english: "We often drove away from the airport",         russian: "мы уезжали из аэропорта" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drive away from the theater",   russian: "я уезжаю из театра" },
        { english: "You leave the airport",           russian: "ты уезжаешь из аэропорта" },
        { english: "He leaves the hospital",          russian: "он уезжает из больницы" },
        { english: "She leaves the market area",      russian: "она уезжает с рынка" },
        { english: "We leave the park",               russian: "мы уезжаем из парка" },
        { english: "You all leave the stadium",       russian: "вы уезжаете со стадиона" },
        { english: "They leave the restaurant",       russian: "они уезжают из ресторана" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will be driving away from the cinema",    russian: "я буду уезжать из кинотеатра" },
        { english: "You will be leaving the airport",           russian: "ты будешь уезжать из аэропорта" },
        { english: "He will be leaving the hospital",           russian: "он будет уезжать из больницы" },
        { english: "She will be leaving the meeting center",    russian: "она будет уезжать из центра встреч" },
        { english: "We will be leaving the park",               russian: "мы будем уезжать из парка" },
        { english: "You all will be leaving the stadium",       russian: "вы будете уезжать со стадиона" },
        { english: "They will be leaving the restaurant",       russian: "они будут уезжать из ресторана" }
      ]
    },

    // ——— PERFECTIVE (by foot: уйти) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I left the forest clearing (male)",   russian: "я ушёл с лесной поляны" },
        { english: "I left the forest clearing (female)", russian: "я ушла с лесной поляны" },
        { english: "He left the hiking trail",            russian: "он ушёл с тропы" },
        { english: "We left the campsite",                russian: "мы ушли с места стоянки" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will leave the lake",     russian: "я уйду от озера" },
        { english: "You will leave the forest", russian: "ты уйдёшь из леса" },
        { english: "He will leave the hill",    russian: "он уйдёт с холма" },
        { english: "They will leave the meadow",russian: "они уйдут с луга" }
      ]
    },

    // ——— PERFECTIVE (by vehicle: уехать) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drove away from the theater (male)",   russian: "я уехал из театра" },
        { english: "I drove away from the theater (female)", russian: "я уехала из театра" },
        { english: "He drove away from the cinema",          russian: "он уехал из кинотеатра" },
        { english: "We drove away from the airport",         russian: "мы уехали из аэропорта" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will drive away from the cinema",   russian: "я уеду из кинотеатра" },
        { english: "You will leave the airport",          russian: "ты уедешь из аэропорта" },
        { english: "He will drive away from the hospital",russian: "он уедет из больницы" },
        { english: "They will drive away from the stadium", russian: "они уедут со стадиона" }
      ]
    }
  ]
};