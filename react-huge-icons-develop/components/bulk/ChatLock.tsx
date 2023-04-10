import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatLock = (
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
            d='M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.403 10.285V9.52a2.597 2.597 0 0 1 5.194 0v.766a3.001 3.001 0 0 1 2.275 2.912v.618a3 3 0 0 1-3 3h-3.744a3 3 0 0 1-3-3v-.618c0-1.407.968-2.587 2.275-2.912Zm1.3-.088v-.678a1.297 1.297 0 1 1 2.594 0v.678h-2.594Zm-.575 1.3h3.744a1.7 1.7 0 0 1 1.7 1.7v.618a1.7 1.7 0 0 1-1.7 1.7h-3.744a1.7 1.7 0 0 1-1.7-1.7v-.618a1.7 1.7 0 0 1 1.7-1.7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatLock);
export default ForwardRef;
