function loadSettings() {

    let settings = {};    
    if (localStorage && localStorage[CONFIG.settingsKey]) {
        try {
            settings = JSON.parse(localStorage[CONFIG.settingsKey]);
        } catch(e) {}
    }
    if (!settings) settings={};
    if (!settings.language) {
        var
            language="en",
            userLang = navigator.language || navigator.userLanguage;
        if (userLang) {
            userLang=userLang.split("-")[0].toLowerCase();
            if (CONFIG.languagesList.indexOf(userLang) !== -1) language=userLang;
        }
        settings.language = language;
    }

    return settings;

}

function saveSettings(settings) {
    if (localStorage) localStorage[CONFIG.settingsKey]=JSON.stringify(settings);
}

function getCreditsLine(lang) {
    return LANGUAGES[lang].homepage.notes + " ‐ "+CONFIG.title+" "+CONFIG.version+" ‐ &copy; "+(CONFIG.startYear == CONFIG.startYear ? CONFIG.startYear : CONFIG.startYear + "-" + CONFIG.startYear )+" "+LANGUAGES[lang].homepage.by+" "+CONFIG.author+" ‐ " + LANGUAGES[lang].homepage.sourcesAt +" <a target=\"_blank\" href=\""+CONFIG.sourcesUrl+"\">" + CONFIG.sourcesUrl.replace("https://","") + "</a> ‐ <a href=\"learn.html\">" + LANGUAGES[lang].homepage.learnHowToPlay + "</a>";
}