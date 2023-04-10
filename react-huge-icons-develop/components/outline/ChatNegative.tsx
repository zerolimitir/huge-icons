import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatNegative = (
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
            d='M9.125 11.25a.75.75 0 0 0 0 1.5v-1.5Zm5.75 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3.459-9h1.167v-1.5h-1.167v1.5ZM3.166 17v-5h-1.5v5h1.5Zm9.417 3.25H6.416v1.5h6.167v-1.5ZM1.667 17a4.75 4.75 0 0 0 4.75 4.75v-1.5A3.25 3.25 0 0 1 3.167 17h-1.5Zm19.166-5a8.25 8.25 0 0 1-8.25 8.25v1.5a9.75 9.75 0 0 0 9.75-9.75h-1.5Zm-8.25-8.25a8.25 8.25 0 0 1 8.25 8.25h1.5a9.75 9.75 0 0 0-9.75-9.75v1.5Zm-1.167-1.5c-5.384 0-9.75 4.365-9.75 9.75h1.5a8.25 8.25 0 0 1 8.25-8.25v-1.5Zm-2.291 10.5h5.75v-1.5h-5.75v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatNegative);
export default ForwardRef;
