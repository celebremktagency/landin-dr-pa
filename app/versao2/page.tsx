"use client";

import Image from "next/image";
import foto1 from '../foto1.png';
import foto2 from '../foto2.png';
import foto3 from '../foto3.png';
import logo from '../Logo.png';
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
  Quote
} from "lucide-react";

export default function Versao2() {
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

    const elementsToAnimate = document.querySelectorAll('.scroll-hidden, .scroll-slide-left, .scroll-slide-right, .scroll-scale');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-[#85927D] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 flex items-center">
                <Image src={logo} alt="Dr. Pedro Assunção" width={100} height={40} className="object-contain" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-[#5D6861]">Dr. Pedro Assunção</h1>
                <p className="text-sm text-[#85927D]">Medicina da Fertilidade</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#5D6861] to-[#85927D] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              AGENDAR CONSULTA
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Layout Diferente */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-green-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-hidden">
            <div className="inline-block bg-[#5D6861] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              🌟 Medicina da Fertilidade Especializada
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-8">
              Seu objetivo final não é apenas o teste positivo. É ter o seu bebê no colo com saúde.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Sei que a jornada da maternidade pode trazer dúvidas e ansiedades. Aqui em João Pessoa, ofereço um espaço seguro de escuta e uma investigação médica minuciosa para maximizar as suas chances de ter seu bebê no colo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-[#5D6861] to-[#85927D] text-white px-10 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center gap-3">
                <Stethoscope className="w-6 h-6" />
                QUERO AGENDAR UMA AVALIAÇÃO DIAGNÓSTICA
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Cards com estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 scroll-scale text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#5D6861] mb-2">500+</h3>
              <p className="text-gray-600">Famílias realizadas</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 scroll-scale delay-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#5D6861] mb-2">15+</h3>
              <p className="text-gray-600">Anos de experiência</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 scroll-scale delay-400 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#5D6861] mb-2">95%</h3>
              <p className="text-gray-600">Taxa de sucesso</p>
            </div>
          </div>

          {/* Galeria do doutor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-hidden">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#85927D] h-96">
              <Image src="foto1" alt="Dr. Pedro Assunção" className="object-cover w-full h-full" fill />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D6861]/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Dr. Pedro Assunção</h3>
                <p className="text-white/80">Especialista em Fertilidade</p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#85927D] h-96">
              <Image src="foto2" alt="Dr. Pedro Assunção" className="object-cover w-full h-full" fill />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D6861]/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Atendimento</h3>
                <p className="text-white/80">Cuidado personalizado</p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#85927D] h-96">
              <Image src="foto3" alt="Dr. Pedro Assunção" className="object-cover w-full h-full" fill />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D6861]/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Consultório</h3>
                <p className="text-white/80">Ambiente acolhedor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Problemas - Layout em Timeline */}
      <section className="py-24 px-4 bg-[#5D6861] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-hidden">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Eu sei que o caminho até aqui pode ter sido exaustivo.
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Muitas mulheres e casais chegam ao meu consultório carregando uma bagagem emocional pesada. Talvez você se identifique com estes sentimentos:
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8 scroll-slide-left">
              <div className="md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Espera silenciosa</h3>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    O tempo passa e, a cada ciclo, a expectativa se transforma em frustração. É difícil lidar com a incerteza de quando, ou se, o positivo virá.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold">01</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 scroll-slide-right">
              <div className="md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Sensação de estar perdida</h3>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Você já tem exames, talvez até diagnósticos, mas sente que falta alguém para unir as peças do quebra-cabeça e olhar para você por inteira, não apenas para o seu sistema reprodutivo.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold">02</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 scroll-slide-left">
              <div className="md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Necessidade de segurança</h3>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Se você já engravidou, a alegria pode vir acompanhada do medo. O desejo de ter alguém que segure sua mão e vigie cada passo da gestação é imenso.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold">03</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 scroll-slide-right">
              <div className="md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Desejo de ser ouvida</h3>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Mais do que receitas médicas, você busca um profissional que entenda suas angústias, tire suas dúvidas sem pressa e envolva seu parceiro no processo.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold">04</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-200 font-medium mt-12 text-center">
            Seu sonho é legítimo e merece ser tratado com a máxima dedicação e respeito.
          </p>
        </div>
      </section>

      {/* Seção de Solução - Cards Modernos */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-hidden">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Uma abordagem integral
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eu acredito que a medicina da fertilidade não deve ser mecânica. Cada história é única, e cada corpo tem seu próprio tempo e necessidades. Por isso, meu trabalho não é oferecer fórmulas mágicas, mas sim Investigação e Cuidado.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Como eu guio a sua jornada:
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 scroll-slide-left">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5D6861] mb-4">Olhar Multidisciplinar</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    A fertilidade não é isolada. Eu avalio a saúde global do casal, entendendo como o estilo de vida, o emocional e a biologia conversam entre si.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Análise hormonal completa
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Avaliação estrutural detalhada
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Fatores masculinos inclusos
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 scroll-slide-right">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5D6861] mb-4">Investigação Minuciosa</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Antes de propor qualquer caminho, precisamos entender o terreno. Realizo uma avaliação diagnóstica detalhada para identificar fatores que podem estar dificultando a concepção ou a manutenção da gestação.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Protocolo exclusivo para você
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Acompanhamento contínuo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Suporte emocional incluído
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 scroll-slide-left">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5D6861] mb-4">Preparo do Organismo</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Trabalhamos para que o seu corpo (e o do seu parceiro) esteja nas melhores condições possíveis para receber uma nova vida.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Pré-natal especializado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Monitoramento fetal avançado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Prevenção de complicações
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 scroll-slide-right">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5D6861] to-[#85927D] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5D6861] mb-4">Transparência e Direcionamento</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    A medicina não nos permite garantir resultados absolutos, mas meu compromisso é utilizar todo o conhecimento científico disponível para maximizar suas chances e lhe dar clareza em cada etapa.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Consultas sem pressa
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Comunicação transparente
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#85927D]" />
                      Parceiro sempre incluído
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção About - Layout Side by Side Moderno */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-slide-left">
              <div className="mb-8">
                <span className="inline-block bg-[#85927D]/10 text-[#5D6861] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  👨‍⚕️ Conheça o especialista
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                  Dr. Pedro Assunção
                </h2>
                <p className="text-xl text-[#85927D] font-medium mb-6">
                  Especialista em Medicina da Fertilidade
                </p>
              </div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Há mais de 15 anos dedicado à medicina da fertilidade, tenho o privilégio de 
                  acompanhar casais em uma das jornadas mais importantes de suas vidas.
                </p>
                <p>
                  Minha filosofia é simples: cada pessoa é única e merece um cuidado personalizado. 
                  Aqui você não é apenas um número, é uma história que desejo ajudar a escrever.
                </p>
                <p>
                  Combinando expertise técnica com acolhimento humano, trabalho para que você 
                  se sinta segura e confiante em cada etapa do processo.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#5D6861] to-[#85927D] text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold flex items-center gap-3 justify-center">
                  <Calendar className="w-5 h-5" />
                  AGENDAR CONSULTA
                </button>
                <button className="border-2 border-[#85927D] text-[#85927D] px-8 py-4 rounded-full hover:bg-[#85927D] hover:text-white transition-all duration-300 font-semibold flex items-center gap-3 justify-center">
                  <UserCheck className="w-5 h-5" />
                  VER CURRÍCULO
                </button>
              </div>
            </div>

            <div className="scroll-slide-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#5D6861]/20 to-[#85927D]/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-[#85927D]/20">
                  <Image src="foto2" alt="Dr. Pedro Assunção" className="object-cover w-full h-[600px]" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos - Layout Carrossel */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#5D6861] to-[#85927D] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-hidden">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Histórias de sucesso reais
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cada bebê que nasce é uma vitória compartilhada. Conheça algumas das famílias que realizei o sonho.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Foto do Dr. Pedro com pacientes */}
            <div className="lg:row-span-2">
              <div className="relative h-96 lg:h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                <Image src="foto1" alt="Dr. Pedro Assunção com pacientes" className="object-cover w-full h-full" fill />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5D6861]/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Dr. Pedro Assunção</h3>
                  <p className="text-white/90">Acompanhando cada jornada com dedicação</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl scroll-scale">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-8 h-8 text-white/60 flex-shrink-0" />
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    "Após 3 anos tentando, o Dr. Pedro nos deu esperança novamente. 
                    Hoje nossa Maria Clara está com 2 anos e enchendo nossa casa de alegria."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Ana & Carlos</p>
                      <p className="text-white/60 text-sm">Pais da Maria Clara</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl scroll-scale delay-200">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-8 h-8 text-white/60 flex-shrink-0" />
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    "O cuidado do Dr. Pedro vai além da medicina. Ele nos acompanhou 
                    em cada etapa com carinho e profissionalismo excepcional."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Fernanda & João</p>
                      <p className="text-white/60 text-sm">Pais do Miguel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Consultório - Layout em Grid */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-hidden">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Estrutura pensada para seu conforto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um ambiente acolhedor com tecnologia de ponta para oferecer o melhor cuidado médico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group scroll-scale">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-80">
                <Image src="foto1" alt="Dr. Pedro Assunção em atendimento" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" fill />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Dr. Pedro em Ação</h3>
                  <p className="text-white/80">Atendimento dedicado e personalizado</p>
                </div>
              </div>
            </div>

            <div className="group scroll-scale delay-200">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-80">
                <Image src="foto2" alt="Dr. Pedro Assunção no consultório" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" fill />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Cuidado Especializado</h3>
                  <p className="text-white/80">Expertise em medicina da fertilidade</p>
                </div>
              </div>
            </div>

            <div className="group scroll-scale delay-400">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-80">
                <Image src="foto3" alt="Dr. Pedro Assunção" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" fill />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Ambiente Profissional</h3>
                  <p className="text-white/80">Estrutura moderna e acolhedora</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 scroll-hidden">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-8 h-8 text-[#5D6861]" />
                <h3 className="text-2xl font-bold text-[#5D6861]">Localização Privilegiada</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Localizado no coração de João Pessoa, no moderno complexo Atlantis Offices, 
                com fácil acesso e estacionamento disponível.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#85927D]" />
                  <span>Estacionamento gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#85927D]" />
                  <span>Acessibilidade completa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#85927D]" />
                  <span>Localização central</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Design Impactante */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#5D6861] via-[#85927D] to-[#5D6861] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-hidden">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Seu sonho começa hoje
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Não deixe mais tempo passar. Cada dia é uma oportunidade de estar mais perto 
              de realizar o sonho de ser mãe.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl mb-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">🎁 Avaliação Diagnóstica Gratuita</h3>
              <p className="text-white/80 mb-6">
                Primeira consulta sem custo para entender seu caso e traçar o melhor plano de ação.
              </p>
              <button className="bg-white text-[#5D6861] px-10 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-bold text-xl flex items-center gap-3 mx-auto">
                <Calendar className="w-6 h-6" />
                AGENDAR AVALIAÇÃO GRATUITA
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            <p className="text-white/60 text-sm">
              ✓ Atendimento sigiloso e personalizado • ✓ Sem compromisso inicial
            </p>
          </div>
        </div>
      </section>

      {/* Footer Moderno */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <div className="h-12 mb-6">
                <Image src={logo} alt="Dr. Pedro Assunção" width={120} height={48} className="object-contain" />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Dr. Pedro Assunção - Especialista em Medicina da Fertilidade. 
                Cuidado humano e científico para realizar o sonho da maternidade em João Pessoa.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#5D6861] rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">IG</span>
                </div>
                <div className="w-10 h-10 bg-[#5D6861] rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">FB</span>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contato Direto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#85927D]" />
                  <span className="text-gray-300">(83) 99627.1000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#85927D]">📱</span>
                  <span className="text-gray-300">@dr.pedro.assuncao</span>
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Localização</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#85927D] mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white">ATLANTIS OFFICES</p>
                  <p>Av. Pres. Epitácio Pessoa, 2930</p>
                  <p>Sala 1608 - Tambauzinho</p>
                  <p>João Pessoa - PB</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dr. Pedro Assunção - Medicina da Fertilidade • Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}