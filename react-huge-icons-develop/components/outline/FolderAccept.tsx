import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderAccept = (
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
            d='m11.067 3.8-.45.6.45-.6Zm1.866 1.4.45-.6-.45.6ZM9.47 12.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988ZM21.25 10v7h1.5v-7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17V7h-1.5v10h1.5ZM15.333 6.75H18v-1.5h-2.667v1.5ZM6 3.75h2.667v-1.5H6v1.5Zm4.617.65 1.866 1.4.9-1.2-1.866-1.4-.9 1.2Zm-1.95-.65a3.25 3.25 0 0 1 1.95.65l.9-1.2a4.75 4.75 0 0 0-2.85-.95v1.5Zm6.666 1.5a3.25 3.25 0 0 1-1.95-.65l-.9 1.2a4.75 4.75 0 0 0 2.85.95v-1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5Zm1.5-7A4.75 4.75 0 0 0 18 5.25v1.5A3.25 3.25 0 0 1 21.25 10h1.5Zm-20-3A3.25 3.25 0 0 1 6 3.75v-1.5A4.75 4.75 0 0 0 1.25 7h1.5Zm5.781 6.586 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderAccept);
export default ForwardRef;
