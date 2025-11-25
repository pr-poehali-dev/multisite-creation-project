import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Investors = () => {
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
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">Инвесторам</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Финансовая отчетность и корпоративные события
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Факторы инвестиционной привлекательности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1EAEDB] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Лидирующие позиции</h3>
                <p className="text-muted-foreground text-sm">75% доля на рынке Сибири и Дальнего Востока. Производительность 900 млн единиц в год</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0EA5E9] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Современное производство</h3>
                <p className="text-muted-foreground text-sm">Одна из крупнейших стекловаренных печей в России. 10 линий с технологией NNPB</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1A1F2C] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Leaf" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">ESG-лидер</h3>
                <p className="text-muted-foreground text-sm">Первый уровень ESG-индекса РБК. Партнер национальных проектов России</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1EAEDB] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Признание</h3>
                <p className="text-muted-foreground text-sm">Победитель конкурса «Лидер стекольной отрасли» 2021-2024 гг.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0EA5E9] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Recycle" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Замкнутый цикл</h3>
                <p className="text-muted-foreground text-sm">Мощность переработки стеклоотходов — 132 тыс. тонн в год</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1A1F2C] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Globe" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">География поставок</h3>
                <p className="text-muted-foreground text-sm">Регионы РФ от Урала до Дальнего Востока, Киргизия, Казахстан, Узбекистан, Монголия</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Долговые инструменты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#1EAEDB]">
              <CardContent className="p-8">
                <Icon name="FileText" size={32} className="text-[#1EAEDB] mb-4" />
                <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-4">Облигации</h3>
                <p className="text-muted-foreground mb-6">
                  Облигации «Сибстекла» включены в Сектор роста Московской биржи, объединяющий эмитентов с прозрачной бизнес-моделью и устойчивыми рыночными позициями
                </p>
                <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white w-full">
                  Параметры выпусков
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0EA5E9]">
              <CardContent className="p-8">
                <Icon name="Coins" size={32} className="text-[#0EA5E9] mb-4" />
                <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-4">Цифровые финансовые активы</h3>
                <p className="text-muted-foreground mb-6">
                  «Сибстекло» — первое предприятие стекольной отрасли, выпустившее в обращение цифровые финансовые активы
                </p>
                <Button className="bg-[#0EA5E9] hover:bg-[#1EAEDB] text-white w-full">
                  О выпусках ЦФА
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Показатели и отчетность</h2>
          <div className="bg-gradient-to-br from-[#F0F9FF] to-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-[#1EAEDB] mb-2">900 млн</div>
                <div className="text-sm text-muted-foreground">Единиц стеклотары в год</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-[#1EAEDB] mb-2">75%</div>
                <div className="text-sm text-muted-foreground">Доля рынка СФО и ДФО</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-[#1EAEDB] mb-2">0.9</div>
                <div className="text-sm text-muted-foreground">Коэффициент выхода годной продукции</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB] hover:text-white">
                <Icon name="Download" size={16} className="mr-2" />
                Бухгалтерская отчетность
              </Button>
              <Button variant="outline" className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB] hover:text-white">
                <Icon name="Download" size={16} className="mr-2" />
                Разбор отчетности
              </Button>
              <Button variant="outline" className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB] hover:text-white">
                <Icon name="Download" size={16} className="mr-2" />
                Презентация для инвесторов
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Корпоративное управление</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Users" size={24} className="text-[#1EAEDB]" />
                  <h3 className="font-heading font-bold text-lg text-[#1A1F2C]">Совет директоров</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Стратегический вектор компании формирует Совет директоров</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Состав СД
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="FileText" size={24} className="text-[#1EAEDB]" />
                  <h3 className="font-heading font-bold text-lg text-[#1A1F2C]">Документы общества</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Устав, внутренние документы, политики</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Смотреть документы
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Shield" size={24} className="text-[#1EAEDB]" />
                  <h3 className="font-heading font-bold text-lg text-[#1A1F2C]">Раскрытие информации</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Прозрачность деятельности компании</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Перейти к раскрытию
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="AlertCircle" size={24} className="text-[#1EAEDB]" />
                  <h3 className="font-heading font-bold text-lg text-[#1A1F2C]">Управление рисками</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Политика в области управления рисками</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] text-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl mb-4">Контакты для инвесторов</h2>
                <p className="text-white/80 mb-6">
                  По вопросам взаимодействия с инвесторами вы можете связаться с нами
                </p>
                <div className="space-y-3 text-white/90">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-[#1EAEDB]" />
                    <span>ir@sibstek.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-[#1EAEDB]" />
                    <span>+7 (383) 363-37-70</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-4">Часто задаваемые вопросы</h3>
                <p className="text-white/80 mb-6">
                  Ответы на популярные вопросы инвесторов
                </p>
                <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white">
                  Перейти к Q&A
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
