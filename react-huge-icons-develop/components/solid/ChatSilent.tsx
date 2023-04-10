import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatSilent = (
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
            d='M3.53 2.47a.75.75 0 0 0-1.06 1.06l2.136 2.136A8.971 8.971 0 0 0 2 12v5a4 4 0 0 0 4 4h7a8.95 8.95 0 0 0 5.25-1.69l2.22 2.22a.75.75 0 1 0 1.06-1.06l-5.72-5.72H7a.75.75 0 0 1 0-1.5h7.31l-2.5-2.5H7a.75.75 0 0 1 0-1.5h3.31L3.53 2.47ZM11 3h2a9 9 0 0 1 7.686 13.686L7.646 3.646A8.975 8.975 0 0 1 11 3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSilent);
export default ForwardRef;
