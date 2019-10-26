const initialstate = {

}
const SET_SHEET = "SET_SHEET"

export function setSheet(sheetInfo) {
    return {
        type: SET_SHEET,
        payload: sheetInfo
    }
}

export default  (state = initialstate, action) => {
    const{type, payload} = action
    switch (type) {
        case SET_SHEET:
            const {playerClass, playerRace, characterName, playerName, alignment, background,
            str, dex, wis, int, con, cha, acro, anim, arca, athl, dece, hist, insg, intm, medi,
        natu, perc, perf, pers, reli, slei, stea, surv, armor, speed, size, hitDie, savingThrows,
    armorProf, weaponProf } = payload
            return{...state, playerClass, playerRace, characterName, playerName, alignment, background,
                str, dex, wis, int, con, cha, acro, anim, arca, athl, dece, hist, insg, intm, medi,
            natu, perc, perf, pers, reli, slei, stea, surv, armor, speed, size, hitDie, savingThrows,
        armorProf, weaponProf }
        default: return state
    }
}