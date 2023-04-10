import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlaylist = (
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
            d='M21 22.75a.75.75 0 0 0 0-1.5v1.5Zm-9.494-9.165 3.146-1.573-.67-1.341-3.147 1.573.671 1.341Zm3.146-5.597-3.146-1.573-.67 1.341L13.98 9.33l.671-1.341Zm0 4.024c1.659-.829 1.659-3.195 0-4.024l-.67 1.341a.75.75 0 0 1 0 1.342l.67 1.341Zm-3.817.232a.75.75 0 0 1-1.085-.671h-1.5c0 1.673 1.76 2.76 3.256 2.012l-.67-1.341Zm.671-5.83c-1.496-.747-3.256.34-3.256 2.013h1.5a.75.75 0 0 1 1.085-.67l.671-1.342ZM21.75 14V6h-1.5v8h1.5ZM17 1.25H7v1.5h10v-1.5ZM2.25 6v14h1.5V6h-1.5ZM7 1.25A4.75 4.75 0 0 0 2.25 6h1.5A3.25 3.25 0 0 1 7 2.75v-1.5ZM21.75 6A4.75 4.75 0 0 0 17 1.25v1.5A3.25 3.25 0 0 1 20.25 6h1.5ZM17 17.25H5v1.5h12v-1.5ZM2.25 20A2.75 2.75 0 0 0 5 22.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM5 17.25A2.75 2.75 0 0 0 2.25 20h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0 5.5h16v-1.5H5v1.5ZM20.25 14A3.25 3.25 0 0 1 17 17.25v1.5A4.75 4.75 0 0 0 21.75 14h-1.5Zm-12-5.573v3.146h1.5V8.427h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaylist);
export default ForwardRef;
