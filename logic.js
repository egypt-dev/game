import { Question } from "./questions.js";
let questions = [
    new Question("اي اكتر انواع الصواريخ الناجحه الي بتستعملها ايران ضد اسرائيل" , ["صاروخ فرط صوتي", "صاروخ باليستي ", "صاروخ انشطاري"], 2,10),
    new Question("اي اكتر اكله عليها جدل؟" , ["كفته", "فراخ بالسمك", "بيتزا بقدونس بالفسيخ" ,"كبده اسكندراني"], 0, 5),
    new Question("اي انسب طريقه ممكن نحلل بيها جثه وتختفي" , ["نقطعه مكعاب ونحطه في اكياس بلاستيك", "نحطه في حمض الكبريت لمده 45 يوم ونشغل معطر جو", "نقطعه قطع صغيره جدا ونعمله لحمه مفروم للقطط"], 1, 5),
    new Question("اي اكتر حيوان محبوب؟" , ["قطط", "كلاب ضاله", "الطيور الجارحه", "السلاحف", "سمكه الشبوط" , "السيسي"], 4, 7),
    new Question("لو صحيت او صحيتي لقيتي نفسك قطه اي اول فعل هيتعمل ؟" , ["اكسر كل حاجة الاقيها فوشي علشان القطط بتحب تكسر الحاجات", "هاكل تونه بالجبنه", "هشغل المالك بتاعي عبد عندي", "هجري ورا الناس في الشارع الي بتخاف من القطط", "هاكل سمكه الشبوط الي في السؤال الي فات" , "هروح وزاره الكهربا واقطع اسلاك الكهربا الرئيسيه علشان مصر تعيش في ظلمه"], 1, 15),
    new Question("اي اكتر شخصيه موثره في الوطن العربي" , ["عادل شكل", "توفيق حموضه", "حمو بيكا", "نخنوخ" ], 1, 10),
    new Question("النوم متاخر بيسبب؟" , ["صداع", "عدم قدره ونشاط", "ضعف تركيز", "هالات سوده" , "انفصال في الشخصيه ", "تعدد الطيف التوحدي"], 3, 10),
    new Question("انسب طريقه نعاقب بيها طفل غلطان في المدرسة" , ["نحرمه من البريك", "نخلي صحبته تسيبه", "نشتكي لولي امره", "يتجلد بالحزام" ,"ندهنه عسل اسود ونسيبه في الحوش" ], 4, 5),
    new Question("اي اكتر شخصيه مثيره للجدل في الوطن العربي في الوقت الحالي" , ["ترامب", "السيسي", "شاه ايران", "محمد الجمل" ], 3, 10),
    new Question("لو في شارع ظالمه ومحتاجين نخش الشارع دا واحنا بليل في وقت متأخر اي انسب طريقه نخش ونطلع بسلام مع العلم ان الشارع دا وكر مخدرات" , ["نكلم الشرطه", "نتصل ب اوبر واخليه يدخلني الشارع", "استني قدام الشارع لحد النهار ما يطلع", "اخش عادي واشتري منهم مخدرات", "نكلم توفيق عكاشه ونخش معاه علي الهوا مباشر علشان نشرحله الموقف وتبقي قضيه رأي عام" ], 3, 20),
    new Question("اي اكتر شخصيه مؤثره في الوطن العربي", ["روان صلاح", "روان صلاح", "روان صلاح"], 0, 0),
    new Question("لو تعرف محمد الجمل كويس اي الموقف الي ممكن ياخده لو في صاروخ بالاليستي ارض جو عدي من جنبه", ["هيكلم شرطه مكافحه المخدرات", "هيصنع صاروخ باليستي مضاد", "هيحسب مسار سقوط الصاروخ والفتره الزمنيه وهيكلم القوات الجيو فضائيه ويعلن الحرب علي فنزويلا"], 2, 15),
    new Question("لو مع محمد الجمل مليون دولار تفتكر هيعمل بيهم اي", ["هيشتري مطعم برجر", "هيحولهم دهب", "هيكون ماليشيات مسلحه ويسيطر علي حته ارض"], 2, 5),
    new Question("اختار حاجة واحده من دول انت / انتي ممكن تكون غلط ولو جاوبت صح هتخسر اللعبه", ["الاحتباس الحراري خلي الكائنات الفضايه حرانه", "الكائنات الفضائيه اتطبق عليهم زياده 50 في الميه في الاسعار علشان الحرب الي شغاله"], 1, -100),
]

let wrongAnswerMsg = [
    "حظ اوفر المره القادمه.",
    "ممكن اه بس ممكن نركز شويه في اختيار الاجابه",
    "طبقا للظروف الاقتصاديه والاقليميه الاجابه دي مش نافعه مع التوتر الاقليمي الحالي",
    "طبقا لنظريات تقسيم الزوايا ل 180 درجه داخل المثلث, الاجابه دي محتاجه تضبيط زوايا",
    "اجابة عبثيه.",
    "نحاول تاني ولكل مجتهد نصيب حظ اوفر المره القادمه.",
    "مضيق هرموز مقفول دلوقتي الاجابه دي مش هنعرف نعديها.",
    ".للتواصل والاستفسار عن الاجابه الاكثر دقه من خلال (+201281148880)",
    "برجاء الرجوع لشرطه المرور ودفع المخالفات الازمه لعدم الالتزام بالقواعد والخطأ في الاجابه."
]

let correctAnswerMsg = [
    "صح.",
    ".الاجابه دي 100 ال 100",
    "طبقا لقانون سرعه المقذوفات في الفضاء وقوانين الجاذبيه الاجابة دي جت في منتصف الهدف.",
    "رورو البلد.",
    "طبقا للالتزام بشروط السلامه المهنية الاجابه دي نجحت في الاختبار الفني."
]

let currentQuestion = 0, questionTitleEle = document.getElementById("question-title");
let reachedScore = 0;
let targetScore = 70;
const answerQuestionBtn = (event)=>{
    console.log(event)
    let selectedAnswer;
    let currentQuestionIndex;
    if(event.target.tagName == "SPAN"){
        selectedAnswer = event.target.innerText.trim();
        currentQuestionIndex = event.target.parentElement.value;
    }
    else{
        selectedAnswer = event.target.lastElementChild.innerText.trim();
        currentQuestionIndex = event.target.value

    }
    console.log(selectedAnswer);
    let isCorrectAnswer = questions[currentQuestionIndex].isAnswerCorrect(selectedAnswer);
    let msg = "";
    if(isCorrectAnswer){
        msg = getRandomMsg(0, correctAnswerMsg.length - 1, correctAnswerMsg);
        reachedScore += questions[currentQuestionIndex].getScore();
        document.getElementById("points").innerText = reachedScore;
    }
    else{
        msg = getRandomMsg(0, wrongAnswerMsg.length - 1, wrongAnswerMsg);
    }
    document.getElementById("answer-state-msg").innerText = msg;
    if(currentQuestion != questions.length - 1){
        clearCurrentQuestion();
        currentQuestion++;
        questionTitleEle.innerText = questions[currentQuestion].getQuestion();
        createQuestionElements(questionTitleEle.parentElement , questions[currentQuestion], currentQuestion);
    }
    else if(currentQuestion == questions.length - 1 && reachedScore >= targetScore){
        let winLink = document.getElementById('winning-link');
        winLink.style.visibility = 'visible';
        let choicesBtn = document.querySelectorAll(".question-choices");
        for(let i = 0 ; i < choicesBtn.length ; i++)
            choicesBtn[i].disabled = true;
    }
    else if(currentQuestion == questions.length - 1 && reachedScore < targetScore){
        let losingLink = document.getElementById('losing-link');
        losingLink.style.visibility = 'visible';
        document.getElementById('winning-link').remove();
        let choicesBtn = document.querySelectorAll(".question-choices");
        for(let i = 0 ; i < choicesBtn.length ; i++)
            choicesBtn[i].disabled = true;
    }
    
        
}  

function getRandomMsg(min, max, targetArr ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(max)
  let randomIndex =  Math.floor(Math.random() * (max - min + 1)) + min;
  return targetArr[randomIndex];
}
const createChoiceAnswerElement = (parent, text, index)=>{
    let selectedAnswerBtnStyle = "question-choices m-4 group flex items-center gap-4 w-full p-5 rounded-lg border-2 border-primary-fixed bg-surface hover:bg-primary-fixed/20 transition-all duration-300 text-right hover:scale-[1.02] active:scale-95";
    let spanElementIconStyle = "material-symbols-outlined text-primary group-hover:-rotate-12 transition-transform";
    let spanElementAnswerStyle = "text-on-surface font-medium text-lg";
    let selectedAnswerBtn = document.createElement("button")
    selectedAnswerBtn.className = selectedAnswerBtnStyle;
    let spanElementIconSpan = document.createElement("span");
    spanElementIconSpan.className = spanElementIconStyle ;
    spanElementIconSpan.setAttribute("data-icon", "local_florist");
    spanElementIconSpan.innerText = "local_florist";
    let spaneElementAnswerSpan = document.createElement('span');
    spaneElementAnswerSpan.className = spanElementAnswerStyle;
    spaneElementAnswerSpan.innerText = text;
    selectedAnswerBtn.appendChild(spanElementIconSpan); 
    selectedAnswerBtn.appendChild(spaneElementAnswerSpan);
    parent.appendChild(selectedAnswerBtn);
    selectedAnswerBtn.value = index;
    // selectedAnswerBtn.addEventListener("click", answerQuestionBtn);
    spaneElementAnswerSpan.addEventListener("click", answerQuestionBtn);
}

const clearCurrentQuestion = ()=>{
    let questionChoices = document.querySelectorAll(".question-choices")
    console.log(questionChoices);
    for(let i = 0 ; i < questionChoices.length ; i++)
        questionChoices[i].remove();
}

const createQuestionElements = (parent, question)=>{
    let choicesAnswer = question.getChoices();
    for(let i = 0 ; i < choicesAnswer.length ; i++){
        createChoiceAnswerElement(parent, choicesAnswer[i], currentQuestion);
    }
}

if(questions.length != 0){
    questionTitleEle.innerText = questions[currentQuestion].getQuestion();
    createQuestionElements(questionTitleEle.parentElement , questions[currentQuestion], currentQuestion);
}
