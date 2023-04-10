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
            fillRule='evenodd'
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm4.584 5.376a.75.75 0 1 1 .832 1.248l-1.226.818c1.355.242 2.648.715 3.726 1.434 1.673 1.115 2.834 2.833 2.834 5.124a.75.75 0 0 1-1.5 0c0-1.709-.839-2.991-2.166-3.876-.996-.664-2.263-1.097-3.618-1.277l1.158 1.737a.75.75 0 1 1-1.248.832l-2-3a.75.75 0 0 1 .208-1.04l3-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReplyRectangle);
export default ForwardRef;
