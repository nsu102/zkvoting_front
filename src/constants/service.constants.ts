export interface Feature {
  number: string;
  text: string;
  highlights: string[];
}

export interface Card {
  title: string;
  subtitle: string;
  color: string;
}

export const INTEGRITY_FEATURES: Feature[] = [
  {
    number: '1',
    text: '모든 유권자의 투표가 공개적으로 읽을 수 있는 블록체인에 저장되기 때문에, 각 유권자는 자신의 표가 블록체인에 안전하게 저장되었는지 항상 확인할 수 있습니다.',
    highlights: ['공개적으로 읽을 수 있는 블록체인에 저장', '항상 확인']
  },
  {
    number: '2',
    text: '블록체인의 위·변조 방지 특성 덕분에 저장된 투표는 누구도 수정·삭제할 수 없습니다.',
    highlights: ['블록체인의 위·변조 방지 특성']
  },
  {
    number: '3',
    text: '개표가 올바르게 수행되었는지도 모든 사람들이 투명하게 확인할 수 있습니다.',
    highlights: ['모든 사람들이 투명하게 확인']
  },
  {
    number: '4',
    text: '투표부터 개표에 이르는 모든 단계를 확인할 수 있어, 선거 관리 기관을 포함한 그 누구도 투표를 조작할 수 없으며, 이로 인해 신뢰성 있는 투표가 완성됩니다.',
    highlights: ['투표부터 개표에 이르는 모든 단계를 확인', '그 누구도 투표를 조작할 수 없으며']
  }
];

export const INTEGRITY_CARDS: Card[] = [
  { title: '무결성', subtitle: 'Integrity', color: 'from-gray-700 to-gray-800' },
  { title: '투명성', subtitle: 'Transparency', color: 'from-gray-700 to-gray-800' },
  { title: '신뢰성', subtitle: 'Reliability', color: 'from-gray-700 to-gray-800' }
];

export const ZERO_KNOWLEDGE_FEATURES: Feature[] = [
  {
    number: '1',
    text: '공개형 블록체인에 저장된 내용은 모든 사람들에게 공개되기 때문에 투표의 비밀성을 위해서는 암호화하여 저장해야 합니다.',
    highlights: ['암호화하여 저장']
  },
  {
    number: '2',
    text: '그러나 투표가 암호화되어 있기 때문에 유효한 유권자가 올바르게 투표했는지의 유효성을 확인하기 어렵습니다.',
    highlights: ['유효성을 확인하기 어렵습니다']
  },
  {
    number: '3',
    text: '제로지식증명은 암호화된 데이터의 내용을 공개하지 않고도, 데이터가 특정 속성을 만족한다는 사실을 누구나 확인할 수 있게 해주는 암호 기술입니다.',
    highlights: ['제로지식증명', '누구나 확인할 수 있게 해주는']
  },
  {
    number: '4',
    text: '블록체인에 암호화된 투표와 제로지식 증명을 기록하면, 투표의 비밀성을 유지하면서도 투표의 유효성을 누구나 확인할 수 있습니다.',
    highlights: ['비밀성을 유지하면서도', '유효성을 누구나 확인']
  }
];

export interface CarouselSlide {
  topImage: string;
  bottomImage: string;
  title: string;
  description: string;
  infoTitle: string;
  infoDescription: string;
}

export const ZERO_KNOWLEDGE_CAROUSEL: CarouselSlide[] = [
  {
    topImage: '/imgs/services/영지식_1번.avif',
    bottomImage: '/imgs/services/영지식_1번_bottom.avif',
    title: '투표 시작 전, 명부 머클트리 생성하고',
    description: '블록체인 저장해서 투표 시작 후, 선거인 명부 위·변조 불가',
    infoTitle: '머클트리란?',
    infoDescription: '데이터 무결성 검증을 위해 해시를 사용하여 구성된 트리 구조이며, 투표 유권자인증 자격 데이터 구조로 활용'
  },
  {
    topImage: '/imgs/services/영지식_2번.avif',
    bottomImage: '/imgs/services/영지식_2번_bottom.avif',
    title: '투표데이터 암호화',
    description: '투표 내용을 암호화하여 블록체인에 저장',
    infoTitle: '암호화란?',
    infoDescription: '투표 내용을 비밀키로 암호화하여 제3자가 볼 수 없도록 보호'
  },
  {
    topImage: '/imgs/services/영지식_3번.avif',
    bottomImage: '/imgs/services/영지식_3번_bottom.avif',
    title: '영지식증명 생성 및 검증',
    description: '암호화된 투표의 유효성을 증명하고 검증',
    infoTitle: '영지식증명이란?',
    infoDescription: '데이터 내용을 공개하지 않고도 그 데이터가 특정 조건을 만족함을 증명하는 암호 기술'
  }
];

export interface AchievementParagraph {
  text: string;
  highlights: string[];
}

export const BEST_IN_WORLD_PARAGRAPHS: AchievementParagraph[] = [
  {
    text: '2023년, zkVoting은 모바일 앱으로 CES 2023 최고혁신상과 혁신상을 수상하며 처음 주목받았습니다. \n 특히 CES 2023 오프닝 연설에서 인류가 당면한 문제를 해결할 기술로 선정되기도 했습니다.',
    highlights: ['CES 2023 최고혁신상과 혁신상을 수상', '인류가 당면한 문제를 해결할 기술로 선정']
  },
  {
    text: '이 성공을 기반으로 2024년, 현장 투표 시스템(Poll Station)으로 CES 2024 최고혁신상을 다시 한 번 수상하여 zkVoting만의 뛰어난 기술력을 공인받았습니다.',
    highlights: ['현장 투표 시스템(Poll Station)으로 CES 2024 최고혁신상을 다시 한 번']
  },
  {
    text: '2회 연속 최고혁신상을 수상한 안전하고 투명하며 효율적인 투표의 미래를 zkVoting에서 경험해 보세요.',
    highlights: ['2회 연속 최고혁신상을 수상']
  }
];
