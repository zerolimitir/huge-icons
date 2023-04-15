import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowZoomIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.811 12.278a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.104.029.72.045 1.779.045h1.62l-2.886 2.89c-1.588 1.589-2.917 2.951-2.955 3.026-.102.205-.067.554.076.74.211.278.624.386.917.24.07-.035 1.428-1.362 3.018-2.95l2.89-2.886v1.62c0 1.059.016 1.675.045 1.779a.84.84 0 0 0 .191.306.742.742 0 0 0 1.244-.325c.028-.105.039-1.035.031-2.788-.011-2.57-.013-2.635-.093-2.771a1.03 1.03 0 0 0-.253-.26l-.172-.121-2.646-.007c-1.456-.003-2.705.008-2.776.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowZoomIn);
export default ForwardRef;
