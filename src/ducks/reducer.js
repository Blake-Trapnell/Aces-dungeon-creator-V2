const initialstate = {

}
const SET_SHEET = "SET_SHEET"
const SET_USER = "SET_USER"

export function setSheet(sheetInfo) {
    return {
        type: SET_SHEET,
        payload: sheetInfo
    }
}
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export default  (state = initialstate, action) => {
    const{type, payload} = action
    switch (type) {
        case SET_USER:
            const {username, user_id} = payload
            return{...state, username, user_id}
        case SET_SHEET:
            const {playerClass, playerRace, characterName, playerName, alignment, background,
            str, dex, wis, int, con, cha, acro, anim, arca, athl, dece, hist, insg, intm, medi,
        natu, perc, perf, pers, reli, slei, stea, surv, armor, speed, size, hitDie, savingThrows,
    armorProf, weaponProf, profeciency, racialTraits, equipment } = payload
            return{...state, playerClass, playerRace, characterName, playerName, alignment, background,
                str, dex, wis, int, con, cha, acro, anim, arca, athl, dece, hist, insg, intm, medi,
            natu, perc, perf, pers, reli, slei, stea, surv, armor, speed, size, hitDie, savingThrows,
        armorProf, weaponProf, profeciency, racialTraits, equipment }
        default: return state
    }
}