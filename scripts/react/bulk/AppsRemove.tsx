import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAppsRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.565 5.28c-.17.04-.32.15-.434.318-.313.46-.012 1.073.561 1.142.114.013 1.684.019 3.488.012 2.963-.011 3.292-.018 3.4-.078.242-.134.42-.419.42-.674 0-.255-.178-.54-.42-.674-.109-.06-.437-.067-3.5-.072-1.859-.004-3.441.008-3.515.026m-9.369 8.34c-1.328.251-2.519 1.155-3.136 2.38-.327.649-.46 1.227-.46 2 0 .289.026.65.06.83.318 1.676 1.562 3.011 3.24 3.478.371.103.453.111 1.14.111.685 0 .769-.008 1.135-.11 1.565-.436 2.755-1.624 3.173-3.17.099-.366.108-.461.108-1.139 0-.678-.009-.773-.108-1.139a4.498 4.498 0 0 0-3.152-3.164c-.319-.089-.477-.107-1.036-.12-.463-.01-.751.002-.964.043'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAppsRemove);
export default ForwardRef;
