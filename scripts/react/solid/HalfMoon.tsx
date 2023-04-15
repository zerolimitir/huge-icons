import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHalfMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.937 3.353a.637.637 0 0 0-.195.229c-.068.143-.069.172-.008.539a9.284 9.284 0 0 1-1.26 6.412 9.582 9.582 0 0 1-2.774 2.839c-.504.332-1.548.833-2.133 1.024-1.466.478-3.01.596-4.463.341-.431-.076-.642-.013-.766.227-.099.191-.067.324.218.899 1.333 2.691 3.761 4.487 6.791 5.022.689.122 2.071.133 2.772.022 4.094-.647 7.155-3.724 7.788-7.827.098-.635.098-1.925 0-2.56-.48-3.112-2.391-5.71-5.168-7.026-.463-.219-.631-.248-.802-.141'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHalfMoon);
export default ForwardRef;
