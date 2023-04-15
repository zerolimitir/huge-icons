import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLinkedln = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.62 2.039a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294a2.071 2.071 0 0 0 1.244 1.24c.317.116.971.116 1.288 0a2.071 2.071 0 0 0 1.244-1.24c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075M2 15.26V22h4V8.52H2v6.74'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLinkedln);
export default ForwardRef;
