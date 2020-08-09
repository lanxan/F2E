
let datalist = [
        { 
            'date': "107/10/13",
            "text": "text1",
            "status": {
                "code": 1
            }
        },
        { 
            "date": "107/10/03",
            "text": "text2",
            "status": {
                "code": 1
            }
        },
        { 
            "date": "107/10/10",
            "text": "text3",
            "status": {
                "code": 2
            }
        },
        { 
            "date": "107/06/07",
            "text": "text4",
            "status": {
                "code": 3
            }
        },
        { 
            "date": "107/07/11",
            "text": "text5",
            "status": {
                "code": 4
            }
        },
        { 
            "date": "107/08/24",
            "text": "text6",
            "status": {
                "code": 4
            }
        }
    ];

datalist.sort(function(a, b) {
    return (new Date(b.date) - new Date(a.date));
});

let itemWrapper = Vue.extend({
    template:
    '<div class="list-group-item">' +
        '<item-container></item-container>' +
    '</div>',
    components: {
        itemContainer: Vue.extend({
            template:
            '<div class="row">' +
                '<div class="col-sm-8">' +
                    '<p class="status">已完成 <span class="time">預計出貨</span></p><p class="content">項目名稱</p>' + 
                '</div>' +
            '</div>'
        })
    }
})

let vm = new Vue({
    el: '#app',
    data: {
        items: datalist
    },
    components: {
        itemWrapper
    }
})
