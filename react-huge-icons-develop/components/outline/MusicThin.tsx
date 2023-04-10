import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusicThin = (
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
            d='m18.317 2.976-.257-.705.257.705Zm-5.684 2.067-.256-.705.256.705ZM20.25 12.5a2.75 2.75 0 0 1-2.75 2.75v1.5a4.25 4.25 0 0 0 4.25-4.25h-1.5Zm-2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25v-1.5Zm-2.75-2.75a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25h1.5Zm2.75-2.75a2.75 2.75 0 0 1 2.75 2.75h1.5a4.25 4.25 0 0 0-4.25-4.25v1.5ZM9.25 18.5a2.75 2.75 0 0 1-2.75 2.75v1.5a4.25 4.25 0 0 0 4.25-4.25h-1.5ZM6.5 21.25a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25v-1.5ZM3.75 18.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25h1.5Zm2.75-2.75a2.75 2.75 0 0 1 2.75 2.75h1.5a4.25 4.25 0 0 0-4.25-4.25v1.5Zm15.25-3.25V4.855h-1.5V12.5h1.5ZM18.06 2.271l-5.683 2.067.512 1.41 5.684-2.067-.513-1.41Zm-8.81 6.53v9.7h1.5V8.8h-1.5Zm3.127-4.463A4.75 4.75 0 0 0 9.25 8.802h1.5a3.25 3.25 0 0 1 2.14-3.055l-.513-1.41Zm9.373.517a2.75 2.75 0 0 0-3.69-2.584l.513 1.41a1.25 1.25 0 0 1 1.677 1.174h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicThin);
export default ForwardRef;
