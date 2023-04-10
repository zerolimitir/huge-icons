import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTicket = (
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
            fillRule='evenodd'
            d='M6 21a4 4 0 0 1-4-4v-1c0-.552.46-.984.982-1.164a3.001 3.001 0 0 0 0-5.672C2.46 8.984 2 8.552 2 8V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1c0 .552-.46.984-.982 1.164a3.001 3.001 0 0 0 0 5.672c.522.18.982.612.982 1.164v1a4 4 0 0 1-4 4H6Zm4.75-15a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V6ZM10 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm.75-4.25a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTicket);
export default ForwardRef;
