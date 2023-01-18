export const WaitForSeconds = (seconds: number) => {
    return new Promise<void>((resolve) => {
        window.setTimeout(resolve, seconds * 1000);
    });
}