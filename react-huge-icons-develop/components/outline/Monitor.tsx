import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMonitor = (
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
            d='M12.75 19a.75.75 0 0 0-1.5 0h1.5ZM9 21.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM7 6.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-11-9h12v-1.5H6v1.5ZM21.25 6v9h1.5V6h-1.5ZM18 18.25H6v1.5h12v-1.5ZM2.75 15V6h-1.5v9h1.5ZM6 18.25A3.25 3.25 0 0 1 2.75 15h-1.5A4.75 4.75 0 0 0 6 19.75v-1.5ZM21.25 15A3.25 3.25 0 0 1 18 18.25v1.5A4.75 4.75 0 0 0 22.75 15h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM11.25 19v3h1.5v-3h-1.5Zm.75 2.25H9v1.5h3v-1.5Zm0 1.5h3v-1.5h-3v1.5Zm-5-15h5v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Zm-5 4h20v-1.5H2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMonitor);
export default ForwardRef;
