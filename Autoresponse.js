const scriptName="자동응답.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

function chkCommand(msg, cmnd){
    if(msg.indexOf(cmnd) != -1 && (msg[0] == '@' || msg[0] == '/')) return true;
    else return false;
}

if(msg=="Read me aedh wishes for the cloths of heaven"){
    replier.reply("Had I the heaven\'s embroidered cloths,");
    replier.reply("Enwrought with golden and silver light,");
    replier.reply("The blue and the dim and the dark cloths");
    replier.reply("Of night and light and the half-light\;");
    replier.reply("I would spread the cloths under your feet\:");
    replier.reply("But I, being poor, have only my dreams\;");
    replier.reply("I have spread my dreams under your feet\;");
    replier.reply("Tread softly because you tread on my dreams\.");
}

if(msg=="완자" || msg=="완자야" || msg.indexOf("완자야") != -1){
    if(sender=="김정훈"){replier.reply("부르셨나요 스시님?")}
    else{
        var replylist = ["불렀어 " + sender.substr(1) + "아?","그거 내 이름인데","응?","불렀어?","그만 불러~!!","왜 불러 " + sender,"왜 불러 " +sender,"왜?","메롱"];
        var callreply = replylist[Math.floor(Math.random()*replylist.length)];
        replier.reply(callreply);
}

}
if(chkCommand(msg,"오유민")){
    replier.reply("\(부\)회장님~");
}

if(chkCommand(msg,"성다영")){
    replier.reply("떡!");
    replier.reply("볶!");
    replier.reply("이!");
}

if(chkCommand(msg,"황의찬")){
replier.reply("꼬미 꼬봉~");
}

if(chkCommand(msg,"윤민석")){
    replier.reply("히포크라테스~");
}

if(chkCommand(msg,"김주원")){
    replier.reply("경성제국대학생에게 드릴 말씀은 없습니다 NO JAPAN");
}

if(chkCommand(msg,"김준혁")){
    replier.reply("소년이 잘못하면 소년원을 가고 대학생이 잘못하면 대학원을");
}


if(chkCommand(msg,"김지호")){
    replier.reply("토익천재~");
}



if(chkCommand(msg,"김스시")||chkCommand(msg,"김정훈")){
    replier.reply("주인님~");
}

if(chkCommand(msg,"장준혁")){
    replier.reply("비한양대생에게 드릴 말씀은 없습니다.");
}

if(chkCommand(msg,"김동찬")){
    replier.reply("득근하세요~");
}


if(chkCommand(msg,"김혜지")){
    replier.reply("동구 엄마~");
}

if(msg=="배고파"){
    replier.reply("\"@\"으로 메뉴 추천 받는건 어떨까요?");
}

if(msg=="졸려" || msg =="잠와"){
    replier.reply("몬스터 ㄱ");
}
if(msg=="자야지"){
    replier.reply("잘 자 " +sender);
}

if(chkCommand(msg,"안녕")){
   replier.reply("안녕! 나는 김스시가 만든 카톡 봇이야. @도움말 로 사용 가능한 명령어들을 둘러봐. 혹시 추가할 사항이 있다면 @qordlsdlftn로 카카오톡 남겨줘!");
}

if(chkCommand(msg,"도움말")){
replier.reply("현재 사용가능한 명령어: @로또, @술집, @메뉴추천, @아침/점심/저녁/야식, @날씨, @검색어, @날짜, @한강, @주사위");
}



/*
돈까스: 행운돈까스 
일식: 우동가조쿠 일락 히토리우동 하쿠나마타타 
초밥: 스시존 스시도쿠 스시로지
짜장면: 홍콩반점 성화원 대연각 금룡
국밥: 진국 가마깨비 성일순대국 계경순대국
떡볶이: 두끼 악어 오찡떡 죠스
족발보쌈: 장모족발 굴보쌈
고기: 새마을식당 서래갈매기 화적당 김부삼 깡스 니캉내캉 구공탄 리얼차돌 정통집 끄트머리 철남
치킨: 꼬꼬아찌 금계찜닭 치폴레옹 레드컵스 춘천닭갈비 노랑통닭 60계치킨 용범이네
햄버거: 맘스터치 맥도날드 kfc 버거쇼
양식: 베네토 제이스플레이트 조명창고
곱창: 곱창하우스 곱 김덕후 인계동껍데기
수제비: 맛나 절구통손수제비
김치찌개: 이돈집 장어구이
밥: 봉구스밥버거 알촌 치즈밥있슈 푸른햇살 소나무식당 돼지분식 
기타: 서브웨이 도스마스 마쿠 수철이네왕새우 조씨네고기국수 와와
백번달바, 문바, 갱생, 일번지, 두꺼비로맨스, 포차쌀롱, 코다차야, 더 클래식, 용용선생, 피아이디, 한양포차, 한신포차, 한양동내술집, 서울포차, 춘몽
*/

var regularmenu;
regularmenu=["뼈해장국","샤브샤브","돼지불백","마라탕","소고기","돼지고기","갈비탕","순대국밥","돼지국밥","김밥천국","돈까스","우동","스시","회","피자","햄버거","치킨","감자탕","라면","라멘","해장국","콩나물국밥","김치찌개","된장찌개","부대찌개","삼겹살","짜장면","짬뽕","곱창","간장게장","떡볶이","삼계탕","비빔밥","파전","콩국수","칼국수","설렁탕","떡국","보쌈","해물찜","닭갈비","냉면","추어탕","불고기","낚지볶음","낚곱새","덮밥","볶음밥","제육볶음","두루치기","수육","족발","백숙","육회","찜닭","고등어백반","매운탕","물회","미역국","소머리국밥","곰탕","닭개장","닭곰탕","도가니탕","신선로","동태찌개","연포탕","보신탕","닭도리탕","생선조림","막국수","잔치국수","밀면","핫도그"];
var food;
food=["행운돈까스","우동가조쿠","일락","히토리우동","하쿠나마타타","스시존","스시도쿠","스시로지","홍콩반점","성화원","대연각","금룡","진국","가마깨비","성일순대국","계경순대국","두끼","악어","오찡떡","죠스","장모족발","굴보쌈","새마을식당","서래갈매기","화적당","김부삼","깡스","니캉내캉","구공탄","리얼차돌","정통집","끄트머리","철남","꼬꼬아찌","금계찜닭","치폴레옹","레드컵스","춘천닭갈비","노랑통닭","60계치킨","용범이네","맘스터치","맥도날드","KFC","버거쇼","베네토","제이스플레이트","조명창고","곱창하우스","대한곱창","곱","김덕후","인계동껍데기","맛나","절구통손수제비","이돈집","장어구이","봉구스밥버거","알촌","치즈밥있슈","푸른햇살","소나무식당","돼지분식","서브웨이","도스마스","마쿠","수철이네왕새우","조씨네고기국수","와와"];
var alcohol;
alcohol = ["지금 보고싶다","화분","백번","달바","문바","갱생","일번지","두꺼비로맨스","포차쌀롱","코다차야","더 클래식","용용선생","피아이디","한양포차","한신포차","한양동내술집","서울포차","춘몽","메종드혁이네","호돌이전파사","피아이디","이모네","전도사","나그네파전","동촌","여우주막","진서방곱이네 초록포차","오징어바다","버킷리스트","조명창고","388포차","달포차","싸구포차"];

/*
if(chkCommand(msg,"메뉴추가")){
    var newmenu = msg.replace("@","");
     newmenu = newmenu.replace("메뉴추가","");
    food.push(newmenu);
    replier.reply("menu name : "+ newmenu+ " has been appended.");
   replier.reply("new food list: "+ food);  
}

if(msg.indexOf("스시")!= -1||msg.indexOf("정훈")!= -1){
replier.reply("김정훈",room+"에서"+sender+"님이 호출하셨습니다");
}

if(chkCommand(msg,"술집추가")){
    var newalc = msg.replace("@","");
     newalc = newalc.replace("술집추가","");
    alcohol.push(newalc);
    replier.reply("menu name : "+ newalc+ " has been appended.");
   replier.reply("new alcohol list: "+ alcohol);  
}






*/
/*
if(msg==msg){
    var msgdate = new Date();
    var msgtoday;
    msgtoday ="["+ msgdate.getFullYear() + "년 " + (msgdate.getMonth()+1) + "월 " + msgdate.getDate() + "일 " + (msgdate.getHours()) + "시 "+ (msgdate.getMinutes())+"분 "+ (msgdate.getSeconds())+"초]";
var dochung = msg;
replier.reply("김정훈", msgtoday +" " +room +" "+ sender+": "+"\""+ dochung+"\"");
}
*/

if(chkCommand(msg,"메뉴추천")){
    var tempanswer = msg.replace("@","");
    var randommenu;
    randommenu = regularmenu[Math.floor(Math.random()*regularmenu.length)];
    replier.reply("오늘 메뉴는 " +randommenu+ " 어때요?");
}



if(chkCommand(msg, "점심") || chkCommand(msg, "저녁")|| chkCommand(msg, "야식")|| chkCommand(msg, "아침")) {
    var tempreply = msg.replace("@","");
    var randomfood;
    randomfood = food[Math.floor(Math.random() * food.length)];
    replier.reply("오늘 " + tempreply + "은 " + randomfood + " 어때요?" );
}

if(chkCommand(msg,"술")||chkCommand(msg,"술집")){
    //var alcohol; 
   // alcohol = ["싸구포차","백번","388포차","달포차","달바","문바","갱생","일번지","두꺼비로맨스","포차쌀롱","코다차야","더 클래식","용용선생","피아이디","한양포차","한신포차","한양동내술집","서울포차","춘몽","메종드혁이네","호돌이전파사","피아이디","이모네","전도사","나그네파전","동촌","여우주막","진서방곱이네","초록포차","오징어바다","버킷리스트","조명창고"];
    var randomalc;
    randomalc = alcohol[Math.floor(Math.random() * alcohol.length)];
    replier.reply("술 좀 적당히 마셔! 오늘 술은 " + randomalc + "에서 마시는건 어때?" );
}


if(chkCommand(msg,"술집목록")){
    replier.reply(food);
}




if(chkCommand(msg, "주사위")){
    var dice = Math.floor(Math.random()*6)+1;
    replier.reply(dice);
}
if(chkCommand(msg, "날짜")){
    var date = new Date();
    var weekday = date.getDay();
    var weekdate;
    if(weekday==0){weekdate = "일요일";}
    if(weekday==1){weekdate="월요일";}
    if(weekday==2){weekdate="화요일";}
    if(weekday==3){weekdate="수요일";}
    if(weekday==4){weekdate="목요일";}
    if(weekday==5){weekdate="금요일";}
    if(weekday==6){weekdate="토요일";}

    var today = date.getFullYear() + "년 " + (date.getMonth()+1) + "월 " + date.getDate() + "일 "+ weekdate;
    replier.reply(today);
}
/*
if(msg=="한강 물 온도"){
    var hangangdata = org.jsoup.Jsoup.connect("https://www.wpws.kr/hangang/").get();
    hangangdata = hangangdata.select("p")+"";
    hangangdata = hangangdata.split("\n")[2];
    hangangdata = hangangdata.replace(/<[^>]+>/g,"");
    replier.reply("현재 한강 수온은 "  + hangangdata + " 입니다");
}
*/
if(chkCommand(msg,"한강")){
    var hangangu = Utils.getWebText("https://www.wpws.kr/hangang/");
    var hanganga = hangangu.split("<i class=\"xi-tint\"></i>");
    var hangangb = hanganga[1].split("</p>");
    var hangangc = hangangb[0].replace(/(<<[^>]+)>/g,"");
    replier.reply("현재 한강 수온은 " + hangangc + "입니다");
}
if(chkCommand(msg,"검색어")){
    var u = Utils.getWebText("https://datalab.naver.com/keyword/realtimeList.naver?where=main");
    var a = u.split("<ul class=\"ranking_list\">");
    var b = a[1].split("11</span>");
    var c = b[0].replace(/(<([^>]+)>)/g,"");
    c = c.replace(/\n\n\n/g,"\n").replace(/(?![0-9]+)  /g,"").trim().replace(/(?=(\D))\b/g,".");
    replier.reply("[실시간 급상승 검색어]\n "+c);
}

if(chkCommand(msg,"롤전적")){
    var uz = Utils.getWebText("http://www.op.gg/summoner/userName="+encodeURI(msg.substr(4)));
    var at = uz.splice("<meta name=\"description\" content=\""+msg.substr(4))[1].split("\">")[0].replace(/, /g,"\n").replace(/[/]/g,"\n");
if(at.match("Challenger")===null){
	at = at.replace(/ (?!\d)/,"").split(" ");
	by = at[1];
	replier.reply("["+msg.substr(4)+" 롤 전적]\n"+"티어: "+by+" "+at[3]+"\n"+"승리: "+at[5]+"\n"+"패배: "+at[6]+"\n"+"승률: "+at[9]);
	} else {
		at = at.split(" ");
    replier.reply("["+msg.substr(4)+" 롤 전적]\n"+"티어: "+at[2]+" "+at[3]+"\n"+"승리: "+at[5]+"\n"+"패배: "+at[6]+"\n"+"승률: "+at[9]);
}
}
/*
if(chkCommand(msg, "실검")){
    var _issuedata=org.jsoup.Jsoup.connect("https://m.naver.com/search.naver?query=실시간%20검색어").get().select("span.tit")+"";
    _issuedata = _issuedata.replace(/<[^>]+/g,"");
    _issuedata = _issuedata.split("\n");
    var result = "";
    for(var n = 0;n<20;n++){
        result+=(n+1)+"위: " + +issuedata[n]+"\n";
    }
    replier.reply("[네이버 실시간 검색어 순위]\n\n" + result.trim());
}
*/


if(chkCommand(msg, "날씨")) {
    var weatherdata = Utils.getWebText("https://m.search.naver.com/search.naver?query=날씨");
    var weatherdata2 = weatherdata.split("전국날씨</strong>");
    var weatherdata3 = weatherdata2[1].split("특보");
    var weatherdata4 = weatherdata3[0].replace(/(<([^>]+)>)/g, "");
    weatherdata4 = weatherdata4.trim();
    weatherdata4 = weatherdata4.replace(/  /g, "");
    weatherdata4 = weatherdata4.replace(/도씨/g, "℃");
    weatherdata4 = weatherdata4.replace(/ /g, ", ");
    replier.reply("[현재 날씨]\n" + weatherdata4);
}

if(chkCommand(msg,"로또")) {
var lotto = new Array(6);
var cq = 0;
var oq = true;
while (cq < 6) {
    var nt = 0;
    nt = Math.floor(Math.random()*45 + 1);
    for (var idxq = 0; idxq < c; idxq++) {
        if(lotto[idxq] == nt) {
            oq = false;
        }
    }
    if(oq) {
        lotto[cq] = nt;
        cq++;
    }
    oq = true;
}
replier.reply("로또 추첨\n"+lotto[0]+" "+lotto[1]+" "+lotto[2]+" "+lotto[3]+" "+lotto[4]+" "+lotto[5]);
}


//메뉴 정하기 알고리즘

/*
if(msg=="학굔데 배고파"){
var done = 0;
while(done != 1){
    replier.reply("시작 -YES/NO로 고르시오-");
    replier.reply("1시간 이상 여유가 있는가? @");
    if(msg=="YES"){
        replier.reply("왕십리로 내려간다");
        replier.reply("얼만큼의 돈을 쓸 수 있는가?");
        replier.reply("1.0만원이상,0.7만원이상,0.5만원이상");
        if(msg=="1.0"){replier.reply("@금수저 항목 중 택 1");}
        else if(msg=="0.7"){replier.reply("@은수저 항목 중 택 1");}
        else if(msg=="0.5"){replier.reply("@동수저 항목 중 택 1");}
        else{done =1;}
    }
   else if(msg=="NO"){
        replier.reply("3천원 이상 있는가?");
        if(msg=="YES"){
            replier.reply("시간과 거리 중 어느게 덜 걸리는게 좋은가?");
            if(msg=="시간"){
              replier.reply("신소재 공학관 7층");
               done = 1;}
            else if(msg=="거리"){
                replier.reply("석식시간인가?");
                if(msg=="YES"){replier.reply("생과대 식당");
                      done =1;}
                else if(msg=="NO"){
                  replier.reply("한플 학식");
                  done = 1;}
                else{done =1;}
            }
                else{done =1;}
        }
        else if(msg=="NO"){
          replier.reply("사자가 군것질 할 때");
          done = 1;
          }
        else{done =1;}
    }
                else{done =1;}
}
}
*/
if(chkCommand(msg,"금수저")){

replier.reply("고니스, 땅코참숯불구이, 맛나곱창, 벽제갈비, 스시도쿠, 육대장");
}
if(chkCommand(msg,"은수저")){

replier.reply("가조쿠식당, 다시올치킨, 봉평산골메밀촌, 석이네, 옐로우피자, 이북집, 진국집, 플라잉 볼");
}
if(chkCommand(msg,"동수저")){

replier.reply("The Bake, Van\'s Pizza Factory, 돈암동 찌개, 띵동와플, 레드컵스, 롯데리아, 맥도날드, 백채김치찌개, 밸런스 버거, 사자가 군것질 할 때, 옛날통닭, 철남, 폼프리츠");
}


if(chkCommand(msg,"대하냥지도")){
    replier.reply("http://hanyang.wiki/_media/wiki/대하냥지도_스케치.png");
}

if(chkCommand(msg,"포탈문예")){
replier.reply("건축대에 사는 사람들은 인문대를 생각할 필요가 없다.");
replier.reply("그러나 우리 여섯학과는 인문관에 살면서 건축대의 고도를 생각했다.");
replier.reply("단 하루라도 건축대의 위치를 생각해보지 않은 적이 없다.");
replier.reply("하루하루의 등산이 힘겨웠기 때문이다.");
replier.reply("우리의 생활은 전쟁과도 같았다.");
replier.reply("우리는 그 전쟁에서 날마다 지기만 했다.");
replier.reply("-인문대생이 쏘아올린 작은 공");
}

if(chkCommand(msg,"포탈")){
replier.reply("이곳에서는 한양대학교 서울캠퍼스의 주적인 행당산을 쉽게 오르는 법을 기술한다. 이러한 방법들은 포탈이라는 이름으로 선배들의 입에서 입으로 전해져 내려왔다. ")
replier.reply("현재 존재하는 포탈 목록: @싸대 포탈, @사회대 포탈, @1공 포탈, @법대 포탈, @동문회관 포탈, @의대본관 포탈, @공학관 포탈");
}

if(chkCommand(msg,"싸대")){
replier.reply("싸대 포탈: 경금대/경영대 -> 한양사이버대학교 1층 -> 한양사이버대학교 4층 ->HIT 1층 -> 융합교육관 정책대 2층");
replier.reply("한양사이버 대학교를 이용한 루트. 경금대나 경영대에서 행당산을 타야할 일이 있을때 가장 효과적인 방법이다. 싸대까지 들어가고 난 후, 엘리베이터를 타고 4층으로 가면 HIT 1층으로 도착한다. 기록된 정책대 2층은 일종의 2호선 성동지선 같은 것이다. 다시 3캠으로 내려가게 되니 주의할 것.");
}
if(chkCommand(msg,"사회대")){
replier.reply("사회대 포탈: 88계단 -> 사회대 1층 -> 사회대 4층 -> HIT 1층/인문대/자연대");
replier.reply("사회과학대 내부에 있는 엘리베이터를 이용하여 1공학관 ~ 백남학술관 사이의 급경사를 회피하는 방법. 사회대 엘리베이터가 워낙 느리고, 사회대 깊숙한 곳에 있기 때문에 보통 귀찮아서 그냥 걸어서 올라간다. 단, 배낭이 전공서적으로 가득 차있을 경우,에는 완전 유용하다. 사회대 건물에 들어가서 더 가야 싶을 때까지 직진을 할 때쯤 엘리베이터가 보이고 그 앞에 사람들이 줄을 서있다. 줄을 서서 엘리베이터를 타고 4층에 내려서 공공정책대학원 출입구로 나가면 인문대와 자연대가 있고, 사범대와 백남 사이길로 걸어가면 HIT도 나온다.");
}
if(chkCommand(msg,"1공")){
replier.reply("1공 포탈: 사자상 쪽 계단 -> 시계탑 -> 1공학관 1층 -> 1공학관 3층 -> 사자가 군것질 할 때");
replier.reply("사람이 워낙 붐비는 1공이지만, 방학때나 2~4시, 혹은 수업시간때는 사람이 적다. 이 또한 경사를 무시하고 단숨에 백남학술관까지 보내준다. 단점은 종종 3층 출입문을 닫아 둔다는 것.");
}
if(chkCommand(msg,"법대")){
replier.reply("법대 포탈: IT/BT관 -> 법대 1층 -> 법대 4층 -> 사이버대학교 1층 -> 싸대 포탈");
replier.reply("사이버대학교 포탈과 연계하면 IT/BT관에서부터 행당산 끝까지 단숨에 오를 수 있는 포탈. IT/BT관에서 계단 하나를 올라오면, 왠지 뽀대가 나는 건물이 있는데 거기에서 바로 보이는 엘리베이터를 타고 올라가면 법대 4층 = 한양사이버대학교 1층에 도착한다.");
}
if(chkCommand(msg,"동문회관")){
replier.reply("동문회관 포탈: 동문회관 지하주차장 ->동문회관 3층 -> 제2의학관");
replier.reply("후문의 엄청난 급경사를 피할 수 있는 포탈로, 제2의학관을 이용하는 의대, 간호대생을 비롯한 아는 사람만 아는 포탈이다. 서브웨이 옆의 약국 쪽 샛길로 들어가면 동문회관의 지하 주차장 입구가 있는데, 입구에 들어가서 바로 옆에 경비실에서 경비아저씨가 쳐다보셔도 쫄지 않고 쭉 직진한다. 직진하다 보면 엘리베이터가 보이는데 언덕 위 출입구가 1층이 아닌 3층이므로 3층에서 내리면 신한은행 한양대지점과 출입구가 보인다. 이 출구로 나오면 제 2 의학관과 한양대학교 병원이 보인다.");
}
if(chkCommand(msg,"의대본관")){
replier.reply("의대본관 포탈: 의과대학 본관 4층 -> 병원 구름다리 -> 한양대병원 서관 -> 병원 본관 3층 -> 병원 응급실쪽 입구 -> 의대계단강의동/인문대/자연대");
replier.reply("의대나 간호대생의 학생증을 이용하여 갈 수 있는 포탈이다.한양대 의과대학이라 쓰여있는 의과대학 본관에 학생증을 찍고 들어가자마자 우측에 있는 엘리베이터를 탄다. 4층에서 내려 곧바로 직진하고 오른쪽에 있는 통로를 따라 걷다보면 언덕을 오를 때마다 보던병원과 연결된 일명 구름다리가 있다. 학생증을 찍고 다리를 통과하면 한양대 병원 서관에 도착하고, 여기서 우회전을 하면 또 병원 본관 3층과 연결된다. 계속 직진을 하면 병원의 응급실쪽 입구로 나오게 되고, 이 포탈과 가장 가까운 강의동은 의대 계단강의동, 인문대, 자연대 그리고 사범대 등이 있다.이 포탈은 병원옆의 가파른 언덕을 오르지 않아도 된다는 장점이 있지만 포탈을 통과하기 위해 오래 걸어야 하고, 구름다리가 통유리라 겨울엔 춥고 여름엔 상당히 덥다. 더군다나 의대 본관을 가기 위해서도 언덕을 오르긴 해야 한다는 단점이 있고, 병원을 통과하기 때문에 환자들이나 병원내 종사자분들에게 민폐가 될 수 있으므로 그다지 추천하지 않는다.");
}
if(chkCommand(msg,"공학관")){
replier.reply("공학관 포탈: 제 2공학관 2층 -> 공업센터 본관 3층 -> 신소재공학관 3  -> 과학기술관 3층 -> 건축관 3층");
replier.reply("공업센터 본관 3층 -> 공업센터 별관 5층 ->FTC 4층");
replier.reply("이 포탈의 장점은 두 가지이다. 1.비를 맞지 않고 FTC와 제 2공 사이를 이동할 수 있다. 2.공업센터 내에는 엘리베이터가 있어 에너지를 절약할 수 있다.");
}



if(chkCommand(msg,"오늘의 급식자")){
    var catdate = new Date();
    var catd;
    catd = catdate.getDate();
    var catm;
    catm = catdate.getMonth()+1;
    var catstring;
    catstring = ("["+catm+"월"+catd+"일 "+"오늘의 급식자]\n");
   
    var area88day1="김준혁";
    var area88day2="자율";
    var area88day3="김준혁";
    var area88day4="김준혁";
    var area88day5="김준혁";
    var area88day6="김준혁";
    var area88day7="김준혁";
    var area88day8="김준혁";
    var area88day9="자율";
    var area88day10="김준혁";
    var area88day11="김준혁";
    var area88day12="김정훈";
    var area88day13="김정훈";
    var area88day14="김정훈";
    var area88day15="김준혁";
    var area88day16="자율";
    var area88day17="김준혁";
    var area88day18="김준혁";
    var area88day19="김준혁";
    var area88day20="김준혁";
    var area88day21="김준혁";
    var area88day22="김준혁";
    var area88day23="자율";
    var area88day24="김준혁";
    var area88day25="김준혁";
    var area88day26="김준혁";
    var area88day27="김준혁";
    var area88day28="김준혁";
    var area88day29="김준혁";
    var area88day30="";
    var area88day31="김준혁";

    var sgdday1="김준혁";
    var sgdday2="자율";
    var sgdday3="김준혁";
    var sgdday4="김준혁";
    var sgdday5="김준혁";
    var sgdday6="김준혁";
    var sgdday7="김준혁";
    var sgdday8="김준혁";
    var sgdday9="자율";
    var sgdday10="김준혁";
    var sgdday11="김준혁";
    var sgdday12="김정훈";
    var sgdday13="김정훈";
    var sgdday14="김정훈";
    var sgdday15="김준혁";
    var sgdday16="자율";
    var sgdday17="김준혁";
    var sgdday18="김준혁";
    var sgdday19="김준혁";
    var sgdday20="김준혁";
    var sgdday21="김준혁";
    var sgdday22="김준혁";
    var sgdday23="자율";
    var sgdday24="김준혁";
    var sgdday25="김준혁";
    var sgdday26="김준혁";
    var sgdday27="김준혁";
    var sgdday28="김준혁";
    var sgdday29="김준혁";
    var sgdday30="";
    var sgdday31="김준혁";

    var sbdday1="김준혁";
    var sbdday2="자율";
    var sbdday3="김준혁";
    var sbdday4="김준혁";
    var sbdday5="김준혁";
    var sbdday6="김준혁";
    var sbdday7="김준혁";
    var sbdday8="김준혁";
    var sbdday9="자율";
    var sbdday10="김준혁";
    var sbdday11="김준혁";
    var sbdday12="김정훈";
    var sbdday13="김정훈";
    var sbdday14="김정훈";
    var sbdday15="김준혁";
    var sbdday16="자율";
    var sbdday17="김준혁";
    var sbdday18="김준혁";
    var sbdday19="김준혁";
    var sbdday20="김준혁";
    var sbdday21="김준혁";
    var sbdday22="김준혁";
    var sbdday23="자율";
    var sbdday24="김준혁";
    var sbdday25="김준혁";
    var sbdday26="김준혁";
    var sbdday27="김준혁";
    var sbdday28="김준혁";
    var sbdday29="김준혁";
    var sbdday30="";
    var sbdday31="김준혁";

    var bdday1="김준혁";
    var bdday2="자율";
    var bdday3="김준혁";
    var bdday4="김준혁";
    var bdday5="김준혁";
    var bdday6="김준혁";
    var bdday7="김준혁";
    var bdday8="김준혁";
    var bdday9="자율";
    var bdday10="김준혁";
    var bdday11="김준혁";
    var bdday12="김정훈";
    var bdday13="김정훈";
    var bdday14="김정훈";
    var bdday15="김준혁";
    var bdday16="자율";
    var bdday17="김준혁";
    var bdday18="김준혁";
    var bdday19="김준혁";
    var bdday20="김준혁";
    var bdday21="김준혁";
    var bdday22="김준혁";
    var bdday23="자율";
    var bdday24="김준혁";
    var bdday25="김준혁";
    var bdday26="김준혁";
    var bdday27="김준혁";
    var bdday28="김준혁";
    var bdday29="김준혁";
    var bdday30="";
    var bdday31="김준혁";

    var ssgday1="";
    var ssgday2="자율";
    var ssgday3="김민석";
    var ssgday4="김민석";
    var ssgday5="김민석";
    var ssgday6="김민석";
    var ssgday7="김민석";
    var ssgday8="정명선";
    var ssgday9="자율";
    var ssgday10="정명선";
    var ssgday11="정명선";
    var ssgday12="정명선";
    var ssgday13="김민석";
    var ssgday14="김민석";
    var ssgday15="정명선";
    var ssgday16="자율";
    var ssgday17="김민석";
    var ssgday18="김민석";
    var ssgday19="김민석";
    var ssgday20="김민석";
    var ssgday21="정명선";
    var ssgday22="정명선";
    var ssgday23="자율";
    var ssgday24="정명선";
    var ssgday25="정명선";
    var ssgday26="정명선";
    var ssgday27="정명선";
    var ssgday28="정명선";
    var ssgday29="";
    var ssgday30="";
    var ssgday31="김민석";

    if(catd==1){
    replier.reply(catstring+"88: "+area88day1+" \n생과대: "+sgdday1+"\n사범대: "+sbdday1+"\n법대: "+bdday1+"\n신소재:"+ssgday1+"");
    }
    if(catd==2){
    replier.reply(catstring+"88:  "+area88day2+"\n생과대: "+sgdday2+"\n사범대: "+sbdday2+"\n법대:  "+bdday2+"\n신소재:"+ssgday2+ "");
    }
    if(catd==3){
    replier.reply(catstring+"88:  "+area88day3+"\n생과대: "+sgdday3+"\n사범대: "+sbdday3+"\n법대:  "+bdday3+"\n신소재: "+ssgday3+"");
    }
    if(catd==4){
    replier.reply(catstring+"88:  "+area88day4+"\n생과대: "+sgdday4+"\n사범대: "+sbdday4+"\n법대:  "+bdday4+"\n신소재: "+ssgday4+"");
    }
    if(catd==5){
    replier.reply(catstring+"88:  "+area88day5+"\n생과대: "+sgdday5+"\n사범대: "+sbdday5+"\n법대:  "+bdday5+"\n신소재: "+ssgday5+"");
    }
    if(catd==6){
    replier.reply(catstring+"88: "+area88day6+" \n생과대: "+sgdday6+"\n사범대: "+sbdda6y+"\n법대:  "+bdday6+"\n신소재:"+ssgday6+" ");
    }
    if(catd==7){
    replier.reply(catstring+"88:  "+area88day7+"\n생과대: "+sgdday7+"\n사범대: "+sbdday7+"\n법대:  "+bdday7+"\n신소재:"+ssgday7+" ");
    }
    if(catd==8){
    replier.reply(catstring+"88:  "+area88day8+"\n생과대: "+sgdday8+"\n사범대:"+sbdday8+" \n법대:  "+bdday8+"\n신소재: "+ssgday8+"");
    }
    if(catd==9){
    replier.reply(catstring+"88:  "+area88day9+"\n생과대: "+sgdday9+"\n사범대: "+sbdday9+"\n법대: "+bdday9+" \n신소재:"+ssgday9+" ");
    }
    if(catd==10){
    replier.reply(catstring+"88:  "+area88day10+"\n생과대: "+sgdday10+"\n사범대: "+sbdday10+"\n법대: "+bdday10+"\n신소재: "+ssgday10+"");
    }
    if(catd==11){
    replier.reply(catstring+"88:  "+area88day11+"\n생과대: "+sgdday11+"\n사범대: "+sbdday11+"\n법대: "+bdday11+" \n신소재: "+ssgday11+"");
    }
    if(catd==12){
    replier.reply(catstring+"88:  "+area88day12+"\n생과대: "+sgdday12+"\n사범대: "+sbdday12+"\n법대:  "+bdday12+"\n신소재: "+ssgday12+"");
    }
    if(catd==13){
    replier.reply(catstring+"88:  "+area88day13+"\n생과대: "+sgdday13+"\n사범대:"+sbdday13+"\n법대:  "+bdday13+"\n신소재: "+ssgday13+"");
    }
    if(catd==14){
    replier.reply(catstring+"88:  "+area88day14+"\n생과대: "+sgdday14+"\n사범대: "+sbdday14+"\n법대:  "+bdday14+"\n신소재: "+ssgday14+" ");
    }
    if(catd==15){
    replier.reply(catstring+"88:  "+area88day15+"\n생과대: "+sgdday15+"\n사범대: "+sbdday15+"\n법대:  "+bdday15+"\n신소재: "+ssgday15+"");
    }
    if(catd==16){
    replier.reply(catstring+"88:  "+area88day16+"\n생과대: "+sgdday16+"\n사범대: "+sbdday16+"\n법대:  "+bdday16+"\n신소재: "+ssgday16+"");
    }
    if(catd==17){
    replier.reply(catstring+"88:  "+area88day17+"\n생과대: "+sgdday17+"\n사범대: "+sbdday17+"\n법대:  "+bdday17+"\n신소재: "+ssgday17+"");
    }
    if(catd==18){
    replier.reply(catstring+"88:  "+area88day18+"\n생과대: "+sgdday18+"\n사범대: "+sbdday18+"\n법대:  "+bdday18+"\n신소재: "+ssgday18+"");
    }
    if(catd==19){
    replier.reply(catstring+"88:  "+area88day19+"\n생과대: "+sgdday19+"\n사범대: "+sbdday19+"\n법대:  "+bdday19+"\n신소재: "+ssgday19+"");
    }
    if(catd==20){
    replier.reply(catstring+"88:  "+area88day20+"\n생과대: "+sgdday20+"\n사범대: "+sbdday20+"\n법대:  "+bdday20+"\n신소재: "+ssgday20+"");
    }
    if(catd==21){
    replier.reply(catstring+"88:"+area88day21+" \n생과대: "+sgdday21+"\n사범대: "+sbdday21+"\n법대:  "+bdday21+"\n신소재: "+ssgday21+"");
    }
    if(catd==22){
    replier.reply(catstring+"88: "+area88day22+"\n생과대: "+sgdday22+"\n사범대: "+sbdday22+"\n법대:  "+bdday22+"\n신소재: "+ssgday22+"");
    }
    if(catd==23){
    replier.reply(catstring+"88: "+area88day23+"\n생과대: "+sgdday23+"\n사범대: "+sbdday23+"\n법대:  "+bdday23+"\n신소재: "+ssgday23+"");
    }
    if(catd==24){
    replier.reply(catstring+"88: "+area88day24+"\n생과대: "+sgdday24+"\n사범대: "+sbdday24+"\n법대:  "+bdday24+"\n신소재: "+ssgday24+"");
    }
    if(catd==25){
    replier.reply(catstring+"88: "+area88day25+"\n생과대: "+sgdday25+"\n사범대: "+sbdday25+"\n법대:  "+bdday25+"\n신소재: "+ssgday25+"");
    }
    if(catd==26){
    replier.reply(catstring+"88: "+area88day26+"\n생과대: "+sgdday26+"\n사범대: "+sbdday26+"\n법대:  "+bdday26+"\n신소재: "+ssgday26+"");
    }
    if(catd==27){
    replier.reply(catstring+"88:"+area88day27+" \n생과대: "+sgdday27+"\n사범대: "+sbdday27+"\n법대:  "+bdday27+"\n신소재: "+ssgday27+"");
    }
    if(catd==28){
    replier.reply(catstring+"88: "+area88day28+"\n생과대: "+sgdday28+"\n사범대: "+sbdday28+"\n법대:  "+bdday28+"\n신소재: "+ssgday28+"");
    }
    if(catd==29){
    replier.reply(catstring+"88: "+area88day29+"\n생과대: "+sgdday29+" \n사범대: "+sbdday29+"\n법대:  "+bdday29+"\n신소재: "+ssgday29+"");
    }
    if(catd==30){
    replier.reply(catstring+"88: "+area88day30+"\n생과대: "+sgdday30+"\n사범대: "+sbdday30+"\n법대:  "+bdday30+"\n신소재: "+ssgday30+"");
    }
    if(catd==31){
    replier.reply(catstring+"88: "+area88day31+"\n생과대: "+sgdday31+"\n사범대: "+sbdday31+"\n법대:  "+bdday31+"\n신소재: "+ssgday31+"");
    }

}  


}


    





function onStartCompile(){
    /*컴파일 또는 Api.reload호출시, 컴파일 되기 이전에 호출되는 함수.
     *제안하는 용도: 리로드시 자동 백업*/
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용.
function onCreate(savedInstanceState,activity) {
    var layout=new android.widget.LinearLayout(activity);
    layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    var txt=new android.widget.TextView(activity);
    txt.setText("액티비티 사용 예시입니다.");
    layout.addView(txt);
    activity.setContentView(layout);
}
function onResume(activity) {}
function onPause(activity) {}
function onStop(activity) {}
