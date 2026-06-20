const handleError = (err: unknown) => {
    return err instanceof Error ? err.message : 'Неизвестная ошибка';
};

export { handleError };