// вы- prefix motion verbs — COMPLETE
// Meaning: "exit / go out"
// Aspect pairs:
//   by foot: выходить (impf) ↔ выйти (pf)
//   by vehicle: выезжать (impf) ↔ выехать (pf)
// Governance tips: из + Gen (out of an enclosed space), с + Gen (off/away from a surface or grounds/parking)

window.выMotionData = {
  prefix: "вы",
  groups: [
    // ——— IMPERFECTIVE (by foot: выходить) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I was exiting the forest cave (male)",   russian: "я выходил из лесной пещеры" },
        { english: "I was exiting the forest cave (female)", russian: "я выходила из лесной пещеры" },
        { english: "You were leaving the mountain shelter (male)",   russian: "ты выходил из горного приюта" },
        { english: "You were leaving the mountain shelter (female)", russian: "ты выходила из горного приюта" },
        { english: "He was exiting the hiking lodge",        russian: "он выходил из туристического домика" },
        { english: "She was leaving the meadow hut",         russian: "она выходила из хижины на лугу" },
        { english: "We were exiting the camp shelter",       russian: "мы выходили из лагерного навеса" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I exit the cave",            russian: "я выхожу из пещеры" },
        { english: "You leave the shelter",      russian: "ты выходишь из приюта" },
        { english: "He exits the lodge",         russian: "он выходит из домика" },
        { english: "She exits the hut",          russian: "она выходит из хижины" },
        { english: "We exit the pavilion",       russian: "мы выходим из павильона" },
        { english: "You all exit the cabin",     russian: "вы выходите из домика" },
        { english: "They exit the tent",         russian: "они выходят из палатки" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will be exiting the cave",       russian: "я буду выходить из пещеры" },
        { english: "You will be leaving the shelter",  russian: "ты будешь выходить из приюта" },
        { english: "He will be exiting the lodge",     russian: "он будет выходить из домика" },
        { english: "She will be leaving the hut",      russian: "она будет выходить из хижины" },
        { english: "We will be exiting the pavilion",  russian: "мы будем выходить из павильона" },
        { english: "You all will be exiting the cabin",russian: "вы будете выходить из домика" },
        { english: "They will be leaving the valley lodge", russian: "они будут выходить из домика в долине" }
      ]
    },

    // ——— IMPERFECTIVE (by vehicle: выезжать) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I was driving out of the theater parking (male)",   russian: "я выезжал с парковки театра" },
        { english: "I was driving out of the theater parking (female)", russian: "я выезжала с парковки театра" },
        { english: "You were driving out of the museum grounds (male)",   russian: "ты выезжал с территории музея" },
        { english: "You were driving out of the museum grounds (female)", russian: "ты выезжала с территории музея" },
        { english: "He was driving out of the cinema complex",           russian: "он выезжал из кинокомплекса" },
        { english: "She was driving out of the mall garage",             russian: "она выезжала из гаража торгового центра" },
        { english: "We were driving out of the airport terminal",        russian: "мы выезжали из терминала аэропорта" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drive out of the parking lot",   russian: "я выезжаю с парковки" },
        { english: "You drive out of the airport area",russian: "ты выезжаешь с территории аэропорта" },
        { english: "He drives out of the hospital grounds", russian: "он выезжает с территории больницы" },
        { english: "She drives out of the meeting center",  russian: "она выезжает с территории центра встреч" },
        { english: "We drive out of the park grounds",      russian: "мы выезжаем с территории парка" },
        { english: "You all drive out of the mall garage",  russian: "вы выезжаете из гаража торгового центра" },
        { english: "They drive out of the stadium parking", russian: "они выезжают с парковки стадиона" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will be driving out of the cinema parking",   russian: "я буду выезжать с парковки кинотеатра" },
        { english: "You will be driving out of the airport complex", russian: "ты будешь выезжать из аэропортового комплекса" },
        { english: "He will be driving out of the hospital grounds", russian: "он будет выезжать с территории больницы" },
        { english: "She will be driving out of the market area",     russian: "она будет выезжать с рынка" },
        { english: "We will be driving out of the park grounds",     russian: "мы будем выезжать с территории парка" },
        { english: "You all will be driving out of the stadium parking", russian: "вы будете выезжать с парковки стадиона" },
        { english: "They will be driving out of the restaurant complex",  russian: "они будут выезжать из ресторанного комплекса" }
      ]
    },

    // ——— PERFECTIVE (by foot: выйти) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I exited the forest cave (male)",   russian: "я вышел из лесной пещеры" },
        { english: "I exited the forest cave (female)", russian: "я вышла из лесной пещеры" },
        { english: "He exited the hiking lodge",        russian: "он вышел из туристического домика" },
        { english: "We exited the camp shelter",        russian: "мы вышли из лагерного навеса" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will exit the lake cabin",     russian: "я выйду из домика у озера" },
        { english: "You will leave the forest shelter", russian: "ты выйдешь из лесного укрытия" },
        { english: "He will exit the hill shelter",    russian: "он выйдет из укрытия на холме" },
        { english: "They will exit the meadow hut",    russian: "они выйдут из хижины на лугу" }
      ]
    },

    // ——— PERFECTIVE (by vehicle: выехать) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drove out of the theater parking (male)",   russian: "я выехал с парковки театра" },
        { english: "I drove out of the theater parking (female)", russian: "я выехала с парковки театра" },
        { english: "He drove out of the cinema complex",          russian: "он выехал из кинокомплекса" },
        { english: "We drove out of the airport terminal",        russian: "мы выехали из терминала аэропорта" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will drive out of the cinema parking",   russian: "я выеду с парковки кинотеатра" },
        { english: "You will drive out of the airport complex",russian: "ты выедешь из аэропортового комплекса" },
        { english: "He will drive out of the hospital grounds", russian: "он выедет с территории больницы" },
        { english: "They will drive out of the stadium parking", russian: "они выедут с парковки стадиона" }
      ]
    }
  ]
};