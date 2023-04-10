import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVideoCall = (
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
            d='M12.75 19a.75.75 0 0 0-1.5 0h1.5ZM9 21.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM14.75 8A2.75 2.75 0 0 0 12 5.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM12 5.25A2.75 2.75 0 0 0 9.25 8h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM9.25 8A2.75 2.75 0 0 0 12 10.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM12 10.75A2.75 2.75 0 0 0 14.75 8h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm-6-8h12v-1.5H6v1.5ZM21.25 6v9h1.5V6h-1.5ZM18 18.25H6v1.5h12v-1.5ZM2.75 15V6h-1.5v9h1.5ZM6 18.25A3.25 3.25 0 0 1 2.75 15h-1.5A4.75 4.75 0 0 0 6 19.75v-1.5ZM21.25 15A3.25 3.25 0 0 1 18 18.25v1.5A4.75 4.75 0 0 0 22.75 15h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM11.25 19v3h1.5v-3h-1.5Zm.75 2.25H9v1.5h3v-1.5Zm0 1.5h3v-1.5h-3v1.5Zm-2.5-10h5v-1.5h-5v1.5Zm5 1.5h-5v1.5h5v-1.5Zm-5 0a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm5.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-5-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoCall);
export default ForwardRef;
