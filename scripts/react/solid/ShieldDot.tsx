import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShieldDot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.463 2.044a5.37 5.37 0 0 0-.527.115c-.334.091-5.55 2.505-6.034 2.792-.371.22-.966.789-1.202 1.148a4.186 4.186 0 0 0-.646 1.641c-.073.411-.058 1.097.047 2.14.415 4.143 1.466 6.611 3.818 8.961.707.708 1.35 1.256 2.373 2.023.811.609 1.089.775 1.562.936 1.08.368 2.228.208 3.194-.444 1.402-.947 3.066-2.428 3.945-3.509 1.762-2.169 2.619-4.639 2.947-8.494.075-.876.075-1.218.001-1.638-.232-1.329-1.006-2.365-2.221-2.976-.856-.43-5.227-2.441-5.52-2.539a3.8 3.8 0 0 0-1.737-.156m.92 7.999c.802.147 1.456.829 1.584 1.652C14.153 12.894 13.209 14 12 14a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShieldDot);
export default ForwardRef;
