import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserPolygon = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M9.922 2.571a4.067 4.067 0 0 1 4.156 0l4.844 2.868C20.208 6.201 21 7.61 21 9.132v5.736c0 1.523-.792 2.931-2.078 3.693l-4.844 2.868a4.067 4.067 0 0 1-4.156 0L5.078 18.56C3.792 17.799 3 16.39 3 14.868V9.132c0-1.523.792-2.931 2.078-3.693l4.844-2.868Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M9.922 21.429a4.067 4.067 0 0 0 4.156 0l4.223-2.501c-1.258-2.23-3.609-3.73-6.301-3.73s-5.043 1.5-6.301 3.73l4.223 2.5Z'
        />
        <circle r={3} fill='currentColor' transform='matrix(1 0 0 -1 12 10)' />
    </svg>
);
const ForwardRef = forwardRef(SvgUserPolygon);
export default ForwardRef;
