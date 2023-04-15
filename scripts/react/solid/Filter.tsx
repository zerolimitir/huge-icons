import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.7 2.059c-1.354.3-2.092 1.813-1.477 3.027.057.113 1.392 1.889 2.965 3.946 1.574 2.058 2.925 3.841 3.004 3.963.182.285.377.738.494 1.145.091.319.091.331.113 3.66l.021 3.34.096.212c.252.558.94.802 1.489.527.116-.058.595-.508 1.418-1.333.976-.978 1.255-1.28 1.298-1.406.041-.123.06-.678.079-2.42.024-2.187.028-2.27.115-2.579.117-.41.275-.78.472-1.104.086-.141 1.445-1.94 3.019-3.997 1.575-2.057 2.909-3.831 2.965-3.943.357-.705.285-1.533-.194-2.203a2.184 2.184 0 0 0-1.292-.836c-.382-.081-14.218-.08-14.585.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;
