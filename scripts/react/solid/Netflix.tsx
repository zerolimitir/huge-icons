import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNetflix = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.212 3.33c3.319 5.14 10.73 16.583 10.764 16.62.037.04.577.048 2.53.04l2.482-.01-5.487-8.48-5.487-8.48-2.507-.01-2.508-.011.213.331M15 6.257v3.258l2.465 3.812a655.451 655.451 0 0 0 2.5 3.851c.02.022.035-3 .035-7.07V3h-5v3.257M4 12.892V20h5v-6.515L6.535 9.673a655.451 655.451 0 0 0-2.5-3.851c-.02-.022-.035 3-.035 7.07'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNetflix);
export default ForwardRef;
