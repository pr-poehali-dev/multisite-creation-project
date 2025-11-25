import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'Завод', href: '/factory' },
    { label: 'Устойчивое развитие', href: '/sustainability' },
    { label: 'Инвесторам', href: '/investors' },
    { label: 'Медиа', href: '/media' },
    { label: 'Покупателям', href: '/buyers' },
    { label: 'Карьера', href: '/career' },
    { label: 'Контакты', href: '/contacts' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2B6EE6] to-[#1E50B8] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-xl">СС</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-[#1A2332]">Сибирское стекло</div>
                <div className="text-xs text-muted-foreground">РАТМ Холдинг</div>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-semibold transition-colors relative group ${
                  location.pathname === item.href
                    ? 'text-[#2B6EE6]'
                    : 'text-[#1A2332] hover:text-[#2B6EE6]'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#2B6EE6] to-[#1E50B8] rounded-full transition-all ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contacts">
              <Button className="hidden lg:flex bg-gradient-to-r from-[#2B6EE6] to-[#1E50B8] hover:shadow-lg hover:scale-105 transition-all text-white font-semibold rounded-xl">
                Связаться с нами
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`text-lg font-semibold transition-colors ${
                        location.pathname === item.href
                          ? 'text-[#2B6EE6]'
                          : 'text-[#1A2332] hover:text-[#2B6EE6]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24">
        {children}
      </main>

      <footer className="bg-gradient-to-br from-[#1A2332] to-[#0F1419] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2B6EE6] opacity-5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">О компании</h4>
              <ul className="space-y-2">
                <li><Link to="/factory" className="text-white/70 hover:text-[#2B6EE6] transition-colors">О нас</Link></li>
                <li><Link to="/factory" className="text-white/70 hover:text-[#2B6EE6] transition-colors">История</Link></li>
                <li><Link to="/factory" className="text-white/70 hover:text-[#2B6EE6] transition-colors">Достижения</Link></li>
                <li><Link to="/factory" className="text-white/70 hover:text-[#2B6EE6] transition-colors">Команда</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Покупателям</h4>
              <ul className="space-y-2">
                <li><Link to="/buyers" className="text-white/70 hover:text-[#2B6EE6] transition-colors">Продукция</Link></li>
                <li><Link to="/buyers" className="text-white/70 hover:text-[#2B6EE6] transition-colors">Оставить заявку</Link></li>
                <li><Link to="/buyers" className="text-white/70 hover:text-[#2B6EE6] transition-colors">Поставщикам</Link></li>
                <li><Link to="/buyers" className="text-white/70 hover:text-[#2B6EE6] transition-colors">Прием стеклоотходов</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><Link to="/media" className="text-white/70 hover:text-[#2B6EE6] transition-colors">Новости</Link></li>
                <li><Link to="/media" className="text-white/70 hover:text-[#2B6EE6] transition-colors">СМИ о нас</Link></li>
                <li><Link to="/media" className="text-white/70 hover:text-[#2B6EE6] transition-colors">Галерея</Link></li>
                <li><Link to="/sustainability" className="text-white/70 hover:text-[#2B6EE6] transition-colors">Антикоррупция</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>630047, Новосибирская область</li>
                <li>г. Новосибирск</li>
                <li>ул. Даргомыжского, 8а, стр.20</li>
                <li className="pt-2">
                  <a href="mailto:sibstek@sibstek.ru" className="text-[#2B6EE6] hover:text-[#4080FF] transition-colors font-semibold">
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
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2B6EE6] hover:to-[#1E50B8] transition-all duration-300 hover:scale-110">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2B6EE6] hover:to-[#1E50B8] transition-all duration-300 hover:scale-110">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2B6EE6] hover:to-[#1E50B8] transition-all duration-300 hover:scale-110">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2B6EE6] hover:to-[#1E50B8] transition-all duration-300 hover:scale-110">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;