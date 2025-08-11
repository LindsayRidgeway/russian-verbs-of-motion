// Unprefixed motion verbs — COMPLETE “basic forms”
// Families: идти/ходить (on foot), ехать/ездить (by vehicle)
// Rules encoded here:
// 1) Multidirectional (habitual/various directions) → ходить / ездить.
// 2) Unidirectional (one course, en route now) → идти / ехать.
// 3) Perfective “set off” exists only via ПО-: пойти / поехать (so no multidirectional+perfective group).
// 4) Present: идти/ехать = motion now (often toward a place); ходить/ездить = habitual.
//    “в/на + Acc” = to; “к + Dat” = toward; “из/с/от + Gen” = from; “по + Dat”, “вдоль + Gen” = along.
// 5) Past gender kept where needed (шёл/шла; пошёл/пошла; поехал/поехала).

window.unprefixedMotionData = {
  prefix: "",
  groups: [
    // ——— PAST ———

    // Perfective (set off) — by foot (пойти)
    {
      tense: "past",
      aspect: "perfective",
      direction: "unidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I set off walking to the lake (male)",   russian: "я пошёл к озеру" },
        { english: "I set off walking to the lake (female)", russian: "я пошла к озеру" },
        { english: "You set off walking to the forest (male)",   russian: "ты пошёл в лес" },
        { english: "You set off walking to the forest (female)", russian: "ты пошла в лес" },
        { english: "He set off walking up the mountain",     russian: "он пошёл в горы" },
        { english: "She set off walking to the meadow",      russian: "она пошла на луг" },
        { english: "We set off walking along the trail",     russian: "мы пошли по тропе" },
        { english: "You all set off walking to the park",    russian: "вы пошли в парк" },
        { english: "They set off walking toward the creek",  russian: "они пошли к ручью" }
      ]
    },

    // Perfective (set off) — by vehicle (поехать)
    {
      tense: "past",
      aspect: "perfective",
      direction: "unidirectional",
      travelMode: "by-vehicle",
      sentences: [
        { english: "I set off driving to the theater (male)",   russian: "я поехал в театр" },
        { english: "I set off driving to the theater (female)", russian: "я поехала в театр" },
        { english: "You set off driving to the museum (male)",  russian: "ты поехал в музей" },
        { english: "You set off driving to the museum (female)",russian: "ты поехала в музей" },
        { english: "He set off driving to the cinema",          russian: "он поехал в кино" },
        { english: "She set off driving to the mall",           russian: "она поехала в торговый центр" },
        { english: "We set off driving to the airport",         russian: "мы поехали в аэропорт" },
        { english: "You all set off driving to the stadium",    russian: "вы поехали на стадион" },
        { english: "They set off driving to the restaurant",    russian: "они поехали в ресторан" }
      ]
    },

    // Imperfective — unidirectional — by foot (идти)
    {
      tense: "past",
      aspect: "imperfective",
      direction: "unidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I was walking through the forest (male)",   russian: "я шёл по лесу" },
        { english: "I was walking through the forest (female)", russian: "я шла по лесу" },
        { english: "You were walking along the river (male)",   russian: "ты шёл вдоль реки" },
        { english: "You were walking along the river (female)", russian: "ты шла вдоль реки" },
        { english: "He was walking in the mountains",           russian: "он шёл в горах" },
        { english: "She was walking across the meadow",         russian: "она шла по лугу" },
        { english: "We were walking in the park",               russian: "мы шли в парке" },
        { english: "You all were walking by the lake",          russian: "вы шли у озера" },
        { english: "They were walking in the yard",             russian: "они шли во дворе" }
      ]
    },

    // Imperfective — unidirectional — by vehicle (ехать)
    {
      tense: "past",
      aspect: "imperfective",
      direction: "unidirectional",
      travelMode: "by-vehicle",
      sentences: [
        { english: "I was driving to the office (male)",   russian: "я ехал в офис" },
        { english: "I was driving to the office (female)", russian: "я ехала в офис" },
        { english: "You were driving to the park (male)",  russian: "ты ехал в парк" },
        { english: "You were driving to the park (female)",russian: "ты ехала в парк" },
        { english: "He was driving around the city",       russian: "он ехал по городу" },
        { english: "She was driving to the theater",       russian: "она ехала в театр" },
        { english: "We were driving to the market",        russian: "мы ехали на рынок" },
        { english: "You all were driving to work",         russian: "вы ехали на работу" },
        { english: "They were driving to concerts",        russian: "они ехали на концерты" }
      ]
    },

    // Imperfective — multidirectional — by foot (ходить)
    {
      tense: "past",
      aspect: "imperfective",
      direction: "multidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I used to walk around the lake (male)",   russian: "я ходил вокруг озера" },
        { english: "I used to walk around the lake (female)", russian: "я ходила вокруг озера" },
        { english: "You would walk through the woods (male)",   russian: "ты ходил по лесу" },
        { english: "You would walk through the woods (female)", russian: "ты ходила по лесу" },
        { english: "He used to walk near the stream",          russian: "он ходил у ручья" },
        { english: "She used to walk in the hills",            russian: "она ходила по холмам" },
        { english: "We used to walk in the canyon",            russian: "мы ходили в ущелье" },
        { english: "You all walked around the village",        russian: "вы ходили по деревне" },
        { english: "They walked in the meadow",                russian: "они ходили по лугу" }
      ]
    },

    // Imperfective — multidirectional — by vehicle (ездить)
    {
      tense: "past",
      aspect: "imperfective",
      direction: "multidirectional",
      travelMode: "by-vehicle",
      sentences: [
        { english: "I often drove to concerts (male)",   russian: "я ездил на концерты" },
        { english: "I often drove to concerts (female)", russian: "я ездила на концерты" },
        { english: "You used to drive to the gym (male)",  russian: "ты ездил в спортзал" },
        { english: "You used to drive to the gym (female)",russian: "ты ездила в спортзал" },
        { english: "He drove around town",                russian: "он ездил по городу" },
        { english: "She used to drive to work",           russian: "она ездила на работу" },
        { english: "We drove to the countryside",         russian: "мы ездили за город" },
        { english: "You all drove to different places",   russian: "вы ездили в разные места" },
        { english: "They drove to various events",        russian: "они ездили на разные мероприятия" }
      ]
    },

    // ——— PRESENT ———

    // Imperfective — unidirectional — by foot (идти)
    {
      tense: "present",
      aspect: "imperfective",
      direction: "unidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I’m walking to the park (now)",        russian: "я иду в парк" },
        { english: "You’re walking toward the lake",       russian: "ты идёшь к озеру" },
        { english: "He’s walking to the forest",           russian: "он идёт в лес" },
        { english: "She’s walking along the river",        russian: "она идёт вдоль реки" },
        { english: "We’re walking to the village",         russian: "мы идём в деревню" },
        { english: "You all are walking into the hills",   russian: "вы идёте в горы" },
        { english: "They’re walking into the yard",        russian: "они идут во двор" },
        { english: "The cat is walking into the garden",   russian: "кот идёт в сад" },
        { english: "My sister is walking to school",       russian: "моя сестра идёт в школу" }
      ]
    },

    // Imperfective — unidirectional — by vehicle (ехать)
    {
      tense: "present",
      aspect: "imperfective",
      direction: "unidirectional",
      travelMode: "by-vehicle",
      sentences: [
        { english: "I’m driving to work",          russian: "я еду на работу" },
        { english: "You’re driving to school",     russian: "ты едешь в школу" },
        { english: "He’s driving around the city", russian: "он едет по городу" },
        { english: "She’s driving to the hospital",russian: "она едет в больницу" },
        { english: "We’re driving to the mall",    russian: "мы едем в торговый центр" },
        { english: "You all are driving to the theater", russian: "вы едете в театр" },
        { english: "They’re driving to the airport",      russian: "они едут в аэропорт" }
      ]
    },

    // Imperfective — multidirectional — by foot (ходить)
    {
      tense: "present",
      aspect: "imperfective",
      direction: "multidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I (habitually) walk in the meadow",     russian: "я хожу по лугу" },
        { english: "You walk around campus (habit)",        russian: "ты ходишь по кампусу" },
        { english: "He walks in the mountains (habit)",     russian: "он ходит по горам" },
        { english: "She walks in the valley (habit)",       russian: "она ходит по долине" },
        { english: "We often walk near the waterfall",      russian: "мы ходим возле водопада" },
        { english: "You all walk on the trail (habit)",     russian: "вы ходите по тропе" },
        { english: "They walk around the lake (habit)",     russian: "они ходят вокруг озера" },
        { english: "The teacher walks through the forest",  russian: "учитель ходит по лесу" },
        { english: "The worker walks along the path",       russian: "рабочий ходит по дорожке" }
      ]
    },

    // Imperfective — multidirectional — by vehicle (ездить)
    {
      tense: "present",
      aspect: "imperfective",
      direction: "multidirectional",
      travelMode: "by-vehicle",
      sentences: [
        { english: "I drive to restaurants (habit)",  russian: "я езжу в рестораны" },
        { english: "You drive to the airport (habit)",russian: "ты ездишь в аэропорт" },
        { english: "He drives across the bridge (habit)", russian: "он ездит по мосту" },
        { english: "She drives to the library (habit)",    russian: "она ездит в библиотеку" },
        { english: "We drive to different places",         russian: "мы ездим в разные места" },
        { english: "You all drive to concerts",            russian: "вы ездите на концерты" },
        { english: "They drive to the cinema",             russian: "они ездят в кино" }
      ]
    },

    // ——— FUTURE ———

    // Imperfective — unidirectional — by foot (идти)
    {
      tense: "future",
      aspect: "imperfective",
      direction: "unidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I will be walking to the forest",   russian: "я буду идти в лес" },
        { english: "You will be walking toward the creek", russian: "ты будешь идти к ручью" },
        { english: "He will be walking into the hills", russian: "он будет идти в холмы" },
        { english: "She will be walking to the garden", russian: "она будет идти в сад" },
        { english: "We will be walking to the lake",    russian: "мы будем идти к озеру" },
        { english: "You all will be walking to the park", russian: "вы будете идти в парк" },
        { english: "They will be walking to the meadow", russian: "они будут идти на луг" }
      ]
    },

    // Imperfective — unidirectional — by vehicle (ехать)
    {
      tense: "future",
      aspect: "imperfective",
      direction: "unidirectional",
      travelMode: "by-vehicle",
      sentences: [
        { english: "I will be driving to the office", russian: "я буду ехать в офис" },
        { english: "You will be driving to the theater", russian: "ты будешь ехать в театр" },
        { english: "He will be driving around town",  russian: "он будет ехать по городу" },
        { english: "She will be driving to the gym",  russian: "она будет ехать в спортзал" },
        { english: "We will be driving to work",      russian: "мы будем ехать на работу" },
        { english: "You all will be driving to the mall", russian: "вы будете ехать в торговый центр" },
        { english: "They will be driving to the airport",   russian: "они будут ехать в аэропорт" }
      ]
    },

    // Imperfective — multidirectional — by foot (ходить)
    {
      tense: "future",
      aspect: "imperfective",
      direction: "multidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I will (habitually) walk in the park",   russian: "я буду ходить по парку" },
        { english: "You will walk through the woods (habit)", russian: "ты будешь ходить по лесу" },
        { english: "He will walk in the canyon (habit)",     russian: "он будет ходить в ущелье" },
        { english: "She will walk in the meadow (habit)",    russian: "она будет ходить по лугу" },
        { english: "We will walk up into the mountains (habit)", russian: "мы будем ходить в горы" },
        { english: "You all will walk near the river (habit)",  russian: "вы будете ходить у реки" },
        { english: "They will walk on the trail (habit)",       russian: "они будут ходить по тропе" }
      ]
    },

    // Imperfective — multidirectional — by vehicle (ездить)
    {
      tense: "future",
      aspect: "imperfective",
      direction: "multidirectional",
      travelMode: "by-vehicle",
      sentences: [
        { english: "I will drive to concerts (habit)",  russian: "я буду ездить на концерты" },
        { english: "You will drive to the market (habit)", russian: "ты будешь ездить на рынок" },
        { english: "He will drive to the stadium (habit)",   russian: "он будет ездить на стадион" },
        { english: "She will drive to different places",     russian: "она будет ездить в разные места" },
        { english: "We will drive to events",                russian: "мы будем ездить на мероприятия" },
        { english: "You all will drive to work",             russian: "вы будете ездить на работу" },
        { english: "They will drive to museums",             russian: "они будут ездить в музеи" }
      ]
    },

    // Perfective (set off) — by foot (пойти)
    {
      tense: "future",
      aspect: "perfective",
      direction: "unidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I will set off walking to the lake",   russian: "я пойду к озеру" },
        { english: "You will set off walking to the forest", russian: "ты пойдёшь в лес" },
        { english: "He will set off walking up the hill",  russian: "он пойдёт на холм" },
        { english: "She will set off walking to the playground", russian: "она пойдёт на площадку" },
        { english: "We will set off walking along the trail",   russian: "мы пойдём по тропе" },
        { english: "You all will set off walking to the park",  russian: "вы пойдёте в парк" },
        { english: "They will set off walking toward the creek", russian: "они пойдут к ручью" }
      ]
    },

    // Perfective (set off) — by vehicle (поехать)
    {
      tense: "future",
      aspect: "perfective",
      direction: "unidirectional",
      travelMode: "by-vehicle",
      sentences: [
        { english: "I will set off driving to the cinema",   russian: "я поеду в кино" },
        { english: "You will set off driving to the airport", russian: "ты поедешь в аэропорт" },
        { english: "He will set off driving to the hospital", russian: "он поедет в больницу" },
        { english: "She will set off driving to the theater",  russian: "она поедет в театр" },
        { english: "We will set off driving to the mall",      russian: "мы поедем в торговый центр" },
        { english: "You all will set off driving to the stadium", russian: "вы поедете на стадион" },
        { english: "They will set off driving to the library",   russian: "они поедут в библиотеку" }
      ]
    }
  ]
};