import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShareRectangle = (
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
            d='M7.25 16a.75.75 0 0 0 1.5 0h-1.5ZM16 10l.624.416a.75.75 0 0 0-.208-1.04L16 10Zm-2.624 2.584a.75.75 0 1 0 1.248.832l-1.248-.832Zm.04-5.208a.75.75 0 1 0-.832 1.248l.832-1.248ZM8.75 16c0-1.71.839-2.991 2.166-3.876 1.35-.9 3.195-1.374 5.084-1.374v-1.5c-2.111 0-4.265.526-5.916 1.626C8.411 11.991 7.25 13.709 7.25 16h1.5Zm6.626-6.416-2 3 1.248.832 2-3-1.248-.832Zm1.04-.208-3-2-.832 1.248 3 2 .832-1.248ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShareRectangle);
export default ForwardRef;
