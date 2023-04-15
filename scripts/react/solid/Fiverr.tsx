import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFiverr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.34 3.046a4.934 4.934 0 0 0-1.52.471c-1.23.603-2.132 1.623-2.557 2.89-.219.653-.231.763-.251 2.223L6.993 10H4v4h3v7h4v-7h5v7h4V10h-9V8.927c0-1.235.021-1.35.299-1.628.301-.301.282-.299 2.628-.299H16V3l-2.19.005c-1.205.003-2.316.021-2.47.041'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFiverr);
export default ForwardRef;
