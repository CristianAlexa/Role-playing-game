function getDiceRollArray (diceCount) {
   const newDiceRolls = []
   for ( let i=1; i <= diceCount; i++) {
      newDiceRolls.push(Math.floor(Math.random()*6 + 1))
   }
   return newDiceRolls
}

function getDiceHtml (diceCount) {
   return getDiceRollArray(diceCount).map(function (number){
      return `<div class="dice">${number}</div>`
   }).join('')
}


const HERO = {
   elementId: "hero",
   name: "Wizard",
   avatar: "images/wizard.png",
   health: 60,
   diceCount: 3
}

const MONSTER = {
   elementId: "monster",
   name: "Orc",
   avatar: "images/orc.png",
   health: 10,
   diceCount: 1
}

function renderCharacter(data) {
   const {elementId, name, avatar, health, diceCount} = data
   const diceHtml = getDiceHtml(diceCount)

   document.getElementById(elementId).innerHTML= `
               <div class="character-card">
                    <h4 class="name"> ${name} </h4>
                    <img class="avatar" src="${avatar}"/>
                    <p class="health">health: <b> ${health} </b></p>
                    <div class="dice-container">
                    ${diceHtml} 
                    </div>
                </div> 
               `
}
console.log(getDiceHtml(HERO.diceCount))

renderCharacter(HERO)
renderCharacter(MONSTER)