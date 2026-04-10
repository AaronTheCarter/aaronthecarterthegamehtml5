gdjs.Title_32screenCode = {};
gdjs.Title_32screenCode.localVariables = [];
gdjs.Title_32screenCode.idToCallbackMap = new Map();
gdjs.Title_32screenCode.GDNewSpriteObjects1= [];
gdjs.Title_32screenCode.GDNewSpriteObjects2= [];
gdjs.Title_32screenCode.GDNewSprite2Objects1= [];
gdjs.Title_32screenCode.GDNewSprite2Objects2= [];
gdjs.Title_32screenCode.GDNewSprite3Objects1= [];
gdjs.Title_32screenCode.GDNewSprite3Objects2= [];
gdjs.Title_32screenCode.GDNewSprite4Objects1= [];
gdjs.Title_32screenCode.GDNewSprite4Objects2= [];
gdjs.Title_32screenCode.GDNewSprite5Objects1= [];
gdjs.Title_32screenCode.GDNewSprite5Objects2= [];
gdjs.Title_32screenCode.GDNewSprite6Objects1= [];
gdjs.Title_32screenCode.GDNewSprite6Objects2= [];
gdjs.Title_32screenCode.GDNewSprite7Objects1= [];
gdjs.Title_32screenCode.GDNewSprite7Objects2= [];
gdjs.Title_32screenCode.GDNewSprite8Objects1= [];
gdjs.Title_32screenCode.GDNewSprite8Objects2= [];


gdjs.Title_32screenCode.mapOfGDgdjs_9546Title_959532screenCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Title_32screenCode.GDNewSprite2Objects1});
gdjs.Title_32screenCode.mapOfGDgdjs_9546Title_959532screenCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Title_32screenCode.GDNewSprite3Objects1});
gdjs.Title_32screenCode.mapOfGDgdjs_9546Title_959532screenCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Title_32screenCode.GDNewSprite4Objects1});
gdjs.Title_32screenCode.mapOfGDgdjs_9546Title_959532screenCode_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.Title_32screenCode.GDNewSprite7Objects1});
gdjs.Title_32screenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Title_32screenCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screenCode.mapOfGDgdjs_9546Title_959532screenCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Act 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Title_32screenCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screenCode.mapOfGDgdjs_9546Title_959532screenCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.saveState.restoreGameSaveStateFromVariable(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0), "player", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Title_32screenCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screenCode.mapOfGDgdjs_9546Title_959532screenCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wip ss 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Title_32screenCode.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32screenCode.mapOfGDgdjs_9546Title_959532screenCode_9546GDNewSprite7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title screen2", false);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Menu Browsing", "", 0, 0, "", "", "", "", null);
}
}

}


};

gdjs.Title_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.Title_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite2Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite2Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite3Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite3Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite4Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite4Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite5Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite5Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite6Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite6Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite7Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite7Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite8Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite8Objects2.length = 0;

gdjs.Title_32screenCode.eventsList0(runtimeScene);
gdjs.Title_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.Title_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite2Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite2Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite3Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite3Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite4Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite4Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite5Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite5Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite6Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite6Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite7Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite7Objects2.length = 0;
gdjs.Title_32screenCode.GDNewSprite8Objects1.length = 0;
gdjs.Title_32screenCode.GDNewSprite8Objects2.length = 0;


return;

}

gdjs['Title_32screenCode'] = gdjs.Title_32screenCode;
