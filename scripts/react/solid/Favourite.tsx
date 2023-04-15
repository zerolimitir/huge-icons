import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.777 3.039a5.215 5.215 0 0 0-2.972 1.459A5.264 5.264 0 0 0 2.661 6.06a5.948 5.948 0 0 0-.549 1.556c-.117.547-.128 1.741-.02 2.284.235 1.187.737 2.202 1.494 3.019 2.883 3.115 6.832 7.35 7.007 7.514.366.344.919.567 1.407.567s1.041-.223 1.407-.567c.174-.163 4.531-4.835 7.007-7.514.757-.818 1.259-1.832 1.494-3.019.108-.543.097-1.737-.02-2.284a5.948 5.948 0 0 0-.549-1.556c-.747-1.514-2.106-2.597-3.699-2.946-.339-.074-.539-.092-1.04-.091-.7.001-1.111.065-1.671.263-.968.342-1.558.771-2.641 1.92L12 5.511l-.288-.305c-.868-.921-1.368-1.333-2.012-1.656a5.594 5.594 0 0 0-1.307-.45c-.394-.077-1.273-.11-1.616-.061'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFavourite);
export default ForwardRef;
