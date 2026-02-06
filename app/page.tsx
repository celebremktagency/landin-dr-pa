"use client";

import Image from "next/image";
import clinica1 from './clinica1.png';
import clinica2 from './clinica2.png';
import clinica3 from './clinica3.png';
import Depoimento1 from './Depoimento1.png';
import Depoimento2 from './Depoimento2.png';
import fotoSorrindo from './fotoSorrindo.jpeg';
import rosto from './rosto.png';
import bebeNascendo from './bebeNscendo.jpeg';
import logo from './Logo.png';
import fundo from './fundo.jpeg';
import { useEffect } from "react";
import { 
  Heart, 
  Clock, 
  Shield, 
  Users, 
  Stethoscope, 
  Baby, 
  Search, 
  UserCheck, 
  Calendar,
  Phone,
  MapPin,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Eye,
  Target,
  HeartHandshake,
  Microscope
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const elementsToAnimate = document.querySelectorAll('.scroll-hidden, .scroll-slide-left, .scroll-slide-right, .scroll-scale');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F7F5] font-['Inter'] text-[#2C3A2E]" 
         style={{
           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(184,197,184,0.3) 1px, transparent 0)`,
           backgroundSize: '20px 20px'
         }}>
      
      {/* Header - Efeito Espelho com Blur */}
      <header className="bg-white/10 backdrop-blur-md py-6 px-4 absolute top-0 left-0 right-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto">
          
          {/* Mobile: Apenas Logo */}
          <div className="block lg:hidden">
            <div className="h-16 flex items-center justify-center">
              <Image src={logo} alt="Dr. Pedro Assunção" width={140} height={56} className="object-contain max-h-14 drop-shadow-lg" />
            </div>
          </div>

          {/* Desktop: Layout completo */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-4 items-center">
              
              {/* Contato Esquerda */}
              <div className="flex items-center justify-start gap-3 text-white/90">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold drop-shadow-lg">(83) 99627.1000</span>
              </div>
              
              {/* Logo Centro */}
              <div className="h-16 flex items-center justify-center">
                <Image src={logo} alt="Dr. Pedro Assunção" width={140} height={56} className="object-contain max-h-14 drop-shadow-lg" />
              </div>
              
              {/* Localização Direita */}
              <div className="flex items-center justify-end gap-3 text-white/90">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm drop-shadow-lg">João Pessoa - PB</span>
              </div>
              
            </div>
          </div>

        </div>
      </header>


      {/* Main Hero Section - Layout 2 colunas Vc n com fundo */}
      <section className="px-4 relative overflow-hidden pt-8 lg:pt-24 bg-[#667269]">
        {/* Fundo limpo - igual ao quadrado da imagem */}
        
        {/* Spots de luz - apenas no desktop */}
        <div className="hidden lg:block absolute top-16 left-16 w-40 h-40 bg-white/6 rounded-full blur-3xl z-10"></div>
        <div className="hidden lg:block absolute bottom-32 left-40 w-32 h-32 bg-white/8 rounded-full blur-2xl z-10"></div>
        <div className="hidden lg:block absolute top-1/2 left-10 w-20 h-20 bg-white/4 rounded-full blur-xl z-10"></div>
        
        {/* Brilhos brancos adicionais - apenas desktop */}
        <div className="hidden lg:block absolute top-24 right-32 w-28 h-28 bg-white/7 rounded-full blur-2xl z-10"></div>
        <div className="hidden lg:block absolute bottom-40 right-16 w-36 h-36 bg-white/5 rounded-full blur-3xl z-10"></div>
        <div className="hidden lg:block absolute top-1/4 right-1/4 w-24 h-24 bg-white/6 rounded-full blur-xl z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-40 scroll-hidden">
          
          {/* Mobile: Flex-col layout */}
          <div className="flex flex-col lg:hidden scroll-slide-left">
            
            {/* Image container - fundo igual à seção Hero */}
            <div className="relative min-h-[500px] overflow-hidden bg-[#667269] animate-in fade-in duration-1000">
              <Image 
                src={rosto} 
                alt="Dr. Pedro Assunção" 
                fill
                className="object-contain"
                style={{objectPosition: 'center'}}
                priority
              />
              {/* Gradiente com intensidade certa - só cor clara */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#667269] from-0% via-[#667269] via-40% via-[#667269] via-70% to-transparent to-100% z-10"></div>
            </div>
            
            {/* Text section - SEM FUNDO - texto ainda mais em cima */}
            <div className="py-6 px-4 relative -mt-28 z-40">
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-[1.1] mb-6 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
                <span className="text-white block font-black tracking-tight">Seu objetivo final não é apenas</span>
                <span className="text-white block font-black tracking-tight">o teste positivo.</span>
                <span className="text-white block bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] bg-clip-text text-transparent font-bold tracking-wide">É ter o seu bebê no colo</span>
                <span className="text-white/95 block text-xl sm:text-2xl font-extralight italic tracking-wider">com saúde.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-8 font-light animate-in slide-in-from-bottom-8 duration-1000 delay-400">
                Sei que a jornada da maternidade pode trazer <span className="font-medium italic">dúvidas e ansiedades</span>. Aqui em <span className="font-bold text-[#D4AF37] tracking-wide">João Pessoa</span>, ofereço um espaço seguro de escuta e uma <span className="font-semibold underline decoration-[#D4AF37]/50">investigação médica minuciosa</span> para maximizar as suas chances de ter seu bebê no colo.
              </p>
              
              <div className="mb-8">
                <div className="group relative inline-block w-full sm:w-auto">
                  <div className="relative bg-gradient-to-b from-[#F2D06B] to-[#D4AF37] rounded-2xl px-6 py-4 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-8 duration-1000 delay-600">
                    <a href="https://wa.me/5583996271000?text=Olá%2C%20gostaria%20de%20mais%20informações%21%20Cliquei%20no%20link%3A%20Agende%20sua%20avaliação%20diagnóstica%21" target="_blank" rel="noopener noreferrer" 
                       className="text-[#4A5D4F] font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                      <span className="drop-shadow-sm text-center">QUERO AGENDAR UMA AVALIAÇÃO DIAGNÓSTICA</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Grid layout - altura adequada ao conteúdo */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0 lg:items-stretch scroll-hidden">
            
            {/* Coluna Esquerda - Texto e botão mais embaixo */}
            <div className="relative flex flex-col justify-end pb-16 p-8 xl:p-12 z-20">
              <div className="relative z-10">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.1] mb-8 animate-in slide-in-from-left-10 duration-1000 delay-300">
                  <span className="text-white block font-black tracking-tight">Seu objetivo final não é apenas</span>
                  <span className="text-white block font-black tracking-tight">o teste positivo.</span>
                  <span className="text-white block bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] bg-clip-text text-transparent font-bold tracking-wide">É ter o seu bebê no colo</span>
                  <span className="text-white/90 block text-2xl lg:text-3xl xl:text-4xl font-extralight italic tracking-wider">com saúde.</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-white/95 leading-relaxed mb-8 font-light animate-in slide-in-from-left-10 duration-1000 delay-500">
                  Sei que a jornada da maternidade pode trazer <span className="font-medium italic">dúvidas e ansiedades</span>. Aqui em <span className="font-bold text-[#D4AF37] tracking-wide">João Pessoa</span>, ofereço um espaço seguro de escuta e uma <span className="font-semibold underline decoration-[#D4AF37]/50">investigação médica minuciosa</span> para maximizar as suas chances de ter seu bebê no colo.
                </p>
                
                <div className="group relative inline-block animate-in slide-in-from-left-10 duration-1000 delay-700">
                  <div className="relative bg-gradient-to-b from-[#F2D06B] to-[#D4AF37] rounded-2xl px-8 py-5 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:scale-105 transition-all duration-300">
                    <a href="https://wa.me/5583996271000?text=Olá%2C%20gostaria%20de%20mais%20informações%21%20Cliquei%20no%20link%3A%20Agende%20sua%20avaliação%20diagnóstica%21" target="_blank" rel="noopener noreferrer" 
                       className="text-[#4A5D4F] font-bold text-lg flex items-center justify-center gap-3">
                      <span className="drop-shadow-sm">QUERO AGENDAR UMA AVALIAÇÃO DIAGNÓSTICA</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Imagem sem cortar muito */}
            <div className="relative overflow-hidden">
              <Image 
                src={rosto} 
                alt="Dr. Pedro Assunção" 
                fill
                className="object-contain scale-110 animate-in slide-in-from-right-10 duration-1000"
                style={{objectPosition: 'center bottom'}}
                priority
              />
            </div>

          </div>

        </div>
      </section>

      {/* Seção de Identificação da Dor / Empatia */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#667269]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-2xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-16 scroll-hidden">
            <h2 className="text-4xl lg:text-5xl leading-tight mb-8">
              <span className="font-light text-[#667269] italic tracking-wide">Eu sei que o caminho até aqui</span><br/>
              <span className="font-black text-[#4A5D4F] tracking-tight">pode ter sido exaustivo.</span>
            </h2>
            <p className="text-lg text-[#4A5D4F] max-w-4xl mx-auto leading-relaxed mb-12">
              Muitas mulheres e casais chegam ao meu consultório carregando uma bagagem emocional pesada. Talvez você se identifique com estes sentimentos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-white via-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:shadow-[0_25px_70px_rgba(212,175,55,0.25)] transition-all duration-500 hover:scale-105 hover:border-[#D4AF37]/40 scroll-slide-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Clock className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4 relative z-10">
                Espera silenciosa
              </h3>
              <p className="text-[#4A5D4F] leading-relaxed relative z-10">
                O tempo passa e, a cada ciclo, a expectativa se transforma em frustração. É difícil lidar com a incerteza de quando, ou se, o positivo virá.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white via-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:shadow-[0_25px_70px_rgba(212,175,55,0.25)] transition-all duration-500 hover:scale-105 hover:border-[#D4AF37]/40 scroll-slide-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Search className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4 relative z-10">
                Sensação de estar perdida
              </h3>
              <p className="text-[#4A5D4F] leading-relaxed relative z-10">
                Você já tem exames, talvez até diagnósticos, mas sente que falta alguém para unir as peças do quebra-cabeça e olhar para você por inteira.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white via-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:shadow-[0_25px_70px_rgba(212,175,55,0.25)] transition-all duration-500 hover:scale-105 hover:border-[#D4AF37]/40 scroll-slide-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Shield className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4 relative z-10">
                Necessidade de segurança
              </h3>
              <p className="text-[#4A5D4F] leading-relaxed relative z-10">
                Se você já engravidou, a alegria pode vir acompanhada do medo. O desejo de ter alguém que segure sua mão e vigie cada passo da gestação é imenso.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white via-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:shadow-[0_25px_70px_rgba(212,175,55,0.25)] transition-all duration-500 hover:scale-105 hover:border-[#D4AF37]/40 scroll-slide-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <HeartHandshake className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4 relative z-10">
                Desejo de ser ouvida
              </h3>
              <p className="text-[#4A5D4F] leading-relaxed relative z-10">
                Mais do que receitas médicas, você busca um profissional que entenda suas angústias, tire suas dúvidas sem pressa e envolva seu parceiro no processo.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-[#667269] leading-relaxed">
              Seu sonho é legítimo e merece ser tratado com a máxima dedicação e respeito.
            </p>
          </div>
        </div>
      </section>

      
      {/* About Doctor - FULL WIDTH GREEN */}
      <section className="bg-gradient-to-br from-[#667269] via-[#4A5D4F] to-[#2F4A32] py-20 relative overflow-hidden">
        {/* Efeitos de fundo */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#667269]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="relative overflow-hidden">
            {/* Pattern tecnológico */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523D4AF37%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[700px]">
              <div className="relative h-full min-h-[700px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#667269]/30 to-[#667269]/70 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A5D4F]/50 to-transparent z-20"></div>
                <Image 
                  src={rosto} 
                  alt="Dr. Pedro Assunção" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                  style={{objectPosition: 'center 20%'}}
                />
                {/* Overlay dourado sutil */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#D4AF37]/20 to-transparent z-25"></div>
              </div>

              <div className="p-12 lg:p-16 text-white relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-[#D4AF37]/30">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                    <p className="text-[#D4AF37] font-semibold text-lg uppercase tracking-wider">Conheça o</p>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] bg-clip-text text-transparent">
                    Dr. Pedro Assunção
                  </h2>
                  
                  <div className="space-y-6 text-white/90 leading-relaxed">
                    <p className="text-lg font-light">
                      <span className="text-[#D4AF37] font-medium">Ginecologista e Obstetra</span> formado pela Universidade Federal da Paraíba (UFPB), com especialização em Reprodução Humana pelo Hospital das Clínicas da Universidade de São Paulo (HC-USP).
                    </p>
                    
                    <p className="text-lg font-light">
                      Pós-graduando em <span className="text-[#D4AF37] font-semibold">Medicina Fetal</span> pela Universidade de São Paulo (USP), com experiência em ultrassonografia obstétrica e morfológica.
                    </p>
                    
                    <p className="text-lg font-light">
                      Atuo há mais de <span className="text-white font-medium">5 anos</span> ajudando casais a realizarem o sonho da maternidade, sempre com base científica sólida e um olhar humanizado para cada história.
                    </p>
                    
                    <p className="text-lg font-light">
                      <span className="text-[#D4AF37] font-medium">Minha missão</span> é oferecer cuidado integral, desde a investigação das causas da infertilidade até o acompanhamento completo da gestação, sempre priorizando a <span className="text-white font-medium">segurança</span> e o <span className="text-white font-medium">bem-estar</span> dos meus pacientes.
                    </p>
                    
                    <p className="text-lg font-light">
                      Acredito que cada <span className="font-medium italic text-white">história é única</span> e merece ser tratada com a máxima dedicação. Por isso, meu atendimento é <span className="text-[#D4AF37] font-semibold">personalizado e humanizado</span>, sempre baseado nas melhores evidências científicas disponíveis.
                    </p>
                    
                    <p className="text-lg font-light">
                      <span className="text-[#D4AF37] font-medium">Meu compromisso</span> é estar ao seu lado em cada etapa dessa jornada, oferecendo não apenas conhecimento técnico, mas também <span className="font-semibold text-white underline decoration-[#D4AF37]/40">apoio emocional e orientação clara</span> para que você se sinta segura e confiante em suas decisões.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#667269]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-56 h-56 bg-[#D4AF37]/8 rounded-full blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16 scroll-hidden">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-[#D4AF37]/30">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <p className="text-[#D4AF37] font-semibold text-lg uppercase tracking-wider">Nossos Serviços</p>
            </div>
            <h2 className="text-4xl lg:text-5xl leading-tight mb-6">
              <span className="font-light text-[#667269] italic tracking-wide">Como posso ajudar</span><br/>
              <span className="font-black text-[#4A5D4F] tracking-tight">no seu momento atual?</span>
            </h2>
            <p className="text-lg text-[#4A5D4F] max-w-4xl mx-auto leading-relaxed">
              Minha atuação é dividida em dois grandes pilares de cuidado, desenhados para oferecer o suporte que você precisa, seja na tentativa ou na gestação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white via-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:shadow-[0_25px_70px_rgba(212,175,55,0.25)] transition-all duration-500 hover:scale-105 hover:border-[#D4AF37]/40 scroll-slide-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Heart className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4 relative z-10">
                Foco em Fertilidade e Pré-Concepção
              </h3>
              <p className="text-[#D4AF37] mb-4 font-semibold relative z-10">
                Para quem está tentando engravidar ou deseja se planejar.
              </p>
              <p className="text-[#4A5D4F] leading-relaxed relative z-10">
                Nesta etapa, nosso foco é a investigação profunda. Buscamos entender as causas da dificuldade em engravidar (seja feminina, masculina ou ambas) e traçamos condutas personalizadas para preparar o "terreno biológico" do casal.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-white via-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:shadow-[0_25px_70px_rgba(212,175,55,0.25)] transition-all duration-500 hover:scale-105 hover:border-[#D4AF37]/40 scroll-scale relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Shield className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4 relative z-10">
                Foco em Gestação e Alto Risco
              </h3>
              <p className="text-[#D4AF37] mb-4 font-semibold relative z-10">
                Para quem já recebeu o positivo e busca segurança.
              </p>
              <p className="text-[#4A5D4F] leading-relaxed relative z-10">
                A gestação é um momento sagrado que exige vigilância. Ofereço um acompanhamento pré-natal diferenciado, com monitoramento fetal rigoroso e atenção especial a gestações de alto risco.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-white via-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:shadow-[0_25px_70px_rgba(212,175,55,0.25)] transition-all duration-500 hover:scale-105 hover:border-[#D4AF37]/40 scroll-slide-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Baby className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4 relative z-10">
                Acompanhamento Fetal
              </h3>
              <p className="text-[#D4AF37] mb-4 font-semibold relative z-10">
                Para quem já está gestando e deseja cuidado próximo e atento ao bebê.
              </p>
              <p className="text-[#4A5D4F] leading-relaxed relative z-10">
                O acompanhamento fetal é um cuidado contínuo com quem mais importa nesse momento: o seu bebê. Por meio de avaliações regulares, monitoramos o crescimento e desenvolvimento fetal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-medium text-lg mb-4 uppercase tracking-wider">Depoimentos</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#667269] leading-tight mb-6">
              Depoimentos reais de pacientes
            </h2>
            <p className="text-lg text-[#4A5D4F] max-w-3xl mx-auto">
              Mensagens verdadeiras de famílias que realizaram o sonho da maternidade. 
              Estes são ALGUNS prints reais de WhatsApp e momentos únicos registrados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Print do WhatsApp 1 */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-[0_15px_50px_rgb(0,0,0,0.1)] hover:scale-105 transition-all duration-300">
              <div className="p-6 bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 border-b border-[#25D366]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">Mensagem no WhatsApp</p>
                    <p className="text-[#25D366] text-sm">✓✓ Entregue</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Image src={Depoimento1} alt="Depoimento WhatsApp" className="rounded-2xl shadow-lg" width={400} height={600} />
              </div>
            </div>

            {/* Print do WhatsApp 2 */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-[0_15px_50px_rgb(0,0,0,0.1)] hover:scale-105 transition-all duration-300">
              <div className="p-6 bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 border-b border-[#25D366]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">Mensagem no WhatsApp</p>
                    <p className="text-[#25D366] text-sm">✓✓ Entregue</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Image src={Depoimento2} alt="Depoimento WhatsApp" className="rounded-2xl shadow-lg" width={400} height={600} />
              </div>
            </div>

            {/* Momento especial - Bebê nascendo */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-[0_15px_50px_rgb(0,0,0,0.1)] hover:scale-105 transition-all duration-300">
              <div className="p-6 bg-gradient-to-r from-[#ff69b4]/10 to-[#ff1493]/5 border-b border-[#ff69b4]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#ff69b4] to-[#ff1493] rounded-full flex items-center justify-center">
                    <Baby className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">Momento especial registrado</p>
                    <div className="flex text-[#D4AF37]">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Image 
                  src={bebeNascendo} 
                  alt="Bebê recém-nascido - paciente do Dr. Pedro" 
                  className="rounded-2xl shadow-lg object-cover w-full h-64" 
                  width={400} 
                  height={300} 
                  style={{objectPosition: 'right 20% top 10%'}}
                />
                <div className="mt-4 text-center">
                  <p className="text-[#666666] leading-relaxed">
                    💕 <em>"Momento único: mais uma vida que chega ao mundo com segurança"</em>
                  </p>
                  <p className="text-[#999999] text-sm mt-2">
                    Registro real de uma paciente do Dr. Pedro
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#4A5D4F] mb-6 text-lg">
              Depoimentos 100% autênticos | Momentos reais registrados
            </p>
            <div className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl px-8 py-4 shadow-[0_8px_30px_rgb(212,175,55,0.3)] hover:scale-105 transition-all duration-300">
                <a href="https://wa.me/5583996271000?text=Olá%2C%20gostaria%20de%20mais%20informações%21%20Cliquei%20no%20link%3A%20Agende%20sua%20avaliação%20diagnóstica%21" target="_blank" rel="noopener noreferrer" 
                   className="text-[#667269] font-bold text-lg flex items-center gap-3">
                  <HeartHandshake className="w-6 h-6" />
                  QUERO ENVIAR MEU DEPOIMENTO TAMBÉM
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl leading-tight">
              <span className="font-light text-[#667269] italic tracking-wide">Um atendimento pensado</span><br/>
              <span className="font-black text-[#4A5D4F] tracking-tight">para acolher você</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4">Tempo de Qualidade</h3>
              <p className="text-[#4A5D4F] leading-relaxed">
                Minhas avaliações não são apressadas. Dedico o tempo necessário para ouvir sua história e entender suas particularidades.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4">Visão Além do Óbvio</h3>
              <p className="text-[#4A5D4F] leading-relaxed">
                Não trato apenas o sintoma, busco entender a saúde do casal como um todo.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4">Ambiente Seguro</h3>
              <p className="text-[#4A5D4F] leading-relaxed">
                Um espaço onde você pode chorar, sorrir e tirar todas as suas dúvidas sem julgamentos.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-[#667269]/5 border border-[#D4AF37]/20 rounded-[30px] p-8 shadow-[0_15px_50px_rgba(102,114,105,0.1)] hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-[#667269]" />
              </div>
              <h3 className="text-2xl font-bold text-[#667269] mb-4">Compromisso com a Verdade</h3>
              <p className="text-[#4A5D4F] leading-relaxed">
                Você terá sempre um direcionamento honesto e ético sobre as possibilidades e os próximos passos do seu tratamento.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl px-8 py-4 shadow-[0_8px_30px_rgb(212,175,55,0.3)] hover:scale-105 transition-all duration-300">
                <a href="https://wa.me/5583996271000?text=Olá%2C%20gostaria%20de%20mais%20informações%21%20Cliquei%20no%20link%3A%20Agende%20sua%20avaliação%20diagnóstica%21" target="_blank" rel="noopener noreferrer" 
                   className="text-[#667269] font-bold text-lg flex items-center gap-3">
                  <span>QUERO AGENDAR UMA AVALIAÇÃO DIAGNÓSTICA</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transição com gradiente */}
      <div className="h-20 bg-gradient-to-b from-[#F5F7F5] to-[#667269]/30"></div>
      
      {/* Clinic Section - FULL WIDTH */}
      <section className="bg-gradient-to-br from-[#667269] via-[#4A5D4F] to-[#667269] py-20 relative overflow-hidden">
        {/* Spots de luz de fundo */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#667269]/15 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="relative overflow-hidden p-12 lg:p-16">
            {/* Pattern de fundo tecnológico */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22m0%2040c0-11.046%208.954-20%2020-20s20%208.954%2020%2020v20h-40z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            {/* Gradiente adicional para profundidade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5"></div>
            
            <div className="text-center mb-12 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-[#D4AF37]/30">
                <p className="text-[#D4AF37] font-semibold text-lg uppercase tracking-wider">Nossa Clínica</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Preparei uma estrutura pensada para o seu acolhimento
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Consultório projetado para oferecer privacidade e conforto, com equipamentos modernos e atendimento humanizado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {[clinica1, clinica2, clinica3].map((img, index) => (
                <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 shadow-[0_15px_50px_rgba(0,0,0,0.3)] hover:scale-105 hover:shadow-[0_25px_70px_rgba(212,175,55,0.2)] transition-all duration-500 border border-white/10">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                    <Image 
                      src={img} 
                      alt={`Consultório Dr. Pedro Assunção ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#667269]/20 to-transparent group-hover:from-[#D4AF37]/10"></div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37] drop-shadow-sm" />
                      ))}
                    </div>
                    <p className="text-white font-semibold text-lg drop-shadow-sm">Estrutura moderna</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transição com gradiente */}
      <div className="h-16 bg-gradient-to-b from-[#667269] to-[#F5F7F5]"></div>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#667269] to-[#4A5D4F] rounded-[30px] p-12 lg:p-16 text-center shadow-[0_25px_70px_rgba(102,114,105,0.25)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523D4AF37%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Você não precisa caminhar sozinha.
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                Se você busca respostas, segurança e um olhar cuidadoso sobre a sua saúde reprodutiva, estou à disposição para recebê-la. Vamos conversar, entender o seu momento e, juntos, traçar o melhor caminho para o seu sonho.
              </p>
              <div className="group relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-2xl px-8 py-4 shadow-[0_8px_30px_rgb(212,175,55,0.3)] hover:scale-105 transition-all duration-300">
                  <a href="https://wa.me/5583996271000?text=Olá%2C%20gostaria%20de%20mais%20informações%21%20Cliquei%20no%20link%3A%20Agende%20sua%20avaliação%20diagnóstica%21" target="_blank" rel="noopener noreferrer" 
                     className="text-[#667269] font-bold text-lg flex items-center gap-3">
                    <HeartHandshake className="w-6 h-6" />
                    SOLICITAR MINHA AVALIAÇÃO DIAGNÓSTICA
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <p className="text-white/80 mt-6">
                Atendimento ético, sigiloso e personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#667269] to-[#4A5D4F] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            
            {/* Logo e Descrição */}
            <div className="text-center md:text-left">
              <div className="h-16 mb-6 flex items-center justify-center md:justify-start">
                <Image src={logo} alt="Dr. Pedro Assunção" width={140} height={56} className="object-contain max-h-14 filter brightness-200" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Medicina da Fertilidade com cuidado humano e científico para realizar o sonho da maternidade.
              </p>
            </div>

            {/* Contato */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-white/80">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-5 h-5 text-[#667269]" />
                  </div>
                  <span>(83) 99627.1000</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/80">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[#667269] font-bold text-sm">@</span>
                  </div>
                  <span>@dr.pedro.assuncao</span>
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-white mb-6">Localização</h3>
              <div className="flex items-start justify-center md:justify-end gap-3 text-white/80">
                <div className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B] rounded-full flex items-center justify-center mt-1 shadow-lg">
                  <MapPin className="w-5 h-5 text-[#667269]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">ATLANTIS OFFICES DESIGN EMPRESARIAL</p>
                  <p>Av. Pres. Epitácio Pessoa, 2930, Sala 1608</p>
                  <p>Tambauzinho, João Pessoa - PB</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Linha divisória e nome */}
          <div className="border-t border-[#D4AF37]/30 mt-12 pt-8 text-center">
            <p className="text-xl font-bold text-white mb-3">Dr. Pedro Assunção</p>
            <p className="text-white/60">© 2026 - Dr. Pedro Assunção | Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}