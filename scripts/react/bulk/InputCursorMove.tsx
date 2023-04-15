import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInputCursorMove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.815 9.277c-.197.048-.289.13-1.421 1.27-.885.89-1.074 1.1-1.11 1.233-.054.199-.054.241 0 .44.036.133.23.348 1.15 1.274.717.723 1.162 1.141 1.266 1.19.279.13.603.084.834-.119.21-.184.289-.603.162-.857-.035-.07-.417-.483-.849-.918l-.785-.789.805-.811c.87-.874.931-.966.873-1.308a.769.769 0 0 0-.925-.605m9.845.03a.696.696 0 0 0-.344.341.807.807 0 0 0-.012.644c.035.07.417.483.849.918l.785.789-.805.811c-.692.695-.813.835-.852.985a.749.749 0 0 0 .924.924c.153-.04.315-.184 1.288-1.152.612-.609 1.137-1.153 1.166-1.208a.792.792 0 0 0 .061-.563c-.041-.155-.181-.311-1.153-1.29-.718-.723-1.163-1.141-1.267-1.19-.195-.091-.478-.095-.64-.009'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInputCursorMove);
export default ForwardRef;
