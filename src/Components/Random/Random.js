import React, { Component } from "react"
import "./Random.css"
import Axios from "axios"
import { setSheet} from "../../ducks/reducer"
import { connect } from "react-redux"

class random extends Component {
    state = {
        displayCharacter: false,
        playerClass: 0,
        playerRace: 0,
        characterName: "",
        playerName: "",
        alignment: 0,
        background: 0,
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
        speed: 0,
        size: '',
        hitDie: 0,
        savingThrows: {},
        armorProf: [],
        weaponProf: []
    }
    
    easy = async () => {
        // destructure state to be used in function
        let { characterName, playerClass, playerRace, background, alignment, str, dex, wis, int,
            con, cha, speed, size, hitDie, savingThrows, armorProf, weaponProf, displayCharacter} = this.state
        //Assign variables for later use in function
        let rando = 0


        //Display users generated Character
        displayCharacter = true;


        //Assign Name to character if not previously chosen
        if (characterName === ""){ 
            characterName = await Axios.get('/api/names')}
        characterName = characterName.data


        // Resets in case user has already ran the function.
        if (str !== 8 || dex !== 8 || wis !== 8 || int !== 8 || con !== 8 || cha !== 8) {
            str = 8; dex = 8; wis = 8; int = 8; con = 8; cha = 8}

        // Randomly Generated the players Str, Dex, Wis, Int, Con, and Charisma stats.
        for (let i = 0; i < 32; i++) {
            rando = Math.ceil(Math.random() * 60)
            if (rando <= 10) str++
            else if (rando <= 20) dex++
            else if (rando <= 30) wis++
            else if (rando <= 40) int++
            else if (rando <= 50) con++
            else if (rando <= 60) cha++
        }
        //Assign background and Alignment if previously unselected
        if (background === 0) background = Math.ceil(Math.random() * 13)
        if (alignment === 0) alignment = Math.ceil(Math.random() * 9)

        // We Need the Highest stat in order to assign the best classes/races that the stat uses.
        //This allows the player to have a good character. and is only for the Easy and Normal buttons
        let stats = [str, dex, wis, int, con, cha]
        // highest = the highest of the stats that were randomly generated.
        // val = the position in the array so that we can assign a class based
        // off of that highest value 
        var highest = 0
        var val = null
        for (let i = 0; i < 6; i++) {
            if (stats[i] > highest) {
                highest = stats[i]
                val = i
            }
        }

        // if playerClass was unselected, assign class based off
        // of the highest value stat that the class uses.
        if (playerClass === 0) {
            switch (val) {
                case 0: rando = (Math.random() * 30)
                    if (rando <= 10) playerClass = 1
                    else if (rando <= 20) playerClass = 5
                    else playerClass = 7
                    break;
                case 1: rando = (Math.random() * 30)
                    if (rando <= 10) playerClass = 6
                    else if (rando <= 20) playerClass = 5
                    else playerClass = 8
                    break;
                case 2: rando = (Math.random() * 40)
                    if (rando <= 10) playerClass = 3
                    else if (rando <= 20) playerClass = 4
                    else if (rando <= 30) playerClass = 6
                    else playerClass = 8
                    break;
                case 3: playerClass = 12
                    break;
                case 4: rando = (Math.random() * 40)
                    if (rando <= 10) playerClass = 1
                    else if (rando <= 20) playerClass = 5
                    else playerClass = 10
                    break;
                case 5: rando = (Math.random() * 30)
                    if (rando <= 10) playerClass = 2
                    else if (rando <= 20) playerClass = 7
                    else if (rando <= 30) playerClass = 10
                    else playerClass = 11
                    break;
                default: alert('whoops an error happened')
            }
        }

        // if playerRace was unselected, assign Race based off
        // of the highest value stat that the Race adds bonuses to.
        if (playerRace === 0) {
            switch (val) {
                case 0: rando = (Math.random() * 40)
                    if (rando <= 10) { playerRace = { race: 1, subrace: 1 }; con += 2; wis++; size = "medium"; speed = 25 }
                    else if (rando <= 20) { playerRace = { race: 8, subrace: 0 }; str += 2; con++; size = "medium"; speed = 30 }
                    else if (rando <= 30) { playerRace = { race: 5, subrace: 0 }; str += 2; cha++; size = "medium"; speed = 30 }
                    else { playerRace = { race: 4, subrace: 0 }; str++; dex++; wis++; int++; con++; cha++; size = "medium"; speed = 30 }
                    break;
                case 1: rando = (Math.random() * 40)
                    if (rando <= 10) playerRace = 2
                    else if (rando <= 20) { playerRace = { race: 6, subrace: 1 }; int += 2; dex++; size = "small"; speed = 25 }
                    else if (rando <= 30) { playerRace = { race: 3, subrace: 1 }; dex += 2; cha++; size = "small"; speed = 25 }
                    else { playerRace = { race: 4, subrace: 0 }; str++; dex++; wis++; int++; con++; cha++; size = "medium"; speed = 30 }
                    break;
                case 2: rando = (Math.random() * 50)
                    if (rando <= 10) { playerRace = { race: 1, subrace: 2 }; con += 2; str += 2; size = "medium"; speed = 25 }
                    else if (rando <= 20) { playerRace = { race: 8, subrace: 0 }; str += 2; con++; size = "medium"; speed = 30 }
                    else if (rando <= 30) { playerRace = { race: 3, subrace: 2 }; dex += 2; con++; size = "small"; speed = 25 }
                    else if (rando <= 40) { playerRace = { race: 6, subrace: 2 }; int += 2; con++; size = "small"; speed = 25 }
                    else { playerRace = { race: 4, subrace: 0 }; str++; dex++; wis++; int++; con++; cha++; size = "medium"; speed = 30 }
                    break;
                case 3: rando = (Math.random() * 40)
                    if (rando <= 10) { playerRace = { race: 2, subrace: 1 }; dex += 2; wis++; size = "medium"; speed = 30 }
                    else if (rando <= 20) { playerRace = { race: 9, subrace: 0 }; cha += 2; int++; size = "medium"; speed = 30 }
                    else if (rando <= 30) { playerRace = { race: 6, subrace: 1 }; int += 2; dex++; size = "small"; speed = 25 }
                    else { playerRace = { race: 4, subrace: 0 }; str++; dex++; wis++; int++; con++; cha++; size = "medium"; speed = 30 }
                    break;
                case 4: rando = (Math.random() * 30)
                    if (rando <= 10) { playerRace = { race: 1, subrace: 1 }; con += 2; wis++; size = "medium"; speed = 25 }
                    else if (rando <= 20) { playerRace = { race: 2, subrace: 2 }; dex += 2; int++; size = "medium"; speed = 30 }
                    else { playerRace = { race: 4, subrace: 0 }; str++; dex++; wis++; int++; con++; cha++; size = "medium"; speed = 30 }
                    break;
                case 5: rando = (Math.random() * 60)
                    if (rando <= 10) { playerRace = { race: 7, subrace: 0 }; cha += 2; con++; dex++; size = "medium"; speed = 30 }
                    else if (rando <= 20) { playerRace = { race: 2, subrace: 3 }; dex += 2; cha++; size = "medium"; speed = 30 }
                    else if (rando <= 30) { playerRace = { race: 3, subrace: 1 }; dex += 2; cha++; size = "small"; speed = 25 }
                    else if (rando <= 40) { playerRace = { race: 5, subrace: 0 }; str += 2; cha++; size = "medium"; speed = 30 }
                    else if (rando <= 50) { playerRace = { race: 9, subrace: 0 }; cha += 2; int++; size = "medium"; speed = 30 }
                    else { playerRace = { race: 4, subrace: 0 }; str++; dex++; wis++; int++; con++; cha++; size = "medium"; speed = 30 }
                    break;
                default: alert('whoops an error happened')
            }
        }

        // Retrieve the two skills the players background allows.
        let backgroundSkills = await Axios.get(`/api/backgroundskills/${background}`)
        backgroundSkills = backgroundSkills.data

        //Retrieve a list of the users Traits for the characters race.
        let racialTraits = await Axios.post(`/api/racialtraits`, { playerRace })
        racialTraits = racialTraits.data


        // Selects Skills that are available to the player based off the class they chose/were assigned
        let classSkills = await Axios.get(`api/classskills/${playerClass}/${playerRace}`)
        classSkills = classSkills.data
        console.log(classSkills)
        hitDie = classSkills.hitDie
        savingThrows = classSkills.savingThrows
        armorProf = classSkills.armorProf
        weaponProf = classSkills.weaponProf
        let checked = [false, false, false, false, false, false, false, false]
        for (let i = 0; i < classSkills.points; i++) {
            let rando = (Math.floor((Math.random() * classSkills.skills.length )))
            while(checked.includes(rando)) {
             rando = (Math.floor((Math.random() * classSkills.skills.length )))
            }
            console.log(classSkills.points)
                checked[i] = rando
                this.setState({
                    [classSkills.skills[rando].skill]: true
                })
        }

        //Get Equipment for the Character
        let equipment = await Axios.get(`/api/equipment/${playerClass}`)
        equipment = equipment.data


        //set state to new values that the function ran to be added to our character sheet
        this.setState({
            characterName, playerClass, playerRace, background, alignment,
            str, wis, int, dex, cha, con, [backgroundSkills[0].skill]: true, [backgroundSkills[1].skill]: true, racialTraits, speed, size, 
            hitDie, weaponProf, armorProf, savingThrows, displayCharacter, equipment
        })
    }


    handleChange = (key, e) => {
        this.setState({
            [key]: e
        })
        console.log(this.state)
    }

    preview = () => {
        this.props.setSheet(this.state)
        this.props.history.push('/preview')
    }

    render() {
        console.log(this.state)
        return (
            <div className="random-outer">
                <div className="random-top">
                    <div className="random-left">
                        <input onChange={e => this.handleChange("characterName", e.target.value)} className="random-inputs" type="text" placeholder="Name" value={this.state.characterName} />
                        <select value={this.state.playerClass} onChange={e => this.handleChange("playerClass", e.target.value)} className="random-inputs" name="Class" id="Class">
                            <option value={0}>Class</option>
                            <option value={1}>Barbarian</option>
                            <option value={2}>Bard</option>
                            <option value={3}>Cleric</option>
                            <option value={4}>Druid</option>
                            <option value={5}>Fighter</option>
                            <option value={6}>Monk</option>
                            <option value={7}>Paladin</option>
                            <option value={8}>Ranger</option>
                            <option value={9}>Rogue</option>
                            <option value={10}>Sorcerer</option>
                            <option value={11}>Warlock</option>
                            <option value={12}>Wizard</option>
                        </select>
                        <select value={this.state.playerRace} onChange={e => this.handleChange("playerRace", e.target.value)} className="random-inputs" name="Race" id="Race">
                            <option value={0}>Race</option>
                            <option value={{race: 1, subrace: 1}}>Hill Dwarf</option>
                            <option value={{race: 1, subrace: 2}}>Mountain Dwarf</option>
                            <option value={{race: 2, subrace: 1}}>High Elf</option>
                            <option value={{race: 2, subrace: 2}}>Wood Elf</option>
                            <option value={{race: 2, subrace: 3}}>Drow</option>
                            <option value={{race: 3, subrace: 1}}>Light-foot Halfing</option>
                            <option value={{race: 3, subrace: 1}}>Stout Halfing</option>
                            <option value={{race: 4, subrace: 0}}>Human</option>
                            <option value={{race: 5, subrace: 0}}>Dragonborn</option>
                            <option value={{race: 6, subrace: 1}}>Forest Gnome</option>
                            <option value={{race: 6, subrace: 2}}>Rock Gnome</option>
                            <option value={{race: 7, subrace: 0}}>Half-Elf</option>
                            <option value={{race: 8, subrace: 0}}>Half-Orc</option>
                            <option value={{race: 9, subrace: 0}}>Tiefling</option>
                        </select>
                    </div>
                    <div className="random-right">
                        <input onChange={e => this.handleChange("playerName", e.target.value)} className="random-inputs" type="text" placeholder="Player Name" value={this.state.playerName} />
                        <select value={this.state.background} onChange={e => this.handleChange("background", e.target.value)} className="random-inputs" name="Background" id="Background">
                            <option value={0}>Background</option>
                            <option value={1}>Acoylte</option>
                            <option value={2}>Charlatan</option>
                            <option value={3}>Criminal / Spy</option>
                            <option value={4}>Entertainer</option>
                            <option value={5}>Folk Hero</option>
                            <option value={6}>Guild Artisan</option>
                            <option value={7}>Hermit</option>
                            <option value={8}>Noble</option>
                            <option value={9}>Outlander</option>
                            <option value={10}>Sage</option>
                            <option value={11}>Sailor</option>
                            <option value={12}>Soldier</option>
                            <option value={13}>Urchin</option>
                        </select>
                        <select value={this.state.alignment} onChange={e => this.handleChange("alignment", e.target.value)} className="random-inputs" name="Alignment" id="Alignment">
                            <option value={0}>Alignment</option>
                            <option value={1}>Lawful Good</option>
                            <option value={2}>Neutral Good</option>
                            <option value={3}>Chaotic Good</option>
                            <option value={4}>Lawful Neutral</option>
                            <option value={5}>Neutral</option>
                            <option value={6}>Chaotic Neutral</option>
                            <option value={7}>Lawful Evil</option>
                            <option value={8}>Neutral Evil</option>
                            <option value={9}>Chaotic Evil</option>
                        </select>
                    </div>
                </div>
                <div className="random-bottom">
                    <div className="random-left"></div>
                    <div className="random-right"></div>
                </div>
                <div className="button-container">
                    <button onClick={this.easy} className="random easy">Easy</button>
                    <button className="random normal">Normal</button>
                    <button className="random hard">Hard</button>
                    <button className="random mayhem">Mayhem</button>
                </div>
                {this.state.displayCharacter === true ? 
                <div>
                <h1>{this.state.characterName}</h1> 
                <h1>str:{this.state.str} dex:{this.state.dex} wis:{this.state.wis} int:{this.state.int} con: {this.state.con} cha: {this.state.cha}</h1>
                    <button onClick={()=>this.preview()}>Preview</button>
                </div>
                
                : null }
            </div>
        )
    }

}

export default connect(null, {setSheet})(random);