export const ToolsHelper = {

    clamp(min, max, value) {
        return Math.min(Math.max(value, min), max);
    },

    getPos(node, scope) {
        const root = scope || document;
        let offsetTop = node.offsetTop;

        while (
            node &&
            node.offsetParent &&
            node.offsetParent !== document &&
            node !== root &&
            root !== node.offsetParent
            ) {
            offsetTop += node.offsetParent.offsetTop;
            node = node.offsetParent;
        }
        return {
            top: offsetTop,
        };
    },
};
