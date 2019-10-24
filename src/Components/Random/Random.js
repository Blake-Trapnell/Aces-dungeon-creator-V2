import React, { Component } from "react"
import "./Random.css"
import Axios from "axios"

export default class random extends Component {
    state = {
        playerClass: "0",
        playerRace: "0",
        characterName: "",
        playerName: "",
        alignment: "0",
        background: "0",
        str: 8,
        dex: 8,
        con: 8,
        int: 8,
        wis: 8,
        cha: 8,
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
        size: 'medium',
        hitDice: 0,
    }
    easy = async () => {
        // destructure state to be used in function
        let {characterName, playerClass, playerRace, background, alignment, str, dex, wis, int, con, cha, speed, size} = this.state
        if(characterName === "") {
           let name = await Axios.get('/api/names')
           characterName = name.data
        }
        // Resets in case user has already ran the function.
        if(str !== 8 || dex !== 8 || wis !== 8 || int !== 8 || con !== 8 || cha !== 8) {
            str = 8; dex = 8; wis = 8; int = 8; con = 8; cha = 8
        }
        background = +background; alignment = +alignment; playerClass = +playerClass;
        if(playerRace.race > 0 ) {
        }
        else {
            playerRace = +playerRace;
        }
        let rando = 0
        // assign stats at random
        for(let i = 0; i < 32; i++) {
             rando = Math.ceil(Math.random() * 60)
            if(rando <= 10) str++
            else if (rando <= 20) dex++
            else if (rando <= 30) wis++
            else if (rando <= 40) int++
            else if (rando <= 50) con++
            else if (rando <= 60) cha++
        }
        // assign stats to an array to be looped through in a for statement
       let stats=[str,dex,wis,int,con,cha]
       // highest = the highest of the stats that were randomly generated.
       // val = the position in the array so that we can assign a class based
       // off of that highest value 
       var highest = 0
       var val = null
        for(let i = 0; i < 6; i++) {
            if(stats[i] > highest) {
                highest = stats[i]
                val = i }}
        // if playerClass was unselected, assign class based off
        // of the highest value stat that the class uses.
        if (playerClass === 0) {
            switch(val) {
                case 0: rando = (Math.random() * 30)
                if(rando <= 10) playerClass = 1
                else if(rando <= 20) playerClass = 5
                else playerClass = 7
                break;
                case 1: rando = (Math.random() * 30)
                if(rando <= 10) playerClass = 6
                else if(rando <= 20) playerClass = 5
                else playerClass = 8
                break;
                case 2: rando = (Math.random() * 40)
                if(rando <= 10) playerClass = 3
                else if(rando <= 20) playerClass = 4
                else if(rando <= 30) playerClass = 6
                else playerClass = 8
                break;
                case 3: playerClass = 11
                break;
                case 4: rando = (Math.random() * 40)
                if(rando <= 10) playerClass = 1
                else if(rando <= 20) playerClass = 5
                else playerClass = 9
                break;
                case 5: rando = (Math.random() * 30)
                if(rando <= 10) playerClass = 2
                else if(rando <= 20) playerClass = 7
                else if(rando <= 30) playerClass = 9
                else playerClass = 10
                break;
                default : alert('whoops an error happened')
            }
        }
                // if playerRace was unselected, assign Race based off
        // of the highest value stat that the Race adds bonuses to.
        console.log(str,dex,wis,int,con,cha)
        console.log(val)
        if(playerRace === 0) {
            switch(val){
            case 0: rando = (Math.random() * 40)
                if(rando <= 10) {playerRace = {race: 1, subrace: 1}; con+= 2; wis++; size= "medium"; speed= 25}
                else if(rando <= 20) {playerRace = {race: 8, subrace: 0}; str+= 2; con++; size="medium"; speed= 30}
                else if(rando <= 30) {playerRace = {race: 5, subrace: 0}; str+= 2; cha++; size="medium"; speed= 30}
                else {playerRace = {race: 4, subrace: 0}; str++; dex++; wis++; int++; con++; cha++; size="medium"; speed= 30}
                break;
            case 1: rando = (Math.random() * 40)
                if(rando <= 10) playerRace = 2
                else if(rando <= 20) {playerRace = {race: 6, subrace: 1}; int+= 2; dex++; size="small"; speed= 25 }
                else if(rando <= 30){ playerRace = {race: 3, subrace: 1}; dex+= 2; cha++; size="small"; speed= 25 }
                else {playerRace = {race: 4, subrace: 0}; str++; dex++; wis++; int++; con++; cha++; size="medium"; speed= 30}
                break;
            case 2: rando = (Math.random() * 50)
                if(rando <= 10){ playerRace = {race: 1, subrace: 2}; con+= 2; str+= 2 ; size="medium"; speed= 25}
                else if(rando <= 20) {playerRace = {race: 8, subrace: 0}; str+= 2; con++; size="medium"; speed= 30}
                else if(rando <= 30) {playerRace = {race: 3, subrace: 2}; dex+= 2; con++; size="small"; speed= 25}
                else if(rando <= 40) {playerRace = {race: 6, subrace: 2}; int+= 2; con++; size="small"; speed= 25}
                else {playerRace = {race: 4, subrace: 0}; str++; dex++; wis++; int++; con++; cha++; size="medium"; speed= 30}
                break;
             case 3: rando = (Math.random() * 40)
                if(rando <= 10) { playerRace = {race: 2, subrace: 1}; dex+= 2; wis++; size="medium"; speed= 30 }
                else if(rando <= 20) {playerRace = {race: 9, subrace: 0}; cha+= 2; int++; size="medium"; speed= 30}
                else if(rando <= 30) {playerRace = {race: 6, subrace: 1}; int+= 2; dex++; size="small"; speed= 25}
                else {playerRace = {race: 4, subrace: 0}; str++; dex++; wis++; int++; con++; cha++; size="medium"; speed= 30}
                break;
            case 4: rando = (Math.random() * 30)
                if(rando <= 10){ playerRace = {race: 1, subrace: 1}; con+= 2; wis++; size="medium"; speed =25 }
                else if(rando <= 20) { playerRace = {race: 2, subrace: 2}; dex+= 2; int++; size="medium"; speed= 30 }
                else {playerRace = {race: 4, subrace: 0}; str++; dex++; wis++; int++; con++; cha++; size="medium"; speed= 30 }
                break;
            case 5: rando = (Math.random() * 60)
                if(rando <= 10) { playerRace = {race: 7, subrace: 0}; cha+= 2; con++; dex++; size="medium"; speed= 30 }
                else if(rando <= 20){ playerRace = {race: 2, subrace: 3}; dex+= 2; cha++; size="medium"; speed= 30 }
                else if(rando <= 30){ playerRace = {race: 3, subrace: 1}; dex+= 2; cha++; size="small"; speed= 25 }
                else if(rando <= 40) {playerRace = {race: 5, subrace: 0}; str+= 2; cha++; size="medium"; speed= 30}
                else if(rando <= 50) {playerRace = {race: 9, subrace: 0}; cha+= 2; int++; size="medium"; speed= 30}
                else {playerRace = {race: 4, subrace: 0}; str++; dex++; wis++; int++; con++; cha++; size="medium"; speed= 30}
                break;
                default : alert('whoops an error happened')
            }
        }
        console.log(str,dex,wis,int,con,cha)
        let racialTraits = await Axios.post(`/api/racialtraits`, {playerRace})

        //Assign background and Alignment if previously unselected
        if(background === 0) background = Math.ceil(Math.random() * 13)
        let backgroundSkills = await Axios.get(`/api/backgroundskills/${background}`)
        backgroundSkills = backgroundSkills.data

        if(alignment === 0) alignment = Math.ceil(Math.random() * 9)
        //set state to new values that the function ran to be added to our character sheet
        this.setState({
            characterName, playerClass, playerRace, background, alignment,
            str, wis, int, dex, cha, con, [backgroundSkills[0].skill]: true, [backgroundSkills[1].skill]: true,
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
                        <select value={this.state.playerClass} onChange={e => this.handleChange("playerClass", e.target.value)} className="random-inputs" name="Class" id="Class">
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
                        <select value ={this.state.playerRace} onChange={e => this.handleChange("playerRace", e.target.value)} className="random-inputs" name="Race" id="Race">
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
                        <select value={this.state.background} onChange={e => this.handleChange("background", e.target.value)} className="random-inputs" name="Background" id="Background">
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
                        <select value={this.state.alignment} onChange={e => this.handleChange("alignment", e.target.value)} className="random-inputs" name="Alignment" id="Alignment">
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