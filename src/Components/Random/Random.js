import React, { Component } from "react"
import "./Random.css"

export default class random extends Component {
    state = {
        playerClass: "",
        playerRace: "",
        playerName: "",
        alignment: "",
        background: "",
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

    render() {

        return (
            <div className="random-outer">
                <div className="random-top">
                    <div className="random-left">
                        <input className="random-inputs" type="text" placeholder="Character Name" />
                        <select className="random-inputs" name="Class" id="Class">
                            <option value="Class">Class</option>
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
                        <select className="random-inputs" name="Race" id="Race">
                            <option value="Race">Race</option>
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
                        <input className="random-inputs" type="text" placeholder="Player Name" />
                        <select className="random-inputs" name="Background" id="Background">
                            <option value="Background">Background</option>
                            <option value="acoylte">Acoylte</option>
                            <option value="charlatan">Charlatan</option>
                            <option value="criminal_spy">Criminal / Spy</option>
                            <option value="entertainer">Entertainer</option>
                            <option value="folk_Hero">Folk Hero</option>
                            <option value="guild_Artisan">Guild Artisan</option>
                            <option value="hermit">Hermit</option>
                            <option value="noble">Noble</option>
                            <option value="outlander">Outlander</option>
                            <option value="sage">Sage</option>
                            <option value="sailor">Sailor</option>
                            <option value="soldier">Soldier</option>
                            <option value="urchin">Urchin</option>
                        </select>
                        <select className="random-inputs" name="Alignment" id="Alignment">
                            <option value="Alignment">Alignment</option>
                            <option value="Lawful Good">Lawful Good</option>
                            <option value="Neutral Good">Neutral Good</option>
                            <option value="Chaotic Good">Chaotic Good</option>
                            <option value="Lawful Neutral">Lawful Neutral</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Chaotic Neutral">Chaotic Neutral</option>
                            <option value="Lawful Evil">Lawful Evil</option>
                            <option value="Neutral Evil">Neutral Evil</option>
                            <option value="Chaotic Evil">Chaotic Evil</option>
                        </select>
                    </div>
                </div>
                <div className="random-bottom">
                    <div className="random-left"></div>
                    <div className="random-right"></div>
                </div>
                <div className="button-container">
                    <button className="random easy">Easy</button>
                    <button className="random normal">Normal</button>
                    <button className="random hard">Hard</button>
                    <button className="random mayhem">Mayhem</button>
                </div>
            </div>
        )
    }

}