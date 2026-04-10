gdjs.SplashCode = {};
gdjs.SplashCode.localVariables = [];
gdjs.SplashCode.idToCallbackMap = new Map();
gdjs.SplashCode.GDNewSpriteObjects1= [];
gdjs.SplashCode.GDNewSpriteObjects2= [];
gdjs.SplashCode.GDNewSprite2Objects1= [];
gdjs.SplashCode.GDNewSprite2Objects2= [];
gdjs.SplashCode.GDNewTextObjects1= [];
gdjs.SplashCode.GDNewTextObjects2= [];


gdjs.SplashCode.asyncCallback19081740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SplashCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "SRB2 - Introduction Music.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutsense", false);
}
gdjs.SplashCode.localVariables.length = 0;
}
gdjs.SplashCode.idToCallbackMap.set(19081740, gdjs.SplashCode.asyncCallback19081740);
gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SplashCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.SplashCode.asyncCallback19081740(runtimeScene, asyncObjectsList)), 19081740, asyncObjectsList);
}
}

}


};gdjs.SplashCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.SplashCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Booting the Game", "", 0, 0, "", "", "", "", null);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func(runtimeScene, "1485257178372902984", null);
}
}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDNewSpriteObjects1.length = 0;
gdjs.SplashCode.GDNewSpriteObjects2.length = 0;
gdjs.SplashCode.GDNewSprite2Objects1.length = 0;
gdjs.SplashCode.GDNewSprite2Objects2.length = 0;
gdjs.SplashCode.GDNewTextObjects1.length = 0;
gdjs.SplashCode.GDNewTextObjects2.length = 0;

gdjs.SplashCode.eventsList1(runtimeScene);
gdjs.SplashCode.GDNewSpriteObjects1.length = 0;
gdjs.SplashCode.GDNewSpriteObjects2.length = 0;
gdjs.SplashCode.GDNewSprite2Objects1.length = 0;
gdjs.SplashCode.GDNewSprite2Objects2.length = 0;
gdjs.SplashCode.GDNewTextObjects1.length = 0;
gdjs.SplashCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
