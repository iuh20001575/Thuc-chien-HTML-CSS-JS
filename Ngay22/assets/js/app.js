const listFood = [
    {
        type: 'meat',
        img: 'https://www.nodemy.vn/projects/html-css-js/filter-elements/meat1.jpg'
    },
    {
        type: 'meat',
        img: 'https://www.nodemy.vn/projects/html-css-js/filter-elements/meat2.jpg'
    },
    {
        type: 'drinks',
        img: 'https://www.nodemy.vn/projects/html-css-js/filter-elements/drinks1.jpg'
    },
    {
        type: 'drinks',
        img: 'https://www.nodemy.vn/projects/html-css-js/filter-elements/drinks2.jpg'
    },
    {
        type: 'drinks',
        img: 'https://www.nodemy.vn/projects/html-css-js/filter-elements/drinks3.jpg'
    },
    {
        type: 'salad',
        img: 'https://www.nodemy.vn/projects/html-css-js/filter-elements/salad1.jpg'
    },
    {
        type: 'salad',
        img: 'https://www.nodemy.vn/projects/html-css-js/filter-elements/salad2.jpg'
    },
    {
        type: 'dessert',
        img: 'https://www.nodemy.vn/projects/html-css-js/filter-elements/dessert1.jpg'
    },
];

const filtersBtn = $('.filter');
const root = $('.list-food')[0];

const handleFilter = {
    type: 'all',
    all: item => true,
    salad: item => item.type === 'salad',
    meat: item => item.type === 'meat',
    drinks: item => item.type === 'drinks',
    dessert: item => item.type === 'dessert',
}

function getItemHTML(data) {
    return `
        <div class="food-item">
            <img src="${data}" alt="">
        </div>
    `;
}

function render() {
    root.innerHTML = listFood.filter(handleFilter[handleFilter.type])
        .map(item => getItemHTML(item.img))
        .join('');
}

filtersBtn.on('click', function() {
    handleFilter.type = $(this).data('type');
    $('.filter.active').removeClass('active');
    $(this).addClass('active');
    render();
})

render();