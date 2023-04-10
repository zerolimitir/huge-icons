import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeTeen = (
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
            d='M6 1.25A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h5.889a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18V6A3.25 3.25 0 0 1 6 2.75h12A3.25 3.25 0 0 1 21.25 6v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.28-.53V6A4.75 4.75 0 0 0 18 1.25H6Zm6 5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.513.711l-3 1a.75.75 0 1 1-.474-1.422l2.487-.83V7a.75.75 0 0 1 .75-.75ZM15.75 16a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm4.25-.75A2.75 2.75 0 0 0 17.25 18v2a2.75 2.75 0 1 0 5.5 0v-2A2.75 2.75 0 0 0 20 15.25ZM18.75 18a1.25 1.25 0 1 1 2.5 0v2a1.25 1.25 0 1 1-2.5 0v-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeTeen);
export default ForwardRef;
