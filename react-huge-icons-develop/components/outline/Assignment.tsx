import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAssignment = (
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
            d='M14 21.75a.75.75 0 0 0 0-1.5v1.5ZM21.25 14a.75.75 0 0 0 1.5 0h-1.5ZM3.5 21l-.6.45a.75.75 0 0 0 1.2 0L3.5 21Zm-.7-.933-.6.45.6-.45Zm1.4 0 .6.45-.6-.45ZM2 6.25a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm7-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 2.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 2.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm1.468 2.664a.75.75 0 0 0-.937 1.172l.937-1.172Zm1.285 1.988-.469.586.469-.586Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988ZM12 3.75h6v-1.5h-6v1.5ZM8.75 17V7h-1.5v10h1.5ZM14 20.25h-2v1.5h2v-1.5ZM21.25 7v7h1.5V7h-1.5Zm-14 10A4.75 4.75 0 0 0 12 21.75v-1.5A3.25 3.25 0 0 1 8.75 17h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 7.25 7h1.5A3.25 3.25 0 0 1 12 3.75v-1.5ZM4.25 4.5v13.167h1.5V4.5h-1.5Zm-1.5 13.167V4.5h-1.5v13.167h1.5Zm.85 1.95-.7.933 1.2.9.7-.933-1.2-.9Zm.5.933-.7-.933-1.2.9.7.933 1.2-.9Zm-2.85-2.883a4.75 4.75 0 0 0 .95 2.85l1.2-.9a3.25 3.25 0 0 1-.65-1.95h-1.5Zm3 0a3.25 3.25 0 0 1-.65 1.95l1.2.9a4.75 4.75 0 0 0 .95-2.85h-1.5ZM3.5 3.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 3.5 2.25v1.5Zm0-1.5A2.25 2.25 0 0 0 1.25 4.5h1.5a.75.75 0 0 1 .75-.75v-1.5ZM2 7.75h3v-1.5H2v1.5Zm10 0h6v-1.5h-6v1.5Zm0 4h6v-1.5h-6v1.5Zm0 4h3v-1.5h-3v1.5Zm3.531 3.836 1.753 1.402.937-1.171-1.753-1.403-.937 1.172Zm4.164 1.188 2.87-3.28-1.13-.988-2.87 3.28 1.13.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.13-.988a.25.25 0 0 1-.344.03l-.937 1.172Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAssignment);
export default ForwardRef;
