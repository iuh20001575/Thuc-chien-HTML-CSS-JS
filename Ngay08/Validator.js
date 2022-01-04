function Validator(selector) {
    const ruleFunction = {
        required(selector) {
            return selector.value ? undefined : `${selector.name} is required`;
        },
        min(length) {
            return selector => 
                selector.value.length >= length 
                    ? undefined 
                    : `${selector.name} must be at least ${length} characters`;
        },
        max(length) {
            return selector => 
                selector.value.length <= length 
                    ? undefined 
                    : `${selector.name} must be less than ${length} characters`;
        },
        match(name) {
            const element = selectorElement.querySelector(`input[name="${name}"]`);
            return selector => element.value === selector.value 
                ? undefined 
                : `${selector.name} do not match`;
        },
        email(selector) {
            return String(selector.value)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                    ? undefined : `Email is not valid`;
        }
    }
    const selectorElement = $(selector);
    const inputElements = Array.from(selectorElement.querySelectorAll('input[name]'));
    const rules = {};
    inputElements.forEach(element => {
        const rule = element.getAttribute('rule');
        rule.split('|').forEach(item => {
            let ruleItem = ruleFunction[item];
            if (item.includes(':')) {
                const [element, value] = item.split(':');
                ruleItem = ruleFunction[element](value);    
            }
            if (rules[element.name]) {
                rules[element.name].push(ruleItem);
            } else {
                rules[element.name] = [ruleItem ];
            }
        })
    });

    function getParent(selector) {
        // while (selector.)
    };

    return () => {
        Object.keys(rules).forEach((rule, index) => {

            let messengerError;
            const element = inputElements[index];

            rules[rule].find(item => {
                messengerError = item(element);
                return messengerError;
            });

            if (messengerError) {
                element.classList.add('error');
                element.classList.remove('success');
                element.parentNode.lastElementChild.innerHTML = messengerError;
            }
            else {
                element.classList.remove('error');
                element.classList.add('success');
                element.parentNode.lastElementChild.innerHTML = '';
            }
        })
    }
}