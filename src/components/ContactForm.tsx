
import { useRef } from 'react';

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here would be an API call to submit the form data
    // For now, we'll just log the form data and show an alert
    
    console.log({
      name: nameRef.current?.value,
      phone: phoneRef.current?.value,
      address: addressRef.current?.value,
      message: messageRef.current?.value
    });
    
    alert('Заявка успешно отправлена! Наш менеджер свяжется с вами в ближайшее время.');
    
    // Reset form
    if (nameRef.current) nameRef.current.value = '';
    if (phoneRef.current) phoneRef.current.value = '';
    if (addressRef.current) addressRef.current.value = '';
    if (messageRef.current) messageRef.current.value = '';
  };

  return (
    <div className="md:col-span-3">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Оставить заявку на подключение</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ваше имя *
            </label>
            <input 
              type="text"
              id="name"
              ref={nameRef}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
              placeholder="Введите ваше имя"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон *
            </label>
            <input 
              type="tel"
              id="phone"
              ref={phoneRef}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Адрес подключения *
            </label>
            <input 
              type="text"
              id="address"
              ref={addressRef}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
              placeholder="Казань, ул. ..."
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Комментарий
            </label>
            <textarea 
              id="message"
              ref={messageRef}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
              placeholder="Дополнительная информация или пожелания"
            ></textarea>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="policy"
                name="policy"
                type="checkbox"
                required
                className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="policy" className="text-gray-600">
                Я согласен на обработку моих персональных данных в соответствии с{' '}
                <a href="#" className="text-skynet-blue hover:underline">
                  политикой конфиденциальности
                </a>
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-skynet-orange to-skynet-orange-dark hover:from-skynet-orange-bright hover:to-skynet-orange text-white font-medium py-3 rounded-lg shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1"
          >
            Подключиться
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
