import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgIndentDecrease = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.7 9.316c-.104.049-.549.467-1.267 1.19-.972.979-1.112 1.135-1.153 1.29a.792.792 0 0 0 .061.563c.029.055.554.599 1.166 1.208.973.968 1.135 1.112 1.288 1.152a.749.749 0 0 0 .924-.924c-.039-.15-.16-.29-.852-.985l-.805-.811.785-.789c.432-.435.814-.848.849-.918.127-.254.048-.673-.162-.857a.766.766 0 0 0-.834-.119'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIndentDecrease);
export default ForwardRef;
