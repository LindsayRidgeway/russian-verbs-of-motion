// по- prefix motion verbs — COMPLETE, corrected
// Meanings handled:
//   A) Perfective "set off": пойти / поехать (start moving)
//   B) Perfective "delimitative": походить / поездить (move around for a while)
// Tenses:
//   • Perfective sets (A & B): past & future only (no present for perfective)
// Direction labels follow your UI: A) "unidirectional", B) "multidirectional".

window.поMotionData = {
  prefix: "по",
  groups: [
    // ——— A) PERFECTIVE "set off" — by foot (пойти) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I set off toward the forest (male)",   russian: "я пошёл в лес" },
        { english: "I set off toward the forest (female)", russian: "я пошла в лес" },
        { english: "You headed to the mountain trail (male)",   russian: "ты пошёл к горной тропе" },
        { english: "You headed to the mountain trail (female)", russian: "ты пошла к горной тропе" },
        { english: "He started walking to the lake",            russian: "он пошёл к озеру" },
        { english: "She set off to the meadow",                 russian: "она пошла на луг" },
        { english: "We headed along the trail",                 russian: "мы пошли по тропе" },
        { english: "You all set off to the park",               russian: "вы пошли в парк" },
        { english: "They started walking to the valley",        russian: "они пошли в долину" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will head to the lake",     russian: "я пойду к озеру" },
        { english: "You will set off to the forest", russian: "ты пойдёшь в лес" },
        { english: "He will head up the hill",     russian: "он пойдёт на холм" },
        { english: "She will set off to the playground", russian: "она пойдёт на площадку" },
        { english: "We will set off along the trail",     russian: "мы пойдём по тропе" },
        { english: "You all will head to the park",       russian: "вы пойдёте в парк" },
        { english: "They will head toward the creek",     russian: "они пойдут к ручью" }
      ]
    },

    // ——— A) PERFECTIVE "set off" — by vehicle (поехать) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drove off to the theater (male)",   russian: "я поехал в театр" },
        { english: "I drove off to the theater (female)", russian: "я поехала в театр" },
        { english: "You drove off to the museum (male)",  russian: "ты поехал в музей" },
        { english: "You drove off to the museum (female)",russian: "ты поехала в музей" },
        { english: "He drove off to the cinema",          russian: "он поехал в кинотеатр" },
        { english: "She drove off to the mall",           russian: "она поехала в торговый центр" },
        { english: "We drove off to the airport",         russian: "мы поехали в аэропорт" },
        { english: "You all drove off to the stadium",    russian: "вы поехали на стадион" },
        { english: "They drove off to the restaurant",    russian: "они поехали в ресторан" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will drive off to the cinema",     russian: "я поеду в кинотеатр" },
        { english: "You will drive off to the airport",  russian: "ты поедешь в аэропорт" },
        { english: "He will drive off to the hospital",  russian: "он поедет в больницу" },
        { english: "She will drive off to the meeting",  russian: "она поедет на встречу" },
        { english: "We will drive off to the park",      russian: "мы поедем в парк" },
        { english: "You all will drive off to the stadium", russian: "вы поедете на стадион" },
        { english: "They will drive off to the restaurant",  russian: "они поедут в ресторан" }
      ]
    },

    // ——— B) PERFECTIVE "for a while" — by foot (походить) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "multidirectional",
      sentences: [
        { english: "I walked around the park for a while (male)",   russian: "я походил по парку" },
        { english: "I walked around the park for a while (female)", russian: "я походила по парку" },
        { english: "You wandered around the forest for a bit (male)",   russian: "ты походил по лесу" },
        { english: "You wandered around the forest for a bit (female)", russian: "ты походила по лесу" },
        { english: "He walked around the city for a while",            russian: "он походил по городу" },
        { english: "She walked around the meadow for a while",         russian: "она походила по лугу" },
        { english: "We walked around the museum for a while",          russian: "мы походили по музею" },
        { english: "You all walked around campus for a while",         russian: "вы походили по кампусу" },
        { english: "They walked around the market for a while",        russian: "они походили по рынку" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "multidirectional",
      sentences: [
        { english: "I’ll walk around the park for a bit",       russian: "я похожу по парку" },
        { english: "You’ll walk around the forest for a while", russian: "ты походишь по лесу" },
        { english: "He’ll walk around the city for a while",    russian: "он походит по городу" },
        { english: "She’ll walk around the meadow for a while", russian: "она походит по лугу" },
        { english: "We’ll walk around the museum for a while",  russian: "мы походим по музею" },
        { english: "You all will walk around campus for a while", russian: "вы походите по кампусу" },
        { english: "They’ll walk around the market for a while",  russian: "они походят по рынку" }
      ]
    },

    // ——— B) PERFECTIVE "for a while" — by vehicle (поездить) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "multidirectional",
      sentences: [
        { english: "I drove around for a while (male)",   russian: "я поездил немного" },
        { english: "I drove around for a while (female)", russian: "я поездила немного" },
        { english: "You drove around town for a while (male)",   russian: "ты поездил по городу" },
        { english: "You drove around town for a while (female)", russian: "ты поездила по городу" },
        { english: "He drove around the district for a bit",     russian: "он поездил по району" },
        { english: "She drove around the market area for a bit", russian: "она поездила по рынку" },
        { english: "We drove around different neighborhoods",     russian: "мы поездили по разным районам" },
        { english: "You all drove around the city for a while",   russian: "вы поездили по городу" },
        { english: "They drove around for a while",               russian: "они поездили немного" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "multidirectional",
      sentences: [
        { english: "I’ll drive around a bit",       russian: "я поезжу немного" },
        { english: "You’ll drive around for a while", russian: "ты поездишь немного" },
        { english: "He’ll drive around for a while",  russian: "он поездит немного" },
        { english: "She’ll drive around for a while", russian: "она поездит немного" },
        { english: "We’ll drive around for a while",  russian: "мы поездим немного" },
        { english: "You all will drive around for a while", russian: "вы поездите немного" },
        { english: "They’ll drive around for a while",       russian: "они поездят немного" }
      ]
    }
  ]
};