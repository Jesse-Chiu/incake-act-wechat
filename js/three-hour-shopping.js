	//获取span元素
    var showBankDom = $('.btn');
    //为span元素添加点击事件
    showBankDom.on('click', function () {
    	
        var bankSelect = new IosSelect(1, 
            [data],
            {
            	
                title: '蛋糕磅数选择',
                //组件展示选项数目 可以为3,5,7,9 默认为7
                
//              callback: function (selectOneObj) {
//                  bankIdDom.value = selectOneObj.id;
//                  showBankDom.innerHTML = selectOneObj.value;
//                  
//                  showBankDom.dataset['id'] = selectOneObj.id;
//                  showBankDom.dataset['value'] = selectOneObj.value;
//              }
        });
    });

var data = [
    {'id': '10001', 'value': '1.5磅  ￥189'},
    {'id': '10002', 'value': '2.5磅  ￥279'}
];