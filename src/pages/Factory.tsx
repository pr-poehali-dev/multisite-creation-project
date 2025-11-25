import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Factory = () => {
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
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">Завод</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Современное производство стеклотары с использованием передовых технологий
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="mb-16 animate-fade-in">
          <span className="text-[#1EAEDB] font-semibold text-sm uppercase tracking-wider">О заводе</span>
          <h2 className="font-heading font-bold text-4xl text-[#1A1F2C] mt-4 mb-6">Ключевые факты</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1EAEDB]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={24} className="text-[#1EAEDB]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-2">370 бутылок в минуту</h4>
                  <p className="text-muted-foreground">С конвейеров предприятия сходит до 2,5 млн стеклоизделий в сутки</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1EAEDB]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Factory" size={24} className="text-[#1EAEDB]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-2">900 млн единиц в год</h4>
                  <p className="text-muted-foreground">Производительность завода. Если разместить все бутылки в ряд — линия будет в 1,4 раза длиннее экватора</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1EAEDB]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Flame" size={24} className="text-[#1EAEDB]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-2">Крупнейшая печь в России</h4>
                  <p className="text-muted-foreground">Площадь варочного бассейна — 130 кв.м. Высота достигает 20 метров. Вес огнеупоров — около 2 тысяч тонн</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1EAEDB]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-[#1EAEDB]" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-2">Доля облегченной продукции</h4>
                  <p className="text-muted-foreground">Более 90% продукции выпущено по облегчающим технологиям без потери качества</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/8e07b569-b150-4f85-a55d-8026bc955f64.png"
                alt="Производство стеклотары"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9] rounded-2xl -z-10"></div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Производственные мощности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl font-heading font-bold text-[#1EAEDB] mb-2">643</div>
                <p className="text-muted-foreground">Тонн стекломассы в сутки — совокупная мощность трех печей</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl font-heading font-bold text-[#1EAEDB] mb-2">11</div>
                <p className="text-muted-foreground">Производственных линий, 10 из них с технологией NNPB</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl font-heading font-bold text-[#1EAEDB] mb-2">120</div>
                <p className="text-muted-foreground">Видов стеклотары, отвечающей требованиям безопасности</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Технологии</h2>
          <div className="bg-gradient-to-br from-[#F0F9FF] to-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-4 flex items-center gap-3">
                  <Icon name="Lightbulb" className="text-[#1EAEDB]" />
                  Инновации
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Технология NNPB для облегчения тары при сохранении литража и соответствия ГОСТ</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Патент на способ формования черновой заготовки для узкогорлых изделий</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Коэффициент выхода годной продукции — 0.9 (выше среднеотраслевого)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-4 flex items-center gap-3">
                  <Icon name="Palette" className="text-[#1EAEDB]" />
                  Уникальные возможности
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Единственный производитель коричневой и зеленой стеклотары в Сибири и на Дальнем Востоке</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Окрашивание фриттой — эксклюзивные оттенки стеклотары</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-[#1EAEDB] flex-shrink-0 mt-0.5" />
                    <span>Брендированная тара с эмбоссингом и дебоссингом от подделок</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">История развития</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-24 flex-shrink-0">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB]">1954</div>
              </div>
              <div className="flex-1 pb-8 border-b border-gray-200">
                <p className="text-muted-foreground">Начало работы завода «Экран» — выпуск приборов для радиолокации и телевидения</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-24 flex-shrink-0">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB]">1990-е</div>
              </div>
              <div className="flex-1 pb-8 border-b border-gray-200">
                <p className="text-muted-foreground">Освоение производства стеклотары с сохранением направления электронно-оптического приборостроения</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-24 flex-shrink-0">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB]">2005</div>
              </div>
              <div className="flex-1 pb-8 border-b border-gray-200">
                <p className="text-muted-foreground">Реструктуризация — разделение на два предприятия: электронно-оптическое приборостроение и производство тарного стекла</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-24 flex-shrink-0">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB]">2021</div>
              </div>
              <div className="flex-1 pb-8 border-b border-gray-200">
                <p className="text-muted-foreground">Ввод в эксплуатацию новой печи мощностью 375 тонн стекломассы в сутки — одной из крупнейших в России</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-24 flex-shrink-0">
                <div className="text-2xl font-heading font-bold text-[#1EAEDB]">2023-2024</div>
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground">Поэтапный запуск технологического комплекса по обработке стекольных отходов мощностью 132 тыс. тонн в год</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] text-white p-12 rounded-2xl">
            <h2 className="font-heading font-bold text-3xl mb-4">Экскурсии на производство</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Приглашаем на экскурсию «Круговорот стекла в заводе» — увидеть процесс изготовления стеклотары своими глазами
            </p>
            <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white px-8 py-6 text-lg">
              Записаться на экскурсию
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Factory;
