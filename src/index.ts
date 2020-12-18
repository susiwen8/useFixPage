import { useRef, useLayoutEffect, useState } from 'react';

// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollY
const supportPageOffset = window.pageYOffset !== undefined;
const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';

export function useFixPage(
  initialValue?: boolean,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [fixPage, setFixPage] = useState(initialValue == null ? false : initialValue);
  const bodyElStyle = document.body.style;
  const top = useRef(0);
  useLayoutEffect(() => {
    if (fixPage) {
      top.current = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
      bodyElStyle.position = 'fixed';
      bodyElStyle.top = `${-top.current}px`;
    } else {
      bodyElStyle.position = '';
      bodyElStyle.top = '';
      window.scrollTo(0, top.current);
    }
  }, [bodyElStyle, fixPage]);

  return [fixPage, setFixPage];
}
