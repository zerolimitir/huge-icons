import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFacebook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.34 3.046a4.934 4.934 0 0 0-1.52.471c-1.23.603-2.132 1.623-2.557 2.89-.219.653-.231.763-.251 2.223L9.993 10H6v4h4v7h4v-7h4v-4h-4V8.927c0-1.235.021-1.35.299-1.628.292-.293.339-.299 2.128-.299H18V3l-1.69.005c-.93.003-1.816.021-1.97.041'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFacebook);
export default ForwardRef;
