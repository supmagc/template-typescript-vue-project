export function getRandom(): number {
    return Math.ceil(Math.random() * new Date().getFullYear());
}
