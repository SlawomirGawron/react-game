// Generic functions that will be reused.

export function createArrayWithInitialValue(length = 0, initialValue = null) {
    return Array(length).fill(initialValue);
}