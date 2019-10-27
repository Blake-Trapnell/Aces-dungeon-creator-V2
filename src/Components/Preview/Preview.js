import React, { Component } from "react"
import "./Preview.css"
import { connect } from "react-redux"
import { setSheet } from "../../ducks/reducer"


class Preview extends Component {
    state = {

    }

    render() {
        console.log(this.props)
        return (
            <div className="preview-outer">
                <div className="background"></div>
                {this.props.characterName ?
                    <div className="sheet-outer">
                        <div className="sheet-header">
                            <div className="sheet-charactername">
                                <h1>{this.props.characterName}</h1>
                            </div>
                            <div className="sheet-raceclass">
                                <div className="sheet-raceclass1">
                                    <div className="sheet-raceclass-top">
                                        <h1>{this.props.playerClass}</h1>
                                    </div>
                                    <div className="sheet-raceclass-bottom">
                                        <h1>{this.props.playerRace}</h1>
                                    </div>
                                </div>
                                <div className="sheet-raceclass1">
                                    <div className="sheet-raceclass-top">
                                        <h1>{this.props.alignment}</h1>
                                    </div>
                                    <div className="sheet-raceclass-bottom">
                                        <h1>{this.props.background}</h1>
                                    </div>
                                </div>
                                <div className="sheet-raceclass1">
                                    <div className="sheet-raceclass-top">
                                        <h1>{this.props.playerName}</h1>
                                    </div>
                                    <div className="sheet-raceclass-bottom"></div>
                                </div>
                                <div className="sheet-raceclass1">
                                    <div className="sheet-raceclass-top"></div>
                                    <div className="sheet-raceclass-bottom"></div>
                                </div>
                            </div>
                        </div>
                        <div className="sheet-mainbody">
                            <div className="sheet-left-column">
                                <div className="sheet-stats-container">
                                    <div className="sheet-stats-list">
                                        <div className="sheet-stats">
                                            <h1 className="stat">{this.props.str}</h1>
                                            <h4 style={{ marginBottom: "4px" }}>{Math.floor((this.props.str - 10) / 2)}</h4>
                                        </div>
                                        <div className="sheet-stats">
                                            <h1 className="stat">{this.props.dex}</h1>
                                            <h4 style={{ marginBottom: "2px" }}>{Math.floor((this.props.dex - 10) / 2)}</h4>
                                        </div>
                                        <div className="sheet-stats">
                                            <h1 className="stat">{this.props.con}</h1>
                                            <h4>{Math.floor((this.props.con - 10) / 2)}</h4>
                                        </div>
                                        <div className="sheet-stats">
                                            <h1 className="stat">{this.props.int}</h1>
                                            <h4>{Math.floor((this.props.int - 10) / 2)}</h4>
                                        </div>
                                        <div className="sheet-stats">
                                            <h1 className="stat">{this.props.wis}</h1>
                                            <h4>{Math.floor((this.props.wis - 10) / 2)}</h4>
                                        </div>
                                        <div className="sheet-stats">
                                            <h1 className="stat">{this.props.cha}</h1>
                                            <h4>{Math.floor((this.props.cha - 10) / 2)}</h4>
                                        </div>
                                    </div>
                                    <div className="sheet-skills">
                                        <div className="sheet-inspiration"></div>
                                        <div className="sheet-prof-bonus">
                                            <h1>+ {this.props.profeciency}</h1>
                                        </div>
                                        <div className="sheet-saving-throws-container">
                                            <div className="sheet-saving-throws">
                                                {this.props.savingThrows.includes(1) ?
                                                    <div className="sheet-saving-true"></div>
                                                    :
                                                    <div className="sheet-saving-false"></div>}

                                                <div className="sheet-saving-num">
                                                    {this.props.savingThrows.includes(1) ? <h1>{(Math.floor((this.props.str - 10) / 2) + 2)}</h1> : <h1>{(Math.floor((this.props.str - 10) / 2))}</h1>}
                                                </div>
                                            </div>
                                            <div className="sheet-saving-throws">
                                            {this.props.savingThrows.includes(2) ?
                                                    <div className="sheet-saving-true"></div>
                                                    :
                                                    <div className="sheet-saving-false"></div>}

                                                <div className="sheet-saving-num">
                                                    {this.props.savingThrows.includes(2) ? <h1>{(Math.floor((this.props.dex - 10) / 2) + 2)}</h1> : <h1>{(Math.floor((this.props.dex - 10) / 2))}</h1>}
                                                </div>
                                            </div>
                                            <div className="sheet-saving-throws">
                                            {this.props.savingThrows.includes(5) ?
                                                    <div className="sheet-saving-true"></div>
                                                    :
                                                    <div className="sheet-saving-false"></div>}

                                                <div className="sheet-saving-num">
                                                    {this.props.savingThrows.includes(5) ? <h1>{(Math.floor((this.props.con - 10) / 2) + 2)}</h1> : <h1>{(Math.floor((this.props.con - 10) / 2))}</h1>}
                                                </div>
                                            </div>
                                            <div className="sheet-saving-throws">
                                            {this.props.savingThrows.includes(4) ?
                                                    <div className="sheet-saving-true"></div>
                                                    :
                                                    <div className="sheet-saving-false"></div>}

                                                <div className="sheet-saving-num">
                                                    {this.props.savingThrows.includes(4) ? <h1>{(Math.floor((this.props.int - 10) / 2) + 2)}</h1> : <h1>{(Math.floor((this.props.int - 10) / 2))}</h1>}
                                                </div>
                                            </div>
                                            <div className="sheet-saving-throws">
                                            {this.props.savingThrows.includes(3) ?
                                                    <div className="sheet-saving-true"></div>
                                                    :
                                                    <div className="sheet-saving-false"></div>}

                                                <div className="sheet-saving-num">
                                                    {this.props.savingThrows.includes(3) ? <h1>{(Math.floor((this.props.wis - 10) / 2) + 2)}</h1> : <h1>{(Math.floor((this.props.wis - 10) / 2))}</h1>}
                                                </div>
                                            </div>
                                            <div className="sheet-saving-throws">
                                            {this.props.savingThrows.includes(6) ?
                                                    <div className="sheet-saving-true"></div>
                                                    :
                                                    <div className="sheet-saving-false"></div>}

                                                <div className="sheet-saving-num">
                                                    {this.props.savingThrows.includes(6) ? <h1>{(Math.floor((this.props.cha - 10) / 2) + 2)}</h1> : <h1>{(Math.floor((this.props.cha - 10) / 2))}</h1>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sheet-skills-container"></div>
                                    </div>
                                </div>
                                <div className="sheet-passive-perc"></div>
                                <div className="sheet-otherprofs"></div>
                            </div>
                            <div className="sheet-middle-column"></div>
                            <div className="sheet-right-column"></div>
                        </div>
                        <div className="footer"></div>
                    </div>
                    : null}
            </div>
        )
    }
}



function mapStateToProps(state) {
    const { playerClass, playerRace, characterName, playerName, alignment, background,
        str, dex, wis, int, con, cha, acro, anim, arca, athl, dece, hist, insg, intm, medi,
        natu, perc, perf, pers, reli, slei, stea, surv, armor, speed, size, hitDie, savingThrows,
        armorProf, weaponProf, profeciency } = state
    return {
        playerClass, playerRace, characterName, playerName, alignment, background,
        str, dex, wis, int, con, cha, acro, anim, arca, athl, dece, hist, insg, intm, medi,
        natu, perc, perf, pers, reli, slei, stea, surv, armor, speed, size, hitDie, savingThrows,
        armorProf, weaponProf, profeciency
    }
}
export default connect(mapStateToProps, { setSheet })(Preview);