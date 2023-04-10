import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLink = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M14.121 9.879 9.878 14.12'
        />
        <path
            fill='currentColor'
            d='M9.803 6.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.667 6.666a.75.75 0 0 0 1.06 1.061l-1.06-1.06ZM10.864 7.53l1.666-1.666-1.06-1.061L9.803 6.47l1.06 1.06Zm7.273 3.94-1.667 1.666 1.06 1.061 1.667-1.667-1.06-1.06Zm0-5.606a3.964 3.964 0 0 1 0 5.606l1.06 1.06a5.464 5.464 0 0 0 0-7.727l-1.06 1.06Zm-5.607 0a3.964 3.964 0 0 1 5.607 0l1.06-1.061a5.464 5.464 0 0 0-7.727 0l1.06 1.06Zm1.667 11.666a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM7.53 10.864a.75.75 0 0 0-1.06-1.061l1.06 1.06Zm5.606 5.606-1.666 1.666 1.06 1.061 1.667-1.667-1.06-1.06Zm-7.273-3.94 1.667-1.666-1.06-1.061-1.667 1.667 1.06 1.06Zm0 5.606a3.964 3.964 0 0 1 0-5.606l-1.06-1.06a5.464 5.464 0 0 0 0 7.727l1.06-1.06Zm5.606 0a3.964 3.964 0 0 1-5.606 0l-1.06 1.061a5.464 5.464 0 0 0 7.727 0l-1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
