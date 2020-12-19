# useFixPage

A `React hook` to `lock` or `unlock` page. Usually used in `popout` scenario.

[![](https://img.shields.io/npm/dw/usefixpage.svg?label=npm%20downloads&style=flat)](https://www.npmjs.com/package/usefixpage) [![Last npm release](https://img.shields.io/npm/v/usefixpage)](https://www.npmjs.com/package/usefixpage)

## type
```ts
export function useFixPage(initialValue?: boolean): [boolean, React.Dispatch<React.SetStateAction<boolean>>];
```

## install
```shell
npm install usefixpage
```

## example
```tsx
import React from 'react';
import {useFixPage} from 'usefixpage';

interface PopupPropsType {
    close: (boolean) => void;
}

const Popup: React.FC<PopupPropsType> = ({close}) => {
    return (
        <div onClick={() => close(false)}>Close</div>
    );
}

function Example() {
    const [popup, setPopup] = useFixPage(false);

    return (
        <>
            {popup ? <Popup close={setPop} /> : null}
            <div onClick={setPopup(true)}>Page</div>
        </>
    );
}
```
