/**
 * kol圣诞推广页面
 * @param  {[type]} $        [jQuery对象]
 * @param  {[type]} window   [window对象]
 * @param  {[type]} document [document对象]
 * @return {[type]}          [null]
 */
;(function($, window, document) {

    $(function() {

        // 圣诞套餐+雪孩子
        $(".rule").click(function() {
            $(".shade").fadeIn();
            $(document).bind('touchmove', function(e) {
                var e = e || event;
                e.preventDefault();
            });
            if (Boolean($(".info").fadeIn())) {
                $(".shade").click(function() {
                    $(".info").fadeOut(function() {
                        $(".shade").fadeOut();
                    });
                    $(document).unbind("touchmove");
                })
            }
        })
        $(".info span").click(function() {
            $(".info").fadeOut(function() {
                $(".shade").fadeOut();
            });
            $(document).unbind("touchmove");
        });

        // 圣诞老人 + 普通鲜花
        $(".rule_a").click(function() {

            $(".shade").fadeIn(function() {
                $(".info_a").fadeIn();
            });

            $(document).bind('touchmove', function(e) {
                var e = e || event;
                e.preventDefault();
            })
            if (Boolean($(".info_a").fadeIn())) {
                $(".shade").click(function() {
                    $(".info_a").fadeOut(function() {
                        $(".shade").fadeOut();
                    });
                    $(document).unbind("touchmove");
                })
            }
        })
        $(".info_a span").click(function() {
            $(".info_a").fadeOut(function() {
                $(".shade").fadeOut();
            });

            $(document).unbind("touchmove");
        });

        // 鲜花套餐
        $(".rule_b").click(function() {

            $(".shade").fadeIn(function() {
                $(".info_b").fadeIn();
            });
            $(document).bind('touchmove', function(e) {
                var e = e || event;
                e.preventDefault();
            });
            if (Boolean($(".info_b").fadeIn())) {
                $(".shade").click(function() {
                    $(".info_b").fadeOut(function() {
                        $(".shade").fadeOut();
                    });

                    $(document).unbind("touchmove");
                })
            }
        })
        $(".info_b span").click(function() {
            $(".info_b").fadeOut(function() {
                $(".shade").fadeOut();
            });

            $(document).unbind("touchmove");
        })


    });

})(jQuery, window, document);
