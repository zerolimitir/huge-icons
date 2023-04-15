import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.656 9.282a2.393 2.393 0 0 0-.869.262 2.788 2.788 0 0 0-1.452 1.776c-.095.35-.095 1.01 0 1.36a2.819 2.819 0 0 0 1.985 1.987c.246.069.598.073 6.68.073 6.101 0 6.433-.004 6.68-.073a2.822 2.822 0 0 0 1.985-1.987c.096-.351.096-1.009 0-1.36a2.784 2.784 0 0 0-1.463-1.782c-.598-.295-.071-.274-7.042-.282-3.443-.004-6.37.008-6.504.026m12.881 1.595c.251.123.463.335.586.586.14.284.139.791-.001 1.076a1.306 1.306 0 0 1-.665.619c-.219.082-.256.082-6.457.082s-6.238 0-6.457-.082a1.301 1.301 0 0 1-.664-.619c-.115-.236-.152-.655-.079-.885.121-.379.424-.698.791-.834.124-.046 1.183-.054 6.449-.047l6.3.007.197.097'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinus);
export default ForwardRef;
