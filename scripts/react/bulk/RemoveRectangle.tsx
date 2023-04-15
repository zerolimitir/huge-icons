import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRemoveRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.847 8.526c-.301.149-.456.493-.389.861.024.134.184.309 1.254 1.383l1.227 1.231-1.211 1.211c-1.094 1.095-1.216 1.23-1.27 1.408-.052.173-.052.22.001.403.078.267.306.484.551.523l.17.027.18-.028c.171-.027.241-.089 1.41-1.256l1.231-1.228 1.209 1.208c1.233 1.231 1.357 1.332 1.639 1.33a.898.898 0 0 0 .539-.244.902.902 0 0 0 .212-.515c0-.273-.109-.406-1.331-1.63l-1.208-1.209 1.227-1.231c1.328-1.332 1.312-1.311 1.26-1.695-.061-.454-.577-.756-1.015-.593-.062.023-.657.585-1.323 1.25L12 10.94l-1.21-1.208c-.665-.665-1.261-1.227-1.323-1.25a.84.84 0 0 0-.62.044'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveRectangle);
export default ForwardRef;
