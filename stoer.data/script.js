document.addEventListener('DOMContentLoaded', () => {
    function generateUniqueId() {
        // Generate a random UUID
        return Math.random().toString(36).substr(2, 9);
    }
    function generatoColor(){
        return '#'+Math.floor(Math.random()*16777215).toString(16);
      }
    const container = document.getElementById('ContainerForChatApp');
            container.textContent = '';
            const containerStyle = document.createElement("style");
            addHtml(container, containerStyle); 
            const CuruntClick = [];
    let x = 0;
    const Convers_StepShow = false;
    // Function to add an HTML element
    function addHtml(parent, element) {
        parent.appendChild(element);
        return element;
    }
    function RHtml(parent, element) {
        try {
            parent.removeChild(element);
        return element;
        } catch (error) {
            console.info('removed')
        }
            }
    // Section 1 - User section
    const section1 = document.createElement('div');
    section1.id = 'Sections_1';
    addHtml(container, section1);
    const userDiv = document.createElement('div');
    userDiv.classList.add('User');
    addHtml(section1, userDiv);

    const searchInput = document.createElement('input');
    searchInput.id = 'SearchForAccounts';
    searchInput.placeholder = 'Search...';
    searchInput.type = 'search';
    addHtml(userDiv, searchInput);

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    addHtml(userDiv, searchButton);
    const accountS = document.createElement("div")
    accountS.classList.add("ACCAll")
    // const accountDiv = document.createElement('div');
    // accountDiv.classList.add('oneAccount');
    addHtml(section1,accountS)
    // addHtml(accountS, accountDiv); 

    // const accountSpan = document.createElement('span');
    // accountSpan.textContent = 'A';
    // addHtml(accountDiv, accountSpan);

    // const accountText = document.createElement('div');
    // accountText.classList.add('text');
    // accountText.textContent = 'Account Name';
    // addHtml(accountDiv, accountText);

    // Section 2 - Chat section
    const section2 = document.createElement('div');
    section2.id = 'Section_Commitment';
    const messageDisplay = document.createElement('div');

    addHtml(container, section2);
    const t = document.createElement("h2");
    t.textContent = "Select Account To Communicate With Him"
    addHtml(section2,t)
    // Section 3 - Settings section
    const section3 = document.createElement('div');
    section3.id = 'Section_Setting';
    addHtml(container, section3);

    const settingsButtonDiv = document.createElement('div');
    settingsButtonDiv.classList.add('Section_s_button');
    addHtml(section3, settingsButtonDiv);

    const addUserButton = document.createElement('button');
    addUserButton.classList.add('AddUser');
    addUserButton.textContent = 'Add User';
    addHtml(settingsButtonDiv, addUserButton);

    const settingButton = document.createElement('button');
    settingButton.classList.add('Setting');
    settingButton.textContent = 'Settings';
            addHtml(settingsButtonDiv, settingButton);
            const SecondSecting = document.createElement("div");
            SecondSecting.id = "SEcondSection3";
            addHtml(section3,SecondSecting)
            addUserButton.addEventListener("click", function () {
                const variable1 = document.getElementById("SEcondSection3");
                variable1.innerHTML = '';
        const changeDiv = document.createElement('div');
        changeDiv.id = 'Change';
        addHtml(SecondSecting, changeDiv);
    
        const changeInput = document.createElement('input');
        // changeInput.id = 'i'
        changeInput.type = 'text';
        changeInput.placeholder = 'Wright Name that you want';
        addHtml(changeDiv, changeInput);
    
        const changeFileInput = document.createElement('input');
                changeFileInput.type = 'file';
                changeFileInput.id= 'SelctIimage'
        addHtml(changeDiv, changeFileInput);
                const Show = document.createElement("div");
                Show.classList.add("ShowAllDone");
                Show.setAttribute("id", "enw");
    // 🔥sumaw🌀, [6/22/2024 11:12 PM]
    const changeButton = document.createElement('button');
        changeButton.textContent = 'Submit';
                addHtml(changeDiv, changeButton);
                addHtml(changeDiv,Show)
                
                changeButton.addEventListener("click", function () {
                    const getClor = generatoColor();
                const AllC = document.createElement("div");
                let a = changeInput.value.trim();
                const all = document.createElement("div");
                if (!a) return;
                if (a.length > 10) return;
                if (a in UserAccounts) return;
                // if (Show.innerHTML.trim() !== '') {
                //     Show.innerHTML = '';
                // }
                if (Show.innerHTML !== '') {
                    x++;
                    let a = document.createElement("p");
                    a.textContent = "First Finish What You Start Submit or Clacele Sr.";
                    a.style.color = 'red'
                    if (x == 1) {
                        addHtml(changeDiv, a)
                        setTimeout(() => {
                            RHtml(changeDiv, a);
                            x = 0;
                        }, 1000);
                    }
                    return;
                }
                AllC.classList.add("ContainerForChck");
                const cont = document.createElement("div");
                cont.classList.add("ChckDiv")
                const cont_Span = document.createElement("span");
                const Cont_Text = document.createElement("div");
                Cont_Text.classList.add("TextChck");
                const contButtonDiv = document.createElement("div");
                contButtonDiv.classList.add("SencondChckButonDiv");
                const Cont_SubmitB = document.createElement("button");
                Cont_SubmitB.textContent = "Submit";
                const Cont_ClacelB = document.createElement("button")
                Cont_ClacelB.textContent = "Clance";
                    Cont_Text.textContent = a;
                    const SelctImage1 = document.getElementById('SelctIimage').files[ 0 ];

                    if (SelctImage1) {
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            cont_Span.innerHTML = `<img src="${e.target.result}" alt="Selected Image" style="max-width: 100%; max-height: 100%;">`;
                        }
                        reader.readAsDataURL(SelctImage1);
                    }
                    else {   
                cont_Span.textContent = a.slice(0, 1);
                    }
                addHtml(Show, AllC);
                addHtml(AllC, cont);
                addHtml(cont, cont_Span);
                addHtml(cont, Cont_Text);
                addHtml(AllC, contButtonDiv);
                addHtml(contButtonDiv, Cont_ClacelB);
                addHtml(contButtonDiv, Cont_SubmitB);
                Cont_ClacelB.addEventListener("click", function () {
                    RHtml(Show, AllC);
                })
                    Cont_SubmitB.addEventListener("click", function () {
                        const SelctImage = document.getElementById('SelctIimage').files[ 0 ];
                    const uniqId = generateUniqueId();
                    all.classList.add("oneAccount");
                    all.id = a;
                    all.setAttribute('nest',uniqId)
                        const creat1 = document.createElement("span");
                        
                        if (SelctImage) {
                            const reader = new FileReader();
                            reader.onload = function(e) {
                                creat1.innerHTML = `<img src="${e.target.result}" alt="Selected Image" style="max-width: 100%; max-height: 100%;">`;
                            }
                            reader.readAsDataURL(SelctImage);
                    }
                    else {
                        creat1.textContent = a.slice(0, 1);
                        creat1.style.backgroundColor = getClor;
                        all.setAttribute('sown',getClor)
                    }
                    if (a in UserAccounts) return;
                    console.log(UserAccounts)
                    const cerat = document.createElement("div");
                    cerat.classList.add("text")
                    cerat.textContent = a;
                    
                    addHtml(accountS, all);
                    addHtml(all, creat1);
                    addHtml(all, cerat);
                    try {
                        UserAccounts[ a ] = { Name: a, Img: SelctImage, rem: uniqId };
                        ReverseAccounts[ uniqId ] = { nest: a };
                        Conversations[ a ] = [];
                        changeInput.value = ''; 
                        changeFileInput.value = '';
                    } catch (error) {
                        console.error(error)
                        document.location.reload();
                    }
                    RHtml(Show, AllC);
                })
                
        all.addEventListener("click", function () {
            if (CuruntClick == all.id) return;
            if (!(all.id in Conversations)) {
                console.log("There is no name");
                alert("There is no account in that name, it can be removed or changed");
                if (confirm("do you want to delte this account that doesn't exist")) {
                        try {
                            const getnest = all.getAttribute('nest');
                            console.log(getnest)
                            const Org = ReverseAccounts[getnest].nest
                            delete UserAccounts[ Org ]
                            delete Conversations[Org]
                        } catch (error) {
                            alert("some thing bad happen: We must restart the page");
                            setTimeout(() => {
                                
                            document.location.reload();
                            }, 1000);
                           
                        }
                    RHtml(accountS, all);
                }
            }
            else {
                CuruntClick.pop();
                CuruntClick.push(all.id);
            console.log(CuruntClick)
                section2.innerHTML = '';
                RHtml(section2, t);
                // section2.remove(t)
                messageDisplay.innerHTML = '';
                messageDisplay.id = 'MessDisplay';
                messageDisplay.classList.add('MessDisplay');
                if (CuruntClick in Conversations) {
                    messageDisplay.innerHTML = Conversations[ CuruntClick ].join('');
                }
addHtml(section2, messageDisplay);

const userAreaMessage = document.createElement('div');
userAreaMessage.id = 'UserAreaMessage';
addHtml(section2, userAreaMessage);

const messageInput = document.createElement('textarea');
messageInput.id = 'messageInput';
messageInput.classList.add('InputText');
messageInput.placeholder = 'Type Your Message...';
addHtml(userAreaMessage, messageInput);

const sendButton = document.createElement('button');
sendButton.innerHTML = '&blacktriangleleft;';
sendButton.addEventListener('click', sendMessage);
addHtml(userAreaMessage, sendButton);

            }
            })
    })
    settingButton.addEventListener("click", function(){
        const Sec = document.getElementById("SEcondSection3")
        Sec.innerHTML = '';
        SecondSecting.innerHTML = '';
const ContainerD = document.createElement("div");
const BodyStyle = document.createElement("style");
ContainerD.classList.add("container");
ContainerD.id = 'Tran';
        addHtml(Sec, ContainerD);
const form = document.createElement("div");
        form.classList.add("form");
        form.action = '/';
addHtml(ContainerD, form);

const label1 = document.createElement("label");
label1.setAttribute("for", "BackGroundColorGreen");
label1.textContent = 'GreenVlave';
const InputR1 = document.createElement("input");
InputR1.setAttribute("name", "Colors");
InputR1.id = 'BackGroundColorGreen';
InputR1.type = 'radio';
addHtml(form,label1)
addHtml(form,InputR1)
const label2 = document.createElement("label");
label2.setAttribute("for", "BackGroundColorBlue");
label2.textContent = 'blueviloate';
const InputR2 = document.createElement("input");
InputR2.setAttribute("name", "Colors");
InputR2.id = 'BackGroundColorBlue';
InputR2.type = 'radio';
addHtml(form,label2)
addHtml(form,InputR2)
const Button = document.createElement("button");
Button.type = 'Submit';
        Button.textContent = "Change";
        addHtml(form,Button)
        Button.addEventListener("click", function () {
    const PageNature = document.getElementById("PageNature")
    if (InputR1.checked) {
        PageNature.href = './style/n.css'
    } 
    if (InputR2.checked) {
        PageNature.href = ''
    } 
});
        // SecondSecting.textContent = 'Update Are Coming Soon';

    })
                
            })
    
    //searhc bar
    searchInput.addEventListener("input", function (target) {
        UserAccounts
       
    })
    //end of serch script
    // Function to send message
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message === '') return;
        if (!(CuruntClick in Conversations)) {
            console.warn(`There Is no file sellection ${message}`)
        }
        else {
            let c = CuruntClick;
            // Add user message
            // const message_color = document.getElementById(CuruntClick);
            // const mess_collor = message_color.getAttribute('sown');
            const aDiv = document.createElement("div")
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('UserMessage');
            userMessageDiv.textContent = message;
            // userMessageDiv.style.backgroundColor = mess_collor;
            addHtml(messageDisplay,aDiv)
            addHtml(aDiv, userMessageDiv);
            Conversations[c].push(aDiv.innerHTML)
            console.log(Conversations)
        messageInput.value = '';

// 🔥sumaw🌀, [6/22/2024 11:12 PM]
// Simulate AI response
            setTimeout(() => {
            const bDiv = document.createElement("div")
                const aiMessageDiv = document.createElement('div');
                const aiSymbole = document.createElement("span");
                aiSymbole.classList = 'aitex';
                aiSymbole.textContent = 'AI:'
                aiMessageDiv.classList.add('RobotMessage');
                if (message.toLowerCase() == "what is your name") {
                    aiMessageDiv.textContent = `My name is "${CuruntClick}"`;
                addHtml(messageDisplay, bDiv);
                addHtml(bDiv, aiMessageDiv);
            Conversations[c].push(bDiv.innerHTML)
                    return;
                }
                if (message.trim().toLowerCase() == CuruntClick) {
                    aiMessageDiv.textContent = `"${CuruntClick}" whta is thise name`;
                addHtml(messageDisplay, bDiv);
                addHtml(bDiv, aiMessageDiv);
                    Conversations[ c ].push(bDiv.innerHTML);
                    return;
                    
                }
                try {
                        const ans = eval(message);
                    aiMessageDiv.textContent = `AI: ${ans}`;
                    addHtml(messageDisplay, bDiv);
                    addHtml(bDiv, aiMessageDiv);
                Conversations[c].push(bDiv.innerHTML)
                } catch (error) {
                    aiMessageDiv.textContent = `AI: You Math Quastion "${message}"`;
                addHtml(messageDisplay, bDiv);
                addHtml(bDiv, aiMessageDiv);
            Conversations[c].push(bDiv.innerHTML)
                }
                
                
            messageDisplay.scrollTop = messageDisplay.scrollHeight;
        }, 500);
        }
    }
});
// JSON.stringify(document)