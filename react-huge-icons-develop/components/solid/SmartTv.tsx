import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartTv = (
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
            d='M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h5.25v2.27c-1.417.082-2.824.434-4.499 1.023a.75.75 0 1 0 .498 1.415c1.843-.649 3.236-.956 4.638-.958 1.406-.002 2.878.303 4.878.962a.75.75 0 0 0 .47-1.424c-1.707-.563-3.124-.905-4.485-1.006V17H18a4 4 0 0 0 4-4V7Zm-10 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0-6a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 6.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 7.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 9.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 10.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartTv);
export default ForwardRef;
