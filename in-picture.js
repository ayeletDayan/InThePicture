'use strict'

var gQuests = createQuests()
function createQuests() {
    return [
        { id: 1, img: 'cat.jpg', opts: ['Horse', 'Cat'], correctOptIndex: 1 },
        { id: 2, img: 'dog.jpg', opts: ['Dog', 'cat'], correctOptIndex: 0 },
        { id: 3, img: 'horse.jpg', opts: ['Dog', 'Horse'], correctOptIndex: 1 }
    ]
}

var gCurrQuestIdx = 0

function start() {
    renderQuest(gQuests)
}

function renderQuest() {
    var strHTML = ''
    var elQuests = document.querySelector('.questions')
    strHTML += `<img src="${gQuests[gCurrQuestIdx].img}" alt=""></img> <br>`
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        strHTML += `<button class="button-small" id="0" onclick="checkAns(${i})">${gQuests[gCurrQuestIdx].opts[i]}</button>`
    }
    elQuests.innerHTML = strHTML         
}

function checkAns(optIdx) {
    if (+optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        if (gCurrQuestIdx !== gQuests.length - 1) {
            gCurrQuestIdx++
            renderQuest()
        }
        else {            
            var elQuestions = document.querySelector('.questions')
            elQuestions.style.display = 'none' 
            var strHTML = ''
            var elVictorious = document.querySelector('.victorious')
            strHTML += 'Victorious!'
            elVictorious.innerHTML = strHTML
            elVictorious.style.display = 'block'            
        }
    }
}