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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m13.899 10.262a.682.682 0 0 1 .352.343.77.77 0 0 1-.001.652c-.106.227-6.205 6.313-6.412 6.399a.736.736 0 0 1-.97-.97c.086-.207 6.172-6.306 6.399-6.412.198-.093.463-.098.632-.012m.073 4.076c.221.143.323.337.323.615a.951.951 0 0 1-.049.329c-.092.18-2.211 2.28-2.379 2.359a.732.732 0 0 1-.984-.332.774.774 0 0 1 0-.652c.108-.231 2.262-2.364 2.424-2.4.066-.015.138-.033.16-.041.091-.033.37.035.505.122'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextArea);
export default ForwardRef;
