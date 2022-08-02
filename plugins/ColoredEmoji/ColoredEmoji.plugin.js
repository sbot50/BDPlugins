/**
 * @name ColoredEmoji
 * @version 0.0.1
 * @description The emojis in the emoji selector are colored now!
 * @author sbot50
 * @authorLink https://github.com/sbot50/BDPlugins/tree/main/plugins
 * @authorId 305034585941475349
 * @updateUrl https://raw.githubusercontent.com/sbot50/BDPlugins/main/plugins/ColoredEmoji/ColoredEmoji.plugin.js
 * @source https://github.com/sbot50/BDPlugins/blob/main/plugins/ColoredEmoji/ColoredEmoji.plugin.js
 */

module.exports = class EnableExperiments {
    start() {
        // Required function. Called when the plugin is activated (including after reloads)
        let elements = document.getElementsByClassName(".emojiItemDisabled-3VVnwp");
        for (let i=0; i < elements.length; i++) {
            let element = elements[i];
            element.classList.remove(".emojiItemDisabled-3VVnwp");
            element.classList.add(".disabledbyplugin");
        }
    }
    stop() {
        // Required function. Called when the plugin is deactivated
        let elements = document.getElementsByClassName(".disabledbyplugin");
        for (let i=0; i < elements.length; i++) {
            let element = elements[i];
            element.classList.remove(".disabledbyplugin");
            element.classList.add(".emojiItemDisabled-3VVnwp");
        }
    }
}