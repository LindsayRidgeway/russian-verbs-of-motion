// за- prefix motion verbs — COMPLETE
// Meanings: 
//   1) stop by / drop in (зайти/заехать; заходить/заезжать)
//   2) go behind/beyond something (за + Acc)
// Aspect pairs:
//   by foot: заходить (impf) ↔ зайти (pf)
//   by vehicle: заезжать (impf) ↔ заехать (pf)

window.заMotionData = {
  prefix: "за",
  groups: [
    // ——— IMPERFECTIVE (by foot: заходить) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I used to stop by the ranger station (male)",   russian: "я заходил в лесничество" },
        { english: "I used to stop by the ranger station (female)", russian: "я заходила в лесничество" },
        { english: "You would drop in at the mountain café (male)",   russian: "ты заходил в горное кафе" },
        { english: "You would drop in at the mountain café (female)", russian: "ты заходила в горное кафе" },
        { english: "He would drop by the information center",       russian: "он заходил в информационный центр" },
        { english: "She would go behind the meadow trees",          russian: "она заходила за деревья на лугу" },
        { english: "We used to go behind the camp buildings",       russian: "мы заходили за здания лагеря" },
        { english: "You all would stop by the visitor center",      russian: "вы заходили в центр посетителей" },
        { english: "They would go behind the ridge",                russian: "они заходили за хребет" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I drop by the shop",          russian: "я захожу в магазин" },
        { english: "You drop in at the café",     russian: "ты заходишь в кафе" },
        { english: "He stops by the office",      russian: "он заходит в офис" },
        { english: "She stops by her friend’s place", russian: "она заходит к подруге" },
        { english: "We go behind the house",      russian: "мы заходим за дом" },
        { english: "You all go behind the theater", russian: "вы заходите за театр" },
        { english: "They drop in at the library", russian: "они заходят в библиотеку" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will be stopping by the store",  russian: "я буду заходить в магазин" },
        { english: "You will be stopping by the café", russian: "ты будешь заходить в кафе" },
        { english: "He will be dropping by the office", russian: "он будет заходить в офис" },
        { english: "She will be dropping by her friend’s place", russian: "она будет заходить к подруге" },
        { english: "We will be going behind the hill", russian: "мы будем заходить за холм" },
        { english: "You all will be going behind the stage", russian: "вы будете заходить за сцену" },
        { english: "They will be stopping by the library", russian: "они будут заходить в библиотеку" }
      ]
    },

    // ——— IMPERFECTIVE (by vehicle: заезжать) ———
    {
      tense: "past",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I regularly stopped at the office café (male)",   russian: "я заезжал в офисное кафе" },
        { english: "I regularly stopped at the office café (female)", russian: "я заезжала в офисное кафе" },
        { english: "You often drove by the visitor centers (male)",   russian: "ты заезжал в центры посетителей" },
        { english: "You often drove by the visitor centers (female)", russian: "ты заезжала в центры посетителей" },
        { english: "He used to stop at the market stalls",            russian: "он заезжал в рыночные ряды" },
        { english: "She used to stop at the theater lobby",           russian: "она заезжала в театральное фойе" },
        { english: "We would stop at the gym juice bar",              russian: "мы заезжали в сок-бар спортзала" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I stop by the pharmacy by car",   russian: "я заезжаю в аптеку" },
        { english: "You stop at the gas station",     russian: "ты заезжаешь на заправку" },
        { english: "He stops at the supermarket",     russian: "он заезжает в супермаркет" },
        { english: "She stops by her grandmother’s",  russian: "она заезжает к бабушке" },
        { english: "We stop by the office",           russian: "мы заезжаем в офис" },
        { english: "You all stop at the mall food court", russian: "вы заезжаете в фуд-корт" },
        { english: "They stop at the stadium parking",    russian: "они заезжают на парковку стадиона" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will be stopping by the supermarket",  russian: "я буду заезжать в супермаркет" },
        { english: "You will be stopping at the gas station", russian: "ты будешь заезжать на заправку" },
        { english: "He will be stopping by the hospital pharmacy", russian: "он будет заезжать в аптеку при больнице" },
        { english: "She will be stopping by her grandmother’s",    russian: "она будет заезжать к бабушке" },
        { english: "We will be stopping by the office",             russian: "мы будем заезжать в офис" },
        { english: "You all will be stopping at the mall",          russian: "вы будете заезжать в торговый центр" },
        { english: "They will be stopping at the stadium parking",  russian: "они будут заезжать на парковку стадиона" }
      ]
    },

    // ——— PERFECTIVE (by foot: зайти) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I stopped by the ranger station (male)",   russian: "я зашёл в лесничество" },
        { english: "I stopped by the ranger station (female)", russian: "я зашла в лесничество" },
        { english: "He went behind the trees",                 russian: "он зашёл за деревья" },
        { english: "We went behind the buildings",             russian: "мы зашли за здания" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-foot",
      direction: "unidirectional",
      sentences: [
        { english: "I will stop by the visitor center",     russian: "я зайду в центр посетителей" },
        { english: "You will drop in at the café",          russian: "ты зайдёшь в кафе" },
        { english: "He will go behind the hill outcrop",    russian: "он зайдёт за выступ холма" },
        { english: "They will go behind the stage",         russian: "они зайдут за сцену" }
      ]
    },

    // ——— PERFECTIVE (by vehicle: заехать) ———
    {
      tense: "past",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I drove to the theater box office (male)",   russian: "я заехал в театральную кассу" },
        { english: "I drove to the theater box office (female)", russian: "я заехала в театральную кассу" },
        { english: "He stopped at the market",                   russian: "он заехал на рынок" },
        { english: "We stopped at the airport café",             russian: "мы заехали в кафе аэропорта" }
      ]
    },
    {
      tense: "future",
      aspect: "perfective",
      travelMode: "by-vehicle",
      direction: "unidirectional",
      sentences: [
        { english: "I will stop at the cinema snack bar",    russian: "я заеду в буфет кинотеатра" },
        { english: "You will stop at the gas station",       russian: "ты заедешь на заправку" },
        { english: "He will stop by his grandmother’s",      russian: "он заедет к бабушке" },
        { english: "They will stop at the stadium parking",  russian: "они заедут на парковку стадиона" }
      ]
    }
  ]
};