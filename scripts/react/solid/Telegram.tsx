import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTelegram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.32 4.138c-.666.251-15.572 6.733-15.68 6.819-.425.34-.454 1.065-.056 1.457.241.239.317.256 2.49.572 1.843.267 2.109.297 2.467.278a4.383 4.383 0 0 0 1.528-.382c.182-.087 1.472-.924 2.868-1.86 1.717-1.152 2.571-1.702 2.641-1.702.151 0 .217.16.125.302-.038.057-.63.828-1.316 1.711-1.325 1.707-1.427 1.868-1.511 2.378a2.06 2.06 0 0 0 .369 1.473c.052.068.912.989 1.911 2.048 1.582 1.675 1.842 1.935 2.019 2.011.351.151.732.099 1.05-.144.295-.225.24.057 1.393-7.225.584-3.689 1.062-6.776 1.062-6.86-.001-.348-.333-.785-.674-.888a1.264 1.264 0 0 0-.686.012'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTelegram);
export default ForwardRef;
