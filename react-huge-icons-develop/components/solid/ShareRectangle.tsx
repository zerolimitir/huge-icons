import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShareRectangle = (
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
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm7.416 5.376a.75.75 0 1 0-.832 1.248l1.226.818c-1.355.242-2.648.715-3.726 1.434C8.411 11.991 7.25 13.709 7.25 16a.75.75 0 0 0 1.5 0c0-1.709.839-2.991 2.166-3.876.996-.664 2.263-1.097 3.618-1.277l-1.158 1.737a.75.75 0 1 0 1.248.832l2-3a.75.75 0 0 0-.208-1.04l-3-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShareRectangle);
export default ForwardRef;
