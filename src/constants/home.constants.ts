// Hero Section Constants
export const HERO_CONTENT = {
  smallTitle: 'INNOVATIVE VOTING SYSTEM',
  mainTitle: {
    line1: '모두가 믿을 수 있고, 가장 혁신적인',
    line2: '온라인 투표 서비스',
  },
  buttons: {
    quote: {
      label: '견적보기',
      href: '/requestquote',
    },
    contact: {
      label: '도입문의',
      href: 'mailto:contact@zkrypto.com',
    },
  },
  bottomTabs: [
    {
      label: '투표개설',
      href: 'https://admin.zkvoting.com/login',
    },
    {
      label: '투표개설관리',
      href: 'https://admin.zkvoting.com/login',
    },
    {
      label: '이용내역확인',
      href: 'https://admin.zkvoting.com/login',
    },
  ],
} as const;

// Intro Section Constants
export const INTRO_CONTENT = {
  subtitle: 'zkVoting 만의 차별화된 블록체인 온라인 투표 시스템을 만나보세요!',
  title: 'zkVoting 만의 블록체인 온라인 투표 시스템',
} as const;

// Features Section Constants
export const FEATURES_CONTENT = [
  {
    title: '블록체인 저장',
    subtitle: '투표 조작이 걱정되나요?',
    description:
      '유권자의 명단부터 투표데이터까지\n변경할 수 없도록 블록체인에 저장해요.',
    imageSrc: '/icons/home/블록체인저장.svg',
    imageAlt: '블록체인 저장 일러스트',
    link: '/service#blockchain',
    buttonLabel: '자세히보기',
    isLeftAligned: true,
  },
  {
    title: '영지식증명 검증',
    subtitle: '선거 결과가 의심되나요?',
    description:
      '알아볼 수 없도록 암호화 된 투표데이터를 \n영지식 증명(Zero-Knowledge Proof)으로 \n정확하게 검증할 수 있어요.',
    imageSrc: '/icons/home/영지식증명검증.svg',
    imageAlt: '영지식증명 검증 일러스트',
    link: '/service#zkp',
    buttonLabel: '자세히보기',
    isLeftAligned: false,
  },
];
