import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Свяжусь с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">WebСтудия</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Заказать сайт</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Создание сайтов для{" "}
                <span className="gradient-orange-black bg-clip-text text-transparent">
                  начинающих бизнесменов
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональные сайты на платформе Tilda. Быстро, качественно, доступно.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Заказать от 3000₽
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Примеры работ
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 gradient-orange-black opacity-20 blur-3xl rounded-full"></div>
              <div className="relative bg-secondary rounded-2xl p-8 flex items-center justify-center h-[400px]">
                <Icon name="Layout" size={120} className="text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Что я создаю
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all hover-scale">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="Globe" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Лендинги</h3>
              <p className="text-muted-foreground">
                Одностраничные сайты для презентации товаров или услуг с формой заявки
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover-scale">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="ShoppingBag" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Визитки</h3>
              <p className="text-muted-foreground">
                Стильные сайты-визитки для личного бренда или небольшой компании
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover-scale">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="Smartphone" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Адаптивность</h3>
              <p className="text-muted-foreground">
                Все сайты идеально выглядят на телефонах, планшетах и компьютерах
              </p>
            </Card>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Договорная цена от 3000₽</h3>
            <p className="text-xl opacity-90 mb-6">
              Стоимость зависит от сложности проекта и ваших пожеланий
            </p>
            <Button size="lg" variant="secondary" className="text-lg">
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Портфолио
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Недавно окончил курс по созданию сайтов на Tilda. Этот сайт — мой первый проект и пример моей работы для будущих клиентов. Лиха беда начало! 🚀
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <img 
                src="/img/53387e42-3635-4e07-864b-fd9abdca44a7.jpg" 
                alt="Пример работы" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Этот сайт</h3>
                <p className="text-muted-foreground mb-4">
                  Лендинг для веб-студии с современным дизайном
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tilda</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Адаптивный</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Форма заявки</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-dashed border-2 flex items-center justify-center p-12">
              <div className="text-center">
                <Icon name="Plus" size={64} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Ваш проект</h3>
                <p className="text-muted-foreground">
                  Здесь может быть ваш сайт. Давайте создадим его вместе!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Оставить заявку
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Расскажите о своем проекте, и я свяжусь с вами в течение дня
          </p>

          <Card className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email или телефон</label>
                <Input 
                  placeholder="Как с вами связаться?"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Описание проекта</label>
                <Textarea 
                  placeholder="Расскажите, какой сайт вам нужен..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">WebСтудия</h3>
              <p className="opacity-80">
                Создание современных сайтов для вашего бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 opacity-80">
                <a href="#services" className="block hover:text-primary transition-colors">Услуги</a>
                <a href="#portfolio" className="block hover:text-primary transition-colors">Портфолио</a>
                <a href="#contact" className="block hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-80">
                <p>Email: info@webstudio.ru</p>
                <p>Telegram: @webstudio</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center opacity-60">
            <p>&copy; 2025 WebСтудия. Начинаем с малого — идём к большому 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
