const scriptName="????????.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

function chkCommand(msg, cmnd) {
    if(msg.indexOf(cmnd) != -1 && (msg[0] == '@' || msg[0] == '/')) return true;
    else return false;
}

if(chkCommand(msg, "점심") || chkCommand(msg, "저녁")|| chkCommand(msg, "야식")|| chkCommand(msg, "아침")) {
    var food;
    food = ["돈까스","우동","라멘","샐러드","굶는건","집밥","라면","파스타","치킨","짜장","짬뽕","볶음밥","샌드위치","떡볶이","마라탕","쌀국수","양꼬치","닭발","초밥","삼겹살","고기","푸른햇살","깡스","용버이네 노상통닭","곱돌이","알촌","맥도날드","맘스터치","진국","곱창하우스","행운돈까스","이돈집","하쿠나마타타","끄트머리","전도사","금계찜닭","오징어바다","버거쇼","조명창고","와와","정통집","장모족발"];
    var tempreply = msg.replace("@","");
    var randomfood;
    randomfood = food[Math.floor(Math.random() * food.length)];
    replier.reply("오늘 " + tempreply + "은 " + randomfood + "어때요?" );
}

if(chkCommand(msg, "주사위"){
    var dice = Math.floor(Math.random()*6)+1;
    replier.reply(dice);
}
if(chkCommand(msg, "날짜"){
    var date = new Date();
    var today = date.getFullyear() + "년" + (date.getMonth()+1) + "월" + date.getDate() + "일";
    replier.reply(today);
}

if(chkCommand(msg, "실검"){
    var _issuedata=org.jsoup.Jsoup.connect("https://m.naver.com/search.naver?query=??????%20??????").get().select("span.tit")+"";
    _issuedata = _issuedata.replace(/<[^>]+/g,"");
    _issuedata = _issuedata.split("\n");
    var result = "";
    for(var n = 0;n<20;n++){
        result+=(n+1)+"??: " + +issuedata[n]+"\n";
    }
    replier.reply("[네이버 실시간 검색어 순위]\n\n" + result.trim());
}

if(chkCommand(msg, "날씨"){
    var weatherdata = Utils.getWebText("https://m.search.naver.com/search.naver?query=????");
    var weatherdata2 = weatherdata.split("전국날씨</strong>");
    var weatherdata3 = weatherdata2[1].split("특보");
    var weatherdata4 = weatherdata3[0].replace(/(<([^>]+)>)/g, "");
    weatherdata4 = weatherdata4.trim();
    weatherdata4 = weatherdata4.replace(/  /g, "");
    weatherdata4 = weatherdata4.replace(/도씨/g, "→");
    weatherdata4 = weatherdata4.replace(/ /g, ", ");
    replier.reply("[???? ????]\n" + weatherdata4);
}
if(msg=="한강 물 온도"){
    var hangangdata = org.jsoup.Jsoup.connect("https://www.wpws.kr/hangang/").get();
    hangangdata = hangangdata.select("p")+"";
    hangangdata = hangangdata.split("\n")[2];
    hangangdata = hangangdata.replace(/<[^>]+>/g,"");
    replier.reply("현재 한강 수온은 "  + hangangdata + " 입니다.");
}

}


function onStartCompile(){
    /*컴파일 똑은 Api.reload호출 시, 컴파일 되기 이전에 호출되는 함수.
     *제안하는 용도: 리로드시 자동백업*/
    
}

//아래 4개의 메소드는 액티비티 화면을 수정할 때 사용..
function onCreate(savedInstanceState,activity) {
    var layout=new android.widget.LinearLayout(activity);
    layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    var txt=new android.widget.TextView(activity);
    txt.setText("액티비티 사용 예시입니다..");
    layout.addView(txt);
    activity.setContentView(layout);
}
function onResume(activity) {}
function onPause(activity) {}
function onStop(activity) {}