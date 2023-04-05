const inputText = document.getElementById("write-text");
const pushBtn = document.getElementById("push");
const popBtn = document.getElementById("pop");
const searchBtn = document.getElementById("search");
const pushedContentContainer = document.getElementById("push-stack");
let pushedText;
let newSpanEle;
const pushedArray = [];
const pushedArrayValue = [];
let lengthOfPushedArr;
let bottomValueForPush = 0;
let bottomValueForPop = 0;

function pushContents()
{
    let i = 1;
    pushBtn.addEventListener("click",()=>{
        pushedText= inputText.value;
        if(pushedText=="")
            alert("Please, enter some content!!!");
        else
        {
            inputText.value = "";
            newSpanEle = document.createElement("span");
            newSpanEle.innerText = pushedText;
            newSpanEle.classList.add("pushed-content");
            newSpanEle.setAttribute("id",`pushed-content${i}`);
            newSpanEle.style="--bottom-value: " + bottomValueForPush +"px; --bottom-value-pop-start: " + bottomValueForPush + "px; --bottom-value-pop-end: " + bottomValueForPop +"px;";
            newSpanEle.style.animation="pushAnimation 1s forwards";
            pushedArray.push(newSpanEle);
            pushedArrayValue.push(parseInt(newSpanEle.innerText));
            pushedContentContainer.appendChild(newSpanEle);
            bottomValueForPush+=40;
            i++;
        }
    });
}

pushContents();

function popContents()
{
    let poppedEle;
    popBtn.onclick = function()
    {
        if(pushedArray == "")
            alert("Nothing to pop!!!");
        else
        {
            lengthOfPushedArr = pushedArray.length;
            poppedEle = pushedArray[lengthOfPushedArr - 1];
            // console.log(poppedEle);
            poppedEle.style="--bottom-value: " + bottomValueForPush +"px; --bottom-value-pop-start: " + bottomValueForPush + "px; --bottom-value-pop-end: " + bottomValueForPop +"px;";
            poppedEle.style.animation = "popAnimation 3s forwards";
            pushedArray.pop();
            bottomValueForPop+= 40;
            bottomValueForPush-= 40;
        }
    }
}

popContents();
//to search the number in stack and if not found then alert
//to search the number in stack and if not found then alert
function searchContents()
{
    let searchEle;
    searchBtn.onclick = function()
    {
        searchEle = parseInt(inputText.value);
        if(searchEle == "")
            alert("Please, enter some content!!!");
        else
        {
            console.log(searchEle)
            console.log(pushedArrayValue)
            // inputText.value = "";
            if(pushedArrayValue.includes(searchEle)) {
                let position = pushedArrayValue.indexOf(searchEle) + 1; // add 1 to get 1-based index
                alert(`The element "${searchEle}" is found at position ${position} in the stack!`);
            }
            else
                alert(`The element "${searchEle}" is not found in the stack!`);
        }
    }
}
searchContents();