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
            case 6: background = "guild_artesian"
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


    }
}