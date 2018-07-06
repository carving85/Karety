javascript:
    $(document).ready(function() {
        var odstep = 150;
        var lastDate;
        $("#incomings_table td:nth-child(6)").each(function(index) {
            var contentTd = $(this).html();
            var regExp = /\d{2}[:]\d{2}[:]\d{2}[:]/;
            var matches = regExp.exec(contentTd)[0];
            var sDate = matches + $(this).find("span").text();
            var actDate = new Date("1/1/1900 " + sDate);
            if (lastDate - actDate == odstep || lastDate - actDate == -odstep) {
                $(this).siblings().css("background-color", "#e04c4c");
                $("#incomings_table td:nth-child(6)").eq(index - 1).siblings().css("background-color", "#e04c4c");
            }
            lastDate = actDate;

        })

    })