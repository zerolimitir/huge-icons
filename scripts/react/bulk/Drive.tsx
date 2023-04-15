import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDrive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.46 18.37a594.94 594.94 0 0 1-1.392 2.5l-.076.13h14.004l1.5-2.5 1.5-2.5H7.775L6.46 18.37'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDrive);
export default ForwardRef;
