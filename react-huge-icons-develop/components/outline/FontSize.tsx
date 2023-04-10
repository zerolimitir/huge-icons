import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFontSize = (
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
            d='M18 8.75A3.25 3.25 0 0 1 21.25 12h1.5A4.75 4.75 0 0 0 18 7.25v1.5ZM14.75 12A3.25 3.25 0 0 1 18 8.75v-1.5A4.75 4.75 0 0 0 13.25 12h1.5ZM18 15.25A3.25 3.25 0 0 1 14.75 12h-1.5A4.75 4.75 0 0 0 18 16.75v-1.5Zm0 1.5A4.75 4.75 0 0 0 22.75 12h-1.5A3.25 3.25 0 0 1 18 15.25v1.5Zm-14-5.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5H4v1.5Z'
        />
        <path
            fill='currentColor'
            d='m7 4 .692-.288a.75.75 0 0 0-1.384 0L7 4ZM1.308 15.711a.75.75 0 0 0 1.384.577l-1.384-.577Zm10 .577a.75.75 0 0 0 1.384-.577l-1.384.577Zm-5-12.576-5 12 1.384.576 5-12-1.384-.576Zm6.384 12-5-12-1.384.576 5 12 1.384-.577Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M22 8v8' />
    </svg>
);
const ForwardRef = forwardRef(SvgFontSize);
export default ForwardRef;
