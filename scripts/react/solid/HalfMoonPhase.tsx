import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHalfMoonPhase = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m2.16 2.6c1.138.231 2.289.789 3.28 1.59.356.288 1.068 1.013 1.326 1.351.746.979 1.239 2.024 1.48 3.14.079.363.091.536.091 1.28s-.012.917-.091 1.28a7.899 7.899 0 0 1-1.594 3.28 11.248 11.248 0 0 1-1.46 1.411c-1.22.914-2.57 1.428-4.002 1.522l-.31.021V4.508l.43.023c.237.013.619.061.85.108'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHalfMoonPhase);
export default ForwardRef;
