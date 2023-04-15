import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStationery = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.534 2.057a2.063 2.063 0 0 0-1.49 1.535C5.018 3.717 5 4.255 5 4.902V6h4V4.902c0-.647-.018-1.185-.044-1.31a2.062 2.062 0 0 0-1.548-1.548 2.143 2.143 0 0 0-.874.013M17.7 5.316a.745.745 0 0 0 .029 1.382c.121.051.342.062 1.21.062H20V5.24l-1.07.001c-.955.001-1.087.009-1.23.075m0 4a.745.745 0 0 0 .029 1.382c.121.051.342.062 1.21.062H20V9.24l-1.07.001c-.955.001-1.087.009-1.23.075m0 4a.745.745 0 0 0 .029 1.382c.121.051.342.062 1.21.062H20v-1.52l-1.07.001c-.955.001-1.087.009-1.23.075m0 4a.745.745 0 0 0 .029 1.382c.121.051.342.062 1.21.062H20v-1.52l-1.07.001c-.955.001-1.087.009-1.23.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStationery);
export default ForwardRef;
