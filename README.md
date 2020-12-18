# useFixPage

A `React hook` to `lock` or `unlock` page. Usually used in `popout` scenario.

## type
```ts
export function useFixPage(initialValue?: boolean): [boolean, React.Dispatch<React.SetStateAction<boolean>>];
```

## example
```tsx
import Popup from 'popup'; // made up component
import {useFixPage} from 'useFixPage';

function Example() {
    const [popup, setPopup] = useFixPage(false);

    return (
        <>
            {popup ? <Popup /> : null}
            <div onClick={setPopup(false)}>Page</div>
        </>
    );
}
```
