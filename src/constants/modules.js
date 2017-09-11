export default [
    {
        title: '布局',
        type: 'layout',
        items: [
            {
                alias: '12',
                type: 'layout',
                title: '12',
                value: [12]
            },
            {
                alias: '6 6',
                type: 'layout',
                title: '6 6',
                value: [6, 6]
            },
            {
                alias: '8 4',
                type: 'layout',
                title: '8 4',
                value: [8, 4]
            },
            {
                alias: '4 4 4',
                type: 'layout',
                title: '4 4 4',
                value: [4, 4, 4]
            },
            {
                alias: '3 6 3',
                type: 'layout',
                title: '3 6 3',
                value: [3, 6, 3]
            }
        ]
    },
    {
        title: '组件',
        type: 'module',
        items: [
            {
                alias: '按钮',
                type: 'btn',
                data: {
                    content: {
                        type: 'inputText',
                        title: '按钮文字',
                        // rule: {
                        //     type: 'text'
                        // },
                        value: '按钮'
                    },
                    size: {
                        type: 'inputRadio',
                        title: '按钮大小',
                        props: 'btn-size',
                        value: 'btn-default'
                    },
                    theme: {
                        type: 'inputRadio',
                        title: '按钮颜色',
                        props: 'btn-theme',
                        value: 'btn-success'
                    }
                },
                component: require('@/modules/Btn/').default
            }
        ]
    }
]
