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
            fill='currentColor'
            fillRule='evenodd'
            d='M18.136 5.864a3.964 3.964 0 0 0-5.606 0L10.864 7.53a.75.75 0 1 1-1.061-1.06l1.666-1.667a5.464 5.464 0 0 1 7.728 7.727l-1.667 1.667a.75.75 0 1 1-1.06-1.06l1.666-1.667a3.964 3.964 0 0 0 0-5.606Zm-3.484 3.484a.75.75 0 0 1 0 1.061l-4.243 4.243a.75.75 0 0 1-1.06-1.061l4.242-4.243a.75.75 0 0 1 1.06 0Zm-3.182 8.788a3.964 3.964 0 1 1-5.607-5.606l1.667-1.666a.75.75 0 1 0-1.06-1.061L4.802 11.47a5.464 5.464 0 0 0 7.727 7.727l1.667-1.667a.75.75 0 1 0-1.06-1.06l-1.668 1.666Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
