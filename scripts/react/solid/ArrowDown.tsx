import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 5.278a.883.883 0 0 0-.481.374c-.065.119-.071.474-.09 5.318l-.02 5.19-1.36-1.364c-.89-.893-1.415-1.39-1.52-1.439a.752.752 0 0 0-.925.227.768.768 0 0 0-.062.759c.048.093.942 1.015 2.174 2.244C11.679 18.733 11.71 18.76 12 18.76c.29 0 .32-.026 2.493-2.193 1.162-1.159 2.147-2.174 2.19-2.255a.78.78 0 0 0-.118-.846c-.191-.218-.577-.284-.865-.149-.105.049-.636.552-1.54 1.459l-1.38 1.384-.02-5.19c-.02-5.14-.021-5.191-.102-5.329a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
