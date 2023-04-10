import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReplyRectangle = (
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
            d='M15.25 16a.75.75 0 0 0 1.5 0h-1.5ZM8 10l-.416-.624a.75.75 0 0 0-.208 1.04L8 10Zm1.376 3.416a.75.75 0 1 0 1.248-.832l-1.248.832Zm2.04-4.792a.75.75 0 1 0-.832-1.248l.832 1.248ZM16.75 16c0-2.29-1.161-4.009-2.834-5.124C12.266 9.776 10.111 9.25 8 9.25v1.5c1.889 0 3.735.475 5.084 1.374 1.327.885 2.166 2.167 2.166 3.876h1.5Zm-9.374-5.584 2 3 1.248-.832-2-3-1.248.832Zm1.04.208 3-2-.832-1.248-3 2 .832 1.248ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReplyRectangle);
export default ForwardRef;
