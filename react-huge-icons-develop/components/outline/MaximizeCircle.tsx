import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMaximizeCircle = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M16 3h5m0 0v5m0-5L10 14'
        />
        <path
            fill='currentColor'
            d='M19.75 13a.75.75 0 0 0-1.5 0h1.5ZM11 5.75a.75.75 0 0 0 0-1.5v1.5ZM18.25 13A7.25 7.25 0 0 1 11 20.25v1.5A8.75 8.75 0 0 0 19.75 13h-1.5ZM11 20.25A7.25 7.25 0 0 1 3.75 13h-1.5A8.75 8.75 0 0 0 11 21.75v-1.5ZM3.75 13A7.25 7.25 0 0 1 11 5.75v-1.5A8.75 8.75 0 0 0 2.25 13h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeCircle);
export default ForwardRef;
