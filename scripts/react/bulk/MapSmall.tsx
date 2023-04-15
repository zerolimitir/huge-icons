import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapSmall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.2 3.058a5.739 5.739 0 0 0-1.88.582 5.968 5.968 0 0 0-3.306 5.08c-.057 1.238.35 2.569 1.243 4.072a12.512 12.512 0 0 0 2.113 2.672C10.389 16.454 11.323 17 12 17c.711 0 1.632-.554 2.725-1.64.728-.723 1.133-1.211 1.65-1.99 1.132-1.706 1.673-3.257 1.613-4.63a5.995 5.995 0 0 0-4.947-5.643c-.489-.087-1.381-.106-1.841-.039m1.183 3.985c.802.147 1.456.829 1.584 1.652C14.153 9.894 13.209 11 12 11a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapSmall);
export default ForwardRef;
