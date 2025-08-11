// при- prefix motion verbs — COMPLETE
// Meaning: "arrive / come to a place"
// Aspect pairs:
//   by foot: приходить (impf) ↔ прийти (pf)
//   by vehicle: приезжать (impf) ↔ приехать (pf)

window.приMotionData = {
  prefix: "при",
  groups: [
    // ——— IMPERFECTIVE (by foot) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I was arriving at the forest clearing (male)",   russian: "я приходил на лесную поляну" },
        { english: "I was arriving at the forest clearing (female)", russian: "я приходила на лесную поляну" },
        { english: "You used to arrive at the mountain lodge (male)", russian: "ты приходил в горный домик" },
        { english: "You used to arrive at the mountain lodge (female)", russian: "ты приходила в горный домик" },
        { english: "He would arrive at the trail",                   russian: "он приходил на тропу" },
        { english: "She would arrive at the meadow",                 russian: "она приходила на луг" },
        { english: "We often arrived at the campsite",               russian: "мы приходили на место стоянки" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I arrive at the lake",   russian: "я прихожу к озеру" },
        { english: "You arrive in the forest", russian: "ты приходишь в лес" },
        { english: "He arrives at the hill",   russian: "он приходит на холм" },
        { english: "She arrives at the trail", russian: "она приходит на тропу" },
        { english: "We arrive at the playground", russian: "мы приходим на площадку" },
        { english: "You all arrive at the creek", russian: "вы приходите к ручью" },
        { english: "They arrive at the meadow",   russian: "они приходят на луг" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will be arriving at the lake",   russian: "я буду приходить к озеру" },
        { english: "You will be arriving in the forest", russian: "ты будешь приходить в лес" },
        { english: "He will be arriving at the hill",    russian: "он будет приходить на холм" },
        { english: "We will be arriving at the trail",   russian: "мы будем приходить на тропу" },
        { english: "They will be arriving at the meadow", russian: "они будут приходить на луг" }
      ]
    },

    // ——— IMPERFECTIVE (by vehicle) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I was arriving at the theater (male)",   russian: "я приезжал в театр" },
        { english: "I was arriving at the theater (female)", russian: "я приезжала в театр" },
        { english: "You used to arrive at the museum (male)", russian: "ты приезжал в музей" },
        { english: "You used to arrive at the museum (female)", russian: "ты приезжала в музей" },
        { english: "He would arrive at the cinema",          russian: "он приезжал в кинотеатр" },
        { english: "She would arrive at the mall",           russian: "она приезжала в торговый центр" },
        { english: "We often arrived at the airport",        russian: "мы приезжали в аэропорт" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I arrive at the cinema (by transport)", russian: "я приезжаю в кинотеатр" },
        { english: "You arrive at the airport",            russian: "ты приезжаешь в аэропорт" },
        { english: "He arrives at the hospital",           russian: "он приезжает в больницу" },
        { english: "She arrives at the meeting",           russian: "она приезжает на встречу" },
        { english: "We arrive at the park",                russian: "мы приезжаем в парк" },
        { english: "You all arrive at the mall",           russian: "вы приезжаете в торговый центр" },
        { english: "They arrive at the stadium",           russian: "они приезжают на стадион" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will be arriving at the cinema",   russian: "я буду приезжать в кинотеатр" },
        { english: "You will be arriving at the airport", russian: "ты будешь приезжать в аэропорт" },
        { english: "He will be arriving at the hospital", russian: "он будет приезжать в больницу" },
        { english: "We will be arriving at the park",     russian: "мы будем приезжать в парк" },
        { english: "They will be arriving at the stadium", russian: "они будут приезжать на стадион" }
      ]
    },

    // ——— PERFECTIVE (by foot) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I arrived at the forest clearing (male)",   russian: "я пришёл на лесную поляну" },
        { english: "I arrived at the forest clearing (female)", russian: "я пришла на лесную поляну" },
        { english: "He arrived at the hiking trail",            russian: "он пришёл на тропу" },
        { english: "We arrived at the campsite",                russian: "мы пришли на место стоянки" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will arrive at the lake",   russian: "я приду к озеру" },
        { english: "You will arrive in the forest", russian: "ты придёшь в лес" },
        { english: "We will arrive at the playground", russian: "мы придём на площадку" },
        { english: "They will arrive at the meadow",  russian: "они придут на луг" }
      ]
    },

    // ——— PERFECTIVE (by vehicle) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I arrived at the theater (male)",   russian: "я приехал в театр" },
        { english: "I arrived at the theater (female)", russian: "я приехала в театр" },
        { english: "He arrived at the cinema",          russian: "он приехал в кинотеатр" },
        { english: "We arrived at the airport",         russian: "мы приехали в аэропорт" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will arrive at the cinema",   russian: "я приеду в кинотеатр" },
        { english: "You will arrive at the airport", russian: "ты приедешь в аэропорт" },
        { english: "He will arrive at the hospital", russian: "он приедет в больницу" },
        { english: "They will arrive at the stadium", russian: "они приедут на стадион" }
      ]
    }
  ]
};