"use client";

import Image from "next/image";
import foto1 from './foto1.png';
import foto2 from './foto2.png';
import foto3 from './foto3.png';
import fotoSorrindo from './fotoSorrindo.jpeg';
import bebeNascendo from './bebeNascendo.jpeg';
import logo from './Logo.png';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm transition-all duration-300 ease-in-out">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between animate-fade-in">
          <div className="h-16 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <Image src={logo} alt="Dr. Pedro Assunção" width={120} height={48} className="object-contain max-h-12" />
          </div>
          <button className="bg-[#5D6861] text-white px-6 py-3 rounded-full hover:bg-[#85927D] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out font-medium flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            AGENDAR AVALIAÇÃO
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in-up">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
                Seu objetivo final não é apenas o teste positivo. É ter o seu bebê no colo com saúde.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sei que a jornada da maternidade pode trazer dúvidas e ansiedades. Aqui em João Pessoa, ofereço um espaço seguro de escuta e uma investigação médica minuciosa para maximizar as suas chances de ter seu bebê no colo.
              </p>
              <button className="bg-[#5D6861] text-white px-8 py-4 rounded-full hover:bg-[#85927D] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out transform font-medium text-lg flex items-center gap-3 mx-auto animate-pulse-slow">
                <Stethoscope className="w-6 h-6" />
                QUERO AGENDAR UMA AVALIAÇÃO DIAGNÓSTICA
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full h-96 rounded-2xl border-4 border-[#5D6861] shadow-xl overflow-hidden flex items-center justify-center animate-slide-in-right hover:scale-105 transition-transform duration-500 ease-in-out group bg-white relative">
              <Image src={fotoSorrindo} alt="Dr. Pedro Assunção" className="object-cover w-full h-full rounded-lg" fill />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 scroll-hidden">
            Eu sei que o caminho até aqui pode ter sido exaustivo.
          </h2>
          <p className="text-lg text-gray-600 mb-12 scroll-hidden">
            Muitas mulheres e casais chegam ao meu consultório carregando uma bagagem emocional pesada. Talvez você se identifique com estes sentimentos:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-green-50 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out scroll-slide-left">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-[#5D6861]" />
                <h3 className="text-xl font-semibold text-[#5D6861]">Espera silenciosa</h3>
              </div>
              <p className="text-gray-600">
                O tempo passa e, a cada ciclo, a expectativa se transforma em frustração. É difícil lidar com a incerteza de quando, ou se, o positivo virá.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out scroll-slide-right">
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-8 h-8 text-[#85927D]" />
                <h3 className="text-xl font-semibold text-[#85927D]">Sensação de estar perdida</h3>
              </div>
              <p className="text-gray-600">
                Você já tem exames, talvez até diagnósticos, mas sente que falta alguém para unir as peças do quebra-cabeça e olhar para você por inteira, não apenas para o seu sistema reprodutivo.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out scroll-slide-left delay-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-[#5D6861]" />
                <h3 className="text-xl font-semibold text-[#5D6861]">Necessidade de segurança</h3>
              </div>
              <p className="text-gray-600">
                Se você já engravidou, a alegria pode vir acompanhada do medo. O desejo de ter alguém que segure sua mão e vigie cada passo da gestação é imenso.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out scroll-slide-right delay-200">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-[#85927D]" />
                <h3 className="text-xl font-semibold text-[#85927D]">Desejo de ser ouvida</h3>
              </div>
              <p className="text-gray-600">
                Mais do que receitas médicas, você busca um profissional que entenda suas angústias, tire suas dúvidas sem pressa e envolva seu parceiro no processo.
              </p>
            </div>
          </div>
          
          <p className="text-xl text-[#5D6861] font-medium mt-12">
            Seu sonho é legítimo e merece ser tratado com a máxima dedicação e respeito.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 scroll-hidden">
              Uma abordagem integral
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed scroll-hidden">
              Eu acredito que a medicina da fertilidade não deve ser mecânica. Cada história é única, e cada corpo tem seu próprio tempo e necessidades. Por isso, meu trabalho não é oferecer fórmulas mágicas, mas sim Investigação e Cuidado.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center scroll-hidden">
            Como eu guio a sua jornada:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm scroll-slide-left">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-7 h-7 text-[#5D6861]" />
                <h4 className="text-xl font-semibold text-[#5D6861]">Olhar Multidisciplinar</h4>
              </div>
              <p className="text-gray-600">
                A fertilidade não é isolada. Eu avalio a saúde global do casal, entendendo como o estilo de vida, o emocional e a biologia conversam entre si.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm scroll-slide-right">
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="w-7 h-7 text-[#5D6861]" />
                <h4 className="text-xl font-semibold text-[#5D6861]">Investigação Minuciosa</h4>
              </div>
              <p className="text-gray-600">
                Antes de propor qualquer caminho, precisamos entender o terreno. Realizo uma avaliação diagnóstica detalhada para identificar fatores que podem estar dificultando a concepção ou a manutenção da gestação.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm scroll-slide-left delay-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-7 h-7 text-[#5D6861]" />
                <h4 className="text-xl font-semibold text-[#5D6861]">Preparo do Organismo</h4>
              </div>
              <p className="text-gray-600">
                Trabalhamos para que o seu corpo (e o do seu parceiro) esteja nas melhores condições possíveis para receber uma nova vida.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm scroll-slide-right delay-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-7 h-7 text-[#5D6861]" />
                <h4 className="text-xl font-semibold text-[#5D6861]">Transparência e Direcionamento</h4>
              </div>
              <p className="text-gray-600">
                A medicina não nos permite garantir resultados absolutos, mas meu compromisso é utilizar todo o conhecimento científico disponível para maximizar suas chances e lhe dar clareza em cada etapa.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#5D6861] text-white px-8 py-4 rounded-full hover:bg-[#85927D] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out transform font-medium text-lg flex items-center gap-3 mx-auto">
              <Calendar className="w-6 h-6" />
              QUERO AGENDAR UMA AVALIAÇÃO DIAGNÓSTICA
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center scroll-hidden">
            Como posso ajudar no seu momento atual?
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center scroll-hidden">
            Minha atuação é dividida em dois grandes pilares de cuidado, desenhados para oferecer o suporte que você precisa, seja na tentativa ou na gestação.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl scroll-scale">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-10 h-10 text-[#5D6861]" />
                <h3 className="text-2xl font-bold text-[#5D6861]">
                  Foco em Fertilidade e Pré-Concepção
                </h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">
                Para quem está tentando engravidar ou deseja se planejar.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nesta etapa, nosso foco é a investigação profunda. Buscamos entender as causas da dificuldade em engravidar (seja feminina, masculina ou ambas) e traçamos condutas personalizadas para preparar o "terreno biológico" do casal. O objetivo é criar o ambiente mais favorável possível para a concepção.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl scroll-scale delay-200">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-10 h-10 text-[#85927D]" />
                <h3 className="text-2xl font-bold text-[#85927D]">
                  Foco em Gestação e Alto Risco
                </h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">
                Para quem já recebeu o positivo e busca segurança.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A gestação é um momento sagrado que exige vigilância. Ofereço um acompanhamento pré-natal diferenciado, com monitoramento fetal rigoroso e atenção especial a gestações de alto risco. Aqui, cuidamos da saúde da mãe e do desenvolvimento do bebê com proximidade, para que você se sinta segura até o momento do parto.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl scroll-scale delay-400">
              <div className="flex items-center gap-4 mb-6">
                <Baby className="w-10 h-10 text-[#5D6861]" />
                <h3 className="text-2xl font-bold text-[#5D6861]">
                  Acompanhamento Fetal
                </h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">
                Para quem já está gestando e deseja cuidado próximo e atento ao bebê.
              </p>
              <p className="text-gray-600 leading-relaxed">
                O acompanhamento fetal é um cuidado contínuo com quem mais importa nesse momento: o seu bebê. Por meio de avaliações regulares, monitoramos o crescimento, o bem-estar e o desenvolvimento fetal, observando sinais que indicam se tudo está evoluindo como esperado dentro do útero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">
            Histórias que ajudei a construir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image src={bebeNascendo} alt="Bebê nascendo" className="object-cover w-full h-full rounded-full" fill />
              </div>
              <div className="flex justify-center gap-1 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 italic mb-4">
                "Espaço para depoimento em vídeo ou texto"
              </p>
              <p className="text-gray-800 font-medium">Nome da Paciente</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-[#85927D]" />
              </div>
              <div className="flex justify-center gap-1 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 italic mb-4">
                "Espaço para depoimento em vídeo ou texto"
              </p>
              <p className="text-gray-800 font-medium">Nome da Paciente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">
            Um atendimento pensado para acolher você
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#5D6861] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tempo de Qualidade</h3>
                <p className="text-gray-600">
                  Minhas avaliações não são apressadas. Dedico o tempo necessário para ouvir sua história e entender suas particularidades.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#85927D] rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Visão Além do Óbvio</h3>
                <p className="text-gray-600">
                  Não trato apenas o sintoma, busco entender a saúde do casal como um todo.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#5D6861] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ambiente Seguro</h3>
                <p className="text-gray-600">
                  Um espaço onde você pode chorar, sorrir e tirar todas as suas dúvidas sem julgamentos.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#85927D] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromisso com a Verdade</h3>
                <p className="text-gray-600">
                  Você terá sempre um direcionamento honesto e ético sobre as possibilidades e os próximos passos do seu tratamento.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#5D6861] text-white px-8 py-4 rounded-full hover:bg-[#85927D] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out transform font-medium text-lg flex items-center gap-3 mx-auto">
              <Calendar className="w-6 h-6" />
              QUERO AGENDAR UMA AVALIAÇÃO DIAGNÓSTICA
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-slide-left">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-10 h-10 text-[#5D6861]" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  Muito prazer, eu sou o Dr. Pedro Assunção
                </h2>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-gray-600 leading-relaxed">
                  [COLOCAR MINI CURRÍCULO DO DR. AQUI]
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Informações sobre formação, especialização, experiência e filosofia de atendimento.
                </p>
              </div>
            </div>
            <div className="w-full h-96 rounded-2xl overflow-hidden flex items-center justify-center scroll-slide-right hover:scale-105 transition-transform duration-500 ease-in-out group relative">
              <Image src={foto2} alt="Dr. Pedro Assunção" className="object-cover w-full h-full" fill />
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-4 justify-center mb-6 scroll-hidden">
            <MapPin className="w-10 h-10 text-[#5D6861]" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Preparei uma estrutura pensada para o seu acolhimento
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed scroll-hidden">
            Meu consultório foi projetado para oferecer privacidade e conforto. Conto com equipamentos modernos para diagnósticos precisos e uma equipe treinada para oferecer um atendimento humano e eficiente. Aqui, cada detalhe importa para o seu bem-estar.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full h-48 rounded-xl overflow-hidden flex items-center justify-center scroll-scale relative">
              <Image src={foto1} alt="Consultório Dr. Pedro Assunção" className="object-cover w-full h-full" fill />
            </div>
            <div className="w-full h-48 rounded-xl overflow-hidden flex items-center justify-center scroll-scale delay-200 relative">
              <Image src={foto2} alt="Consultório Dr. Pedro Assunção" className="object-cover w-full h-full" fill />
            </div>
            <div className="w-full h-48 rounded-xl overflow-hidden flex items-center justify-center scroll-scale delay-400 relative">
              <Image src={foto3} alt="Consultório Dr. Pedro Assunção" className="object-cover w-full h-full" fill />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-[#5D6861] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 scroll-hidden">
            Você não precisa caminhar sozinha.
          </h2>
          <p className="text-lg mb-8 leading-relaxed scroll-hidden">
            Se você busca respostas, segurança e um olhar cuidadoso sobre a sua saúde reprodutiva, estou à disposição para recebê-la. Vamos conversar, entender o seu momento e, juntos, traçar o melhor caminho para o seu sonho.
          </p>
          <button className="bg-white text-[#5D6861] px-8 py-4 rounded-full hover:bg-gray-50 hover:scale-105 transition-all duration-300 font-medium text-lg flex items-center gap-3 mx-auto scroll-scale">
            <HeartHandshake className="w-6 h-6" />
            SOLICITAR MINHA AVALIAÇÃO DIAGNÓSTICA
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-gray-100 mt-6">
            Atendimento ético, sigiloso e personalizado.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Logo e Descrição */}
            <div className="text-center md:text-left">
              <div className="h-16 mb-4 flex items-center justify-center md:justify-start">
                <Image src={logo} alt="Dr. Pedro Assunção" width={120} height={48} className="object-contain max-h-12" />
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Medicina da Fertilidade com cuidado humano e científico para realizar o sonho da maternidade.
              </p>
            </div>

            {/* Contato */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(83) 99627.1000</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <span className="text-sm">📷</span>
                  <span className="text-sm">@dr.pedro.assuncao</span>
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-white mb-4">Localização</h3>
              <div className="flex items-start justify-center md:justify-end gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">ATLANTIS OFFICES DESIGN EMPRESARIAL</p>
                  <p>Av. Pres. Epitácio Pessoa, 2930, Sala 1608</p>
                  <p>Tambauzinho, João Pessoa - PB</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Linha divisória e nome */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-lg font-semibold text-white mb-2">Dr. Pedro Assunção</p>
            <p className="text-gray-400 text-sm">© 2024 - Medicina da Fertilidade • Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
