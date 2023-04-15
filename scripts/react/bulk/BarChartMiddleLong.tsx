import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBarChartMiddleLong = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.62 3.039c-.713.158-1.249.624-1.514 1.317l-.086.224v14.84l.088.23a2.093 2.093 0 0 0 1.248 1.24c.319.117.971.116 1.294-.002a2.093 2.093 0 0 0 1.244-1.244l.086-.224V4.58l-.088-.23a2.07 2.07 0 0 0-1.248-1.236c-.255-.089-.786-.128-1.024-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartMiddleLong);
export default ForwardRef;
