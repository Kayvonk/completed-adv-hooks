export const intialItems = new Array(30_000_001).fill(0).map((element, index) => {
    return {
        id: index,
        isCorrect: index === 30_000_000
    }
})