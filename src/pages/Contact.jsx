

const Contact = () => {
  return (
    <div className="pt-18 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16 text-center">
        <div className="container-custom">
          <h1 className="font-serif text-5xl mb-4 text-yellow-400">Contacto</h1>
          <p className="text-xl opacity-90">¡Hagamos de tu evento algo inolvidable!</p>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 py-16">
          
          {/* Form Section */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl text-amber-800 mb-8">Solicita tu Cotización</h2>
            <form className="bg-white p-8 rounded-2xl shadow-lg shadow-black/10">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-yellow-400"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-yellow-400"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-yellow-400"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="event-type" className="block mb-2 font-semibold text-gray-700">Tipo de evento</label>
                <select 
                  id="event-type" 
                  name="event-type" 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-yellow-400"
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
                <label htmlFor="date" className="block mb-2 font-semibold text-gray-700">Fecha del evento</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-yellow-400"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Mensaje adicional</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="font-serif text-3xl text-amber-800 mb-8">Información de Contacto</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg shadow-black/10">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-serif text-xl text-amber-800 mb-2">Teléfono</h3>
                  <p className="text-gray-600 mb-1">(123) 456-7890</p>
                  <p className="text-gray-600 text-sm">Disponible 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg shadow-black/10">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-serif text-xl text-amber-800 mb-2">Email</h3>
                  <p className="text-gray-600 mb-1">info@mariachi.com</p>
                  <p className="text-gray-600 text-sm">Respuesta en 24 hrs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg shadow-black/10">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-serif text-xl text-amber-800 mb-2">Ubicación</h3>
                  <p className="text-gray-600 mb-1">Ciudad de México</p>
                  <p className="text-gray-600 text-sm">Servicio a domicilio</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-800 to-amber-900 text-white p-8 rounded-2xl text-center">
              <h3 className="text-yellow-400 mb-4 font-serif text-xl">¿Evento de último momento?</h3>
              <p className="mb-6 opacity-90">Llama directamente para eventos urgentes</p>
              <a 
                href="tel:+1234567890" 
                className="inline-block px-6 py-3 bg-transparent text-white border-2 border-yellow-400 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-amber-800"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;