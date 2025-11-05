import React from 'react';

const Contact = () => {
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
            <form className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-300">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-semibold text-gray-300">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="event-type" className="block mb-2 font-semibold text-gray-300">Tipo de evento</label>
                <select
                  id="event-type"
                  name="event-type"
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="boda">Boda</option>
                  <option value="quinceañera">Quinceañera</option>
                  <option value="serenata">Serenata</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="familiar">Fiesta Familiar</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="date" className="block mb-2 font-semibold text-gray-300">Fecha del evento</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-300">Mensaje adicional</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <button type="submit" className="w-full inline-block bg-amber-400 text-black font-semibold rounded-lg px-6 py-3 hover:bg-amber-500 transition-colors">
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
                  <h3 className="font-serif text-xl text-amber-400 mb-2">Teléfono</h3>
                  <p className="text-gray-300 mb-1">(123) 456-7890</p>
                  <p className="text-gray-400 text-sm">Disponible 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-serif text-xl text-amber-400 mb-2">Email</h3>
                  <p className="text-gray-300 mb-1">info@mariachi.com</p>
                  <p className="text-gray-400 text-sm">Respuesta en 24 hrs</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-serif text-xl text-amber-400 mb-2">Ubicación</h3>
                  <p className="text-gray-300 mb-1">Ciudad de México</p>
                  <p className="text-gray-400 text-sm">Servicio a domicilio</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 text-center">
              <h3 className="text-amber-400 mb-4 font-serif text-xl">¿Evento de último momento?</h3>
              <p className="mb-6 text-gray-300">Llama directamente para eventos urgentes</p>
              <a
                href="tel:+1234567890"
                className="inline-block px-6 py-3 border-2 border-amber-400 text-amber-400 rounded-full font-semibold hover:bg-amber-400 hover:text-black transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;