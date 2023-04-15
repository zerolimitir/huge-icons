import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapGps = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.7 12.025c-.044.011-1.897.625-4.117 1.364l-4.037 1.343-.209.204a1.065 1.065 0 0 0-.337.765c0 .179.095.471.2.62.187.262.359.339 1.933.862.84.279 1.59.54 1.667.579.165.084.367.289.45.458.032.066.288.807.567 1.647.523 1.574.6 1.746.862 1.933.149.105.441.2.62.2.373 0 .781-.246.947-.571.044-.086.674-1.933 1.401-4.103 1.203-3.594 1.322-3.971 1.326-4.226.008-.454-.213-.816-.606-.99-.176-.078-.521-.122-.667-.085'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapGps);
export default ForwardRef;
