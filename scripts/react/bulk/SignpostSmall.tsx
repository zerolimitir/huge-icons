import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignpostSmall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.24 2.036a1.13 1.13 0 0 0-.675.601c-.059.131-.064.938-.058 9.367.008 10.143-.013 9.347.254 9.651.263.3.359.325 1.239.325.88 0 .976-.025 1.239-.325.264-.3.243.479.248-9.647.006-10.193.027-9.35-.248-9.663-.257-.293-.367-.324-1.179-.333-.396-.005-.765.006-.82.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostSmall);
export default ForwardRef;
