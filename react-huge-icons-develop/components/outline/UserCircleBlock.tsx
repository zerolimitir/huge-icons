import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserCircleBlock = (
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
            d='M6.278 14.468a.75.75 0 1 0 .727 1.312l-.727-1.312Zm5.64.332a.75.75 0 0 0 .164-1.49l-.165 1.49Zm-4.913.98A8.21 8.21 0 0 1 11 14.75v-1.5a9.71 9.71 0 0 0-4.722 1.218l.727 1.312ZM11 14.75c.31 0 .617.017.918.05l.164-1.49A9.853 9.853 0 0 0 11 13.25v1.5Z'
        />
        <circle
            r={3}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            transform='matrix(1 0 0 -1 11 8)'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M19.395 14.25a9 9 0 1 0-5.145 5.145m5.145-5.145A4.002 4.002 0 0 1 18 22a4.002 4.002 0 0 1-3.75-2.605m5.145-5.145a4 4 0 0 0-5.145 5.145'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='m20.5 15.5-5 5' />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircleBlock);
export default ForwardRef;
