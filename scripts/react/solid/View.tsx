import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgView = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.18 5.047c-2.346.236-4.816 1.529-7.323 3.833-1.469 1.35-1.836 1.973-1.836 3.12 0 1.118.36 1.751 1.705 3.001 2.441 2.269 4.603 3.472 7.014 3.904.564.101 1.956.101 2.52 0 2.341-.419 4.492-1.597 6.842-3.745 1.494-1.366 1.877-2.01 1.877-3.16 0-1.14-.373-1.778-1.802-3.087-.698-.64-1.086-.968-1.637-1.381-2.502-1.88-4.999-2.723-7.36-2.485m1.576 4.05c.337.092.839.35 1.117.574C14.554 10.219 15 11.14 15 12c0 1.17-.775 2.329-1.849 2.766-1.509.614-3.162-.032-3.853-1.506-.226-.481-.277-.714-.277-1.26s.051-.779.277-1.26a3.033 3.033 0 0 1 2.205-1.7c.267-.049.988-.016 1.253.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgView);
export default ForwardRef;
