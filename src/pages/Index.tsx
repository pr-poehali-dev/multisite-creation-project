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
      <section className="relative h-[650px] overflow-hidden -mt-24 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1419] via-[#1A2332]/95 to-[#2B6EE6]/20 z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2B6EE6] opacity-20 rounded-full blur-3xl"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-30"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#2B6EE6]/20 to-[#1E50B8]/20 rounded-full border border-[#2B6EE6]/30 mb-6">
              <span className="text-[#4080FF] font-semibold text-sm">Партнер национальных проектов России</span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-[#4080FF] font-semibold mb-4">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl leading-relaxed">
              {slides[currentSlide].description}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/factory">
                <Button className="bg-gradient-to-r from-[#2B6EE6] to-[#1E50B8] hover:shadow-2xl hover:shadow-[#2B6EE6]/50 hover:scale-105 transition-all text-white px-10 py-7 text-lg font-semibold rounded-xl">
                  Узнать больше
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/buyers">
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-[#1A2332] px-10 py-7 text-lg font-semibold rounded-xl backdrop-blur-sm">
                  Наша продукция
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#2B6EE6] w-12' : 'bg-white/40 w-8'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2B6EE6] opacity-5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/media" className="group">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all animate-fade-in cursor-pointer h-full overflow-hidden rounded-2xl">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2B6EE6]/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2B6EE6] to-[#1E50B8] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="Newspaper" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1A2332] mb-4 group-hover:text-[#2B6EE6] transition-colors">Новости</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Актуальные события и достижения компании
                  </p>
                  <div className="flex items-center text-[#2B6EE6] font-semibold group-hover:gap-3 transition-all">
                    Читать все новости
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/sustainability" className="group">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all animate-fade-in cursor-pointer h-full overflow-hidden rounded-2xl" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#10B981]/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="Leaf" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1A2332] mb-4 group-hover:text-[#10B981] transition-colors">Устойчивое развитие</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Принципы ESG и экономика замкнутого цикла
                  </p>
                  <div className="flex items-center text-[#10B981] font-semibold group-hover:gap-3 transition-all">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/investors" className="group">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all animate-fade-in cursor-pointer h-full overflow-hidden rounded-2xl" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F59E0B]/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="TrendingUp" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1A2332] mb-4 group-hover:text-[#F59E0B] transition-colors">Инвесторам</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Финансовая отчетность и корпоративные события
                  </p>
                  <div className="flex items-center text-[#F59E0B] font-semibold group-hover:gap-3 transition-all">
                    Перейти в раздел
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 bg-[#2B6EE6]/10 text-[#2B6EE6] font-semibold text-sm rounded-full mb-6">О заводе</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#1A2332] mb-8 leading-tight">
                Ключевые факты о производстве
              </h2>
              <div className="space-y-6">
                <div className="flex gap-5 group hover:translate-x-2 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2B6EE6] to-[#1E50B8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon name="Zap" size={26} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-[#1A2332] mb-2">370 бутылок в минуту</h4>
                    <p className="text-muted-foreground leading-relaxed">С конвейеров сходит до 2,5 млн стеклоизделий в сутки</p>
                  </div>
                </div>
                <div className="flex gap-5 group hover:translate-x-2 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2B6EE6] to-[#1E50B8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon name="Factory" size={26} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-[#1A2332] mb-2">900 млн единиц в год</h4>
                    <p className="text-muted-foreground leading-relaxed">Производительность завода. Если разместить все бутылки в ряд — линия будет в 1,4 раза длиннее экватора</p>
                  </div>
                </div>
                <div className="flex gap-5 group hover:translate-x-2 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2B6EE6] to-[#1E50B8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon name="Flame" size={26} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-[#1A2332] mb-2">Крупнейшая печь в России</h4>
                    <p className="text-muted-foreground leading-relaxed">Площадь варочного бассейна — 130 кв.м. Высота достигает 20 метров</p>
                  </div>
                </div>
              </div>
              <Link to="/factory">
                <Button className="mt-10 bg-gradient-to-r from-[#2B6EE6] to-[#1E50B8] hover:shadow-xl hover:scale-105 transition-all text-white px-8 py-6 text-lg font-semibold rounded-xl">
                  Подробнее о заводе
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-[#2B6EE6] opacity-10 rounded-full blur-3xl"></div>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <img
                  src="https://cdn.poehali.dev/files/8e07b569-b150-4f85-a55d-8026bc955f64.png"
                  alt="Производство стеклотары"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-[#2B6EE6] to-[#1E50B8] rounded-3xl -z-10 opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#1A2332] via-[#0F1419] to-[#1A2332] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2B6EE6] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2B6EE6] opacity-10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-[#2B6EE6]/20 text-[#4080FF] font-semibold text-sm rounded-full border border-[#2B6EE6]/30 mb-6">Устойчивое развитие</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Экономика замкнутого цикла
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Производим стекло из стекла, используя ресурсы рационально и эффективно
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/15 transition-all animate-fade-in rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-heading font-bold bg-gradient-to-br from-[#4080FF] to-[#2B6EE6] bg-clip-text text-transparent mb-3">90%+</div>
                <p className="text-white/90 leading-relaxed">Продукции выпущено по облегчающим технологиям</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/15 transition-all animate-fade-in rounded-2xl" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-heading font-bold bg-gradient-to-br from-[#4080FF] to-[#2B6EE6] bg-clip-text text-transparent mb-3">132К</div>
                <p className="text-white/90 leading-relaxed">Тонн вторичного сырья перерабатывается в год</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/15 transition-all animate-fade-in rounded-2xl" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-heading font-bold bg-gradient-to-br from-[#4080FF] to-[#2B6EE6] bg-clip-text text-transparent mb-3">75%</div>
                <p className="text-white/90 leading-relaxed">Доля на рынке Сибири и Дальнего Востока</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/15 transition-all animate-fade-in rounded-2xl" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-heading font-bold bg-gradient-to-br from-[#4080FF] to-[#2B6EE6] bg-clip-text text-transparent mb-3">100%</div>
                <p className="text-white/90 leading-relaxed">Брак и стекольный бой возвращаются в производство</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
