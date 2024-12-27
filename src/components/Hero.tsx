import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { IMAGES } from '../constants/images';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] lg:h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      >
        <div className="absolute inset-0 bg-dark-green/30 backdrop-blur-[1px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-32 md:mt-36">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 drop-shadow-lg">
            Resolviendo tus deudas, juntos
          </h1>
          <p className="text-xl md:text-2xl text-cream/95 mb-10 drop-shadow-md leading-relaxed">
            En Munay Legal, nos especializamos en brindar soluciones legales efectivas 
            para tus problemas financieros. Nuestro equipo de expertos está aquí para 
            ayudarte a recuperar tu tranquilidad financiera.
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="btn-primary inline-flex items-center group cursor-pointer text-lg"
          >
            Agenda una Consulta
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}