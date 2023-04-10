import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeTwentyFour = (
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
            d='M6 1.25A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h3a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18V6A3.25 3.25 0 0 1 6 2.75h12A3.25 3.25 0 0 1 21.25 6v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.28-.53V6A4.75 4.75 0 0 0 18 1.25H6ZM12.75 7a.75.75 0 0 0-1.5 0v4.46l-2.487.829a.75.75 0 1 0 .474 1.422l3-1A.75.75 0 0 0 12.75 12V7Zm0 11a1.25 1.25 0 1 1 2 1l-3.2 2.4a.75.75 0 0 0 .45 1.35h4a.75.75 0 1 0 0-1.5h-1.75l1.4-1.05a2.75 2.75 0 1 0-4.4-2.2v.5a.75.75 0 0 0 1.5 0V18ZM18 15.25a.75.75 0 0 1 .75.75v1c0 .69.56 1.25 1.25 1.25h1.25V16a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0v-2.25H20A2.75 2.75 0 0 1 17.25 17v-1a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeTwentyFour);
export default ForwardRef;
