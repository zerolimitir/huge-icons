import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPageSeparator = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.66 9.307a.696.696 0 0 0-.344.341.807.807 0 0 0-.012.644c.035.07.417.483.849.918l.785.789-.805.811c-.692.695-.813.835-.852.985a.749.749 0 0 0 .924.924c.153-.04.315-.184 1.288-1.152.612-.609 1.137-1.153 1.166-1.208a.792.792 0 0 0 .061-.563c-.041-.155-.181-.311-1.153-1.29-.718-.723-1.163-1.141-1.267-1.19-.195-.091-.478-.095-.64-.009m16.04.009c-.104.049-.549.467-1.267 1.19-.972.979-1.112 1.135-1.153 1.29a.792.792 0 0 0 .061.563c.029.055.554.599 1.166 1.208.973.968 1.135 1.112 1.288 1.152a.749.749 0 0 0 .924-.924c-.039-.15-.16-.29-.852-.985l-.805-.811.785-.789c.432-.435.814-.848.849-.918.127-.254.048-.673-.162-.857a.766.766 0 0 0-.834-.119'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPageSeparator);
export default ForwardRef;
