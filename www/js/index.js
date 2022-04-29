document.getElementById("finalLink").addEventListener("change", onChangeUrl);
function onChangeUrl() {
    handleOpenURL(document.getElementById('finalLink').value)
}
function handleOpenURL(url) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    var clearUrl = url.split('?')[0];
    document.getElementById('finalLink').value = clearUrl;
    // document.getElementById('openLink').setAttribute('href', url);
    var finUrl = document.getElementById('finalLink').value;
    const uri = document.getElementById('finalLink').value;
    let lessSecure = (new URL(uri)).protocol;
    const unk = [
        "aladdinhub.fun",
        "allskinz.xyz",
        "ano-skinspin.xyz",
        "anomalyknifes.xyz",
        "anomalyskin.xyz",
        "anomalyskinz.xyz",
        "anoskinzz.xyz",
        "berrygamble.com",
        "bit-skins.ru",
        "bitknife.xyz",
        "bitskines.ru",
        "challengeme.vip",
        "challengeme.in",
        "challengme.ru",
        "cmepure.com",
        "cmskillcup.com",
        "counterpaid.xyz",
        "counterspin.top",
        "counterstrikegift.xyz",
        "cs-beast.xyz",
        "cs-lucky.xyz",
        "cs-pill.xyz",
        "cs-prizeskins.xyz",
        "cs-prizeskinz.xyz",
        "cs-simpleroll.xyz",
        "cs-skinz.xyz",
        "cs-smoke.xyz",
        "cs-spinz.xyz",
        "cs-victory.xyz",
        "csallskin.xyz",
        "csbuyskins.in",
        "cscoat.eu",
        "csgo-analyst.com",
        "csgo-cash.eu",
        "csgo-steamanalyst.net",
        "csgo-swapskin.com",
        "csgo-trade.net",
        "csgo-up.com",
        "csgobeats.com",
        "csgocase.one",
        "csgocashs.com",
        "csgocheck.ru",
        "csgocompetive.com",
        "csgodetails.info",
        "csgodreamer.com",
        "csgodrs.com",
        "csgoelite.xyz",
        "csgoencup.com",
        "csgoevent.xyz",
        "csgoindex.ru",
        "csgoitemdetails.com",
        "csgoitemsprices.com",
        "csgoko.tk",
        "csgomarble.xyz",
        "csgomarketplace.net",
        "csgomarkets.net",
        "csgoprocupgo.com",
        "csgorcup.com",
        "csgorose.com",
        "csgoroyalskins1.com",
        "csgoskill.ru",
        "csgoskinprices.com",
        "csgoskinsinfo.com",
        "csgoskinsroll.com",
        "csgosteamanalysis.com",
        "csgosteamanalyst.ru",
        "csgoteammate.gq",
        "csgothunby.com",
        "csgotrades.net",
        "csgovip.ru",
        "csgoxgiveaway.ru",
        "csgozone.net.in",
        "csgunskins.xyz",
        "csmoneyskinz.xyz",
        "csmvcecup.com",
        "csprices.in",
        "csskillpro.xyz",
        "csskinz.xyz",
        "cstournament.ru",
        "csxrnoney.com",
        "cybergamearena.ru",
        "d2cups.com",
        "d2faceit.com",
        "deamonbets.ru",
        "demonbets.ru",
        "diablobets.com",
        "doatgiveaway.top",
        "dopeskins.com",
        "dota2fight.ru",
        "dota2fight.net",
        "dota2giveaway.top",
        "dota2giveaways.top",
        "dotafights.vip",
        "dotagiveaway.win",
        "earnskinz.xyz",
        "emeraldbets.ru",
        "esportgaming.ru",
        "event-games4roll.com",
        "exchangeuritems.gq",
        "extraskinscs.xyz",
        "ezwin24.ru",
        "faceiteasyleague.ru",
        "fireopencase.com",
        "free-skins.ru",
        "game4roll.com",
        "gameluck.ru",
        "games-roll.ru",
        "games-roll.ml",
        "games-roll.ga",
        "giveawayskin.com",
        "global-skins.gq",
        "globalcsskins.xyz",
        "globalskins.tk",
        "goldendota.com",
        "goodskins.gq",
        "gosteamanalyst.com",
        "gtakey.ru",
        "hellgiveaway.trade",
        "hltvcsgo.com",
        "hltvgames.net",
        "knifespin.xyz",
        "knifespin.top",
        "knifespins.xyz",
        "knifez-roll.xyz",
        "knifez-win.xyz",
        "league-csgo.com",
        "lehatop-01.ru",
        "loungeztrade.com",
        "lucky-skins.xyz",
        "makson-gta.ru",
        "maxskins.xyz",
        "mvcsgo.com",
        "mvpcup.ru",
        "mvptournament.com",
        "mygames4roll.com",
        "night-skins.com",
        "ownerbets.com",
        "playerskinz.xyz",
        "rangskins.com",
        "roll-skins.ru",
        "roll4knife.xyz",
        "rollknfez.xyz",
        "rollskin-simple.xyz",
        "csgo-market.ru.com",
        "sakuralive.ru.com",
        "csgocupp.ru.com",
        "csgoeasywin.ru.com",
        "csgocybersport.ru.com",
        "csgocheck.ru.com",
        "csgoindex.ru.com",
        "rushbskins.xyz",
        "rushskins.xyz",
        "s1mple-spin.xyz",
        "simple-knifez.xyz",
        "simple-win.xyz",
        "simplegamepro.ru",
        "simpleroll-cs.xyz",
        "simplespinz.xyz",
        "simplewinz.xyz",
        "skin-index.com",
        "skin888trade.com",
        "skincs-spin.xyz",
        "skincs-spin.top",
        "skinmarkets.net",
        "skins-hub.top",
        "skins-info.net",
        "skins-jungle.xyz",
        "skinsboost.ru",
        "skinsdatabse.com",
        "skinsind.com",
        "skinsmind.ru",
        "skinspace.ru",
        "skinsplane.com",
        "skinsplanes.com",
        "skinsplanets.com",
        "skinxmarket.site",
        "skinz-spin.top",
        "skinz-spin.xyz",
        "skinzjar.ru",
        "skinzprize.xyz",
        "skinzspin-cs.xyz",
        "skinzspinz.xyz",
        "spin-games.com",
        "spin4skinzcs.top",
        "spin4skinzcs.xyz",
        "spinforskin.ml",
        "sponsored-simple.xyz",
        "staffstatsgo.com",
        "starrygamble.com",
        "stat-csgo.ru",
        "stats-cs.ru",
        "steam-analyst.ru",
        "steamanalysts.com",
        "steamgamesroll.ru",
        "stewie2k-giveaway-150days.pro",
        "sunnygamble.com",
        "swapskins.live",
        "test-domuin2.com",
        "test-domuin3.ru",
        "test-domuin4.ru",
        "test-domuin5.ru",
        "tournamentt.com",
        "waterbets.ru",
        "ultimateskins.xyz",
        "win-skin.top",
        "win-skin.xyz",
        "winknifespin.xyz",
        "winskin-simple.xyz",
        "winskins.top",
        "wintheskin.xyz"
    ]
    is_unk(url);
    function is_unk(text) {
        document.getElementById('warning').style.display = 'none';
        for (var i = 0; i < unk.length; i++) {
            if (text.includes(unk[i])) {
                document.getElementById('warning').style.display = 'block';
            }
        }
    }
    if (isAsciiOnly(url) == false) {
        document.getElementById('phishing').style.display = 'block';
    }
    function isAsciiOnly(url) {
        for (var i = 0; i < url.length; i++)
            if (url.charCodeAt(i) > 127)
                return false;
        return true;
    }
    if (lessSecure != 'https:') {
        document.getElementById('noHttps').style.display = 'block';
    } else {
        document.getElementById('noHttps').style.display = 'none';
    }
    document.getElementById('httpsFix').addEventListener('click', (e) => {
        let notHttps = document.getElementById('finalLink').value
        document.getElementById('finalLink').value = notHttps.replace('http:', 'https:');
        document.getElementById('noHttps').style.display = 'none';
    })
    document.getElementById('show').addEventListener('click', (e) => {
        var finUrl = document.getElementById('finalLink').value;
        if (finUrl != url) {
            document.getElementById('finalLink').value = url;
        }
    })
    document.getElementById('onDomain').addEventListener('click', (e) => {
        let domain = (new URL(finUrl));
        domain = domain.hostname;
        document.getElementById('finalLink').value = domain;
    })
    document.getElementById('openLink').addEventListener("click", (event) => {
        var finUrl = document.getElementById('finalLink').value;
        window.plugins.socialsharing.share(null, null, null, finUrl)
    })
    span.addEventListener('click', (e) => {
        modal.style.display = "none";
    })
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    })
}
document.getElementById('testLink').addEventListener('click', (e) => {
    let url = 'http://www.example.com/?ref=apps';
    handleOpenURL(url)
})
document.getElementById('cyb3rg0dGh').addEventListener('click', (e) => {
    let url = 'https://github.com/CYB3R-G0D';
    handleOpenURL(url)
})
document.getElementById('issues').addEventListener('click', (e) => {
    let url = 'https://github.com/CYB3R-G0D/Url-checker/issues'
    handleOpenURL(url)
})