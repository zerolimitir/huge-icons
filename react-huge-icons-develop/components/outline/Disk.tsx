import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDisk = (
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
            d='m17.616 3.172.53-.53-.53.53Zm3.212 3.212-.53.53.53-.53ZM6.25 22v.75h1.5V22h-1.5Zm10 0v.75h1.5V22h-1.5ZM15 7.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm12.25 2.962V18h1.5V9.212h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 2.75h8.788v-1.5H6v1.5Zm11.086.952 3.212 3.212 1.06-1.06-3.212-3.213-1.06 1.06Zm-2.298-.952a3.25 3.25 0 0 1 2.298.952l1.06-1.06a4.75 4.75 0 0 0-3.358-1.392v1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5Zm1.5-8.788c0-1.26-.5-2.468-1.391-3.358l-1.06 1.06c.609.61.951 1.436.951 2.298h1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5Zm5 16v-6h-1.5v6h1.5ZM9 14.75h6v-1.5H9v1.5ZM16.25 16v6h1.5v-6h-1.5ZM15 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 15 13.25v1.5ZM7.75 16c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 6.25 16h1.5ZM15 6.25H9v1.5h6v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDisk);
export default ForwardRef;
