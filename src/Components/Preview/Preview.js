import React, {Component} from "react"
import "./Preview.css"
import {connect} from "react-redux"
import {setSheet} from "../../ducks/reducer"


class Preview extends Component {
    state = {

    }

    render() {
        console.log(this.props)
        return(
            <div className="preview-outer">
            <div className="background"></div>
        <div className="sheet-outer">
            <div className="sheet-header">
                {this.props.characterName ? <h1>{this.props.characterName}</h1> : null}
            </div>
            <div className="sheet-mainbody">
                <div className="sheet-left-column"></div>
                <div className="sheet-middle-column"></div>
                <div className="sheet-right-column"></div>
            </div>
            <div className="footer"></div>
        </div>
        </div>
    )
}
}
function mapStateToProps(state) {
    const {playerClass, playerRace, characterName, playerName, alignment, background,
        str, dex, wis, int, con, cha, acro, anim, arca, athl, dece, hist, insg, intm, medi,
    natu, perc, perf, pers, reli, slei, stea, surv, armor, speed, size, hitDie, savingThrows,
armorProf, weaponProf } = state
return {playerClass, playerRace, characterName, playerName, alignment, background,
    str, dex, wis, int, con, cha, acro, anim, arca, athl, dece, hist, insg, intm, medi,
natu, perc, perf, pers, reli, slei, stea, surv, armor, speed, size, hitDie, savingThrows,
armorProf, weaponProf }
}
export default connect(mapStateToProps, {setSheet})(Preview);