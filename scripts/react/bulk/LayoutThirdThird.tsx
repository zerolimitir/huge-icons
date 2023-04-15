import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutThirdThird = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.42 2.044a4.614 4.614 0 0 0-1.199.386 4.001 4.001 0 0 0-2.178 3.025c-.06.434-.06 12.656 0 13.09a4.006 4.006 0 0 0 2.784 3.269c.481.151.869.186 2.082.186H8V8h14V6.909c0-1.213-.035-1.601-.186-2.082a4.006 4.006 0 0 0-3.269-2.784c-.378-.052-12.756-.052-13.125.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdThird);
export default ForwardRef;
