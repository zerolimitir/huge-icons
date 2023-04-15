import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutThirdRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16 11.999v10.007l1.31-.015c1.266-.015 1.323-.019 1.701-.121a4 4 0 0 0 2.907-3.1c.083-.407.083-.457.073-6.9l-.011-6.49-.106-.385c-.332-1.199-1.077-2.081-2.211-2.619-.667-.316-.856-.345-2.353-.365L16 1.993v10.006'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdRight);
export default ForwardRef;
