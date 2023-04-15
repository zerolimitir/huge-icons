import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3 7.5 2 9l1 .5 1 .5v3.41c0 2.105.016 3.51.041 3.67.059.375.28.801.563 1.084.226.226.36.298 3.526 1.877 3.019 1.506 3.314 1.645 3.58 1.683.203.03.377.03.58 0 .266-.038.561-.177 3.58-1.683 3.166-1.579 3.3-1.651 3.526-1.877.283-.283.504-.709.563-1.084.025-.16.041-1.565.041-3.67V10l1-.5 1-.5-1-1.5L20 6l-4 2-4 2-4-2-4-2-1 1.5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBox);
export default ForwardRef;
