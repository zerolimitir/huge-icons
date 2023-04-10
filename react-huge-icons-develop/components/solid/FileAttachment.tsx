import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileAttachment = (
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
            d='M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5V5Zm-1.5 1V5a3.75 3.75 0 1 1 7.5 0v1h-1.5v2.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 0-1.5 0v.5a2.25 2.25 0 0 0 4.5 0V6H16a4 4 0 0 1 4 4v2.325c0 .314-.037.624-.108.925H16A4.75 4.75 0 0 0 11.25 18v3.87c-.328.085-.669.13-1.014.13H8a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h.25Zm4.5 15.111c.101-.081.2-.169.293-.26l5.763-5.676c.136-.133.261-.275.375-.425H16A3.25 3.25 0 0 0 12.75 18v3.111Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileAttachment);
export default ForwardRef;
