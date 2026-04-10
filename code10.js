gdjs.grab_32modsCode = {};
gdjs.grab_32modsCode.localVariables = [];
gdjs.grab_32modsCode.idToCallbackMap = new Map();
gdjs.grab_32modsCode.GDNewSpriteObjects1= [];
gdjs.grab_32modsCode.GDNewSpriteObjects2= [];


gdjs.grab_32modsCode.userFunc0xf60a18 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Create file input
const input = document.createElement("input");
input.type = "file";

// Allow both extensions in file picker
input.accept = ".agm,.aarongamemod";

input.onchange = function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const name = file.name.toLowerCase();

    // Check for BOTH formats
    if (!name.endsWith(".agm") && !name.endsWith(".aarongamemod")) {
        alert("❌ Only .agm or .aarongamemod files are allowed!");
        return;
    }

    // Optional: size limit (5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
        alert("❌ File must be under 5MB!");
        return;
    }

    // Save to GDevelop variable
    runtimeScene.getVariables().get("SelectedFile").setString(file.name);

    alert("✅ mod loaded!!! enjoy - aaron: " + file.name);
};

// Open picker
input.click();
};
gdjs.grab_32modsCode.mapOfGDgdjs_9546grab_959532modsCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.grab_32modsCode.GDNewSpriteObjects1});
gdjs.grab_32modsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.grab_32modsCode.userFunc0xf60a18(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.grab_32modsCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.grab_32modsCode.mapOfGDgdjs_9546grab_959532modsCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title screen2", false);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Loading a Mod", "", 0, 0, "", "", "", "", null);
}
}

}


};

gdjs.grab_32modsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.grab_32modsCode.GDNewSpriteObjects1.length = 0;
gdjs.grab_32modsCode.GDNewSpriteObjects2.length = 0;

gdjs.grab_32modsCode.eventsList0(runtimeScene);
gdjs.grab_32modsCode.GDNewSpriteObjects1.length = 0;
gdjs.grab_32modsCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['grab_32modsCode'] = gdjs.grab_32modsCode;
