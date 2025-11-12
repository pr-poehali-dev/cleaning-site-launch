import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const services = [
    { icon: 'Building2', title: 'Торговые центры', desc: 'Комплексная уборка ТЦ любой площади' },
    { icon: 'Store', title: 'Рестораны', desc: 'Поддержание санитарных норм и чистоты' },
    { icon: 'ShoppingCart', title: 'Гипермаркеты', desc: 'Ежедневная уборка торговых залов' },
    { icon: 'Briefcase', title: 'Бизнес-центры', desc: 'Офисные помещения и общие зоны' },
    { icon: 'Warehouse', title: 'Склады', desc: 'Промышленная уборка складских помещений' },
    { icon: 'Car', title: 'Автосалоны', desc: 'Поддержание идеальной чистоты шоу-румов' },
    { icon: 'Factory', title: 'Промышленные предприятия', desc: 'Уборка производственных цехов' },
    { icon: 'Dumbbell', title: 'Фитнес-залы', desc: 'Санитарная обработка спортивных зон' }
  ];

  const team = [
    { name: 'Анна Петрова', role: 'Руководитель отдела', image: 'https://cdn.poehali.dev/projects/c937eb03-dafc-4a55-838a-6a840af85dad/files/4a6e9581-79ba-41d8-a262-cdba6516c599.jpg' },
    { name: 'Дмитрий Иванов', role: 'Старший супервайзер', image: 'https://cdn.poehali.dev/projects/c937eb03-dafc-4a55-838a-6a840af85dad/files/4a6e9581-79ba-41d8-a262-cdba6516c599.jpg' },
    { name: 'Елена Сидорова', role: 'Специалист по клиентам', image: 'https://cdn.poehali.dev/projects/c937eb03-dafc-4a55-838a-6a840af85dad/files/4a6e9581-79ba-41d8-a262-cdba6516c599.jpg' }
  ];

  const reviews = [
    { name: 'Александр К.', company: 'ТЦ "Метрополис"', text: 'Работаем с компанией уже 2 года. Всегда качественно и в срок. Рекомендуем!', rating: 5 },
    { name: 'Ирина М.', company: 'Сеть ресторанов "Вкусно"', text: 'Профессиональный подход к каждому объекту. Команда отзывчивая и пунктуальная.', rating: 5 },
    { name: 'Сергей П.', company: 'БЦ "Омега Плаза"', text: 'Отличный сервис! Офис всегда в идеальном состоянии. Цена соответствует качеству.', rating: 5 }
  ];

  const faq = [
    { q: 'Какие объекты вы обслуживаете?', a: 'Мы специализируемся на коммерческих объектах: торговые центры, рестораны, гипермаркеты, бизнес-центры, склады, автосалоны, промышленные предприятия и фитнес-залы.' },
    { q: 'Как быстро можно начать работу?', a: 'После согласования договора мы готовы приступить к работе в течение 2-3 рабочих дней.' },
    { q: 'Есть ли у вас своя техника?', a: 'Да, у нас собственный парк профессионального оборудования и экологичных средств для уборки.' },
    { q: 'Работаете ли вы в выходные?', a: 'Да, мы работаем 24/7 и можем проводить уборку в удобное для вас время, включая выходные и ночные часы.' },
    { q: 'Какие гарантии качества вы предоставляете?', a: 'Мы предоставляем гарантию на все виды работ. Если вас что-то не устроит, мы бесплатно переделаем в течение 24 часов.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">КлинингПро</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#team" className="hover:text-primary transition-colors">Команда</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition-colors">Вопросы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональный клининг для вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Комплексное обслуживание коммерческих объектов с гарантией качества. 
                Работаем 24/7 с собственным оборудованием.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground mt-1">Объектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">5 лет</div>
                  <div className="text-sm text-muted-foreground mt-1">На рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Работаем</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/c937eb03-dafc-4a55-838a-6a840af85dad/files/4a6e9581-79ba-41d8-a262-cdba6516c599.jpg" 
                alt="Профессиональная команда клининга"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Специализируемся на уборке коммерческих объектов любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Профессионалы своего дела</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Оставьте заявку</h2>
            <p className="text-xl text-white/90">Мы свяжемся с вами в течение 15 минут</p>
          </div>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя *</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон *</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="border-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="info@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем объекте и требованиях..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="border-2"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={28} className="text-primary" />
                <span className="text-xl font-bold">КлинингПро</span>
              </div>
              <p className="text-gray-400">Профессиональный клининг для коммерческих объектов</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@kliningsrv.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-400">
                <div>Торговые центры</div>
                <div>Бизнес-центры</div>
                <div>Рестораны</div>
                <div>Промышленные объекты</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">График работы</h4>
              <div className="text-gray-400">
                <div className="mb-2">Круглосуточно 24/7</div>
                <div className="flex gap-3 mt-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    <Icon name="Instagram" size={24} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <Icon name="Facebook" size={24} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <Icon name="Linkedin" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 КлинингПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
