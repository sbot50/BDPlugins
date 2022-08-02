/**
 * @name EnableExperiments
 * @version 0.0.2
 * @description Enables the experiments tab on discord.
 * @author sbot50
 * @authorLink https://github.com/sbot50/BDPlugins/tree/main/plugins
 * @authorId 305034585941475349
 * @updateUrl https://raw.githubusercontent.com/sbot50/BDPlugins/main/plugins/EnableExperiments/EnableExperiments.plugin.js
 * @source https://github.com/sbot50/BDPlugins/blob/main/plugins/EnableExperiments/EnableExperiments.plugin.js
 */

 const storeExports = BdApi.findModule(m => Reflect.has(m?.default, "isDeveloper"));
 const original = storeExports.default;

 module.exports = class EnableExperiments {
    start() {
        // Required function. Called when the plugin is activated (including after reloads)
        console.log(storeExports);
        storeExports.default.isDeveleoper = true;
        storeExports.default["get isDeveloper"] = function () {
            return true;
        }
        console.log(storeExports);
    }
    stop() {
        // Required function. Called when the plugin is deactivated
        
    }
}