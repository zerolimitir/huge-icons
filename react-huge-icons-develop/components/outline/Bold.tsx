import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBold = (
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
            d='M7 5v-.75a.75.75 0 0 0-.75.75H7Zm0 7h-.75c0 .414.336.75.75.75V12Zm0-6.25h4.5v-1.5H7v1.5Zm4.5 5.5H7v1.5h4.5v-1.5ZM7.75 12V5h-1.5v7h1.5Zm6.5-3.5a2.75 2.75 0 0 1-2.75 2.75v1.5a4.25 4.25 0 0 0 4.25-4.25h-1.5ZM11.5 5.75a2.75 2.75 0 0 1 2.75 2.75h1.5a4.25 4.25 0 0 0-4.25-4.25v1.5Z'
        />
        <path
            fill='currentColor'
            d='M7 12v-.75a.75.75 0 0 0-.75.75H7Zm0 7h-.75c0 .414.336.75.75.75V19Zm0-6.25h6.5v-1.5H7v1.5Zm6.5 5.5H7v1.5h6.5v-1.5ZM7.75 19v-7h-1.5v7h1.5Zm8.5-3.5a2.75 2.75 0 0 1-2.75 2.75v1.5a4.25 4.25 0 0 0 4.25-4.25h-1.5Zm-2.75-2.75a2.75 2.75 0 0 1 2.75 2.75h1.5a4.25 4.25 0 0 0-4.25-4.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;
