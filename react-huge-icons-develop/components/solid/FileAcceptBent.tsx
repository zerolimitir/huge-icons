import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileAcceptBent = (
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
            d='M2 5v12.25c0 1.795 1.48 3.25 3.275 3.25 1.768 0 3.225-1.433 3.225-3.2a.8.8 0 0 1 .8-.8H18V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm11.494 2.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Zm8.383 11.554A4.002 4.002 0 0 1 18 22H6a4.002 4.002 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h10c.552 0 1.013.455.877.99Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileAcceptBent);
export default ForwardRef;
