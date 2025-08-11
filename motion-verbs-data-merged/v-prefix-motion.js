// в- prefix motion verbs — COMPLETE
// Meaning: "enter / go into"
// Aspect pairs:
//   by foot: входить (impf) ↔ войти (pf)
//   by vehicle: въезжать (impf) ↔ въехать (pf)
// Governance: в + Acc (into), на + Acc (onto/grounds/parking)

window.вMotionData = {
  prefix: "в",
  groups: [
    // ——— IMPERFECTIVE (by foot: входить) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I was entering the forest cave (male)",   russian: "я входил в лесную пещеру" },
        { english: "I was entering the forest cave (female)", russian: "я входила в лесную пещеру" },
        { english: "You were entering the mountain shelter (male)",   russian: "ты входил в горный приют" },
        { english: "You were entering the mountain shelter (female)", russian: "ты входила в горный приют" },
        { english: "He was entering the hiking lodge",        russian: "он входил в туристический домик" },
        { english: "She was entering the meadow hut",         russian: "она входила в хижину на лугу" },
        { english: "We were entering the camp shelter",       russian: "мы входили в лагерный навес" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I enter the lake cabin",      russian: "я вхожу в домик у озера" },
        { english: "You enter the forest shelter",russian: "ты входишь в лесное укрытие" },
        { english: "He enters the hill shelter",  russian: "он входит в укрытие на холме" },
        { english: "She enters the trail shelter",russian: "она входит в укрытие на тропе" },
        { english: "We enter the playground shed",russian: "мы входим в сарай на площадке" },
        { english: "You all enter the creek pavilion", russian: "вы входите в павильон у ручья" },
        { english: "They enter the meadow hut",   russian: "они входят в хижину на лугу" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will be entering the lake cabin",   russian: "я буду входить в домик у озера" },
        { english: "You will be entering the forest shelter", russian: "ты будешь входить в лесное укрытие" },
        { english: "He will be entering the hill shelter",    russian: "он будет входить в укрытие на холме" },
        { english: "She will be entering the trail shelter",  russian: "она будет входить в укрытие на тропе" },
        { english: "We will be entering the playground shed", russian: "мы будем входить в сарай на площадке" },
        { english: "You all will be entering the creek pavilion", russian: "вы будете входить в павильон у ручья" },
        { english: "They will be entering the meadow hut",    russian: "они будут входить в хижину на лугу" }
      ]
    },

    // ——— IMPERFECTIVE (by vehicle: въезжать) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I was driving into the theater parking (male)",   russian: "я въезжал на парковку театра" },
        { english: "I was driving into the theater parking (female)", russian: "я въезжала на парковку театра" },
        { english: "You were driving into the museum grounds (male)",   russian: "ты въезжал на территорию музея" },
        { english: "You were driving into the museum grounds (female)", russian: "ты въезжала на территорию музея" },
        { english: "He was driving into the cinema complex",          russian: "он въезжал в кинокомплекс" },
        { english: "She was driving into the mall garage",            russian: "она въезжала в гараж торгового центра" },
        { english: "We were driving into the airport terminal",       russian: "мы въезжали в терминал аэропорта" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drive into the cinema parking",   russian: "я въезжаю на парковку кинотеатра" },
        { english: "You drive into the airport complex",russian: "ты въезжаешь в аэропортовый комплекс" },
        { english: "He drives onto the hospital grounds", russian: "он въезжает на территорию больницы" },
        { english: "She drives into the meeting center",  russian: "она въезжает в центр встреч" },
        { english: "We drive into the theater complex",   russian: "мы въезжаем в театральный комплекс" },
        { english: "You all drive into the mall garage",  russian: "вы въезжаете в гараж торгового центра" },
        { english: "They drive into the stadium complex", russian: "они въезжают в спортивный комплекс" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will be driving into the cinema parking",   russian: "я буду въезжать на парковку кинотеатра" },
        { english: "You will be driving into the airport complex", russian: "ты будешь въезжать в аэропортовый комплекс" },
        { english: "He will be driving onto the hospital grounds", russian: "он будет въезжать на территорию больницы" },
        { english: "She will be driving into the meeting center",  russian: "она будет въезжать в центр встреч" },
        { english: "We will be driving into the theater complex",  russian: "мы будем въезжать в театральный комплекс" },
        { english: "You all will be driving into the mall garage", russian: "вы будете въезжать в гараж торгового центра" },
        { english: "They will be driving into the stadium complex", russian: "они будут въезжать в спортивный комплекс" }
      ]
    },

    // ——— PERFECTIVE (by foot: войти) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I entered the forest cave (male)",   russian: "я вошёл в лесную пещеру" },
        { english: "I entered the forest cave (female)", russian: "я вошла в лесную пещеру" },
        { english: "He entered the hiking lodge",        russian: "он вошёл в туристический домик" },
        { english: "We entered the camp shelter",        russian: "мы вошли в лагерный навес" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will enter the lake cabin",    russian: "я войду в домик у озера" },
        { english: "You will enter the forest shelter", russian: "ты войдёшь в лесное укрытие" },
        { english: "He will enter the hill shelter",    russian: "он войдёт в укрытие на холме" },
        { english: "They will enter the meadow hut",    russian: "они войдут в хижину на лугу" }
      ]
    },

    // ——— PERFECTIVE (by vehicle: въехать) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drove into the theater parking (male)",   russian: "я въехал на парковку театра" },
        { english: "I drove into the theater parking (female)", russian: "я въехала на парковку театра" },
        { english: "He drove into the cinema complex",          russian: "он въехал в кинокомплекс" },
        { english: "We drove into the airport terminal",        russian: "мы въехали в терминал аэропорта" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will drive into the cinema parking",   russian: "я въеду на парковку кинотеатра" },
        { english: "You will drive into the airport complex",russian: "ты въедешь в аэропортовый комплекс" },
        { english: "He will drive onto the hospital grounds", russian: "он въедет на территорию больницы" },
        { english: "They will drive into the stadium complex", russian: "они въедут в спортивный комплекс" }
      ]
    }
  ]
};