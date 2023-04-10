import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatting = (
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
            d='M10.889 3H9.778C5.482 3 2 6.526 2 10.875v3.375c0 1.243.995 2.25 2.222 2.25h6.667c3.682 0 6.667-3.022 6.667-6.75a6.85 6.85 0 0 0-.183-1.577C16.67 5.206 14.034 3 10.889 3Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10.889 16.5c3.682 0 6.666-3.022 6.666-6.75a6.85 6.85 0 0 0-.183-1.577A7.88 7.88 0 0 1 22 15.375v3.375c0 1.243-.995 2.25-2.222 2.25H13.11c-2.903 0-5.372-1.878-6.287-4.5h4.065Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatting);
export default ForwardRef;
