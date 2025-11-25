import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
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
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">Контакты</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Мы всегда рады сотрудничеству
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Основная информация</h2>
            <Card className="border-none shadow-lg mb-6">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-3">Юридический адрес</h3>
                    <p className="text-muted-foreground">
                      630047, Новосибирская область,<br />
                      г. Новосибирск,<br />
                      ул. Даргомыжского, 8а, стр.20
                    </p>
                  </div>
                  <div className="border-t pt-6">
                    <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-3">Общие вопросы</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Mail" size={20} className="text-[#1EAEDB] flex-shrink-0" />
                        <a href="mailto:sibstek@sibstek.ru" className="text-[#1EAEDB] hover:underline">
                          sibstek@sibstek.ru
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Phone" size={20} className="text-[#1EAEDB] flex-shrink-0" />
                        <a href="tel:+73833633770" className="text-[#1EAEDB] hover:underline">
                          +7 (383) 363-37-70
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-3">Реквизиты</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>ОГРН:</span>
                        <span className="font-semibold">1055406020691</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ИНН:</span>
                        <span className="font-semibold">5406305355</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8">Карта</h2>
            <div className="aspect-[4/3] bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9] rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-white/30">
                <Icon name="MapPin" size={64} />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl text-[#1A1F2C] mb-8 text-center">Контакты по направлениям</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1EAEDB] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShoppingCart" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-3">Коммерческая дирекция</h3>
                <p className="text-sm text-muted-foreground mb-4">Вопросы закупки стеклотары</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:sales@sibstek.ru" className="flex items-center gap-2 text-[#1EAEDB] hover:underline">
                    <Icon name="Mail" size={16} />
                    <span>sales@sibstek.ru</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0EA5E9] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-3">Инвесторам</h3>
                <p className="text-sm text-muted-foreground mb-4">Вопросы для инвесторов</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:ir@sibstek.ru" className="flex items-center gap-2 text-[#1EAEDB] hover:underline">
                    <Icon name="Mail" size={16} />
                    <span>ir@sibstek.ru</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1A1F2C] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Newspaper" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-3">Для СМИ</h3>
                <p className="text-sm text-muted-foreground mb-4">Пресс-служба компании</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:press@ratm.ru" className="flex items-center gap-2 text-[#1EAEDB] hover:underline">
                    <Icon name="Mail" size={16} />
                    <span>press@ratm.ru</span>
                  </a>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="User" size={16} />
                    <span>Ирина Видулина</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1EAEDB] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-3">Карьера</h3>
                <p className="text-sm text-muted-foreground mb-4">Вопросы трудоустройства</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:info@sibstek.ru" className="flex items-center gap-2 text-[#1EAEDB] hover:underline">
                    <Icon name="Mail" size={16} />
                    <span>info@sibstek.ru</span>
                  </a>
                  <a href="tel:+79130105659" className="flex items-center gap-2 text-[#1EAEDB] hover:underline">
                    <Icon name="Phone" size={16} />
                    <span>+7 (913) 010-56-59</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0EA5E9] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-3">Поставщикам</h3>
                <p className="text-sm text-muted-foreground mb-4">Вопросы поставок сырья</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:procurement@sibstek.ru" className="flex items-center gap-2 text-[#1EAEDB] hover:underline">
                    <Icon name="Mail" size={16} />
                    <span>procurement@sibstek.ru</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1A1F2C] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Recycle" size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A1F2C] mb-3">Прием стеклоотходов</h3>
                <p className="text-sm text-muted-foreground mb-4">Вопросы утилизации стекла</p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:recycling@sibstek.ru" className="flex items-center gap-2 text-[#1EAEDB] hover:underline">
                    <Icon name="Mail" size={16} />
                    <span>recycling@sibstek.ru</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] text-white p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="font-heading font-bold text-3xl mb-4">Мы в социальных сетях</h2>
              <p className="text-white/80">
                Следите за нашими новостями и событиями
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1EAEDB] transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1EAEDB] transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1EAEDB] transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1EAEDB] transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1EAEDB] transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
