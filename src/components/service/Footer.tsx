import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Image
              src="/imgs/zkvoting_logo_gradient.avif"
              alt="zkVoting"
              width={120}
              height={35}
              className="mb-4"
            />
            <div className="text-sm text-gray-600 space-y-1">
              <p>서울특별시 성동구 왕십리로 222 한양종합기술연구원 HIT 321호</p>
              <p>대표이사: 오현옥</p>
              <p>사업자등록번호: 534-81-02121</p>
              <p>E-mail: contact@zkrypto.com</p>
            </div>
          </div>

          <div className="flex gap-8 text-sm">
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              이용약관
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              개인정보 처리방침
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              제휴문의
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Copyright © 2021 zkrypto.Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
