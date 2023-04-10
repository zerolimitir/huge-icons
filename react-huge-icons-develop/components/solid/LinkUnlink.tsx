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
            d='M2.917 7a.75.75 0 0 1 .75-.75H6.25V3.667a.75.75 0 1 1 1.5 0V7a.75.75 0 0 1-.75.75H3.667a.75.75 0 0 1-.75-.75ZM17 21.083a.75.75 0 0 0 .75-.75V17.75h2.583a.75.75 0 1 0 0-1.5H17a.75.75 0 0 0-.75.75v3.333c0 .415.336.75.75.75ZM15.03 10.03a.75.75 0 0 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06l5-5Zm3.106-4.166a3.964 3.964 0 0 0-5.606 0L10.864 7.53a.75.75 0 0 1-1.061-1.06l1.667-1.667a5.464 5.464 0 0 1 7.727 7.727l-1.667 1.667a.75.75 0 0 1-1.06-1.06l1.666-1.667a3.964 3.964 0 0 0 0-5.606ZM11.47 18.136a3.964 3.964 0 1 1-5.606-5.606l1.667-1.666a.75.75 0 0 0-1.06-1.061L4.802 11.47a5.464 5.464 0 0 0 7.727 7.727l1.667-1.667a.75.75 0 0 0-1.06-1.06l-1.668 1.666Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLinkUnlink);
export default ForwardRef;
