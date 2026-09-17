import { ref, computed } from 'vue';

export type Language = 'pt' | 'en';

const currentLang = ref<Language>('pt');

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      pillars: 'Pilares',
      mission: 'Compromisso',
      app: 'Plataforma',
      groups: 'Comunidade',
      team: 'Equipe',
      stories: 'Histórias',
      faq: 'FAQ',
      join: 'Fazer parte 🍀',
      volunteer: 'Apoiar como voluntário'
    },
    hero: {
      badge: 'Comunidade gratuita de prática de inglês 🍀',
      title: 'Our First Global Job',
      subtitle: 'Comunidade para profissionais brasileiros que querem destravar o inglês, ganhar confiança e conquistar sua primeira oportunidade internacional.',
      ctaPrimary: 'Conhecer a comunidade',
      ctaCommunity: 'Entrar na comunidade',
      ctaVolunteer: 'Apoiar como voluntário',
      stats: {
        members: 'Membros ativos',
        membersVal: '600+',
        cost: 'Projeto 100% voluntário',
        costVal: 'Gratuito',
        focus: 'Inglês na prática',
        focusVal: 'Conversação',
        practice: 'Sessões semanais',
        practiceVal: 'Networking'
      },
      card: {
        tag: 'Oportunidades globais',
        motto: 'Practice • Grow • Go Global 🍀',
        desc: 'Um ambiente acolhedor, confortável e seguro para praticar e se desenvolver.',
        badge: '100% gratuito e voluntário'
      }
    },
    obstacles: {
      tag: 'A realidade da carreira global',
      title: 'Inglês não é o seu maior obstáculo',
      subtitle: 'Muitos profissionais qualificados travam em processos seletivos por motivos que vão muito além do domínio do idioma.',
      cards: [
        {
          icon: 'ShieldAlert',
          title: 'Falta de confiança',
          desc: 'Você não precisa de um inglês impecável para começar. A prática ajuda a desenvolver confiança para se comunicar, participar de conversas e se preparar para situações reais.',
          action: 'Pratique e ganhe confiança',
          color: 'from-amber-500/20 to-red-500/10'
        },
        {
          icon: 'Compass',
          title: 'Não saber onde começar',
          desc: 'Buscar oportunidades internacionais pode trazer muitas dúvidas: onde encontrar vagas? Como funciona um processo seletivo? Como se comunicar com recrutadores de outros países?',
          action: 'Descubra como começar',
          color: 'from-blue-500/20 to-cyan-500/10'
        },
        {
          icon: 'Clock',
          title: 'Esperar o momento ideal',
          desc: 'Esperar pelo momento ideal pode fazer você adiar o próximo passo. Na OFGJ, você encontra um espaço para praticar, aprender e ganhar confiança no seu ritmo.',
          action: 'Comece no seu ritmo',
          color: 'from-purple-500/20 to-indigo-500/10'
        },
        {
          icon: 'UserX',
          title: 'Fazer por conta própria',
          desc: 'Aprender e se preparar para oportunidades internacionais pode ser mais leve quando você tem com quem trocar experiências, tirar dúvidas e compartilhar aprendizados.',
          action: 'Conte com a comunidade',
          color: 'from-emerald-500/20 to-teal-500/10'
        }
      ],
      quote: '"Na maioria das vezes, o obstáculo não é a língua. É o medo de tentar. Na OFGJ, enfrentamos isso juntos."',
      signature: 'A Our First Global Job 🍀 🌎'
    },
    pillars: {
      tag: 'O que oferecemos',
      title: 'Como a OFGJ te ajuda nessa jornada',
      subtitle: 'Uma comunidade gratuita e colaborativa para apoiar pessoas em suas jornadas de aprendizado, desenvolvimento e busca por oportunidades internacionais.',
      exploreAction: 'Explore na comunidade',
      items: [
        {
          icon: 'BookOpen',
          title: 'Conteúdos sobre carreira internacional',
          desc: 'Guias e dicas práticas sobre currículo, LinkedIn, portfólio, abordagens a recrutadores e expectativas salariais no mercado global.'
        },
        {
          icon: 'Briefcase',
          title: 'Vagas internacionais',
          desc: 'Acesse oportunidades globais de trabalho remoto no Brasil, além de dicas de recrutadores e conteúdos para se preparar para entrevistas em inglês.'
        },
        {
          icon: 'MessageSquare',
          title: 'Eventos e encontros',
          desc: 'Encontros de conversação e trocas com convidados para compartilhar experiências, conhecimentos e aprendizados sobre carreira internacional.'
        },
        {
          icon: 'Users',
          title: 'Conexão e networking',
          desc: 'Conecte-se com devs, designers, pessoas de produto e outros profissionais da tecnologia que buscam ou já atuam no mercado internacional.'
        },
        {
          icon: 'Sparkles',
          title: 'Histórias reais',
          desc: 'Conheça relatos de pessoas que enfrentaram desafios, ganharam confiança e conquistaram sua primeira oportunidade internacional.'
        }
      ]
    },
    mission: {
      tag: 'Nosso compromisso',
      title: 'Transparência em primeiro lugar',
      quote1: 'Nosso objetivo nunca foi prometer empregos internacionais.',
      quote1Sub: 'Não existem receitas mágicas ou fórmulas prontas para conquistar uma oportunidade internacional. O que oferecemos é conhecimento, prática e um espaço para desenvolver habilidades de forma consistente.',
      quote2: 'Nosso objetivo é preparar você para quando a oportunidade aparecer.',
      quote2Sub: 'Acreditamos em preparo contínuo, troca de experiências e desenvolvimento de autonomia para construir uma carreira internacional com mais confiança.',
      motto: 'Practice • Grow • Go Global. 🍀',
      text: 'Se você acredita que o talento brasileiro merece mais espaço no mercado global, as portas da nossa comunidade estão abertas para você.'
    },
    appShowcase: {
      tag: 'Plataforma oficial OFGJ',
      title: 'Aulas e minicursos direto no app',
      subtitle: 'Uma plataforma gratuita para aprender, praticar e se preparar para oportunidades internacionais, com aulas de conversação, minicursos e apoio de mentores voluntários.',
      badge: 'Gratuito para toda a comunidade',
      ctaCardTitle: 'Plataforma oficial OFGJ',
      ctaCardDesc: 'Um espaço para agendar aulas de conversação ao vivo, tirar dúvidas com mentores voluntários, acessar trilhas práticas de estudo e emitir certificados de participação.',
      ctaButton: 'Acessar plataforma',
      clickToDirect: 'Acesso instantâneo sem necessidade de cadastro prévio',
      appUrl: 'https://janyel-lima.github.io/our-first-global-job-app/',
      mockup: {
        item1Title: 'Agenda e inscrição de aulas',
        item1Sub: 'Aulas de conversação ao vivo',
        item1Badge: 'Inscrito',
        item2Title: 'Tirar dúvidas com mentores',
        item2Sub: 'Suporte individualizado',
        item2Badge: 'Ativo',
        item3Title: 'Minicursos práticos',
        item3Sub: 'Inglês para entrevistas globais',
        item3Badge: 'Trilha',
        item4Title: 'Certificados de participação',
        item4Sub: 'Emissão de conclusão do curso',
        item4Badge: 'Disponível'
      },
      features: [
        {
          title: 'Agenda de aulas',
          desc: 'Consulte o calendário de aulas, escolha o melhor horário e faça sua inscrição de forma simples e rápida.'
        },
        {
          title: 'Tire suas dúvidas',
          desc: 'Faça perguntas sempre que precisar e receba orientação direto dos mentores voluntários.'
        },
        {
          title: 'Minicursos práticos',
          desc: 'Acesse conteúdos para desenvolver habilidades importantes para uma carreira internacional.'
        },
        {
          title: 'Certificados',
          desc: 'Ao concluir um minicurso, você pode emitir um certificado de participação para registrar e celebrar seu aprendizado.'
        }
      ]
    },
    groups: {
      tag: 'Nossa comunidade',
      title: 'Conecte-se com a comunidade',
      subtitle: 'Faça parte dos nossos grupos para acompanhar os encontros de inglês, tirar dúvidas, trocar experiências e se conectar com outros profissionais que estão na mesma jornada que você.',
      whatsappTitle: 'WhatsApp',
      whatsappBadge: 'Grupo oficial',
      whatsappDesc: 'Um espaço para acompanhar a programação de encontros, participar de grupos de conversação e trocar experiências diretamente com a comunidade.',
      whatsappBtn: 'Entrar no WhatsApp 💬',
      whatsappFeatures: [
        'Avisos de encontros ao vivo',
        'Dicas rápidas de inglês',
        'Networking com outros profissionais',
        'Grupo focado, sem spam comercial'
      ],
      telegramTitle: 'Telegram',
      telegramBadge: 'Grupo oficial',
      telegramDesc: 'Um espaço para acessar conteúdos, compartilhar dúvidas e encontrar materiais organizados para apoiar sua preparação para oportunidades internacionais.',
      telegramBtn: 'Entrar no Telegram ✈️',
      telegramFeatures: [
        'Guias práticos para entrevista',
        'Conteúdos organizados por tema',
        'Histórico completo das conversas',
        'Trocas com outros profissionais'
      ],
      copyLink: 'Copiar link do grupo',
      copied: 'Link copiado!',
      freeBadge: '100% gratuito',
      trustNote: 'Todos os nossos grupos são gratuitos, colaborativos e contam com moderação ativa para manter um ambiente seguro e livre de spam e vendas.'
    },
    team: {
      tag: 'Liderança & criadores',
      title: 'Responsáveis pelo projeto',
      subtitle: 'Conheça os idealizadores, mentores e facilitadores voluntários dedicados a impulsionar a Our First Global Job.',
      prevLabel: 'Anterior',
      nextLabel: 'Próximo',
      calloutText: 'Quer contribuir com a comunidade?',
      calloutBtn: 'Vamos conversar',
      volunteerPrompt: 'Quer apoiar como facilitadora ou mentora?',
      members: [
        {
          id: 1,
          name: 'Janyel Lima',
          role: 'Idealizador & Tech Lead',
          badge: 'Fundador',
          location: 'Brasil 🇧🇷',
          bio: 'Engenheiro de Software apaixonado por comunidades open-source. Idealizou a Our First Global Job para conectar talentos brasileiros a oportunidades internacionais.',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com/janyel-lima',
          linkedin: 'https://linkedin.com',
          email: 'janyel@ourfirstglobaljob.org',
          tags: ['Full Stack', 'Tech Lead', 'Open Source']
        },
        {
          id: 2,
          name: 'Camila Rocha',
          role: 'Coordenadora de Comunidade & Mentora',
          badge: 'Comunidade',
          location: 'São Paulo, BR',
          bio: 'Especialista em recrutamento global e comunicação. Conduz simulações de entrevistas comportamentais e conecta membros aos grupos de estudo.',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
          github: '',
          linkedin: 'https://linkedin.com',
          email: 'camila@ourfirstglobaljob.org',
          tags: ['Community', 'Career Coach', 'HR Tech']
        },
        {
          id: 3,
          name: 'Lucas Andrade',
          role: 'Facilitador Senior de Conversação',
          badge: 'Facilitador',
          location: 'Lisboa, PT / Remote',
          bio: 'Desenvolvedor Frontend sênior atuando no mercado dos EUA. Lidera encontros semanais de voz para destravar a fluência técnica e profissional.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'lucas@ourfirstglobaljob.org',
          tags: ['Frontend', 'English Mentorship', 'Global Dev']
        },
        {
          id: 4,
          name: 'Mariana Silva',
          role: 'Head de UX & Experiência de Aprendizado',
          badge: 'Design',
          location: 'Belo Horizonte, BR',
          bio: 'Product Designer focada em acessibilidade e ed-tech. Responsável pelo design de interface e pela experiência amigável da plataforma.',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'mariana@ourfirstglobaljob.org',
          tags: ['UX/UI', 'Design System', 'EdTech']
        },
        {
          id: 5,
          name: 'Gustavo Ferreira',
          role: 'Engenheiro de Dados & Mentor Voluntário',
          badge: 'Mentor Tech',
          location: 'Curitiba, BR',
          bio: 'Engenheiro de dados em empresa canadense. Apoia a estruturação dos minicursos práticos e trilhas de desenvolvimento profissional.',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'gustavo@ourfirstglobaljob.org',
          tags: ['Data Engineering', 'Mentorship', 'Cloud']
        }
      ]
    },
    stories: {
      tag: 'Comunidade em ação',
      title: 'Quem já está construindo esse caminho',
      subtitle: 'Veja histórias reais de membros que desenvolveram confiança e conquistaram espaço global.',
      items: [
        {
          id: 1,
          initials: 'RL',
          name: 'Rafael Lima',
          role: 'Senior Frontend Engineer',
          companyLocation: '🇺🇸 US Startup Remote',
          quote: 'Eu passei 3 anos adiando aplicações por achar que meu inglês precisava ser perfeito. Nos treinos da OFGJ percebi que os recrutadores queriam entender minhas soluções, não um sotaque britânico. Conquistei minha primeira vaga em dólar há 6 meses!'
        },
        {
          id: 2,
          initials: 'CS',
          name: 'Camila Santos',
          role: 'Product Designer',
          companyLocation: '🇪🇺 European Tech Firm',
          quote: 'Fazer simulação de entrevista com outros brasileiros me tirou da zona de pânico. A comunidade me ajudou a ajustar meu portfólio em inglês e estruturar minhas respostas no formato STAR. Mudou minha carreira completamente.'
        },
        {
          id: 3,
          initials: 'MB',
          name: 'Mateus Barbosa',
          role: 'Backend Developer',
          companyLocation: '🇨🇦 Canadian SaaS',
          quote: 'O networking genuíno aqui não tem preço. Ninguém quer vender curso caro; todos se ajudam voluntariamente. Quando surgiu a indicação para a vaga, eu já estava pronto porque vinha treinando semanalmente.'
        }
      ]
    },
    faq: {
      tag: 'Dúvidas frequentes',
      title: 'Perguntas frequentes',
      subtitle: 'Tudo o que você precisa saber sobre a nossa comunidade, os encontros e como participar.',
      items: [
        {
          question: 'Como faço para participar da comunidade?',
          answer: 'É simples: basta entrar no nosso grupo de WhatsApp ou no nosso canal no Telegram para começar a interagir com outras pessoas da comunidade. Depois de entrar, você poderá conhecer as iniciativas da OFGJ, participar dos encontros e se conectar com outras pessoas que também estão aprendendo e crescendo.\n\nPara se inscrever nas aulas e participar dos minicursos, o acesso é feito pela plataforma oficial.'
        },
        {
          question: 'Preciso pagar algo para participar da comunidade?',
          answer: 'Não. A OFGJ é 100% gratuita e mantida por voluntários. A comunidade nasceu para criar um espaço acessível para praticar inglês, trocar experiências e se conectar com outras pessoas.\n\nNão oferecemos cursos, mentorias pagas ou qualquer tipo de acesso premium. Nosso objetivo é tornar essa preparação mais acessível para quem quer desenvolver o inglês e se preparar para oportunidades internacionais.'
        },
        {
          question: 'Preciso ter um nível mínimo de inglês para participar?',
          answer: 'Não. Você não precisa estar fluente nem se sentir pronto para entrar. A comunidade reúne pessoas em diferentes momentos de aprendizado e foi criada justamente para quem quer desenvolver a confiança para se comunicar em inglês, independentemente do nível.\n\nO importante é ter vontade de praticar e aprender. Os encontros de conversação são organizados por níveis apenas para facilitar a participação e o acompanhamento de todas as pessoas. Você pode começar no seu ritmo e aprender com a comunidade.'
        },
        {
          question: 'Como funcionam os encontros de conversação?',
          answer: 'São encontros para praticar inglês em um ambiente acolhedor, com outras pessoas da comunidade.\n\nAs sessões acontecem ao vivo, semanalmente, normalmente com duração de 1 hora, e são conduzidas por voluntários. É um espaço para conversar, experimentar o idioma, trocar experiências e ganhar confiança na prática.\n\nAs inscrições acontecem dentro da plataforma oficial, onde você pode escolher os dias e horários que funcionam melhor para você.'
        },
        {
          question: 'Preciso ser fluente para ser voluntário?',
          answer: 'Não precisa ser fluente, mas para atuar como monitor nos encontros de conversação, é importante ter segurança suficiente em inglês e se sentir confortável para conduzir as atividades e apoiar as pessoas participantes. Normalmente, isso acontece a partir dos níveis B2 ou C1, mas muitos dos nossos monitores ainda estão no próprio processo de desenvolvimento do inglês.\n\nVocê não precisa saber tudo para compartilhar o que sabe.'
        },
        {
          question: 'Preciso ter experiência internacional para ser mentor?',
          answer: 'Não é obrigatório. Ser mentor não significa ter todas as respostas ou necessariamente uma trajetória internacional. Se você já trabalha remoto para fora ou já passou por processos internacionais, isso ajuda bastante, mas o mais importante é ter experiências e conhecimentos que possam contribuir para o desenvolvimento de outras pessoas e vontade de compartilhar.'
        }
      ]
    },
    modal: {
      title: 'Quero contribuir com a OFGJ 🍀',
      subtitle: 'Preencha suas informações para iniciar uma conversa com a coordenação pelo WhatsApp e conhecer as formas de contribuir com a comunidade.',
      nameLabel: 'Como devemos chamar você?',
      roleLabel: 'Qual é sua área de atuação ou cargo?',
      englishLevelLabel: 'Como você se sente em relação ao seu inglês?',
      levelBasic: 'Iniciante',
      levelIntermediate: 'Intermediário',
      levelAdvanced: 'Avançado / Fluente',
      submitVolunteer: 'Iniciar conversa no WhatsApp 💬',
      successVolunteerTitle: 'Mensagem pronta para envio! 💬',
      successVolunteerDesc: 'Clique abaixo para abrir o WhatsApp e conversar diretamente com a coordenação da comunidade:',
      sendVolunteerWhatsapp: 'Iniciar conversa no WhatsApp 💬',
      nextLiveNotice: 'Próximo encontro de conversação ao vivo: Quinta-feira às 19h30 🇧🇷',
      closeWindow: 'Fechar janela',
      placeholders: {
        name: 'Ex: Ana Silva',
        role: 'Ex: Desenvolvedora Frontend / QA / Designer'
      }
    },
    footer: {
      description: 'Uma comunidade voluntária dedicada a ajudar profissionais brasileiros a desenvolverem confiança em inglês e conquistarem posições internacionais.',
      links: 'Navegação',
      communityTitle: 'Quer contribuir com a comunidade?',
      communityHelp: 'Se você se sente confortável para conversar em inglês e quer compartilhar seu conhecimento, venha facilitar encontros de conversação e apoiar outras pessoas em sua jornada.',
      communityAction: 'Quero contribuir',
      motto: 'Practice • Grow • Go Global. 🍀',
      volunteerTerms: 'Termos voluntários',
      codeOfConduct: 'Código de conduta',
      rights: 'Todos os direitos reservados. Feito com orgulho e voluntariado para o Brasil 🇧🇷'
    }
  },
  en: {
    nav: {
      about: 'About',
      pillars: 'Pillars',
      mission: 'Commitment',
      app: 'Platform',
      groups: 'Community',
      team: 'Team',
      stories: 'Stories',
      faq: 'FAQ',
      join: 'Join in 🍀',
      volunteer: 'Support as volunteer'
    },
    hero: {
      badge: 'Free English practice community 🍀',
      title: 'Our First Global Job',
      subtitle: 'A community for Brazilian professionals looking to unlock spoken English, gain confidence, and land their first international opportunity.',
      ctaPrimary: 'Explore the community',
      ctaCommunity: 'Join the community',
      ctaVolunteer: 'Support as volunteer',
      stats: {
        members: 'Active members',
        membersVal: '600+',
        cost: '100% Volunteer project',
        costVal: 'Free',
        focus: 'English in practice',
        focusVal: 'Speaking',
        practice: 'Weekly sessions',
        practiceVal: 'Networking'
      },
      card: {
        tag: 'Global opportunities',
        motto: 'Practice • Grow • Go Global 🍀',
        desc: 'A welcoming, comfortable, and safe space to practice and grow.',
        badge: '100% free and volunteer'
      }
    },
    obstacles: {
      tag: 'The reality of a global career',
      title: 'English is not your biggest obstacle',
      subtitle: 'Many skilled professionals stall during hiring processes for reasons that go far beyond grammar.',
      cards: [
        {
          icon: 'ShieldAlert',
          title: 'Lack of confidence',
          desc: 'You do not need flawless English to begin. Regular practice builds the confidence to communicate, join conversations, and handle real interview situations.',
          action: 'Practice and build confidence',
          color: 'from-amber-500/20 to-red-500/10'
        },
        {
          icon: 'Compass',
          title: 'Not knowing where to start',
          desc: 'Searching for global opportunities brings many questions: where to find verified roles? How does the hiring pipeline work? How to talk with international recruiters?',
          action: 'Discover where to begin',
          color: 'from-blue-500/20 to-cyan-500/10'
        },
        {
          icon: 'Clock',
          title: 'Waiting for the perfect moment',
          desc: 'Waiting for the ideal moment makes you postpone your next step indefinitely. At OFGJ, you find a welcoming space to practice, learn, and grow at your own pace.',
          action: 'Start at your pace',
          color: 'from-purple-500/20 to-indigo-500/10'
        },
        {
          icon: 'UserX',
          title: 'Doing it all alone',
          desc: 'Preparing in isolation generates anxiety and second-guessing. In a community, everything feels lighter when you can exchange experiences, ask questions, and share milestones.',
          action: 'Rely on the community',
          color: 'from-emerald-500/20 to-teal-500/10'
        }
      ],
      quote: '"Most of the time, the obstacle isn\'t the language. It\'s the fear of trying. At OFGJ, we face it together."',
      signature: 'Our First Global Job 🍀 🌎'
    },
    pillars: {
      tag: 'What we offer',
      title: 'How OFGJ supports you along this journey',
      subtitle: 'A free, collaborative community to support individuals in learning, professional development, and pursuing international opportunities.',
      exploreAction: 'Explore in the community',
      items: [
        {
          icon: 'BookOpen',
          title: 'International career content',
          desc: 'Practical guides and tips covering resumes, LinkedIn, portfolios, recruiter outreach, and compensation benchmarks in USD/EUR.'
        },
        {
          icon: 'Briefcase',
          title: 'International jobs',
          desc: 'Access global remote opportunities for professionals in Brazil, along with recruiter insights and English interview prep resources.'
        },
        {
          icon: 'MessageSquare',
          title: 'Events and live sessions',
          desc: 'Spoken English practice calls and guest sessions to exchange experiences, practical know-how, and career insights.'
        },
        {
          icon: 'Users',
          title: 'Connection and networking',
          desc: 'Connect with developers, designers, product managers, and tech professionals aspiring to or already working globally.'
        },
        {
          icon: 'Sparkles',
          title: 'Real stories',
          desc: 'Discover authentic journeys of members who overcame challenges, gained confidence, and landed their first international role.'
        }
      ]
    },
    mission: {
      tag: 'Our commitment',
      title: 'Transparency above all',
      quote1: 'Our goal has never been to promise international jobs.',
      quote1Sub: 'There are no magic formulas or shortcuts to land a global job. What we offer is knowledge, hands-on practice, and a supportive space to develop skills consistently.',
      quote2: 'Our goal is to prepare you for when opportunity appears.',
      quote2Sub: 'We believe in continuous preparation, shared experiences, and building real autonomy to pursue international careers with confidence.',
      motto: 'Practice • Grow • Go Global. 🍀',
      text: 'If you believe Brazilian talent deserves more room in the global market, the doors to our community are wide open for you.'
    },
    appShowcase: {
      tag: 'Official OFGJ platform',
      title: 'Classes and mini-courses right in the app',
      subtitle: 'A free platform to learn, practice, and prepare for international roles, featuring conversation classes, mini-courses, and volunteer mentor guidance.',
      badge: 'Free for the whole community',
      ctaCardTitle: 'Official OFGJ platform',
      ctaCardDesc: 'A space to schedule live conversation classes, ask questions with volunteer mentors, access study paths, and issue completion certificates.',
      ctaButton: 'Access platform',
      clickToDirect: 'Instant access without requiring prior registration',
      appUrl: 'https://janyel-lima.github.io/our-first-global-job-app/',
      mockup: {
        item1Title: 'Class schedule and registration',
        item1Sub: 'Live conversation sessions',
        item1Badge: 'Enrolled',
        item2Title: 'Ask questions with mentors',
        item2Sub: 'Individualized support',
        item2Badge: 'Active',
        item3Title: 'Hands-on mini-courses',
        item3Sub: 'English for global interviews',
        item3Badge: 'Track',
        item4Title: 'Participation certificates',
        item4Sub: 'Course completion issuance',
        item4Badge: 'Available'
      },
      features: [
        {
          title: 'Class schedule',
          desc: 'Browse class schedules, pick the best slot, and secure your attendance with just one click.'
        },
        {
          title: 'Ask questions',
          desc: 'Ask questions whenever you need and get direct guidance from volunteer mentors.'
        },
        {
          title: 'Practical mini-courses',
          desc: 'Access curated modules to develop essential skills for an international career.'
        },
        {
          title: 'Certificates',
          desc: 'Upon completing a mini-course, issue your certificate of participation to celebrate your learning.'
        }
      ]
    },
    groups: {
      tag: 'Our community',
      title: 'Connect with the community',
      subtitle: 'Join our groups to follow English practice sessions, ask questions, share insights, and connect with other professionals walking the same path.',
      whatsappTitle: 'WhatsApp',
      whatsappBadge: 'Official group',
      whatsappDesc: 'A space to follow scheduled sessions, join conversation practice groups, and share experiences directly with the community.',
      whatsappBtn: 'Join WhatsApp 💬',
      whatsappFeatures: [
        'Direct live session notices',
        'Quick English tips',
        'Networking with fellow professionals',
        'Focused group with zero commercial spam'
      ],
      telegramTitle: 'Telegram',
      telegramBadge: 'Official group',
      telegramDesc: 'A space to access materials, ask questions, and discover organized guides to support your preparation for global opportunities.',
      telegramBtn: 'Join Telegram ✈️',
      telegramFeatures: [
        'Practical interview guides',
        'Content organized by topic',
        'Complete message history',
        'Exchanges with other professionals'
      ],
      copyLink: 'Copy group link',
      copied: 'Link copied!',
      freeBadge: '100% free',
      trustNote: 'All our groups are free, collaborative, and actively moderated to maintain a safe environment without spam or sales.'
    },
    team: {
      tag: 'Leadership & creators',
      title: 'Who makes it happen',
      subtitle: 'Meet the creators, mentors, and volunteer facilitators dedicated to empowering Our First Global Job.',
      prevLabel: 'Previous',
      nextLabel: 'Next',
      calloutText: 'Want to contribute to the community?',
      calloutBtn: 'Let\'s talk',
      volunteerPrompt: 'Want to support as a facilitator or mentor?',
      members: [
        {
          id: 1,
          name: 'Janyel Lima',
          role: 'Founder & Tech Lead',
          badge: 'Founder',
          location: 'Brazil 🇧🇷',
          bio: 'Software Engineer passionate about open-source communities. Founded Our First Global Job to connect Brazilian talent with international opportunities.',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com/janyel-lima',
          linkedin: 'https://linkedin.com',
          email: 'janyel@ourfirstglobaljob.org',
          tags: ['Full Stack', 'Tech Lead', 'Open Source']
        },
        {
          id: 2,
          name: 'Camila Rocha',
          role: 'Community Coordinator & Mentor',
          badge: 'Community',
          location: 'São Paulo, BR',
          bio: 'International recruitment & interpersonal communication specialist. Coordinates networking events and mock English interview sessions.',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
          github: '',
          linkedin: 'https://linkedin.com',
          email: 'camila@ourfirstglobaljob.org',
          tags: ['Community', 'Career Coach', 'HR Tech']
        },
        {
          id: 3,
          name: 'Lucas Andrade',
          role: 'Senior Conversation Facilitator',
          badge: 'Facilitator',
          location: 'Lisbon, PT / Remote',
          bio: 'Senior Frontend Developer working for US companies. Facilitates weekly voice sessions focused on unlocking technical interview speaking confidence.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'lucas@ourfirstglobaljob.org',
          tags: ['Frontend', 'English Mentorship', 'Global Dev']
        },
        {
          id: 4,
          name: 'Mariana Silva',
          role: 'Head of UX & Learning Experience',
          badge: 'Design',
          location: 'Belo Horizonte, BR',
          bio: 'Product Designer focused on accessibility and educational tech. Leads design system and smooth user experience across the OFGJ ecosystem.',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'mariana@ourfirstglobaljob.org',
          tags: ['UX/UI', 'Design System', 'EdTech']
        },
        {
          id: 5,
          name: 'Gustavo Ferreira',
          role: 'Data Engineer & Volunteer Mentor',
          badge: 'Tech Mentor',
          location: 'Curitiba, BR',
          bio: 'Data Engineer at a Canadian company. Supports hands-on mini-course curriculum design and career transition mentorship for developers.',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'gustavo@ourfirstglobaljob.org',
          tags: ['Data Engineering', 'Mentorship', 'Cloud']
        }
      ]
    },
    stories: {
      tag: 'Community in action',
      title: 'Real members building their journey',
      subtitle: 'See authentic stories of members who developed confidence and earned their global position.',
      items: [
        {
          id: 1,
          initials: 'RL',
          name: 'Rafael Lima',
          role: 'Senior Frontend Engineer',
          companyLocation: '🇺🇸 US Startup Remote',
          quote: 'I postponed applications for 3 years thinking my English had to be flawless. In OFGJ practice sessions, I realized recruiters wanted to understand my problem-solving skills, not a British accent. I landed my first USD role 6 months ago!'
        },
        {
          id: 2,
          initials: 'CS',
          name: 'Camila Santos',
          role: 'Product Designer',
          companyLocation: '🇪🇺 European Tech Firm',
          quote: 'Mock interviewing with fellow Brazilians pulled me out of panic mode. The community helped refine my portfolio in English and structure my answers using STAR. It completely transformed my career trajectory.'
        },
        {
          id: 3,
          initials: 'MB',
          name: 'Mateus Barbosa',
          role: 'Backend Developer',
          companyLocation: '🇨🇦 Canadian SaaS',
          quote: 'The genuine networking here is priceless. Nobody is trying to sell expensive courses; everyone helps voluntarily. When a referral came up, I was already prepared because of weekly practice.'
        }
      ]
    },
    faq: {
      tag: 'Frequently asked questions',
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know about our community, sessions, and how to get involved.',
      items: [
        {
          question: 'How do I join the community?',
          answer: 'It is simple: just join our WhatsApp group or our Telegram channel to start interacting with other community members. Once in, you can learn about OFGJ initiatives, join live sessions, and connect with fellow professionals who are also learning and growing.\n\nTo enroll in classes and mini-courses, access is provided through our official platform.'
        },
        {
          question: 'Do I have to pay anything to participate?',
          answer: 'No. OFGJ is 100% free and run by volunteers. The community was born to create an accessible space to practice English, exchange experiences, and connect with others.\n\nWe do not offer paid courses, paid mentoring, or premium tiers. Our mission is to make preparation accessible for anyone wanting to improve English for global opportunities.'
        },
        {
          question: 'Do I need a minimum English level to join?',
          answer: 'No. You do not need to be fluent or feel completely ready to join. Our community welcomes people at every learning stage and was created precisely to build speaking confidence regardless of initial level.\n\nWhat matters is the willingness to practice and learn. Conversation circles are organized by level simply to facilitate participation. You can start at your own pace.'
        },
        {
          question: 'How do the conversation sessions work?',
          answer: 'They are live meetings to practice English in a warm, friendly atmosphere with fellow community members.\n\nSessions take place live weekly, usually lasting 1 hour, led by volunteers. It is a welcoming space to speak, experiment, exchange experiences, and gain practical confidence.\n\nEnrollments take place within the official platform, where you can pick the days and hours that work best for you.'
        },
        {
          question: 'Do I need to be fluent to volunteer?',
          answer: 'You don\'t need native fluency. To act as a session monitor in conversation circles, having enough confidence to lead activities and support participants is what counts. Typically, this begins around B2 or C1, though many of our facilitators are also continually refining their own English.\n\nYou do not need to know everything to share what you know.'
        },
        {
          question: 'Do I need international experience to mentor?',
          answer: 'It is not mandatory. Being a mentor doesn\'t mean having all the answers or an overseas resume. If you already work remotely abroad or went through international hiring processes, that helps greatly, but the most important thing is having knowledge and experiences you want to share.'
        }
      ]
    },
    modal: {
      title: 'Want to contribute to OFGJ 🍀',
      subtitle: 'Fill in your details to start a conversation with coordination on WhatsApp and explore how you can contribute to the community.',
      nameLabel: 'How should we call you?',
      roleLabel: 'What is your role or field?',
      englishLevelLabel: 'How do you feel about your English?',
      levelBasic: 'Beginner',
      levelIntermediate: 'Intermediate',
      levelAdvanced: 'Advanced / Fluent',
      submitVolunteer: 'Start chat on WhatsApp 💬',
      successVolunteerTitle: 'Message ready to send! 💬',
      successVolunteerDesc: 'Click below to open WhatsApp and chat directly with our community coordination:',
      sendVolunteerWhatsapp: 'Start chat on WhatsApp 💬',
      nextLiveNotice: 'Next live practice session: Thursday at 7:30 PM 🇧🇷',
      closeWindow: 'Close window',
      placeholders: {
        name: 'e.g., Ana Silva',
        role: 'e.g., Frontend Developer / QA / Designer'
      }
    },
    footer: {
      description: 'A volunteer community dedicated to helping Brazilian professionals build confidence in spoken English and achieve international roles.',
      links: 'Navigation',
      communityTitle: 'Want to contribute to the community?',
      communityHelp: 'If you feel comfortable speaking English and want to share what you know, come facilitate conversation circles and support others on their journey.',
      communityAction: 'I want to contribute',
      motto: 'Practice • Grow • Go Global. 🍀',
      volunteerTerms: 'Volunteer terms',
      codeOfConduct: 'Code of conduct',
      rights: 'All rights reserved. Made with pride and volunteer dedication for Brazil 🇧🇷'
    }
  }
};

export function useI18n() {
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'pt' ? 'en' : 'pt';
  };

  const setLanguage = (lang: Language) => {
    currentLang.value = lang;
  };

  const t = computed(() => translations[currentLang.value]);

  return {
    lang: currentLang,
    language: currentLang,
    t,
    toggleLanguage,
    setLanguage
  };
}
