let professions = [
    {engWord: '	Driving instructor', rusWord: 'Автоинструктор '},
    {engWord: ' Motor mechanic ', rusWord: 'Автомеханик	'},
    {engWord: ' Agronomist ', rusWord: 'Агроном	'},
    {engWord: ' Lawyer, attorney ', rusWord: 'Адвокат	'},
    {engWord: ' Administrator , manager ', rusWord: 'Администратор	'},
    {engWord: ' Actor, artist ', rusWord: 'Актер, Артист '},
    {engWord: ' Obstetrician , accoucheur ', rusWord: 'Акушер	'},
    {engWord: '	Anesthesiologist ', rusWord: 'Анестезиолог '},
    {engWord: ' Animator ', rusWord: 'Аниматор	'},
    {engWord: ' Art director	', rusWord: 'Арт директор'},
    {engWord: '	Architect ', rusWord: 'Архитектор '},
    {engWord: '	Astronomer ', rusWord: 'Астроном '},
    {engWord: '	Astrophysicist ', rusWord: 'Астрофизик '},
    {engWord: '	Auditor ', rusWord: 'Аудитор '},
    {engWord: '	Banker ', rusWord: 'Банкир '},
    {engWord: '	Barista ', rusWord: 'Бариста '},
    {engWord: '	Barman , bartender ', rusWord: 'Бармен '},
    {engWord: '	Concrete worker ', rusWord: 'Бетонщик '},
    {engWord: '	Librarian ', rusWord: 'Библиотекарь '},
    {engWord: '	Businessman ', rusWord: 'Бизнесмен '},
    {engWord: '	Biologist ', rusWord: 'Биолог '},
    {engWord: '	Biotechnologist ', rusWord: 'Биотехнолог '},
    {engWord: '	Flight attendant ', rusWord: 'Бортпроводник '},
    {engWord: '	Botanist', rusWord: 'Ботаник '},
    {engWord: '	Foreman', rusWord: 'Бригадир '},
    {engWord: '	Broker ', rusWord: 'Брокер '},
    {engWord: '	Bookkeeper , accountant ', rusWord: 'Бухгалтер '},
    {engWord: ' Web designer', rusWord:'Веб-дизайнер'},
    {engWord: '	Maker-move', rusWord: 'Верстальщик '},
    {engWord: '	Veterinarian, vet ', rusWord: 'Ветеринар '},
    {engWord: '	Visagiste , makeup artist ', rusWord: 'Визажист '},
    {engWord: '	Winemaker', rusWord: 'Винодел '},
    {engWord: '	Driver ', rusWord: 'Водитель '},
    {engWord: '	Plumber ', rusWord: 'Водопроводчик '},
    {engWord: '	Serviceman , military ', rusWord: 'Военнослужащий '},
    {engWord: '	Teacher , educator ', rusWord: 'Воспитатель '},
    {engWord: '	Doctor' , rusWord:'Врач '},
    {engWord: '	Cloakroom attendant ', rusWord: 'Гардеробщик '},
    {engWord: '	Geneticist ', rusWord: 'Генетик '},
    {engWord: '	Guide ', rusWord: 'Гид '},
    {engWord: '	Gynaecologist ', rusWord: 'Гинеколог '},
    {engWord: '	Miner , mineworker', rusWord: 'Горнорабочий '},
    {engWord: '	Loader ', rusWord: 'Грузчик '},
    {engWord: '	Janitor , street sweeper, yardman ', rusWord: 'Дворник '},
    {engWord: '	Developer ', rusWord: 'Девелопер '},
    {engWord: '	Dermatologist ', rusWord: 'Дерматолог '},
    {engWord: ' Designer', rusWord: 'Дизайнер	 '},
    {engWord: '	DJ ', rusWord: 'Диджей '},
    {engWord: '	Dietitian ', rusWord: 'Диетолог '},
    {engWord: '	Announcer', rusWord: 'Диктор '},
    {engWord: '	Dealer ', rusWord: 'Дилер '},
    {engWord: '	diplomat , diplomatist', rusWord: 'Дипломат '},
    {engWord: '	Director , manager , chief , head , boss ', rusWord: 'Директор '},
    {engWord: '	Conductor ', rusWord: 'Дирижер '},
    {engWord: '	Controller ', rusWord: 'Диспетчер '},
    {engWord: '	Distributor ', rusWord: 'Дистрибьютор '},
    {engWord: '	Milker , dairymaid ', rusWord: 'Доярка '},
    {engWord: '	Railwayman , railroadman , railroader', rusWord: 'Железнодорожник '},
    {engWord: '	Livestock breeder , cattle breeder ', rusWord: 'Животновод '},
    {engWord: '	Journalist ', rusWord: 'Журналист '},
    {engWord: '	Manager ', rusWord: 'Заведующий '},
    {engWord: '	Tailor cutter ', rusWord: 'Закройщик '},
    {engWord: '	Deputy ', rusWord: 'Заместитель '},
    {engWord: '	Sound producer , sound engineer ', rusWord: 'Звукорежиссер '},
    {engWord: '	Image maker ', rusWord: 'Имиджмейкер '},
    {engWord: '	Engineer', rusWord: 'Инженер '},
    {engWord: '	Collector ', rusWord: 'Инкассатор '},
    {engWord: '	Inspector ', rusWord: 'Инспектор '},
    {engWord: '	Researcher ', rusWord: 'Исследователь '},
    {engWord: '	Historian', rusWord: 'Историк '},
    {engWord: '	Mason , bricklayer ', rusWord: 'Каменщик '},
    {engWord: '	Cardiologist  ', rusWord: 'Кардиолог '},
    {engWord: '	Cashier ', rusWord: 'Кассир  '},
    {engWord: '	Cynologist , dog handler', rusWord: 'Кинолог '},
    {engWord: '	Cameraman ', rusWord: 'Кинооператор '},
    {engWord: '	Film director ', rusWord: 'Кинорежиссёр '},
    {engWord: '	Merchant , businessman ', rusWord: 'Коммерсант '},
    {engWord: '	Composer , songwriter ', rusWord: 'Композитор '},
    {engWord: ' Confectioner ', rusWord: 'Кондитер	 '},
    {engWord: '	Designer , constructor ', rusWord: 'Конструктор '},
    {engWord: '	Consultant , adviser ', rusWord: 'Консультант '},
    {engWord: ' Content manager ', rusWord: 'Контент-менеджер'},
    {engWord: '	Comptroller, inspector , supervisor ', rusWord: 'Контролер '},
    {engWord: '	Copywriter ', rusWord: 'Копирайтер '},
    {engWord: '	Cosmetologist', rusWord: 'Косметолог '},
    {engWord: '	Astronaut , spaceman , cosmonaut', rusWord: 'Космонавт '},
    {engWord: '	Crane operator', rusWord: 'Крановщик '},
    {engWord: '	Smith ', rusWord: 'Кузнец '},
    {engWord: '	Messenger , courier ', rusWord: 'Курьер '},
    {engWord: '	Laboratory assistant ', rusWord: 'Лаборант '},
    {engWord: ' Pilot ', rusWord: 'Лётчик	 '},
    {engWord: '	Foundry worker ', rusWord: 'Литейщик '},
    {engWord: ' Logistician', rusWord: 'Логист	 '},
    {engWord: ' Broker ', rusWord: 'Маклер	 '},
    {engWord: '	Painter ', rusWord: 'Маляр '},
    {engWord: '	Model ', rusWord: 'Манекенщица '},
    {engWord: '	Marketeer ', rusWord: 'Маркетолог '},
    {engWord: '	Masseur ', rusWord: 'Массажист '},
    {engWord: '	Foreman ', rusWord: 'Мастер '},
    {engWord: '	Mathematician ', rusWord: 'Математик '},
    {engWord: '	Machinist , driver ', rusWord: 'Машинист '},
    {engWord: '	Nurse ', rusWord: 'Медсестра '},
    {engWord: '	Manager ', rusWord: 'Менеджер '},
    {engWord: '	Merchandiser ', rusWord: 'Мерчендайзер '},
    {engWord: '	Metallurgist , steelmaker ', rusWord: 'Металлург '},
    {engWord: '	Meteorologist', rusWord: 'Метеоролог '},
    {engWord: '	Microbiologist', rusWord: 'Микробиолог '},
    {engWord: '	Policeman , police officer ', rusWord: 'Милиционер '},
    {engWord: '	Moderator ', rusWord: 'Модератор '},
    {engWord: '	Fitter , rigger , erector ', rusWord: 'Монтажник '},
    {engWord: '	Adjuster, assembler, mounter ', rusWord: 'Монтер '},
    {engWord: '	Motor mechanic ', rusWord: 'Моторист '},
    {engWord: '	Musician ', rusWord: 'Музыкант '},
    {engWord: '	Butcher ', rusWord: 'Мясник '},
    {engWord: '	Adjuster ', rusWord: 'Наладчик '},
    {engWord: '	Tax officer , tax inspector ', rusWord: 'Налоговый инспектор '},
    {engWord: '	Chief , head , boss, superior ', rusWord: 'Начальник '},
    {engWord: '	Neuropathologist ', rusWord: 'Невропатолог '},
    {engWord: '	Oilman , oil worker ', rusWord: 'Нефтяник '},
    {engWord: '	Notary public ', rusWord: 'Нотариус '},
    {engWord: '	Nanny , nursemaid, baby', rusWord: 'Няня '},
    {engWord: '	Oculist ', rusWord: 'Окулист '},
    {engWord: '	Oncologist ', rusWord: 'Онколог '},
    {engWord: '	Operator ', rusWord: 'Оператор '},
    {engWord: '	Waiter ', rusWord: 'Официант '},
    {engWord: '	Waiter ', rusWord: 'Официантка '},
    {engWord: '	Hunter ', rusWord: 'Охотник '},
    {engWord: ' Guard ', rusWord: 'Охранник '},
    {engWord: '	Executioner , hangman ', rusWord: 'Палач '},
    {engWord: '	Hairdresser , barber ', rusWord: 'Парикмахер '},
    {engWord: '	Pathologist ', rusWord: 'Патологоанатом '},
    {engWord: '	Singer ', rusWord: 'Певец '},
    {engWord: '	Pediatrician', rusWord: 'Педиатр '},
    {engWord: '	Baker ', rusWord: 'Пекарь '},
    {engWord: '	Interpreter ', rusWord: 'Переводчик '},
    {engWord: '	Writer , author ', rusWord: 'Писатель '},
    {engWord: '	Carpenter', rusWord: 'Плотник '},
    {engWord: '	Cook , chef ', rusWord: 'Повар '},
    {engWord: '	Fireman , firefighter', rusWord: 'Пожарный '},
    {engWord: '	Politician', rusWord: 'Политик '},
    {engWord: '	Policeman , police officer', rusWord: 'Полицейский '},
    {engWord: '	Assistant , aide ', rusWord: 'Помощник '},
    {engWord: '	Tailor ', rusWord: 'Портной '},
    {engWord: '	Receptionist', rusWord: 'Портье '},
    {engWord: '	Dishwasher ', rusWord: 'Посудомойщик '},
    {engWord: '	Postman , mailman, mail carrier', rusWord: 'Почтальон '},
    {engWord: '	Entrepreneur , business owner', rusWord: 'Предприниматель '},
    {engWord: '	Teacher ', rusWord: 'Преподаватель '},
    {engWord: '	Programmer ', rusWord: 'Программист '},
    {engWord: '	Shop assistant, salesman', rusWord: 'Продавец '},
    {engWord: '	Producer ', rusWord: 'Продюсер '},
    {engWord: '	Prosecutor, public prosecutor ', rusWord: 'Прокурор '},
    {engWord: '	Promoter ', rusWord: 'Промоутер '},
    {engWord: '	Superintendent , foreman ', rusWord: 'Прораб '},
    {engWord: '	Prostitute ', rusWord: 'Проститутка '},
    {engWord: '	Psychiatrist ', rusWord: 'Психиатр '},
    {engWord: '	Psychologist', rusWord: 'Психолог '},
    {engWord: '	Unskilled labourer , odd', rusWord: 'Разнорабочий '},
    {engWord: '	Resuscitator ', rusWord: 'Реаниматолог '},
    {engWord: '	Inspector , supervisor ', rusWord: 'Ревизор '},
    {engWord: '	Editor ', rusWord: 'Редактор '},
    {engWord: '	Repairman , repairer ', rusWord: 'Ремонтник '},
    {engWord: '	Tutor ', rusWord: 'Репетитор '},
    {engWord: '	Restorer ', rusWord: 'Реставратор '},
    {engWord: '	Realtor , real estate agent ', rusWord: 'Риелтор '},
    {engWord: '	Fisherman, fisher', rusWord: 'Рыбак '},
    {engWord: '	Gardener ', rusWord: 'Садовник '},
    {engWord: '	Plumber ', rusWord: 'Сантехник '},
    {engWord: '	Shoemaker , cobbler ', rusWord: 'Сапожник '},
    {engWord: '	Welder ', rusWord: 'Сварщик '},
    {engWord: '	Priest ', rusWord: 'Священнослужитель '},
    {engWord: '	Secretary ', rusWord: 'Секретарь '},
    {engWord: '	Nurse ', rusWord: 'Сиделка '},
    {engWord: '	System administrator ', rusWord: 'Системный администратор '},
    {engWord: '	Sculptor ', rusWord: 'Скульптор '},
    {engWord: '	Investigator , inspector ', rusWord: 'Следователь '},
    {engWord: '	Metalworker ', rusWord: 'Слесарь '},
    {engWord: '	Rescuer , lifeguard ', rusWord: 'Спасатель '},
    {engWord: '	Specialist , expert ', rusWord: 'Специалист '},
    {engWord: '	Sportsman , athlete', rusWord: 'Спортсмен '},
    {engWord: '	Glazier ', rusWord: 'Стекольщик '},
    {engWord: '	Stylist ', rusWord: 'Стилист '},
    {engWord: '	Joiner , carpenter', rusWord: 'Столяр '},
    {engWord: '	Dentist , stomatologist ', rusWord: 'Стоматолог '},
    {engWord: '	Watchman , caretaker', rusWord: 'Сторож '},
    {engWord: '	Insurance agent , insurance salesman', rusWord: 'Страховой агент '},
    {engWord: '	Builder ', rusWord: 'Строитель '},
    {engWord: '	Flight attendant , stewardess', rusWord: 'Стюардесса '},
    {engWord: '	Judge ', rusWord: 'Судья '},
    {engWord: '	Supervisor ', rusWord: 'Супервайзер '},
    {engWord: '	Taxi driver , cab driver , cabby', rusWord: 'Таксист '},
    {engWord: '	Tattooist ', rusWord: 'Татуировщик '},
    {engWord: '	Bodyguard , personal guard ', rusWord: 'Телохранитель '},
    {engWord: '	Therapeutist , therapist , physician ', rusWord: 'Терапевт '},
    {engWord: '	Technician', rusWord: 'Техник '},
    {engWord: '	Technologist', rusWord: 'Технолог '},
    {engWord: '	Weaver ', rusWord: 'Ткач '},
    {engWord: '	Goods manager ', rusWord: 'Товаровед '},
    {engWord: '	Turner ', rusWord: 'Токарь '},
    {engWord: '	Sales representative , business representative ', rusWord: 'Торговый представитель '},
    {engWord: '	Traumatologist ', rusWord: 'Травматолог '},
    {engWord: '	Tractor driver , tractor operator ', rusWord: 'Тракторист '},
    {engWord: '	Trainer , coach ', rusWord: 'Тренер '},
    {engWord: '	Cleaner , janitor, cleaning lady ', rusWord: 'Уборщица '},
    {engWord: '	Scientist ', rusWord: 'Учёный '},
    {engWord: '	Teacher ', rusWord: 'Учитель '},
    {engWord: '	Pharmaceutist ], pharmacist ', rusWord: 'Фармацевт '},
    {engWord: '	Medical assistant , paramedic ', rusWord: 'Фельдшер '},
    {engWord: '	Farmer ', rusWord: 'Фермер '},
    {engWord: ' Physicist , physics ', rusWord: 'Физик	'},
    {engWord: ' Nuclear physicist ', rusWord: 'Физик ядерщик'},
    {engWord: '	Philosopher ', rusWord: 'Философ '},
    {engWord: '	Financier , financial expert ', rusWord: 'Финансист '},
    {engWord: '	Photographer ', rusWord: 'Фотограф '},
    {engWord: '	Milling machine operator ', rusWord: 'Фрезеровщик '},
    {engWord: '	Freelancer', rusWord: 'Фрилансер '},
    {engWord: '	Chemist ', rusWord: 'Химик '},
    {engWord: '	Surgeon ', rusWord: 'Хирург '},
    {engWord: '	Choreographer ', rusWord: 'Хореограф '},
    {engWord: '	Artist', rusWord: 'Художник '},
    {engWord: '	Miner ', rusWord: 'Шахтёр '},
    {engWord: '	Doorman ', rusWord: 'Швейцар '},
    {engWord: '	Seamstress', rusWord: 'Швея '},
    {engWord: '	Plasterer ', rusWord: 'Штукатур '},
    {engWord: '	Ecologist ', rusWord: 'Эколог '},
    {engWord: '	Economist ', rusWord: 'Экономист '},
    {engWord: '	Guide ', rusWord: 'Экскурсовод '},
    {engWord: '	Electrician , electrical engineer', rusWord: 'Электрик '},
    {engWord: '	Electrician , electrical engineer ', rusWord: 'Электромонтер '},
    {engWord: '	Endocrinologist ', rusWord: 'Эндокринолог '},
    {engWord: '	Jeweller ', rusWord: 'Ювелир '},
    {engWord: ' Lawyer , jurist', rusWord: 'Юрист '},
    {engWord: '	Linguist , philologist ', rusWord: 'Языковед '},

];