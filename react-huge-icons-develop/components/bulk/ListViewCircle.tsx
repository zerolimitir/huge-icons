import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgListViewCircle = (
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
        <path fill='currentColor' d='M4.5 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z' />
        <path
            fill='currentColor'
            d='M4.5 18.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.25 6.25A.75.75 0 0 1 10 5.5h6A.75.75 0 0 1 16 7h-6a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.25 14.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.25 9.75A.75.75 0 0 1 10 9h12a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.25 17.75A.75.75 0 0 1 10 17h12a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgListViewCircle);
export default ForwardRef;
