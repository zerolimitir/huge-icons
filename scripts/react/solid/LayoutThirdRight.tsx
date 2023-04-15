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
            d='M5.433 2.043a4.302 4.302 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.398.081.511.083 5.21.083h4.804V2l-4.79.005c-2.634.003-4.892.02-5.017.038m11.327 9.956v10.008l.93-.017c.845-.015.966-.026 1.321-.121a3.997 3.997 0 0 0 2.907-3.099c.083-.407.083-.457.073-6.9l-.011-6.49-.106-.385c-.332-1.199-1.077-2.081-2.211-2.619-.61-.288-.897-.342-1.973-.365l-.93-.02v10.008'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdRight);
export default ForwardRef;
