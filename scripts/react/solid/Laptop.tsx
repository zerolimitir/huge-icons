import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLaptop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 4.047c-.721.138-1.381.801-1.536 1.545C4.013 5.74 4 7.27 4 10.662v4.858h16v-4.858c0-3.392-.013-4.922-.044-5.07-.159-.762-.818-1.411-1.573-1.549-.306-.056-12.508-.052-12.803.004M2.46 17.075c-.353.16-.502.475-.443.937a2.313 2.313 0 0 0 1.535 1.876l.268.092h16.36l.268-.092a2.313 2.313 0 0 0 1.535-1.876c.059-.462-.09-.777-.443-.937-.153-.07-.553-.073-9.54-.073-8.987 0-9.387.003-9.54.073'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLaptop);
export default ForwardRef;
