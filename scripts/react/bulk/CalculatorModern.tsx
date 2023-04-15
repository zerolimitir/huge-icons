import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCalculatorModern = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 13v3h6v6h6v-6H8v-6H2v3m13.52 3v6h1.331c.732 0 1.481-.019 1.663-.042a4.008 4.008 0 0 0 3.444-3.444c.027-.21.042-1.828.042-4.423V10h-6.48v6'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalculatorModern);
export default ForwardRef;
