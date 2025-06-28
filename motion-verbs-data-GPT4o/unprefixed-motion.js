// Unprefixed motion verbs data
// Basic идти/ехать forms without prefixes

window.unprefixedMotionData = {
  prefix: "",
  groups: [
    {
      tense: "past",
      aspect: "perfective",
      direction: "unidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I set off walking to the lake (male)", russian: "я пошёл к озеру" },
        { english: "I set off walking to the lake (female)", russian: "я пошла к озеру" },
        { english: "You set off walking to the forest (male)", russian: "ты пошёл в лес" },
        { english: "You set off walking to the forest (female)", russian: "ты пошла в лес" },
        { english: "He set off walking up the mountain", russian: "он пошёл в горы" },
        { english: "She set off walking to the meadow", russian: "она пошла на луг" },
        { english: "We set off walking down the trail", russian: "мы пошли по тропе" },
        { english: "You all set off walking to the park", russian: "вы пошли в парк" },
        { english: "They set off walking to the creek", russian: "они пошли к ручью" }
      ]
    },
    {
      tense: "past",
      aspect: "perfective",
      direction: "unidirectional",
      travelMode: "by-vehicle",
      sentences: [
        { english: "I set off driving to the theater (male)", russian: "я поехал в театр" },
        { english: "I set off driving to the theater (female)", russian: "я поехала в театр" },
        { english: "You set off driving to the museum (male)", russian: "ты поехал в музей" },
        { english: "You set off driving to the museum (female)", russian: "ты поехала в музей" },
        { english: "He set off driving to the cinema", russian: "он поехал в кино" },
        { english: "She set off driving to the mall", russian: "она поехала в торговый центр" },
        { english: "We set off driving to the airport", russian: "мы поехали в аэропорт" },
        { english: "You all set off driving to the stadium", russian: "вы поехали на стадион" },
        { english: "They set off driving to the restaurant", russian: "они поехали в ресторан" }
      ]
    },
    // multidirectional + perfective is impossible in Russian motion verbs
    // {
    //   tense: "past",
    //   aspect: "perfective",
    //   direction: "multidirectional",
    //   travelMode: "by-foot",
    //   sentences: [ ... ]
    // },

    {
      tense: "past",
      aspect: "imperfective",
      direction: "unidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I was walking in the forest (male)", russian: "я шёл по лесу" },
        { english: "I was walking in the forest (female)", russian: "я шла по лесу" },
        { english: "You were walking by the river (male)", russian: "ты шёл вдоль реки" },
        { english: "You were walking by the river (female)", russian: "ты шла вдоль реки" },
        { english: "He was walking in the mountains", russian: "он шёл по горам" },
        { english: "She was walking in the meadow", russian: "она шла по лугу" },
        { english: "We were walking in the park", russian: "мы шли по парку" },
        { english: "You all were walking by the lake", russian: "вы шли вдоль озера" },
        { english: "They were walking in the yard", russian: "они шли по двору" }
      ]
    },
    {
      tense: "past",
      aspect: "imperfective",
      direction: "multidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I used to walk around the lake (male)", russian: "я ходил вокруг озера" },
        { english: "I used to walk around the lake (female)", russian: "я ходила вокруг озера" },
        { english: "You would walk through the woods (male)", russian: "ты ходил по лесу" },
        { english: "You would walk through the woods (female)", russian: "ты ходила по лесу" },
        { english: "He would walk near the stream", russian: "он ходил вдоль ручья" },
        { english: "She would walk up the hills", russian: "она ходила по холмам" },
        { english: "We walked in the canyon", russian: "мы ходили по ущелью" },
        { english: "You all walked around the village", russian: "вы ходили по деревне" },
        { english: "They walked in the meadow", russian: "они ходили по лугу" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      direction: "unidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I walk to the park", russian: "я иду в парк" },
        { english: "You walk to the lake", russian: "ты идёшь к озеру" },
        { english: "He walks to the forest", russian: "он идёт в лес" },
        { english: "She walks to the river", russian: "она идёт к реке" },
        { english: "We walk to the village", russian: "мы идём в деревню" },
        { english: "You all walk to the mountains", russian: "вы идёте в горы" },
        { english: "They walk to the yard", russian: "они идут во двор" },
        { english: "The cat walks to the garden", russian: "кот идёт в сад" },
        { english: "My sister walks to school", russian: "моя сестра идёт в школу" }
      ]
    },
    {
      tense: "present",
      aspect: "imperfective",
      direction: "multidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I walk around the meadow", russian: "я хожу по лугу" },
        { english: "You walk on campus", russian: "ты ходишь по кампусу" },
        { english: "He walks in the mountains", russian: "он ходит по горам" },
        { english: "She walks in the valley", russian: "она ходит по долине" },
        { english: "We walk near the waterfall", russian: "мы ходим возле водопада" },
        { english: "You all walk on the trail", russian: "вы ходите по тропе" },
        { english: "They walk around the lake", russian: "они ходят вокруг озера" },
        { english: "The teacher walks through the forest", russian: "учитель ходит по лесу" },
        { english: "The worker walks along the path", russian: "рабочий ходит по дорожке" }
      ]
    },
    {
      tense: "future",
      aspect: "imperfective",
      direction: "unidirectional",
      travelMode: "by-foot",
      sentences: [
        { english: "I will walk to the forest", russian: "я буду идти в лес" },
        { english: "You will walk to the creek", russian: "ты будешь идти к ручью" },
        { english: "He will walk to the hills", russian: "он будет идти в холмы" },
        { english: "She will walk to the garden", russian: "она будет идти в сад" },
        { english: "We will walk to the lake", russian: "мы будем идти к озеру" },
        { english: "You all will walk to the park", russian: "вы будете идти в парк" },
        { english: "They will walk to the meadow", russian: "они будут идти на луг" },
        { english: "The children will walk to school", russian: "дети будут идти в школу" },
        { english: "My friend will walk to the woods", russian: "мой друг будет идти в лес" }
      ]
    }
  ]
};