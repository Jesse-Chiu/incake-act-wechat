(function() {

    $(function() {

        var clientH = $(window).height(),
            $oBtnFooter = $('#float-footer'),
            iBtnFooterH = $oBtnFooter.height(),
            $oFrmRegister = $('#frm-register'),
            iFrmRegisterH = $oFrmRegister.offset().top;

        fnNav();
		
		// 注册按钮点击事件
        fnRegister();
		
        $(window).on('scroll', function() {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT > (iFrmRegisterH - clientH)) {
                $oBtnFooter.hide();
            } else {
                $oBtnFooter.show();
            }
        });

        // 浏览器尺寸改变时重新计算变量值
        $(window).on('resize', function() {
            clientH = $(window).height();
            iBtnFooterH = $oBtnFooter.height();
            iFrmRegisterH = $oFrmRegister.offset().top;
        });

        function fnNav() {
            $oBtnFooter.on('click', function() {
                fnScrollTop($oFrmRegister);
            });
        }

        // 滑倒指定位置
        function fnScrollTop($obj) {
            $('html,body').animate({ scrollTop: $obj.offset().top }, 800);
        }
        
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

                var isUserExists = true;   // 用户是否存在 存在：true，不存在：false

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
