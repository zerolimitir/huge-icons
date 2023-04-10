import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLogin = (
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
            d='M15.53 10.53a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.823.763.53.53-.53-.53Zm0 1.414.53-.53-.53.53Zm.763 1.823a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM14 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5ZM18.75 16a.75.75 0 0 0-1.5 0h1.5Zm-1.5-8a.75.75 0 0 0 1.5 0h-1.5Zm-2.78 1.47-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.293 3.767 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm0-2.474a1.75 1.75 0 0 0 0 2.474l1.06-1.06a.25.25 0 0 1 0-.354l-1.06-1.06ZM14 12.75h8v-1.5h-8v1.5ZM9.25 8v8h1.5V8h-1.5Zm-6.5 8V8h-1.5v8h1.5ZM6 19.25A3.25 3.25 0 0 1 2.75 16h-1.5A4.75 4.75 0 0 0 6 20.75v-1.5ZM9.25 16A3.25 3.25 0 0 1 6 19.25v1.5A4.75 4.75 0 0 0 10.75 16h-1.5ZM6 4.75A3.25 3.25 0 0 1 9.25 8h1.5A4.75 4.75 0 0 0 6 3.25v1.5Zm0-1.5A4.75 4.75 0 0 0 1.25 8h1.5A3.25 3.25 0 0 1 6 4.75v-1.5Zm0 1.5h8v-1.5H6v1.5Zm8 14.5H6v1.5h8v-1.5ZM17.25 16A3.25 3.25 0 0 1 14 19.25v1.5A4.75 4.75 0 0 0 18.75 16h-1.5ZM14 4.75A3.25 3.25 0 0 1 17.25 8h1.5A4.75 4.75 0 0 0 14 3.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogin);
export default ForwardRef;
