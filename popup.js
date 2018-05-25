'use strict';
document.body.innerHTML += '<div class="popupalerts"><div class="popupcontent"><div class="close"><a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABg1JREFUWAnFWG1MVlUc/8MDCmRhKIaOOQk2kZkg8AFSGls5yegL5gYiDmdJbUqTD1BfzNYnXIhhtWLhQEWHfAljorVmm+N1vDqmY5PRKqcNUYZtCAzo9zt4L/e5PPe5z/OIeLb7nHP+5//yu+ec/8t9/MTHtmfPnvCgoKDds7Ozb/v5+UXgWYtxxFN199Dfx3MP9N8DAwPrq6qqHvpiys8boX379q2FwSN4MiH3hjeyAN8N/itPnjypqK+vH/ZU1iOA+fn5K6enpz+HUoIL9lS5Bd9jgP0au1p+5syZxxY8OtktwKNHjwaPjIx8Cu4SPCt1qUUYAOQwXvar8fHxH7Gjk1YqHVYLhw4dChwbGzsFJZ+BJ8iKz1c69L4E2XcDAgLCU1JSfu3q6ppxpcvlDh48eDBscnLyFyh505XQYtOwmy3Lli1735Uj+ZuNpaenBwBc41KBo33ags0G2jbjWQBw/fr130Ig1cz4vOewuZ22zXac7mBeXt7HYPzCzLSE8+QtW7b8e/PmzU7Npn4Hc3JyXsOF/RMAF90hNGOe9LiP4w6H4/Xq6moGetGPGHHpSztwq1atkqKiIlm+fLknthbwpKamSnh4+AK6kQAMwTMzM4wcqqkjxtFGYaEaFB3w3PL8b2hoqBw7dkyioqJk06ZN0t7eLgje8ww2o23btklBQYEkJydLc3OzwCksJbCL8YmJiVW9vb3/KUAAx3vndB/N0rgbEhYWpsgxMTFSXFws2HUzm8v5zp07BXFVrVEHNsQln0Z8uovHOVcAgThFW7Tqb9y4IRcvXtSXCRKZxhZkRkaG7N27V5cbHByUmpoafW41AKZ0rjmQZ2PRe+S5d+7cEdwPiYuLo6ysWbNGoqOjpaOjQ9EV0fCza9cuyc7O1ikEV1paKigYdJrVALu4euvWrXUOHN2HYHrHitFMHxgYEH9/f4mN5XvNg2xraxO8tc6OckyysrL0+a1bt6SsrEwmJiZ0mt0A+u4S4GGg3WzHbFy/ffu2rFixQu0e6dzJyMhI6ezsVCAJLjOTFdlcI7iTJ0+6dQyN19gD4IgjPj6eADcYFzwZI5g6gVy3bp0CSQ+nU2itp6dHKioqZGpqSiN5048w923wRsLIe/78eTXdsWOH6pOSkozLooHjvfWxRdCLI3wUVmIEybhmbq2trWrnngEci4gIf/zYu5TZumFOh+FjbgT2LOA0ff64iCrnaQRvegIrLCwUpjBzY+bAN4yZ7NWc2PjqPgFkFiE4xCrd6PXr1wWVsT7n3XxGkPfpxRnehhmCY9HA9Ke1xsZGuXDhggo1DDn0ajYGcoYker0Prd2RkJAQA0GPAzUrGaY4LZvQKMHhw0fZx7EokEyFjI9sBMnrwPjpTcPG1TpwRA+g9LAnggRXUlIiGzdu1Nnr6uqkoaFBn3NAkEx/BKaBZOah0zATedrwUkccKGke4KhygHa1O8GQkBBVwdCo1lg8NDU1aVOnnmDMILnrzMPM6XYNLzlw9uzZ4yo+ANxVO4EDBw7oqY28vG9Xr7oXY/YoLy93AoTKXdLS0uzMMQb+TCYFEMXjKSB2Gw9ra2vl4cO5v1cqKyvl2rVrtkbIQJAnTpzQQVKHncMQCz7oyyivitT+/v5ROMvLmG8n0VXj0XR3d8vQ0JC0tLS4YrGksfJmBY6vNjl9+rQ8evTIkpcL2L0yXJ/Laqxx5ubmvoKPlb8wD9VoL6LH7o0hjEVq/9uoIyYQHOEYkH/yIkAZbcJzP9LAke70HdLX19ePwM1/ryyP2qjsOYxL4bnfGPXq38UGot/+/fv/wPwtA20phk0A9x4MzZflmOhHbEAwCw/6AHeB93Gp2t9wpGwYcwJH464AMm0NBwcHxwDkD0uA8Cf8lRxNH3Bly9URO/HhuAtA+A6P0311YvJtMo0NKDh37lyVO3Fbo3CcLpTydUhdQVC4GZ5uK+POIHTw46QGoSQX38e/uePlmu0OGhUgVkYygQPkbtCjjWsejAcB7hJe9Hsc5z8e8CsWrwAalaIQjQHQLDwZMByBtVfxaP9jj2I8irW76K8A1GV8u9hXCGA2t/8BEqY9ZsCEj10AAAAASUVORK5CYII=" /></a></div><div class="content"></div><div class="button"><a href="" class="negative">Cancel</a><a href="" class="positive">Okay</a></div></div></div>';
let popupCallBack = function(result){};
let popupAllowEscape = false;
function showPopup(message, positiveText, negativeText, callback, showCloseButton){
    if(message != ""){
        document.querySelector('.popupcontent .content').innerHTML = message;
        popupAllowEscape = false;
        if(showCloseButton === undefined){
            showCloseButton = true;
        }
        if(positiveText === undefined){
            positiveText = "Okay";
        }
        if(negativeText === undefined){
            negativeText = "";
        }
        if(callback === undefined){
            popupCallBack = function(result){ console.log('Result ' + result); };
        } else {
            popupCallBack = callback;
        }
        
        if(showCloseButton){
            document.querySelector('.popupcontent .close').classList.remove('hidden');
            popupAllowEscape = true;
        } else {
            document.querySelector('.popupcontent .close').classList.add('hidden');
        }
        if(positiveText != ""){
            document.querySelector('.popupcontent .button .positive').classList.remove('hidden');
            document.querySelector('.popupcontent .button .positive').innerHTML = positiveText;
        } else {
            document.querySelector('.popupcontent .button .positive').classList.add('hidden');
        }
        if(negativeText != ""){
            document.querySelector('.popupcontent .button .negative').classList.remove('hidden');
            document.querySelector('.popupcontent .button .negative').innerHTML = negativeText;
        } else {
            document.querySelector('.popupcontent .button .negative').classList.add('hidden');
        }
        document.querySelector('.popupalerts').classList.add('show');
    }
}
function closePopup(){
    document.querySelector('.popupalerts').classList.remove('show');
}
document.querySelector('.popupcontent .button .positive').addEventListener('click', function(e){
    e.preventDefault();
    closePopup();
    popupCallBack(1, false);
});
document.querySelector('.popupcontent .button .negative').addEventListener('click', function(e){
    e.preventDefault();
    closePopup();
    popupCallBack(0, false);
});
document.querySelector('.popupcontent .close a').addEventListener('click', function(e){
    e.preventDefault();
    closePopup();
    popupCallBack(0, true);
});
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        if(document.querySelector('.popupalerts').classList.contains('show') && popupAllowEscape){
            popupCallBack(0);
            closePopup();
        }
    }
};