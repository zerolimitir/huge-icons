import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAlignBottom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.811 4.278a.883.883 0 0 0-.481.374c-.065.119-.071.426-.09 4.319l-.02 4.191-.36-.365c-.198-.201-.432-.399-.52-.44a.752.752 0 0 0-.925.227.768.768 0 0 0-.062.759c.045.088.564.637 1.174 1.243.908.903 1.12 1.094 1.253 1.13.199.054.241.054.44 0 .133-.036.347-.23 1.273-1.15.612-.608 1.148-1.173 1.19-1.254a.78.78 0 0 0-.118-.846c-.108-.123-.351-.226-.533-.225-.269.001-.462.12-.872.535l-.38.386-.02-4.191c-.02-4.133-.021-4.193-.102-4.33a.807.807 0 0 0-.847-.363m8 0a.883.883 0 0 0-.481.374c-.065.119-.071.426-.09 4.319l-.02 4.191-.38-.386c-.209-.211-.452-.418-.54-.459a.733.733 0 0 0-1.06.663c0 .103.034.248.077.332.042.081.578.646 1.19 1.254.926.92 1.14 1.114 1.273 1.15.199.054.241.054.44 0 .133-.036.347-.23 1.273-1.15.612-.608 1.148-1.173 1.19-1.254a.78.78 0 0 0-.118-.846c-.108-.123-.351-.226-.533-.225-.269.001-.462.12-.872.535l-.38.386-.02-4.191c-.02-4.133-.021-4.193-.102-4.33a.807.807 0 0 0-.847-.363m-11 14.001a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 14.213.063 14.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-7.143-.006c-3.929-.004-7.201.008-7.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlignBottom);
export default ForwardRef;