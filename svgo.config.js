module.exports = {
    multipass: true, // boolean. false by default
    js2svg: {
        indent: 2, // string with spaces or number of spaces. 4 by default
        pretty: true, // boolean, false by default
    },
    plugins: [
        // set of built-in plugins enabled by default
        'preset-default',
        'removeDimensions',
        'sortAttrs',
        'cleanupIds',
        'cleanupListOfValues',
        'collapseGroups',
        'convertColors',
        'removeEmptyAttrs',
        'removeXMLProcInst',
        'removeScriptElement',
        'removeRasterImages',
        'removeDoctype',
        'removeDesc',
        'prefixIds',

        // or by expanded notation which allows to configure plugin
        {
            name: 'sortAttrs',
            params: {
                xmlnsOrder: 'alphabetical',
            },
        },
    ],
};
