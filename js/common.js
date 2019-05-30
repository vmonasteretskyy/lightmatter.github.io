$(document).ready(function () {
    $('.header-language > span').click(function () {
        $(this).next().slideToggle();
    });

    $('.burger-icon .show-menu').click(function () {
        $(this).hide();
        $('.close-menu').show();
        $('.header__nav-section .col-lg-8.col-md-5.col-5').fadeIn();
    });
    $('.close-menu').click(function () {
        $(this).hide();
        $('.burger-icon .show-menu').show();
        $('.header__nav-section .col-lg-8.col-md-5.col-5').fadeOut();
    });
    // ranking page
    $(function () {
        $('.style-inp input, .style-inp select').styler();
    });
    if ($(window).width() > 766) {
        // fixed line
        (function ($) {
            if ($('.top-dapps-table').hasClass('nofix-thead')) {
                return;
            }
            $.fn.fixMe = function () {
                return this.each(function () {
                    var $this = $(this),
                        $t_fixed;
                    function init() {
                        $this.wrap('<div class="container1" />');
                        $t_fixed = $this.clone();
                        $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
                        resizeFixed();
                    }
                    function resizeFixed() {
                        $t_fixed.find("th").each(function (index) {
                            $(this).css("width", $this.find("th").eq(index).outerWidth() + "px");
                        });
                    }
                    function scrollFixed() {
                        var offset = $(this).scrollTop(),
                            tableOffsetTop = $this.offset().top,
                            tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
                        if (offset < tableOffsetTop || offset > tableOffsetBottom)
                            $t_fixed.hide();
                        else if (offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
                            $t_fixed.show();
                    }
                    $(window).resize(resizeFixed);
                    $(window).scroll(scrollFixed);
                    init();
                });
            };
        })(jQuery);
        $(document).ready(function () {
            $("table").fixMe();
            $(".up").click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 2000);
            });
        });
    }
    //    faq
    $('.fq-arrowblock').click(function () {
        $(this).next().find('.description').slideToggle();
        $(this).find('img').toggleClass('rotate-arrow')
    });


    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    console.log('Your OS: ' + OSName);

    var x = document.getElementsByTagName("BODY")[0];

    if (navigator.appVersion.indexOf("Win") != -1) {
        x.style.background = '#f9f9fa'; //#0f0
    } else {
        x.style.background = '#f9f9fa'; // this will style body for other OS (Linux/Mac)#ccc
    }


    // dapp page
    if ($(window).width() < 576) {
        var dpHeight = $('.main-page-titles.dapp-p').height() + 220;
        $('.main-top-bg.dapp-page').css('height', dpHeight);
    }

    // chart

    if (typeof $('.chart-section').html() != 'undefined') {
    $.getJSON('js/aapl-c.json', function (data) {
        // console.log(data);
        // return;
        // Create the chart
        Highcharts.stockChart('container', {

            rangeSelector: {
                selected: 2
            },

            title: {
                text: 'Users and Volume comparison'
            },

            yAxis: {
                opposite: false,
                title: {
                    text: 'Volume'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            plotOptions: {
                series: {
                    color: '#d262a4',
                    marker: {
                        fillColor: '#000',
                        lineWidth: 2,
                        lineColor: null // inherit from series
                    }
                }
            },
            series: [{
                data: data['data1'],
                color: '#d262a4',
                type: 'area',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#d262a4'],
                        [1, '#fff']
                    ]
                }
            },
            {
                data: data["data2"],
                color: '#80d2f0',
                type: 'area',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#80d2f0'],
                        [1, '#fff']
                    ]
                }
            },
        ]
        });
    });
}















});
$(window).resize(function () {
    if ($(window).width() > 991) {
        $('.header__nav-section .col-lg-8.col-md-5.col-5').show();
    }
});
