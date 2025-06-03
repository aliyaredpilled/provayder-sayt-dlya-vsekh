
const ContactMap = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Мы на карте</h3>
      <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
        <div style={{position:"relative", overflow:"hidden", height:"100%"}}>
          <a href="https://yandex.ru/maps/org/skaynet/20535149244/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"0px"}}>Скайнет</a>
          <a href="https://yandex.ru/maps/43/kazan/category/internet_service_provider/184105748/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"14px"}}>Интернет-провайдер в Казани</a>
          <a href="https://yandex.ru/maps/43/kazan/category/ip_telephony/184105732/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"28px"}}>IP-телефония в Казани</a>
          <iframe 
            src="https://yandex.ru/map-widget/v1/?ll=49.200050%2C55.812355&mode=search&oid=20535149244&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJQnxgx38B9T8RARQjS%2BZY4T8iBgABAgMEBSgKOABArosGSAFqAnJ1nQHNzMw9oAEAqAEAvQGLmWMKwgEFvIX2v0yCAhvRgdC60LDQudC90LXRgiDQstC%2B0YHRhdC%2B0LSKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=49.200050%2C55.812355&sspn=0.500944%2C0.206545&text=%D1%81%D0%BA%D0%B0%D0%B9%D0%BD%D0%B5%D1%82%20%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4&z=11.39" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy" 
            title="Карта расположения офиса SKYNET"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
