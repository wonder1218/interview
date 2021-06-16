
const menuList=[
    {
        title:'首页',
        key:'/home',
        icon:'home'
    },
    {
        title: '商品',
        key:'/product',
        icon:'appstore',
        children:[
            {
                title:'品类管理',
                key:'/category',
                icon:'bars'
            },
            {
                title:'商品管理',
                key:'/product',
                icon:'tools'
            },
        ]
    },
]
export default menuList;