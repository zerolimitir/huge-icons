import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserCircle = (
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
            d='m18.559 19.549.492.566-.492-.566ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm0 13a6.253 6.253 0 0 1 5.856 4.061l1.405-.525A7.753 7.753 0 0 0 12 14.25v1.5ZM21.25 12a9.227 9.227 0 0 1-3.183 6.983l.984 1.132A10.727 10.727 0 0 0 22.75 12h-1.5Zm-3.183 6.983A9.212 9.212 0 0 1 12 21.25v1.5c2.697 0 5.164-.994 7.051-2.635l-.984-1.132Zm-11.923.828A6.253 6.253 0 0 1 12 15.75v-1.5a7.753 7.753 0 0 0-7.261 5.036l1.405.525ZM12 21.25a9.212 9.212 0 0 1-6.067-2.267l-.984 1.132A10.712 10.712 0 0 0 12 22.75v-1.5Zm-6.067-2.267A9.227 9.227 0 0 1 2.75 12h-1.5c0 3.24 1.434 6.145 3.699 8.115l.984-1.132Z'
        />
        <circle
            r={3}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            transform='matrix(1 0 0 -1 12 9)'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircle);
export default ForwardRef;
