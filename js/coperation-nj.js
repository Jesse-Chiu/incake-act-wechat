(function() {
    $(function() {
        fnInit();
    });

    /* 页面蛋糕点击事件 */
    function fnInit() {
        var $oContainer = $(".container"),
            $oCakeList = $oContainer.find(".cake-list"),
            $oMask = $oContainer.find(".mask"),
            $oBuyHide = $oContainer.find(".buy-hide"),
            $oMaskResult = $("#mask-result");

        // 加入购物车
        $oCakeList.on("click", ".btn-add", function() {
            $oMask.show();
            $oBuyHide.show().animate({
                bottom: 0
            }, 500);

            $('body').css({"overflow": "hidden", 'z-index': '-1'});
            // 禁止页面拖动
            $('body').bind('touchmove', function(e) {
                e.preventDefault();
            });
        });

        //关闭购物车弹窗
        $oBuyHide.on("click", ".close", function() {
            $oBuyHide.fadeOut(500, function() {
                $(this).css('bottom', '-50%');
            });
            $oMask.fadeOut(500);

            $('body').css("overflow", "auto");
            $('body').unbind('touchmove');
        });

        // 登录注册
        $oBuyHide.on("click", "#btnBuyNow", function() {
            $oBuyHide.fadeOut(500, function() {
                $(this).css('bottom', '-50%');
            });
            $oMask.fadeOut(500);
            $oMaskResult.fadeIn();
        });

        // 关闭登录注册
        $oMaskResult.on("click", ".btn-result-close", function() {
            $oMaskResult.fadeOut();
        });

        // 规格选择
        introduce();
    }

    /* 规格选择事件 */
    function introduce() {
        var $aType = $(".buyMde-list .type");

        $aType.on("click", function() {
            $aType.removeClass("cur");
            $(this).addClass("cur");
            $(".countR .number").val(1); //更改数量
            var aText = $(this).text();
            //修改规格信息
            switch (aText) {
                case "1.5磅":
                    $('.buy-txtI').html("适合美味独享、1-2人食用");
                    $('.price').html("<span>￥<span id='price'>169</span>&nbsp;</span>/1.5磅");
                    break;
                case "2.5磅":
                    $('.buy-txtI').html("适合亲密分享、2-3人食用");
                    $('.price').html("<span>￥<span id='price'>229</span>&nbsp;</span>/2.5磅");
                    break;
                case "3.5磅":
                    $('.buy-txtI').html("适合家人共享、3-5人食用");
                    $('.price').html("<span>￥<span id='price'>369</span>&nbsp;</span>/3.5磅");
                    break;
                case "5.5磅":
                    $('.buy-txtI').html("适合生日派对、5-7人食用");
                    $('.price').html("<span>￥<span id='price'>499</span>&nbsp;</span>/5.5磅");
                    break;
            }
        });
    }

})();
