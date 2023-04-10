import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoreVertical = (
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
            d='M13.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12h-1.5ZM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75v-1.5ZM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12h1.5ZM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25v1.5ZM13.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 4h-1.5ZM12 5.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 6.75v-1.5ZM10.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 4h1.5ZM12 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 1.25v1.5ZM13.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 20h-1.5ZM12 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 22.75v-1.5ZM10.75 20c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 20h1.5ZM12 18.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 17.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoreVertical);
export default ForwardRef;
