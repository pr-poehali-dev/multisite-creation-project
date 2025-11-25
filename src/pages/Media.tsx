import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Media = () => {
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
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">Медиа</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Новости, события и публикации о компании
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="news">Новости</TabsTrigger>
            <TabsTrigger value="press">СМИ о нас</TabsTrigger>
            <TabsTrigger value="gallery">Галерея</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <Card key={item} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9]"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-[#1EAEDB] font-semibold mb-2">
                      <Icon name="Calendar" size={16} />
                      <span>25 ноября 2025</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-3">
                      Важное событие в компании «Сибстекло»
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Краткое описание новости или события, которое произошло в компании. Достижения, награды, новые проекты развития...
                    </p>
                    <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white px-8">
                Загрузить еще
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="press" className="space-y-8">
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Card key={item} className="border-none shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-32 bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9] rounded-lg flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Icon name="Newspaper" size={16} />
                          <span>Название издания</span>
                          <span className="text-[#1EAEDB]">•</span>
                          <span>20 ноября 2025</span>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-[#1A1F2C] mb-3">
                          Заголовок публикации в СМИ о деятельности компании
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm">
                          Краткая выдержка из статьи или публикации о компании «Сибирское стекло», ее достижениях и значимых событиях...
                        </p>
                        <Button variant="link" className="text-[#1EAEDB] p-0 h-auto font-semibold">
                          Читать на сайте издания
                          <Icon name="ExternalLink" size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white px-8">
                Показать больше
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                <div
                  key={item}
                  className="aspect-square bg-gradient-to-br from-[#1EAEDB] to-[#0EA5E9] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white/20">
                    <Icon name="Image" size={48} />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#F0F9FF] to-white p-8 rounded-2xl">
              <div className="text-center">
                <Icon name="Video" size={48} className="text-[#1EAEDB] mx-auto mb-4" />
                <h3 className="font-heading font-bold text-2xl text-[#1A1F2C] mb-4">Видеогалерея</h3>
                <p className="text-muted-foreground mb-6">
                  Видеоматериалы о производстве, экскурсиях и событиях компании
                </p>
                <Button className="bg-[#1EAEDB] hover:bg-[#0EA5E9] text-white">
                  Смотреть видео
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 animate-fade-in">
          <div className="bg-gradient-to-br from-[#1A1F2C] to-[#2D3748] text-white p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl mb-4">Контакты для СМИ</h2>
                <p className="text-white/80 mb-6">
                  По вопросам размещения информации и для журналистских запросов
                </p>
                <div className="space-y-3 text-white/90">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-[#1EAEDB]" />
                    <span>press@ratm.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-[#1EAEDB]" />
                    <span>+7 (383) 363-37-70</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="User" size={20} className="text-[#1EAEDB]" />
                    <span>Ирина Видулина</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-4">Правила использования</h3>
                <p className="text-white/80 mb-6 text-sm">
                  При использовании материалов сайта необходима ссылка на источник. Фото- и видеоматериалы могут быть использованы только для сопровождения материалов о деятельности ООО «Сибстекло»
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
