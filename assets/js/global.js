// Runs on page load
$(document).ready(function() {
    // Dark mode toggler
    $("#themeSwitch").prop("checked", darkmode.inDarkMode);
    $("#themeSwitch").click(function(event){
        darkmode.toggleDarkMode();
    });
});

function copyToClipboard(value)
{
    // Show copy notification
    var toast = bootstrap.Toast.getOrCreateInstance($('#textToast'));
    toast.show()

    // Copy the text
    navigator.clipboard.writeText(value);
}