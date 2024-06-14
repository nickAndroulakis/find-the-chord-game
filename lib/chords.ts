import { CHORDS } from "../constants/chordlist"

export const getChordOfDay = () => {
    // June 14, 2024 Game Epoch
    const epochMs = new Date('June 14, 2024 00:00:00').valueOf()
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay)
    const nextday = (index + 1) * msInDay + epochMs
    return CHORDS[index % CHORDS.length] as string[]
}

export const solution = getChordOfDay()
