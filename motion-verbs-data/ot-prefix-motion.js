// от- prefix motion verbs — COMPLETE
// Meaning: "move away / step back from"
// Aspect pairs:
//   by foot: отходить (impf) ↔ отойти (pf)
//   by vehicle: отъезжать (impf) ↔ отъехать (pf)
// Construction: ОТ + Genitive (от леса, от моста, от театра)

window.отMotionData = {
  prefix: "от",
  groups: [
    // ——— IMPERFECTIVE (by foot) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I was stepping away from the forest edge (male)",   russian: "я отходил от края леса" },
        { english: "I was stepping away from the forest edge (female)", russian: "я отходила от края леса" },
        { english: "You used to move back from the cliff (male)",       russian: "ты отходил от обрыва" },
        { english: "You used to move back from the cliff (female)",     russian: "ты отходила от обрыва" },
        { english: "He would step away from the trail marker",          russian: "он отходил от указателя тропы" },
        { english: "She would move back from the meadow fence",         russian: "она отходила от забора луга" },
        { english: "We often moved back from the campfire",             russian: "мы отходили от костра" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I step away from the lake shore", russian: "я отхожу от берега озера" },
        { english: "You step away from the forest",   russian: "ты отходишь от леса" },
        { english: "He steps away from the hill",     russian: "он отходит от холма" },
        { english: "She steps away from the trail",   russian: "она отходит от тропы" },
        { english: "We step away from the playground", russian: "мы отходим от площадки" },
        { english: "You all step away from the creek", russian: "вы отходите от ручья" },
        { english: "They step away from the meadow",  russian: "они отходят от луга" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will be stepping away from the lake",   russian: "я буду отходить от озера" },
        { english: "You will be moving back from the forest", russian: "ты будешь отходить от леса" },
        { english: "He will be stepping away from the hill",  russian: "он будет отходить от холма" },
        { english: "We will be stepping away from the trail", russian: "мы будем отходить от тропы" },
        { english: "They will be stepping away from the meadow", russian: "они будут отходить от луга" }
      ]
    },

    // ——— IMPERFECTIVE (by vehicle) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I was backing away from the theater (male)",   russian: "я отъезжал от театра" },
        { english: "I was backing away from the theater (female)", russian: "я отъезжала от театра" },
        { english: "You used to pull back from the museum (male)", russian: "ты отъезжал от музея" },
        { english: "You used to pull back from the museum (female)", russian: "ты отъезжала от музея" },
        { english: "He would drive back from the cinema",          russian: "он отъезжал от кинотеатра" },
        { english: "She would pull away from the mall",            russian: "она отъезжала от торгового центра" },
        { english: "We often drove back from the airport",         russian: "мы отъезжали от аэропорта" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I back away from the cinema",     russian: "я отъезжаю от кинотеатра" },
        { english: "You pull back from the airport",  russian: "ты отъезжаешь от аэропорта" },
        { english: "He pulls back from the hospital", russian: "он отъезжает от больницы" },
        { english: "She pulls away from the market",  russian: "она отъезжает от рынка" },
        { english: "We pull back from the park",      russian: "мы отъезжаем от парка" },
        { english: "You all move away from the stadium", russian: "вы отъезжаете от стадиона" },
        { english: "They drive back from the restaurant", russian: "они отъезжают от ресторана" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will be backing away from the cinema",    russian: "я буду отъезжать от кинотеатра" },
        { english: "You will be pulling back from the airport", russian: "ты будешь отъезжать от аэропорта" },
        { english: "He will be pulling back from the hospital", russian: "он будет отъезжать от больницы" },
        { english: "We will be pulling back from the park",     russian: "мы будем отъезжать от парка" },
        { english: "They will be moving away from the stadium", russian: "они будут отъезжать от стадиона" }
      ]
    },

    // ——— PERFECTIVE (by foot) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I stepped away from the forest edge (male)",   russian: "я отошёл от края леса" },
        { english: "I stepped away from the forest edge (female)", russian: "я отошла от края леса" },
        { english: "He stepped away from the trail marker",        russian: "он отошёл от указателя тропы" },
        { english: "We stepped back from the campfire",            russian: "мы отошли от костра" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will step away from the lake",   russian: "я отойду от озера" },
        { english: "You will move back from the forest", russian: "ты отойдёшь от леса" },
        { english: "We will step back from the playground", russian: "мы отойдём от площадки" },
        { english: "They will step back from the meadow",  russian: "они отойдут от луга" }
      ]
    },

    // ——— PERFECTIVE (by vehicle) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I backed away from the theater (male)",   russian: "я отъехал от театра" },
        { english: "I backed away from the theater (female)", russian: "я отъехала от театра" },
        { english: "He drove back from the cinema",           russian: "он отъехал от кинотеатра" },
        { english: "We pulled back from the airport",         russian: "мы отъехали от аэропорта" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will back away from the cinema",    russian: "я отъеду от кинотеатра" },
        { english: "You will pull back from the airport", russian: "ты отъедешь от аэропорта" },
        { english: "He will drive back from the hospital", russian: "он отъедет от больницы" },
        { english: "They will drive back from the restaurant", russian: "они отъедут от ресторана" }
      ]
    }
  ]
};