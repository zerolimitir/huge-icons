import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserCircleMinus = (
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
            d='M18.696 13.98a.75.75 0 0 0 1.399.541l-1.4-.542Zm-5.53 6.528a.75.75 0 1 0-.332-1.462l.332 1.462ZM20.75 11A9.75 9.75 0 0 0 11 1.25v1.5A8.25 8.25 0 0 1 19.25 11h1.5ZM11 1.25A9.75 9.75 0 0 0 1.25 11h1.5A8.25 8.25 0 0 1 11 2.75v-1.5ZM1.25 11A9.75 9.75 0 0 0 11 20.75v-1.5A8.25 8.25 0 0 1 2.75 11h-1.5Zm18.845 3.521A9.727 9.727 0 0 0 20.75 11h-1.5a8.227 8.227 0 0 1-.554 2.98l1.399.541ZM11 20.75a9.73 9.73 0 0 0 2.166-.242l-.332-1.462A8.278 8.278 0 0 1 11 19.25v1.5Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M20 18h-4' />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircleMinus);
export default ForwardRef;
