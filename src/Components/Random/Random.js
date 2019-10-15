import React, { Component } from "react"
import "./Random.css"
// import Axios from "axios"

export default class random extends Component {
    state = {
        playerClass: 0,
        playerRace: 0,
        characterName: "",
        playerName: "",
        alignment: 0,
        background: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        acro: false,
        anim: false,
        arca: false,
        athl: false,
        dece: false,
        hist: false,
        insg: false,
        intm: false,
        medi: false,
        natu: false,
        perc: false,
        perf: false,
        pers: false,
        reli: false,
        slei: false,
        stea: false,
        surv: false,
        Armor: 0,
        Speed: 30,
        hitDice: 0,
    }
    easy = async () => {
        let {playerClass, playerRace, background, alignment} = this.state
        background = +background
        alignment = +alignment
        playerRace = +playerRace
        playerClass = +playerClass
        if(playerClass === 0) playerClass = Math.ceil(Math.random() * 12)
        if(playerRace === 0) playerRace = Math.ceil(Math.random() * 9)
        if(background === 0) background = Math.ceil(Math.random() * 13)
        if(alignment === 0) alignment = Math.ceil(Math.random() * 9)

        this.setState({
            playerClass,
            playerRace,
            background,
            alignment
        })
    }
    handleChange = (key, e) => {
        this.setState({
            [key]: e
        })
        console.log(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div className="random-outer">
                <div className="random-top">
                    <div className="random-left">
                        <input onChange={e => this.handleChange("characterName", e.target.value)} className="random-inputs" type="text" placeholder="Name" value={this.state.characterName}/>
                        <select onChange={e => this.handleChange("playerClass", e.target.value)} className="random-inputs" name="Class" id="Class">
                            <option value="0">Class</option>
                            <option value="1">Barbarian</option>
                            <option value="2">Bard</option>
                            <option value="3">Cleric</option>
                            <option value="4">Druid</option>
                            <option value="5">Fighter</option>
                            <option value="6">Monk</option>
                            <option value="7">Paladin</option>
                            <option value="8">Ranger</option>
                            <option value="9">Rogue</option>
                            <option value="10">Sorcerer</option>
                            <option value="11">Warlock</option>
                            <option value="12">Wizard</option>
                        </select>
                        <select onChange={e => this.handleChange("playerRace", e.target.value)} className="random-inputs" name="Race" id="Race">
                            <option value="0">Race</option>
                            <option value="1">Dwarf</option>
                            <option value="2">Elf</option>
                            <option value="3">Halfing</option>
                            <option value="4">Human</option>
                            <option value="5">Dragonborn</option>
                            <option value="6">Gnome</option>
                            <option value="7">Half-Elf</option>
                            <option value="8">Half-Orc</option>
                            <option value="9">Tiefling</option>
                        </select>
                    </div>
                    <div className="random-right">
                        <input onChange={e => this.handleChange("playerName", e.target.value)} className="random-inputs" type="text" placeholder="Player Name" value={this.state.playerName} />
                        <select onChange={e => this.handleChange("background", e.target.value)} className="random-inputs" name="Background" id="Background">
                            <option value="0">Background</option>
                            <option value="1">Acoylte</option>
                            <option value="2">Charlatan</option>
                            <option value="3">Criminal / Spy</option>
                            <option value="4">Entertainer</option>
                            <option value="5">Folk Hero</option>
                            <option value="6">Guild Artisan</option>
                            <option value="7">Hermit</option>
                            <option value="8">Noble</option>
                            <option value="9">Outlander</option>
                            <option value="10">Sage</option>
                            <option value="11">Sailor</option>
                            <option value="12">Soldier</option>
                            <option value="13">Urchin</option>
                        </select>
                        <select onChange={e => this.handleChange("alignment", e.target.value)} className="random-inputs" name="Alignment" id="Alignment">
                            <option value="0">Alignment</option>
                            <option value="1">Lawful Good</option>
                            <option value="2">Neutral Good</option>
                            <option value="3">Chaotic Good</option>
                            <option value="4">Lawful Neutral</option>
                            <option value="5">Neutral</option>
                            <option value="6">Chaotic Neutral</option>
                            <option value="7">Lawful Evil</option>
                            <option value="8">Neutral Evil</option>
                            <option value="9">Chaotic Evil</option>
                        </select>
                    </div>
                </div>
                <div className="random-bottom">
                    <div className="random-left"></div>
                    <div className="random-right"></div>
                </div>
                <div className="button-container">
                    <button onClick = {this.easy} className="random easy">Easy</button>
                    <button className="random normal">Normal</button>
                    <button className="random hard">Hard</button>
                    <button className="random mayhem">Mayhem</button>
                </div>
            </div>
        )
    }

}