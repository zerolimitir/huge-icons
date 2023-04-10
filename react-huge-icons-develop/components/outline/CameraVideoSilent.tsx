import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraVideoSilent = (
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
            d='M2.53 1.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm18.94 21.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM18.54 7.69l.548.513-.547-.513Zm1.95 8.402a.75.75 0 1 0 .586 1.381l-.586-1.38ZM16.25 13a.75.75 0 0 0 1.5 0h-1.5ZM8 3.25a.75.75 0 0 0 0 1.5v-1.5ZM4.578 5.077a.75.75 0 1 0-.657-1.349l.657 1.349ZM17.6 17.187a.75.75 0 1 0-1.452-.374l1.452.374ZM1.47 2.53l20 20 1.06-1.06-20-20-1.06 1.06Zm16.077 7.316 1.541-1.643-1.094-1.026-1.541 1.643 1.094 1.026Zm3.703-.788v5.884h1.5V9.058h-1.5Zm-2.162-.855c.775-.827 2.162-.279 2.162.855h1.5c0-2.493-3.051-3.7-4.756-1.881l1.094 1.026ZM13 19.25H6v1.5h7v-1.5ZM2.75 16V8h-1.5v8h1.5ZM6 19.25A3.25 3.25 0 0 1 2.75 16h-1.5A4.75 4.75 0 0 0 6 20.75v-1.5Zm7-14.5A3.25 3.25 0 0 1 16.25 8h1.5A4.75 4.75 0 0 0 13 3.25v1.5Zm8.25 10.192c0 .557-.323.965-.76 1.15l.586 1.381a2.718 2.718 0 0 0 1.674-2.53h-1.5ZM16.25 8v1.333h1.5V8h-1.5Zm0 1.333V13h1.5V9.333h-1.5ZM8 4.75h5v-1.5H8v1.5ZM3.92 3.728A4.75 4.75 0 0 0 1.25 8h1.5a3.25 3.25 0 0 1 1.828-2.923l-.657-1.349ZM13 20.75a4.752 4.752 0 0 0 4.6-3.563l-1.452-.374A3.252 3.252 0 0 1 13 19.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraVideoSilent);
export default ForwardRef;
