import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignpost = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.24 2.036a1.13 1.13 0 0 0-.675.601c-.06.131-.064.921-.051 9.383.011 7.388.024 9.265.065 9.363.075.179.29.409.477.509.153.082.218.088.944.088.88 0 .976-.025 1.239-.325.277-.316.255.538.252-9.656-.002-10.16.019-9.346-.252-9.654-.257-.293-.367-.324-1.179-.333-.396-.005-.765.006-.82.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpost);
export default ForwardRef;
