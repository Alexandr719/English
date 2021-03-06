'use strict';

function WordWithCategory(wordsList, category) {
    this.wordsList = wordsList;
    this.category = category;
}

//слова:

let introductoryWords = [
    {engWord: ' Nevertheless, However ', rusWord: ' Однако'},
    {engWord: ' Meantime ', rusWord: ' Тем временем'},
    {engWord: ' Although ', rusWord: ' Хотя'},
    {engWord: ' Frankly speaking ', rusWord: ' Откровенно говоря'},
    {engWord: ' So to speak ', rusWord: ' Так сказать'},
    {engWord: ' It goes without saying ', rusWord: ' Само собой разумеется'},
    {engWord: ' To put it mildly ', rusWord: ' Мягко говоря'},
    {engWord: ' At all ', rusWord: ' Вообще (в отрицательных предложениях)'},
    {engWord: ' In any case ', rusWord: ' В любом случае'},
    {engWord: ' So ', rusWord: ' Итак'},
    {engWord: ' Moreover ', rusWord: ' Кроме того'},
    {engWord: ' By the way ', rusWord: ' Кстати'},
    {engWord: ' Indeed ', rusWord: ' Действительно'},
    {engWord: ' Well ', rusWord: ' Xорошо'},
    {engWord: ' Telling the truth', rusWord: ' Говоря правду'},
    {engWord: ' Strictly speaking', rusWord: ' Строго говоря'},
    {engWord: ' To sum it up', rusWord: ' Подытоживая'},
    {engWord: ' Of course', rusWord: ' Конечно'},
    {engWord: ' Certainly ', rusWord: ' Безусловно'},
    {engWord: ' As far as I know', rusWord: ' Насколько мне известно'},
    {engWord: ' In other words', rusWord: '  Говоря другими словами'},
    {engWord: ' Probably ', rusWord: ' Возможно'},
    {engWord: ' To begin with', rusWord: '  Начнем с'},
    {engWord: ' I am hoping', rusWord: ' Я надеюсь'},
    {engWord: ' I am writing to say', rusWord: ' Я пишу, чтобы сказать'},
    {engWord: ' I am really looking forward to', rusWord: ' Я действительно с нетерпением жду '},
    {engWord: ' I really appreciated all your help', rusWord: ' Я очень благодарен за Вашу помощь '},
    {engWord: '  I am interested in ', rusWord: ' Меня интересует'},
    {engWord: ' I don`t care about', rusWord: '  Меня не заботит (это)'},
    {engWord: ' I suppose', rusWord: ' Я полагаю'},
    {engWord: ' To my mind, In my opinion ', rusWord: ' По-моему '},
    {engWord: ' I am convinced', rusWord: ' Я убежден '},
    {engWord: ' Personally, I believe', rusWord: ' Лично я считаю '},
    {engWord: ' Many people believe', rusWord: ' Многие люди считают '},
    {engWord: ' As far as I remember', rusWord: ' Насколько я помню'},
    {engWord: ' In my view, From my point of view', rusWord: ' С моей точки зрения'},
    {engWord: ' However ', rusWord: ' Однако'},
    {engWord: ' Despite our…', rusWord: ' Несмотря на наши'},
    {engWord: ' In contrast to this', rusWord: '  В отличие от этого'},
    {engWord: ' On the other hand', rusWord: '  другой стороны'},
    {engWord: ' Compared to the other', rusWord: ' По сравнению с другими'},
    {engWord: ' is clearly different from', rusWord: '  явно отличается от'},
    {engWord: ' Definitely ', rusWord: ' Определенно'},
    {engWord: ' No wonder', rusWord: ' Неудивительно'},
    {engWord: ' In fact, (he is)', rusWord: ' По сути, (он является)'},
    {engWord: ' He used to say', rusWord: ' Он говорил'},
    {engWord: ' Not surprisingly', rusWord: '  Не удивительно'},
    {engWord: ' How about doing this', rusWord: ' Как насчет сделать это'},
    {engWord: ' Over the past two days', rusWord: ' За последние два дня'},
    {engWord: '  Apart from the negative impact that', rusWord: ' Помимо негативного воздействия, которое'},
    {engWord: ' One of the best thing about (the sport is)', rusWord: ' Одно из достоинств (спорта)'},
    {
        engWord: ' This might happen simply because (students)',
        rusWord: ' Это может произойти просто потому, что (студенты)'
    },
    {engWord: ' In total', rusWord: ' в общей сложности'},
    {engWord: ' It is estimated', rusWord: ' По оценкам'},
    {engWord: ' If it is no longer', rusWord: ' Если это уже не'},
    {engWord: ' To sum up', rusWord: ' Подведем итоги'},
    {engWord: ' In addition', rusWord: ' В дополнительном'},
    {engWord: ' In conclusion', rusWord: ' В заключение'}

];
let words_1 = new WordWithCategory(introductoryWords,"Introductory");

let questionWords =   [
    {engWord: ' Who', rusWord: ' кто'},
    {engWord: ' What', rusWord: ' что, какой' },
    {engWord: ' Which', rusWord: '  который, какой' },
    {engWord: ' When', rusWord: ' когда ' },
    {engWord: ' Where', rusWord: ' где' },
    {engWord: ' Where from', rusWord: ' Откуда' },
    {engWord: ' Why', rusWord: ' почему, зачем' },
    {engWord: ' How', rusWord: ' Как' },
    {engWord: ' How much/many', rusWord: ' сколько' },
    {engWord: ' How long', rusWord: ' как долго ' },
    {engWord: ' Whose ', rusWord: ' чей' },
    {engWord: ' Whom ', rusWord: '  кому, кем, кого' }
];
let words_2 = new WordWithCategory(questionWords, "Question");

let oneMonthWords = [
    { engWord:  'Bathroom', rusWord: ' Ванная' },
    { engWord:  'Wait', rusWord: ' Ждать' },
    { engWord:  'Ride', rusWord: ' Поездка' },
    { engWord:  'Sometimes', rusWord: ' Иногда' },
    { engWord:  'Hurry', rusWord: ' Спешить' },
    { engWord:  'After', rusWord: ' После' },
    { engWord: ' Wash', rusWord: ' Мыть' },
    { engWord: ' Already', rusWord: ' Уже' },
    { engWord: ' Listen', rusWord: ' Слушать' },
    { engWord: ' Seldom', rusWord: ' Редко' },
    { engWord: ' Divide', rusWord: ' Разбивать' },
    { engWord: ' According', rusWord: 'В соответствии  ' },
    { engWord: ' Although', rusWord: ' Несмотря на то что' },
    { engWord: ' Forehead', rusWord: ' Лоб' },
    { engWord: ' Ear', rusWord: ' Ухо' },
    { engWord: ' Chin', rusWord: ' Подбородок' },
    { engWord: ' Shoulder', rusWord: ' Плечо' },
    { engWord: ' Elbow', rusWord: ' Локоть' },
    { engWord: ' Forearm', rusWord: ' Предплечье' },
    { engWord: ' Wrist', rusWord: ' Запястье' },
    { engWord: ' Hand', rusWord: ' Кисть' },
    { engWord: ' Palm', rusWord: ' Ладонь' },
    { engWord: ' Finger', rusWord: ' Палец руки' },
    { engWord: ' Calf', rusWord: ' Голень/икра' },
    { engWord: ' Ankle', rusWord: ' Лодыжка' },
    { engWord: ' Heel', rusWord: ' Пятка' },
    { engWord: ' Head', rusWord: ' Голова' },
    { engWord: ' Neck', rusWord: ' Шея' },
    { engWord: ' Chest', rusWord: ' Грудь' },
    { engWord: ' Breast', rusWord: ' Грудь'},
    { engWord: ' Arm', rusWord: ' Рука' },
    { engWord: ' Waist', rusWord: ' Талия' },
    { engWord: ' Stomach', rusWord: ' Живот' },
    { engWord: ' Belly button', rusWord: ' Пупок' },
    { engWord: ' Pelvis', rusWord: ' Таз' },
    { engWord: ' Thigh', rusWord: ' Бедро' },
    { engWord: ' Leg', rusWord: ' Нога' },
    { engWord: ' Knee', rusWord: ' Колено' },
    { engWord: ' Shin', rusWord: ' Голень' },
    { engWord: ' Foot', rusWord: ' Нога' },
    { engWord: ' Toe', rusWord: ' Палец ноги' },
    { engWord: ' Wellies ', rusWord: ' Сапоги' },
    { engWord: ' Umbrella', rusWord: ' Зонтик' },
    { engWord: ' Usually ', rusWord: ' Как правило/обычно' },
    { engWord: ' Want', rusWord: ' Хотеть' },
    { engWord: ' Nearby ', rusWord: ' Рядом' },
    { engWord: ' Therefore', rusWord: ' Следовательно' },
    { engWord: ' Aunt', rusWord: ' Тётка' },
    { engWord: ' Shirt', rusWord: ' Рубашка' },
    { engWord: ' T-shirt', rusWord: ' Футболка' },
    { engWord: ' While ', rusWord: ' В то время как' },
    { engWord: ' Tie', rusWord: ' Галстук' },
    { engWord: ' Excited', rusWord: ' Восторг' },
    { engWord: ' Schedule/timetable ', rusWord: ' Список' },
    { engWord: ' Evening', rusWord: ' Вечер' },
    { engWord: ' Dinner ', rusWord: ' Ужин' },
    { engWord: ' Improve ', rusWord: ' Улучшать' },
    { engWord: ' Disappear', rusWord: ' Исчезать' },
    { engWord: ' Hugs ', rusWord: ' Объятия' },
    { engWord: ' Candle ', rusWord: ' Свеча' },
    { engWord: ' Escape ', rusWord: ' Побег' },
    { engWord: ' Weak', rusWord: ' Cлабый' },
    { engWord: ' Expectation ', rusWord: ' Ожидание ' },
    { engWord: ' Exhaust ', rusWord: ' Выхлоп ' },
    { engWord: ' Everyone ', rusWord: ' Любой ' },
    { engWord: ' Surrender ', rusWord: ' Сдача ' },
    { engWord: ' Shackle ', rusWord: ' Оковы ' },
    { engWord: ' Silence ', rusWord: ' Молчание ' },
    { engWord: ' Whatever ', rusWord: ' Все ' },
    { engWord: ' Whine ', rusWord: ' Ныть' },
    { engWord: ' Walk ', rusWord: ' Идти ' },
    { engWord: ' Cause ', rusWord: ' Причина ' },
    { engWord: ' Carry ', rusWord: ' Проводить ' },
    { engWord: ' Cave ', rusWord: ' Пещера ' },
    { engWord: ' Tangible ', rusWord: ' Материальный ' },
    { engWord: ' Trident ', rusWord: ' Трезубец ' },
    { engWord: ' Tumble ', rusWord: ' Упасть ' }
];
let words_3 = new WordWithCategory(oneMonthWords, "First");

let twoMonthWords =  [
    { engWord: ' honest ', rusWord: ' честный ' },
    { engWord: ' earn ', rusWord: ' зарабатывать' },
    { engWord: ' thought ', rusWord: ' мысль' },
    { engWord: ' together ', rusWord: ' вместе' },
    { engWord: ' sofa ', rusWord: ' диван' },
    { engWord: ' newspaper ', rusWord: ' газета' },
    { engWord: ' paper ', rusWord: ' бумага' },
    { engWord: ' glad ', rusWord: ' довольный' },
    { engWord: ' something ', rusWord: ' нечто' },
    { engWord: ' here ', rusWord: ' вот, здесь' },
    { engWord: ' sold ', rusWord: ' продан' },
    { engWord: ' now ', rusWord: ' сейчас' },
    { engWord: ' how ', rusWord: ' как ' },
    { engWord: ' joy ', rusWord: ' радость' },
    { engWord: ' share ', rusWord: ' доля' },
    { engWord: ' to tidy ', rusWord: ' чтобы привести в порядок ' },
    { engWord: ' couple ', rusWord: ' пара ' },
    { engWord: ' treasure ', rusWord: ' сокровище ' },
    { engWord: ' discuss', rusWord: ' обсуждать' },
    { engWord: ' explore', rusWord: ' исследовать' },
    { engWord: ' answer', rusWord: ' ответ' },
    { engWord: ' bench', rusWord: ' скамейка' },
    { engWord: ' pupils', rusWord: ' ученики, зрачки' },
    { engWord: ' exercising', rusWord: ' осуществление ' },
    { engWord: ' pretty', rusWord: ' cимпатичный ' },
    { engWord: ' neightbour', rusWord: ' сосед ' },
    { engWord: ' spend', rusWord: ' проводить ' },
    { engWord: ' pan pal', rusWord: ' кореш по переписке ' },
    { engWord: ' quite', rusWord: ' довольно ' },
    { engWord: ' servants', rusWord: ' слуга ' },
    { engWord: ' polite', rusWord: ' вежливый ' },
    { engWord: ' flat', rusWord: ' квартира' },
    { engWord: ' opinion', rusWord: ' мнение' },
    { engWord: ' before', rusWord: ' до' },
    { engWord: ' attitude', rusWord: ' отношение' },
    { engWord: ' butler', rusWord: ' дворецкий' },
    { engWord: ' lounge', rusWord: ' гостиная' },
    { engWord: ' poor', rusWord: ' бедные' },
    { engWord: ' useful', rusWord: ' полезным' },
    { engWord: ' magazine', rusWord: ' журнал' },
    { engWord: ' tired', rusWord: ' устала' },
    { engWord: ' motorway', rusWord: ' автомагистраль' },
    { engWord: ' need', rusWord: ' необходимость' },
    { engWord: ' fit', rusWord: ' поместиться' },
    { engWord: ' contain', rusWord: ' содержать' },
    { engWord: ' uptight', rusWord: ' встревоженный' },
    { engWord: ' own', rusWord: ' свой' },
    { engWord: ' behind', rusWord: ' позади' },
    { engWord: ' foyer', rusWord: ' фойе' },
    { engWord: ' scheming', rusWord: ' коварный' },
    { engWord: ' clapping', rusWord: ' аплодисменты' },
    { engWord: ' nose', rusWord: ' нос' },
    { engWord: ' commercial', rusWord: ' коммерческая' },
    { engWord: ' dagger', rusWord: ' кинжал' },
    { engWord: ' loom', rusWord: ' ткацкий станок, маячить' },
    { engWord: ' portentuous', rusWord: ' напыщенный' },
    { engWord: ' melt', rusWord: ' плавиться' },
    { engWord: ' morph', rusWord: ' превращаться' },
    { engWord: ' unfazed', rusWord: ' невозмутим' },
    { engWord: ' fairly', rusWord: ' довольно' },
    { engWord: ' cert', rusWord: ' верняк' },
    { engWord: ' sprawl', rusWord: ' растягиваться' },
    { engWord: ' compilation', rusWord: ' сборник' },
    { engWord: ' nebulous', rusWord: ' расплывчатый' },
    { engWord: ' engulf', rusWord: ' поглощать' },
    { engWord: ' recline', rusWord: ' откидывать' },
    { engWord: ' crest', rusWord: ' гребень' },
    { engWord: ' prefer', rusWord: ' предпочитать' }
];
let words_4 = new WordWithCategory(twoMonthWords, "Second");

let weather = [
    {engWord: ' weather ', rusWord: ' погода'},
    {engWord: ' weather forecast', rusWord: ' прогноз погоды'},
    {engWord: ' weatherman ', rusWord: ' метеоролог'},
    {engWord: ' weather station', rusWord: ' метеорологическая станция'},
    {engWord: ' daylight saving time (= DSV) / summer time (BrE)', rusWord: ' летнее время'},
    {engWord: ' bright / clear', rusWord: ' ясный'},
    {engWord: ' sunny ', rusWord: ' солнечный'},
    {engWord: ' muggy ', rusWord: '  влажная и душная' },
    {engWord: ' sultry ', rusWord: ' знойный, душный'},
    {engWord: ' dry ', rusWord: ' сухой'},
    {engWord: ' hot ', rusWord: ' жаркий'},
    {engWord: ' warm ', rusWord: ' теплый'},
    {engWord: ' sticky ', rusWord: ' жаркий и влажный '},
    {engWord: ' fresh ', rusWord: ' свежий'},
    {engWord: ' heat ', rusWord: ' жара, зной'},
    {engWord: ' cool ', rusWord: '  прохладный, свежий'},
    {engWord: ' chilly ', rusWord: '  холодный, прохладный'},
    {engWord: ' cold ', rusWord: ' холодный'},
    {engWord: ' hazy / misty / foggy', rusWord: ' туманный'},
    {engWord: ' windy ', rusWord: ' ветреный'},
    {engWord: ' frosty / freezing', rusWord: ' морозный'},
    {engWord: ' cloudy ', rusWord: ' облачный'},
    {engWord: ' sky ', rusWord: ' небо'},
    {engWord: ' cloud ', rusWord: ' облако, туча'},
    {engWord: ' dense clouds', rusWord: ' густые облака'},
    {engWord: ' low, black clouds', rusWord: ' низкие, черные облака'},
    {engWord: ' heavy grey clouds', rusWord: ' огромные темные тучи'},
    {engWord: ' overcast ', rusWord: ' покрытый облаками, мрачный, хмурый (о небе)'},
    {engWord: ' sun ', rusWord: ' солнце'},
    {engWord: ' moon ', rusWord: ' луна'},
    {engWord: ' star ', rusWord: ' звезда'},
    {engWord: ' wind ', rusWord: ' ветер'},
    {engWord: ' cold wind', rusWord: ' холодный ветер'},
    {engWord: ' cold biting wind', rusWord: '  холодный резкий ветер'},
    {engWord: ' breath of air / puff of wind', rusWord: ' дуновение ветерка'},
    {engWord: ' breeze ', rusWord: ' бриз'},
    {engWord: ' slight wind / moderate wind', rusWord: ' легкий ветерок'},
    {engWord: ' gale / strong wind', rusWord: ' сильный ветер'},
    {engWord: ' gust of wind', rusWord: ' порыв ветра'},
    {engWord: '  hurricane / very strong wind', rusWord: ' ураган, буря'},
    {engWord: ' blizzard ', rusWord: ' снежная буря'},
    {engWord: ' blinding snowstorm', rusWord: ' буран'},
    {engWord: ' squall ', rusWord: ' шквал'},
    {engWord: ' storm ', rusWord: ' шторм'},
    {engWord: ' whirlwind ', rusWord: ' вихрь, ураган, торнадо'},
    {engWord: '  tornado / twister (AmE)', rusWord: '  торнадо, смерч, ураган'},
    {engWord: ' thunderstorm ', rusWord: ' гроза'},
    {engWord: ' lightning ', rusWord: ' молния'},
    {engWord: ' thunder ', rusWord: ' гром'},
    {engWord: ' it lightens', rusWord: ' сверкает молния'},
    {engWord: '  it thunders', rusWord: ' гремит гром'},
    {engWord: ' thunder-cloud', rusWord: '  грозовая туча'},
    {engWord: ' dark ', rusWord: ' темный'},
    {engWord: ' humidity ', rusWord: ' сырость, влажность'},
    {engWord: ' frost ', rusWord: ' мороз'},
    {engWord: ' shower ', rusWord: ' ливень'},
    {engWord: ' drizzle ', rusWord: ' моросящий дождь'},
    {engWord: ' precipitation ', rusWord: ' осадки'},
    {engWord: ' rain ', rusWord: ' дождь; идти (о дожде)'},
    {engWord: ' snow ', rusWord: ' снег; идти (о снеге)'},
    {engWord: ' snowfall ', rusWord: ' снегопад'},
    {engWord: ' snowdrift ', rusWord: ' снежный сугроб'},
    {engWord: ' snowflake ', rusWord: ' снежинка'},
    {engWord: ' hail ', rusWord: ' град'},
    {engWord: ' storm ', rusWord: ' буря'},
    {engWord: ' mist ', rusWord: ' легкий туман, дымка'},
    {engWord: ' fog ', rusWord: ' густой туман'},
    {engWord: ' dew ', rusWord: ' роса'},
    {engWord: ' sleet ', rusWord: '  дождь со снегом'}
];
let words_5 = new WordWithCategory(weather, "Weather");

let despicable_me = [
    {engWord: ' Despicable', rusWord: ' подлый '},
    {engWord: ' outrage', rusWord: ' Возмущение '},
    {engWord: ' inflate', rusWord: ' надуть'},
    {engWord: ' globe', rusWord: ' мир, глобус'},
    {engWord: ' beloved', rusWord: ' возлюбленный'},
    {engWord: ' landmark', rusWord: ' достопримечательность'},
    {engWord: ' enforce', rusWord: ' применять'},
    {engWord: ' heinous', rusWord: ' отвратительный'},
    {engWord: ' appreciate', rusWord: '  оценить'},
    {engWord: ' unless', rusWord: ' если только'},
    {engWord: ' encounter', rusWord: ' столкнуться с, встреча'},
    {engWord: ' disappointment', rusWord: '  разочарование'},
    {engWord: ' fella', rusWord: '  парень, приятель'},
    {engWord: ' vallain', rusWord: '  злодей'},
    {engWord: ' lame', rusWord: ' отстойный,  хромой'},
    {engWord: ' assemble', rusWord: ' собрать'},
    {engWord: ' upset', rusWord: '  расстроить'},
    {engWord: ' ourselves', rusWord: ' себя'},
    {engWord: ' effort', rusWord: '  усилия'},
    {engWord: ' capability', rusWord: '  потенциал'},
    {engWord: ' afford', rusWord: ' позволить себе'},
    {engWord: ' chillax', rusWord: ' расслабиться'},
    {engWord: ' loan', rusWord: ' кредит'},
    {engWord: ' adopt', rusWord: ' принять'},
    {engWord: ' mud', rusWord: ' грязь'},
    {engWord: ' quotas', rusWord: ' квота '},
    {engWord: ' quantity', rusWord: ' количество '},
    {engWord: ' represent', rusWord: ' представлять'},
    {engWord: ' audacity', rusWord: ' смелость '},
    {engWord: ' sinister', rusWord: ' зловещий '},
    {engWord: ' plot', rusWord: ' заговор'},
    {engWord: ' profit', rusWord: ' прибыль'},
    {engWord: ' sucker', rusWord: ' сосунок'},
    {engWord: ' adore', rusWord: ' обожать'},
    {engWord: ' sight', rusWord: ' взгляд'},
    {engWord: ' bless', rusWord: ' благословить '},
    {engWord: ' crawl', rusWord: ' ползти'},
    {engWord: ' unicorn', rusWord: ' Единорог '},
    {engWord: ' orphan', rusWord: ' сирота'},
    {engWord: ' bulb', rusWord: ' лампочка '},
    {engWord: ' disguise', rusWord: ' маскировка.'},
    {engWord: ' knighthood', rusWord: ' рыцарство.'},
    {engWord: ' impress', rusWord: ' впечатлить'},
    {engWord: ' dealio', rusWord: '  вся соль, расклад такой.'},
    {engWord: ' cavity', rusWord: ' полость'},
    {engWord: ' proceed', rusWord: ' приступить к '},
    {engWord: ' caterpillar', rusWord: ' гусеница'},
    {engWord: ' butterfly', rusWord: ' бабочка'},
    {engWord: ' grip', rusWord: ' хватка '},
    {engWord: ' nonstick', rusWord: ' антипригарный'},
    {engWord: ' crowbar', rusWord: ' лом'},
    {engWord: ' shrank', rusWord: ' сократился'},
    {engWord: ' mouthwash', rusWord: ' освежитель дыхания.'},
    {engWord: ' mercy', rusWord: '  милосердие'},
    {engWord: ' curse', rusWord: ' проклятие'},
    {engWord: ' pretend', rusWord: ' притворяться'},
    {engWord: ' bald', rusWord: ' лысый'},
    {engWord: ' treat', rusWord: ' удовольствие.'},
    {engWord: ' fluffy', rusWord: ' пушистый'},
    {engWord: ' appropriate', rusWord: ' соответствующий '},
    {engWord: ' fragile', rusWord: ' хрупкий'},
    {engWord: ' poked a hole', rusWord: '  сделать отверстие'},
    {engWord: ' provide', rusWord: ' представить'},
    {engWord: ' might', rusWord: ' могут, могли бы'},
    {engWord: ' bother', rusWord: ' беспокоить'},
    {engWord: ' giggle', rusWord: ' хихикать'},
    {engWord: ' sneeze', rusWord: ' чихать.'},
    {engWord: ' burp', rusWord: ' рыгать.'},
    {engWord: ' fart', rusWord: ' пук, пукать'},
    {engWord: ' boogie', rusWord: ' буги'},
    {engWord: ' serum', rusWord: ' сыворотка'},
    {engWord: ' dart', rusWord: ' дротик '},
    {engWord: ' circumstance', rusWord: ' обстоятельство'},
    {engWord: ' explode', rusWord: ' взорваться'},
    {engWord: ' disintegrate', rusWord: ' распасться'},
    {engWord: ' definition', rusWord: ' определение '},
    {engWord: ' cousin', rusWord: ' кузен'},
    {engWord: ' tucked in', rusWord: '  заправь (рубашку)'},
    {engWord: ' unlikely', rusWord: ' вряд ли'},
    {engWord: ' toss', rusWord: ' бросить '},
    {engWord: ' sleep tight', rusWord: 'приятных снов.'},
    {engWord: ' literally', rusWord: ' буквально '},
    {engWord: ' excert', rusWord: ' только'},
    {engWord: ' suffer', rusWord: ' страдать'},
    {engWord: ' wrath', rusWord: ' гнев'},
    {engWord: ' stretch', rusWord: ' размять '},
    {engWord: ' pinky', rusWord: ' мизинец '},
    {engWord: ' kindergarten', rusWord: ' детский сад'},
    {engWord: ' almost', rusWord: '  почти '},
    {engWord: ' fortress', rusWord: ' крепость'},
    {engWord: ' stuff', rusWord: ' вещи, наполнять'},
    {engWord: ' adult', rusWord: ' взрослый '},
    {engWord: ' accidentally', rusWord: ' случайно '},
    {engWord: ' frown ', rusWord: ' хмуриться'},
    {engWord: ' optimum', rusWord: ' Оптимальный '},
    {engWord: ' distraction', rusWord: ' Отвлечение'},
    {engWord: ' figure', rusWord: '  считать, цифра '},
    {engWord: ' rather', rusWord: '  скорее'},
    {engWord: ' impressive', rusWord: ' впечатляющий'},
    {engWord: ' stuffed crust', rusWord: '  с корочкой'},
    {engWord: ' faith', rusWord: ' вера '},
    {engWord: ' rumor', rusWord: ' слух, сплетня'},
    {engWord: ' doom', rusWord: ' гибель'},
    {engWord: ' pep talk', rusWord: '  напутствие'},
    {engWord: ' junkyard', rusWord: ' свалка'},
    {engWord: ' apart', rusWord: ' отдельно'},
    {engWord: ' bathtub', rusWord: ' ванна'},
    {engWord: ' bun', rusWord: ' булочка'},
    {engWord: ' shape' , rusWord: ' форма'},
    {engWord: ' nerd' , rusWord: ' ботаник.'},
    {engWord: ' lucrative' , rusWord: ' прибыльный'},
    {engWord: ' heist' , rusWord: ' ограбление'},
    {engWord: ' lifetime' , rusWord: ' целая жизнь'},
    {engWord: ' squid' , rusWord: ' Кальмар'},
    {engWord: ' beddie-bye' , rusWord: ' баиньки'},
    {engWord: ' physical' , rusWord: ' физический '},
    {engWord: ' appear' , rusWord: '  появляться '},
    {engWord: ' hyper' , rusWord: ' гипер'},
    {engWord: ' garbage' , rusWord: ' мусор'},
    {engWord: ' bawl' , rusWord: ' кричать'},
    {engWord: ' purr' , rusWord: ' мурлыкать'},
    {engWord: ' silk' , rusWord: ' шелк'},
    {engWord: ' forever' , rusWord: ' навсегда'},
    {engWord: ' rub' , rusWord: ' потереть'},
    {engWord: ' yawn' , rusWord: ' зевать'},
    {engWord: ' lullaby' , rusWord: ' колыбельная'},
    {engWord: ' recital' , rusWord: ' концерт, выступление'},
    {engWord: ' weird' , rusWord: ' странный'},
    {engWord: ' major' , rusWord: ' основной '},
    {engWord: ' distract' , rusWord: ' отвлечь '},
    {engWord: ' receive' , rusWord: ' получать '},
    {engWord: ' purchase' , rusWord: ' Закупка '},
    {engWord: ' bay' , rusWord: ' залив '},
    {engWord: ' unpredictable' , rusWord: ' непредсказуемый'},
    {engWord: ' punch' , rusWord: ' удар'},
    {engWord: ' insane' , rusWord: ' безумный '},
    {engWord: ' poop' , rusWord: ' какашка '},
    {engWord: ' triumph' , rusWord: ' триумф '},
    {engWord: ' rightful' , rusWord: ' законный '},
    {engWord: ' enforce' , rusWord: ' применять '},
    {engWord: ' accidentally' , rusWord: ' случайно '},
    {engWord: ' malicious' , rusWord: ' злонамеренный '},
    {engWord: ' horn' , rusWord: '  рог '},
    {engWord: ' proud' , rusWord: ' гордый'}
];
let words_6 = new WordWithCategory(despicable_me,"Despicable_me");


//конечный объект со всеми словами
let wordsList = [];
wordsList.push(words_1);
wordsList.push(words_2);
wordsList.push(words_3);
wordsList.push(words_4);
wordsList.push(words_5);
wordsList.push(words_6);

//вставка в select всех категорий слов
 wordsList.forEach(function(item, i, arr) {
     $("#words_category").append("<option value=" + item.category + ">" + item.category + "</option>");
 });

wordsList.forEach(function(item, i, arr) {
    $(".tabs").append( "<li class=\"tab col s1\"><a href=\"#test1\"><h6 onclick=f("+item.category+")>"
        + item.category +"</h6></a></li>");
});







