import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookMarkedWritten = (
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
            d='M20 13h.75v-.75H20V13Zm-8 3v-.75a.75.75 0 0 0-.75.75H12Zm4 0h.75a.75.75 0 0 0-.75-.75V16Zm0 6-.53.53a.75.75 0 0 0 1.28-.53H16Zm-4 0h-.75a.75.75 0 0 0 1.28.53L12 22Zm2-2 .53-.53a.75.75 0 0 0-1.06 0L14 20ZM8 5.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5-7.5h10v-1.5H7v1.5ZM19.25 5v11h1.5V5h-1.5ZM4.75 16V5h-1.5v11h1.5ZM17 18.25h-.429v1.5H17v-1.5Zm-5 0H7v1.5h5v-1.5ZM3.25 16A3.75 3.75 0 0 0 7 19.75v-1.5A2.25 2.25 0 0 1 4.75 16h-1.5Zm16 0A2.25 2.25 0 0 1 17 18.25v1.5A3.75 3.75 0 0 0 20.75 16h-1.5ZM17 2.75A2.25 2.25 0 0 1 19.25 5h1.5A3.75 3.75 0 0 0 17 1.25v1.5ZM7 1.25A3.75 3.75 0 0 0 3.25 5h1.5A2.25 2.25 0 0 1 7 2.75v-1.5Zm0 12.5h13v-1.5H7v1.5ZM19.25 13v3h1.5v-3h-1.5ZM7 12.25A3.75 3.75 0 0 0 3.25 16h1.5A2.25 2.25 0 0 1 7 13.75v-1.5Zm5 4.5h4v-1.5h-4v1.5Zm3.25-.75v6h1.5v-6h-1.5Zm-2.5 6v-6h-1.5v6h1.5Zm3.78-.53-2-2-1.06 1.06 2 2 1.06-1.06Zm-3.06-2-2 2 1.06 1.06 2-2-1.06-1.06ZM8 6.75h8v-1.5H8v1.5Zm0 3.5h4v-1.5H8v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookMarkedWritten);
export default ForwardRef;
