INSERT INTO character_sheets (user_id, playerClass, playerRace,
characterName, playerName, alignment, background,
str, dex, wis, inte, con, cha, acro, anim, arca, athl, dece,
hist, insg, intm, medi, natu, perc, perf, reli, slei, stea,
surv, speed, size, hitDie, savingThrows, armorProf, weaponProf,
racialTraits, equipment
)
Values(${user_id}, ${playerClass}, ${playerRace}, ${characterName},
${playerName}, ${alignment}, ${background}, ${str}, ${dex}, ${wis}, ${int},
${con}, ${cha}, ${acro}, ${anim}, ${arca}, ${athl}, ${dece}, ${hist},
${insg}, ${intm}, ${medi}, ${natu}, ${perc}, ${perf}, ${reli}, ${slei}, ${stea},
${surv}, ${speed}, ${size}, ${hitDie}, ${savingThrows}, ${armorProf},
${weaponProf}, ${racialTraits}, ${equipment})