const saveBtn =
document.getElementById(
    "saveSettingsBtn"
);

function saveSettings(){

    const settingsData = {

        brandName:
        document.getElementById(
            "brandName"
        ).value,

        tagline:
        document.getElementById(
            "tagline"
        ).value,

        phase:
        document.getElementById(
            "phase"
        ).value,

        launchDate:
        document.getElementById(
            "launchDate"
        ).value,

        currency:
        document.getElementById(
            "currency"
        ).value,

        margin:
        document.getElementById(
            "margin"
        ).value,

        vat:
        document.getElementById(
            "vat"
        ).value,

        primarySupplier:
        document.getElementById(
            "primarySupplier"
        ).value,

        contentFocus:
        document.getElementById(
            "contentFocus"
        ).value,

        dropName:
        document.getElementById(
            "dropName"
        ).value,

        dropStatus:
        document.getElementById(
            "dropStatus"
        ).value

    };

    localStorage.setItem(

        "meticSettings",

        JSON.stringify(
            settingsData
        )

    );

    alert(
        "Settings Saved 🚀"
    );

}

if(saveBtn){

    saveBtn.addEventListener(
        "click",
        saveSettings
    );

}

const savedSettings =

JSON.parse(
    localStorage.getItem(
        "meticSettings"
    )
) || {};

if(
    document.getElementById(
        "launchDate"
    )
){

    document.getElementById(
        "launchDate"
    ).value =

    savedSettings.launchDate
    || "";

}

if(savedSettings.brandName){

    document.getElementById(
        "brandName"
    ).value =
    savedSettings.brandName;

}

if(savedSettings.tagline){

    document.getElementById(
        "tagline"
    ).value =
    savedSettings.tagline;

}

if(savedSettings.phase){

    document.getElementById(
        "phase"
    ).value =
    savedSettings.phase;

}

if(savedSettings.currency){

    document.getElementById(
        "currency"
    ).value =
    savedSettings.currency;

}

if(savedSettings.margin){

    document.getElementById(
        "margin"
    ).value =
    savedSettings.margin;

}

if(savedSettings.vat){

    document.getElementById(
        "vat"
    ).value =
    savedSettings.vat;

}

if(savedSettings.primarySupplier){

    document.getElementById(
        "primarySupplier"
    ).value =
    savedSettings.primarySupplier;

}

if(savedSettings.contentFocus){

    document.getElementById(
        "contentFocus"
    ).value =
    savedSettings.contentFocus;

}

if(savedSettings.dropName){

    document.getElementById(
        "dropName"
    ).value =
    savedSettings.dropName;

}

if(savedSettings.dropStatus){

    document.getElementById(
        "dropStatus"
    ).value =
    savedSettings.dropStatus;

}