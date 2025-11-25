import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Buyers = () => {
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
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">Покупателям</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Качественная стеклотара для вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="mb-16 animate-fade-in">
          <span className="text-[#1EAEDB] font-semibold text-sm uppercase tracking-wider">Наша продукция</span>
          <h2 className="font-heading font-bold text-4xl text-[#1A1F2C] mt-4 mb-6">
            Преимущества стеклянной упаковки
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Стекло — лучший материал для упаковки продуктов питания и напитков
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start">
                <Icon name="Check" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Абсолютная безопасность</h4>
                  <p className="text-muted-foreground">Не выделяет никаких веществ и запахов, наилучшим образом сохраняет вкус и полезные свойства</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Icon name="Check" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Привлекательность</h4>
                  <p className="text-muted-foreground">81% потребителей считают, что продукты в стекле выглядят привлекательнее</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Icon name="Check" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Устойчивость</h4>
                  <p className="text-muted-foreground">Не меняет свойств при термообработке и в условиях низких температур</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Icon name="Check" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Экологичность</h4>
                  <p className="text-muted-foreground">Подлежит переработке бессчетное количество раз без потери качества</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Icon name="Check" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-[#1A1F2C] mb-1">Натуральность</h4>
                  <p className="text-muted-foreground">Изготавливается из природных компонентов: песка, соды, доломита, известняка</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9] p-6 flex flex-col justify-end text-white">
              <div className="text-3xl font-heading font-bold mb-2">120+</div>
              <div className="text-sm">Видов стеклотары</div>
            </div>
            <div className="aspect-square rounded-xl bg-[#1A1F2C] p-6 flex flex-col justify-end text-white">
              <div className="text-3xl font-heading font-bold mb-2">10</div>
              <div className="text-sm">Производственных линий</div>
            </div>
            <div className="aspect-square rounded-xl bg-[#0EA5E9] p-6 flex flex-col justify-end text-white">
              <div className="text-3xl font-heading font-bold mb-2">0.9</div>
              <div className="text-sm">Коэффициент качества</div>
            </div>
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#1EAEDB] p-6 flex flex-col justify-end text-white">
              <div className="text-3xl font-heading font-bold mb-2">24/7</div>
              <div className="text-sm">Непрерывное производство</div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Виды стеклотары</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9] rounded-lg mb-4"></div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Для пивной продукции</h3>
                <p className="text-muted-foreground text-sm mb-4">Бутылки различных объемов и дизайнов для пивоваренных компаний</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-[#0EA5E9] to-[#1EAEDB] rounded-lg mb-4"></div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Для ликероводочной продукции</h3>
                <p className="text-muted-foreground text-sm mb-4">Премиальная стеклотара для алкогольных напитков</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] rounded-lg mb-4"></div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Для безалкогольных напитков</h3>
                <p className="text-muted-foreground text-sm mb-4">Бутылки для соков, воды, лимонадов</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9] rounded-lg mb-4"></div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Банки</h3>
                <p className="text-muted-foreground text-sm mb-4">Стеклянные банки для консервирования и хранения</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-[#0EA5E9] to-[#1EAEDB] rounded-lg mb-4"></div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Для технических жидкостей</h3>
                <p className="text-muted-foreground text-sm mb-4">Специальная тара для химической продукции</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] rounded-lg mb-4"></div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-2">Эксклюзивная упаковка</h3>
                <p className="text-muted-foreground text-sm mb-4">Брендированная тара с эмбоссингом и дебоссингом</p>
                <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16 animate-fade-in" id="request-form">
          <div className="bg-gradient-to-br from-[#F0F9FF] to-white p-8 rounded-2xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-4 text-center">Форма заявки</h2>
              <p className="text-muted-foreground text-center mb-8">
                Оставьте заявку, и наши менеджеры свяжутся с вами в ближайшее время
              </p>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="company">Название компании *</Label>
                  <Input id="company" placeholder="ООО «Название»" className="mt-2" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Контактное лицо *</Label>
                    <Input id="name" placeholder="Имя Фамилия" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="email@example.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваши потребности в стеклотаре: объемы, виды продукции, сроки поставки..."
                    className="mt-2 min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white py-6 text-lg">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="text-[#1EAEDB] hover:underline">
                    политикой обработки персональных данных
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] text-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl mb-4">Контакты коммерческой дирекции</h2>
                <p className="text-white/80 mb-6">
                  По вопросам закупки стеклотары и сотрудничества
                </p>
                <div className="space-y-3 text-white/90">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-[#1EAEDB]" />
                    <span>sales@sibstek.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-[#1EAEDB]" />
                    <span>+7 (383) 363-37-70</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-4">География поставок</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Регионы РФ от Урала до Дальнего Востока (доля на рынке — 75%), Киргизия, Казахстан, Узбекистан, Монголия
                </p>
                <div className="flex items-center gap-2 text-[#1EAEDB]">
                  <Icon name="MapPin" size={20} />
                  <span className="font-semibold">Новосибирск, Россия</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Buyers;
