import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBarChartAsc = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.62 7.039c-.713.158-1.249.624-1.514 1.317l-.086.224v10.84l.088.23a2.093 2.093 0 0 0 1.248 1.24c.173.063.32.082.644.082s.471-.019.644-.082a2.093 2.093 0 0 0 1.248-1.24l.088-.23V8.58l-.088-.23a2.07 2.07 0 0 0-1.248-1.236c-.255-.089-.786-.128-1.024-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartAsc);
export default ForwardRef;
