// Customer Center FAQ Constants
export const FAQ_ITEMS = [
  {
    id: 1,
    question: '회원가입 신청 후 승인은 언제 되나요?',
    answer: [
      '회원가입 신청 후 근무시간 기준 +시간 내에 운영팀 담당자가 확인하여 가입 심사를 진행합니다. 승인이 완료되면 투표 담당자에게 SMS가 전송됩니다. 제출하신 서류의 보완이 필요한 경우 개별적으로 연락드리오니 참고하시기 바랍니다.',
      '•기업 승인이 지연될 경우 운영팀(contact@zkrypto.com)로 연락 부탁드립니다.',
    ],
  }
] as const;

// Customer Center Tabs
export const CUSTOMER_CENTER_TABS = [
  { id: 'faq', label: 'FAQ' },
  { id: 'inquiry', label: '1:1문의' },
] as const;
