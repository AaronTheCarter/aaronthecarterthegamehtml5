gdjs.CutsenseCode = {};
gdjs.CutsenseCode.localVariables = [];
gdjs.CutsenseCode.idToCallbackMap = new Map();
gdjs.CutsenseCode.GDNewSpriteObjects1= [];
gdjs.CutsenseCode.GDNewSpriteObjects2= [];
gdjs.CutsenseCode.GDNewSprite2Objects1= [];
gdjs.CutsenseCode.GDNewSprite2Objects2= [];


gdjs.CutsenseCode.asyncCallback19100972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CutsenseCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Sonic Robo Blast 2 - Title Screen.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title screen", false);
}
gdjs.CutsenseCode.localVariables.length = 0;
}
gdjs.CutsenseCode.idToCallbackMap.set(19100972, gdjs.CutsenseCode.asyncCallback19100972);
gdjs.CutsenseCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CutsenseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(32), (runtimeScene) => (gdjs.CutsenseCode.asyncCallback19100972(runtimeScene, asyncObjectsList)), 19100972, asyncObjectsList);
}
}

}


};gdjs.CutsenseCode.mapOfGDgdjs_9546CutsenseCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.CutsenseCode.GDNewSprite2Objects1});
gdjs.CutsenseCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.CutsenseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CutsenseCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CutsenseCode.mapOfGDgdjs_9546CutsenseCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sonic Robo Blast 2 - Title Screen.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title screen", false);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "watching opening cutsense", "", 0, 0, "", "", "", "", null);
}
}

}


};

gdjs.CutsenseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CutsenseCode.GDNewSpriteObjects1.length = 0;
gdjs.CutsenseCode.GDNewSpriteObjects2.length = 0;
gdjs.CutsenseCode.GDNewSprite2Objects1.length = 0;
gdjs.CutsenseCode.GDNewSprite2Objects2.length = 0;

gdjs.CutsenseCode.eventsList1(runtimeScene);
gdjs.CutsenseCode.GDNewSpriteObjects1.length = 0;
gdjs.CutsenseCode.GDNewSpriteObjects2.length = 0;
gdjs.CutsenseCode.GDNewSprite2Objects1.length = 0;
gdjs.CutsenseCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['CutsenseCode'] = gdjs.CutsenseCode;
