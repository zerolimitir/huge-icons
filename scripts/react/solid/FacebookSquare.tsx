import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFacebookSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.385.079.537.083 2.85.083h2.444v-6H7v-3h3.514l.015-1.37c.016-1.359.017-1.373.126-1.728a4.001 4.001 0 0 1 1.071-1.765c.458-.441.876-.7 1.473-.914.515-.185.921-.223 2.431-.223H17v2.996l-1.39.012c-1.337.012-1.396.015-1.55.098a1.173 1.173 0 0 0-.488.514c-.062.139-.073.307-.085 1.27L13.474 13H17v3h-3.52v6.003l2.57-.012 2.57-.013.391-.107a4.001 4.001 0 0 0 2.907-3.101c.083-.407.083-.457.073-6.9l-.011-6.49-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFacebookSquare);
export default ForwardRef;
