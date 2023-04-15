import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBellSilent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.7 2.355a.61.61 0 0 0-.358.375.746.746 0 0 0-.001.581c.043.102.638.725 1.901 1.99l1.839 1.841-.098.291c-.176.515-.256 1-.441 2.649-.297 2.652-.316 2.715-1.202 3.968-.759 1.074-.136 2.668 1.138 2.91.122.023.922.04 1.862.04h1.649l.127.258c.384.78 1.118 1.37 2.024 1.629.459.13 1.261.13 1.72 0 .906-.259 1.64-.849 2.024-1.629l.127-.258h.929l2.3 2.304c1.553 1.556 2.352 2.329 2.46 2.379.589.276 1.218-.284 1.02-.908-.04-.128-1.652-1.76-9.134-9.249C6.243 5.177 3.452 2.409 3.34 2.357a.758.758 0 0 0-.64-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellSilent);
export default ForwardRef;
