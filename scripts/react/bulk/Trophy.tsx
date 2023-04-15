import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrophy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.62 3.041c-.73.152-1.277.645-1.525 1.372L6 4.694v3.421c0 2.354.014 3.496.045 3.663.203 1.1.48 1.818.995 2.581a5.94 5.94 0 0 0 3.52 2.452c.694.164.881.189 1.44.189.559 0 .746-.025 1.44-.189 2.135-.507 3.864-2.236 4.371-4.371.192-.81.189-.741.189-4.325V4.694l-.097-.286a2.06 2.06 0 0 0-1.259-1.302c-.224-.086-.229-.086-4.544-.092-2.376-.004-4.392.009-4.48.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrophy);
export default ForwardRef;
