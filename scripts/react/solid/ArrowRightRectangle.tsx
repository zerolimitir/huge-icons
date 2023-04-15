import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowRightRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.293 4.293 0 0 0-1.702.669c-.775.527-1.335 1.322-1.602 2.277l-.109.391v13.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.402 3.098-2.905l.108-.392V5.38l-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.1 5.1 0 0 0-1.311-.6l-.338-.09-6.48-.007c-3.564-.003-6.582.009-6.707.028m7.907 6.314c.169.079 3.247 3.137 3.339 3.318.063.122.063.528 0 .65-.092.181-3.21 3.279-3.379 3.358a.734.734 0 0 1-.983-.983c.047-.1.404-.488.959-1.04l.885-.88-3.191-.02c-3.124-.02-3.193-.022-3.329-.102a1.003 1.003 0 0 1-.257-.249c-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64l.162-.107 3.193-.02 3.194-.02-.865-.86c-.541-.538-.892-.92-.939-1.02a.734.734 0 0 1 .983-.983'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowRightRectangle);
export default ForwardRef;
