import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInvoicePercent = (
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
            fillRule='evenodd'
            d='M5 2h14a2 2 0 0 1 2 2v15.154a2 2 0 0 1-2.677 1.882l-1.562-.562a2 2 0 0 0-1.498.058L12.82 21.63a2 2 0 0 1-1.642 0l-2.442-1.1a2 2 0 0 0-1.498-.057l-1.562.562A2 2 0 0 1 3 19.154V4a2 2 0 0 1 2-2Zm4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.47-5.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInvoicePercent);
export default ForwardRef;
