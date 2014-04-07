({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    styles: [
        { elem: 'css', url: 'reset.css'},
        { elem: 'css', url: '/libs/bootstrap/css/bootstrap.min.css'},
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'IE' }
    ],
    scripts: [
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    elem: 'menu-wrapper',
                    mods: {'with-blick': true},
                    content: [

                        {
                            block: 'menu',
                            mods: {position: "left"},
                            menu: [
                                {title: 'Платежи', url: '#'},
                                {title: 'Архив платежей', url: '#'},
                                {title: 'Поставщик услуг', url: '#'},
                                {title: 'Плательщики', active: true}
                            ]
                        },

                        {
                            block: 'auth', content: [
                            {tag: 'span', content: ['Иванов Иван Иванович']},
                            {tag: 'a', content: 'Выход', attrs: {href: "#"}},
                        ],
                            mods: {right: true}
                        },
                    ]
                },
                {elem: 'menu-wrapper',

                    content: [
                        {
                            block: 'add-man',
                            content: [
                                {
                                    block: 'checkbox',
                                    type: 'checkbox',
                                    cls: 'main-checkbox',
                                    js: true,
                                    mods: {'top-5px':true}
                                },

                                {
                                    block: 'button',
                                    type: 'button',
                                    cls: 'btn btn-small',
                                    mods:{'left-30px': true},
                                    content: [
                                        {tag: 'i', cls: 'icon-plus'},
                                        [' Создать плательщика']
                                    ]
                                },
                            ]
                        },
                        {
                            block: 'search',

                            mods:{'right':true, 'like-bootstrap':true},
                            content: [
                                {
                                    block: 'input',
                                    name: 'text',
                                    val: 'Поиск',

                                },
                            ]
                        }
                    ]}

            ]

        },
        {
            block: 'table',
            people: [
                {
                    name: "Плательщик",
                    email: "Электронная почта",
                    tel: "Телефон",
                    groups: "Группы"
                },

                {
                    name: "Иванов Иван Иванович",
                    email: "iii@rambler.ru",
                    tel: "89153134293",
                    groups: [
                        {name: 'Friends'}
                    ]
                },
                {
                    name: "Петр Петрович Петров",
                    email: "ppp@rambler.ru",
                    tel: "89151212288",
                    groups: [
                        {name: 'Группа1'},
                        {name: 'Группа2'},
                        {name: 'Группа3'},
                        {name: 'Группа4'},
                        {name: 'Группа5'}
                    ]
                },
                {
                    name: "Василий Васильевич Васильев",
                    email: "vvv@rambler.ru",
                    tel: "89151212277",
                    groups: []
                }

            ]
        }
    ]
})
