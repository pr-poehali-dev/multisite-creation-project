import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const slides = [
    {
      title: 'ООО «Сибирское стекло»',
      subtitle: 'Один из лидирующих производителей стеклотары в России',
      description: 'Крупнейший утилизатор стеклоотходов в Сибири и на Дальнем Востоке. Партнер национальных проектов России.',
      image: 'https://cdn.poehali.dev/files/8e07b569-b150-4f85-a55d-8026bc955f64.png'
    },
    {
      title: '900 млн единиц',
      subtitle: 'Производительность завода в год',
      description: 'С конвейеров предприятия сходит до 2,5 млн стеклоизделий в сутки',
      image: 'https://cdn.poehali.dev/files/8e07b569-b150-4f85-a55d-8026bc955f64.png'
    },
    {
      title: 'Экономика замкнутого цикла',
      subtitle: 'Производим стекло из стекла',
      description: 'Мощность технологического комплекса по переработке — 132 тыс. тонн вторичного сырья в год',
      image: 'https://cdn.poehali.dev/files/8e07b569-b150-4f85-a55d-8026bc955f64.png'
    }
  ];

  const navItems = [
    { label: 'Главная', href: '#home' },
    { label: 'Завод', href: '#factory' },
    { label: 'Устойчивое развитие', href: '#sustainability' },
    { label: 'Инвесторам', href: '#investors' },
    { label: 'Медиа', href: '#media' },
    { label: 'Покупателям', href: '#buyers' },
    { label: 'Карьера', href: '#career' },
    { label: 'Контакты', href: '#contacts' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9] rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">СС</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-[#1A1F2C]">Сибирское стекло</div>
                <div className="text-xs text-muted-foreground">РАТМ Холдинг</div>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 6).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#1A1F2C] hover:text-[#1EAEDB] transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1EAEDB] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden lg:flex bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white">
              Связаться с нами
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-[#1A1F2C] hover:text-[#1EAEDB] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section id="home" className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C]/90 to-[#1A1F2C]/70 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-[#1EAEDB] font-semibold mb-4">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white px-8 py-6 text-lg">
                  Узнать больше
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] px-8 py-6 text-lg">
                  Наша продукция
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-[#1EAEDB] w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1EAEDB] rounded-lg flex items-center justify-center mb-6">
                    <Icon name="Newspaper" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1A1F2C] mb-4">Новости</h3>
                  <p className="text-muted-foreground mb-6">
                    Актуальные события и достижения компании
                  </p>
                  <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                    Читать все новости
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#0EA5E9] rounded-lg flex items-center justify-center mb-6">
                    <Icon name="Leaf" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1A1F2C] mb-4">Устойчивое развитие</h3>
                  <p className="text-muted-foreground mb-6">
                    Принципы ESG и экономика замкнутого цикла
                  </p>
                  <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1A1F2C] rounded-lg flex items-center justify-center mb-6">
                    <Icon name="TrendingUp" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1A1F2C] mb-4">Инвесторам</h3>
                  <p className="text-muted-foreground mb-6">
                    Финансовая отчетность и корпоративные события
                  </p>
                  <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                    Перейти в раздел
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="factory" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-[#1EAEDB] font-semibold text-sm uppercase tracking-wider">О заводе</span>
                <h2 className="font-heading font-bold text-4xl text-[#1A1F2C] mt-4 mb-6">
                  Ключевые факты о производстве
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1EAEDB]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={24} className="text-[#1EAEDB]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#1A1F2C] mb-2">370 бутылок в минуту</h4>
                      <p className="text-muted-foreground">С конвейеров сходит до 2,5 млн стеклоизделий в сутки</p>
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
                      <p className="text-muted-foreground">Площадь варочного бассейна — 130 кв.м. Высота достигает 20 метров</p>
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
          </div>
        </section>

        <section id="sustainability" className="py-20 bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-[#1EAEDB] font-semibold text-sm uppercase tracking-wider">Устойчивое развитие</span>
              <h2 className="font-heading font-bold text-4xl mt-4 mb-6">
                Экономика замкнутого цикла
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Производим стекло из стекла, используя ресурсы рационально и эффективно
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-heading font-bold text-[#1EAEDB] mb-2">90%+</div>
                  <p className="text-white/90">Продукции выпущено по облегчающим технологиям</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-heading font-bold text-[#1EAEDB] mb-2">132К</div>
                  <p className="text-white/90">Тонн вторичного сырья перерабатывается в год</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-heading font-bold text-[#1EAEDB] mb-2">75%</div>
                  <p className="text-white/90">Доля на рынке Сибири и Дальнего Востока</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-heading font-bold text-[#1EAEDB] mb-2">100%</div>
                  <p className="text-white/90">Брак и стекольный бой возвращаются в производство</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="media" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-[#1EAEDB] font-semibold text-sm uppercase tracking-wider">Медиа</span>
              <h2 className="font-heading font-bold text-4xl text-[#1A1F2C] mt-4 mb-6">
                Новости и события
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, index) => (
                <Card key={item} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9]"></div>
                  <CardContent className="p-6">
                    <div className="text-sm text-[#1EAEDB] font-semibold mb-2">25 ноября 2025</div>
                    <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-3">
                      Заголовок новости о достижениях компании
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Краткое описание новости или события, которое произошло в компании...
                    </p>
                    <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="buyers" className="py-20 bg-gradient-to-br from-[#F0F9FF] to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-[#1EAEDB] font-semibold text-sm uppercase tracking-wider">Покупателям</span>
                <h2 className="font-heading font-bold text-4xl text-[#1A1F2C] mt-4 mb-6">
                  Преимущества стеклянной упаковки
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Абсолютно нейтральное — не выделяет веществ и запахов</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Подлежит переработке бессчетное количество раз без потери качества</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Устойчиво к влиянию агрессивных веществ и внешней среды</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={24} className="text-[#1EAEDB] flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Изготавливается из натуральных природных компонентов</p>
                  </div>
                </div>
                <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white px-8">
                  Оставить заявку
                </Button>
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
                  <div className="text-sm">Коэффициент выхода годной продукции</div>
                </div>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#1EAEDB] p-6 flex flex-col justify-end text-white">
                  <div className="text-3xl font-heading font-bold mb-2">24/7</div>
                  <div className="text-sm">Непрерывное производство</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <span className="text-[#1EAEDB] font-semibold text-sm uppercase tracking-wider">Карьера</span>
              <h2 className="font-heading font-bold text-4xl text-[#1A1F2C] mt-4 mb-6">
                Работа у нас
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Коллектив «Сибстекла» объединяет как опытных сотрудников, так и молодых специалистов, готовых к профессиональному развитию на крупном производственном предприятии
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="p-6 bg-[#F0F9FF] rounded-xl">
                  <div className="w-16 h-16 bg-[#1EAEDB] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="GraduationCap" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-3">Обучение</h3>
                  <p className="text-muted-foreground">Готовы обучать уникальным профессиям с наставниками</p>
                </div>

                <div className="p-6 bg-[#F0F9FF] rounded-xl">
                  <div className="w-16 h-16 bg-[#0EA5E9] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-3">Рост</h3>
                  <p className="text-muted-foreground">Зарплата зависит от профессионального мастерства</p>
                </div>

                <div className="p-6 bg-[#F0F9FF] rounded-xl">
                  <div className="w-16 h-16 bg-[#1A1F2C] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-3">Стабильность</h3>
                  <p className="text-muted-foreground">Социальные программы и уверенность в будущем</p>
                </div>
              </div>

              <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white px-8 py-6 text-lg">
                Смотреть вакансии
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts" className="bg-[#1A1F2C] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">О компании</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">О нас</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">История</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Достижения</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Команда</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Покупателям</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Продукция</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Оставить заявку</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Поставщикам</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Прием стеклоотходов</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Новости</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">СМИ о нас</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Галерея</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Антикоррупция</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>630047, Новосибирская область</li>
                <li>г. Новосибирск</li>
                <li>ул. Даргомыжского, 8а, стр.20</li>
                <li className="pt-2">
                  <a href="mailto:sibstek@sibstek.ru" className="text-[#1EAEDB] hover:text-[#0EA5E9] transition-colors">
                    sibstek@sibstek.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2025 ООО «Сибирское стекло». Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1EAEDB] transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1EAEDB] transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1EAEDB] transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1EAEDB] transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
