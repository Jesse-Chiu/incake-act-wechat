(function() {

    $(function() {

        fnRegister();

        // 注册按钮点击事件
        function fnRegister(){
            var $oMaskResult = $('#mask-result'),
                $oMaskClose = $oMaskResult.find('.btn-result-close'),
                $oResultOk = $oMaskResult.find('.result-ok'),
                $oResultFail = $oMaskResult.find('.result-fail'),
                $oBtnRegister = $('#btn-register');

            $oBtnRegister.on('click', function(event) {
                event.preventDefault();
                /* Act on the event */

                // TODO 处理新老用户检测及登录注册逻辑

                var isUserExists = false;   // 用户是否存在 存在：true，不存在：false

                if (isUserExists) {
                    $oResultFail.show(function(){
                        $oMaskResult.show();
                    });
                }else{
                    $oResultOk.show(function(){
                        $oMaskResult.show();
                    });
                }
            });

            $oMaskClose.on('click', function(event) {
                event.preventDefault();
                /* Act on the event */
                $oMaskResult.find('.result-info').hide(function(){
                    $oMaskResult.hide();
                });
            });
        }

    });

})();
