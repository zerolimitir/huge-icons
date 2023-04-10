import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInvoiceTorn = (
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
            d='M19 2H5a2 2 0 0 0-2 2v16.2a1.5 1.5 0 0 0 2.143 1.355l2.022-.96a2 2 0 0 1 1.678-.016l2.336 1.052a2 2 0 0 0 1.642 0l2.336-1.052a2 2 0 0 1 1.678.017l2.022.959A1.5 1.5 0 0 0 21 20.199V4a2 2 0 0 0-2-2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.25 7A.75.75 0 0 1 8 6.25h4a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInvoiceTorn);
export default ForwardRef;
