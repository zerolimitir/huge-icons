import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutThree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.42 2.044a4.614 4.614 0 0 0-1.199.386 4.001 4.001 0 0 0-2.178 3.025c-.06.434-.06 12.656 0 13.09.247 1.773 1.679 3.192 3.443 3.413.204.026 1.521.042 3.423.042H12V8h10V6.909c0-1.213-.035-1.601-.186-2.082a4.006 4.006 0 0 0-3.269-2.784c-.378-.052-12.756-.052-13.125.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThree);
export default ForwardRef;
