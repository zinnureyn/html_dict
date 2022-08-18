
const enterence = document.getElementById('enterence-html');
const explain = document.getElementById('explain-html');
const form = document.getElementById('form');
form.addEventListener('submit', save);
const wordList=document.querySelector('.container');


function save(e) {
    e.preventDefault()

    const addedWord = {
        enterence: enterence.value,
        explain: explain.value
    }
    const sonuc = wordControl(addedWord)
    if (sonuc.durum) {
       // console.log("no problem")
       wordAdd(addedWord);

    } else {
        console.log(sonuc.mesaj)
    }

}

function wordControl(addedWord) {
    //objelerde in kullanılır
    for (const deger in addedWord) {
        if (addedWord[deger]) {
            console.log(addedWord[deger])
           
        } else {
            const sonuc = {
                durum: false,
                mesaj: 'boş alan birakmayınız'
            }
            return sonuc;
            
        }

    }
    clear();
    return{
        durum:true,
        mesaj:"no problem"
    }

}
function clear(){
    enterence.value='';
    explain.value='';
}

function wordAdd(addedWord){
     const createdDivForWords = document.createElement("div");
          createdDivForWords.innerHTML = `
              <div class="frame">

     <div class="enterence">
       ${addedWord.enterence}
         </div>
     <div class="explanation">
         ${addedWord.explain}
      </div>
     </div>`

    wordList.appendChild(createdDivForWords);

}







// class Screen {
//     constructor() {
//         this.words = new Words();
//         this.container=document.querySelector('.container');
//         this.enterenceBoxValue=document.getElementById("enterence-html");
//         this.explainBoxValue=document.getElementById("explain-html");
//         this.saveBox=document.getElementById("word-save")
//         this.container.addEventListener('click',this.addWordButton.bind(this));

//     }
//     addWordButton(enterence,means){
//         this.words.createWord(this.enterenceBoxValue,this.explainBoxValue);
//     }
// }




// class Words {
//     constructor() {


//     }
//     createWord(enterence,means) {
//         const createdDivForWords = document.createElement("div");
//         createdDivForWords.innerHTML = `
//         <div class="frame">

//      <div class="enterence">
//       ${enterence}
//         </div>
//      <div class="explanation">
//         ${means}
//      </div>
//     </div>`
//     this.screen.container=appendChild(createdDivForWords);
//     }

// }

// document.addEventListener('DOMContentLoaded', function (e) {
//     const screen = new Screen();
// });
