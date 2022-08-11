let hiddenScrollElems = [];
let tlIncrement = 0;
let tlLength = 0;

$(function() {
    $(".reveal").each(function() {
        $(this).css({
            transform: "translate(0px, 0px)",
            opacity: 1
        })
    });

    $("#new").addClass("grow-after-800");
    $("#storefront").addClass("grow-after-1800");
    $("#project").addClass("grow-after-2800");
    
    hiddenScrollElems = $(".reveal-scroll");

    // Give timeline blocks alternating grid placements
    let i = 1;
    $(".tl-block").each(function() {
        i += 1;
        let row = i;
        let col = i % 2 + 1;
        let justSelf = col - 1 ? "end" : "start";
        let borderClass = col - 1 ? "timeline-b-left": "timeline-b-right";

        $(this).css({
            "grid-row": row,
            "grid-column": col,
            "justify-self": justSelf
        }).addClass(borderClass);
    });

    tlIncrement = 100 / $(".tl-block").length;

    setTimeout(function() {
        $("#reveal-wrap").css({
            display: "block"
        })
    }, 3000);
});

function expand(elem) {
    let id = $(elem).attr("id");
    $("#pic-" + id).toggleClass("show-content");
    $("#icon-" + id).toggleClass("gg-chevron-up").toggleClass("gg-chevron-down");
}

$(document).scroll(function() {
    let height = $(window).height();
    let scrollTop = $(window).scrollTop();
    let remainingElems = [];

    for (let i = 0; i < hiddenScrollElems.length; i++)
    {
        let elem = $(hiddenScrollElems[i]);

        // If scrolled to visible height
        if (height + scrollTop > elem.offset().top + elem.height() / 2)
        {
            // Reveal it
            elem.css({
                transform: "translate(0px, 0px)",
                opacity: 1
            });

            // Show underline
            if (elem.hasClass("underline"))
            {
                elem.addClass("grow-after-800");
            }

            // Show borders if a timeline block
            if (elem.hasClass("tl-block")) {
                elem.addClass("tl-b-reveal");

                tlLength += tlIncrement;

                // Grow timeline
                $("#line").css({
                    height: tlLength + "%"
                });
            }

        } else {
            // If not visible, keep checking it
            remainingElems.push(elem);
        }
    }

    hiddenScrollElems = remainingElems;
})
