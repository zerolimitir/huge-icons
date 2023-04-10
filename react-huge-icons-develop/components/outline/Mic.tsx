import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMic = (
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
            d='M13 7.25a.75.75 0 0 0 0 1.5v-1.5Zm0 5a.75.75 0 0 0 0 1.5v-1.5Zm7.75-.25a.75.75 0 0 0-1.5 0h1.5Zm-16 0a.75.75 0 0 0-1.5 0h1.5Zm3 2V7h-1.5v7h1.5Zm8.5-7v1h1.5V7h-1.5Zm.75.25h-4v1.5h4v-1.5Zm-.75.75v5h1.5V8h-1.5Zm0 5v1h1.5v-1h-1.5Zm.75-.75h-4v1.5h4v-1.5Zm-5 6A4.25 4.25 0 0 1 7.75 14h-1.5A5.75 5.75 0 0 0 12 19.75v-1.5Zm0 1.5A5.75 5.75 0 0 0 17.75 14h-1.5A4.25 4.25 0 0 1 12 18.25v1.5Zm0-17A4.25 4.25 0 0 1 16.25 7h1.5A5.75 5.75 0 0 0 12 1.25v1.5Zm0-1.5A5.75 5.75 0 0 0 6.25 7h1.5A4.25 4.25 0 0 1 12 2.75v-1.5ZM19.25 12v2h1.5v-2h-1.5Zm-14.5 2v-2h-1.5v2h1.5ZM12 21.25A7.25 7.25 0 0 1 4.75 14h-1.5A8.75 8.75 0 0 0 12 22.75v-1.5Zm0 1.5A8.75 8.75 0 0 0 20.75 14h-1.5A7.25 7.25 0 0 1 12 21.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMic);
export default ForwardRef;
