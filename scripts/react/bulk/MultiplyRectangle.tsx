import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMultiplyRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.856 8.5a.732.732 0 0 0-.423.514c-.098.367-.08.391 1.28 1.756l1.226 1.231-1.208 1.209c-1.231 1.233-1.332 1.357-1.33 1.639a.898.898 0 0 0 .244.539.902.902 0 0 0 .515.212c.273 0 .406-.109 1.63-1.331l1.209-1.208 1.231 1.227c1.332 1.328 1.311 1.312 1.695 1.26.454-.061.756-.577.593-1.015-.023-.062-.585-.657-1.249-1.323l-1.208-1.209 1.247-1.251c1.35-1.354 1.332-1.33 1.28-1.715-.061-.455-.579-.757-1.015-.593-.062.024-.666.595-1.343 1.269L12 10.938l-1.23-1.225C9.741 8.687 9.514 8.48 9.38 8.444c-.232-.063-.301-.055-.524.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMultiplyRectangle);
export default ForwardRef;
