import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileAttachment = (
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
            d='M4 18h-.75H4Zm0-8h.75H4Zm4-4v.75V6Zm8 0v-.75V6Zm4 4h-.75.75Zm0 2.325h.75H20ZM10.236 22v-.75.75ZM8 22v.75V22Zm10.806-6.825.527.535-.527-.535Zm-5.763 5.675-.526-.534.526.534ZM12 18h.75H12Zm4-4v.75V14ZM8.25 6a.75.75 0 0 0 1.5 0h-1.5Zm4.5 2a.75.75 0 0 0-1.5 0h1.5Zm-8 10v-8h-1.5v8h1.5ZM8 6.75h8v-1.5H8v1.5ZM19.25 10v2.325h1.5V10h-1.5Zm-9.014 11.25H8v1.5h2.236v-1.5Zm8.044-6.61-5.764 5.676 1.053 1.069 5.764-5.675-1.053-1.07Zm-8.044 8.11a4.75 4.75 0 0 0 3.333-1.365l-1.053-1.07a3.25 3.25 0 0 1-2.28.935v1.5Zm9.014-10.425c0 .87-.35 1.705-.97 2.316l1.053 1.069a4.75 4.75 0 0 0 1.417-3.385h-1.5ZM4.75 10A3.25 3.25 0 0 1 8 6.75v-1.5A4.75 4.75 0 0 0 3.25 10h1.5Zm-1.5 8A4.75 4.75 0 0 0 8 22.75v-1.5A3.25 3.25 0 0 1 4.75 18h-1.5ZM16 6.75A3.25 3.25 0 0 1 19.25 10h1.5A4.75 4.75 0 0 0 16 5.25v1.5ZM12.75 22v-4h-1.5v4h1.5ZM16 14.75h4v-1.5h-4v1.5ZM12.75 18A3.25 3.25 0 0 1 16 14.75v-1.5A4.75 4.75 0 0 0 11.25 18h1.5Zm-3-12V5h-1.5v1h1.5Zm4.5-1v3.5h1.5V5h-1.5Zm-1.5 3.5V8h-1.5v.5h1.5Zm.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5ZM12 2.75A2.25 2.25 0 0 1 14.25 5h1.5A3.75 3.75 0 0 0 12 1.25v1.5ZM9.75 5A2.25 2.25 0 0 1 12 2.75v-1.5A3.75 3.75 0 0 0 8.25 5h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileAttachment);
export default ForwardRef;
