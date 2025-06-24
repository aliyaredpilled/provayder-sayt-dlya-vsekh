import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/PricingPlans";
import ContactSection from "@/components/ContactSection";
import { CheckCircle2, ArrowDown } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const Tariffs = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <PricingPlans />
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Сравнение тарифных планов</h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-skynet-gray-light">
                    <TableHead className="text-gray-900 font-semibold">Характеристики</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">300 Мбит/с</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">600 Мбит/с</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">900 Мбит/с</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">2 Гбит/с</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">3 Гбит/с</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-gray-700">Скорость</TableCell>
                    <TableCell className="text-center text-gray-900">300 Мбит/с</TableCell>
                    <TableCell className="text-center text-gray-900">600 Мбит/с</TableCell>
                    <TableCell className="text-center text-gray-900">900 Мбит/с</TableCell>
                    <TableCell className="text-center text-gray-900">2 Гбит/с</TableCell>
                    <TableCell className="text-center text-gray-900">3 Гбит/с</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableCell className="text-gray-700">Ежемесячная плата</TableCell>
                    <TableCell className="text-center text-gray-900">900 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">1100 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">2000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">3500 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">4500 ₽</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-700">Wi-Fi роутер</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-700">Подключение</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableCell className="text-gray-700">Технология</TableCell>
                    <TableCell className="text-center text-gray-900">Оптоволокно</TableCell>
                    <TableCell className="text-center text-gray-900">Оптоволокно</TableCell>
                    <TableCell className="text-center text-gray-900">Оптоволокно</TableCell>
                    <TableCell className="text-center text-gray-900">XG-PON</TableCell>
                    <TableCell className="text-center text-gray-900">XG-PON</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Часто задаваемые вопросы о тарифах</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Что такое технология XG-PON?</h3>
                <p className="text-gray-700">XG-PON (10-Gigabit-capable Passive Optical Network) - это технология пассивной оптической сети, обеспечивающая скорость передачи данных до 10 Гбит/с. Это более современный стандарт, чем GPON, который позволяет достигать высоких скоростей интернета для домашнего использования.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Могу ли я менять тарифный план?</h3>
                <p className="text-gray-700">Да, вы можете изменить свой тарифный план в любое время через личный кабинет или обратившись в нашу службу поддержки. Изменение тарифа происходит с начала следующего расчетного периода.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Как заказать дополнительные услуги?</h3>
                <p className="text-gray-700">Дополнительные услуги, такие как статический IP-адрес, антивирус или родительский контроль, можно заказать через личный кабинет в разделе "Дополнительные услуги" или связавшись с нашими операторами по телефону.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Есть ли скидки для новых клиентов?</h3>
                <p className="text-gray-700">Да, для новых клиентов действуют специальные акции и скидки. Актуальные предложения вы всегда можете увидеть на нашем сайте или уточнить у операторов при подключении.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-skynet-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Преимущества наших тарифов</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-12 w-12 text-skynet-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Без скрытых платежей</h3>
                <p className="text-white/80">Прозрачные условия без дополнительных комиссий</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-12 w-12 text-skynet-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart-TV в подарок</h3>
                <p className="text-white/80">120 телеканалов в цифровом качестве бесплатно</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-12 w-12 text-skynet-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Безлимитный трафик</h3>
                <p className="text-white/80">Пользуйтесь интернетом без ограничений</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Tariffs;
