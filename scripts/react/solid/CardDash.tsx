import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardDash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.52 3.028c-.837.094-1.896.637-2.463 1.263a5.13 5.13 0 0 0-.716 1.089c-.093.211-.261.744-.261.829 0 .017 4.464.031 9.92.031 5.456 0 9.92-.012 9.92-.027 0-.08-.177-.642-.266-.842a5.151 5.151 0 0 0-.711-1.08c-.447-.494-1.266-.98-1.983-1.177l-.34-.093-6.48-.005c-3.564-.002-6.543.003-6.62.012M2 9v1.24h20V7.76H2V9m.01 5.71.013 2.95.11.378c.437 1.504 1.584 2.572 3.093 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083a4.003 4.003 0 0 0 3.097-2.905l.108-.392.012-2.93.012-2.93H1.997l.013 2.95m6.378 1.657a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.232.331-.233.331-1.616.331s-1.384 0-1.616-.331c-.286-.406-.056-1.011.431-1.132.069-.017.639-.028 1.268-.024l1.143.007.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardDash);
export default ForwardRef;
