export function formatMilliseconds(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (minutes > 0) {
        return `${minutes}m ${remainingSeconds}s`;
    } else if (seconds > 0) {
        return `${seconds}s`;
    } else {
        return `${milliseconds}ms`;
    }
}
