const SVGFixer = require('oslllo-svg-fixer');

async function fix() {
    try {
        await SVGFixer('scripts/_svg/bulk/op', 'scripts/_svg/bulk/fixed').fix();
        await SVGFixer('scripts/_svg/outline/op', 'scripts/_svg/outline/fixed').fix();
        await SVGFixer('scripts/_svg/solid/op', 'scripts/_svg/solid/fixed').fix();
    } catch (err) {
        throw err;
    }
}

fix();