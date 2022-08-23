import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;

/**
 * hoạt động của useDebounce:
 * debounceValue luôn là chuỗi rỗng -> khi nhập 'value' chỉ có value ở dòng 3, 4, thay đổi , tuy nhiên
 * nó không gán lại cho debounceValue ở dòng 4 , debounceValue(14) = ''-> 'value' ở dòng 12 có giá trị mới nên useEffect hoạt động
 * tuy nhiên do có hàm setTimeout nên chỉ khi ngừng gõ 1 khoảng thời gian thì giá trị mới được set và
 * đẩy ra giả trị cho bên index.js(Search)
 */
