module.exports = {
    randomName: async (req,res) => {
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
    backgroundSkills: async (req,res) => {
        const db = req.app.get('db')
        let backgroundNumber = +req.params.background
        let background = ""
        console.log(backgroundNumber)
        switch(backgroundNumber) {
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
        console.log(background)
        const skills = await db.query(`select skill from background_skills
        where ${background} = true`)
        console.log(skills)
                res.status(200).send(skills)
    },
    racialTraits: async (req,res) => {
        const db = req.app.get('db')
        const race = req.body.playerRace.race
        const sub = req.body.playerRace.subrace
        const raceTraits = await db.Sheets.get_race_traits([race])
        const subTraits = await db.Sheets.get_subrace_traits([race, sub])
        const allTraits = raceTraits.concat(subTraits)
        res.status(200).send(allTraits)
    },
    classSkills: async (req,res) => {
        const db = req.app.get('db')
        const val = +req.params.playerClass
        let playerClass = null
        let points = null
        let hitDie = null
        let savingThrows = null 
        let armorProf = null
        let weaponProf = null
        switch(val) {
            case 1: playerClass = "barbarian"; points = 2; hitDie = 12; savingThrows = [1,5]; armorProf =["Light", "Medium", "Shields"]; weaponProf= ["Simple", "Martial"];  break 
            case 2: playerClass = "bard"; points = 3;  hitDie = 8; savingThrows = [2,6]; armorProf =["Light"]; weaponProf= ["Simple", "Hand Crossbows", "Longswords", "Rapiers", "ShortSwords"];  break 
            case 3: playerClass = "cleric"; points = 2;  hitDie = 8; savingThrows = [3,6]; armorProf =["Light", "Medium", "Shields"]; weaponProf= ["Simple"];  break 
            case 4: playerClass = "druid"; points = 2;  hitDie = 8; savingThrows = [3,4]; armorProf =["Light", "Medium", "Shields"]; weaponProf= ["Clubs", "Daggers", "Darts", "Javalins", "Maces", "Quarterstaffs", "Scimitars", "Sickles", "Slings", "Spears"];  break 
            case 5: playerClass = "fighter"; points = 2;  hitDie = 10; savingThrows = [1,5]; armorProf =["All Armor", "Shields"]; weaponProf= ["Simple", "Martial"];  break 
            case 6: playerClass = "monk"; points = 2;  hitDie = 8; savingThrows = [1,2]; armorProf =["None"]; weaponProf= ["Simple", "ShortSword"];  break 
            case 7: playerClass = "paladin"; points = 2;  hitDie = 10; savingThrows = [3,6]; armorProf =["All Armor", "Shields"]; weaponProf= ["Simple", "Martial"];  break 
            case 8: playerClass = "ranger"; points = 3;  hitDie = 10; savingThrows = [1,5]; armorProf =["Light", "Medium", "Shields"]; weaponProf= ["Simple", "Martial"];  break 
            case 9: playerClass = "rogue"; points = 4;  hitDie = 8; savingThrows = [2,4]; armorProf =["Light"]; weaponProf= ["Simple", "Hand Crossbows", "longswords", "rapiers", "Shortswords"]; break 
            case 10: playerClass = "sorcerer"; points = 2;  hitDie = 6; savingThrows = [5,6]; armorProf =["None"]; weaponProf= ["Daggers", "Darts", "Slings", "quarterStaffs", "Light crossbows"];  break 
            case 11: playerClass = "warlock"; points = 2;  hitDie = 8; savingThrows = [3,6]; armorProf =["Light"]; weaponProf= ["Simple"];  break 
            case 12: playerClass = "wizard"; points = 2;  hitDie = 6; savingThrows = [3,4]; armorProf =["None"]; weaponProf= ["Daggers", "Darts", "Slings", "quarterStaffs", "Light crossbows"];  break 
        }
        console.log(playerClass)
        const skills = await db.query(`select skill from class_race_skills
        where ${playerClass} = true`)
        console.log(skills)
        res.status(200).send({skills, points, hitDie, savingThrows, armorProf, weaponProf})
    }
}