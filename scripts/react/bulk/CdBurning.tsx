import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCdBurning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13 7.815V9.76h.532c.84 0 1.311.169 1.786.639a2.226 2.226 0 0 1 0 3.202c-.475.47-.946.639-1.786.639H13v3.89l.81-.021c.932-.024 1.323-.085 1.994-.308 2.153-.716 3.688-2.504 4.105-4.781.09-.488.09-1.552 0-2.04-.417-2.277-1.952-4.065-4.105-4.781-.671-.223-1.062-.284-1.994-.308L13 5.87v1.945'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCdBurning);
export default ForwardRef;
