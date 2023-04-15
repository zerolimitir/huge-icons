import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.9 5.258a1.71 1.71 0 0 1-.16.041c-.089.02-.656.561-2.212 2.114-1.151 1.148-2.13 2.148-2.177 2.223-.119.19-.116.541.005.738.176.285.484.41.833.337.182-.038.26-.108 1.62-1.463l1.43-1.424.01 5.198.011 5.198.093.149c.357.574 1.223.443 1.363-.207.031-.144.044-1.724.044-5.273V7.823l1.43 1.424c1.358 1.352 1.44 1.426 1.62 1.464.58.12 1.021-.321.901-.901-.038-.182-.124-.275-2.144-2.3-1.157-1.16-2.159-2.135-2.226-2.166-.13-.062-.376-.109-.441-.086'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
