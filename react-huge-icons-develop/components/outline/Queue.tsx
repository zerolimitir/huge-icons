import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgQueue = (
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
            d='m5.894 11.553.336.67-.336-.67Zm3.528-1.764-.335-.67.335.67Zm0-3.578-.335.671.335-.67ZM5.894 4.447l.336-.67-.336.67ZM14 5.25a.75.75 0 0 0 0 1.5v-1.5Zm7 1.5a.75.75 0 0 0 0-1.5v1.5Zm-7 3.5a.75.75 0 0 0 0 1.5v-1.5Zm7 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 3.5a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18 3.5a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5ZM6.23 12.224l3.528-1.764-.671-1.342-3.528 1.764.67 1.342ZM9.758 5.54 6.23 3.776l-.671 1.342 3.528 1.764.67-1.342Zm0 4.92c2.027-1.014 2.027-3.906 0-4.92l-.671 1.342c.921.46.921 1.775 0 2.236l.67 1.342Zm-4.199.422A1.25 1.25 0 0 1 3.75 9.764h-1.5c0 2.044 2.151 3.374 3.98 2.46l-.671-1.342Zm.67-7.106c-1.828-.914-3.979.416-3.979 2.46h1.5c0-.93.978-1.534 1.809-1.118l.67-1.342ZM14 6.75h7v-1.5h-7v1.5Zm0 5h7v-1.5h-7v1.5Zm-11 5h18v-1.5H3v1.5Zm0 5h18v-1.5H3v1.5ZM2.25 6.236v3.528h1.5V6.236h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgQueue);
export default ForwardRef;
