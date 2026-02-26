import { CitySelector } from '@/components/city/CitySelector';
import { WebSiteStructuredData, OrganizationStructuredData } from '@/components/seo/StructuredData';
import { HelpLinksSection } from '@/components/home/HelpLinksSection';

function AlertTriangleIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function ClipboardCheckIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  );
}

const features = [
  {
    icon: <MapIcon />,
    title: 'Mapa Interativo',
    description: 'Visualize pontos de coleta e abrigos em tempo real no mapa',
  },
  {
    icon: <ClipboardCheckIcon />,
    title: 'Cadastro Rápido',
    description: 'Adicione novos pontos de forma simples para ajudar a comunidade',
  },
  {
    icon: <RefreshIcon />,
    title: 'Tempo Real',
    description: 'Informações sempre atualizadas com novos pontos aparecendo automaticamente',
  },
];

export default function Home() {
  return (
    <>
      <WebSiteStructuredData />
      <OrganizationStructuredData />

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-emergency-800 via-emergency-700 to-emergency-500 font-body">

        {/* Warning Banner */}
        <div className="bg-emergency-900/80 backdrop-blur-sm text-white py-2.5 px-4 border-b border-white/10">
          <p className="text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2 max-w-2xl mx-auto">
            <AlertTriangleIcon />
            <span>Cuidado com golpes — verifique sempre a autenticidade dos pontos de coleta.</span>
          </p>
        </div>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">

          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-[1.1]">
              Emergência{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-200">
                Coletas
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 font-semibold mb-3">
              Pontos de Doação e Abrigos para Emergências
            </p>

            <p className="text-white/65 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Sistema colaborativo para localizar pontos de doação e abrigos durante emergências em Minas Gerais.
            </p>
          </div>

          {/* City Selection */}
          <div className="mb-12 sm:mb-16">
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-white text-center mb-6 tracking-tight">
              Selecione sua cidade
            </h2>
            <CitySelector />
          </div>

          {/* Help Links */}
          <HelpLinksSection />

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto mt-10 sm:mt-14">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white/8 hover:bg-white/14 backdrop-blur-sm rounded-xl p-5 sm:p-6 text-white border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-white/15 group-hover:bg-white/25 rounded-lg flex items-center justify-center mb-4 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="font-sans text-base font-bold mb-1.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/30 backdrop-blur-sm text-white py-8 mt-auto border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center space-y-5">

              <p className="text-xs sm:text-sm text-white/50">
                Sistema colaborativo para ajudar vítimas de emergências em Minas Gerais
              </p>

              {/* Emergency Contacts */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                <a
                  href="tel:199"
                  className="flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10"
                >
                  <PhoneIcon />
                  <span>Defesa Civil: <strong className="font-semibold">199</strong></span>
                </a>
                <a
                  href="tel:193"
                  className="flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10"
                >
                  <FireIcon />
                  <span>Bombeiros: <strong className="font-semibold">193</strong></span>
                </a>
              </div>

              {/* Divider */}
              <div className="w-24 h-px bg-white/10 mx-auto" />

              {/* Social Media */}
              <div className="flex justify-center gap-4 sm:gap-6">
                <a
                  href="https://www.linkedin.com/in/devguilhermebartmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-white/50 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/guilhermebartmannjf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-white/50 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  @guilhermebartmannjf
                </a>
              </div>

              <p className="text-xs text-white/30">
                © {new Date().getFullYear()} Emergência Coletas · LGPD Compliant
              </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
