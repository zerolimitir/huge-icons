import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTextArea = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.7 12.317c-.11.051-1.147 1.064-3.287 3.209-3.421 3.428-3.211 3.188-3.162 3.619.023.211.18.429.389.541.154.082.452.097.627.032.169-.063 6.323-6.219 6.416-6.418a.67.67 0 0 0 .001-.6c-.181-.393-.609-.559-.984-.383m0 4c-.104.048-.556.472-1.287 1.209-1.226 1.234-1.209 1.209-1.162 1.619.023.211.18.429.389.541.154.082.453.097.627.032.167-.063 2.325-2.222 2.417-2.418a.674.674 0 0 0 0-.6c-.181-.393-.608-.559-.984-.383'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextArea);
export default ForwardRef;
