import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSwitch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.08 6.057c-1.888.337-3.395 1.385-4.317 3.003-.55.966-.791 1.976-.751 3.153.032.94.193 1.599.587 2.407.825 1.689 2.308 2.846 4.194 3.271.556.125 1.801.123 2.381-.004 2.429-.534 4.177-2.282 4.713-4.713.126-.571.126-1.777 0-2.348-.536-2.431-2.303-4.197-4.713-4.71-.504-.108-1.644-.14-2.094-.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSwitch);
export default ForwardRef;
