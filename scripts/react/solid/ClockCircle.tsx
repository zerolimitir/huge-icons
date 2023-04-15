import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClockCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.285 4.342c.08.051.188.162.24.246l.095.153.011 2.341.012 2.341 1.188.394c.654.217 1.255.428 1.335.468a.745.745 0 0 1 .228 1.176.746.746 0 0 1-.688.22c-.29-.066-3.151-1.034-3.251-1.099a.996.996 0 0 1-.205-.229l-.11-.166V6.78l.093-.149c.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClockCircle);
export default ForwardRef;
