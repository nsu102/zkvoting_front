import { Fragment } from "react/jsx-runtime";

// 텍스트를 줄바꿈 처리하는 헬퍼 함수
const renderTextWithLineBreaks = (text: string, keyPrefix: string) => {
  const lines = text.split('\n');
  return lines.map((line, idx) => (
    <Fragment key={`${keyPrefix}-line-${idx}`}>
      {line}
      {idx < lines.length - 1 && <br />}
    </Fragment>
  ));
};

export const renderHighlightedText = (text: string, highlights: string[]) => {
  if (highlights.length === 0) {
    return renderTextWithLineBreaks(text, 'text');
  }

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  highlights.forEach((highlight, idx) => {
    const index = text.indexOf(highlight, lastIndex);
    if (index !== -1) {
      // 하이라이트 전 일반 텍스트 (줄바꿈 처리)
      if (index > lastIndex) {
        const plainText = text.substring(lastIndex, index);
        parts.push(renderTextWithLineBreaks(plainText, `plain-${idx}`));
      }
      // 하이라이트 텍스트 (언더라인 추가, 줄바꿈 처리)
      parts.push(
        <strong key={`highlight-${idx}`} className="font-bold text-gray-900 underline">
          {renderTextWithLineBreaks(highlight, `highlight-${idx}`)}
        </strong>
      );
      lastIndex = index + highlight.length;
    }
  });

  // 마지막 남은 텍스트 (줄바꿈 처리)
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    parts.push(renderTextWithLineBreaks(remainingText, 'remaining'));
  }

  return parts;
};
