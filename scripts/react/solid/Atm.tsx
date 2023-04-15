import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAtm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.46 1.076c-.203.094-.371.272-.421.447C5.014 1.61 5 5.285 5.001 11.78c.001 9.798.003 10.125.076 10.285.041.09.135.211.209.267.13.099.435.196.529.168a3.47 3.47 0 0 1 .154-.037c.136-.03.373-.234.463-.399.058-.106.07-.28.081-1.214l.013-1.09h5.213c5.666 0 5.51.006 6.107-.222a3.042 3.042 0 0 0 1.689-1.685c.214-.56.225-.712.225-3.117V12.52H6.52V11h13.24V8.52H6.52V7h13.252l-.025-.37c-.088-1.295-.878-2.328-2.1-2.745l-.307-.105-5.41-.011-5.41-.011-.001-.989c-.001-.544-.02-1.07-.042-1.168-.11-.475-.59-.723-1.017-.525'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAtm);
export default ForwardRef;
