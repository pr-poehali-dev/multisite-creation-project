import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <section className="relative h-[600px] overflow-hidden -mt-24 pt-24">
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
              <Link to="/factory">
                <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white px-8 py-6 text-lg">
                  Узнать больше
                </Button>
              </Link>
              <Link to="/buyers">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] px-8 py-6 text-lg">
                  Наша продукция
                </Button>
              </Link>
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
            <Link to="/media">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1EAEDB] rounded-lg flex items-center justify-center mb-6">
                    <Icon name="Newspaper" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1A1F2C] mb-4">Новости</h3>
                  <p className="text-muted-foreground mb-6">
                    Актуальные события и достижения компании
                  </p>
                  <div className="flex items-center text-[#1EAEDB] font-semibold">
                    Читать все новости
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/sustainability">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in cursor-pointer h-full" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#0EA5E9] rounded-lg flex items-center justify-center mb-6">
                    <Icon name="Leaf" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1A1F2C] mb-4">Устойчивое развитие</h3>
                  <p className="text-muted-foreground mb-6">
                    Принципы ESG и экономика замкнутого цикла
                  </p>
                  <div className="flex items-center text-[#1EAEDB] font-semibold">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/investors">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in cursor-pointer h-full" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1A1F2C] rounded-lg flex items-center justify-center mb-6">
                    <Icon name="TrendingUp" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1A1F2C] mb-4">Инвесторам</h3>
                  <p className="text-muted-foreground mb-6">
                    Финансовая отчетность и корпоративные события
                  </p>
                  <div className="flex items-center text-[#1EAEDB] font-semibold">
                    Перейти в раздел
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
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
              <Link to="/factory">
                <Button className="mt-8 bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white">
                  Подробнее о заводе
                </Button>
              </Link>
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

      <section className="py-20 bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] text-white">
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
    </Layout>
  );
};

export default Index;
