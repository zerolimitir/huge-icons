import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDrive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.057 3.11c.032.06 1.47 2.648 3.194 5.75l3.136 5.64 2.886.01c2.297.008 2.887 0 2.885-.04-.001-.027-1.384-2.615-3.074-5.75l-3.072-5.7-3.007-.01-3.007-.011.059.111m-3.99 7.191-3.069 5.701 1.487 2.479c.817 1.364 1.499 2.479 1.513 2.479.029 0 6.094-10.898 6.116-10.989.013-.055-2.912-5.369-2.956-5.37-.012-.001-1.403 2.565-3.091 5.7m3.041 8.189-1.383 2.49 6.126.01c4.868.008 6.135 0 6.172-.04.025-.027.682-1.112 1.458-2.41.777-1.298 1.439-2.4 1.471-2.45l.057-.09H9.491l-1.383 2.49'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDrive);
export default ForwardRef;
