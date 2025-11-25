import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Career = () => {
  return (
    <Layout>
      <section className="relative h-[400px] overflow-hidden mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C]/90 to-[#1A1F2C]/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/8e07b569-b150-4f85-a55d-8026bc955f64.png)' }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">Карьера</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Присоединяйтесь к команде профессионалов
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <span className="text-[#1EAEDB] font-semibold text-sm uppercase tracking-wider">Работа у нас</span>
          <h2 className="font-heading font-bold text-4xl text-[#1A1F2C] mt-4 mb-6">
            Ваше будущее начинается здесь
          </h2>
          <p className="text-lg text-muted-foreground">
            Коллектив «Сибстекла» объединяет как опытных сотрудников, так и молодых специалистов, готовых к профессиональному развитию на крупном производственном предприятии
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#1EAEDB] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Icon name="GraduationCap" size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-3">Обучение</h3>
              <p className="text-muted-foreground">Готовы обучать уникальным профессиям с опытными наставниками</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#0EA5E9] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-3">Рост</h3>
              <p className="text-muted-foreground">Зарплата зависит от профессионального мастерства и результатов</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#1A1F2C] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-3">Стабильность</h3>
              <p className="text-muted-foreground">Социальные программы и уверенность в будущем</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8 text-center">Наши ценности</h2>
          <div className="bg-gradient-to-br from-[#F0F9FF] to-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex gap-4 items-start">
                <Icon name="Lightbulb" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Инициативность</h4>
                  <p className="text-muted-foreground text-sm">Поощряем активную позицию и новые идеи</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon name="Sparkles" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Новаторство</h4>
                  <p className="text-muted-foreground text-sm">Внедряем инновации и современные технологии</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon name="Clock" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Дисциплина</h4>
                  <p className="text-muted-foreground text-sm">Системный подход к работе и процессам</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon name="Users" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Взаимопомощь</h4>
                  <p className="text-muted-foreground text-sm">Работа в команде и поддержка коллег</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon name="Target" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Ответственность</h4>
                  <p className="text-muted-foreground text-sm">За свою работу и общий результат</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon name="TrendingUp" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Развитие</h4>
                  <p className="text-muted-foreground text-sm">Стремление завтра быть лучше, чем сегодня</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8 text-center">Преимущества работы у нас</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Wallet" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Достойная оплата</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Стипендия в период обучения — 2х МРОТ</li>
                      <li>• Зарплаты операторов СФМ в 1.5-2 раза выше средней по области</li>
                      <li>• Система премирования за достижения и стаж</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Heart" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Социальный пакет</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Материальная помощь при рождении ребенка, свадьбе</li>
                      <li>• Оплата путевок в детские лагеря (50%)</li>
                      <li>• Корпоративные скидки в фитнес-клубах</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Calendar" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Гибкий график</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Оплата сокращенного рабочего дня по пятницам</li>
                      <li>• Оплачиваемые часы 1 сентября для родителей школьников</li>
                      <li>• Возможность подработки для подростков летом</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="PartyPopper" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Корпоративная культура</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Выездные командообразующие игры</li>
                      <li>• Корпоративные праздники и мероприятия</li>
                      <li>• Спортивные команды (футбол, волейбол, бильярд)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8 text-center">Профессиональное обучение</h2>
          <div className="bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] text-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl mb-4">Программа «Кадровый резерв»</h3>
                <p className="text-white/80 mb-6">
                  Обучаем стекловаров и операторов стеклоформующих машин по собственным программам. Наличие технического образования не требуется.
                </p>
                <ul className="space-y-3 text-white/90">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>3 месяца обучения: теория + практика в цехах</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Стипендия в период обучения + оплата практики</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Персональный наставник</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Трудоустройство после аттестации</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-4">Партнерство с вузами</h3>
                <p className="text-white/80 mb-6">
                  Студенты проходят производственную практику на заводе. Лучших готовы трудоустроить.
                </p>
                <ul className="space-y-3 text-white/90">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Практика во время учебы</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Работа на летних каникулах</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Трудоустройство после окончания</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Участие в краткосрочных семинарах и курсах</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8 text-center">Открытые вакансии</h2>
          <div className="space-y-4">
            {[
              { title: 'Оператор стеклоформующей машины', level: 'Средний', location: 'Новосибирск' },
              { title: 'Стекловар', level: 'Опытный', location: 'Новосибирск' },
              { title: 'Наладчик оборудования', level: 'Опытный', location: 'Новосибирск' },
              { title: 'Инженер-технолог', level: 'Средний', location: 'Новосибирск' }
            ].map((vacancy, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-2">{vacancy.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="Briefcase" size={16} className="text-[#1EAEDB]" />
                          <span>{vacancy.level}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="MapPin" size={16} className="text-[#1EAEDB]" />
                          <span>{vacancy.location}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="bg-gradient-to-br from-[#F0F9FF] to-white p-8 rounded-2xl text-center">
            <Icon name="Users" size={48} className="text-[#1EAEDB] mx-auto mb-4" />
            <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-4">Контакты для соискателей</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              По вопросам трудоустройства и прохождения практики обращайтесь в дирекцию по персоналу
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-left mb-8">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-[#1EAEDB]" />
                <div>
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="font-semibold">+7 (383) 363-37-70 вн. 27-00</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Smartphone" size={20} className="text-[#1EAEDB]" />
                <div>
                  <div className="text-sm text-muted-foreground">Мобильный</div>
                  <div className="font-semibold">+7 (913) 010-56-59</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-[#1EAEDB]" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold">info@sibstek.ru</div>
                </div>
              </div>
            </div>
            <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white px-8 py-6 text-lg">
              Отправить резюме
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
