// *유저는 숫자 입력 가능
// *유저가 입력 한 숫자가 Random 한 숫자보다 작으면 Up출력, 크면 Down 출력
// *유저가 숫자를 맞추면 That's Right! 출력
// *기회는 총 5번
// 리셋 버튼을 누르면 게임 리셋
// *유저가 1~100 범위 밖의 숫자를 입력하면 경고메세지
// *유저가 이미 입력한 숫자를 또 입력하면 경고메세지


let RandomNumber = 0;
function pickRandomNumber() {
    RandomNumber = Math.floor(Math.random() * 100) + 1; // 1~100까지의 랜덤 숫자 생성
    console.log(RandomNumber)
}
pickRandomNumber();

let UserInput = document.getElementById("user-input"); // 유저 숫자 입력 받기
let PlayButton = document.getElementById("play-button"); // GO! 버튼
let ResetButton = document.getElementById("reset-button"); // 리셋 버튼
let ResultText = document.getElementById("Result-Text"); // 결과 출력
let ChancesText = document.getElementById("Chances-Text"); // 남은 기회 출력

let chances = 5; // 기회 5번
let history = []; // 유저가 입력한 숫자 기록

PlayButton.addEventListener("click", play);
ResetButton.addEventListener("click", reset);



function play() {
    const userValue = UserInput.value
    console.log(`입력값 ${userValue}`)

    if (userValue < 1 || userValue > 100) {
        ResultText.textContent = "1~100 사이 숫자 입력해주세요"
        return;
    }

    if (history.includes(userValue)) {
        ResultText.textContent = "이미 입력한 숫자입니다."
        return;
    }


    if (userValue < RandomNumber) {
        ResultText.textContent = "Up!"
    }
    else if (userValue > RandomNumber) {
        ResultText.textContent = "Down!"
    }

    if (userValue == RandomNumber) {
        ResultText.textContent = "That's Right!"
        PlayButton.disabled = true;
    }

    // 기회
    chances--
    ChancesText.textContent = `남은 기회: ${chances}`
    if (chances == 0) {
        ResultText.textContent = `게임 오버! 정답은 ${RandomNumber}였습니다.`
        PlayButton.disabled = true;
        return;
    }
    console.log(`남은 기회 ${chances}번`)

    history.push(userValue)
    console.log(`히스토리 ${history}`)

}

//리셋
function reset() {
    pickRandomNumber();
    history = [];
    ResultText.textContent = "1 ~ 100 사이 숫자를 입력하세요"
    chances = 5;
    ChancesText.textContent = `남은 기회: ${chances}`
    PlayButton.disabled = false;
}


