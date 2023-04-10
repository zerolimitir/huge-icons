import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArchiveSymmetrical = (
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
            d='M11.25 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h5.25V2Zm1.5 20H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-5.25v20Zm2-16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM5.5 5.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM14.75 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM5.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM18 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveSymmetrical);
export default ForwardRef;
