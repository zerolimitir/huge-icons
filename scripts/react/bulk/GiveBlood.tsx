import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGiveBlood = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.625 2.562c-.349.088-.612.278-1.156.833-1.704 1.743-2.54 3.402-2.457 4.877a3.947 3.947 0 0 0 2.933 3.596c.352.094.467.106 1.055.106.588 0 .703-.012 1.055-.106 1.414-.379 2.456-1.444 2.828-2.888.427-1.66-.376-3.564-2.359-5.592-.452-.462-.586-.574-.826-.693a1.222 1.222 0 0 0-.603-.157 2.11 2.11 0 0 0-.47.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGiveBlood);
export default ForwardRef;
