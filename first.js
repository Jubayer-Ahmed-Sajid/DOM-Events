// system one
{/* <button onclick="document.body.style.backgroundColor='red'">Make red</button> */}

// system two
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';

}
// system three 
const makeBlueButton = document.getElementById('blue-button');
        makeBlueButton.onclick = blueButton;
        function blueButton (){
            document.body.style.backgroundColor = 'blue';
        }

        const makePurpleButton = document.getElementById('make-purple');
        makePurpleButton.onclick = function makePurple() {
            document.body.style.backgroundColor = 'purple'
        }

// system four
const makePinkButton = document.getElementById('make-pink')
makePinkButton.addEventListener('click' ,makePink)
function makePink(){
    document.body.style.backgroundColor='pink'
}
// other system four
const makeGoldenRodButton = document.getElementById('make-golden-rod')
makeGoldenRodButton.addEventListener('click', function makegreen(){
    document.body.style.backgroundColor='goldenrod'
})
// system four most used
document.getElementById('make-orange').addEventListener('click', function (){
    document.body.style.backgroundColor ='orange'
})

