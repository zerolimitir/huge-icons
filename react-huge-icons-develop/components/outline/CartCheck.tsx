import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCartCheck = (
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
            d='M10.25 20.5a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm9.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-7.031-9.336a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988Zm-7.033 2.092 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172ZM2 1.25a.75.75 0 0 0 0 1.5v-1.5Zm4 3.5h12v-1.5H6v1.5ZM21.25 8v5h1.5V8h-1.5ZM18 16.25h-8v1.5h8v-1.5ZM6.75 13V4h-1.5v9h1.5ZM4 1.25H2v1.5h2v-1.5ZM6.75 4A2.75 2.75 0 0 0 4 1.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM10 16.25A3.25 3.25 0 0 1 6.75 13h-1.5A4.75 4.75 0 0 0 10 17.75v-1.5ZM21.25 13A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartCheck);
export default ForwardRef;
