import { CHORDS_BEGINNER, CHORDS_ADVANCED } from "../constants/chordlist"

export const getBeginnerChordOfDay = () => {
    // June 14, 2024 Game Epoch
    const epochMs = new Date('June 14, 2024 00:00:00').valueOf()
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay)
    const nextday = (index + 1) * msInDay + epochMs
    return CHORDS_BEGINNER[index % CHORDS_BEGINNER.length] as string[]
}

export const getAdvancedChordOfDay = () => {
    // June 14, 2024 Game Epoch
    const epochMs = new Date('June 14, 2024 00:00:00').valueOf()
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay)
    const nextday = (index + 1) * msInDay + epochMs
    return CHORDS_ADVANCED[index % CHORDS_ADVANCED.length] as string[]
}

export const solutionBeginner = getBeginnerChordOfDay()
export const solutionAdvanced = getAdvancedChordOfDay()
