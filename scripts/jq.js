$(document).ready(function() {
    console.log("starting our jq example");
    main();
} );

function main() {
        console.log("starting main");
        $('h1').css('background-color','yellow');
        $('h1').addclass("headline main");
}