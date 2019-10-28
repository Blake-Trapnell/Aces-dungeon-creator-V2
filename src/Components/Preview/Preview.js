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
                                    <div style={{justifyContent: "flex-start", marginLeft: "90px"}} className="sheet-raceclass-top">
                                        <h1>{this.props.playerClass}</h1>
                                    </div>
                                    <div style={{justifyContent: "flex-start", marginLeft: "90px"}} className="sheet-raceclass-bottom">
                                        <h1>{this.props.playerRace}</h1>
                                    </div>
                                </div>
                                <div className="sheet-raceclass1">
                                    <div style={{marginLeft: "20px"}} className="sheet-raceclass-top">
                                        <h1>{this.props.alignment}</h1>
                                    </div>
                                    <div style={{marginLeft: "20px"}} className="sheet-raceclass-bottom">
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
                                            <h4 style={{ marginBottom: "6px" }}>{Math.floor((this.props.str - 10) / 2)}</h4>
                                        </div>
                                        <div className="sheet-stats">
                                            <h1 className="stat">{this.props.dex}</h1>
                                            <h4 style={{ marginBottom: "5px" }}>{Math.floor((this.props.dex - 10) / 2)}</h4>
                                        </div>
                                        <div className="sheet-stats">
                                            <h1 className="stat">{this.props.con}</h1>
                                            <h4 style={{ marginBottom: "3px" }}>{Math.floor((this.props.con - 10) / 2)}</h4>
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
                                            <h1>+{this.props.profeciency}</h1>
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
                                        <div className="sheet-skills-container">
                                            <div className="sheet-skills-display">
                                                {this.props.acro === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.acro === false ?
                                                    <h1>{Math.floor((this.props.dex - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.dex - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.anim === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.anim === false ?
                                                    <h1>{Math.floor((this.props.wis - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.wis - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.arca === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.arca === false ?
                                                    <h1>{Math.floor((this.props.int - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.int - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.athl === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.athl === false ?
                                                    <h1>{Math.floor((this.props.str - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.str - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.dece === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.dece === false ?
                                                    <h1>{Math.floor((this.props.cha - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.cha - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.hist === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.hist === false ?
                                                    <h1>{Math.floor((this.props.int - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.int - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.insg === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.insg === false ?
                                                    <h1>{Math.floor((this.props.wis - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.wis - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.intim === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.intim === false ?
                                                    <h1>{Math.floor((this.props.cha - 10) / 2)}</h1>
                                                    : <h1>{Math.floor((this.props.cha - 10) / 2) + this.props.profeciency}</h1>
                                                }                        </div>
                                            <div className="sheet-skills-display">
                                                {this.props.inves === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.inves === false ?
                                                    <h1>{Math.floor((this.props.int - 10) / 2)}</h1>
                                                    : <h1>{Math.floor((this.props.int - 10) / 2) + this.props.profeciency}</h1>
                                                }                        </div>
                                            <div className="sheet-skills-display">
                                                {this.props.medi === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.medi === false ?
                                                    <h1>{Math.floor((this.props.wis - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.wis - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.natu === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.natu === false ?
                                                    <h1>{Math.floor((this.props.int - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.int - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.perc === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.perc === false ?
                                                    <h1>{Math.floor((this.props.wis - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.wis - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.perf === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.perf === false ?
                                                    <h1>{Math.floor((this.props.cha - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.cha - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.pers === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.pers === false ?
                                                    <h1>{Math.floor((this.props.cha - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.cha - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.reli === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.reli === false ?
                                                    <h1>{Math.floor((this.props.int - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.int - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.slei === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.slei === false ?
                                                    <h1>{Math.floor((this.props.dex - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.dex - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.stea === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.stea === false ?
                                                    <h1>{Math.floor((this.props.dex - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.dex - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                            <div className="sheet-skills-display">
                                                {this.props.surv === true ?
                                                    <div className="sheet-skills-true"></div> :
                                                    <div className="sheet-skills-false"></div>}
                                                {this.props.surv === false ?
                                                    <h1>{Math.floor((this.props.wis - 10) / 2)}</h1> :
                                                    <h1>{Math.floor((this.props.wis - 10) / 2) + this.props.profeciency}</h1>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sheet-passive-perc">
                                    {this.props.perc === true ?
                                    <h1>{Math.floor((this.props.wis - 10) / 2) + 10 + this.props.profeciency}</h1> :
                                    <h1>{Math.floor((this.props.wis - 10) / 2) + 10}</h1> }
                                </div>
                                <div className="sheet-otherprofs">
                                        <h1>Weapon Profeciencies</h1>
                                        {this.props.weaponProf.map((el,i)=> (
                                            <div key = {`weapon ${i}`}>
                                                <h6 style={{fontSize: '.8rem'}}>•{el}</h6>
                                            </div>
                                        ))}
                                        <h1>Armor Profeciencies</h1>
                                        {this.props.armorProf.map((el,i)=> {
                                            return (<div key = {`armor ${i}`}>
                                                <h6 style={{fontSize: '.8rem'}}>•{el}</h6>
                                            </div>)
                                        })}
                                        

                                </div>
                            </div>
                            <div className="sheet-middle-column">
                                <div className="sheet-middle-top">
                                    <div className="sheet-middle-ais">
                                        <div className="sheet-middle-ac">
                                            <h1>{Math.floor((this.props.dex -10) / 2) + 10}</h1>
                                        </div>
                                        <div className="sheet-middle-initative">
                                        <h1>{Math.floor((this.props.dex -10) / 2) + 10}</h1>
                                        </div>
                                        <div className="sheet-middle-speed">
                                            <h1>{this.props.speed}</h1>
                                        </div>
                                    </div>
                                    <div className="sheet-middle-hpm">
                                        <div className="sheet-maximum">
                                            <h1>{Math.floor((this.props.con - 10) / 2) + this.props.hitDie}</h1>
                                        </div>
                                        <div className="sheet-current">
                                        <h1>{Math.floor((this.props.con - 10) / 2) + this.props.hitDie}</h1>
                                        </div>
                                    </div>
                                    <div className="sheet-middle-hds">
                                        <div className="sheet-middle-hitDie">
                                            <h1>1D {this.props.hitDie}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="sheet-middle">

                                </div>
                                <div className="sheet-middle-bot">
                                    <div className="sheet-middle-equipment">
                                        {this.props.equipment.map((el,i)=>{
                                            return(
                                                <div key = {`equipment ${i}`}>
                                                    <h1>{el.name}, {el.quantity}</h1>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="sheet-right-column">
                                {this.props.racialTraits.map((el,i)=> (
                                    <div key = {`Race Traits ${i}`}>
                                        <h1> <span style={{fontSize: ".8rem", fontWeight: "bold"}}>{el.trait}:</span> <span style={{fontSize: ".8rem"}}> {el.trait_text} </span> </h1>
                                    </div>
                                ))}
                            </div>
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
        armorProf, weaponProf, profeciency, racialTraits, equipment } = state
    return {
        playerClass, playerRace, characterName, playerName, alignment, background,
        str, dex, wis, int, con, cha, acro, anim, arca, athl, dece, hist, insg, intm, medi,
        natu, perc, perf, pers, reli, slei, stea, surv, armor, speed, size, hitDie, savingThrows,
        armorProf, weaponProf, profeciency, racialTraits, equipment
    }
}
export default connect(mapStateToProps, { setSheet })(Preview);