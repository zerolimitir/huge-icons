import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMenuCircleHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.46 11.035c-.573.152-.94.636-.94 1.24 0 .488.276.898.751 1.115.182.083.261.096.522.083.502-.024.846-.243 1.075-.684.143-.276.154-.748.025-1.034a1.238 1.238 0 0 0-1.055-.734 1.571 1.571 0 0 0-.378.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuCircleHorizontal);
export default ForwardRef;
