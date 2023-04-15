import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowThickUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.655 3.583c-.091.033-.23.118-.309.189-.078.07-1.24 1.385-2.582 2.921C6.204 9.626 6.2 9.631 6.2 10c0 .396.291.808.66.934.16.054.367.066 1.167.066H9v4.57c0 3.025.014 4.62.042 4.719.062.223.274.474.497.589l.199.102 2.198.011c2.493.012 2.459.016 2.764-.289.319-.319.3.014.3-5.129V11h.973c1.125 0 1.254-.025 1.529-.3.287-.287.37-.724.21-1.1-.033-.077-1.189-1.43-2.569-3.008-2.74-3.132-2.643-3.037-3.102-3.059a1.133 1.133 0 0 0-.386.05'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickUp);
export default ForwardRef;
