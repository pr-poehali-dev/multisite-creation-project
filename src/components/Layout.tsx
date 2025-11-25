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
              <div className="w-12 h-12 bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9] rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">СС</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-[#1A1F2C]">Сибирское стекло</div>
                <div className="text-xs text-muted-foreground">РАТМ Холдинг</div>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.href
                    ? 'text-[#1EAEDB]'
                    : 'text-[#1A1F2C] hover:text-[#1EAEDB]'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#1EAEDB] transition-all ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contacts">
              <Button className="hidden lg:flex bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white">
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
                      className={`text-lg font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-[#1EAEDB]'
                          : 'text-[#1A1F2C] hover:text-[#1EAEDB]'
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

      <footer className="bg-[#1A1F2C] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">О компании</h4>
              <ul className="space-y-2">
                <li><Link to="/factory" className="text-white/70 hover:text-[#1EAEDB] transition-colors">О нас</Link></li>
                <li><Link to="/factory" className="text-white/70 hover:text-[#1EAEDB] transition-colors">История</Link></li>
                <li><Link to="/factory" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Достижения</Link></li>
                <li><Link to="/factory" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Команда</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Покупателям</h4>
              <ul className="space-y-2">
                <li><Link to="/buyers" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Продукция</Link></li>
                <li><Link to="/buyers" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Оставить заявку</Link></li>
                <li><Link to="/buyers" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Поставщикам</Link></li>
                <li><Link to="/buyers" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Прием стеклоотходов</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><Link to="/media" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Новости</Link></li>
                <li><Link to="/media" className="text-white/70 hover:text-[#1EAEDB] transition-colors">СМИ о нас</Link></li>
                <li><Link to="/media" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Галерея</Link></li>
                <li><Link to="/sustainability" className="text-white/70 hover:text-[#1EAEDB] transition-colors">Антикоррупция</Link></li>
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

export default Layout;
