import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLinkUnlink = (
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
            d='M17 21.083a.75.75 0 0 0 .75-.75V17.75h2.583a.75.75 0 0 0 0-1.5H17a.75.75 0 0 0-.75.75v3.333c0 .415.336.75.75.75ZM2.917 7a.75.75 0 0 1 .75-.75H6.25V3.667a.75.75 0 1 1 1.5 0V7a.75.75 0 0 1-.75.75H3.667a.75.75 0 0 1-.75-.75ZM15.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.137 5.864a3.964 3.964 0 0 0-5.607 0L10.864 7.53a.75.75 0 1 1-1.06-1.06l1.666-1.667a5.464 5.464 0 0 1 7.727 7.728l-1.666 1.666a.75.75 0 0 1-1.061-1.06l1.667-1.667a3.964 3.964 0 0 0 0-5.606ZM5.863 18.136a3.964 3.964 0 0 0 5.606 0l1.667-1.666a.75.75 0 0 1 1.06 1.06l-1.666 1.667a5.464 5.464 0 0 1-7.727-7.727L6.47 9.803a.75.75 0 1 1 1.06 1.06L5.863 12.53a3.964 3.964 0 0 0 0 5.606Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLinkUnlink);
export default ForwardRef;
