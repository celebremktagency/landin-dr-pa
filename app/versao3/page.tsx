"use client";

import Image from "next/image";
import foto1 from '..foto1';
import foto2 from '..foto2';
import foto3 from '..foto3';
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
  Microscope,
  PlayCircle,
  Quote,
  Sparkles,
  TrendingUp,
  Zap
} from "lucide-react";

export default function Versao3() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
          // Add staggered animation for children
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('scroll-visible');
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.scroll-hidden, .scroll-slide-left, .scroll-slide-right, .scroll-scale, .scroll-fade-up');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Premium */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="h-14 flex items-center group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Image src="/Logo.png" alt="Dr. Pedro Assunção" width={140} height={56} className="relative object-contain max-h-14" />
                </div>
              </div>
              <div className="hidden lg:block border-l border-gray-200 pl-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#5D6861] to-[#85927D] bg-clip-text text-transparent">
                  Dr. Pedro Assunção
                </h1>
                <p className="text-sm text-gray-600 font-medium">Especialista em Medicina da Fertilidade</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#85927D]" />
                  <span>(83) 99627.1000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#85927D]" />
                  <span>João Pessoa, PB</span>
                </div>
              </div>
              <button className="relative group bg-gradient-to-r from-[#5D6861] to-[#85927D] text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#5D6861]/25 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#85927D] to-[#5D6861] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  AGENDAR CONSULTA
                  <Sparkles className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Ultra Premium */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-green-50 py-24 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#5D6861]/10 to-[#85927D]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#85927D]/10 to-[#5D6861]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-8xl mx-auto">
          {/* Premium Badge */}
          <div className="text-center mb-12 scroll-fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5D6861] to-[#85927D] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              <Sparkles className="w-4 h-4" />
              Medicina da Fertilidade de Excelência
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 scroll-slide-left">
              <div className="space-y-6">
                <h1 className="text-5xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  <span className="block">Seu objetivo final</span>
                  <span className="block">não é apenas o</span>
                  <span className="bg-gradient-to-r from-[#5D6861] to-[#85927D] bg-clip-text text-transparent block">
                    teste positivo.
                  </span>
                  <span className="block text-4xl xl:text-5xl mt-4 text-gray-700">
                    É ter o seu bebê no colo com saúde.
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-full"></div>
                
                <p className="text-xl xl:text-2xl text-gray-600 leading-relaxed font-light">
                  Sei que a jornada da maternidade pode trazer dúvidas e ansiedades. Aqui em João Pessoa, 
                  ofereço um espaço seguro de escuta e uma investigação médica minuciosa para maximizar 
                  as suas chances de ter seu bebê no colo.
                </p>
              </div>

              {/* Premium CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <button className="group relative bg-gradient-to-r from-[#5D6861] to-[#85927D] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#5D6861]/30 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#85927D] to-[#5D6861] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Stethoscope className="w-6 h-6" />
                    QUERO AGENDAR UMA AVALIAÇÃO DIAGNÓSTICA
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                
                <button className="group border-2 border-[#5D6861] text-[#5D6861] px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-[#5D6861] hover:text-white hover:shadow-xl transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-3">
                    <PlayCircle className="w-6 h-6" />
                    ASSISTIR VÍDEO EXPLICATIVO
                  </div>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center stagger-child scroll-hidden">
                  <div className="text-3xl font-bold text-[#5D6861] mb-1">500+</div>
                  <div className="text-sm text-gray-600">Famílias realizadas</div>
                </div>
                <div className="text-center stagger-child scroll-hidden">
                  <div className="text-3xl font-bold text-[#85927D] mb-1">15+</div>
                  <div className="text-sm text-gray-600">Anos de experiência</div>
                </div>
                <div className="text-center stagger-child scroll-hidden">
                  <div className="text-3xl font-bold text-[#5D6861] mb-1">95%</div>
                  <div className="text-sm text-gray-600">Taxa de sucesso</div>
                </div>
              </div>
            </div>

            {/* Premium Image Gallery */}
            <div className="scroll-slide-right">
              <div className="relative">
                {/* Main Image */}
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-[#5D6861]/20 to-[#85927D]/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white p-6 rounded-3xl shadow-2xl border border-gray-100">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden">
                      <Image src="foto1" alt="Dr. Pedro Assunção" className="object-cover w-full h-full" fill />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#5D6861]">
                          <Award className="w-4 h-4" />
                          Dr. Pedro Assunção
                        </div>
                      </div>
                      
                      {/* Bottom Info */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <h3 className="font-bold text-gray-900 mb-1">Especialista em Medicina da Fertilidade</h3>
                        <p className="text-sm text-gray-600">João Pessoa, PB</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#5D6861] to-[#85927D] p-4 rounded-2xl shadow-xl text-white animate-bounce">
                  <Heart className="w-6 h-6" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-pulse">
                  <div className="flex items-center gap-2 text-[#85927D]">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">Disponível</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points - Ultra Modern */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#5D6861] via-[#6B7B6E] to-[#85927D] text-white relative overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-fade-up">
            <h2 className="text-5xl xl:text-6xl font-bold mb-8 leading-tight">
              Eu sei que o caminho até aqui pode ter sido
              <span className="block text-white/80">exaustivo.</span>
            </h2>
            <div className="w-32 h-1 bg-white/30 rounded-full mx-auto mb-8"></div>
            <p className="text-xl xl:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Muitas mulheres e casais chegam ao meu consultório carregando uma bagagem emocional pesada. 
              Talvez você se identifique com estes sentimentos:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              {/* Card 1 */}
              <div className="group scroll-slide-left">
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <Clock className="w-6 h-6 text-[#5D6861]" />
                  </div>
                  <div className="pt-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Espera silenciosa</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      O tempo passa e, a cada ciclo, a expectativa se transforma em frustração. 
                      É difícil lidar com a incerteza de quando, ou se, o positivo virá.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group scroll-slide-left stagger-child">
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <Shield className="w-6 h-6 text-[#5D6861]" />
                  </div>
                  <div className="pt-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Necessidade de segurança</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Se você já engravidou, a alegria pode vir acompanhada do medo. O desejo de ter alguém 
                      que segure sua mão e vigie cada passo da gestação é imenso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Card 2 */}
              <div className="group scroll-slide-right">
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <Search className="w-6 h-6 text-[#5D6861]" />
                  </div>
                  <div className="pt-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Sensação de estar perdida</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Você já tem exames, talvez até diagnósticos, mas sente que falta alguém para unir as peças 
                      do quebra-cabeça e olhar para você por inteira, não apenas para o seu sistema reprodutivo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group scroll-slide-right stagger-child">
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <Heart className="w-6 h-6 text-[#5D6861]" />
                  </div>
                  <div className="pt-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Desejo de ser ouvida</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Mais do que receitas médicas, você busca um profissional que entenda suas angústias, 
                      tire suas dúvidas sem pressa e envolva seu parceiro no processo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20 scroll-fade-up">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl"></div>
              <p className="relative text-2xl xl:text-3xl font-bold text-white bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20">
                Seu sonho é legítimo e merece ser tratado com a máxima dedicação e respeito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Ultra Premium */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-green-50 relative">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-20 scroll-fade-up">
            <div className="inline-flex items-center gap-2 bg-[#5D6861]/10 text-[#5D6861] px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Zap className="w-4 h-4" />
              Metodologia Exclusiva
            </div>
            <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Uma abordagem
              <span className="block bg-gradient-to-r from-[#5D6861] to-[#85927D] bg-clip-text text-transparent">
                integral
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-full mx-auto mb-8"></div>
            <p className="text-xl xl:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Eu acredito que a medicina da fertilidade não deve ser mecânica. Cada história é única, 
              e cada corpo tem seu próprio tempo e necessidades. Por isso, meu trabalho não é oferecer 
              fórmulas mágicas, mas sim Investigação e Cuidado.
            </p>
          </div>

          <div className="text-center mb-16 scroll-hidden">
            <h3 className="text-3xl xl:text-4xl font-bold text-gray-800 mb-4">
              Como eu guio a sua jornada:
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                icon: Eye,
                title: "Olhar Multidisciplinar",
                description: "A fertilidade não é isolada. Eu avalio a saúde global do casal, entendendo como o estilo de vida, o emocional e a biologia conversam entre si.",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: Microscope,
                title: "Investigação Minuciosa", 
                description: "Antes de propor qualquer caminho, precisamos entender o terreno. Realizo uma avaliação diagnóstica detalhada para identificar fatores que podem estar dificultando a concepção ou a manutenção da gestação.",
                gradient: "from-green-500 to-teal-600"
              },
              {
                icon: Target,
                title: "Preparo do Organismo",
                description: "Trabalhamos para que o seu corpo (e o do seu parceiro) esteja nas melhores condições possíveis para receber uma nova vida.",
                gradient: "from-orange-500 to-red-600"
              },
              {
                icon: CheckCircle,
                title: "Transparência e Direcionamento",
                description: "A medicina não nos permite garantir resultados absolutos, mas meu compromisso é utilizar todo o conhecimento científico disponível para maximizar suas chances e lhe dar clareza em cada etapa.",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((item, index) => (
              <div key={index} className={`group scroll-scale ${index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'}`}>
                <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5D6861]/5 to-[#85927D]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center shadow-lg">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5D6861] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-lg leading-relaxed font-light">
                        {item.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="mt-6 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20 scroll-fade-up">
            <button className="group relative bg-gradient-to-r from-[#5D6861] to-[#85927D] text-white px-12 py-6 rounded-3xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#5D6861]/30 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-[#85927D] to-[#5D6861] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6" />
                QUERO AGENDAR UMA AVALIAÇÃO DIAGNÓSTICA
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section Premium */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-20 scroll-fade-up">
            <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Como posso ajudar no seu
              <span className="block bg-gradient-to-r from-[#5D6861] to-[#85927D] bg-clip-text text-transparent">
                momento atual?
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Minha atuação é dividida em dois grandes pilares de cuidado, desenhados para oferecer 
              o suporte que você precisa, seja na tentativa ou na gestação.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Foco em Fertilidade e Pré-Concepção",
                subtitle: "Para quem está tentando engravidar ou deseja se planejar.",
                description: "Nesta etapa, nosso foco é a investigação profunda. Buscamos entender as causas da dificuldade em engravidar (seja feminina, masculina ou ambas) e traçamos condutas personalizadas para preparar o \"terreno biológico\" do casal. O objetivo é criar o ambiente mais favorável possível para a concepção.",
                color: "from-pink-500 to-rose-600"
              },
              {
                icon: Shield,
                title: "Foco em Gestação e Alto Risco", 
                subtitle: "Para quem já recebeu o positivo e busca segurança.",
                description: "A gestação é um momento sagrado que exige vigilância. Ofereço um acompanhamento pré-natal diferenciado, com monitoramento fetal rigoroso e atenção especial a gestações de alto risco. Aqui, cuidamos da saúde da mãe e do desenvolvimento do bebê com proximidade, para que você se sinta segura até o momento do parto.",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: Baby,
                title: "Acompanhamento Fetal",
                subtitle: "Para quem já está gestando e deseja cuidado próximo e atento ao bebê.",
                description: "O acompanhamento fetal é um cuidado contínuo com quem mais importa nesse momento: o seu bebê. Por meio de avaliações regulares, monitoramos o crescimento, o bem-estar e o desenvolvimento fetal, observando sinais que indicam se tudo está evoluindo como esperado dentro do útero.",
                color: "from-green-500 to-emerald-600"
              }
            ].map((service, index) => (
              <div key={index} className="group scroll-scale">
                <div className="relative h-full bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-100 hover:border-[#85927D]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-6">
                    <div>
                      <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#5D6861] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-lg font-semibold text-[#85927D] mb-6">
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="pt-6 border-t border-gray-200 group-hover:border-[#85927D]/30 transition-colors duration-300">
                      <div className="flex items-center gap-2 text-[#5D6861] font-semibold">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">Especializado e Personalizado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Ultra Premium */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-[#5D6861]/5 to-[#85927D]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-br from-[#85927D]/5 to-[#5D6861]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-8xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div className="space-y-8 scroll-slide-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#5D6861]/10 text-[#5D6861] px-6 py-3 rounded-full text-sm font-semibold">
                  <Award className="w-4 h-4" />
                  Conheça o Especialista
                </div>
                
                <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Muito prazer,
                  <span className="block bg-gradient-to-r from-[#5D6861] to-[#85927D] bg-clip-text text-transparent">
                    eu sou o Dr. Pedro Assunção
                  </span>
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-full"></div>
              </div>

              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
                  <p>
                    <strong className="text-[#5D6861] font-semibold">[COLOCAR MINI CURRÍCULO DO DR. AQUI]</strong>
                  </p>
                  <p>
                    Informações sobre formação, especialização, experiência e filosofia de atendimento.
                  </p>
                </div>
                
                {/* Decorative Quote */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center shadow-xl">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <button className="group bg-gradient-to-r from-[#5D6861] to-[#85927D] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[#5D6861]/30 transform hover:scale-105">
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5" />
                    AGENDAR CONSULTA
                  </div>
                </button>
                
                <button className="group border-2 border-[#5D6861] text-[#5D6861] px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-[#5D6861] hover:text-white hover:shadow-xl transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-3">
                    <UserCheck className="w-5 h-5" />
                    VER CURRÍCULO COMPLETO
                  </div>
                </button>
              </div>
            </div>

            {/* Premium Image */}
            <div className="scroll-slide-right">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-[#5D6861]/20 to-[#85927D]/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                    <div className="relative h-[600px] rounded-2xl overflow-hidden">
                      <Image src="foto2" alt="Dr. Pedro Assunção" className="object-cover w-full h-full" fill />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      
                      {/* Professional Badge */}
                      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold text-gray-900">Disponível para consultas</span>
                        </div>
                      </div>
                      
                      {/* Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-[#5D6861] mb-1">15+</div>
                            <div className="text-xs text-gray-600">Anos de experiência</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#85927D] mb-1">500+</div>
                            <div className="text-xs text-gray-600">Famílias realizadas</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#85927D] to-[#5D6861] p-6 rounded-3xl shadow-xl text-white">
                  <Stethoscope className="w-8 h-8" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 text-[#5D6861]">
                    <Award className="w-6 h-6" />
                    <span className="font-bold text-sm">Especialista Certificado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Section Ultra Modern */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-20 scroll-fade-up">
            <div className="inline-flex items-center gap-2 bg-[#85927D]/10 text-[#85927D] px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <MapPin className="w-4 h-4" />
              Estrutura Premium
            </div>
            <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Preparei uma estrutura pensada
              <span className="block bg-gradient-to-r from-[#5D6861] to-[#85927D] bg-clip-text text-transparent">
                para o seu acolhimento
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#5D6861] to-[#85927D] rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Meu consultório foi projetado para oferecer privacidade e conforto. Conto com equipamentos modernos 
              para diagnósticos precisos e uma equipe treinada para oferecer um atendimento humano e eficiente. 
              Aqui, cada detalhe importa para o seu bem-estar.
            </p>
          </div>

          {/* Premium Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                src: "foto1",
                title: "Dr. Pedro em Ação",
                subtitle: "Atendimento dedicado e personalizado"
              },
              {
                src: "foto2", 
                title: "Cuidado Especializado",
                subtitle: "Expertise em medicina da fertilidade"
              },
              {
                src: "foto3",
                title: "Ambiente Profissional", 
                subtitle: "Estrutura moderna e acolhedora"
              }
            ].map((item, index) => (
              <div key={index} className={`group scroll-scale ${index === 1 ? 'lg:-mt-8' : ''}`}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#5D6861]/20 to-[#85927D]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-80 rounded-2xl overflow-hidden">
                      <Image src={item.src} alt={item.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" fill />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-white/90 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location Info Premium */}
          <div className="scroll-fade-up">
            <div className="relative bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5D6861]/5 to-[#85927D]/5 rounded-3xl"></div>
              <div className="relative text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Localização Privilegiada</h3>
                </div>
                
                <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Localizado no coração de João Pessoa, no moderno complexo Atlantis Offices, 
                  com fácil acesso e estacionamento disponível.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: CheckCircle, text: "Estacionamento gratuito" },
                    { icon: CheckCircle, text: "Acessibilidade completa" }, 
                    { icon: CheckCircle, text: "Localização central" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-3 text-gray-600">
                      <item.icon className="w-5 h-5 text-[#85927D]" />
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Address */}
                <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 max-w-2xl mx-auto">
                  <div className="space-y-2 text-gray-700">
                    <p className="font-bold text-[#5D6861]">ATLANTIS OFFICES DESIGN EMPRESARIAL</p>
                    <p>Av. Pres. Epitácio Pessoa, 2930, Sala 1608</p>
                    <p>Tambauzinho, João Pessoa - PB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Ultra Premium */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#5D6861] via-[#6B7B6E] to-[#85927D] text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="scroll-fade-up">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <Heart className="w-4 h-4" />
                Transforme Seu Sonho em Realidade
                <Sparkles className="w-4 h-4" />
              </div>
              
              <h2 className="text-5xl xl:text-7xl font-bold mb-8 leading-tight">
                Você não precisa
                <span className="block text-white/80">caminhar sozinha.</span>
              </h2>
              
              <div className="w-32 h-1 bg-white/30 rounded-full mx-auto mb-8"></div>
              
              <p className="text-xl xl:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light mb-12">
                Se você busca respostas, segurança e um olhar cuidadoso sobre a sua saúde reprodutiva, 
                estou à disposição para recebê-la. Vamos conversar, entender o seu momento e, juntos, 
                traçar o melhor caminho para o seu sonho.
              </p>
            </div>

            {/* Premium CTA Card */}
            <div className="relative max-w-3xl mx-auto mb-12">
              <div className="absolute -inset-6 bg-white/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
                <h3 className="text-3xl font-bold mb-6">
                  🎁 Primeira Consulta Especial
                </h3>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Avaliação diagnóstica completa para entender seu caso e traçar o melhor plano de ação personalizado.
                </p>
                
                <button className="group relative bg-white text-[#5D6861] px-12 py-6 rounded-3xl font-bold text-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-2xl transform hover:scale-105">
                  <div className="flex items-center justify-center gap-3">
                    <HeartHandshake className="w-6 h-6" />
                    SOLICITAR MINHA AVALIAÇÃO DIAGNÓSTICA
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>

            <p className="text-white/60 text-lg">
              ✓ Atendimento ético, sigiloso e personalizado • ✓ Sem compromisso inicial • ✓ Primeira consulta diferenciada
            </p>
          </div>
        </div>
      </section>

      {/* Footer Ultra Premium */}
      <footer className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5D6861] to-[#85927D]"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 border border-gray-800 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-gray-800 rounded-full"></div>
        </div>

        <div className="relative max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Logo and Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 flex items-center">
                  <Image src="/Logo.png" alt="Dr. Pedro Assunção" width={120} height={48} className="object-contain" />
                </div>
                <div className="border-l border-gray-700 pl-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#5D6861] to-[#85927D] bg-clip-text text-transparent">
                    Dr. Pedro Assunção
                  </h3>
                  <p className="text-gray-400 text-sm">Medicina da Fertilidade</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg font-light max-w-lg">
                Especialista em Medicina da Fertilidade com mais de 15 anos de experiência. 
                Cuidado humano e científico para realizar o sonho da maternidade em João Pessoa.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-sm font-bold">IG</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-sm font-bold">WA</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Contato Direto</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-[#5D6861]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5D6861] transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#85927D] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">(83) 99627.1000</p>
                    <p className="text-gray-500 text-sm">WhatsApp disponível</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-[#5D6861]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5D6861] transition-colors duration-300">
                    <span className="text-[#85927D] group-hover:text-white text-lg">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">@dr.pedro.assuncao</p>
                    <p className="text-gray-500 text-sm">Instagram oficial</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Localização</h4>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#5D6861]/20 rounded-xl flex items-center justify-center mt-1 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#85927D]" />
                </div>
                <div className="text-gray-300 space-y-1">
                  <p className="font-semibold text-white">ATLANTIS OFFICES</p>
                  <p className="text-sm">Av. Pres. Epitácio Pessoa, 2930</p>
                  <p className="text-sm">Sala 1608 - Tambauzinho</p>
                  <p className="text-sm">João Pessoa - PB</p>
                  <div className="mt-3 inline-block bg-[#85927D]/20 text-[#85927D] px-3 py-1 rounded-full text-xs font-semibold">
                    Estacionamento Gratuito
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <p className="text-gray-400 text-sm text-center lg:text-left">
                © 2024 Dr. Pedro Assunção - Medicina da Fertilidade • Todos os direitos reservados
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>Política de Privacidade</span>
                <span>•</span>
                <span>Termos de Uso</span>
                <span>•</span>
                <span>CRM: [NÚMERO]</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}