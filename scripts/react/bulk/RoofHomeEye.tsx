import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.164 11.085c-.883.185-1.71.615-2.675 1.392-.494.397-.709.631-.843.916-.091.196-.106.279-.106.608 0 .35.011.402.132.649.101.206.207.336.453.559.926.841 1.891 1.407 2.835 1.663.336.091.456.103 1.04.103.584 0 .704-.012 1.04-.103.965-.262 2.065-.917 2.898-1.727.417-.405.522-.634.522-1.145 0-.598-.153-.857-.852-1.443-1.529-1.283-3.01-1.773-4.444-1.472m1.272 2.033a.988.988 0 0 1 .259 1.577.988.988 0 0 1-1.39 0 .987.987 0 0 1 0-1.389.986.986 0 0 1 1.131-.188'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeEye);
export default ForwardRef;
