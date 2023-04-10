import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatNotification = (
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
            d='M13 3a9.01 9.01 0 0 1 2.385.32 4.5 4.5 0 0 0 6.295 6.295A9 9 0 0 1 13 21H6a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9h2Zm6 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatNotification);
export default ForwardRef;
