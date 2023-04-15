import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRemoveThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.388 7.133a.734.734 0 0 0-.344.815c.044.181.156.302 1.97 2.122L10.938 12l-1.924 1.93c-1.808 1.814-1.926 1.941-1.969 2.12-.053.22-.032.346.096.57a.735.735 0 0 0 .809.335c.179-.043.306-.161 2.12-1.97l1.931-1.924 1.909 1.906c1.051 1.048 1.971 1.936 2.046 1.973.098.049.203.064.37.052a.71.71 0 0 0 .6-.392.834.834 0 0 0 .01-.652c-.035-.07-.921-.988-1.97-2.038L13.06 12l1.912-1.912c1.763-1.763 1.915-1.926 1.97-2.109a.72.72 0 0 0-.698-.939.917.917 0 0 0-.336.064c-.07.035-.978.912-2.018 1.95L12 10.94l-1.89-1.886c-1.04-1.038-1.948-1.915-2.018-1.95a.834.834 0 0 0-.704.029'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveThin);
export default ForwardRef;
