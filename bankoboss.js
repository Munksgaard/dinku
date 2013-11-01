var t1=[1,["Benet","Den første","Den ensomme",'Det bliver han aldrig!']];var t2=[2,["Den er go'!"]];var t3=[3,["En god bag!",'En sidelæns røv','Kattemunden']];var t4=[4,["Et sejlskib!",'Jollen','Klokken fire går jeg med piger']];var t5=[5,["Klokken fem, går jeg &lt;hjem|hjem med mænd!&gt;"]];var t6=[6,["Den frække!","Uuuhhaaa ;)","Det får vi ik' meget af."]];var t7=[7,["Syver flyver"]];
var t8=[8,[""]];var t9=[9,["Det er noget vi kan li'"]];var t10=[10,["Giraffen slog en skii'"]];var t11=[11,[""]];var t12=[12,["Min røv er kold"]];var t13=[13,["Det uheldige tal"]];var t14=[14,["Snavs på skjorten"]];
var t15=[15,[""]];var t16=[16,["Kys din kæreste på rejsen"]];var t17=[17,["Så holder vi bøtten"]];var t18=[18,["Så for katten!"]];var t19=[19,["En skidt én!","Jeg får for lidt'n"]];var t20=[20,[""]];
var t21=[21,["men jeg vil hellere spille Banko!"]];var t22=[22,["*anden anden* (siges som en bil)", "Svanerne"]];var t23=[23,["Lille juleaften"]];var t24=[24,["Juleaften"]];var t25=[25,["Juleaften i England"]];var t26=[26,[""]];
var t27=[27,[""]];var t28=[28,[""]];var t29=[29,[""]];var t30=[30,[""]];var t31=[31,[""]];var t32=[32,[""]];
var t33=[33,[""]];var t34=[34,[""]];var t35=[35,[""]];var t36=[36,[""]];var t37=[37,[""]];var t38=[38,[""]];
var t39=[39,[""]];var t40=[40,["Smørfyrre"]];var t41=[41,[""]];var t42=[42,["Det ka' la' sig gøre", "I morgen er verden vor", "The answer to life, the universe, and everything"]];var t43=[43,[""]];var t44=[44,[""]];
var t45=[45,[""]];var t46=[46,[""]];var t47=[47,[""]];var t48=[48,[""]];var t49=[49,[""]];var t50=[50,[""]];
var t51=[51,[""]];var t52=[52,[""]];var t53=[53,[""]];var t54=[54,[""]];var t55=[55,[""]];var t56=[56,[""]];
var t57=[57,[""]];var t58=[58,[""]];var t59=[59,[""]];var t60=[60,[""]];var t61=[61,[""]];var t62=[62,[""]];
var t63=[63,[""]];var t64=[64,[""]];var t65=[65,["Klip i kortet"]];var t66=[66,["Lange tasker"]];var t67=[67,[""]];var t68=[68,["Hippie-tallet"]];
var t69=[69,["Den perverse"]];var t70=[70,[""]];var t71=[71,[""]];var t72=[72,[""]];var t73=[73,[""]];var t74=[74,[""]];
var t75=[75,[""]];var t76=[76,[""]];var t77=[77,["Stiverterne"]];var t78=[78,[""]];var t79=[79,[""]];var t80=[80,["Nul fitte", "Nul fisse"]];
var t81=[81,[""]];var t82=[82,[""]];var t83=[83,[""]];var t84=[84,[""]];var t85=[85,[""]];var t86=[86,[""]];
var t87=[87,[""]];var t88=[88,["To tykke damer"]];var t89=[89,[""]];var t90=[90,["Gamle Ole"]];

var rystelinjer = ['Så ryster vi kuglerne.', 'Ryst løgposen.', 'Så ryster vi lidt i dåsen.', 'Vi giver den lige et ryst']

var listen = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60, t61, t62, t63, t64, t65, t66, t67, t68, t69, t70, t71, t72, t73, t74, t75, t76, t77, t78, t79, t80, t81, t82, t83, t84, t85, t86, t87, t88, t89, t90];
var orglist = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60, t61, t62, t63, t64, t65, t66, t67, t68, t69, t70, t71, t72, t73, t74, t75, t76, t77, t78, t79, t80, t81, t82, t83, t84, t85, t86, t87, t88, t89, t90];


function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function rystPosen(){
    
    listen = shuffle(listen)
    var numbersInPair = rystelinjer.length
    funny = rystelinjer[Math.floor(Math.random() * numbersInPair)]
    var lol = "<a id='#currentFunny'>"
    lol += funny
    lol += "<br /></a>"
    $("#currentFunny").empty();
    $("#currentFunny").append(funny);
}

function createButton(context, func,text){
    var button = document.createElement("input");
    button.type = "button";
    button.value = text;
    button.onclick = func;
    $("#buttons").append(button);
    
}

window.onload = function () {
    createButton(document.body, traekNummer, "Træk et nummer!");
    createButton(document.body, rystPosen, "Ryst posen!");
    createButton(document.body, resetGame, "Nulstil spil");
    resetGame();
    playlist();
}



function traekNummer(){
    var value = listen.pop();
    var number = value[0]
    var numbersInPair = value[1].length
    var funny = value[1][Math.floor(Math.random() * numbersInPair)]
    if (funny === ""){
        funny = "&lt; lige hvad du har lyst til &gt;"
    }
    var lol = "<a id='#currentNum'>"
    
    
    
    lol += number
    lol += "   "
    lol += funny
    lol += "<br /></a>"
    
    addToCurrentField(number,funny);
    displayNumberInRow(number);
}
function addToCurrentField(number,funny){
    
    //this section writes the number to the number part.
    var lol = "<a>"
    lol += number
    lol += "<br /></a>"
    $("#currentNum").empty();
    $("#currentNum").append(number);

    var lol = "<a id='#currentFunny'>"
    lol += funny
    lol += "<br /></a>"
    $("#currentFunny").empty();
    $("#currentFunny").append(funny);




}

function createNumberTag(number) {
    var num = number+''
    var tag = '<a id="t'
    tag += number
    tag += '" style="color: black; width:40px; padding-left: 10px; padding-right: 10px;">'
    tag += number
    tag += "</a>"
    
    return tag
}

function resetGame(){
    //console.log("kkk");

    listen = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60, t61, t62, t63, t64, t65, t66, t67, t68, t69, t70, t71, t72, t73, t74, t75, t76, t77, t78, t79, t80, t81, t82, t83, t84, t85, t86, t87, t88, t89, t90];
    rystPosen();
    for (var i = 1; i < 91; i++)
    {
        console.log(i);
            var temp = "#t"
                temp += i
                temp += ""
                console.log(temp);
                $(temp).css("background-color","white");
                $(temp).css("margin","auto");
        
    }
}
function displayNumberInRow(number){
    
    var temp = "#t"
    temp += number
    temp += ""
    console.log(temp);
    $(temp).css("background-color","yellow");
    $(temp).css("margin","auto");
}

function tableCreate(){
var body=document.getElementsByTagName('div')[1];
var tbl=document.createElement('table');
tbl.style.width='50%';
tbl.setAttribute('text-align', 'center');
tbl.setAttribute('border','1');
var tbdy=document.createElement('tbody');
    tbdy.setAttribute('color','white');
var number = 1
for(var i=0;i<9;i++){
    var tr=document.createElement('tr');
    tr.setAttribute('color','white');
    for(var j=0;j<10;j++){
        if(i==8 && j==9){
            var td=document.createElement('td');
            td.setAttribute('background', 'white');
            td.innerHTML = createNumberTag(number);
            tr.appendChild(td);
                break
                 } else {
        var td=document.createElement('td');
        td.innerHTML = createNumberTag(number);
        number++;
        tr.appendChild(td);
        }
    }
    tbdy.appendChild(tr);
}

tbl.appendChild(tbdy);
body.appendChild(tbl)
}
