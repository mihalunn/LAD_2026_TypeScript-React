const debounce = (func: () => void, delay: number) => {
    let timerId = <number | null>null;

    return () => {
        if(timerId) {
            clearTimeout(timerId);
        }

        timerId = window.setTimeout(() => {
            func();
        }, delay);
    };
};

export { debounce };