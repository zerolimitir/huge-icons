import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReplyRectangle = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.624 7.584a.75.75 0 0 0-1.04-.208l-3 2a.75.75 0 0 0-.208 1.04l2 3a.75.75 0 1 0 1.248-.832l-1.158-1.737c1.355.18 2.622.613 3.618 1.277 1.327.885 2.166 2.167 2.166 3.876a.75.75 0 0 0 1.5 0c0-2.29-1.161-4.009-2.834-5.124-1.078-.719-2.371-1.192-3.726-1.434l1.226-.818a.75.75 0 0 0 .208-1.04Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReplyRectangle);
export default ForwardRef;
