gdjs.Title_32screen2Code = {};
gdjs.Title_32screen2Code.localVariables = [];
gdjs.Title_32screen2Code.idToCallbackMap = new Map();
gdjs.Title_32screen2Code.GDNewSpriteObjects1= [];
gdjs.Title_32screen2Code.GDNewSpriteObjects2= [];
gdjs.Title_32screen2Code.GDNewSprite2Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite2Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite3Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite3Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite4Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite4Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite5Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite5Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite6Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite6Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite7Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite7Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite8Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite8Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite9Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite9Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite10Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite10Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite11Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite11Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite12Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite12Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite13Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite13Objects2= [];
gdjs.Title_32screen2Code.GDNewSprite14Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite14Objects2= [];
gdjs.Title_32screen2Code.GDNewTextObjects1= [];
gdjs.Title_32screen2Code.GDNewTextObjects2= [];
gdjs.Title_32screen2Code.GDNewSprite15Objects1= [];
gdjs.Title_32screen2Code.GDNewSprite15Objects2= [];
gdjs.Title_32screen2Code.GDNewTextInputObjects1= [];
gdjs.Title_32screen2Code.GDNewTextInputObjects2= [];
gdjs.Title_32screen2Code.GDNewText2Objects1= [];
gdjs.Title_32screen2Code.GDNewText2Objects2= [];
gdjs.Title_32screen2Code.GDNewText3Objects1= [];
gdjs.Title_32screen2Code.GDNewText3Objects2= [];


gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Title_32screen2Code.GDNewSprite2Objects1});
gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Title_32screen2Code.GDNewSprite3Objects1});
gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Title_32screen2Code.GDNewSprite4Objects1});
gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.Title_32screen2Code.GDNewSprite7Objects1});
gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite14Objects1Objects = Hashtable.newFrom({"NewSprite14": gdjs.Title_32screen2Code.GDNewSprite14Objects1});
gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite12Objects1Objects = Hashtable.newFrom({"NewSprite12": gdjs.Title_32screen2Code.GDNewSprite12Objects1});
gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite13Objects1Objects = Hashtable.newFrom({"NewSprite13": gdjs.Title_32screen2Code.GDNewSprite13Objects1});
gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.Title_32screen2Code.GDNewTextObjects1});
gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite15Objects1Objects = Hashtable.newFrom({"NewSprite15": gdjs.Title_32screen2Code.GDNewSprite15Objects1});
gdjs.Title_32screen2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Title_32screen2Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Act 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Title_32screen2Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.saveState.restoreGameSaveStateFromVariable(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0), "player", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Title_32screen2Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wip ss 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Title_32screen2Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "SRB2 OST - Record Attack.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite14"), gdjs.Title_32screen2Code.GDNewSprite14Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite14Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite12"), gdjs.Title_32screen2Code.GDNewSprite12Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite12Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title screen3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite13"), gdjs.Title_32screen2Code.GDNewSprite13Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite13Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Video.Guru_20260125_115544246.mp3", true, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Act 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Title_32screen2Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "grab mods", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite15"), gdjs.Title_32screen2Code.GDNewSprite15Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screen2Code.mapOfGDgdjs_9546Title_959532screen2Code_9546GDNewSprite15Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sonic Robo Blast 2 (SRB2) - Mario Koopa Blast ZonePipe Towers Zone (Overworld) Restored.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Upipe", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.Title_32screen2Code.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32screen2Code.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screen2Code.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "1" ) {
        isConditionTrue_0 = true;
        gdjs.Title_32screen2Code.GDNewTextInputObjects1[k] = gdjs.Title_32screen2Code.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.Title_32screen2Code.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Act 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.Title_32screen2Code.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32screen2Code.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screen2Code.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "2" ) {
        isConditionTrue_0 = true;
        gdjs.Title_32screen2Code.GDNewTextInputObjects1[k] = gdjs.Title_32screen2Code.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.Title_32screen2Code.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Act 2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.Title_32screen2Code.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32screen2Code.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screen2Code.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "3" ) {
        isConditionTrue_0 = true;
        gdjs.Title_32screen2Code.GDNewTextInputObjects1[k] = gdjs.Title_32screen2Code.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.Title_32screen2Code.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wip ss 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.Title_32screen2Code.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32screen2Code.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screen2Code.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "4" ) {
        isConditionTrue_0 = true;
        gdjs.Title_32screen2Code.GDNewTextInputObjects1[k] = gdjs.Title_32screen2Code.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.Title_32screen2Code.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Upipe", false);
}
}

}


};

gdjs.Title_32screen2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32screen2Code.GDNewSpriteObjects1.length = 0;
gdjs.Title_32screen2Code.GDNewSpriteObjects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite2Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite2Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite3Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite3Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite4Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite4Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite5Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite5Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite6Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite6Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite7Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite7Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite8Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite8Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite9Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite9Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite10Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite10Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite11Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite11Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite12Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite12Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite13Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite13Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite14Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite14Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewTextObjects1.length = 0;
gdjs.Title_32screen2Code.GDNewTextObjects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite15Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite15Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewTextInputObjects1.length = 0;
gdjs.Title_32screen2Code.GDNewTextInputObjects2.length = 0;
gdjs.Title_32screen2Code.GDNewText2Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewText2Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewText3Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewText3Objects2.length = 0;

gdjs.Title_32screen2Code.eventsList0(runtimeScene);
gdjs.Title_32screen2Code.GDNewSpriteObjects1.length = 0;
gdjs.Title_32screen2Code.GDNewSpriteObjects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite2Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite2Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite3Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite3Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite4Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite4Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite5Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite5Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite6Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite6Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite7Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite7Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite8Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite8Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite9Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite9Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite10Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite10Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite11Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite11Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite12Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite12Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite13Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite13Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite14Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite14Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewTextObjects1.length = 0;
gdjs.Title_32screen2Code.GDNewTextObjects2.length = 0;
gdjs.Title_32screen2Code.GDNewSprite15Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewSprite15Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewTextInputObjects1.length = 0;
gdjs.Title_32screen2Code.GDNewTextInputObjects2.length = 0;
gdjs.Title_32screen2Code.GDNewText2Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewText2Objects2.length = 0;
gdjs.Title_32screen2Code.GDNewText3Objects1.length = 0;
gdjs.Title_32screen2Code.GDNewText3Objects2.length = 0;


return;

}

gdjs['Title_32screen2Code'] = gdjs.Title_32screen2Code;
