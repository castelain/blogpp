var writing_plans_div = document.querySelector('div.writing-plans');
var plan_input = document.querySelector('div.writing-plans input');
var add_btn = document.querySelector('div.writing-plans button');

var plans = document.createElement('ol');
writing_plans_div.appendChild(plans);

add_btn.onclick = function () {
    var plan_name = plan_input.value;
    plan_input.value = '';

    var new_item = document.createElement('li');

    var new_span = document.createElement('span');
    new_span.textContent = plan_name;
    
    var btn_delete = document.createElement('button');
    btn_delete.textContent = 'Delete';

    new_item.appendChild(new_span);
    new_item.appendChild(btn_delete);
    plans.appendChild(new_item);

    btn_delete.onclick = function () {
        plans.removeChild(new_item);
    };

    plan_input.focus();
};