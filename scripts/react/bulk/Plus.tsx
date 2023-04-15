import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.62 10.041a2.034 2.034 0 0 0-1.51 1.315c-.117.319-.116.971.002 1.294.21.575.652 1.018 1.244 1.244l.224.086h12.84l.23-.088a2.093 2.093 0 0 0 1.24-1.248c.116-.317.116-.971 0-1.288a2.093 2.093 0 0 0-1.24-1.248l-.23-.088-6.32-.006c-3.476-.003-6.392.009-6.48.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;
