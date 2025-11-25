import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Sustainability = () => {
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
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">Устойчивое развитие</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Принципы ESG и экономика замкнутого цикла
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="mb-16 animate-fade-in text-center">
          <span className="text-[#1EAEDB] font-semibold text-sm uppercase tracking-wider">Наша миссия</span>
          <h2 className="font-heading font-bold text-4xl text-[#1A1F2C] mt-4 mb-6">
            Производить стекло из стекла
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Обеспечить потребителей экологичной стеклянной упаковкой, используя ресурсы рационально и эффективно
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="text-5xl font-heading font-bold text-[#1EAEDB] mb-2">90%+</div>
              <p className="text-muted-foreground">Продукции выпущено по облегчающим технологиям</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <div className="text-5xl font-heading font-bold text-[#1EAEDB] mb-2">132К</div>
              <p className="text-muted-foreground">Тонн вторичного сырья перерабатывается в год</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 text-center">
              <div className="text-5xl font-heading font-bold text-[#1EAEDB] mb-2">75%</div>
              <p className="text-muted-foreground">Доля на рынке Сибири и Дальнего Востока</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6 text-center">
              <div className="text-5xl font-heading font-bold text-[#1EAEDB] mb-2">100%</div>
              <p className="text-muted-foreground">Брак и стекольный бой возвращаются в производство</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Цели устойчивого развития ООН</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-[#1EAEDB] border-2">
              <CardContent className="p-6">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB] mb-3">Цель 8</div>
                <h3 className="font-semibold text-lg text-[#1A1F2C] mb-2">Достойная работа и экономический рост</h3>
                <p className="text-sm text-muted-foreground">Содействие устойчивому экономическому росту, полной занятости и достойной работе для всех</p>
              </CardContent>
            </Card>

            <Card className="border-[#1EAEDB] border-2">
              <CardContent className="p-6">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB] mb-3">Цель 9</div>
                <h3 className="font-semibold text-lg text-[#1A1F2C] mb-2">Индустриализация и инновации</h3>
                <p className="text-sm text-muted-foreground">Создание стойкой инфраструктуры, содействие устойчивой индустриализации и инновациям</p>
              </CardContent>
            </Card>

            <Card className="border-[#1EAEDB] border-2">
              <CardContent className="p-6">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB] mb-3">Цель 11</div>
                <h3 className="font-semibold text-lg text-[#1A1F2C] mb-2">Устойчивые города</h3>
                <p className="text-sm text-muted-foreground">Обеспечение открытости, безопасности и экологической устойчивости городов</p>
              </CardContent>
            </Card>

            <Card className="border-[#1EAEDB] border-2">
              <CardContent className="p-6">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB] mb-3">Цель 12</div>
                <h3 className="font-semibold text-lg text-[#1A1F2C] mb-2">Ответственное потребление</h3>
                <p className="text-sm text-muted-foreground">Обеспечение перехода к рациональным моделям потребления и производства</p>
              </CardContent>
            </Card>

            <Card className="border-[#1EAEDB] border-2">
              <CardContent className="p-6">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB] mb-3">Цель 17</div>
                <h3 className="font-semibold text-lg text-[#1A1F2C] mb-2">Партнерство</h3>
                <p className="text-sm text-muted-foreground">Укрепление средств и активизация работы глобального партнерства в интересах устойчивого развития</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Эколого-экономические приоритеты</h2>
          <div className="bg-gradient-to-br from-[#F0F9FF] to-white p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#1EAEDB] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Recycle" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-2">Экономика замкнутого цикла</h3>
                  <p className="text-muted-foreground">Замещая минеральные компоненты стекольными отходами, снижаем промышленную нагрузку на окружающую среду — уменьшаем энергопотребление, продляем срок службы печей, замедляем темпы истощения полезных ископаемых и накопление ТКО на полигонах</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#0EA5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-2">Облегчение стеклотары</h3>
                  <p className="text-muted-foreground">При сохранении литража и соответствия ГОСТ повышаем скорость стеклоформующих машин и увеличиваем выпуск продукции из того же объема стекломассы</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#1A1F2C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-2">Локализация поставок</h3>
                  <p className="text-muted-foreground">Укрепляя сотрудничество с добывающими компаниями Сибирского федерального округа, локализуем поставки сырья в Сибири, тем самым сокращаем логистические расходы и транспортный след</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Рейтинги и достижения</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1EAEDB] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Партнер национальных проектов России</h3>
                <p className="text-muted-foreground text-sm">По итогам участия в национальной премии «Наш вклад» (АНО «Национальные приоритеты»)</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#0EA5E9] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">ESG-индекс российского бизнеса</h3>
                <p className="text-muted-foreground text-sm">Первый (наивысший) уровень соответствия экологическим, социальным и управленческим стандартам (РБК и НКР)</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1A1F2C] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Наивысший рейтинг работодателя</h3>
                <p className="text-muted-foreground text-sm">Уровень А.hr в рейтинге привлекательности работодателя Аналитического центра «БизнесДром»</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#1EAEDB] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trophy" size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Лидер стекольной отрасли</h3>
                <p className="text-muted-foreground text-sm">Победитель номинации «Лучшая компания по производству стеклянной тары» (2021-2024 гг.)</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Экопартнерство</h2>
          <div className="bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] text-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl mb-4">Сохранение природных территорий</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Природный парк «Караканский бор» — экологические субботники</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Новосибирский дендрологический парк — благоустройство ООПТ</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Городской лес «Сосновый бор» — участие в рекреации</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-4">Экологическое просвещение</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Партнер семейного экофестиваля «Экомир»</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Главный партнер конкурса «Вторая жизнь упаковки»</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Пропаганда раздельного сбора отходов</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Социальная ответственность</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Icon name="Heart" size={32} className="text-[#1EAEDB] mb-4" />
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Благотворительность</h3>
                <p className="text-muted-foreground text-sm">Поддержка Фонда помощи тяжелобольным детям «ЖИВИ»</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Icon name="GraduationCap" size={32} className="text-[#1EAEDB] mb-4" />
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Развитие молодежи</h3>
                <p className="text-muted-foreground text-sm">Партнер центра «Ориентир» — профориентация и социальная реабилитация</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Icon name="Globe" size={32} className="text-[#1EAEDB] mb-4" />
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Патриотизм</h3>
                <p className="text-muted-foreground text-sm">Партнер авиафестивалей в поддержку Вооруженных сил России</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustainability;
