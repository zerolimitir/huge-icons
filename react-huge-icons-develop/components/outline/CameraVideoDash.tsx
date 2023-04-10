import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraVideoDash = (
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
            d='M7 11.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm5-3.417-.547-.513-.203.217v.296H17Zm0 5.334h-.75v.296l.203.217.547-.513Zm1.54 1.643-.546.513.547-.513Zm0-8.62.548.513-.547-.513ZM6 4.75h7v-1.5H6v1.5ZM16.25 8v8h1.5V8h-1.5ZM13 19.25H6v1.5h7v-1.5ZM2.75 16V8h-1.5v8h1.5ZM6 19.25A3.25 3.25 0 0 1 2.75 16h-1.5A4.75 4.75 0 0 0 6 20.75v-1.5ZM16.25 16A3.25 3.25 0 0 1 13 19.25v1.5A4.75 4.75 0 0 0 17.75 16h-1.5ZM13 4.75A3.25 3.25 0 0 1 16.25 8h1.5A4.75 4.75 0 0 0 13 3.25v1.5Zm-7-1.5A4.75 4.75 0 0 0 1.25 8h1.5A3.25 3.25 0 0 1 6 4.75v-1.5Zm1 9.5h5v-1.5H7v1.5Zm10.547-2.904 1.541-1.643-1.094-1.026-1.541 1.643 1.094 1.026Zm3.703-.788v5.884h1.5V9.058h-1.5Zm-2.162 6.74-1.54-1.644-1.095 1.026 1.54 1.643 1.095-1.026Zm-1.338-1.131V9.333h-1.5v5.334h1.5Zm3.5.275c0 1.134-1.387 1.682-2.162.855l-1.094 1.026c1.705 1.819 4.756.612 4.756-1.88h-1.5Zm-2.162-6.74c.775-.826 2.162-.278 2.162.856h1.5c0-2.493-3.051-3.7-4.756-1.881l1.094 1.026Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraVideoDash);
export default ForwardRef;
