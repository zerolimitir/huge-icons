import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgProtractor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5 6v.76h1.061c.868 0 1.089-.011 1.21-.062a.748.748 0 0 0 0-1.396c-.121-.051-.342-.062-1.21-.062H5V6m0 4v.76h1.061c.868 0 1.089-.011 1.21-.062a.748.748 0 0 0 0-1.396c-.121-.051-.342-.062-1.21-.062H5V10m0 4v.76h1.061c.868 0 1.089-.011 1.21-.062a.748.748 0 0 0 0-1.396c-.121-.051-.342-.062-1.21-.062H5V14m0 4v.76h1.061c.868 0 1.089-.011 1.21-.062a.748.748 0 0 0 0-1.396c-.121-.051-.342-.062-1.21-.062H5V18'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProtractor);
export default ForwardRef;
