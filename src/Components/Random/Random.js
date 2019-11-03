import React, { Component } from "react"
import "./Random.css"
import Header from "../Authentication/Header/Header.js"
import Axios from "axios"
import {Link} from "react-router-dom"
import { setSheet, setUser} from "../../ducks/reducer"
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
        weaponProf: [],
        profeciency: 2
    }

    componentWillMount(){
        Axios.get('/auth/user').then((res)=>{
            let user = res.data
                if(user.username === undefined) {
                    return  this.props.history.push("/")
                  }
            this.props.setUser(user)
            this.setState({
                username: user.username
            })
        })
    }
    
    easy = async (mode) => {
        // destructure state to be used in function
        let { characterName, playerClass, playerRace, background, alignment, str, dex, wis, int,
            con, cha, speed, size, hitDie, savingThrows, armorProf, weaponProf, displayCharacter} = this.state
        //Assign variables for later use in function
        let rando = 0
        playerClass = +playerClass


        //Display users generated Character
        displayCharacter = true;


        //Assign Name to character if not previously chosen
        if (characterName === ""){ 
            characterName = await Axios.get('/api/names')
            characterName = characterName.data
        }


        // Resets in case user has already ran the function.
        if (str !== 8 || dex !== 8 || wis !== 8 || int !== 8 || con !== 8 || cha !== 8) {
            str = 8; dex = 8; wis = 8; int = 8; con = 8; cha = 8}

        // Randomly Generated the players Str, Dex, Wis, Int, Con, and Charisma stats.
        switch(mode) {
            case 0: 
            for (let i = 0; i < 32; i++) {
                rando = Math.ceil(Math.random() * 60)
                if (rando <= 10) str++
                else if (rando <= 20) dex++
                else if (rando <= 30) wis++
                else if (rando <= 40) int++
                else if (rando <= 50) con++
                else if (rando <= 60) cha++
            }
            break;
            case 1: 
            for (let i = 0; i < 27; i++) {
                rando = Math.ceil(Math.random() * 60)
                if (rando <= 10) str++
                else if (rando <= 20) dex++
                else if (rando <= 30) wis++
                else if (rando <= 40) int++
                else if (rando <= 50) con++
                else if (rando <= 60) cha++
            }
            break;
            case 2: 
            for (let i = 0; i < 23; i++) {
                rando = Math.ceil(Math.random() * 60)
                if (rando <= 10) str++
                else if (rando <= 20) dex++
                else if (rando <= 30) wis++
                else if (rando <= 40) int++
                else if (rando <= 50) con++
                else if (rando <= 60) cha++
            }
            break;
            case 3:
            for (let i = 0; i < 20; i++) {
                rando = Math.ceil(Math.random() * 60)
                if (rando <= 10) str++
                else if (rando <= 20) dex++
                else if (rando <= 30) wis++
                else if (rando <= 40) int++
                else if (rando <= 50) con++
                else if (rando <= 60) cha++
            }
            break;
            default: alert('whoops an error occurred selecting stats')
        }
        //Assign background and Alignment if previously unselected
        if (background === 0) background = Math.ceil(Math.random() * 13)
        if (alignment === 0) alignment = Math.ceil(Math.random() * 9)

        // We Need the Highest stat in order to assign the best classes/races that the stat uses.
        // and the Lowest stat for Mayhem Mode for the worst character
        //This allows the player to have a good character. and is only for the Easy and Normal buttons
        let stats = [str, dex, wis, int, con, cha]
        // highest = the highest of the stats that were randomly generated.
        // val = the position in the array so that we can assign a class based
        // off of that highest value 
        let highest = 0
        let lowest = 30
        let val = null
        let lowval = null
        for (let i = 0; i < 6; i++) {
            if (stats[i] > highest) {
                highest = stats[i]
                val = i
            }
            if(stats[i] < lowest) {
                lowest = stats[i]
                lowval= i
            }
        }

        // if playerClass was unselected, assign class based off
        // of the highest value stat that the class uses.
        switch(mode) {
            case 0:
                    if (playerClass === 0 || playerClass === "0" ) {
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
            break;
            case 1:
                    if (playerClass === 0 || playerClass === "0" ) {
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
            break;
            case 2: 
            playerClass = Math.ceil(Math.random() * 12)
            break;
            default: alert("whoops there was an error selected your class")
        }


        // if playerRace was unselected, assign Race based off
        // of the highest value stat that the Race adds bonuses to.
        switch(mode) {
            case 0:
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
            break;
            case 1: 
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
            break;
            case 2:
                if(playerRace === 0) {
                    switch(Math.ceil(Math.random() * 14)) {
                        case 1: playerRace = {race: 1, subrace: 1}; break
                        case 2: playerRace = {race: 1, subrace: 2}; break
                        case 3: playerRace = {race: 2, subrace: 1}; break
                        case 4: playerRace = {race: 2, subrace: 2}; break
                        case 5: playerRace = {race: 2, subrace: 3}; break
                        case 6: playerRace = {race: 3, subrace: 1}; break
                        case 7: playerRace = {race: 3, subrace: 2}; break
                        case 8: playerRace = {race: 4, subrace: 0}; break
                        case 9: playerRace = {race: 5, subrace: 0}; break
                        case 10: playerRace = {race: 6, subrace: 1}; break
                        case 11: playerRace = {race: 6, subrace: 2}; break
                        case 12: playerRace = {race: 7, subrace: 0}; break
                        case 13: playerRace = {race: 8, subrace: 0}; break
                        case 14: playerRace = {race: 9, subrace: 0}; break
                    }
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
    }

    preview = () => {
        let {playerClass, playerRace, background, alignment} = this.state
                // Set class, race, background, and alignment to be the string variables associated with their numbers
                switch(playerClass) {
                    case 1: playerClass = "Barbarian";  break;
                    case 2: playerClass = "Bard"; break;
                    case 3: playerClass = "Cleric"; break;
                    case 4: playerClass = "Druid"; break;
                    case 5: playerClass = "Fighter"; break;
                    case 6: playerClass = "Monk"; break;
                    case 7: playerClass = "Paladin"; break;
                    case 8: playerClass = "Ranger"; break;
                    case 9: playerClass = "Rogue"; break;
                    case 10: playerClass = "Sorcerer"; break;
                    case 11: playerClass = "Warlock"; break;
                    case 12: playerClass = "Wizard"; break;
                    default : playerClass = "error"
                }
                switch(playerRace.race) {
                     case 1:
                         switch(playerRace.subrace) {
                             case 1: playerRace = "Hill Dwarf"; break;
                             case 2: playerRace = "Mountain Dwarf"; break;
                             default: playerRace = "error"
                         }
                         break;
                     case 2:
                         switch(playerRace.subrace) {
                             case 1: playerRace = "High Elf"; break;
                             case 2: playerRace = "Wood Elf"; break;
                             case 3: playerRace = "Drow"; break;
                             default: playerRace = "error"
                         }
                         break;
                     case 3:
                         switch(playerRace.subrace) {
                             case 1: playerRace = "Light-foot Halfling"; break;
                             case 2: playerRace = "Stout Halfling"; break;
                             default: playerRace = "error";
                         }
                         break;
                     case 4: playerRace = "Human"; break; 
                     case 5: playerRace = "Dragonborn"; break;
                     case 6:
                         switch(playerRace.subrace) {
                             case 1: playerRace = "Forest Gnome"; break;
                             case 2: playerRace = "Rock Gnome"; break;
                             default: playerRace = "error";
                         }
                         break;
                     case 7: playerRace = "Half-Elf"; break;
                     case 8: playerRace = "Half-Orc"; break;
                     case 9: playerRace = "Teifling"; break;
                     default: playerRace = "error"
                }
                switch(background) {
                     case 1: background = "Acoylte"; break
                     case 2: background = "Charlatan"; break
                     case 3: background = "Criminal"; break
                     case 4: background = "Entertainer"; break
                     case 5: background = "Folk Hero"; break
                     case 6: background = "Guild Artisan"; break
                     case 7: background = "Hermit"; break
                     case 8: background = "Noble"; break
                     case 9: background = "Outlander"; break
                     case 10: background = "Sage"; break
                     case 11: background = "Sailor"; break
                     case 12: background = "Soldier"; break
                     case 13: background = "Urchin"; break
                     default: background = "error"
                }
                switch(alignment) {
                 case 1: alignment = "Lawful Good"; break
                 case 2: alignment = "Neutral Good"; break
                 case 3: alignment = "Chaotic Good"; break
                 case 4: alignment = "Lawful Neutral"; break
                 case 5: alignment = "Neutral"; break
                 case 6: alignment = "Chaotic Neutral"; break
                 case 7: alignment = "Lawful Evil"; break
                 case 8: alignment = "Neutral Evil"; break
                 case 9: alignment = "Chaotic Evil"; break
                 default: alignment = "error"
                }
                this.setState({playerClass, playerRace, background, alignment}
                ,()=> 
                {this.props.setSheet(this.state)
                 this.props.history.push('/preview')})

    }

    render() {
        return (
            <div className="random-outer">
                <Header/>
                <div className="random-main">
                <div className="random-navigation">
                    <Link className="random-creator" to = "/home">
                        <h1>Home</h1>
                        <h6 className="navigation-subtext">Aces</h6>
                    </Link>
                    <div className="adventure-league">
                        <h1 >A.L.</h1>
                        <h6 className="navigation-subtext">Adventure <p>League</p></h6>
                    </div>
                    <div className="custom-create">
                        <h1>C.C</h1>
                        <h6 className="navigation-subtext">Custom <p>Create</p></h6>
                    </div>
                </div>
                <div className="random-main-display">
                    <div className="random-sheets-display">
                        <input onChange={e => this.handleChange("characterName", e.target.value)} className="random-inputs" type="text" placeholder="Name" value={this.state.characterName} />
                        <select value={this.state.playerClass} onChange={e => this.handleChange("playerClass", e.target.value)} className="random-inputs random-class-option" name="Class" id="Class">
                            <option className="random-class-option" value={0}>Class</option>
                            <option className="random-class-option" value={1}>Barbarian</option>
                            <option className="random-class-option" value={2}>Bard</option>
                            <option className="random-class-option" value={3}>Cleric</option>
                            <option className="random-class-option" value={4}>Druid</option>
                            <option className="random-class-option" value={5}>Fighter</option>
                            <option className="random-class-option" value={6}>Monk</option>
                            <option className="random-class-option" value={7}>Paladin</option>
                            <option className="random-class-option" value={8}>Ranger</option>
                            <option className="random-class-option" value={9}>Rogue</option>
                            <option className="random-class-option" value={10}>Sorcerer</option>
                            <option className="random-class-option" value={11}>Warlock</option>
                            <option className="random-class-option" value={12}>Wizard</option>
                        </select>
                        <select value = {this.state.playerRace} onChange={e => this.handleChange("playerRace", e.target.value)} className="random-inputs random-race-option" name="Race" id="Race">
                            <option className="random-race-option" value={0}>Race</option>
                            <option className="random-race-option" value={{race: 1, subrace: 1}}>Hill Dwarf</option>
                            <option className="random-race-option" value={{race: 1, subrace: 2}}>Mountain Dwarf</option>
                            <option className="random-race-option" value={{race: 2, subrace: 1}}>High Elf</option>
                            <option className="random-race-option" value={{race: 2, subrace: 2}}>Wood Elf</option>
                            <option className="random-race-option" value={{race: 2, subrace: 3}}>Drow</option>
                            <option className="random-race-option" value={{race: 3, subrace: 1}}>Light-foot Halfing</option>
                            <option className="random-race-option" value={{race: 3, subrace: 2}}>Stout Halfing</option>
                            <option className="random-race-option" value={{race: 4, subrace: 0}}>Human</option>
                            <option className="random-race-option" value={{race: 5, subrace: 0}}>Dragonborn</option>
                            <option className="random-race-option" value={{race: 6, subrace: 1}}>Forest Gnome</option>
                            <option className="random-race-option" value={{race: 6, subrace: 2}}>Rock Gnome</option>
                            <option className="random-race-option" value={{race: 7, subrace: 0}}>Half-Elf</option>
                            <option className="random-race-option" value={{race: 8, subrace: 0}}>Half-Orc</option>
                            <option className="random-race-option" value={{race: 9, subrace: 0}}>Tiefling</option>
                        </select>
                   
                   
                        <input onChange={e => this.handleChange("playerName", e.target.value)} className="random-inputs " type="text" placeholder="Player Name" value={this.state.playerName} />
                        <select value={this.state.background} onChange={e => this.handleChange("background", e.target.value)} className="random-inputs random-race-option" name="Background" id="Background">
                            <option className="random-race-option" value={0}>Background</option>
                            <option className="random-race-option" value={1}>Acoylte</option>
                            <option className="random-race-option" value={2}>Charlatan</option>
                            <option className="random-race-option" value={3}>Criminal / Spy</option>
                            <option className="random-race-option" value={4}>Entertainer</option>
                            <option className="random-race-option" value={5}>Folk Hero</option>
                            <option className="random-race-option" value={6}>Guild Artisan</option>
                            <option className="random-race-option" value={7}>Hermit</option>
                            <option className="random-race-option" value={8}>Noble</option>
                            <option className="random-race-option" value={9}>Outlander</option>
                            <option className="random-race-option" value={10}>Sage</option>
                            <option className="random-race-option" value={11}>Sailor</option>
                            <option className="random-race-option" value={12}>Soldier</option>
                            <option className="random-race-option" value={13}>Urchin</option>
                        </select>
                        <select value={this.state.alignment} onChange={e => this.handleChange("alignment", e.target.value)} className="random-inputs random-race-option" name="Alignment" id="Alignment">
                            <option className="random-race-option" value={0}>Alignment</option>
                            <option className="random-race-option" value={1}>Lawful Good</option>
                            <option className="random-race-option" value={2}>Neutral Good</option>
                            <option className="random-race-option" value={3}>Chaotic Good</option>
                            <option className="random-race-option" value={4}>Lawful Neutral</option>
                            <option className="random-race-option" value={5}>Neutral</option>
                            <option className="random-race-option" value={6}>Chaotic Neutral</option>
                            <option className="random-race-option" value={7}>Lawful Evil</option>
                            <option className="random-race-option" value={8}>Neutral Evil</option>
                            <option className="random-race-option" value={9}>Chaotic Evil</option>
                        </select>

                        <div className="button-container">
                    <button id="random-easy" onClick={()=>this.easy(0)} className="random easy">Easy</button>
                    <button id="random-normal" onClick={()=>this.easy(1)} className="random normal">Normal</button>
                    <button id="random-hard" onClick={()=>this.easy(2)} className="random hard">Hard</button>
                    <button id="random-mayhem">Mayhem</button>
                </div>
                {this.state.displayCharacter === true ? 
                <div>
                <h1>{this.state.characterName}</h1> 
                <h1>str:{this.state.str} dex:{this.state.dex} wis:{this.state.wis} int:{this.state.int} con: {this.state.con} cha: {this.state.cha}</h1>
                    <button onClick={()=>this.preview()}>Preview</button>
                </div>
                
                : null }
                    </div>
                    <div className="fun-fact">
                        <div className="did-you-know">
                        <h1>Did you know?</h1>
                        </div>
                        <div className="random-information">
                        <h4>Barbarians use Strength as their main stat</h4>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        )
    }

}

export default connect(null, {setSheet, setUser})(random);