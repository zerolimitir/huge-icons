import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserCircleRemove = (
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
            d='M7 15c2.946-1.32 4.7-1.347 8 0'
        />
        <circle
            r={3}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            transform='matrix(1 0 0 -1 11 8)'
        />
        <path
            fill='currentColor'
            d='M19.046 12.834a.75.75 0 1 0 1.462.332l-1.462-.332Zm-5.88 7.674a.75.75 0 1 0-.332-1.462l.332 1.462ZM20.75 11A9.75 9.75 0 0 0 11 1.25v1.5A8.25 8.25 0 0 1 19.25 11h1.5ZM11 1.25A9.75 9.75 0 0 0 1.25 11h1.5A8.25 8.25 0 0 1 11 2.75v-1.5ZM1.25 11A9.75 9.75 0 0 0 11 20.75v-1.5A8.25 8.25 0 0 1 2.75 11h-1.5Zm19.258 2.166A9.782 9.782 0 0 0 20.75 11h-1.5a8.26 8.26 0 0 1-.204 1.834l1.462.332ZM11 20.75a9.73 9.73 0 0 0 2.166-.242l-.332-1.462A8.278 8.278 0 0 1 11 19.25v1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m19.414 16.586-2.828 2.828m2.828 0-2.828-2.828'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircleRemove);
export default ForwardRef;
