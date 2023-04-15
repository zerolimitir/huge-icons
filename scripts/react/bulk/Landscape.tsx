import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLandscape = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.811 3.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 14.213.063 14.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-7.143-.006c-3.929-.004-7.201.008-7.272.025m0 16a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 14.213.063 14.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-7.143-.006c-3.929-.004-7.201.008-7.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscape);
export default ForwardRef;
