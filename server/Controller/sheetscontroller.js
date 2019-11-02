const Axios = require('axios')

module.exports = {
    randomName: async (req, res) => {
        console.log("name")
        let rando = Math.ceil((Math.random() * 30))
        const db = req.app.get('db')
        let first = await db.Sheets.get_random_first([rando])
        first = first[0].first
        rando = Math.ceil((Math.random() * 30))
        let last = await db.Sheets.get_random_last([rando])
        last = last[0].last
        let name = first + " " + last
        res.status(200).send(name)
    },
    backgroundSkills: async (req, res) => {
        console.log('background skills')
        const db = req.app.get('db')
        let backgroundNumber = +req.params.background
        let background = ""

        switch (backgroundNumber) {
            case 1: background = "acoylte"
                break;
            case 2: background = "charlatan"
                break;
            case 3: background = "criminal_spy"
                break;
            case 4: background = "entertainer"
                break;
            case 5: background = "folk_hero"
                break;
            case 6: background = "guild_artisan"
                break;
            case 7: background = "hermit"
                break;
            case 8: background = "noble"
                break;
            case 9: background = "outlander"
                break;
            case 10: background = "sage"
                break;
            case 11: background = "sailor"
                break;
            case 12: background = "Soldier"
                break;
            case 13: background = "Urchin"
                break;
        }
        const skills = await db.query(`select skill from background_skills
        where ${background} = true`)
        res.status(200).send(skills)
    },
    racialTraits: async (req, res) => {
        console.log('racial traits')
        const db = req.app.get('db')
        const race = req.body.playerRace.race
        const sub = req.body.playerRace.subrace
        let subTraits = []
        const raceTraits = await db.Sheets.get_race_traits([race])
        if (race !== 4 && race !== 5 && race!== 7 && race !== 8 && race !== 9 ) {
            console.log('hit', race)
             subTraits = await db.Sheets.get_subrace_traits([race, sub])
        }
        const allTraits = raceTraits.concat(subTraits)
        res.status(200).send(allTraits)
    },
    classSkills: async (req, res) => {
        console.log('class skills')
        const db = req.app.get('db')
        const val = +req.params.playerClass
        let points = null
        let playerClass = null
        let hitDie = null
        let savingThrows = null
        let armorProf = null
        let weaponProf = null
        switch (val) {
            case 1: playerClass = "barbarian"; points = 2; hitDie = 12; savingThrows = [1, 5]; armorProf = ["Light", "Medium", "Shields"]; weaponProf = ["Simple", "Martial"]; break
            case 2: playerClass = "bard"; points = 3; hitDie = 8; savingThrows = [2, 6]; armorProf = ["Light"]; weaponProf = ["Simple", "Hand Crossbows", "Longswords", "Rapiers", "ShortSwords"]; break
            case 3: playerClass = "cleric"; points = 2; hitDie = 8; savingThrows = [3, 6]; armorProf = ["Light", "Medium", "Shields"]; weaponProf = ["Simple"]; break
            case 4: playerClass = "druid"; points = 2; hitDie = 8; savingThrows = [3, 4]; armorProf = ["Light", "Medium", "Shields"]; weaponProf = ["Clubs", "Daggers", "Darts", "Javalins", "Maces", "Quarterstaffs", "Scimitars", "Sickles", "Slings", "Spears"]; break
            case 5: playerClass = "fighter"; points = 2; hitDie = 10; savingThrows = [1, 5]; armorProf = ["All Armor", "Shields"]; weaponProf = ["Simple", "Martial"]; break
            case 6: playerClass = "monk"; points = 2; hitDie = 8; savingThrows = [1, 2]; armorProf = ["None"]; weaponProf = ["Simple", "ShortSword"]; break
            case 7: playerClass = "paladin"; points = 2; hitDie = 10; savingThrows = [3, 6]; armorProf = ["All Armor", "Shields"]; weaponProf = ["Simple", "Martial"]; break
            case 8: playerClass = "ranger"; points = 3; hitDie = 10; savingThrows = [1, 5]; armorProf = ["Light", "Medium", "Shields"]; weaponProf = ["Simple", "Martial"]; break
            case 9: playerClass = "rogue"; points = 4; hitDie = 8; savingThrows = [2, 4]; armorProf = ["Light"]; weaponProf = ["Simple", "Hand Crossbows", "longswords", "rapiers", "Shortswords"]; break
            case 10: playerClass = "sorcerer"; points = 2; hitDie = 6; savingThrows = [5, 6]; armorProf = ["None"]; weaponProf = ["Daggers", "Darts", "Slings", "quarterStaffs", "Light crossbows"]; break
            case 11: playerClass = "warlock"; points = 2; hitDie = 8; savingThrows = [3, 6]; armorProf = ["Light"]; weaponProf = ["Simple"]; break
            case 12: playerClass = "wizard"; points = 2; hitDie = 6; savingThrows = [3, 4]; armorProf = ["None"]; weaponProf = ["Daggers", "Darts", "Slings", "quarterStaffs", "Light crossbows"]; break
        }
        let skills = await db.query(`select skill from class_race_skills
        where ${playerClass} = true`)
        if (req.params.playerRace === '7') {
            points = points + 2
            skills = await db.query(`select skill from class_race_skills
            where bard = true`)
        }
        res.status(200).send({ skills, points, hitDie, savingThrows, armorProf, weaponProf })
    },
    classEquipment: async (req,res) => {
        console.log('class equipment')
        let playerClass = +req.params.playerClass
        console.log(playerClass)
        let equipment = await Axios.get(`http://www.dnd5eapi.co/api/startingequipment/${playerClass}`)
        equipment = equipment.data

        let startingEquipment = []

        //retrieve the users starting equipment
        if(playerClass != 5) {
            let start = equipment.starting_equipment[0].item.name
            let quantity = equipment.starting_equipment[0].quantity
            startingEquipment.push({name: start, quantity: quantity})

        }

        //retrieve the users other equipment
        console.log("number of choices", equipment.choices_to_make)
        if(equipment.choices_to_make >=1) {
            console.log("1")
          let rando1 =  Math.floor(Math.random() * equipment.choice_1.length)
          let rando2 =  Math.floor(Math.random() * equipment.choice_1[rando1].from.length)
          let item = equipment.choice_1[rando1].from[rando2].item.name
          let quantity = equipment.choice_1[rando1].from[rando2].quantity
          item = {name: item, quantity}
            startingEquipment.push(item)
        }
        if(equipment.choices_to_make >=2) {
            console.log("2")
            let rando1 =  Math.floor(Math.random() * equipment.choice_2.length)
            let rando2 =  Math.floor(Math.random() * equipment.choice_2[rando1].from.length)
            let item = equipment.choice_2[rando1].from[rando2].item.name
            let quantity = equipment.choice_2[rando1].from[rando2].quantity
            item = {name: item, quantity}
              startingEquipment.push(item)
        }
        if(equipment.choices_to_make >=3) {
            console.log("3")
            let rando1 =  Math.floor(Math.random() * equipment.choice_3.length)
            let rando2 =  Math.floor(Math.random() * equipment.choice_3[rando1].from.length)
            let item = equipment.choice_3[rando1].from[rando2].item.name
            let quantity = equipment.choice_3[rando1].from[rando2].quantity
            item = {name: item, quantity}
              startingEquipment.push(item)

        }
        if(equipment.choices_to_make >=4 && playerClass !== 12) {
            console.log('4')
            let rando1 =  Math.floor(Math.random() * equipment.choice_4.length)
            let rando2 =  Math.floor(Math.random() * equipment.choice_4[rando1].from.length)
            let item = equipment.choice_4[rando1].from[rando2].item.name
            let quantity = equipment.choice_4[rando1].from[rando2].quantity
            item = {name: item, quantity}
              startingEquipment.push(item)
        }
        if(equipment.choices_to_make >=5) {
            console.log('5')
            let rando1 =  Math.floor(Math.random() * equipment.choice_5.length)
            let rando2 =  Math.floor(Math.random() * equipment.choice_5[rando1].from.length)
            let item = equipment.choice_5[rando1].from[rando2].item.name
            let quantity = equipment.choice_5[rando1].from[rando2].quantity
            item = {name: item, quantity}
              startingEquipment.push(item)
        }
            res.status(200).send(startingEquipment)

    },
    addSheet: async (req,res) => {
        const db = req.app.get('db')
        let sheetInfo = req.body
        console.log(sheetInfo)
        res.status(200).send(sheetInfo)
    }
}