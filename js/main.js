$(function () {
    //jQery준비
    $('.menu').hide();
    $('.menu2').hide();
    $('header #header_wrap .header_left > ul > li.sel1, header #header_wrap .header_left > ul > li.sel2').mouseenter(function () {
        $(this).find('.drop').stop().slideDown(300);

    }).mouseleave(function () {
        $('.drop').stop().slideUp(100);
    });


    //컨텐츠 이미지 변경
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() + 200 > $('#con1_wrap').offset().top) {
                $("#con1_wrap .con1").find('h2').addClass('scroll');
                $("#con1_wrap .con1").find('.con1_text1').addClass('scroll');
                $("#con1_wrap .con1").find('.con1_text2').addClass('scroll');
            } else {
                $("#con1_wrap .con1").find('h2').removeClass('scroll');
                $("#con1_wrap .con1").find('.con1_text1').removeClass('scroll');
                $("#con1_wrap .con1").find('.con1_text2').removeClass('scroll');
            };
            if ($(this).scrollTop() + 200 > $('#con2_wrap').offset().top) {
                $("#con2_wrap .con2").find('.con2_text1').addClass('scroll');
                $("#con2_wrap .con2").find('.con2_text2').addClass('scroll');

            } else {
                $("#con2_wrap .con2").find('.con2_text1').removeClass('scroll');
                $("#con2_wrap .con2").find('.con2_text2').removeClass('scroll');

            };
            if ($(this).scrollTop() + 350 > $('#con5_wrap').offset().top) {
                $("#con5_wrap .con5").find('.con5_text').addClass('scroll');

            } else {
                $("#con5_wrap .con5").find('.con5_text').removeClass('scroll');
            };
        });
    });



    //모바일 네비게이션 바 복제
    var naviClon = $('#menu').contents().clone();
    var navi_list = $('<div id="sm_menu"></div>');
    navi_list.append(naviClon);
    navi_list.appendTo('#mb_navi');



    $('#m_menu').click(function () {
        $('#mb_navi').toggleClass('open');
        if ($('#mb_navi').hasClass('open')) { //열린상
            $('#mb_navi').stop(true).animate({
                right: 0
            }, 500);
            $('#m_menu > a').find('img').attr('src', 'img/main/main_mobile1-2.png');
            $('body').css('overflow-y', 'hidden');

        } else { //닫힌상태
            $('#mb_navi').stop(true).animate({
                right: '-100%'
            }, 500);
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('#sm_menu > ul > li > a').removeClass('selected');
            $(this).find('img').attr('src', 'img/main/main_mobile1.png');
            $('body').css('overflow-y', 'scroll');
        };
    });

    /*모바일 각 메뉴 클릭시 서브메뉴 펼침*/
    $('#sm_menu > ul > li > a').click(function () {
        $(this).toggleClass('selected');
        $('#sm_menu > ul > li > a ').not(this).removeClass('selected');
        $(this).find('+div').slideToggle('fast');
        $('#sm_menu > ul > li > a').not(this).find('+div').slideUp('fast');

    });

    /*pc화면 사이즈에서 모바일 메뉴 사라지고 초기화기*/
    $(window).resize(function () {
        if ($(this).width() > 748) {
            $('#mb_navi').css('right', '-100%');
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('#sm_menu > ul > li > a').removeClass('selected');
            $('#mb_navi').removeClass('open');
            $('#m_menu > a').find('img').attr('src', 'img/main/main_mobile1.png');
            $('body').css('overflow', 'scroll');
        };
    });

    /*슬라이드 배너*/
    $(document).ready(function ($) {
        $('#example1').sliderPro({
            width: 1900,
            height: 500,
            arrows: true,
            buttons: false,
            waitForLayers: true,
            thumbnailPointer: true,
            autoplay: false,
            autoScaleLayers: false,
        });
    });

    /*슬라이드 배너 닫기버튼*/
    $('.close_btn').click(function () {
        $('.sp-white').css('display', 'none');
    });

}); //jQery 종료