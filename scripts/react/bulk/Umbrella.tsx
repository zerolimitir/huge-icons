import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUmbrella = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 2.056c-1.9.471-3.416 4.353-3.567 9.134l-.026.81h8.026l-.026-.81c-.088-2.79-.623-5.28-1.515-7.049-.81-1.607-1.836-2.346-2.892-2.085'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUmbrella);
export default ForwardRef;
