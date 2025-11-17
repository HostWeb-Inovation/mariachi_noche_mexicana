import React, { useState, useEffect } from 'react';

const Contact = () => {
  // Estado para el formulario
  const [eventDate, setEventDate] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  
  // Estado para el modal y datos del formulario
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  // Calcular fechas mínima y máxima al montar el componente
  useEffect(() => {
    const today = new Date();
    
    // Fecha mínima: hoy + 3 días
    const minimumDate = new Date(today);
    minimumDate.setDate(today.getDate() + 3);
    
    // Fecha máxima: 1 año adelante
    const maximumDate = new Date(today);
    maximumDate.setFullYear(today.getFullYear() + 1);
    
    // Formatear a YYYY-MM-DD para el input
    setMinDate(minimumDate.toISOString().split('T')[0]);
    setMaxDate(maximumDate.toISOString().split('T')[0]);
  }, []);

  // Manejar cambio de fecha
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setEventDate(selectedDate);
  };

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  // Preparar mensaje para compartir
  const prepareMessage = () => {
    const eventTypeNames = {
      'boda': 'Boda',
      'quinceañera': 'XV Años',
      'serenata': 'Serenata',
      'corporativo': 'Evento Corporativo',
      'familiar': 'Fiesta Familiar',
      'otro': 'Otro'
    };

    return `
🎵 *Solicitud de Cotización - Mariachi Noche Mexicana*

👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone}
🎉 *Tipo de evento:* ${eventTypeNames[formData.eventType] || formData.eventType}
📅 *Fecha del evento:* ${eventDate}
${formData.message ? `\n💬 *Mensaje adicional:*\n${formData.message}` : ''}
    `.trim();
  };

  // Enviar por WhatsApp
  const sendWhatsApp = () => {
    const message = prepareMessage();
    const whatsappURL = `https://wa.me/5527060009?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    setShowModal(false);
  };

  // Enviar por Email
  const sendEmail = () => {
    const subject = `Solicitud de Cotización - ${formData.eventType}`;
    const body = prepareMessage();
    const mailtoURL = `mailto:mariachinochemusical@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoURL;
    setShowModal(false);
  };

  // TODO: Habilitar más adelante cuando se defina la implementación
  // Llamar por teléfono
  // const callPhone = () => {
  //   window.location.href = 'tel:+525611971440';
  //   setShowModal(false);
  // };

  return (
    <section id="contacto" className="pt-18 bg-black text-white">
      {/* Header Section */}
      <div className="py-16 text-center border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-4xl sm:text-5xl mb-2 text-amber-400">Contacto</h1>
          <p className="text-lg text-gray-300">¡Hagamos de tu evento algo inolvidable!</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl text-white mb-8">Solicita tu Cotización</h2>
            <form className="bg-gray-900 p-8 rounded-2xl border border-gray-800" autoComplete="off" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-300">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-all duration-300 hover:border-amber-400/50"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-all duration-300 hover:border-amber-400/50"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-semibold text-gray-300">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-all duration-300 hover:border-amber-400/50"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="event-type" className="block mb-2 font-semibold text-gray-300">Tipo de evento</label>
                <select
                  id="event-type"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-all duration-300 hover:border-amber-400/50"
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="boda">Boda</option>
                  <option value="quinceañera">XV Años</option>
                  <option value="serenata">Serenata</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="familiar">Fiesta Familiar</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="date" className="block mb-2 font-semibold text-gray-300">
                  Fecha del evento
                  <span className="text-amber-400 ml-2 text-sm">(Mínimo 3 días de anticipación)</span>
                </label>
                
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={eventDate}
                    onChange={handleDateChange}
                    min={minDate}
                    max={maxDate}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-all duration-300 hover:border-amber-400/50"
                  />
                  
                  {/* Icono de calendario */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-300">Mensaje adicional</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-all duration-300 hover:border-amber-400/50"
                ></textarea>
              </div>

              <button type="submit" className="w-full inline-block bg-amber-400 text-black font-semibold rounded-lg px-6 py-3 hover:bg-amber-500 transition-colors cursor-pointer">
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <aside>
            <h2 className="font-serif text-3xl text-white mb-8">Información de Contacto</h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-serif text-xl text-amber-400 mb-2">Teléfonos</h3>
                  <p className="text-gray-300 mb-1">+52 55 2706 0009</p>
                  <p className="text-gray-300 mb-1">+52 56 1197 1440</p>
                  <p className="text-gray-400 text-sm">Disponible 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-serif text-xl text-amber-400 mb-2">Email</h3>
                  <p className="text-gray-300 mb-1">mariachinochemusical@gmail.com</p>
                  <p className="text-gray-400 text-sm">Respuesta en 24 hrs</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-serif text-xl text-amber-400 mb-2">Ubicación</h3>
                  <p className="text-gray-300 mb-1">Ecatepec, Edo. de México</p>
                  <p className="text-gray-400 text-sm">Servicio a domicilio</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 text-center">
              <h3 className="text-amber-400 mb-4 font-serif text-xl">¿Evento de último momento?</h3>
              <p className="mb-6 text-gray-300">Llama directamente para eventos urgentes</p>
              <a
                href="https://wa.me/5527060009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-amber-400 text-amber-400 rounded-full font-semibold hover:bg-amber-400 hover:text-black transition-colors cursor-pointer"
              >
                Llamar Ahora
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Modal de opciones de contacto */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-black border border-amber-400/50 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-amber-400/20 animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">¿Cómo deseas contactarnos?</h3>
              <p className="text-gray-400 text-sm">Elige tu método preferido de comunicación</p>
            </div>

            {/* Opciones */}
            <div className="space-y-3 mb-6">
              {/* WhatsApp */}
              <button
                onClick={sendWhatsApp}
                className="w-full flex items-center gap-4 p-4 bg-green-600/20 border-2 border-green-500 rounded-xl text-white hover:bg-green-600/30 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-lg">WhatsApp</p>
                  <p className="text-sm text-gray-300">Respuesta inmediata</p>
                </div>
                <svg className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Email */}
              <button
                onClick={sendEmail}
                className="w-full flex items-center gap-4 p-4 bg-blue-600/20 border-2 border-blue-500 rounded-xl text-white hover:bg-blue-600/30 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-lg">Correo Electrónico</p>
                  <p className="text-sm text-gray-300">Formal y detallado</p>
                </div>
                <svg className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* TODO: Habilitar más adelante - Opción de llamada telefónica */}
            {/* <button
              onClick={callPhone}
              className="w-full flex items-center gap-4 p-4 bg-amber-600/20 border-2 border-amber-500 rounded-xl text-white hover:bg-amber-600/30 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <p className="font-bold text-lg">Llamada Telefónica</p>
                <p className="text-sm text-gray-300">Habla directo con nosotros</p>
              </div>
              <svg className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button> */}

            {/* Botón cancelar */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;