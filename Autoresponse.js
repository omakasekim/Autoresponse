const scriptName="????????.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

function chkCommand(msg, cmnd) {
    if(msg.indexOf(cmnd) != -1 && (msg[0] == '@' || msg[0] == '/')) return true;
    else return false;
}

if(chkCommand(msg, "����") || chkCommand(msg, "����")|| chkCommand(msg, "�߽�")|| chkCommand(msg, "��ħ")) {
    var food;
    food = ["���","�쵿","���","������","���°�","����","���","�Ľ�Ÿ","ġŲ","¥��","«��","������","������ġ","������","������","�ұ���","�粿ġ","�߹�","�ʹ�","����","���","Ǫ���޻�","����","����̳� ������","������","����","�Ƶ�����","������ġ","����","��â�Ͽ콺","���","�̵���","������ŸŸ","��Ʈ�Ӹ�","������","�ݰ����","��¡��ٴ�","���ż�","����â��","�Ϳ�","������","�������"];
    var tempreply = msg.replace("@","");
    var randomfood;
    randomfood = food[Math.floor(Math.random() * food.length)];
    replier.reply("���� " + tempreply + "�� " + randomfood + "���?" );
}

if(chkCommand(msg, "�ֻ���"){
    var dice = Math.floor(Math.random()*6)+1;
    replier.reply(dice);
}
if(chkCommand(msg, "��¥"){
    var date = new Date();
    var today = date.getFullyear() + "��" + (date.getMonth()+1) + "��" + date.getDate() + "��";
    replier.reply(today);
}

if(chkCommand(msg, "�ǰ�"){
    var _issuedata=org.jsoup.Jsoup.connect("https://m.naver.com/search.naver?query=??????%20??????").get().select("span.tit")+"";
    _issuedata = _issuedata.replace(/<[^>]+/g,"");
    _issuedata = _issuedata.split("\n");
    var result = "";
    for(var n = 0;n<20;n++){
        result+=(n+1)+"??: " + +issuedata[n]+"\n";
    }
    replier.reply("[���̹� �ǽð� �˻��� ����]\n\n" + result.trim());
}

if(chkCommand(msg, "����"){
    var weatherdata = Utils.getWebText("https://m.search.naver.com/search.naver?query=????");
    var weatherdata2 = weatherdata.split("��������</strong>");
    var weatherdata3 = weatherdata2[1].split("Ư��");
    var weatherdata4 = weatherdata3[0].replace(/(<([^>]+)>)/g, "");
    weatherdata4 = weatherdata4.trim();
    weatherdata4 = weatherdata4.replace(/  /g, "");
    weatherdata4 = weatherdata4.replace(/����/g, "��");
    weatherdata4 = weatherdata4.replace(/ /g, ", ");
    replier.reply("[???? ????]\n" + weatherdata4);
}
if(msg=="�Ѱ� �� �µ�"){
    var hangangdata = org.jsoup.Jsoup.connect("https://www.wpws.kr/hangang/").get();
    hangangdata = hangangdata.select("p")+"";
    hangangdata = hangangdata.split("\n")[2];
    hangangdata = hangangdata.replace(/<[^>]+>/g,"");
    replier.reply("���� �Ѱ� ������ "  + hangangdata + " �Դϴ�.");
}

}


function onStartCompile(){
    /*������ ���� Api.reloadȣ�� ��, ������ �Ǳ� ������ ȣ��Ǵ� �Լ�.
     *�����ϴ� �뵵: ���ε�� �ڵ����*/
    
}

//�Ʒ� 4���� �޼ҵ�� ��Ƽ��Ƽ ȭ���� ������ �� ���..
function onCreate(savedInstanceState,activity) {
    var layout=new android.widget.LinearLayout(activity);
    layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    var txt=new android.widget.TextView(activity);
    txt.setText("��Ƽ��Ƽ ��� �����Դϴ�..");
    layout.addView(txt);
    activity.setContentView(layout);
}
function onResume(activity) {}
function onPause(activity) {}
function onStop(activity) {}