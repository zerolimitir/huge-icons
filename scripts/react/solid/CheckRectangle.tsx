import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCheckRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028M16.32 8.354a.708.708 0 0 1 .391.597 1.02 1.02 0 0 1-.024.333c-.022.057-.988 1.322-2.146 2.811-1.482 1.906-2.16 2.748-2.293 2.845a1.791 1.791 0 0 1-1.568.26 1.973 1.973 0 0 1-.453-.215c-.096-.069-.779-.67-1.518-1.337-1.474-1.329-1.502-1.363-1.459-1.748.056-.502.628-.811 1.06-.573.093.051.752.619 1.465 1.261.713.643 1.342 1.18 1.399 1.194.076.019.125.002.194-.068.051-.052.999-1.26 2.106-2.685 1.522-1.958 2.05-2.61 2.16-2.668.191-.101.504-.104.686-.007'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckRectangle);
export default ForwardRef;
