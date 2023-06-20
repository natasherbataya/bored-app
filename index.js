const newTitleNode = 'Ура, теперь не скучно 🔥';
const WRAPPER_CLASSNAME = "wrapper_fun";

let titleNode = document.querySelector('.js-title');
let descriptionNode = document.querySelector('.js-description');
let wrapperNode = document.querySelector('.js-wrapper');
const goBtnNode = document.querySelector('.js-go_btn');


goBtnNode.addEventListener('click', function () {
    fetch("http://www.boredapi.com/api/activity/")
        .then(function (response) {
            console.log(response.status);
            if (response.status !== 200) {
                consol.log(response.status);
                return;
            }
            return response.json();
        })

        .then((res) => {

            const activity = res.activity;

            titleNode.innerText = newTitleNode;
            descriptionNode.innerText = activity;
            wrapperNode.classList.add(WRAPPER_CLASSNAME);
        });

});

