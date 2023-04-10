import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicrophoneMute = (
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
            d='M15 22.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM3.53 2.22a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm16.94 19.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM5.75 11a.75.75 0 0 0-1.5 0h1.5Zm14 0a.75.75 0 0 0-1.5 0h1.5Zm-1.86 3.095a.75.75 0 1 0 1.413.503l-1.413-.503Zm-2.64-2.345a.75.75 0 0 0 1.5 0h-1.5ZM7.767 3.844a.75.75 0 0 0 1.336.682l-1.336-.682ZM8.75 8a.75.75 0 0 0-1.5 0h1.5Zm6.71 7.255a.75.75 0 0 0-1.093-1.028l1.092 1.028Zm2.233 2.004a.75.75 0 0 0-1.102-1.018l1.102 1.018ZM11.25 19v3h1.5v-3h-1.5Zm.75 3.75h3v-1.5h-3v1.5Zm0-1.5H9v1.5h3v-1.5ZM2.47 3.28l18 18 1.06-1.06-18-18-1.06 1.06ZM4.25 11v1h1.5v-1h-1.5Zm15.5 1v-1h-1.5v1h1.5Zm-15.5 0A7.75 7.75 0 0 0 12 19.75v-1.5A6.25 6.25 0 0 1 5.75 12h-1.5Zm3 0A4.75 4.75 0 0 0 12 16.75v-1.5A3.25 3.25 0 0 1 8.75 12h-1.5ZM12 2.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25v1.5Zm7.303 11.848A7.72 7.72 0 0 0 19.75 12h-1.5a6.23 6.23 0 0 1-.36 2.095l1.413.503ZM16.75 11.75V6h-1.5v5.75h1.5ZM12 1.25a4.75 4.75 0 0 0-4.233 2.594l1.336.682A3.25 3.25 0 0 1 12 2.75v-1.5ZM7.25 8v4h1.5V8h-1.5ZM12 16.75a4.739 4.739 0 0 0 3.46-1.495l-1.093-1.028A3.239 3.239 0 0 1 12 15.25v1.5Zm0 3c2.25 0 4.278-.96 5.693-2.49l-1.102-1.02A6.231 6.231 0 0 1 12 18.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicrophoneMute);
export default ForwardRef;
