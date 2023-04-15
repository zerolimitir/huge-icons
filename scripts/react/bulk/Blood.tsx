import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBlood = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.514 14.361c-.22.116-.299.244-.452.733-.49 1.569-1.471 2.569-2.931 2.99-.514.148-.618.205-.762.412-.09.13-.109.2-.109.407 0 .213.018.275.12.42.249.352.564.409 1.2.219 1.015-.303 1.752-.742 2.46-1.463a5.996 5.996 0 0 0 1.372-2.219c.208-.603.251-.827.193-1.021-.06-.198-.261-.433-.433-.505a.89.89 0 0 0-.658.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBlood);
export default ForwardRef;
