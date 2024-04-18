$(function(){

    var term = "first";


    // 基本の値入力
    function action () {
        if (!($(this).val() === "")) {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
    }

    // 押したマスの下のマスに値があれば入力
    $('#a1').on('mousedown', function(){

        if (!($(this).val() === "") || $('#b1').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }

    })

    $('#a2').on('mousedown', function(){

        if (!($(this).val() === "") || $('#b2').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#a3').on('mousedown', function(){

        if (!($(this).val() === "") || $('#b3').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#a4').on('mousedown', function(){

        if (!($(this).val() === "") || $('#b4').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#a5').on('mousedown', function(){

        if (!($(this).val() === "") || $('#b5').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#a6').on('mousedown', function(){

        if (!($(this).val() === "") || $('#b6').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#a7').on('mousedown', function(){

        if (!($(this).val() === "") || $('#b7').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#b1').on('mousedown', function(){

        if (!($(this).val() === "") || $('#c1').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#b2').on('mousedown', function(){

        if (!($(this).val() === "") || $('#c2').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#b3').on('mousedown', function(){

        if (!($(this).val() === "") || $('#c3').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#b4').on('mousedown', function(){

        if (!($(this).val() === "") || $('#c4').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#b5').on('mousedown', function(){

        if (!($(this).val() === "") || $('#c5').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#b6').on('mousedown', function(){

        if (!($(this).val() === "") || $('#c6').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#b7').on('mousedown', function(){

        if (!($(this).val() === "") || $('#c7').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#c1').on('mousedown', function(){

        if (!($(this).val() === "") || $('#d1').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#c2').on('mousedown', function(){

        if (!($(this).val() === "") || $('#d2').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#c3').on('mousedown', function(){

        if (!($(this).val() === "") || $('#d3').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#c4').on('mousedown', function(){

        if (!($(this).val() === "") || $('#d4').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#c5').on('mousedown', function(){

        if (!($(this).val() === "") || $('#d5').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#c6').on('mousedown', function(){

        if (!($(this).val() === "") || $('#d6').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#c7').on('mousedown', function(){

        if (!($(this).val() === "") || $('#d7').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#d1').on('mousedown', function(){

        if (!($(this).val() === "") || $('#e1').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#d2').on('mousedown', function(){

        if (!($(this).val() === "") || $('#e2').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#d3').on('mousedown', function(){

        if (!($(this).val() === "") || $('#e3').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#d4').on('mousedown', function(){

        if (!($(this).val() === "") || $('#e4').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#d5').on('mousedown', function(){

        if (!($(this).val() === "") || $('#e5').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#d6').on('mousedown', function(){

        if (!($(this).val() === "") || $('#e6').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#d7').on('mousedown', function(){

        if (!($(this).val() === "") || $('#e7').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#e1').on('mousedown', function(){

        if (!($(this).val() === "") || $('#f1').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#e2').on('mousedown', function(){

        if (!($(this).val() === "") || $('#f2').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#e3').on('mousedown', function(){

        if (!($(this).val() === "") || $('#f3').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#e4').on('mousedown', function(){

        if (!($(this).val() === "") || $('#f4').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#e5').on('mousedown', function(){

        if (!($(this).val() === "") || $('#f5').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#e6').on('mousedown', function(){

        if (!($(this).val() === "") || $('#f6').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    $('#e7').on('mousedown', function(){

        if (!($(this).val() === "") || $('#f7').val() === "") {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.turn').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.turn').text("◯");
            term = "first";
        }
        
    })

    // 一番下の列は無条件に入力
    $('#f1').on('mousedown', action);

    $('#f2').on('mousedown', action);

    $('#f3').on('mousedown', action);

    $('#f4').on('mousedown', action);

    $('#f5').on('mousedown', action);

    $('#f6').on('mousedown', action);

    $('#f7').on('mousedown', action);

    // mouseup時に判定
    $('#a1, #a2, #a3, #a4, #a5, #a6, #a7, #b1, #b2, #b3, #b4, #b5, #b6, #b7,'
    + '#c1, #c2, #c3, #c4, #c5, #c6, #c7, #d1, #d2, #d3, #d4, #d5, #d6, #d7,'
    + '#e1, #e2, #e3, #e4, #e5, #e6, #e7, #f1, #f2, #f3, #f4, #f5, #f6, #f7').on('mouseup', function(){

        var a1 = $('#a1').val();
        var a2 = $('#a2').val();
        var a3 = $('#a3').val();
        var a4 = $('#a4').val();
        var a5 = $('#a5').val();
        var a6 = $('#a6').val();
        var a7 = $('#a7').val();
        var b1 = $('#b1').val();
        var b2 = $('#b2').val();
        var b3 = $('#b3').val();
        var b4 = $('#b4').val();
        var b5 = $('#b5').val();
        var b6 = $('#b6').val();
        var b7 = $('#b7').val();
        var c1 = $('#c1').val();
        var c2 = $('#c2').val();
        var c3 = $('#c3').val();
        var c4 = $('#c4').val();
        var c5 = $('#c5').val();
        var c6 = $('#c6').val();
        var c7 = $('#c7').val();
        var d1 = $('#d1').val();
        var d2 = $('#d2').val();
        var d3 = $('#d3').val();
        var d4 = $('#d4').val();
        var d5 = $('#d5').val();
        var d6 = $('#d6').val();
        var d7 = $('#d7').val();
        var e1 = $('#e1').val();
        var e2 = $('#e2').val();
        var e3 = $('#e3').val();
        var e4 = $('#e4').val();
        var e5 = $('#e5').val();
        var e6 = $('#e6').val();
        var e7 = $('#e7').val();
        var f1 = $('#f1').val();
        var f2 = $('#f2').val();
        var f3 = $('#f3').val();
        var f4 = $('#f4').val();
        var f5 = $('#f5').val();
        var f6 = $('#f6').val();
        var f7 = $('#f7').val();

        if (a1 === "◯" && a2 === "◯" && a3 === "◯" && a4 === "◯" || a2 === "◯" && a3 === "◯" && a4 === "◯" && a5 === "◯" || a3 === "◯" && a4 === "◯" && a5 === "◯" && a6 === "◯" || a4 === "◯" && a5 === "◯" && a6 === "◯" && a7 === "◯" || 
            b1 === "◯" && b2 === "◯" && b3 === "◯" && b4 === "◯" || b2 === "◯" && b3 === "◯" && b4 === "◯" && b5 === "◯" || b3 === "◯" && b4 === "◯" && b5 === "◯" && b6 === "◯" || b4 === "◯" && b5 === "◯" && b6 === "◯" && b7 === "◯" ||
            c1 === "◯" && c2 === "◯" && c3 === "◯" && c4 === "◯" || c2 === "◯" && c3 === "◯" && c4 === "◯" && c5 === "◯" || c3 === "◯" && c4 === "◯" && c5 === "◯" && c6 === "◯" || c4 === "◯" && c5 === "◯" && c6 === "◯" && c7 === "◯" ||
            d1 === "◯" && d2 === "◯" && d3 === "◯" && d4 === "◯" || d2 === "◯" && d3 === "◯" && d4 === "◯" && d5 === "◯" || d3 === "◯" && d4 === "◯" && d5 === "◯" && d6 === "◯" || d4 === "◯" && d5 === "◯" && d6 === "◯" && d7 === "◯" ||
            e1 === "◯" && e2 === "◯" && e3 === "◯" && e4 === "◯" || e2 === "◯" && e3 === "◯" && e4 === "◯" && e5 === "◯" || e3 === "◯" && e4 === "◯" && e5 === "◯" && e6 === "◯" || e4 === "◯" && e5 === "◯" && e6 === "◯" && e7 === "◯" ||
            f1 === "◯" && f2 === "◯" && f3 === "◯" && f4 === "◯" || f2 === "◯" && f3 === "◯" && f4 === "◯" && f5 === "◯" || f3 === "◯" && f4 === "◯" && f5 === "◯" && f6 === "◯" || f4 === "◯" && f5 === "◯" && f6 === "◯" && f7 === "◯" ||
            a1 === "◯" && b1 === "◯" && c1 === "◯" && d1 === "◯" || b1 === "◯" && c1 === "◯" && d1 === "◯" && e1 === "◯" || c1 === "◯" && d1 === "◯" && e1 === "◯" && f1 === "◯" ||
            a2 === "◯" && b2 === "◯" && c2 === "◯" && d2 === "◯" || b2 === "◯" && c2 === "◯" && d2 === "◯" && e2 === "◯" || c2 === "◯" && d2 === "◯" && e2 === "◯" && f2 === "◯" ||
            a3 === "◯" && b3 === "◯" && c3 === "◯" && d3 === "◯" || b3 === "◯" && c3 === "◯" && d3 === "◯" && e3 === "◯" || c3 === "◯" && d3 === "◯" && e3 === "◯" && f3 === "◯" ||
            a4 === "◯" && b4 === "◯" && c4 === "◯" && d4 === "◯" || b4 === "◯" && c4 === "◯" && d4 === "◯" && e4 === "◯" || c4 === "◯" && d4 === "◯" && e4 === "◯" && f4 === "◯" ||
            a5 === "◯" && b5 === "◯" && c5 === "◯" && d5 === "◯" || b5 === "◯" && c5 === "◯" && d5 === "◯" && e5 === "◯" || c5 === "◯" && d5 === "◯" && e5 === "◯" && f5 === "◯" ||
            a6 === "◯" && b6 === "◯" && c6 === "◯" && d6 === "◯" || b6 === "◯" && c6 === "◯" && d6 === "◯" && e6 === "◯" || c6 === "◯" && d6 === "◯" && e6 === "◯" && f6 === "◯" ||
            a7 === "◯" && b7 === "◯" && c7 === "◯" && d7 === "◯" || b7 === "◯" && c7 === "◯" && d7 === "◯" && e7 === "◯" || c7 === "◯" && d7 === "◯" && e7 === "◯" && f7 === "◯" ||

            c1 === "◯" && d2 === "◯" && e3 === "◯" && f4 === "◯" || b1 === "◯" && c2 === "◯" && d3 === "◯" && e4 === "◯" || c2 === "◯" && d3 === "◯" && e4 === "◯" && f5 === "◯" || a1 === "◯" && b2 === "◯" && c3 === "◯" && d4 === "◯" || 
            b2 === "◯" && c3 === "◯" && d4 === "◯" && f5 === "◯" || c3 === "◯" && d4 === "◯" && e5 === "◯" && f6 === "◯" || a2 === "◯" && b3 === "◯" && c4 === "◯" && d5 === "◯" || b3 === "◯" && c4 === "◯" && d5 === "◯" && e6 === "◯" ||
            c4 === "◯" && d5 === "◯" && e6 === "◯" && f7 === "◯" || a3 === "◯" && b4 === "◯" && c5 === "◯" && d6 === "◯" || b4 === "◯" && c5 === "◯" && d6 === "◯" && e7 === "◯" || a4 === "◯" && b5 === "◯" && c6 === "◯" && d7 === "◯" ||

            a4 === "◯" && b3 === "◯" && c2 === "◯" && d1 === "◯" || a5 === "◯" && b4 === "◯" && c3 === "◯" && d2 === "◯" || b4 === "◯" && c3 === "◯" && d2 === "◯" && e1 === "◯" || a6 === "◯" && b5 === "◯" && c4 === "◯" && d3 === "◯" ||
            b5 === "◯" && c4 === "◯" && d3 === "◯" && e2 === "◯" || c4 === "◯" && d3 === "◯" && e2 === "◯" && f1 === "◯" || a7 === "◯" && b6 === "◯" && c5 === "◯" && d4 === "◯" || b6 === "◯" && c5 === "◯" && d4 === "◯" && e3 === "◯" ||
            c5 === "◯" && d4 === "◯" && e3 === "◯" && f2 === "◯" || b7 === "◯" && c6 === "◯" && d5 === "◯" && e4 === "◯" || c6 === "◯" && d5 === "◯" && e4 === "◯" && f3 === "◯" || c7 === "◯" && d6 === "◯" && e5 === "◯" && f4 === "◯"
        ) {
            $('.judge').text("Winner is ◯ !");
            $('.turn').text("ーーー");
            $('.cell').prop('disabled', true);
            $('button').fadeIn(500);
        }

        if (a1 === "✕" && a2 === "✕" && a3 === "✕" && a4 === "✕" || a2 === "✕" && a3 === "✕" && a4 === "✕" && a5 === "✕" || a3 === "✕" && a4 === "✕" && a5 === "✕" && a6 === "✕" || a4 === "✕" && a5 === "✕" && a6 === "✕" && a7 === "✕" || 
            b1 === "✕" && b2 === "✕" && b3 === "✕" && b4 === "✕" || b2 === "✕" && b3 === "✕" && b4 === "✕" && b5 === "✕" || b3 === "✕" && b4 === "✕" && b5 === "✕" && b6 === "✕" || b4 === "✕" && b5 === "✕" && b6 === "✕" && b7 === "✕" ||
            c1 === "✕" && c2 === "✕" && c3 === "✕" && c4 === "✕" || c2 === "✕" && c3 === "✕" && c4 === "✕" && c5 === "✕" || c3 === "✕" && c4 === "✕" && c5 === "✕" && c6 === "✕" || c4 === "✕" && c5 === "✕" && c6 === "✕" && c7 === "✕" ||
            d1 === "✕" && d2 === "✕" && d3 === "✕" && d4 === "✕" || d2 === "✕" && d3 === "✕" && d4 === "✕" && d5 === "✕" || d3 === "✕" && d4 === "✕" && d5 === "✕" && d6 === "✕" || d4 === "✕" && d5 === "✕" && d6 === "✕" && d7 === "✕" ||
            e1 === "✕" && e2 === "✕" && e3 === "✕" && e4 === "✕" || e2 === "✕" && e3 === "✕" && e4 === "✕" && e5 === "✕" || e3 === "✕" && e4 === "✕" && e5 === "✕" && e6 === "✕" || e4 === "✕" && e5 === "✕" && e6 === "✕" && e7 === "✕" ||
            f1 === "✕" && f2 === "✕" && f3 === "✕" && f4 === "✕" || f2 === "✕" && f3 === "✕" && f4 === "✕" && f5 === "✕" || f3 === "✕" && f4 === "✕" && f5 === "✕" && f6 === "✕" || f4 === "✕" && f5 === "✕" && f6 === "✕" && f7 === "✕" ||
            a1 === "✕" && b1 === "✕" && c1 === "✕" && d1 === "✕" || b1 === "✕" && c1 === "✕" && d1 === "✕" && e1 === "✕" || c1 === "✕" && d1 === "✕" && e1 === "✕" && f1 === "✕" ||
            a2 === "✕" && b2 === "✕" && c2 === "✕" && d2 === "✕" || b2 === "✕" && c2 === "✕" && d2 === "✕" && e2 === "✕" || c2 === "✕" && d2 === "✕" && e2 === "✕" && f2 === "✕" ||
            a3 === "✕" && b3 === "✕" && c3 === "✕" && d3 === "✕" || b3 === "✕" && c3 === "✕" && d3 === "✕" && e3 === "✕" || c3 === "✕" && d3 === "✕" && e3 === "✕" && f3 === "✕" ||
            a4 === "✕" && b4 === "✕" && c4 === "✕" && d4 === "✕" || b4 === "✕" && c4 === "✕" && d4 === "✕" && e4 === "✕" || c4 === "✕" && d4 === "✕" && e4 === "✕" && f4 === "✕" ||
            a5 === "✕" && b5 === "✕" && c5 === "✕" && d5 === "✕" || b5 === "✕" && c5 === "✕" && d5 === "✕" && e5 === "✕" || c5 === "✕" && d5 === "✕" && e5 === "✕" && f5 === "✕" ||
            a6 === "✕" && b6 === "✕" && c6 === "✕" && d6 === "✕" || b6 === "✕" && c6 === "✕" && d6 === "✕" && e6 === "✕" || c6 === "✕" && d6 === "✕" && e6 === "✕" && f6 === "✕" ||
            a7 === "✕" && b7 === "✕" && c7 === "✕" && d7 === "✕" || b7 === "✕" && c7 === "✕" && d7 === "✕" && e7 === "✕" || c7 === "✕" && d7 === "✕" && e7 === "✕" && f7 === "✕" ||

            c1 === "✕" && d2 === "✕" && e3 === "✕" && f4 === "✕" || b1 === "✕" && c2 === "✕" && d3 === "✕" && e4 === "✕" || c2 === "✕" && d3 === "✕" && e4 === "✕" && f5 === "✕" || a1 === "✕" && b2 === "✕" && c3 === "✕" && d4 === "✕" || 
            b2 === "✕" && c3 === "✕" && d4 === "✕" && f5 === "✕" || c3 === "✕" && d4 === "✕" && e5 === "✕" && f6 === "✕" || a2 === "✕" && b3 === "✕" && c4 === "✕" && d5 === "✕" || b3 === "✕" && c4 === "✕" && d5 === "✕" && e6 === "✕" ||
            c4 === "✕" && d5 === "✕" && e6 === "✕" && f7 === "✕" || a3 === "✕" && b4 === "✕" && c5 === "✕" && d6 === "✕" || b4 === "✕" && c5 === "✕" && d6 === "✕" && e7 === "✕" || a4 === "✕" && b5 === "✕" && c6 === "✕" && d7 === "✕" ||

            a4 === "✕" && b3 === "✕" && c2 === "✕" && d1 === "✕" || a5 === "✕" && b4 === "✕" && c3 === "✕" && d2 === "✕" || b4 === "✕" && c3 === "✕" && d2 === "✕" && e1 === "✕" || a6 === "✕" && b5 === "✕" && c4 === "✕" && d3 === "✕" ||
            b5 === "✕" && c4 === "✕" && d3 === "✕" && e2 === "✕" || c4 === "✕" && d3 === "✕" && e2 === "✕" && f1 === "✕" || a7 === "✕" && b6 === "✕" && c5 === "✕" && d4 === "✕" || b6 === "✕" && c5 === "✕" && d4 === "✕" && e3 === "✕" ||
            c5 === "✕" && d4 === "✕" && e3 === "✕" && f2 === "✕" || b7 === "✕" && c6 === "✕" && d5 === "✕" && e4 === "✕" || c6 === "✕" && d5 === "✕" && e4 === "✕" && f3 === "✕" || c7 === "✕" && d6 === "✕" && e5 === "✕" && f4 === "✕"
        ) {
            $('.judge').text("Winner is ✕ !");
            $('.turn').text("ーーー");
            $('.cell').prop('disabled', true);
            $('button').fadeIn(500);
        }

        if (!(a1 === "") && !(a2 === "") && !(a3 === "") && !(a4 === "") && !(a5 === "") && !(a6 === "") && !(a7 === "") &&
            !(b1 === "") && !(b2 === "") && !(b3 === "") && !(b4 === "") && !(b5 === "") && !(b6 === "") && !(b7 === "") &&
            !(c1 === "") && !(c2 === "") && !(c3 === "") && !(c4 === "") && !(c5 === "") && !(c6 === "") && !(c7 === "") &&
            !(d1 === "") && !(d2 === "") && !(d3 === "") && !(d4 === "") && !(d5 === "") && !(d6 === "") && !(d7 === "") &&
            !(e1 === "") && !(e2 === "") && !(e3 === "") && !(e4 === "") && !(e5 === "") && !(e6 === "") && !(e7 === "") &&
            !(f1 === "") && !(f2 === "") && !(f3 === "") && !(f4 === "") && !(f5 === "") && !(f6 === "") && !(f7 === "")
        ) {
            $('.judge').text("Draw");
            $('.turn').text("ーーー");
            $('.cell').prop('disabled', true);
            $('button').fadeIn(500);
        }

    })

    // リロードボタンを押したら更新
    $('button').on('click', function(){
        location.reload();
    });

})

