import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHangout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.34 1.023c-1.441.141-2.462.429-3.634 1.025a9.204 9.204 0 0 0-2.407 1.769c-1.495 1.499-2.43 3.414-2.72 5.566-.088.648-.087 1.82 0 2.397.292 1.924 1.125 3.582 2.519 5.016 1.74 1.79 3.999 2.836 6.452 2.988l.45.027v3.196l.544-.286c4.392-2.311 7.508-5.722 8.557-9.365.988-3.433.077-7.054-2.4-9.539-1.499-1.504-3.251-2.389-5.379-2.719-.372-.057-1.662-.106-1.982-.075m.21 9.147c-.014 1.996-.025 2.321-.084 2.53-.238.848-.853 1.49-1.498 1.567l-.208.024V12H7.48V7.88h4.086l-.016 2.29m5.41-.036c0 2.112-.005 2.273-.079 2.562-.219.857-.852 1.511-1.527 1.576l-.194.018V12h-2.24V7.88h4.04v2.254'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHangout);
export default ForwardRef;
