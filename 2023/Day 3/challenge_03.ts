function findNaughtyStep(original: string, modified: string) {
    for (let i = 0;i < Math.max(original.length, modified.length);i++) {
        if (original[i] !== modified[i]) {
            return original.length > modified.length ? original[i] : modified[i]
        }
    }
    return ''
}
