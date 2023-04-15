import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDonate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.1 4.066A2.648 2.648 0 0 0 12.28 5.5c-.407.84-.355 1.956.126 2.711.236.37 3.136 3.969 3.32 4.12.251.206.665.389.994.44.52.08 1.129-.092 1.554-.44.184-.151 3.084-3.75 3.32-4.12.351-.552.487-1.375.343-2.083C21.68 4.86 20.581 4 19.22 4c-.626 0-1.095.169-1.51.545-.438.395-.982.395-1.42 0a2.123 2.123 0 0 0-.892-.483c-.338-.077-.925-.075-1.298.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDonate);
export default ForwardRef;
